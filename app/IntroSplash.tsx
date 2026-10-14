"use client";

import { useEffect, useRef, useState } from "react";
import "./intro.css";

const INTRO_VIDEO = "https://d2ol7oe51mr4n9.cloudfront.net/user_3JJQWBY7GZJfQxsRHaeVxv0LEWX/04e33510-79d7-48f2-9cf5-70deae138b8b.mp4";

/** Fullscreen opening: play the original 4.2s video, then reveal the homepage. */
export default function IntroSplash() {
  const [show, setShow] = useState(true);
  const [ending, setEnding] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const endRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const oldFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const timeout = window.setTimeout(() => finish(), 7000);

    function finish() {
      if (endRef.current) return;
      endRef.current = true;
      setEnding(true);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" || event.key === "Enter") finish();
    }
    window.addEventListener("keydown", onKeyDown);
    videoRef.current?.play().catch(finish);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = oldOverflow;
      oldFocus?.focus({ preventScroll: true });
    };
  }, []);

  if (!show) return null;
  return (
    <div className={`dv-video-splash${ending ? " dv-video-splash--ending" : ""}`}
      role="dialog" aria-modal="true" aria-label="Data Verse introduction"
      onTransitionEnd={(event) => { if (ending && event.target === event.currentTarget) setShow(false); }}>
      <video
        ref={videoRef}
        className="dv-splash-video"
        src={INTRO_VIDEO}
        autoPlay
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        aria-label="Animated Data Verse logo"
        onEnded={() => { if (!endRef.current) { endRef.current = true; setEnding(true); } }}
        onError={() => { if (!endRef.current) { endRef.current = true; setEnding(true); } }}
      />
      <button className="dv-intro-skip" type="button"
        onClick={() => { if (!endRef.current) { endRef.current = true; setEnding(true); } }}
        aria-label="Skip introduction and enter Data Verse">
        SKIP INTRO <span aria-hidden="true">↗</span>
      </button>
    </div>
  );
}
