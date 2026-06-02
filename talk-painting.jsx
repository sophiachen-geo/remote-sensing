// =======================================================================
// InteractivePainting, Plato and Aristotle, clickable hands.
// The marquee piece of the Ouverture.
// =======================================================================

const PAINTING_HOTSPOTS = {
  plato:     { left: "47%", top: "42%" },
  aristotle: { left: "52%", top: "47%" },
};

const GestureCard = ({ fig, onClose }) => (
  <div style={{
    position: "absolute", bottom: 28,
    [fig.side]: 28,
    width: "min(440px, 44%)",
    maxHeight: "calc(76vh - 80px)",
    overflowY: "auto",
    background: "var(--paper)",
    border: `1px solid ${fig.color}`,
    borderTop: `5px solid ${fig.color}`,
    padding: "24px 28px 26px",
    zIndex: 6,
    boxShadow: "0 24px 60px rgba(15,12,10,0.45)",
  }}>
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "baseline",
      marginBottom: 12,
    }}>
      <span className="mono" style={{
        fontSize: 10.5, letterSpacing: "0.20em",
        color: fig.color, textTransform: "uppercase",
      }}>
        {fig.side === "left" ? "← left figure" : "right figure →"}
      </span>
      <button onClick={onClose} style={{
        appearance: "none", border: "none", background: "none", cursor: "pointer",
        color: "var(--ink-3)", fontFamily: "var(--mono)", fontSize: 11,
        letterSpacing: "0.12em", textTransform: "uppercase",
      }}>close ✕</button>
    </div>

    <div className="serif" style={{
      fontSize: 22, fontWeight: 400, lineHeight: 1.2,
      color: "var(--ink)", letterSpacing: "-0.01em",
    }}>{fig.subtitle}</div>

    <div style={{
      marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--rule-soft)",
      display: "grid", gridTemplateColumns: "94px 1fr", rowGap: 10, columnGap: 14, alignItems: "baseline",
    }}>
      <span className="caps" style={{ color: "var(--ink-3)" }}>Holds</span>
      <span className="serif" style={{ fontSize: 16, color: "var(--ink)", fontStyle: "italic" }}>{fig.holds}</span>

      <span className="caps" style={{ color: "var(--ink-3)" }}>Key idea</span>
      <span style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5 }}>{fig.keyIdea}</span>

      <span className="caps" style={{ color: "var(--ink-3)" }}>Reading</span>
      <span style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5 }}>
        {fig.reading.thinker}, <em className="fr" style={{ color: "var(--ink)" }}>{fig.reading.fr}</em> — {fig.reading.desc}
      </span>
    </div>

    <p style={{
      margin: "16px 0 0", fontSize: 14, lineHeight: 1.6, color: "var(--ink-2)",
    }}>{fig.prose}</p>

    <div style={{
      marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--rule-soft)",
    }}>
      <div className="caps" style={{ color: fig.color, marginBottom: 8 }}>In remote sensing</div>
      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "var(--ink-2)" }}>
        {fig.remoteSensing}
      </p>
    </div>
  </div>
);

const InteractivePainting = () => {
  const [active, setActive] = React.useState({ plato: false, aristotle: false });
  const [hovered, setHovered] = React.useState(null);
  const toggle = (id) => setActive((a) => ({ ...a, [id]: !a[id] }));
  const close  = (id) => setActive((a) => ({ ...a, [id]: false }));

  return (
    <section style={{
      position: "relative", background: "var(--ink)",
      borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
    }}>
      <div className="wrap" style={{ paddingTop: 22, paddingBottom: 14 }}>
        <div style={{
          color: "color-mix(in oklch, var(--paper) 72%, transparent)",
          fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
          display: "flex", alignItems: "baseline", gap: 12,
        }}>
          <Sigil color="var(--ochre-2)" />
          <span>Raphael, The School of Athens, 1509&ndash;1511. Fresco in the Stanza della Segnatura, one of the Raphael Rooms in the Apostolic Palace, Vatican City.</span>
        </div>
      </div>

      <div style={{
        position: "relative", height: "76vh", minHeight: 540, maxHeight: 880,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(img/school-of-athens.jpg)",
          backgroundSize: "cover", backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
        }} />

        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 50% 45%, transparent 35%, rgba(15,12,10,0.45) 100%)",
        }} />

        {Object.entries(PAINTING_HOTSPOTS).map(([id, pos]) => {
          const fig = PAINTING_FIGURES[id];
          const isActive = active[id];
          const isHover  = hovered === id;
          return (
            <button
              key={id}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => toggle(id)}
              aria-label={`Reveal ${fig.name}'s gesture`}
              style={{
                position: "absolute", left: pos.left, top: pos.top,
                transform: "translate(-50%, -50%)",
                appearance: "none", border: "none", background: "none",
                cursor: "pointer", padding: 0, zIndex: 4,
              }}
            >
              <span style={{
                position: "relative", display: "block", width: 32, height: 32,
              }}>
                {!isActive && (
                  <>
                    <span style={ringStyle(fig.color, 0)} />
                    <span style={ringStyle(fig.color, 0.7)} />
                  </>
                )}
                <span style={{
                  position: "absolute", inset: 11,
                  background: fig.color, borderRadius: "50%",
                  border: "2px solid var(--paper)",
                  boxShadow: `0 0 0 ${isActive ? 7 : 0}px color-mix(in oklch, ${fig.color} 30%, transparent)`,
                  transition: "box-shadow 220ms",
                }} />
              </span>

              <span style={{
                position: "absolute", top: 38, left: "50%", transform: "translateX(-50%)",
                background: "var(--paper)",
                color: fig.color,
                padding: "5px 12px",
                fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em",
                textTransform: "uppercase", whiteSpace: "nowrap",
                border: `1px solid color-mix(in oklch, ${fig.color} 45%, transparent)`,
                boxShadow: "0 2px 10px rgba(15,12,10,0.35)",
                opacity: (isHover || isActive) ? 1 : 0.92,
                transition: "opacity 220ms",
              }}>
                {id === "plato" ? "↑ Plato, index up" : "→ Aristotle, palm flat"}
              </span>
            </button>
          );
        })}

        {active.plato && (
          <GestureCard fig={PAINTING_FIGURES.plato} onClose={() => close("plato")} />
        )}
        {active.aristotle && (
          <GestureCard fig={PAINTING_FIGURES.aristotle} onClose={() => close("aristotle")} />
        )}
      </div>

      <div className="wrap" style={{
        padding: "26px 56px 32px",
      }}>
        <p style={{
          margin: 0, fontSize: 15, lineHeight: 1.65, maxWidth: 980,
          color: "color-mix(in oklch, var(--paper) 82%, transparent)",
        }}>
          Remote sensing for the commons needs both gestures. <em style={{ color: "var(--lapis-2)", fontStyle: "italic" }}>Plato gives it reach</em>: scale, pattern, anticipation, and the possibility of seeing beyond the immediate. <em style={{ color: "var(--terra-2)", fontStyle: "italic" }}>Aristotle gives it obligation</em>: judgment, validation, consequence, and responsibility to the worlds it represents.
        </p>
      </div>

      <style>{`
        @keyframes raphael-pulse {
          0%   { transform: scale(1);   opacity: 0.85; }
          75%  { transform: scale(2.6); opacity: 0;    }
          100% { transform: scale(2.6); opacity: 0;    }
        }
      `}</style>
    </section>
  );
};

const ringStyle = (color, delay) => ({
  position: "absolute", inset: 4,
  border: `1.5px solid ${color}`,
  borderRadius: "50%",
  animation: `raphael-pulse 2.4s ease-out infinite`,
  animationDelay: `${delay}s`,
});

Object.assign(window, { InteractivePainting, GestureCard });
