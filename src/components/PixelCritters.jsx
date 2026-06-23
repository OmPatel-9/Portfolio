// Pixel critter sprites — drawn in code, no copyrighted assets
const PAL = {
  G: "#52FFA8", C: "#6BD9FF", A: "#FFC857", M: "#FF6AC2",
  B: "#10131C", W: "#FFFFFF", O: "#E8853D", T: "#2F7E78",
  Y: "#FFD93D", R: "#FF6B6B", P: "#F4A7C3", E: "#F5E6C8",
};

const CRITTERS = {
  blaze: ["T..OO..T", ".TOOOOT.", ".OBOOBO.", "OOOOOOOO", ".OORROO.", ".OOOOOO.", "..O..O.."],
  volt:  ["...YY...", "..YYYY..", ".YBYYBY.", ".YRYYRY.", "Y.YYYY.Y", "..YYYY..", "..Y..Y.."],
  wisp:  ["..PP....", ".PPPP.P.", ".PBPPBP.", ".PPPPPP.", "..PPPP.P", "...PP...", "..P..P.."],
  doze:  [".TTTTTT.", "TTBTTBTT", "TTEEEETT", "TEEEEEET", "TEEEEEET", "TTEEEETT", ".TT..TT."],
};

export function spriteSVG(key, scale) {
  const map = CRITTERS[key];
  const h = map.length, w = map[0].length;
  const rects = map.flatMap((row, y) =>
    [...row].map((ch, x) =>
      ch === "." ? "" : `<rect x="${x}" y="${y}" width="1" height="1" fill="${PAL[ch] || PAL.G}"/>`
    )
  ).join("");
  return (
    `<svg class="sprite" width="${w * scale}" height="${h * scale}" ` +
    `viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges" ` +
    `xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${rects}</svg>`
  );
}

export default function CritterRow() {
  return (
    <div
      className="critter-row"
      dangerouslySetInnerHTML={{
        __html:
          spriteSVG("blaze", 5) +
          spriteSVG("volt", 5) +
          spriteSVG("wisp", 5) +
          spriteSVG("doze", 5),
      }}
    />
  );
}
