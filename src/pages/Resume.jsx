import CritterRow from "../components/PixelCritters";
import { PERSONAL, EXPERIENCE, RESUME_PROJECTS, RESUME_SKILLS, RESUME_FILE } from "../config";

export default function Resume() {
  return (
    <>
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-num">05</span>
            <h2>
              <span className="tag">&lt;</span>resume
              <span className="tag">/&gt;</span>
            </h2>
          </div>

          {/* Trainer Card */}
          <div className="trainer-card pixel-frame reveal">
            <div className="tc-left">
              <h3>TRAINER CARD: {PERSONAL.name.toUpperCase()}</h3>
              <p>
                {PERSONAL.phone} ·{" "}
                <a href={`mailto:${PERSONAL.email}`}>{PERSONAL.email}</a> ·{" "}
                <a href={PERSONAL.linkedin} target="_blank" rel="noopener">
                  {PERSONAL.linkedinDisplay}
                </a>
              </p>
              <p>{PERSONAL.education}</p>
            </div>
            {/* ── RESUME DOWNLOAD ─────────────────────────────────────
                Drop your PDF in the /public folder and update
                RESUME_FILE in src/config.js — that's it.
            ─────────────────────────────────────────────────────── */}
            <a className="btn" href={`/${RESUME_FILE}`} download>
              DOWNLOAD PDF
            </a>
          </div>

          <p className="res-label reveal">// EXPERIENCE</p>

          {EXPERIENCE.map((job, i) => (
            <div key={i} className="res-card pixel-frame reveal">
              <h3>{job.role}</h3>
              <div className="res-sub">
                <span
                  className="org"
                  dangerouslySetInnerHTML={{ __html: job.org }}
                />
                <span className="date">{job.date}</span>
              </div>
              <ul>
                {job.bullets.map((b, j) => (
                  <li
                    key={j}
                    dangerouslySetInnerHTML={{
                      __html: b.replace(/<b>/g, "").replace(/<\/b>/g, ""),
                    }}
                  />
                ))}
              </ul>
            </div>
          ))}

          <p className="res-label reveal">// PROJECTS</p>

          {RESUME_PROJECTS.map((proj, i) => (
            <div key={i} className="res-card pixel-frame reveal">
              <h3>{proj.name}</h3>
              <div className="res-sub">
                <span className="org">{proj.tech}</span>
                <span className="date">{proj.date}</span>
              </div>
              <ul>
                {proj.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}

          <p className="res-label reveal">// TECHNICAL SKILLS</p>
          <div className="res-card pixel-frame reveal">
            {RESUME_SKILLS.map((s, i) => (
              <p key={i} className="res-skill-line">
                <b>{s.label}:</b> {s.value}
              </p>
            ))}
          </div>
        </div>
      </section>
      <CritterRow />
    </>
  );
}
