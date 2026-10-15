import { useDetailsToggle } from "../lib/detailsToggle.js";

export default function Skills({ t, detailsDefault = false, detailsLocked = false }) {
  const titles = t.skills.groups.filter((g) => g.pitch).map((g) => g.title);
  const { isOpen, toggle } = useDetailsToggle(titles, detailsDefault, detailsLocked);

  return (
    <section className="section" id="skills">
      <div className="container section-grid">
        <h2 className="section-title">{t.skills.title}</h2>
        <div className="skills-grid">
          {t.skills.groups.map((g) => (
            <div key={g.title}>
              <h3>{g.title}</h3>
              {g.pitch ? (
                <>
                  <p>{g.pitch}</p>
                  <div className="details no-print">
                    {!detailsLocked && (
                      <button
                        type="button"
                        className="details-toggle"
                        aria-expanded={isOpen(g.title)}
                        onClick={() => toggle(g.title)}
                      >
                        {isOpen(g.title) ? t.work.hideLabel : t.work.detailsLabel}
                      </button>
                    )}
                    {isOpen(g.title) && <p className="details-text">{g.text}</p>}
                  </div>
                </>
              ) : (
                <p>{g.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
