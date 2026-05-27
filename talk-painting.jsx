// =======================================================================
// InteractivePainting, Plato and Aristotle, clickable hands, zoom toggle.
// The marquee piece of the Ouverture.
// =======================================================================

const PAINTING_HOTSPOTS = {
  detail: {
    plato:     { left: "41%", top: "26%" },
    aristotle: { left: "58%", top: "52%" },
  },
  full: {
    plato:     { left: "48%", top: "32%" },
    aristotle: { left: "53%", top: "43%" },
  },
};

const PAINTING_VIEWS = {
  detail: {
    bgSize: "280%", bgPos: "53% 38%",
    label: "Central detail, the dialectic of the hands",
  },
  full: {
    bgSize: "cover", bgPos: "50% 50%",
    label: "Full fresco, Stanza della Segnatura, Vatican, 1509",
  },
};

const GestureCard = ({ id, fig, onClose }) => (
  <div style={{
    position: "absolute", left: "50%", bottom: 56,
    transform: "translateX(-50%)",
    width: "min(620px, 92%)",
    background: "var(--paper)",
    border: `1px solid ${fig.color}`,
    borderTop: `5px solid ${fig.color}`,
    padding: "26px 30px 28px",
    zIndex: 6,
    boxShadow: "0 24px 60px rgba(15,12,10,0.45)",
  }}>
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "baseline",
      marginBottom: 14,
    }}>
      <span className="mono" style={{
        fontSize: 11, letterSpacing: "0.20em",
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

    <h4 className="serif" style={{
      margin: 0, fontSize: 40, fontWeight: 300, letterSpacing: "-0.018em", lineHeight: 1.0,
    }}>
      {fig.name}<em style={{ color: fig.color, fontWeight: 300 }}>, {fig.gesture}</em>
    </h4>

    <div style={{
      marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--rule-soft)",
      display: "grid", gridTemplateColumns: "70px 1fr", rowGap: 8, columnGap: 18, alignItems: "baseline",
    }}>
      <span className="caps" style={{ color: "var(--ink-3)" }}>Holds</span>
      <span style={{ fontSize: 14, color: "var(--ink-2)" }}>{fig.work}</span>
      <span className="caps" style={{ color: "var(--ink-3)" }}>FR</span>
      <span className="fr" style={{ fontSize: 22, color: "var(--ink)" }}>{fig.fr}</span>
      <span className="caps" style={{ color: "var(--ink-3)" }}>EN</span>
      <span style={{ fontSize: 14, color: "var(--ink-2)" }}>{fig.en}</span>
      <span className="caps" style={{ color: "var(--ink-3)" }}>Read</span>
      <span style={{ fontSize: 13, color: "var(--ink-2)" }}>{fig.thinker}</span>
    </div>

    <p className="serif" style={{
      margin: "16px 0 0", fontSize: 18, lineHeight: 1.5, color: "var(--ink)",
      fontWeight: 400, fontStyle: "italic",
    }}>{fig.body}</p>

    <div style={{
      marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--rule-soft)",
      display: "grid", gridTemplateColumns: "auto 1fr", gap: 14, alignItems: "baseline",
    }}>
      <span className="caps" style={{ color: fig.color }}>In our discipline</span>
      <span style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--ink-2)" }}>{fig.rs}</span>
    </div>
  </div>
);

const InteractivePainting = () => {
  const [view, setView]   = React.useState("detail");
  const [active, setActive] = React.useState(null);
  const [hovered, setHovered] = React.useState(null);

  const v = PAINTING_VIEWS[view];
  const hs = PAINTING_HOTSPOTS[view];

  return (
    <section style={{
      position: "relative", background: "var(--ink)",
      borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
    }}>
      <div className="wrap" style={{ paddingTop: 22, paddingBottom: 14 }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
          color: "color-mix(in oklch, var(--paper) 70%, transparent)",
          fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
        }}>
          <span><Sigil color="var(--ochre-2)" />Figure 01, two gestures, click each hand</span>
          <span>Raphael, Stanza della Segnatura, 1509</span>
        </div>
      </div>

      <div style={{
        position: "relative", height: "76vh", minHeight: 540, maxHeight: 880,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(img/school-of-athens.jpg)",
          backgroundSize: v.bgSize, backgroundPosition: v.bgPos,
          backgroundRepeat: "no-repeat",
          transition: "background-size 900ms cubic-bezier(.2,.7,.3,1), background-position 900ms cubic-bezier(.2,.7,.3,1)",
        }} />

        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 50% 45%, transparent 35%, rgba(15,12,10,0.45) 100%)",
        }} />

        {Object.entries(hs).map(([id, pos]) => {
          const fig = PAINTING_FIGURES[id];
          const isActive = active === id;
          const isHover  = hovered === id;
          return (
            <button
              key={id}
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setActive(isActive ? null : id)}
              aria-label={`Reveal ${fig.name}'s gesture`}
              style={{
                position: "absolute", left: pos.left, top: pos.top,
                transform: "translate(-50%, -50%)",
                appearance: "none", border: "none", background: "none",
                cursor: "pointer", padding: 0, zIndex: 4,
                transition: "left 900ms cubic-bezier(.2,.7,.3,1), top 900ms cubic-bezier(.2,.7,.3,1)",
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
                background: "rgba(15,12,10,0.82)",
                backdropFilter: "blur(6px)",
                color: fig.color,
                padding: "5px 12px",
                fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.18em",
                textTransform: "uppercase", whiteSpace: "nowrap",
                border: `1px solid color-mix(in oklch, ${fig.color} 40%, transparent)`,
                opacity: (isHover || isActive) ? 1 : 0.55,
                transition: "opacity 220ms",
              }}>
                {id === "plato" ? "↑ Plato, index up" : "→ Aristotle, palm flat"}
              </span>
            </button>
          );
        })}

        {active && (
          <GestureCard id={active} fig={PAINTING_FIGURES[active]} onClose={() => setActive(null)} />
        )}

        <div style={{
          position: "absolute", top: 18, right: 18, zIndex: 5,
          display: "flex", gap: 0,
          background: "rgba(15,12,10,0.55)",
          backdropFilter: "blur(8px)",
          padding: 4,
          border: "1px solid color-mix(in oklch, var(--paper) 25%, transparent)",
        }}>
          {Object.keys(PAINTING_VIEWS).map((id) => (
            <button key={id} onClick={() => setView(id)} style={{
              appearance: "none", border: "none",
              background: view === id ? "var(--paper)" : "transparent",
              color: view === id ? "var(--ink)" : "color-mix(in oklch, var(--paper) 90%, transparent)",
              padding: "8px 18px", cursor: "pointer",
              fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: "0.16em",
              textTransform: "uppercase", fontWeight: 500,
            }}>
              {id === "detail" ? "Detail" : "Full fresco"}
            </button>
          ))}
        </div>

        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, padding: "18px 32px 14px",
          background: "linear-gradient(180deg, transparent, rgba(15,12,10,0.78))",
          color: "color-mix(in oklch, var(--paper) 88%, transparent)",
          fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em",
          textTransform: "uppercase",
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
          pointerEvents: "none",
        }}>
          <span>{v.label}</span>
          <span style={{ color: "var(--ochre-2)" }}>
            {active ? "card open, press close to reset" : "hover, click, explore"}
          </span>
        </div>
      </div>

      <div className="wrap" style={{
        padding: "16px 56px 24px",
        color: "color-mix(in oklch, var(--paper) 55%, transparent)",
        fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
      }}>
        <span>fig. 01, the two figures are commonly read through this vertical and horizontal contrast</span>
        <span style={{ color: "color-mix(in oklch, var(--ochre-2) 90%, transparent)" }}>
          Plato, abstraction, form, ideal &nbsp;·&nbsp; Aristotle, particulars, ground, responsibility
        </span>
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
