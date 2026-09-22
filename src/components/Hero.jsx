import { useState } from "react";
import { profile, roleIds } from "../content.js";
import ThemeMark from "./ThemeMark.jsx";
import { track } from "../lib/analytics.js";

export default function Hero({ t, theme, lang }) {
  const [active, setActive] = useState(roleIds[0]);
  const [techOpen, setTechOpen] = useState(false);
  const role = t.roles[active];

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-main">
          <img
            className="avatar"
            src={theme === "editorial" ? "/avatar/formal.jpg" : "/avatar/default.jpg"}
            alt={profile.name}
            width="112"
            height="112"
          />
          <p className="status">
            <span className="status-dot" aria-hidden="true" />
            {t.ui.status}
          </p>
          <h1 className="name">{profile.name}</h1>
          <p className="hero-title">{t.hero.title}</p>
          {t.hero.subtitle && <p className="hero-subtitle">{t.hero.subtitle}</p>}
          <p className="hero-intro">{t.hero.intro}</p>
          {t.hero.techDetails && (
            <div className="details no-print">
              <button
                type="button"
                className="details-toggle"
                aria-expanded={techOpen}
                onClick={() => setTechOpen((o) => !o)}
              >
                {techOpen ? t.work.hideLabel : t.work.detailsLabel}
              </button>
              {techOpen && <p className="details-text">{t.hero.techDetails}</p>}
            </div>
          )}
          <p className="toptal-line">
            {t.toptal.line}{" "}
            <a href={profile.toptal.profile} target="_blank" rel="noopener noreferrer">
              {t.toptal.link}
            </a>
          </p>
          <div className="cta-row no-print">
            <a
              className="btn btn-primary"
              href={`mailto:${profile.email}`}
              onClick={() => track("contact_click", { method: "email", location: "hero" })}
            >
              {t.ui.email}
            </a>
            <a
              className="btn"
              href={`/cv/Fernando-Pavia-CV-${lang}.pdf`}
              download={`Fernando-Pavia-CV-${lang}.pdf`}
              onClick={() => track("cv_download", { location: "hero", lang })}
            >
              {t.ui.cv}
            </a>
            <a
              className="btn"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("contact_click", { method: "linkedin", location: "hero" })}
            >
              {t.ui.linkedin}
            </a>
            <a
              className="btn"
              href="#book-call"
              onClick={() => track("contact_click", { method: "schedule_call", location: "hero" })}
            >
              {t.ui.scheduleCall}
            </a>
          </div>
          <dl className="facts">
            {t.hero.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-roles">
          <h2 className="roles-title">
            <ThemeMark theme={theme} />
            {t.hero.rolesTitle}
          </h2>
          <ol className="roles">
            {roleIds.map((id, i) => (
              <li key={id} style={{ "--i": i }}>
                <button
                  type="button"
                  className="role-btn"
                  aria-pressed={active === id}
                  onClick={() => {
                    setActive(id);
                    track("role_select", { role: id });
                  }}
                  onMouseEnter={() => setActive(id)}
                  onFocus={() => setActive(id)}
                >
                  {t.roles[id].name}
                </button>
                <div className="role-print print-only">
                  <p>{t.roles[id].text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="role-panel no-print" aria-live="polite">
            <p className="role-text">{role.text}</p>
          </div>
          <p className="roles-hint no-print">{t.hero.rolesHint}</p>
        </div>
      </div>
    </section>
  );
}
