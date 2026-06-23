import CritterRow from "../components/PixelCritters";
import { EXPERIENCE } from "../config";

export default function Experience() {
  return (
    <>
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-num">02</span>
            <h2>
              <span className="tag">&lt;</span>experience
              <span className="tag">/&gt;</span>
            </h2>
          </div>
          <div className="xp">
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="xp-card pixel-frame reveal">
                <div className="xp-top">
                  <div className="xp-role">{job.role}</div>
                  <div className="xp-date">{job.date}</div>
                </div>
                <div
                  className="xp-org"
                  dangerouslySetInnerHTML={{ __html: job.org }}
                />
                <ul>
                  {job.bullets.map((b, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: b }} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CritterRow />
    </>
  );
}
