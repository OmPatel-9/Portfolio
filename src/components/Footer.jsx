import { FOOTER } from "../config";

export default function Footer() {
  // Replace the ♥ with a styled span
  const parts = FOOTER.split("♥");
  return (
    <footer>
      {parts[0]}
      <span className="heart">♥</span>
      {parts[1]}
    </footer>
  );
}
