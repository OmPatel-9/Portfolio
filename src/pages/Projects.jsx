import CritterRow from "../components/PixelCritters";
import { PROJECTS } from "../config";

export default function Projects() {
  return (
    <>
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-num">03</span>
            <h2>
              <span className="tag">&lt;</span>projects
              <span className="tag">/&gt;</span>
            </h2>
          </div>
          <div className="proj-grid">
            {PROJECTS.map((proj, i) => (
              <div key={i} className="proj-card pixel-frame reveal">
                <div className="proj-head">
                  {proj.link ? (
                    <a
                      className="proj-name"
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {proj.name}
                    </a>
                  ) : (
                    <span className="proj-name">{proj.name}</span>
                  )}
                  <span className="proj-date">{proj.date}</span>
                </div>
                <p className="proj-desc">{proj.desc}</p>
                <div className="chip-row">
                  {proj.chips.map((c) => (
                    <span key={c} className="chip">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CritterRow />
    </>
  );
}
