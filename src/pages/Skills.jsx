import CritterRow from "../components/PixelCritters";
import { SKILLS } from "../config";

export default function Skills() {
  return (
    <>
      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-num">04</span>
            <h2>
              <span className="tag">&lt;</span>skills
              <span className="tag">/&gt;</span>
            </h2>
          </div>
          <div className="skill-grid">
            {SKILLS.map((group, i) => (
              <div key={i} className="skill-box pixel-frame reveal">
                <h3>{group.heading}</h3>
                <div className="chip-row">
                  {group.chips.map((c) => (
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
