import { timeline, formatPeriod } from "../content.js";

const EARLIER_FROM = 4; // jobs at this index and beyond collapse to one line in print

export default function Experience({ t, lang }) {
  const earlier = timeline.slice(EARLIER_FROM);
  return (
    <section className="section" id="experience">
      <div className="container section-grid">
        <h2 className="section-title">{t.experience.title}</h2>
        <ol className="timeline">
          {timeline.map((job) => {
            const item = t.experience.items[job.id];
            return (
              <li className="job" key={job.id}>
                <p className="job-period">{formatPeriod(job.from, job.to, lang)}</p>
                <div className="job-body">
                  <h3>{job.company}</h3>
                  <p className="job-role">{item.role}</p>
                  <p className="job-note">{item.note}</p>
                  <ul>
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="earlier-line print-only">
          {t.experience.earlierLabel}:{" "}
          {earlier.map((job) => `${job.company} (${formatPeriod(job.from, job.to, lang)})`).join(", ")}
        </p>
      </div>
    </section>
  );
}
