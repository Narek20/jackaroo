import { useMemo } from "react";
import "./App.css";

type BubbleSpec = {
  left: string;
  size: number;
  delay: number;
  duration: number;
};
type TurtleSpec = { top: string; scale: number; delay: number };

export default function App() {
  const bubbles: BubbleSpec[] = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, i) => ({
        left: `${(i * 7 + 10) % 100}%`,
        size: 8 + ((i * 13) % 18),
        delay: (i % 5) * 0.6,
        duration: 8 + (i % 7),
      })),
    []
  );

  const turtles: TurtleSpec[] = useMemo(
    () => [
      { top: "65%", scale: 1, delay: 0 },
      { top: "40%", scale: 0.85, delay: 0.8 },
      { top: "25%", scale: 1.15, delay: 1.4 },
    ],
    []
  );

  return (
    <div className="ocean">
      <header className="nav">
        <div className="brand">Turtly</div>
        <nav className="links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="hero">
        <div className="pill">Ocean vibes, shipping fast.</div>
        <h1 className="title">
          Build calm software.
          <br className="br-md" />
          Swim past complexity.
        </h1>
        <p className="subtitle">
          Minimal landing with SVG turtles, parallax waves, and rising bubbles —
          all in pure CSS.
        </p>
        <div className="cta">
          <button className="btn btn-primary">Dive in</button>
          <button className="btn btn-outline">See Docs</button>
        </div>
      </main>

      {/* Turtles */}
      <div className="swim-layer">
        {turtles.map((t, idx) => (
          <div
            key={idx}
            className="turtle"
            style={
              {
                "--top": t.top,
                "--scale": t.scale,
                "--delay": `${t.delay}s`,
              } as React.CSSProperties
            }
            aria-label="Swimming turtle"
          >
            <svg
              width="140"
              height="120"
              viewBox="0 0 140 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Body */}
              <ellipse cx="70" cy="60" rx="34" ry="26" fill="#1f9a94" />
              <ellipse cx="70" cy="60" rx="28" ry="20" fill="#25b3ac" />
              {/* Head */}
              <circle cx="106" cy="58" r="10" fill="#25b3ac" />
              <circle cx="109" cy="56" r="2.5" fill="#0b3b3a" />
              {/* Flippers */}
              <path
                d="M40 50 C20 40, 12 30, 28 24 C46 20, 58 38, 58 38"
                fill="#1f9a94"
              />
              <path
                d="M42 71 C24 82, 14 94, 30 98 C48 100, 60 84, 60 84"
                fill="#1f9a94"
              />
              <path
                d="M92 40 C108 28, 126 26, 124 40 C120 52, 98 50, 98 50"
                fill="#1f9a94"
              />
              <path
                d="M94 80 C112 90, 128 94, 124 104 C118 114, 98 100, 98 96"
                fill="#1f9a94"
              />
              {/* Shell pattern */}
              <g opacity="0.5">
                <path d="M70 40 L86 60 L70 80 L54 60 Z" fill="#0f6f6a" />
                <path d="M70 40 L70 80" stroke="#0f6f6a" strokeWidth="2" />
                <path d="M54 60 L86 60" stroke="#0f6f6a" strokeWidth="2" />
              </g>
            </svg>
          </div>
        ))}
      </div>

      {/* Bubbles */}
      <div className="bubble-layer" aria-hidden>
        {bubbles.map((b, i) => (
          <span
            key={i}
            className="bubble"
            style={
              {
                "--left": b.left,
                "--size": `${b.size}px`,
                "--delay": `${b.delay}s`,
                "--duration": `${b.duration}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Waves */}
      <div className="waves">
        <div className="wave wave-1" />
        <div className="wave wave-2" />
        <div className="wave wave-3" />
      </div>

      <footer className="foot">
        © {new Date().getFullYear()} Turtly — pure CSS, React 18.
      </footer>
    </div>
  );
}
