import React, { useEffect, useMemo, useState } from "react";
import terter from "./terter.png";

/** Tiny responsive hook (no CSS, no Tailwind) */
function useViewport() {
  const [w, setW] = useState<number>(
    typeof window === "undefined" ? 1200 : window.innerWidth
  );
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return {
    width: w,
    xs: w < 480,
    sm: w < 640,
    md: w < 768,
    lg: w < 1024,
    xl: w < 1280,
  };
}

function RuleDetails({ title, children, initiallyOpen = false }: any) {
  const [open, setOpen] = useState(initiallyOpen);
  return (
    <details
      open={open}
      onToggle={(e) => setOpen(e.currentTarget.open)}
      style={{
        borderRadius: "1rem",
        border: "1px solid #262626",
        backgroundColor: "#171717",
        padding: "1.25rem",
        marginTop: "1rem",
        boxShadow: open
          ? "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
          : "none",
      }}
    >
      <summary
        style={{
          cursor: "pointer",
          listStyle: "none",
          fontWeight: 600,
          fontSize: "1.125rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
          flexWrap: "wrap",
          minWidth: 0,
        }}
      >
        {title}
        <span
          style={{
            fontSize: "0.75rem",
            color: "#737373",
            display: open ? "none" : "inline",
            marginLeft: "0.75rem",
          }}
        >
          раскрыть
        </span>
        <span
          style={{
            fontSize: "0.75rem",
            color: "#737373",
            display: open ? "inline" : "none",
            marginLeft: "0.75rem",
          }}
        >
          свернуть
        </span>
      </summary>
      <div
        style={{
          marginTop: "0.75rem",
          color: "#d4d4d4",
          fontSize: "0.875rem",
          lineHeight: 1.6,
        }}
      >
        {children}
      </div>
    </details>
  );
}

export default function JackarooLanding() {
  const { xs, sm, md, lg } = useViewport();

  // Responsive tokens
  const layout = useMemo(() => {
    const titleSize = xs
      ? "1.75rem"
      : sm
      ? "2rem"
      : md
      ? "2.25rem"
      : lg
      ? "2.5rem"
      : "2.75rem";
    const containerPadY = xs ? "2rem" : sm ? "2.5rem" : md ? "3rem" : "4rem";
    const containerPadX = xs ? "1rem" : sm ? "1.25rem" : "1.5rem";
    const gridCols = md ? "1fr" : "1fr 1fr";
    const gridGap = xs ? "1rem" : sm ? "1.25rem" : "2rem";
    const avatar = xs ? 220 : sm ? 260 : md ? 300 : lg ? 320 : 340;
    const mainPadX = xs ? "0.75rem" : "1rem";
    const smallText = xs ? "0.8125rem" : "0.875rem";
    const bodyText = xs ? "0.9375rem" : "1rem";
    return {
      titleSize,
      containerPadY,
      containerPadX,
      gridCols,
      gridGap,
      avatar,
      mainPadX,
      smallText,
      bodyText,
    };
  }, [xs, sm, md, lg]);

  const [copied, setCopied] = useState(false);
  const weplayId = "samsino8";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`WePlay ID: ${weplayId}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "#f5f5f5",
        overflowX: "hidden", // ⟵ prevent viewport scrollbars
        width: "100%",
        maxWidth: "100vw", // ⟵ clamp to viewport
        boxSizing: "border-box",
      }}
    >
      {/* Hero */}
      <header
        style={{
          position: "relative",
          overflow: "hidden", // ⟵ clip the blurred background
          width: "100%",
          maxWidth: "100vw",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0, // ⟵ no negative insets
            backgroundImage:
              "linear-gradient(to bottom right, rgba(245,158,11,0.10), rgba(239,68,68,0.10), rgba(217,70,239,0.10))",
            filter: "blur(64px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            margin: "0 auto",
            maxWidth: "72rem",
            width: "100%",
            padding: `${layout.containerPadY} ${layout.containerPadX} calc(${layout.containerPadY} + 1rem)`,
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: layout.gridCols,
              gap: layout.gridGap,
              alignItems: "center",
              width: "100%",
              maxWidth: "100%",
              boxSizing: "border-box",
              minWidth: 0, // ⟵ grid can shrink
            }}
          >
            {/* Text column */}
            <div
              style={{
                order: md ? 2 : 1,
                minWidth: 0, // ⟵ prevents text from forcing overflow
              }}
            >
              <h1
                style={{
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  fontSize: layout.titleSize,
                  margin: 0,
                  lineHeight: 1.1,
                  wordWrap: "break-word",
                }}
              >
                Автор - Священник
              </h1>

              <div
                style={{
                  marginTop: xs ? "1rem" : "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    borderRadius: "1rem",
                    border: "1px solid #262626",
                    backgroundColor: "#171717",
                    padding: xs ? "0.6rem 0.875rem" : "0.75rem 1rem",
                    fontSize: layout.bodyText,
                    fontWeight: 600,
                  }}
                >
                  WePlay ID:{" "}
                  <span style={{ color: "#f59e0b" }}>{weplayId}</span>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  style={{
                    borderRadius: "1rem",
                    border: "1px solid rgba(245,158,11,0.4)",
                    backgroundColor: "rgba(245,158,11,0.10)",
                    padding: xs ? "0.6rem 0.875rem" : "0.75rem 1rem",
                    fontSize: layout.smallText,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "background-color 150ms ease",
                    color: "#ffffff",
                    width: xs ? "100%" : "auto",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(245,158,11,0.20)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(245,158,11,0.10)")
                  }
                >
                  {copied ? "Скопировано!" : "Скопировать"}
                </button>
              </div>

              <p
                style={{
                  marginTop: "0.75rem",
                  color: "#d4d4d4",
                  lineHeight: 1.6,
                  fontSize: xs ? "0.95rem" : "1rem",
                }}
              >
                Добро пожаловать! Здесь краткая инструкция по настольной игре
                «Джакаро».
              </p>
            </div>

            {/* Avatar column */}
            <div
              style={{
                order: md ? 1 : 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 0,
              }}
            >
              {/* Wrapper clips the glow — no overflow */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "2rem",
                }}
              >
                {/* Glow layer now uses inset: 0 (no negative offsets) */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "2rem",
                    backgroundImage:
                      "linear-gradient(to top right, rgba(245,158,11,0.30), rgba(239,68,68,0.30), rgba(217,70,239,0.30))",
                    filter: "blur(24px)",
                    transform: "scale(1.06)", // slight spread without overflowing
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    borderRadius: "2rem",
                    overflow: "hidden",
                    border: "1px solid #262626",
                    backgroundColor: "#171717",
                    boxShadow:
                      "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
                    maxWidth: "90vw",
                    maxHeight: "90vw",
                  }}
                >
                  <img
                    src={terter}
                    alt="Аватар Священника"
                    style={{
                      height: `${layout.avatar}px`,
                      width: `${layout.avatar}px`,
                      maxWidth: "90vw",
                      maxHeight: "90vw",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Rules */}
      <main
        style={{
          margin: "0 auto",
          maxWidth: "56rem",
          width: "100%",
          padding: `0 ${layout.mainPadX} 6rem`,
          boxSizing: "border-box",
          overflowX: "hidden", // ⟵ belt-and-suspenders
        }}
      >
        <section style={{ marginTop: xs ? "1.75rem" : "2.5rem" }}>
          <h2
            style={{
              fontSize: md ? "1.5rem" : "1.875rem",
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Правила игры «Джакаро»
          </h2>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: layout.smallText,
              color: "#a3a3a3",
            }}
          >
            Краткая версия правил на русском языке (для 4 игроков, командная
            игра 2×2).
          </p>

          <div style={{ marginTop: xs ? "1rem" : "1.5rem" }}>
            <RuleDetails title="Цель и состав" initiallyOpen>
              <p style={{ marginTop: 0 }}>
                Играют 4 человека, партнёры сидят напротив. Колода — 52 карты
                без джокеров. У каждого по 4 фишки (камешка) одного цвета. На
                поле есть зоны: Дом, База, Общий трек и Личная безопасная зона.
                Команда побеждает, когда все 8 её фишек оказываются в безопасной
                зоне.
              </p>
            </RuleDetails>

            <RuleDetails title="Подготовка и ход игры">
              <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
                <li style={{ marginBottom: "0.25rem" }}>
                  Случайным образом выбрать сдающего. Раздать каждому по 4
                  карты.
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  Ход по часовой стрелке, начинает игрок слева от сдающего.
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  Игрок за ход разыгрывает одну карту и выполняет её действие.
                </li>
                <li>
                  Когда все карты разыграны, сброс перемешивается и формирует
                  новую колоду. Роль сдающего переходит по кругу.
                </li>
              </ul>
            </RuleDetails>

            <RuleDetails title="Значения карт">
              <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
                <li style={{ marginBottom: "0.25rem" }}>
                  <strong>13</strong>: вывести фишку из Дома на Базу.
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  <strong>11</strong>: вывести фишку из Дома на Базу или пройти
                  1 или 11 шагов по треку.
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  <strong>7</strong>: разбить на несколько ходов и распределить
                  между двумя фишками.
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  <strong>5</strong>: двигать любую фишку на 5 клеток (кроме
                  чужих фишек, которые находятся на своей Базе).
                </li>
                <li style={{ marginBottom: "0.25rem" }}>
                  <strong>4</strong>: ход назад на 4 клетки.
                </li>
                <li>
                  <strong>Обмен</strong>: поменять местами две фишки на треке
                  (не в Доме/Базе/Безопасной зоне).
                </li>
                <li>
                  <strong>Остальные</strong>: пройти вперёд на число, указанное
                  на карте.
                </li>
              </ul>
            </RuleDetails>

            <RuleDetails title="Конец партии">
              <div>
                Команда выигрывает, когда все 8 её фишек (по 4 от каждого
                игрока) стоят в их Безопасных зонах.
              </div>
            </RuleDetails>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            marginTop: xs ? "2.5rem" : "4rem",
            borderTop: "1px solid #262626",
            paddingTop: xs ? "1rem" : "1.5rem",
            fontSize: layout.smallText,
            color: "#737373",
          }}
        >
          <p style={{ margin: 0 }}>
            *Правила кратко адаптированы на основе общедоступных источников.
            Полные правила могут отличаться в отдельных вариантах.
          </p>
        </footer>
      </main>
    </div>
  );
}
