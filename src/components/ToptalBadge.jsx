import { badgeBlue, badgeLight } from "../toptalBadge.js";

// The official badge, inside an iframe so its CSS stays separate from the site.
// Light page: white badge. Dark page: blue badge.
export default function ToptalBadge({ mode, title }) {
  const html = mode === "dark" ? badgeBlue : badgeLight;
  const doc = `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;background:transparent}body{display:flex;justify-content:center;align-items:center;min-height:100vh}</style></head><body>${html}</body></html>`;
  return (
    <iframe
      className="toptal-badge no-print"
      title={title}
      srcDoc={doc}
      width="236"
      height="290"
      scrolling="no"
      sandbox="allow-popups allow-popups-to-escape-sandbox"
    />
  );
}
