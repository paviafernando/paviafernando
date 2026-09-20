import { profile } from "../content.js";

export default function Contact({ t }) {
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
          <p className="print-only">
            {profile.phoneLabel} | {profile.linkedin}
          </p>
        </div>
      </div>
    </section>
  );
}
