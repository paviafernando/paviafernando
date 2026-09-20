export default function Skills({ t }) {
  return (
    <section className="section" id="skills">
      <div className="container section-grid">
        <h2 className="section-title">{t.skills.title}</h2>
        <div className="skills-grid">
          {t.skills.groups.map((g) => (
            <div key={g.title}>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
