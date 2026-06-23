import { useState, useCallback, useEffect, useRef } from "react";
import StartScreen from "./components/StartScreen";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const PAGES = ["home", "experience", "projects", "skills", "resume", "contact"];
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const PAGE_COMPONENTS = {
  home: Home,
  experience: Experience,
  projects: Projects,
  skills: Skills,
  resume: Resume,
  contact: Contact,
};

function getInitialPage() {
  const hash = location.hash.slice(1);
  return PAGES.includes(hash) ? hash : "home";
}

export default function App() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(getInitialPage);
  const [wiping, setWiping] = useState(false);
  const switchingRef = useRef(false);
  const wipeRef = useRef(null);

  // Reveal elements on page show
  const revealPage = useCallback((pageId) => {
    const pageEl = document.getElementById("page-" + pageId);
    if (!pageEl) return;
    const els = pageEl.querySelectorAll(".reveal");
    els.forEach((el) => el.classList.remove("show"));
    els.forEach((el, i) => {
      if (reduced) { el.classList.add("show"); return; }
      setTimeout(() => el.classList.add("show"), 120 + i * 80);
    });
  }, []);

  const doSwap = useCallback((name) => {
    setCurrent(name);
    window.scrollTo(0, 0);
    history.replaceState(null, "", "#" + name);
    // Reveal after React re-renders
    setTimeout(() => revealPage(name), 10);
  }, [revealPage]);

  const showPage = useCallback((name) => {
    if (!PAGES.includes(name)) name = "home";
    if (reduced || switchingRef.current) { doSwap(name); return; }
    switchingRef.current = true;
    // trigger wipe animation by toggling class
    const wipe = wipeRef.current;
    if (wipe) {
      wipe.classList.remove("run");
      void wipe.offsetWidth; // reflow
      wipe.classList.add("run");
    }
    setTimeout(() => doSwap(name), 190);
    setTimeout(() => { switchingRef.current = false; }, 440);
  }, [doSwap]);

  const dismissStart = useCallback(() => {
    if (started) return;
    setStarted(true);
    const wipe = wipeRef.current;
    if (!reduced && wipe) {
      wipe.classList.remove("run");
      void wipe.offsetWidth;
      wipe.classList.add("run");
    }
    revealPage(current);
  }, [started, current, revealPage]);

  const handleNav = useCallback((name) => {
    dismissStart();
    showPage(name);
  }, [dismissStart, showPage]);

  useEffect(() => {
    const onHash = () => showPage(location.hash.slice(1));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [showPage]);

  // Initial reveal on mount
  useEffect(() => {
    revealPage(current);
  }, []); // eslint-disable-line

  const PageComponent = PAGE_COMPONENTS[current];

  return (
    <>
      <StartScreen visible={!started} onDismiss={dismissStart} />
      <div id="crt-wipe" ref={wipeRef} aria-hidden="true" />
      <Nav current={current} onNav={handleNav} />

      {PAGES.map((p) => {
        const Comp = PAGE_COMPONENTS[p];
        return (
          <div
            key={p}
            id={"page-" + p}
            className={"page" + (p === current ? " current" : "")}
          >
            <Comp onNav={handleNav} />
          </div>
        );
      })}

      <Footer />
    </>
  );
}
