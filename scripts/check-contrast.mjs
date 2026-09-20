// Checks WCAG contrast for the 10 theme/mode combinations in src/styles/tokens.css.
import { readFileSync } from "node:fs";

const css = readFileSync(new URL("../src/styles/tokens.css", import.meta.url), "utf8");
const blocks = [...css.matchAll(/:root(?:,\s*:root)?\[data-theme="(\w+)"\]\[data-mode="(\w+)"\]\s*\{([^}]*)\}/g)];

const lum = (hex) => {
  const c = hex.replace("#", "").match(/../g).map((h) => parseInt(h, 16) / 255);
  const [r, g, b] = c.map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const mix = (a, b, pct) => {
  const pa = a.replace("#", "").match(/../g).map((h) => parseInt(h, 16));
  const pb = b.replace("#", "").match(/../g).map((h) => parseInt(h, 16));
  return "#" + pa.map((x, i) => Math.round(x * pct + pb[i] * (1 - pct)).toString(16).padStart(2, "0")).join("");
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

let failed = 0;
const seen = new Set();
for (const [, theme, mode, body] of blocks) {
  const key = `${theme}/${mode}`;
  if (seen.has(key)) continue;
  seen.add(key);
  const v = Object.fromEntries([...body.matchAll(/--([\w-]+):\s*(#[0-9a-fA-F]{6})/g)].map((m) => [m[1], m[2]]));
  const checks = [
    ["text on page", v.fg, v.bg, 4.5],
    ["muted on page", v.muted, v.bg, 4.5],
    ["muted on card", v.muted, v["bg-elev"], 4.5],
    ["text on card", v.fg, v["bg-elev"], 4.5],
    ["accent on page", v.accent, v.bg, 4.5],
    ["accent on card", v.accent, v["bg-elev"], 4.5],
    ["button text", v["accent-fg"], v.accent, 4.5],
    // Roles that are not selected are large text (3:1 is enough). Keep in sync with .role-btn in sections.css.
    ["inactive role", mix(v.fg, v.bg, 0.56), v.bg, 3],
  ];
  const results = checks.map(([name, a, b, min]) => {
    const r = ratio(a, b);
    if (r < min) failed++;
    return `${name} ${r.toFixed(1)}${r < min ? " FAIL" : ""}`;
  });
  console.log(key.padEnd(20), results.join(" | "));
}
console.log(seen.size === 10 ? "10 combinations checked" : `WARNING: ${seen.size} combinations found`);
if (failed) {
  console.error(`${failed} contrast check(s) failed`);
  process.exit(1);
}
