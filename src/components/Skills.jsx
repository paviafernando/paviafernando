import { useState } from "react";

export default function Skills({ t }) {
  const [openTitle, setOpenTitle] = useState(null);
  const toggle = (title) => setOpenTitle((cur) => (cur === title ? null : title));

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
                    <button
                      type="button"
                      className="details-toggle"
                      aria-expanded={openTitle === g.title}
                      onClick={() => toggle(g.title)}
                    >
                      {openTitle === g.title ? t.work.hideLabel : t.work.detailsLabel}
                    </button>
                    {openTitle === g.title && <p className="details-text">{g.text}</p>}
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
