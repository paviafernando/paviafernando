import { projects } from "../content.js";

function host(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function Tags({ tags }) {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

function Name({ p }) {
  if (!p.url) return <span>{p.name}</span>;
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer">
      {p.name}
    </a>
  );
}

export default function Work({ t }) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section className="section" id="work">
      <div className="container section-grid">
        <h2 className="section-title">{t.work.title}</h2>
        <div>
          <div className="featured">
            {featured.map((p) => (
              <article className="feature" key={p.id}>
                <h3>
                  <Name p={p} />
                </h3>
                {p.url && <p className="host">{host(p.url)}</p>}
                <p>{t.work.items[p.id]}</p>
                {!p.url && <p className="soon">{t.ui.soon}</p>}
                <Tags tags={p.tags} />
              </article>
            ))}
          </div>

          <ul className="rows">
            {rest.map((p) => (
              <li className="row" key={p.id}>
                <div className="row-head">
                  <h3>
                    <Name p={p} />
                  </h3>
                  {p.url && <span className="host">{host(p.url)}</span>}
                </div>
                <p>{t.work.items[p.id]}</p>
                <Tags tags={p.tags} />
              </li>
            ))}
          </ul>

          <div className="more">
            <h3>{t.work.more}</h3>
            <p>{t.work.moreText}</p>
          </div>

          <div className="more">
            <h3>{t.work.industriesTitle}</h3>
            <p>{t.work.industries}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
