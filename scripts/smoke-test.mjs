// Renders the whole page to a string in each language and checks the basics.
// It also checks that the three languages have the same structure.
import { build } from "esbuild";
import { pathToFileURL } from "node:url";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const dir = mkdtempSync(join(tmpdir(), "pf-"));
const out = join(dir, "ssr.mjs");
await build({
  stdin: {
    contents: `
      import React from "react";
      import { renderToString } from "react-dom/server";
      import Header from "./src/components/Header.jsx";
      import Hero from "./src/components/Hero.jsx";
      import How from "./src/components/How.jsx";
      import Work from "./src/components/Work.jsx";
      import Experience from "./src/components/Experience.jsx";
      import Skills from "./src/components/Skills.jsx";
      import About from "./src/components/About.jsx";
      import Contact from "./src/components/Contact.jsx";
      import Footer from "./src/components/Footer.jsx";
      import { copy, languages, themes } from "./src/content.js";
      export function render(lang) {
        const t = copy[lang];
        const prefs = { lang, theme: "celeste", mode: "light" };
        const noop = () => {};
        return renderToString(
          React.createElement(React.Fragment, null,
            React.createElement(Header, { t, prefs, update: noop }),
            React.createElement(Hero, { t }),
            React.createElement(How, { t }),
            React.createElement(Work, { t }),
            React.createElement(Experience, { t, lang }),
            React.createElement(Skills, { t }),
            React.createElement(About, { t }),
            React.createElement(Contact, { t }),
            React.createElement(Footer, { t })));
      }
      export { copy, languages, themes };
    `,
    resolveDir: process.cwd(),
    loader: "jsx",
  },
  bundle: true,
  platform: "node",
  format: "esm",
  outfile: out,
  jsx: "automatic",
  loader: { ".css": "empty" },
  external: [],
  banner: { js: "import { createRequire } from 'module'; const require = createRequire(import.meta.url);" },
  logLevel: "error",
});

const mod = await import(pathToFileURL(out).href);
let failed = 0;
const fail = (msg) => {
  failed++;
  console.error("FAIL:", msg);
};

// same keys in every language
const shape = (o, p = "") =>
  Object.entries(o).flatMap(([k, v]) =>
    v && typeof v === "object" && !Array.isArray(v) ? shape(v, `${p}${k}.`) : Array.isArray(v) ? [`${p}${k}[${v.length}]`] : [`${p}${k}`]
  );
const base = shape(mod.copy.en).sort().join("\n");
for (const l of ["es", "pt"]) {
  if (shape(mod.copy[l]).sort().join("\n") !== base) fail(`language "${l}" has a different structure than "en"`);
}

// em dashes are not allowed in the text (writing rule)
const all = JSON.stringify(mod.copy);
if (all.includes("\u2014")) fail("found an em dash in the text");

for (const { code } of mod.languages) {
  const html = mod.render(code);
  for (const needle of ["Fernando Pavia", "ComercIApp", "DriveProLink", "Translation Portal", "mailto:paviafernando@gmail.com"]) {
    if (!html.includes(needle)) fail(`${code}: missing "${needle}"`);
  }
  console.log(code, "rendered", html.length, "chars");
}
if (mod.themes.length !== 5) fail("expected 5 themes");
if (failed) process.exit(1);
console.log("smoke test passed");
