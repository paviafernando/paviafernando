import { timeline, formatPeriod } from "../content.js";

export default function Experience({ t, lang }) {
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
      </div>
    </section>
  );
}
