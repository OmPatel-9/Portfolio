import { useEffect, useRef } from "react";
import CritterRow, { spriteSVG } from "../components/PixelCritters";
import { HERO, ABOUT, BATTLE_LINES } from "../config";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function BattleScene({ onNav }) {
  const dlgRef = useRef(null);
  const enemyHpRef = useRef(null);
  const dlgIdx = useRef(0);
  const stopRef = useRef(false);

  useEffect(() => {
    stopRef.current = false;

    async function typeDlg(text) {
      if (!dlgRef.current) return;
      dlgRef.current.textContent = "";
      for (const ch of text) {
        if (stopRef.current) return;
        dlgRef.current.textContent += ch;
        await new Promise((r) => setTimeout(r, 28));
      }
    }

    async function dlgLoop() {
      while (!stopRef.current) {
        const line = BATTLE_LINES[dlgIdx.current % BATTLE_LINES.length];
        await typeDlg(line);
        if (stopRef.current) break;
        if (line.includes("super effective") && enemyHpRef.current) {
          enemyHpRef.current.style.width = "34%";
          enemyHpRef.current.classList.add("low");
        }
        if (line.includes("JOB OFFER") && enemyHpRef.current) {
          enemyHpRef.current.style.width = "100%";
          enemyHpRef.current.classList.remove("low");
        }
        dlgIdx.current++;
        await new Promise((r) => setTimeout(r, 2100));
      }
    }

    if (reduced) {
      if (dlgRef.current) dlgRef.current.textContent = BATTLE_LINES[0];
    } else {
      dlgLoop();
    }

    return () => { stopRef.current = true; };
  }, []);

  return (
    <div className="battle" aria-label="retro battle scene">
      <div className="battle-field">
        <div className="mon-box enemy-box">
          <div className="mon-name">
            <span>RECRUITER</span>
            <span className="lv">Lv.50</span>
          </div>
          <div className="hp-row">
            <span className="hp-lbl">HP</span>
            <div className="hp-track">
              <div className="hp-fill" ref={enemyHpRef} />
            </div>
          </div>
        </div>
        <div
          className="enemy-sprite"
          dangerouslySetInnerHTML={{ __html: spriteSVG("doze", 9) }}
        />
        <div
          className="player-sprite"
          dangerouslySetInnerHTML={{ __html: spriteSVG("blaze", 9) }}
        />
        <div className="mon-box player-box">
          <div className="mon-name">
            <span>OM PATEL</span>
            <span className="lv">Lv.20</span>
          </div>
          <div className="hp-row">
            <span className="hp-lbl">HP</span>
            <div className="hp-track">
              <div className="hp-fill" />
            </div>
          </div>
        </div>
      </div>
      <div className="dlg">
        <span ref={dlgRef} />
        <span className="adv">▼</span>
      </div>
      <div className="battle-menu">
        <button onClick={() => onNav("experience")}>EXPERIENCE</button>
        <button onClick={() => onNav("projects")}>PROJECTS</button>
        <button onClick={() => onNav("skills")}>SKILLS</button>
        <button onClick={() => onNav("resume")}>RESUME</button>
      </div>
    </div>
  );
}

export default function Home({ onNav }) {
  return (
    <>
      <section>
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">{HERO.kicker}</p>
            <h1 className="name">
              {HERO.headline.split("\n").map((line, i) => {
                // Bold green on the name part
                const parts = line.split("Om Patel");
                if (parts.length > 1) {
                  return (
                    <span key={i}>
                      {parts[0]}
                      <span>Om Patel</span>
                      {parts[1]}
                      <br />
                    </span>
                  );
                }
                return <span key={i}>{line}</span>;
              })}
            </h1>
            <p
              className="tagline"
              dangerouslySetInnerHTML={{ __html: HERO.tagline }}
            />
            {HERO.roles.map((r, i) => (
              <p
                key={i}
                className="role-line"
                dangerouslySetInnerHTML={{ __html: r }}
              />
            ))}
            <div className="btn-row">
              <button className="btn" onClick={() => onNav("projects")}>
                VIEW WORK
              </button>
              <button className="btn alt" onClick={() => onNav("resume")}>
                RESUME
              </button>
            </div>
          </div>
          <BattleScene onNav={onNav} />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="sec-num">01</span>
            <h2>
              <span className="tag">&lt;</span>about
              <span className="tag">/&gt;</span>
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-text reveal">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
            <div className="stat-box pixel-frame reveal">
              {ABOUT.stats.map((s, i) => (
                <div className="stat" key={i}>
                  <div className="num">{s.num}</div>
                  <div className="lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CritterRow />
    </>
  );
}
