# Instructions for a coding agent working in this repository

This is the public repository of Fernando Pavia's resume site. React + Vite, no backend.

## Commands
- `npm install`, `npm run dev` (local), `npm run build`
- `npm run check` (contrast of the 10 theme/mode combinations + render in 3 languages + same structure in all languages + no em dashes)
- `npm run readme` regenerates `README.md`, `README.es.md`, `README.pt.md` and `assets/banner.*.svg`. CI fails if they are out of date.
- `npm run cv` regenerates the 3 CV PDFs in `public/cv/` from `src/content.js`. Needs Playwright, which is not a project dependency: `npm install -D playwright && npx playwright install chromium`, run the script, then revert `package.json`/`package-lock.json` (`git checkout -- package.json package-lock.json`) before committing, same as ad hoc QA screenshots. Re-run after any content change that touches the curated CV sections (hero title/intro, toptal line, skills groups 1-3, the 4 most recent timeline jobs, education, languages).

## Where things are
- All the text, in English, Spanish and Portuguese: `src/content.js`. Facts that do not change with the language (companies, dates, tags, links) are at the top of that file.
- Themes: `src/styles/tokens.css` (5 themes x light/dark). If you change a color, run `npm run check`.
- Components: `src/components`. Styles: `src/styles`.
- Deploy and CI: `.github/workflows/ci.yml`, `vercel.json`, `docs/DEPLOYMENT.md`.
- The downloadable CV PDFs: `public/cv/Fernando-Pavia-CV-{en,es,pt}.pdf`, built by `scripts/generate-cv-pdf.mjs` (see `npm run cv` above). Curated on purpose, not the full site: recent roles get 1-2 bullets, older ones collapse into one line, and the "still growing" skills group is left out, since this is a document a recruiter hands to their client, not the honest exploratory web version.

## Rules for any text you write (this is a public site)
Fernando's own writing rules. Short version:
- Sound like a real senior developer who speaks English as a second language. Plain, direct, simple sentences.
- No em dashes, no semicolons, no "leveraging", "spearheading", "passionate", "robust and scalable", buzzwords, motivational language, or three-adjective lists.
- Never invent experience, numbers, or results. Do not turn exposure into expertise. Keep honest gaps.
- Keep the three languages equivalent in meaning and in the same plain voice.
- Do not put private information in this repository (ID numbers, address, birth date, family, finances, tokens).

The full rules and the facts about Fernando are in the private folder next to this one (`../docs`), which is not part of this repository.
