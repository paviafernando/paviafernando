import { useState } from "react";
import { profile, roleIds } from "../content.js";
import ThemeMark from "./ThemeMark.jsx";

export default function Hero({ t, theme }) {
  const [active, setActive] = useState(roleIds[0]);
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
          <p className="hero-intro">{t.hero.intro}</p>
          <p className="toptal-line">
            {t.toptal.line}{" "}
            <a href={profile.toptal.profile} target="_blank" rel="noopener noreferrer">
              {t.toptal.link}
            </a>
          </p>
          <div className="cta-row no-print">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              {t.ui.email}
            </a>
            <button type="button" className="btn" onClick={() => window.print()}>
              {t.ui.cv}
            </button>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              {t.ui.linkedin}
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
                  onClick={() => setActive(id)}
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
