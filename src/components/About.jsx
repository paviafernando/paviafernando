export default function About({ t }) {
  return (
    <section className="section" id="about">
      <div className="container section-grid">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-grid">
          <ul className="plain-list">
            {t.about.education.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
          <ul className="plain-list">
            {t.about.languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
