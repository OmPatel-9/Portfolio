import { PERSONAL } from "../config";

const PAGES = ["home", "experience", "projects", "skills", "resume", "contact"];

export default function Nav({ current, onNav }) {
  return (
    <nav>
      <div className="nav-inner">
        <button className="logo" onClick={() => onNav("home")}>
          {PERSONAL.name.toLowerCase().replace(" ", "_")}
          <span className="blink">_</span>
        </button>
        <ul className="nav-links">
          {PAGES.map((p) => (
            <li key={p}>
              <button
                className={current === p ? "active" : ""}
                onClick={() => onNav(p)}
              >
                {p}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
