import { profile } from "../content.js";
import ToptalBadge from "./ToptalBadge.jsx";
import BookCall from "./BookCall.jsx";

export default function Contact({ t, mode, lang }) {
  return (
    <section className="section contact" id="contact">
      <div className="container section-grid">
        <h2 className="section-title">{t.contact.title}</h2>
        <div>
          <p className="contact-text">{t.contact.text}</p>
          <a className="contact-mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="cta-row no-print">
            <a className="btn btn-primary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              {t.ui.linkedin}
            </a>
            <a className="btn" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer">
              {t.ui.whatsapp}
            </a>
            <button type="button" className="btn" onClick={() => window.print()}>
              {t.ui.cv}
            </button>
          </div>
          <BookCall t={t} lang={lang} />
          <div className="toptal-block no-print">
            <p>
              {t.toptal.clientText}{" "}
              <a href={profile.toptal.clientReferral} target="_blank" rel="noopener noreferrer">
                {t.toptal.clientLink}
              </a>
            </p>
            {profile.toptal.showBadge && <ToptalBadge mode={mode} title={t.toptal.badgeTitle} />}
          </div>
          <p className="print-only">
            {profile.phoneLabel} | {profile.linkedin} | {profile.toptal.profile}
          </p>
        </div>
      </div>
    </section>
  );
}
