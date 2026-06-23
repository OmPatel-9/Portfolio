import { useEffect, useRef } from "react";
import { spriteSVG } from "./PixelCritters";
import { PERSONAL } from "../config";

export default function StartScreen({ visible, onDismiss }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onDismiss();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onDismiss]);

  if (!visible) return null;

  const spritesHtml =
    spriteSVG("blaze", 8) +
    spriteSVG("volt", 8) +
    spriteSVG("wisp", 8) +
    spriteSVG("doze", 8);

  const [first, ...rest] = PERSONAL.name.toUpperCase().split(" ");

  return (
    <div
      id="start-screen"
      role="button"
      tabIndex={0}
      aria-label="Press start to enter the portfolio"
      onClick={onDismiss}
    >
      <div className="start-inner">
        <p className="start-sub">▶ A PORTFOLIO ADVENTURE</p>
        <h1 className="start-title">
          {first} <span>{rest.join(" ")}</span>
        </h1>
        <p className="start-ver">ENGINEER VERSION</p>
        <div
          className="start-sprites"
          dangerouslySetInnerHTML={{ __html: spritesHtml }}
        />
        <p className="press-start">PRESS START</p>
        <p className="start-copy">
          click anywhere or press ENTER
        </p>
      </div>
    </div>
  );
}
