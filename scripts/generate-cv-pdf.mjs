// Generates a real, well-typeset one-page CV PDF per language, straight
// from src/content.js (single source of truth, nothing duplicated by hand).
// Needs Playwright installed locally (not a project dependency, see the
// "CV PDFs" note in CLAUDE.md): `npm install -D playwright && npx playwright
// install chromium`, then `node scripts/generate-cv-pdf.mjs`, then remove
// playwright from package.json/package-lock again before committing.
//
// Curated on purpose: this is a document a recruiter hands to their client,
// not the full site. Recent roles (index 0-3 in `timeline`) get 1-2 bullets
// each, everything older collapses into one "earlier" line, and the
// "still growing" skills group is left out (that belongs on the honest,
// exploratory web version, not a one-page pitch document).

import { chromium } from "playwright";
import { profile, copy, timeline, formatPeriod } from "../src/content.js";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "public", "cv");
const RECENT_COUNT = 4; // matches EARLIER_FROM in src/components/Experience.jsx
const RECENT_JOB_IDS = timeline.slice(0, RECENT_COUNT).map((j) => j.id);
const EARLIER_JOBS = timeline.slice(RECENT_COUNT);

const LABELS = {
  en: { contact: "Contact", profile: "Profile", experience: "Experience", skills: "Skills", education: "Education", languages: "Languages", earlier: "Earlier" },
  es: { contact: "Contacto", profile: "Perfil", experience: "Experiencia", skills: "Habilidades", education: "Educación", languages: "Idiomas", earlier: "Antes" },
  pt: { contact: "Contato", profile: "Perfil", experience: "Experiência", skills: "Habilidades", education: "Educação", languages: "Idiomas", earlier: "Antes" },
};

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildHtml(lang) {
  const t = copy[lang];
  const l = LABELS[lang];
  const experienceItems = RECENT_JOB_IDS.map((id) => {
    const job = timeline.find((j) => j.id === id);
    const item = t.experience.items[id];
    return { job, item };
  });
  const earlierLine = EARLIER_JOBS.map((j) => `${j.company} (${formatPeriod(j.from, j.to, lang)})`).join(" &middot; ");
  const skillGroups = t.skills.groups.slice(0, 3); // drop "still growing", not for this document

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8" />
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    color: #1c2128;
    font-size: 9.3pt;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
  }
  .page { width: 210mm; min-height: 297mm; display: flex; }
  .rail {
    width: 62mm;
    background: #14213d;
    color: #eef1f8;
    padding: 10mm 8mm 5mm 10mm;
    line-height: 1.28;
  }
  .main { width: 148mm; padding: 14mm 12mm 10mm 10mm; }

  .name { font-size: 17pt; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 2mm; color: #fff; }
  .title { font-size: 9.6pt; font-weight: 500; color: #9db2e0; margin: 0 0 7mm; line-height: 1.35; }

  .rail h2 {
    font-size: 7.3pt;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #7f93c4;
    font-weight: 700;
    margin: 3.4mm 0 1.6mm;
  }
  .rail h2:first-of-type { margin-top: 0; }
  .rail-item { font-size: 8.3pt; margin-bottom: 1mm; line-height: 1.25; word-break: break-word; }
  .rail-item a { color: #eef1f8; text-decoration: none; }
  .rail-list { margin: 0 0 1mm; padding: 0; list-style: none; }
  .rail-list li { font-size: 8.3pt; margin-bottom: 1mm; line-height: 1.25; }
  .rail-skill { margin-bottom: 2mm; }
  .rail-skill-label { font-size: 7.7pt; font-weight: 700; color: #dde4f4; display: block; margin-bottom: 0.4mm; }
  .rail-skill-text { font-size: 7.9pt; color: #c3cde6; line-height: 1.26; }
  .status-badge {
    display: inline-block;
    font-size: 7.1pt;
    font-weight: 600;
    color: #9be8b0;
    border: 0.5pt solid #3a5a4a;
    background: #1c3329;
    padding: 1mm 2.1mm;
    border-radius: 2mm;
    margin-bottom: 3.6mm;
  }

  .main h2 {
    font-size: 9pt;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #14213d;
    font-weight: 700;
    border-bottom: 0.8pt solid #d7dce6;
    padding-bottom: 1.6mm;
    margin: 8.5mm 0 4mm;
  }
  .main h2:first-of-type { margin-top: 0; }
  .summary { font-size: 10.4pt; line-height: 1.6; margin: 0 0 3mm; color: #2b3240; }
  .toptal-line { font-size: 9.4pt; margin: 3mm 0 0; font-style: italic; color: #56617a; line-height: 1.5; }

  .job { margin-bottom: 6.5mm; }
  .job:last-child { margin-bottom: 0; }
  .job-head { display: flex; justify-content: space-between; align-items: baseline; gap: 3mm; }
  .job-role { font-size: 10.6pt; font-weight: 700; color: #14213d; }
  .job-period { font-size: 9pt; color: #6b7488; white-space: nowrap; }
  .job-company { font-size: 9.6pt; color: #3a4358; font-weight: 600; margin-bottom: 1.8mm; }
  .job-note { font-size: 8.8pt; color: #6b7488; font-weight: 400; }
  .job ul { margin: 1.8mm 0 0; padding-left: 4.4mm; }
  .job li { margin-bottom: 1.6mm; font-size: 9.8pt; line-height: 1.5; }

  .earlier-line { font-size: 9.2pt; color: #56617a; margin-top: 2mm; line-height: 1.5; }
  .earlier-line b { color: #14213d; }

  .edu-item, .lang-item { font-size: 8.4pt; margin-bottom: 1.6mm; }
</style>
</head>
<body>
  <div class="page">
    <aside class="rail">
      <div class="name">${esc(profile.name)}</div>
      <div class="title">${esc(t.hero.title)}</div>

      <span class="status-badge">${esc(t.ui.status)}</span>

      <h2>${esc(l.contact)}</h2>
      <div class="rail-item">${esc(profile.email)}</div>
      <div class="rail-item">${esc(profile.phoneLabel)}</div>
      <div class="rail-item">linkedin.com/in/paviafernando</div>
      <div class="rail-item">${esc(profile.site.replace("https://", ""))}</div>

      <h2>${esc(l.skills)}</h2>
      ${skillGroups
        .map(
          (g) => `<div class="rail-skill">
        <span class="rail-skill-label">${esc(g.title)}</span>
        <span class="rail-skill-text">${esc(g.text)}</span>
      </div>`
        )
        .join("")}

      <h2>${esc(l.education)}</h2>
      <ul class="rail-list">
        ${t.about.education
          .slice(0, 3)
          .map((e) => `<li>${esc(e)}</li>`)
          .join("")}
      </ul>

      <h2>${esc(l.languages)}</h2>
      <div class="rail-item">${t.about.languages.map((e) => esc(e)).join(" &middot; ")}</div>
    </aside>

    <main class="main">
      <h2>${esc(l.profile)}</h2>
      <p class="summary">${esc(t.hero.intro)}</p>
      <p class="toptal-line">${esc(t.toptal.line)}</p>

      <h2>${esc(l.experience)}</h2>
      ${experienceItems
        .map(({ job, item }) => {
          const bullets = item.bullets.slice(0, 2);
          return `<div class="job">
          <div class="job-head">
            <span class="job-role">${esc(item.role)}</span>
            <span class="job-period">${esc(formatPeriod(job.from, job.to, lang))}</span>
          </div>
          <div class="job-company">${esc(job.company)} <span class="job-note">&middot; ${esc(item.note)}</span></div>
          <ul>${bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
        </div>`;
        })
        .join("")}
      <p class="earlier-line"><b>${esc(l.earlier)}:</b> ${earlierLine}</p>
    </main>
  </div>
</body>
</html>`;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  for (const lang of ["en", "es", "pt"]) {
    const page = await browser.newPage();
    await page.setContent(buildHtml(lang), { waitUntil: "networkidle" });
    const outFile = path.join(OUT_DIR, `Fernando-Pavia-CV-${lang}.pdf`);
    await page.pdf({
      path: outFile,
      format: "A4",
      printBackground: true,
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });
    await page.close();
    console.log("Wrote", outFile);
  }
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
