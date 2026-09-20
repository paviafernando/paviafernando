import { useEffect, useRef, useState } from "react";
import { languages, themes, profile } from "../content.js";

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function ThemeMenu({ t, prefs, update }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = themes.find((x) => x.id === prefs.theme);

  return (
    <div className="theme-menu" ref={ref}>
      <button
        type="button"
        className="ctrl-btn"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={t.ui.openMenu}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="swatch" data-swatch={prefs.theme} aria-hidden="true" />
        <span className="ctrl-label">{current.name}</span>
      </button>
      {open && (
        <div className="theme-pop" role="radiogroup" aria-label={t.ui.theme}>
          {themes.map((th) => (
            <button
              key={th.id}
              type="button"
              role="radio"
              aria-checked={prefs.theme === th.id}
              className="theme-opt"
              onClick={() => {
                update({ theme: th.id });
                setOpen(false);
              }}
            >
              <span className="swatch" data-swatch={th.id} aria-hidden="true" />
              {th.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header({ t, prefs, update }) {
  const dark = prefs.mode === "dark";
  return (
    <header className="site-header no-print">
      <div className="container header-row">
        <a className="brand" href="#top" aria-label={profile.name}>
          {profile.name}
        </a>
        <nav className="nav" aria-label="Main">
          <a href="#work">{t.ui.nav.work}</a>
          <a href="#experience">{t.ui.nav.experience}</a>
          <a href="#skills">{t.ui.nav.skills}</a>
          <a href="#contact">{t.ui.nav.contact}</a>
        </nav>
        <div className="controls">
          <div className="seg" role="group" aria-label={t.ui.language}>
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                className="seg-btn"
                aria-pressed={prefs.lang === l.code}
                title={l.name}
                lang={l.code}
                onClick={() => update({ lang: l.code })}
              >
                {l.label}
              </button>
            ))}
          </div>
          <ThemeMenu t={t} prefs={prefs} update={update} />
          <button
            type="button"
            className="ctrl-btn icon-only"
            aria-label={dark ? t.ui.light : t.ui.dark}
            title={dark ? t.ui.light : t.ui.dark}
            onClick={() => update({ mode: dark ? "light" : "dark" })}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
