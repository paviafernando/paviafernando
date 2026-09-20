import { profile } from "../content.js";

export default function Footer({ t }) {
  return (
    <footer className="site-footer no-print">
      <div className="container footer-row">
        <p>{t.ui.footer}</p>
        <a href={`https://github.com/${profile.github}/${profile.repo}`} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
