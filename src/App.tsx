import { useEffect, useRef } from "react";
import turtle from "./turtle.png";
import "./App.css";

/**
 * Oogway-style Door Reveal
 * Pure CSS animation (no libraries). Drop into CRA as App.tsx + App.css.
 * - Two temple doors slide open
 * - Volumetric light beams + flicker
 * - Dust motes drifting
 * - Turtle‑sage (generic) silhouette fades in
 */
export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Replay helper
  const replay = () => {
    const el = rootRef.current;
    if (!el) return;
    el.classList.remove("play");
    // Force reflow to restart CSS animations
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    el.offsetHeight;
    el.classList.add("play");
  };

  useEffect(() => {
    rootRef.current?.classList.add("play");
  }, []);

  return (
    <div className="stage" ref={rootRef}>
      {/* Background + temple frame */}
      <div className="backdrop" />
      <div className="frame top" />
      <div className="frame bottom" />
      <div className="frame left" />
      <div className="frame right" />

      {/* Doors */}
      <div className="door left">
        <div className="grid" />
      </div>
      <div className="door right">
        <div className="grid" />
      </div>

      {/* Light cone */}
      <div className="light">
        <div className="rays" />
      </div>

      {/* Dust motes */}
      <div className="dust">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${(i * 17) % 100}%`,
              animationDelay: `${(i % 10) * 0.35}s`,
              animationDuration: `${8 + (i % 7)}s`,
            }}
          />
        ))}
      </div>

      {/* Silhouette */}
      <div className="sage" aria-label="wise turtle silhouette">
        <img src={turtle} alt="turtle" />
      </div>

      {/* CTA */}
      <button className="replay" onClick={replay}>
        Replay
      </button>
    </div>
  );
}
