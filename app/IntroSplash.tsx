"use client";

import { useEffect, useState } from "react";
import "./intro.css";

/**
 * A lightweight CSS-driven version of the Data Verse cinematic opening.
 * Runs on each full page load; it does not interrupt scrolling within the site.
 * The separate downloadable MP4 can be used for marketing/video editing.
 */
export default function IntroSplash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const finish = () => setShow(false);
    const timeout = window.setTimeout(finish, 4200);
    window.addEventListener("keydown", onKeyDown);
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" || event.key === "Enter") finish();
    }
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = priorOverflow;
    };
  }, []);

  if (!show) return null;
  return (
    <div className="dv-intro" role="dialog" aria-label="Introducing Data Verse">
      <div className="dv-intro-haze" aria-hidden="true" />
      <div className="dv-intro-stage">
        <div className="dv-intro-orbit" aria-hidden="true" />
        <img
          className="dv-intro-logo"
          src="/data-verse-mark.svg"
          alt="Data Verse — data science and analytics club"
          width={900}
          height={700}
          draggable={false}
        />
        <p className="dv-intro-caption">INTEGRAL UNIVERSITY · LUCKNOW</p>
        <div className="dv-intro-progress" aria-hidden="true"><span /></div>
      </div>
      <button className="dv-intro-skip" type="button" onClick={() => setShow(false)} aria-label="Skip introduction and enter Data Verse">
        SKIP INTRO <span aria-hidden="true">↗</span>
      </button>
    </div>
  );
}
