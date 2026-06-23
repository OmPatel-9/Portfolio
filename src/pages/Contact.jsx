import CritterRow from "../components/PixelCritters";
import { PERSONAL, CONTACT } from "../config";

export default function Contact() {
  return (
    <section className="contact">
      <div className="wrap">
        <h2 className="reveal pxfont">
          &gt; GAME OVER?{" "}
          <span style={{ color: "var(--green)" }}>CONTINUE…</span>
        </h2>
        <p className="reveal">{CONTACT.blurb}</p>
        <div className="btn-row reveal" style={{ justifyContent: "center" }}>
          <a className="btn" href={`mailto:${PERSONAL.email}`}>
            EMAIL ME
          </a>
          <a
            className="btn alt"
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          {PERSONAL.github && (
            <a
              className="btn alt"
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
          )}
        </div>
        <CritterRow />
      </div>
    </section>
  );
}
