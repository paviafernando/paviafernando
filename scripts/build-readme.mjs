// Builds README.md (English), README.es.md and README.pt.md from src/content.js,
// plus one banner image per language in /assets.
// Run with: npm run readme
import { writeFileSync, mkdirSync } from "node:fs";
import { copy, profile, projects, timeline, roleIds, formatPeriod, languages, themes } from "../src/content.js";

const FILES = { en: "README.md", es: "README.es.md", pt: "README.pt.md" };

const text = {
  en: {
    tagline: "Full-stack developer and technical lead",
    invite: "The best way to read my CV is the site",
    inviteBody:
      "It has five themes, light and dark mode, and it works in English, Spanish and Portuguese. This page has the same content in plain text.",
    button: "Visit the site",
    about: "About me",
    roles: "Roles I've had in projects",
    role: "Role",
    example: "Example",
    badgeLabel: "open to work",
    badgeMessage: "part-time and contract",
    contactLine: "Email, LinkedIn or WhatsApp",
    repoTitle: "About this repository",
    repoBody:
      "The site is a React app made with Vite. It has no backend. All the text, in three languages, is in `src/content.js`. The README files are generated from that same file.",
    run: "Run it locally",
    deploy: "Deploy",
    deployBody: "Import the repository in Vercel. The Vite preset works with no changes.",
    themesLine: `Themes: ${themes.map((x) => x.name).join(", ")}. Each one has light and dark mode.`,
    cvLine: "The Download CV button prints the page with a clean CV layout. Choose Save as PDF in the print window.",
    other: "Other languages",
    stack: "Stack of the site",
  },
  es: {
    tagline: "Desarrollador full-stack y líder técnico",
    invite: "La mejor forma de leer mi CV es el sitio",
    inviteBody:
      "Tiene cinco temas, modo claro y oscuro, y funciona en inglés, español y portugués. Esta página tiene el mismo contenido en texto simple.",
    button: "Visitar el sitio",
    about: "Sobre mí",
    roles: "Roles que tuve en proyectos",
    role: "Rol",
    example: "Ejemplo",
    badgeLabel: "disponible",
    badgeMessage: "part-time y por contrato",
    contactLine: "Email, LinkedIn o WhatsApp",
    repoTitle: "Sobre este repositorio",
    repoBody:
      "El sitio es una app de React hecha con Vite. No tiene backend. Todo el texto, en tres idiomas, está en `src/content.js`. Los README se generan desde ese mismo archivo.",
    run: "Probarlo en local",
    deploy: "Deploy",
    deployBody: "Importá el repositorio en Vercel. El preset de Vite funciona sin cambios.",
    themesLine: `Temas: ${themes.map((x) => x.name).join(", ")}. Cada uno tiene modo claro y oscuro.`,
    cvLine: "El botón Descargar CV imprime la página con un formato limpio de CV. En la ventana de impresión elegí Guardar como PDF.",
    other: "Otros idiomas",
    stack: "Stack del sitio",
  },
  pt: {
    tagline: "Desenvolvedor full-stack e líder técnico",
    invite: "A melhor forma de ler meu CV é o site",
    inviteBody:
      "Ele tem cinco temas, modo claro e escuro, e funciona em inglês, espanhol e português. Esta página tem o mesmo conteúdo em texto simples.",
    button: "Visitar o site",
    about: "Sobre mim",
    roles: "Papéis que tive em projetos",
    role: "Papel",
    example: "Exemplo",
    badgeLabel: "disponível",
    badgeMessage: "part-time e por contrato",
    contactLine: "E-mail, LinkedIn ou WhatsApp",
    repoTitle: "Sobre este repositório",
    repoBody:
      "O site é um app React feito com Vite. Não tem backend. Todo o texto, em três idiomas, está em `src/content.js`. Os README são gerados a partir desse mesmo arquivo.",
    run: "Rodar localmente",
    deploy: "Deploy",
    deployBody: "Importe o repositório na Vercel. O preset do Vite funciona sem mudanças.",
    themesLine: `Temas: ${themes.map((x) => x.name).join(", ")}. Cada um tem modo claro e escuro.`,
    cvLine: "O botão Baixar CV imprime a página com um layout limpo de CV. Na janela de impressão, escolha Salvar como PDF.",
    other: "Outros idiomas",
    stack: "Stack do site",
  },
};

const esc = (s) => s.replace(/\|/g, "\\|");
const badge = (label, message, color, logo) =>
  `![${label}](https://img.shields.io/badge/${encodeURIComponent(label).replace(/-/g, "--")}-${encodeURIComponent(message).replace(/-/g, "--")}-${color}?style=flat-square${logo ? `&logo=${logo}&logoColor=white` : ""})`;
const stackBadge = (name, logo, color) =>
  `![${name}](https://img.shields.io/badge/${encodeURIComponent(name)}-${color}?style=flat-square&logo=${logo}&logoColor=white)`;

function banner(lang) {
  const t = text[lang];
  const xml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="280" viewBox="0 0 1200 280" role="img" aria-label="${xml(profile.name)}">
  <rect width="1200" height="280" rx="18" fill="#0b1b2e"/>
  <rect x="60" y="64" width="72" height="6" rx="3" fill="#74acdf"/>
  <rect x="140" y="64" width="24" height="6" rx="3" fill="#f6b40e"/>
  <text x="60" y="152" font-family="Manrope, Inter, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="78" font-weight="800" fill="#eaf2fa" letter-spacing="-2">${xml(profile.name)}</text>
  <text x="62" y="205" font-family="Inter, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="30" fill="#9fb3c8">${xml(t.tagline)}</text>
  <text x="62" y="245" font-family="Inter, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="20" fill="#74acdf">.NET   Angular   React   Node.js   AI agents</text>
</svg>
`;
}

function readme(lang) {
  const c = copy[lang];
  const t = text[lang];
  const langLinks = languages
    .map((l) => (l.code === lang ? `**${l.name}**` : `[${l.name}](${FILES[l.code]})`))
    .join(" | ");

  const siteBtn = `[![${t.button}](https://img.shields.io/badge/${encodeURIComponent(t.button).replace(/-/g, "--")}-${encodeURIComponent(profile.site.replace("https://", "")).replace(/-/g, "--")}-1a68ab?style=for-the-badge)](${profile.site})`;

  const lines = [];
  const push = (...x) => lines.push(...x);

  push(`<div align="center">`, "");
  push(`<img src="assets/banner.${lang}.svg" alt="${profile.name}" width="100%">`, "");
  push(
    [
      badge(t.badgeLabel, t.badgeMessage, "2f6b4f"),
      badge("English", "Cambridge C2", "1a68ab"),
      badge("timezone", "UTC-3", "555555"),
      `[${badge("Toptal", "AI engineer", "204ecf")}](${profile.toptal.profile})`,
    ].join(" "),
    ""
  );
  push(
    [
      stackBadge(".NET", "dotnet", "512BD4"),
      stackBadge("Angular", "angular", "DD0031"),
      stackBadge("React", "react", "20232A"),
      stackBadge("Node.js", "nodedotjs", "339933"),
      stackBadge("PostgreSQL", "postgresql", "336791"),
      stackBadge("Azure", "microsoftazure", "0078D4"),
    ].join(" "),
    ""
  );
  push(langLinks, "", `</div>`, "");

  push(`## ${t.invite}`, "");
  push(t.inviteBody, "");
  push(`<div align="center">`, "", siteBtn, "", `</div>`, "");
  push("---", "");

  push(`## ${t.about}`, "");
  push(c.hero.intro, "");
  push(`${c.toptal.line} [${c.toptal.link}](${profile.toptal.profile})`, "");
  push(`**${c.hero.stats.map((s) => `${s.value} ${s.label}`).join(" | ")}**`, "");

  push(`### ${t.roles}`, "");
  push(`| ${t.role} | ${t.example} |`, "| --- | --- |");
  for (const id of roleIds) {
    const r = c.roles[id];
    push(`| **${esc(r.name)}**<br><sub>${esc(r.where)}</sub> | ${esc(r.text)} |`);
  }
  push("");

  push(`### ${c.how.title}`, "");
  for (const it of c.how.items) push(`**${it.title}.** ${it.text}`, "");

  push(`## ${c.work.title}`, "");
  for (const p of projects) {
    const link = p.url ? `[${p.name}](${p.url})` : p.name;
    let body = c.work.items[p.id];
    if (!p.url && p.id === "academy") body += ` ${c.ui.soon}`;
    push(`**${link}**`, "", body, "", p.tags.map((x) => `\`${x}\``).join(" "), "");
  }
  push(`**${c.work.more}.** ${c.work.moreText}`, "");
  push(`**${c.work.industriesTitle}.** ${c.work.industries}`, "");

  push(`## ${c.experience.title}`, "");
  for (const job of timeline) {
    const it = c.experience.items[job.id];
    push(`### ${job.company}`, "");
    push(`**${it.role}** | ${formatPeriod(job.from, job.to, lang)}`, "");
    push(`*${it.note}*`, "");
    for (const b of it.bullets) push(`- ${b}`);
    push("");
  }

  push(`## ${c.skills.title}`, "");
  for (const g of c.skills.groups) push(`**${g.title}.** ${g.text}`, "");

  push(`## ${c.about.title}`, "");
  for (const e of c.about.education) push(`- ${e}`);
  push("");
  for (const l of c.about.languages) push(`- ${l}`);
  push("");

  push(`## ${c.contact.title}`, "");
  push(c.contact.text, "");
  push(`- Email: [${profile.email}](mailto:${profile.email})`);
  push(`- LinkedIn: [linkedin.com/in/paviafernando](${profile.linkedin})`);
  push(`- WhatsApp: [${profile.phoneLabel}](https://wa.me/${profile.whatsapp})`);
  push("");
  push("---", "");

  push(`## ${t.repoTitle}`, "");
  push(t.repoBody, "");
  push(`- ${t.themesLine}`);
  push(`- ${t.cvLine}`);
  push(`- ${t.stack}: React, Vite, CSS. ${lang === "en" ? "No backend, no database." : lang === "es" ? "Sin backend ni base de datos." : "Sem backend nem banco de dados."}`);
  push("");
  push(`### ${t.run}`, "");
  push("```bash", "npm install", "npm run dev", "```", "");
  push(`### ${t.deploy}`, "");
  push(t.deployBody, "");

  const out = lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
  if (out.includes("\u2014")) throw new Error(`em dash found in ${FILES[lang]}`);
  return out;
}

mkdirSync(new URL("../assets/", import.meta.url), { recursive: true });
for (const { code } of languages) {
  writeFileSync(new URL(`../${FILES[code]}`, import.meta.url), readme(code));
  writeFileSync(new URL(`../assets/banner.${code}.svg`, import.meta.url), banner(code));
  console.log("wrote", FILES[code], `and assets/banner.${code}.svg`);
}
