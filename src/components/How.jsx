export default function How({ t }) {
  return (
    <section className="section" id="how">
      <div className="container section-grid">
        <h2 className="section-title">{t.how.title}</h2>
        <div className="how-list">
          {t.how.items.map((it) => (
            <div className="how-item" key={it.title}>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
