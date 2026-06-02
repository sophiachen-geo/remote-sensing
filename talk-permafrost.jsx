// =======================================================================
// Permafrost figures, ported from the Remote Sensing for Care & Resilience
// handoff (permafrost-figs-a / b). Twelve figures plus Movement / Block
// layout helpers. Colours come from the site's Blueprint CSS variables
// already defined in index.html.
// =======================================================================

const PF = {
  ink:"var(--ink)", ink2:"var(--ink-2)", ink3:"var(--ink-3)", ink4:"var(--ink-4)",
  rule:"var(--rule)", rule2:"var(--paper-4)",
  bg:"var(--paper)", bg2:"var(--paper-2)", bg3:"var(--paper-3)",
  navy:"var(--navy)",
  sky:"var(--sky)", sky2:"var(--sky-2)", skyT:"var(--sky-tint)",
  clay:"var(--clay)", clay2:"var(--clay-2)", clayT:"var(--clay-tint)",
  amber:"var(--amber)", teal:"var(--teal)", plum:"var(--plum)",
  protect:"var(--protect)", protectT:"var(--protect-tint)",
  expose:"var(--expose)", exposeT:"var(--expose-tint)",
};

const PFMono = ({ c, s, ls, children, style }) => (
  <span className="mono" style={{
    fontSize: s || 11, letterSpacing: (ls != null ? ls : 0.14) + "em",
    textTransform: "uppercase", color: c || PF.ink3, ...style,
  }}>{children}</span>
);

const PFKeys = () => (
  <style>{`
    @keyframes pfIn  { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: none } }
    @keyframes pfInL { from { opacity: 0; transform: translateX(-7px) } to { opacity: 1; transform: none } }
  `}</style>
);

// ─── layout helpers ───────────────────────────────────────────────────────

// Per-movement accent map. Threaded through PFMovement, Block, and every
// Fig* widget so a single movement reads in one color throughout.
const MOVEMENT_ACCENT = {
  m1:       PF.sky,
  m2:       PF.amber,
  m3:       PF.teal,
  m4:       PF.plum,
  practice: PF.clay,
};

// Movement header. A stratum band, not a box: a full-width top rule in the
// movement accent, the roman numeral in PF.rule2, a "movement" eyebrow, then
// the bold-sans name. No border-box. Bold sans is structure only.
const PFMovement = ({ id, num, name, accent = PF.navy }) => (
  <section id={id} style={{ padding: "56px 0 18px", scrollMarginTop: 80 }}>
    <div style={{ height: 2, background: accent, marginBottom: 28 }} />
    <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "baseline" }}>
      <span className="num" style={{
        fontSize: 90, lineHeight: 0.92, color: PF.rule2, fontWeight: 300, letterSpacing: "-0.04em",
      }}>{num}</span>
      <div>
        <PFMono c={accent} s={10} style={{ display: "block" }}>movement</PFMono>
        <h2 style={{
          margin: "10px 0 0", fontSize: 40, lineHeight: 1.06, fontWeight: 800,
          letterSpacing: "-0.025em", color: PF.ink, maxWidth: 880,
        }}>{name}</h2>
      </div>
    </div>
  </section>
);

// Unified block. Argument/content only — every text element is serif.
// Two text layers max before the figure: fig number + (title OR standfirst).
// Caption is serif italic small, lives after the figure.
const Block = ({ accent, fig, title, standfirst, caption, children }) => (
  <section style={{ padding: "26px 0 30px", marginLeft: 28, borderLeft: `1px solid ${PF.rule}`, paddingLeft: 28 }}>
    {fig && (
      <span className="mono" style={{
        fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: accent,
      }}>fig. {fig}</span>
    )}
    {title && (
      <h3 className="serif" style={{
        margin: "8px 0 0", fontSize: 26, fontWeight: 500, lineHeight: 1.18,
        letterSpacing: "-0.012em", color: PF.ink, maxWidth: 820,
      }}>{title}</h3>
    )}
    {standfirst && (
      <p className="serif" style={{
        margin: "12px 0 0", fontSize: 18, lineHeight: 1.5, color: PF.ink2,
        fontStyle: "italic", maxWidth: 720,
      }}>{standfirst}</p>
    )}
    {children && <div style={{ marginTop: 22 }}>{children}</div>}
    {caption && (
      <p className="serif" style={{
        margin: "12px 0 0", fontSize: 13, lineHeight: 1.45, color: PF.ink3,
        fontStyle: "italic", maxWidth: 740,
      }}>{caption}</p>
    )}
  </section>
);

// Plain interstitial prose passage — serif column against the rail, no border,
// no fig number, no caption. Use between Blocks for breathing room.
const PFProse = ({ children, max = 720 }) => (
  <div style={{ marginLeft: 28, paddingLeft: 28, paddingTop: 6, paddingBottom: 6 }}>
    <p className="serif" style={{
      margin: 0, fontSize: 17, lineHeight: 1.65, color: PF.ink2,
      maxWidth: max,
    }}>{children}</p>
  </div>
);

// PFBlock renders one numbered Level 3 section inside a Level 2 movement.
//   n       — Level 3 marker, e.g. "I", "II"; renders as "§ I" in accent
//   kicker  — Level 4 subtitle (mono caps short), e.g. "THE COMPONENTS"
//   title   — the serif h3 argument
//   lede    — optional standfirst paragraph
//   caption — italic caption after the figure
//   kc      — color override for the eyebrow row (defaults to PF.sky)
const PFBlock = ({ n, kicker, kc, title, lede, caption, children }) => {
  const accent = kc || PF.sky;
  const hasEyebrow = n || kicker;
  return (
    <section style={{ padding: "22px 0 30px" }}>
      {hasEyebrow && (
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
          {n && (
            <span className="mono" style={{
              fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase",
              color: accent, fontWeight: 600,
            }}>§ {n}</span>
          )}
          {n && kicker && (
            <span style={{ width: 1, height: 12, background: PF.rule2 }} aria-hidden="true" />
          )}
          {kicker && (
            <PFMono c={PF.ink3} s={10} ls={0.18}>{kicker}</PFMono>
          )}
        </div>
      )}
      {title && (
        <h3 className="serif" style={{
          margin: "10px 0 0", fontSize: 26, lineHeight: 1.18, fontWeight: 500,
          letterSpacing: "-0.012em", color: PF.ink, maxWidth: 820,
        }}>{title}</h3>
      )}
      {lede && (
        <p style={{
          margin: "14px 0 0", fontSize: 16, lineHeight: 1.6, color: PF.ink2, maxWidth: 760,
        }}>{lede}</p>
      )}
      <div style={{ marginTop: 22 }}>{children}</div>
      {caption && (
        <p className="serif" style={{
          margin: "12px 0 0", fontSize: 13, lineHeight: 1.45, color: PF.ink3, fontStyle: "italic", maxWidth: 780,
        }}>{caption}</p>
      )}
    </section>
  );
};

// ─── I·A · Risk is a relation ─────────────────────────────────────────────

const PF_RISK = [
  { k: "Hazard",        q: "What threatens?",                       rs: ["flood extent","fire scar","drought signal","heat","landslide"],     gr: ["local thresholds","remembered extremes","warning interpretation"], strength: 0.9 },
  { k: "Exposure",      q: "Who or what is in the way?",            rs: ["buildings","roads","crops","infrastructure","settlements"],          gr: ["occupancy","seasonal use","informal structures","household composition"], strength: 0.8 },
  { k: "Vulnerability", q: "Who is most harmed, and why?",          rs: ["proxy indicators","spatial correlation","hazard overlap"],           gr: ["health","mobility","tenure","income","trust","language","networks"], strength: 0.28 },
  { k: "Capacity",      q: "Who can act, recover, or refuse?",      rs: ["access routes","service locations","infrastructure status"],         gr: ["local leadership","mutual aid","evacuation options","authority"], strength: 0.24 },
];

const PFChips = ({ items, c, tint }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
    {items.map((t, i) => (
      <span key={i} className="serif" style={{
        fontSize: 13, fontStyle: "italic", color: PF.ink, background: tint,
        border: `1px solid ${c}55`, padding: "3px 8px",
      }}>{t}</span>
    ))}
  </div>
);

const FigRiskRelation = ({ accent = PF.navy }) => {
  const [sel, setSel] = React.useState(2);
  const a = PF_RISK[sel];
  return (
    <div style={{ border: `1px solid ${PF.rule2}`, background: PF.bg }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderBottom: `1px solid ${PF.rule}` }}>
        {PF_RISK.map((r, i) => {
          const on = sel === i;
          return (
            <button key={i} onClick={() => setSel(i)} style={{
              cursor: "pointer", border: "none",
              borderLeft: i ? `1px solid ${PF.rule}` : "none",
              borderTop: on ? `3px solid ${accent}` : "3px solid transparent",
              background: on ? PF.bg : PF.bg2,
              padding: "16px 14px 14px", textAlign: "left", transition: "all .2s",
            }}>
              <PFMono c={PF.ink4} s={9}>{["A","B","C","D"][i]}</PFMono>
              <div style={{ marginTop: 6, fontSize: 16, fontWeight: 700, color: on ? accent : PF.ink2, letterSpacing: "-0.01em" }}>{r.k}</div>
              <div style={{ marginTop: 10 }}>
                <div style={{ height: 5, background: PF.bg3, position: "relative" }}>
                  <div style={{ position: "absolute", inset: 0, width: `${r.strength * 100}%`, background: r.strength > 0.5 ? PF.sky : PF.clay }} />
                </div>
                <PFMono c={r.strength > 0.5 ? PF.sky : PF.clay} s={8} style={{ marginTop: 5, display: "block" }}>
                  {r.strength > 0.5 ? "sensor-strong" : "needs grounding"}
                </PFMono>
              </div>
            </button>
          );
        })}
      </div>
      <div style={{ padding: "22px 26px" }}>
        <div className="serif" style={{ fontSize: 21, lineHeight: 1.3, color: PF.ink }}>{a.q}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 }} key={sel}>
          <div style={{ animation: "pfInL .3s ease both" }}>
            <PFMono c={PF.sky} s={10}>strong remote-sensing contribution</PFMono>
            <div style={{ marginTop: 9 }}><PFChips items={a.rs} c={PF.sky} tint={PF.skyT} /></div>
          </div>
          <div style={{ animation: "pfInL .3s ease both", animationDelay: ".06s" }}>
            <PFMono c={PF.clay} s={10}>grounded complement</PFMono>
            <div style={{ marginTop: 9 }}><PFChips items={a.gr} c={PF.clay} tint={PF.clayT} /></div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${PF.rule}`, background: PF.bg2, padding: "22px 28px 24px" }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: PF.ink, marginBottom: 18 }}>
          Risk is a disaster that hasn't happened (yet)
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 12, margin: "0 0 22px", flexWrap: "wrap" }}>
          <span style={{ fontSize: 28, fontWeight: 800, color: "#b91c1c", letterSpacing: "-0.01em" }}>Risk =</span>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", lineHeight: 1.1 }}>
            <span style={{ fontSize: 24, fontWeight: 700, color: "#b91c1c", padding: "0 6px 4px", borderBottom: "2px solid #b91c1c", letterSpacing: "-0.005em" }}>
              Hazard × Vulnerability × Exposure
            </span>
            <span style={{ fontSize: 24, fontWeight: 700, color: "#b91c1c", padding: "4px 6px 0", letterSpacing: "-0.005em" }}>
              Capacity
            </span>
          </div>
        </div>
        <div style={{ fontSize: 16, fontWeight: 600, color: PF.ink, marginBottom: 8 }}>
          There are <span style={{ fontWeight: 900 }}>NO</span> natural disasters, only natural hazards
        </div>
        <div style={{ fontSize: 16, fontWeight: 600, color: PF.ink, marginBottom: 18 }}>
          Hazards cannot (always) be avoided; disasters can!
        </div>
        <p className="serif" style={{ margin: 0, fontSize: 15.5, lineHeight: 1.5, fontStyle: "italic", color: PF.ink2 }}>
          "Earthquakes do not kill people but collapsing buildings and lack of urban planning do..."
        </p>
      </div>
      <PFKeys />
    </div>
  );
};

// ─── I·B · Five perspectives ──────────────────────────────────────────────

const PF_PERSP = [
  { k: "Sky-eye",       c: PF.sky,   contributes: "abstraction, pattern, and comparison across time and space",                                                                                strength: "pattern",          limit: "overextension: treating visible change as complete knowledge" },
  { k: "Ground sensor", c: PF.teal,  contributes: "calibration and thresholds at the scale of local action",                                                                                  strength: "precision",        limit: "coverage" },
  { k: "Community",     c: PF.clay,  contributes: "use, memory, access, trusted warning channels, the meanings that make a place matter beyond its surface cover",                            strength: "relevance",        limit: "treated as anecdotal unless a project is designed to give it authority" },
  { k: "Embodied",      c: PF.amber, contributes: "heat at walking height, smoke indoors, unsafe routes, the fatigue of detours, surface vs livable recovery",                                strength: "lived exposure",   limit: "much of it leaves no spectral signature" },
  { k: "Institutional", c: PF.plum,  contributes: "mandate, jurisdiction, the decision that converts evidence into action",                                                                   strength: "governability",    limit: "abstraction from lived experience" },
];

const FigPerspectives = ({ accent = PF.navy } = {}) => {
  const [sel, setSel] = React.useState(0);
  const a = PF_PERSP[sel];
  return (
    <div style={{ border: `1px solid ${PF.rule2}`, background: PF.bg, display: "grid", gridTemplateColumns: "230px 1fr" }}>
      <div style={{ borderRight: `1px solid ${PF.rule}` }}>
        {PF_PERSP.map((p, i) => {
          const on = sel === i;
          return (
            <button key={i} onClick={() => setSel(i)} style={{
              width: "100%", textAlign: "left", cursor: "pointer", border: "none",
              borderBottom: `1px solid ${PF.rule}`,
              borderLeft: on ? `4px solid ${p.c}` : "4px solid transparent",
              background: on ? PF.bg2 : PF.bg, padding: "15px 16px", transition: "all .18s",
            }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: on ? PF.ink : PF.ink3 }}>{p.k}</div>
              <PFMono c={p.c} s={8.5} style={{ marginTop: 3, display: "block" }}>strength · {p.strength}</PFMono>
            </button>
          );
        })}
      </div>
      <div style={{ padding: "24px 26px" }} key={sel}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 12, height: 12, background: a.c }} />
          <span style={{ fontSize: 22, fontWeight: 700, color: PF.ink, letterSpacing: "-0.01em" }}>{a.k}</span>
        </div>
        <div style={{ marginTop: 18, animation: "pfIn .3s ease both" }}>
          <PFMono c={PF.ink3} s={9.5}>contributes</PFMono>
          <p className="serif" style={{ margin: "6px 0 0", fontSize: 17, lineHeight: 1.5, color: PF.ink }}>{a.contributes}</p>
        </div>
        <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <PFMono c={a.c} s={9.5}>strength</PFMono>
            <p className="serif" style={{ margin: "6px 0 0", fontSize: 14.5, color: PF.ink2, fontStyle: "italic" }}>{a.strength}</p>
          </div>
          <div>
            <PFMono c={PF.expose} s={9.5}>limit or hazard</PFMono>
            <p className="serif" style={{ margin: "6px 0 0", fontSize: 14.5, color: PF.ink2, fontStyle: "italic" }}>{a.limit}</p>
          </div>
        </div>
      </div>
      <PFKeys />
    </div>
  );
};

// ─── I·B merged · wheel + rich detail panel ───────────────────────────────
// One figure: radial wheel on the left, click any vertex to update the
// right-hand panel (philosopher pill, perspective name + subtitle,
// contributes callout, strength + limit boxes, sees/knows two-column list,
// instrument caption). The central hub is intentionally bare — no "Risk /
// UNDRR / hazard, exposure, vulnerability, capacity" text.
const PF_PERSPECTIVES_RICH = [
  {
    key: "sky", name: "Sky-eye", color: "#5d709a",
    philosopher: "PLATO",
    subtitle: "abstraction, distance, pattern, anticipation",
    contributes: "Scale, repetition, synoptic comparison, change detection.",
    strength: "pattern",
    limit: "Overextension: treating visible change as complete knowledge.",
    sees: ["flood extent","wildfire scars","shoreline erosion","land-cover change","vegetation stress","building exposure","road interruption","heat patterns","damage signatures"],
    instrument: "Satellite, aircraft, orbital platform. For decisions made at the rate and grain of daily life, the orbit is too far.",
    n: "01",
  },
  {
    key: "ground", name: "Ground sensor", color: "#0e7490",
    philosopher: "TYCHO",
    subtitle: "calibration at the scale of local action",
    contributes: "In-situ measurement, thresholds, validation against the world the sensor cannot reach.",
    strength: "precision",
    limit: "Coverage: precise in place, blind between points.",
    sees: ["river stage","rain gauge totals","soil-moisture probe","piezometer levels","tide gauge","air-quality station","weather mast","stream temperature","snow depth"],
    instrument: "Gauges, probes, loggers, met stations. Trustworthy where they are, silent everywhere else.",
    n: "02",
  },
  {
    key: "community", name: "Community", color: "#c2562a",
    philosopher: "ARISTOTLE",
    subtitle: "use, memory, access, refusal",
    contributes: "What the place is used for, by whom, at what time, with what trust, with what history.",
    strength: "relevance",
    limit: "Treated as anecdotal unless a project grants it authority.",
    sees: ["safe routes","seasonal access","warning channels","trusted sources","sacred and protected places","commons and shared rights","prior false alarms","local thresholds","what counts as recovery"],
    instrument: "Interview, walkthrough, mapping workshop, council meeting. The map is jointly authored or it does not bind.",
    n: "03",
  },
  {
    key: "embodied", name: "Embodied", color: "#b07c3e",
    philosopher: "ARISTOTLE",
    subtitle: "exposure as lived experience",
    contributes: "The bottom ten metres of the atmosphere, body altitude.",
    strength: "lived exposure",
    limit: "Much of it leaves no spectral signature.",
    sees: ["heat as exhaustion","slope as burden","distance as impossibility","evacuation as fear, delay, or refusal","smoke as breathing difficulty","water level as danger","traffic as stress","climate change as a change in daily movement"],
    instrument: "Q-TRAK and the body. For carbon dioxide as a health question rather than a climate question, satellites are measuring the wrong thing.",
    n: "04",
  },
  {
    key: "inst", name: "Institutional", color: "#6d5ac2",
    philosopher: "MACHIAVELLI",
    subtitle: "mandate, jurisdiction, decision",
    contributes: "Authority to act, budget, liability, legal effect, the conversion of evidence into action.",
    strength: "governability",
    limit: "Abstraction from lived experience.",
    sees: ["evacuation order","insurance trigger","disaster declaration","planning restriction","aid allocation","camp recognition","land claim","infrastructure mandate","adaptation funding"],
    instrument: "Statute, mandate, plan, budget. The form decides who is heard before the data arrives.",
    n: "05",
  },
];

const FigPerspectivesMerged = ({ accent = PF.navy } = {}) => {
  const [sel, setSel] = React.useState("embodied");
  const cx = 180, cy = 180, R = 118;
  const verts = PF_PERSPECTIVES_RICH.map((p, i) => {
    const a = (-90 + i * 72) * Math.PI / 180;
    return { ...p, x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) };
  });
  const a = verts.find(v => v.key === sel) || verts[0];

  // Subtle vertex symbol per perspective for visual differentiation
  const symbol = {
    sky: "↑", ground: "●", community: "◆", embodied: "→", inst: "▲",
  }[a.key];

  return (
    <div style={{
      border: `1px solid ${PF.rule2}`, background: PF.bg,
      display: "grid", gridTemplateColumns: "minmax(320px, 1fr) minmax(360px, 1.1fr)",
      gap: 0,
    }}>
      {/* LEFT — wheel, bare hub */}
      <div style={{ padding: "22px 18px 28px", background: PF.bg2, borderRight: `1px solid ${PF.rule}` }}>
        <svg viewBox="0 0 360 380" role="img" aria-label="Five perspectives arranged around a central hub" style={{ width: "100%", maxWidth: 360, margin: "0 auto", height: "auto", display: "block" }}>
          {/* Faint ring */}
          <circle cx={cx} cy={cy} r={R} fill="none" stroke={PF.rule2} strokeWidth="0.7" opacity="0.7" />
          {/* Spokes */}
          {verts.map(v => (
            <line key={v.key} x1={cx} y1={cy} x2={v.x} y2={v.y}
              stroke={v.key === sel ? v.color : PF.rule2}
              strokeWidth={v.key === sel ? 2 : 1}
              strokeDasharray={v.key === sel ? "0" : "3 4"}
              opacity={v.key === sel ? 0.9 : 0.55} />
          ))}
          {/* Bare hub, no UNDRR text */}
          <circle cx={cx} cy={cy} r="34" fill={PF.bg} stroke={PF.rule2} strokeWidth="1" />
          <text x={cx} y={cy + 5} textAnchor="middle" fontFamily="var(--serif)" fontSize="18" fill={PF.ink2} fontStyle="italic">Risk</text>
          {/* Vertices */}
          {verts.map(v => {
            const on = v.key === sel;
            const ux = v.x - cx, uy = v.y - cy, mag = Math.sqrt(ux*ux + uy*uy);
            let lx = cx + ux/mag * (R + 28), ly = cy + uy/mag * (R + 28) + 4;
            let anchor = "middle";
            if (lx < cx - 12) { anchor = "start"; lx = 4; }
            else if (lx > cx + 12) { anchor = "end"; lx = 356; }
            return (
              <g key={v.key} style={{ cursor: "pointer" }} onClick={() => setSel(v.key)}>
                <circle cx={v.x} cy={v.y} r={on ? 22 : 16} fill={v.color}
                  stroke={on ? PF.bg : "#ffffff"} strokeWidth={on ? 3 : 1.5}
                  opacity={on ? 1 : 0.85} />
                <text x={lx} y={ly} textAnchor={anchor}
                  fontFamily="var(--sans)" fontSize="12.5"
                  fontWeight={on ? 700 : 500}
                  fill={on ? v.color : PF.ink2}>
                  {v.name}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="mono" style={{
          fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
          color: PF.ink3, marginTop: 16, textAlign: "center",
        }}>fig. 02 · click any perspective</div>
      </div>

      {/* RIGHT — rich detail panel */}
      <div style={{ padding: "22px 26px 24px", borderTop: `3px solid ${a.color}` }} key={a.key}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, animation: "pfIn .25s ease both" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: PF.bg2, border: `1px solid ${PF.rule}`,
            padding: "5px 12px", borderRadius: 999,
          }}>
            <span className="mono" style={{ fontSize: 11, color: a.color, fontWeight: 600 }}>← {symbol}</span>
            <span className="mono" style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: PF.ink2, fontWeight: 600 }}>{a.philosopher}</span>
          </span>
          <span className="mono" style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: PF.ink3 }}>perspective, {a.n} of 05</span>
        </div>
        <h4 className="serif" style={{ margin: "16px 0 4px", fontSize: 32, fontWeight: 500, letterSpacing: "-0.012em", color: PF.ink, animation: "pfIn .25s ease both", animationDelay: ".04s" }}>{a.name}</h4>
        <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: a.color, fontWeight: 500, animation: "pfIn .25s ease both", animationDelay: ".06s" }}>{a.subtitle}</div>

        {/* Contributes callout */}
        <div style={{
          marginTop: 16,
          background: PF.bg2, borderLeft: `3px solid ${a.color}`,
          padding: "12px 14px",
          animation: "pfIn .25s ease both", animationDelay: ".08s",
        }}>
          <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.18em", textTransform: "uppercase", color: a.color, fontWeight: 600, marginBottom: 4 }}>Contributes</div>
          <div className="serif" style={{ fontSize: 15, lineHeight: 1.4, color: PF.ink }}>{a.contributes}</div>
        </div>

        {/* Strength + Limit boxes */}
        <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, animation: "pfIn .25s ease both", animationDelay: ".10s" }}>
          <div style={{ background: PF.bg2, border: `1px solid ${PF.rule}`, padding: "10px 12px" }}>
            <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.18em", textTransform: "uppercase", color: a.color, fontWeight: 600 }}>Strength</div>
            <div className="serif" style={{ fontSize: 16, fontStyle: "italic", color: PF.ink, marginTop: 4, fontWeight: 500 }}>{a.strength}</div>
          </div>
          <div style={{ background: PF.clayT, border: `1px solid ${PF.clay}44`, padding: "10px 12px" }}>
            <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.18em", textTransform: "uppercase", color: PF.clay, fontWeight: 600 }}>Limit or hazard</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.4, color: PF.ink2, marginTop: 4 }}>{a.limit}</div>
          </div>
        </div>

        {/* Sees, knows */}
        <div style={{ marginTop: 16, animation: "pfIn .25s ease both", animationDelay: ".12s" }}>
          <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.18em", textTransform: "uppercase", color: PF.ink3, fontWeight: 600, marginBottom: 8 }}>Sees, knows</div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 18, rowGap: 4 }}>
            {a.sees.map((s, i) => (
              <li key={i} style={{ fontSize: 13.5, lineHeight: 1.4, color: PF.ink, display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ width: 5, height: 5, background: a.color, flex: "none", marginTop: 6 }} aria-hidden="true" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instrument caption */}
        <p className="serif" style={{ margin: "18px 0 0", paddingTop: 14, borderTop: `1px solid ${PF.rule}`, fontSize: 13, lineHeight: 1.5, color: PF.ink3, fontStyle: "italic" }}>
          {a.instrument}
        </p>
      </div>
      <PFKeys />
    </div>
  );
};

// ─── II·A · Translation chain ─────────────────────────────────────────────

const PF_CHAIN = [
  { k:"Signal",    w:"the sensor records reflectance, backscatter, temperature, elevation, or moisture",                       q:"what physical interaction is being measured?",                              gain:"a physical measurement",          lose:"nothing yet; everything still latent" },
  { k:"Image",     w:"the signal becomes a spatial surface through correction, filtering, masking, compositing",               q:"what has been made visible, smoothed, or removed?",                         gain:"legibility, a surface to read",   lose:"clouds, noise, temporal variation" },
  { k:"Indicator", w:"the image becomes NDVI, NDWI, land-surface temperature, flood extent, or burn severity",                  q:"which phenomenon has been made legible, and through which proxy?",          gain:"a named phenomenon",              lose:"everything the proxy does not capture" },
  { k:"Class",     w:"continuous variation becomes water, forest, built-up, damaged, bare, flooded, or safe",                   q:"what rule converts variation into categories?",                             gain:"operational categories",          lose:"ambiguity, the residual, edge cases" },
  { k:"Model",     w:"the class becomes input to hazard, exposure, vulnerability, loss, or accessibility models",               q:"what assumptions about causality and transferability enter here?",          gain:"prediction, scenario, score",     lose:"local specificity, transfer error hidden" },
  { k:"Decision",  w:"the model informs warnings, evacuations, payouts, planning restrictions, aid allocation",                 q:"who has authority to act on the evidence?",                                 gain:"a course of action",              lose:"contestability, alternative framings" },
  { k:"Action",    w:"the decision affects people and places",                                                                  q:"who benefits, who is burdened, and who can contest the outcome?",           gain:"consequence in the world",        lose:"reversibility" },
];

const FigChain = ({ accent = PF.navy }) => {
  const [i, setI] = React.useState(0);
  const a = PF_CHAIN[i];
  return (
    <div style={{ border: `1px solid ${PF.rule2}`, background: PF.bg, padding: "22px 24px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", overflowX: "auto", paddingBottom: 6 }}>
        {PF_CHAIN.map((s, k) => {
          const on = i === k, past = k < i;
          return (
            <React.Fragment key={k}>
              <button onClick={() => setI(k)} style={{
                flex: "none", cursor: "pointer", border: "none", background: "transparent",
                padding: "4px 2px", textAlign: "center",
              }}>
                <div style={{
                  width: 30, height: 30, borderRadius: "50%", margin: "0 auto",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: on ? accent : (past ? PF.sky : PF.bg),
                  color: on || past ? "#fff" : PF.ink3,
                  border: `1.5px solid ${on ? accent : (past ? PF.sky : PF.rule2)}`,
                  transition: "all .2s",
                }}>
                  <span className="num mono" style={{ fontSize: 11, fontWeight: 600 }}>{k + 1}</span>
                </div>
                <PFMono c={on ? accent : PF.ink3} s={9} style={{ marginTop: 6, display: "block", whiteSpace: "nowrap" }}>{s.k}</PFMono>
              </button>
              {k < PF_CHAIN.length - 1 && (
                <div style={{ flex: "none", width: 26, height: 2, background: k < i ? PF.sky : PF.rule2, transition: "background .2s" }} />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, alignItems: "start" }} key={i}>
        <div style={{ animation: "pfIn .3s ease both" }}>
          <PFMono c={PF.ink4} s={9.5}>stage {i + 1} of 7</PFMono>
          <h4 style={{ margin: "6px 0 0", fontSize: 26, fontWeight: 700, color: PF.ink, letterSpacing: "-0.015em" }}>{a.k}</h4>
          <p className="serif" style={{ margin: "12px 0 0", fontSize: 16.5, lineHeight: 1.5, color: PF.ink2 }}>{a.w}</p>
          <div style={{ marginTop: 16, borderLeft: `3px solid ${accent}`, paddingLeft: 14 }}>
            <PFMono c={accent} s={9.5}>guiding question</PFMono>
            <p className="serif" style={{ margin: "5px 0 0", fontSize: 16, lineHeight: 1.45, color: PF.ink, fontStyle: "italic" }}>{a.q}</p>
          </div>
        </div>
        <div style={{ animation: "pfIn .3s ease both", animationDelay: ".06s", display: "grid", gap: 10 }}>
          <div style={{ border: `1px solid ${PF.sky}44`, borderTop: `3px solid ${PF.sky}`, background: PF.skyT, padding: "12px 14px" }}>
            <PFMono c={PF.sky} s={9.5}>gained ↑</PFMono>
            <p className="serif" style={{ margin: "5px 0 0", fontSize: 14, lineHeight: 1.4, color: PF.ink }}>{a.gain}</p>
          </div>
          <div style={{ border: `1px solid ${PF.clay}44`, borderTop: `3px solid ${PF.clay}`, background: PF.clayT, padding: "12px 14px" }}>
            <PFMono c={PF.clay} s={9.5}>transformed or lost ↓</PFMono>
            <p className="serif" style={{ margin: "5px 0 0", fontSize: 14, lineHeight: 1.4, color: PF.ink }}>{a.lose}</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 18, borderTop: `1px solid ${PF.rule}`, paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <PFMono c={PF.ink3} s={9.5}>the most consequential uncertainty often lies between the image and the action</PFMono>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0} className="mono" style={{
            cursor: i === 0 ? "default" : "pointer",
            border: `1px solid ${PF.rule2}`, background: "transparent", color: i === 0 ? PF.ink4 : PF.ink,
            fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", padding: "6px 12px", opacity: i === 0 ? 0.5 : 1,
          }}>prev</button>
          <button onClick={() => setI(Math.min(PF_CHAIN.length - 1, i + 1))} disabled={i === PF_CHAIN.length - 1} className="mono" style={{
            cursor: i === PF_CHAIN.length - 1 ? "default" : "pointer",
            border: `1px solid ${PF.ink}`, background: PF.ink, color: "#fff",
            fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", padding: "6px 12px", opacity: i === PF_CHAIN.length - 1 ? 0.5 : 1,
          }}>next stage</button>
        </div>
      </div>
      <PFKeys />
    </div>
  );
};

// ─── II·B · Three heuristics ──────────────────────────────────────────────

const PF_HEUR = [
  { k:"Sensor heuristic",   c:PF.sky,   def:"defines what kind of world can be measured. Optical privileges reflectance, SAR privileges roughness and moisture, thermal privileges surface temperature, LiDAR privileges structure.", ex:"A flooded road is visible as water extent. Its contamination, and the fear of crossing it after dark, require other evidence." },
  { k:"Model heuristic",    c:PF.amber, def:"defines how measurement becomes category or prediction, through thresholds, training labels, and loss functions. This is where bare, built-up, damaged, and high-risk become operational objects.", ex:"A building-detection model may identify rooftops accurately while leaving occupancy, tenure, and safe egress outside the output. Strong as geometry, incomplete as social evidence." },
  { k:"Decision heuristic", c:PF.plum,  def:"defines how evidence becomes action. A hazard map can become an evacuation order, an insurance premium, or a humanitarian priority.",            ex:"At that point the technical output enters mandate, trust, liability, and budget." },
];

const FigHeuristics = ({ accent = PF.navy } = {}) => {
  const [i, setI] = React.useState(0);
  const a = PF_HEUR[i];
  return (
    <div style={{ border: `1px solid ${PF.rule2}`, background: PF.bg }}>
      <div style={{ display: "flex", borderBottom: `1px solid ${PF.rule}` }}>
        {PF_HEUR.map((h, k) => {
          const on = i === k;
          return (
            <button key={k} onClick={() => setI(k)} style={{
              flex: 1, cursor: "pointer", border: "none",
              borderLeft: k ? `1px solid ${PF.rule}` : "none",
              borderTop: on ? `3px solid ${h.c}` : "3px solid transparent",
              background: on ? PF.bg : PF.bg2, padding: "14px 16px", textAlign: "left", transition: "all .2s",
            }}>
              <PFMono c={h.c} s={9}>heuristic {k + 1}</PFMono>
              <div style={{ marginTop: 5, fontSize: 14.5, fontWeight: 600, color: on ? PF.ink : PF.ink3 }}>{h.k.replace(" heuristic", "")}</div>
            </button>
          );
        })}
      </div>
      <div style={{ padding: "22px 26px" }} key={i}>
        <p className="serif" style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: PF.ink, animation: "pfIn .3s ease both" }}>
          <b style={{ fontFamily: "var(--sans)", fontWeight: 600, color: a.c }}>{a.k} </b>{a.def}
        </p>
        <div style={{ marginTop: 14, background: PF.bg2, borderLeft: `3px solid ${a.c}`, padding: "12px 16px", animation: "pfIn .3s ease both", animationDelay: ".05s" }}>
          <PFMono c={PF.ink3} s={9}>where it turns invisible</PFMono>
          <p className="serif" style={{ margin: "5px 0 0", fontSize: 15, lineHeight: 1.45, color: PF.ink2, fontStyle: "italic" }}>{a.ex}</p>
        </div>
      </div>
      <PFKeys />
    </div>
  );
};

// ─── II·B merged · three heuristics + three-layer stack, monochrome ───────
// One figure: three tabs (Sensor / Model / Decision) sit above three
// stacked layers (Physical / Interpretive / Ethical) so the heuristic and
// its layer of operation can be read together. Intentionally monochrome.
const PF_HEUR_M = [
  { k: "Sensor",
    def: "Sensor heuristic defines what kind of world can be measured. Optical privileges reflectance, SAR privileges roughness and moisture, thermal privileges surface temperature, LiDAR privileges structure.",
    ex:  "A flooded road is visible as water extent. Its contamination, and the fear of crossing it after dark, require other evidence." },
  { k: "Model",
    def: "Model heuristic defines how measurement becomes category or prediction, through thresholds, training labels, and loss functions. This is where bare, built-up, damaged, and high-risk become operational objects.",
    ex:  "A building-detection model may identify rooftops accurately while leaving occupancy, tenure, and safe egress outside the output. Strong as geometry, incomplete as social evidence." },
  { k: "Decision",
    def: "Decision heuristic defines how evidence becomes action. A hazard map can become an evacuation order, an insurance premium, or a humanitarian priority.",
    ex:  "At that point the technical output enters mandate, trust, liability, and budget." },
];

const PF_LAYERS = [
  { n: "01", verb: "measures",   name: "Physical",
    summary: "A sensor does not measure flood, methane, heat, or risk. It measures a signal.",
    items: ["signal","reflectance","backscatter","temperature","elevation","moisture"] },
  { n: "02", verb: "interprets", name: "Interpretive",
    summary: "Classes are not given by the world. They are decided in the chain — by labels, thresholds, residual classes, transferability assumptions.",
    items: ["class","threshold","training label","residual class","fusion choice","transferred model"] },
  { n: "03", verb: "decides",    name: "Ethical",
    summary: "The category becomes a decision about a life. The heuristic stack at the bottom and middle is now operating at the top of someone's life.",
    items: ["evacuation","funding","insurance","enforcement","humanitarian intervention","camp recognition","land claims","infrastructure repair","climate adaptation investment","surveillance"] },
];

const FigHeuristicsMerged = () => {
  const [i, setI] = React.useState(0);
  const a = PF_HEUR_M[i];
  return (
    <div style={{ border: `1px solid ${PF.rule2}`, background: PF.bg }}>
      {/* 3 monochrome tabs */}
      <div style={{ display: "flex", borderBottom: `1px solid ${PF.rule}` }}>
        {PF_HEUR_M.map((h, k) => {
          const on = i === k;
          return (
            <button key={k} onClick={() => setI(k)} style={{
              flex: 1, cursor: "pointer", border: "none",
              borderLeft: k ? `1px solid ${PF.rule}` : "none",
              borderTop: on ? `3px solid ${PF.ink}` : "3px solid transparent",
              background: on ? PF.bg : PF.bg2,
              padding: "14px 18px", textAlign: "left", transition: "all .18s",
            }}>
              <PFMono c={PF.ink3} s={9}>heuristic {k + 1}</PFMono>
              <div style={{ marginTop: 5, fontSize: 16, fontWeight: on ? 700 : 500, color: on ? PF.ink : PF.ink2, letterSpacing: "-0.005em" }}>{h.k}</div>
            </button>
          );
        })}
      </div>
      {/* Active heuristic panel */}
      <div style={{ padding: "20px 26px 22px", animation: "pfIn .2s ease both" }} key={i}>
        <p className="serif" style={{ margin: 0, fontSize: 16.5, lineHeight: 1.55, color: PF.ink }}>
          <b style={{ fontFamily: "var(--sans)", fontWeight: 700 }}>{a.k} heuristic</b> {a.def.replace(/^Sensor heuristic |^Model heuristic |^Decision heuristic /, "")}
        </p>
        <div style={{
          marginTop: 14, background: PF.bg2, border: `1px solid ${PF.rule}`,
          borderLeft: `3px solid ${PF.ink}`, padding: "12px 16px",
        }}>
          <PFMono c={PF.ink3} s={9}>where it turns invisible</PFMono>
          <p className="serif" style={{ margin: "5px 0 0", fontSize: 15, lineHeight: 1.5, color: PF.ink2, fontStyle: "italic" }}>{a.ex}</p>
        </div>
      </div>

      {/* The three-layer stack below */}
      <div style={{ padding: "20px 26px 22px", borderTop: `1px solid ${PF.rule}`, background: PF.bg2 }}>
        <PFMono c={PF.ink3} s={10}>the three-layer heuristic stack</PFMono>
        <p className="serif" style={{ margin: "6px 0 16px", fontSize: 14, lineHeight: 1.5, color: PF.ink2, fontStyle: "italic", maxWidth: 720 }}>
          A life, a decision, a consequence ↑ &nbsp;&nbsp; The vocabulary is owed to Andreas Braun, 2021 (<em>Progress in Physical Geography</em>) and Mia Bennett and colleagues, 2022, <em>Politics of Pixels</em> (<em>Progress in Human Geography</em>).
        </p>
        <div style={{ display: "flex", flexDirection: "column-reverse", gap: 10 }}>
          {PF_LAYERS.map((L, idx) => (
            <React.Fragment key={L.n}>
              <div style={{
                display: "grid", gridTemplateColumns: "60px auto 1fr", gap: 16,
                alignItems: "start",
                background: PF.bg, border: `1px solid ${PF.rule}`,
                padding: "14px 16px",
                borderLeft: `3px solid ${PF.ink}`,
              }}>
                <div>
                  <PFMono c={PF.ink3} s={10}>layer {L.n}</PFMono>
                  <div style={{ fontSize: 11, color: PF.ink4, marginTop: 4, fontStyle: "italic" }}>{L.verb}</div>
                </div>
                <div style={{ minWidth: 110 }}>
                  <div style={{ fontSize: 17, fontWeight: 700, color: PF.ink, letterSpacing: "-0.005em" }}>{L.name}</div>
                </div>
                <div>
                  <p className="serif" style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: PF.ink2 }}>{L.summary}</p>
                  <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {L.items.map((it, j) => (
                      <span key={j} className="mono" style={{
                        fontSize: 10.5, letterSpacing: "0.04em",
                        color: PF.ink3, padding: "2px 8px",
                        background: PF.bg2, border: `1px solid ${PF.rule}`,
                      }}>{it}</span>
                    ))}
                  </div>
                </div>
              </div>
              {idx < PF_LAYERS.length - 1 && (
                <div style={{ textAlign: "center", color: PF.ink4 }} className="mono">↑ becomes ↑</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <PFKeys />
    </div>
  );
};

// ─── II·C · Six mismatches ────────────────────────────────────────────────

const PF_MIS = [
  ["Unit",        "pixel, parcel, footprint, grid cell",                                 "household, route, use-right, room, season, obligation"],
  ["Time",        "revisit interval, composite window, archive cadence",                 "warning moment, market day, snowmelt week, crop cycle"],
  ["Category",    "land-cover class, residual class, training label",                    "commons, refuge, meeting place, ceremonial ground"],
  ["Validation",  "ground truth as confirmation of imagery",                             "interpretation, contestation, distinct knowledges held together"],
  ["Objectivity", "disembodied viewpoint, standardized pipeline",                        "positioned seeing, accountability, reflexive interpretation"],
  ["Visibility",  "publication and exposure as public good",                             "protection, confidentiality, refusal, restricted access"],
];

const FigMismatches = ({ accent = PF.navy }) => {
  const [flipped, setFlipped] = React.useState({});
  const allFlipped = Object.keys(flipped).length === PF_MIS.length && Object.values(flipped).every(Boolean);
  const toggleAll = () => { const v = !allFlipped; const o = {}; PF_MIS.forEach((_, i) => (o[i] = v)); setFlipped(o); };
  return (
    <div style={{ border: `1px solid ${PF.rule2}`, background: PF.bg }}>
      <div style={{ display: "grid", gridTemplateColumns: "130px 1fr 1fr", background: accent }}>
        <div style={{ padding: "11px 18px" }}><PFMono c="rgba(255,255,255,0.55)" s={9.5}>mismatch</PFMono></div>
        <div style={{ padding: "11px 18px" }}><PFMono c="#aecbe6" s={9.5}>what RS privileges</PFMono></div>
        <div style={{ padding: "11px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <PFMono c="#e6c79a" s={9.5}>what often matters</PFMono>
          <button onClick={toggleAll} className="mono" style={{
            cursor: "pointer", border: "1px solid rgba(255,255,255,0.35)", background: "transparent", color: "#fff",
            fontSize: 8.5, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 8px",
          }}>{allFlipped ? "hide all" : "reveal all"}</button>
        </div>
      </div>
      {PF_MIS.map((m, i) => {
        const f = flipped[i];
        return (
          <button key={i} onClick={() => setFlipped(s => ({ ...s, [i]: !s[i] }))} style={{
            width: "100%", textAlign: "left", cursor: "pointer", border: "none",
            display: "grid", gridTemplateColumns: "130px 1fr 1fr", alignItems: "stretch",
            borderTop: i ? `1px solid ${PF.rule}` : "none",
            background: PF.bg,
          }}>
            <div style={{ padding: "14px 18px", display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: 14.5, fontWeight: 600, color: PF.ink }}>{m[0]}</span>
            </div>
            <div style={{ padding: "14px 18px", borderLeft: `1px solid ${PF.rule}` }}>
              <span className="serif" style={{ fontSize: 14, color: PF.sky, fontStyle: "italic" }}>{m[1]}</span>
            </div>
            <div style={{ padding: "14px 18px", borderLeft: `1px solid ${PF.rule}`, background: f ? PF.clayT : "transparent", transition: "background .2s", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
              {f ? (
                <span className="serif" style={{ fontSize: 14, color: PF.ink, fontStyle: "italic", animation: "pfInL .25s ease both" }}>{m[2]}</span>
              ) : (
                <span className="mono" style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: PF.ink4 }}>tap to reveal</span>
              )}
              <span className="mono" style={{ fontSize: 12, color: f ? PF.clay : PF.ink4, flex: "none" }}>{f ? "●" : "○"}</span>
            </div>
          </button>
        );
      })}
      <div style={{ borderTop: `1px solid ${PF.rule}`, background: PF.bg2, padding: "12px 18px" }}>
        <PFMono c={PF.ink3} s={9.5}>a sharper pixel is not automatically a more relational understanding</PFMono>
      </div>
    </div>
  );
};

// ─── III·A · Four registers ───────────────────────────────────────────────

const PF_REG = [
  { k: "Sensor",        side: "technical", c: PF.sky,  brings: "different instruments observing the landscape", q: "what physical properties become visible when instruments combine?" },
  { k: "Data",          side: "technical", c: PF.sky,  brings: "different formats describing the problem",      q: "how do heterogeneous datasets become comparable enough to analyze?" },
  { k: "Experiential",  side: "political", c: PF.clay, brings: "different ways of sensing and remembering place", q: "what does the place mean to those who live, work, fear, or care for it?" },
  { k: "Institutional", side: "political", c: PF.clay, brings: "different mandates shaping the decision",       q: "who can act, through which mandate, with what legitimacy?" },
];

const FigRegisters = ({ accent = PF.navy } = {}) => {
  const [show, setShow] = React.useState("all");
  return (
    <div style={{ border: `1px solid ${PF.rule2}`, background: PF.bg, padding: "22px 26px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
        <PFMono c={PF.ink3} s={10}>where does the politics of interpretation enter?</PFMono>
        <div style={{ display: "inline-flex", border: `1px solid ${PF.rule2}` }}>
          {[["all","all four"],["technical","technical pair"],["political","political pair"]].map((o, i) => (
            <button key={o[0]} onClick={() => setShow(o[0])} className="mono" style={{
              cursor: "pointer", border: "none",
              borderLeft: i ? `1px solid ${PF.rule}` : "none",
              background: show === o[0] ? PF.ink : "transparent",
              color: show === o[0] ? "#fff" : PF.ink3,
              fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", padding: "6px 12px",
            }}>{o[1]}</button>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {PF_REG.map((r, i) => {
          const dim = show !== "all" && show !== r.side;
          return (
            <div key={i} style={{
              border: `1px solid ${dim ? PF.rule : r.c + "66"}`,
              borderTop: `3px solid ${dim ? PF.rule2 : r.c}`,
              background: dim ? PF.bg : (r.side === "technical" ? PF.skyT : PF.clayT),
              padding: "16px 18px", opacity: dim ? 0.4 : 1, transition: "all .25s",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontSize: 17, fontWeight: 700, color: PF.ink, letterSpacing: "-0.01em" }}>{r.k}</span>
                <PFMono c={r.c} s={8.5}>{r.side}</PFMono>
              </div>
              <p className="serif" style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.4, color: PF.ink2 }}>{r.brings}</p>
              <p className="serif" style={{ margin: "10px 0 0", fontSize: 13.5, lineHeight: 1.4, color: PF.ink, fontStyle: "italic" }}>{r.q}</p>
            </div>
          );
        })}
      </div>
      <p className="serif" style={{ margin: "16px 0 0", fontSize: 15, lineHeight: 1.5, color: PF.ink2, fontStyle: "italic", maxWidth: 840 }}>
        The first two registers are familiar in technical geospatial work. The last two are where the politics of interpretation becomes unavoidable.
      </p>
    </div>
  );
};

// ─── III·B · Counter-mapping flip cards ───────────────────────────────────

const PF_CMAP = [
  { sat: "a flood map shows water extent",                     counter: ["which households lacked transport","which shelters were inaccessible","which warning channels were trusted","which forms of loss went uncounted"] },
  { sat: "a land-cover product shows bare ground",             counter: ["commons","ceremonial grounds","evacuation sites","grazing corridors","places of memory"] },
  { sat: "a damage map shows destroyed buildings",             counter: ["renters displaced from standing structures","contaminated wells","the slow afterlife of disaster"] },
];

const FigCounterMap = ({ accent = PF.navy } = {}) => {
  const [flip, setFlip] = React.useState({ 0: false, 1: false, 2: false });
  return (
    <div style={{ border: `1px solid ${PF.rule2}`, background: PF.bg, padding: "22px 24px 24px" }}>
      <PFMono c={PF.ink3} s={10}>the satellite identifies where something changed · tap a card to ask what changed, for whom</PFMono>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 14 }}>
        {PF_CMAP.map((c, i) => {
          const f = flip[i];
          return (
            <button key={i} onClick={() => setFlip(s => ({ ...s, [i]: !s[i] }))} style={{
              textAlign: "left", cursor: "pointer",
              border: `1px solid ${f ? PF.clay : PF.sky}66`,
              borderTop: `3px solid ${f ? PF.clay : PF.sky}`,
              background: f ? PF.clayT : PF.skyT,
              padding: "16px 16px 18px", minHeight: 200, transition: "all .25s",
            }}>
              {!f ? (
                <div>
                  <PFMono c={PF.sky} s={9.5}>the satellite shows</PFMono>
                  <p className="serif" style={{ margin: "10px 0 0", fontSize: 17, lineHeight: 1.4, color: PF.ink }}>{c.sat}</p>
                  <div className="mono" style={{ marginTop: 18, fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: PF.ink4 }}>tap for the counter-map →</div>
                </div>
              ) : (
                <div style={{ animation: "pfIn .3s ease both" }}>
                  <PFMono c={PF.clay} s={9.5}>the counter-map shows</PFMono>
                  <ul style={{ margin: "10px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 6 }}>
                    {c.counter.map((t, k) => (
                      <li key={k} style={{ display: "grid", gridTemplateColumns: "12px 1fr", gap: 8, fontSize: 13.5 }}>
                        <span style={{ width: 5, height: 5, background: PF.clay, marginTop: 6 }} />
                        <span className="serif" style={{ color: PF.ink, lineHeight: 1.35, fontStyle: "italic" }}>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
          );
        })}
      </div>
      <p className="serif" style={{ margin: "16px 0 0", fontSize: 15.5, lineHeight: 1.5, color: PF.ink2, fontStyle: "italic" }}>
        Technical fusion asks how data streams describe the same state. Counter-mapping asks who gets to define the state in the first place.
      </p>
      <PFKeys />
    </div>
  );
};

// ─── IV·A · Accountable visibility 2×2 ────────────────────────────────────

const PF_QUAD = {
  "0-0": { name: "Erasure",                c: PF.expose,  def: "places, people, and claims remain unseen, uncounted, and excluded from decisions.",                          ex: "informal settlements missing from datasets; slow recovery losses absent from damage assessments." },
  "1-0": { name: "Exposure",               c: PF.expose,  def: "places become visible to actors who can control, evict, stigmatize, police, or extract.",                    ex: "migrant routes mapped without protection; vulnerability maps feeding insurance exclusion." },
  "0-1": { name: "Protection",             c: PF.protect, def: "some knowledge stays deliberately restricted because visibility carries risk.",                              ex: "sensitive harvesting areas, sacred places, or household-level vulnerability data." },
  "1-1": { name: "Accountable visibility", c: PF.protect, def: "data circulates under governance, consent, purpose limitation, and community interpretation.",               ex: "community-validated risk maps and counter-maps used to support claims and protection." },
};

const FigVisibilityMatrix = ({ accent = PF.navy } = {}) => {
  const [vis, setVis] = React.useState(1);
  const [auth, setAuth] = React.useState(1);
  const a = PF_QUAD[`${vis}-${auth}`];
  return (
    <div style={{ border: `1px solid ${PF.rule2}`, background: PF.bg, padding: "22px 26px 24px" }}>
      <PFMono c={PF.ink3} s={10}>the aim is not maximum visibility but accountable visibility · click a quadrant</PFMono>
      <div style={{ display: "grid", gridTemplateColumns: "26px 1fr 360px", gap: 16, marginTop: 16, alignItems: "stretch" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PFMono c={PF.ink3} s={9} style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.18em" }}>VISIBILITY →</PFMono>
        </div>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 6, aspectRatio: "1.2 / 1" }}>
            {[[1,0],[1,1],[0,0],[0,1]].map(([v, au], idx) => {
              const q = PF_QUAD[`${v}-${au}`];
              const on = vis === v && auth === au;
              return (
                <button key={idx} onClick={() => { setVis(v); setAuth(au); }} style={{
                  cursor: "pointer", textAlign: "left",
                  border: `1.5px solid ${on ? q.c : PF.rule2}`,
                  background: on ? (q.c === PF.protect ? PF.protectT : PF.exposeT) : PF.bg2,
                  padding: "14px 16px", transition: "all .2s",
                  boxShadow: on ? `0 0 0 2px ${q.c}33` : "none",
                }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: on ? q.c : PF.ink3, letterSpacing: "-0.01em" }}>{q.name}</span>
                  <PFMono c={PF.ink4} s={8} style={{ display: "block", marginTop: 5 }}>{v ? "high" : "low"} vis · {au ? "high" : "low"} authority</PFMono>
                </button>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: 8 }}>
            <PFMono c={PF.ink3} s={9} style={{ letterSpacing: "0.18em" }}>COMMUNITY AUTHORITY →</PFMono>
          </div>
        </div>
        <div style={{
          border: `1px solid ${a.c}55`, borderTop: `3px solid ${a.c}`,
          background: a.c === PF.protect ? PF.protectT : PF.exposeT,
          padding: "18px 20px",
        }} key={`${vis}-${auth}`}>
          <span style={{ fontSize: 21, fontWeight: 700, color: a.c, letterSpacing: "-0.01em", animation: "pfIn .3s ease both" }}>{a.name}</span>
          <p className="serif" style={{ margin: "12px 0 0", fontSize: 15.5, lineHeight: 1.5, color: PF.ink, animation: "pfIn .3s ease both" }}>{a.def}</p>
          <div style={{ marginTop: 14, borderTop: `1px solid ${a.c}33`, paddingTop: 10 }}>
            <PFMono c={PF.ink3} s={9}>for example</PFMono>
            <p className="serif" style={{ margin: "5px 0 0", fontSize: 14, lineHeight: 1.45, color: PF.ink2, fontStyle: "italic" }}>{a.ex}</p>
          </div>
        </div>
      </div>
      <PFKeys />
    </div>
  );
};

// ─── IV·B · Solastalgia signal vs felt ────────────────────────────────────

const PF_SOLAS = [
  { change: "a shoreline lost to erosion",     signal: "a measurable coastal process",       felt: "the disappearance of childhood memory" },
  { change: "a river that no longer freezes",  signal: "a climate signal",                   felt: "a rupture in intergenerational practice" },
  { change: "disappearing snow",               signal: "a declining seasonal albedo record", felt: "a home becoming unfamiliar while you remain in place" },
];

const FigSolastalgia = ({ accent = PF.navy } = {}) => {
  const [mode, setMode] = React.useState("felt");
  const felt = mode === "felt";
  return (
    <div style={{ border: `1px solid ${PF.rule2}`, background: PF.bg, padding: "22px 26px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
        <PFMono c={PF.ink3} s={10}>read the same change two ways</PFMono>
        <div style={{ display: "inline-flex", border: `1px solid ${PF.rule2}` }}>
          {[["signal","what RS measures"],["felt","what it does to belonging"]].map((o, i) => (
            <button key={o[0]} onClick={() => setMode(o[0])} className="mono" style={{
              cursor: "pointer", border: "none",
              borderLeft: i ? `1px solid ${PF.rule}` : "none",
              background: mode === o[0] ? (o[0] === "felt" ? PF.clay : PF.sky) : "transparent",
              color: mode === o[0] ? "#fff" : PF.ink3,
              fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", padding: "6px 12px",
            }}>{o[1]}</button>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gap: 10 }}>
        {PF_SOLAS.map((s, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 0, border: `1px solid ${PF.rule2}`, alignItems: "stretch" }}>
            <div style={{ padding: "14px 18px", background: PF.bg2, borderRight: `1px solid ${PF.rule}` }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: PF.ink }}>{s.change}</span>
            </div>
            <div style={{ padding: "14px 18px", background: felt ? PF.clayT : PF.skyT, transition: "background .25s" }} key={mode}>
              <PFMono c={felt ? PF.clay : PF.sky} s={9}>{felt ? "solastalgia names" : "the instrument records"}</PFMono>
              <p className="serif" style={{ margin: "5px 0 0", fontSize: 15.5, lineHeight: 1.4, color: PF.ink, fontStyle: felt ? "italic" : "normal", animation: "pfInL .25s ease both" }}>
                {felt ? s.felt : s.signal}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="serif" style={{ margin: "16px 0 0", fontSize: 15, lineHeight: 1.5, color: PF.ink2, fontStyle: "italic" }}>
        Remote sensing shows the changed surface. Solastalgia names what the changed surface does to belonging.
      </p>
      <PFKeys />
    </div>
  );
};

// ─── Taiwan · probability vs willingness ──────────────────────────────────

const PF_MEDIATORS = [
  { k: "prior false alarms",                       d: -0.22 },
  { k: "distrust of the source",                   d: -0.26 },
  { k: "high evacuation cost",                     d: -0.18 },
  { k: "poor shelter quality",                     d: -0.16 },
  { k: "care responsibilities · elders, animals",  d: -0.20 },
  { k: "strong place attachment",                  d: -0.14 },
];

const FigTaiwan = ({ accent = PF.navy } = {}) => {
  const [p, setP] = React.useState(70);
  const [on, setOn] = React.useState({ 0: true, 1: true, 4: true });
  const drag = PF_MEDIATORS.reduce((s, m, i) => s + (on[i] ? m.d : 0), 0);
  const base = p / 100;
  const willing = Math.max(4, Math.round((base * (1 + drag)) * 100 * 0.9 + (drag < -0.4 ? -6 : 0)));
  const W = 620, H = 240, x0 = 46, x1 = 600, y0 = 20, y1 = 200;
  const xAt = v => x0 + (x1 - x0) * (v / 100);
  const yAt = v => y1 - (y1 - y0) * (v / 100);
  const pts = [];
  for (let q = 0; q <= 100; q += 4) {
    const w = Math.max(4, (q / 100) * (1 + drag) * 90);
    pts.push([xAt(q), yAt(w)]);
  }
  const wpath = pts.map((pt, i) => `${i ? "L" : "M"}${pt[0].toFixed(1)} ${pt[1].toFixed(1)}`).join(" ");
  return (
    <div style={{ border: `1px solid ${PF.rule2}`, background: PF.bg, padding: "22px 26px 24px" }}>
      <PFMono c={PF.ink3} s={10}>a typhoon warning · probability of damage is not willingness to evacuate</PFMono>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, marginTop: 14, alignItems: "start" }}>
        <div>
          <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
            <line x1={x0} y1={y0} x2={x0} y2={y1} stroke={PF.rule2} />
            <line x1={x0} y1={y1} x2={x1} y2={y1} stroke={PF.rule2} />
            <line x1={xAt(0)} y1={yAt(0)} x2={xAt(100)} y2={yAt(90)} stroke={PF.ink4} strokeWidth="1" strokeDasharray="4 4" />
            <text x={xAt(100)} y={yAt(90) - 6} fontFamily="var(--mono)" fontSize="9" fill={PF.ink4} textAnchor="end">if response tracked probability</text>
            <path d={wpath} fill="none" stroke={PF.clay} strokeWidth="2.6" />
            <line x1={xAt(p)} y1={y0} x2={xAt(p)} y2={y1} stroke={PF.ink} strokeWidth="1" strokeDasharray="2 2" />
            <circle cx={xAt(p)} cy={yAt(willing)} r="5.5" fill={PF.clay} stroke="#fff" strokeWidth="1.6" />
            <circle cx={xAt(p)} cy={yAt(p * 0.9)} r="4" fill={PF.ink4} />
            <text x={x0 - 6} y={y0 + 4} fontFamily="var(--mono)" fontSize="9" fill={PF.ink3} textAnchor="end">act</text>
            <text x={x0 - 6} y={y1} fontFamily="var(--mono)" fontSize="9" fill={PF.ink3} textAnchor="end">stay</text>
            <text x={x1} y={y1 + 16} fontFamily="var(--mono)" fontSize="9" fill={PF.ink3} textAnchor="end">probability of damage →</text>
          </svg>
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 14, alignItems: "center", marginTop: 6 }}>
            <PFMono c={PF.ink3} s={9}>probability</PFMono>
            <input type="range" min="0" max="100" value={p} onChange={e => setP(+e.target.value)} style={{ width: "100%", accentColor: PF.clay, cursor: "pointer" }} />
            <span className="mono" style={{ fontSize: 11, color: PF.ink2 }}><b style={{ fontSize: 15 }}>{p}%</b></span>
          </div>
          <div style={{ marginTop: 12, display: "flex", gap: 18, justifyContent: "center" }}>
            <span className="mono" style={{ fontSize: 11, color: PF.ink4 }}>damage prob&nbsp;<b style={{ fontSize: 14, color: PF.ink2 }}>{p}%</b></span>
            <span className="mono" style={{ fontSize: 11, color: PF.clay }}>willingness to evacuate&nbsp;<b style={{ fontSize: 14 }}>{willing}%</b></span>
          </div>
        </div>
        <div>
          <PFMono c={PF.ink3} s={9.5}>toggle what mediates the warning</PFMono>
          <div style={{ marginTop: 10, display: "grid", gap: 7 }}>
            {PF_MEDIATORS.map((m, i) => (
              <button key={i} onClick={() => setOn(s => ({ ...s, [i]: !s[i] }))} style={{
                textAlign: "left", cursor: "pointer",
                border: `1px solid ${on[i] ? PF.clay : PF.rule2}`,
                background: on[i] ? PF.clayT : PF.bg,
                padding: "8px 11px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8,
                transition: "all .15s",
              }}>
                <span className="serif" style={{ fontSize: 13.5, color: on[i] ? PF.ink : PF.ink3, fontStyle: "italic" }}>{m.k}</span>
                <span className="mono" style={{ fontSize: 11, color: on[i] ? PF.clay : PF.ink4 }}>{on[i] ? "●" : "○"}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <p className="serif" style={{ margin: "16px 0 0", fontSize: 15, lineHeight: 1.5, color: PF.ink2, fontStyle: "italic" }}>
        The last mile is not a delivery problem. It is a meaning problem: whether a warning belongs to a world people recognize, and whether the institution issuing it has earned their confidence.
      </p>
    </div>
  );
};

// ─── Practice · community-first workflow ──────────────────────────────────

const PF_FLOW = [
  ["Community question",              "define the problem through lived, institutional, and ecological relevance",            "decision question, concern, scenario need"],
  ["Scoping workshop",                "identify partners, authority, risks, constraints, and ethical pathway",                "partnership charter, evidence plan"],
  ["Multimodal evidence plan",        "decide what satellite, ground, community, and institutional evidence is needed",       "data plan, method matrix"],
  ["Remote-sensing & in-situ collection", "gather spatial and sensor-based evidence",                                         "imagery, indices, maps, sensor records"],
  ["Interview & community mapping",   "document use, memory, access, trust, embodied exposure, local categories",             "narratives, counter-maps, interpretation notes"],
  ["Institutional & legal mapping",   "clarify who can act and under what mandate",                                           "responsibility matrix, governance map"],
  ["Translation ledger",              "track how signal becomes indicator, class, model, and decision",                       "audit table, assumptions log"],
  ["Participatory interpretation",    "review outputs with those affected or responsible",                                    "revised categories, contested interpretations"],
  ["Visibility & consent review",     "decide what circulates, in what form, under whose authority",                          "release protocol, restricted layers"],
  ["Release",                         "share outputs according to agreed purposes and limits",                                "public map, internal map, scenario kit"],
  ["Action, monitoring, revision",    "use the evidence and update the process",                                              "adaptation measure, evaluation report"],
];

const FigWorkflow = ({ accent = PF.navy } = {}) => {
  const [open, setOpen] = React.useState(0);
  return (
    <div style={{ border: `1px solid ${PF.rule2}`, background: PF.bg }}>
      <div style={{ padding: "14px 24px", borderBottom: `1px solid ${PF.rule}`, background: PF.bg2 }}>
        <PFMono c={PF.clay} s={10}>it begins with the question, not the available product</PFMono>
      </div>
      <div style={{ padding: "8px 0" }}>
        {PF_FLOW.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderBottom: i < PF_FLOW.length - 1 ? `1px solid ${PF.rule}` : "none" }}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                width: "100%", textAlign: "left", cursor: "pointer", border: "none",
                background: isOpen ? PF.bg2 : "transparent",
                padding: "13px 24px", display: "grid", gridTemplateColumns: "34px 1fr auto", alignItems: "center", gap: 12,
              }}>
                <span className="mono num" style={{ fontSize: 12, fontWeight: 600, color: i === 0 ? PF.clay : PF.ink4 }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontSize: 15.5, fontWeight: 600, color: isOpen ? PF.ink : PF.ink2 }}>{f[0]}</span>
                <span className="mono" style={{ fontSize: 13, color: PF.ink4 }}>{isOpen ? "–" : "+"}</span>
              </button>
              {isOpen && (
                <div style={{ padding: "0 24px 16px 70px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, animation: "pfIn .25s ease both" }}>
                  <div>
                    <PFMono c={PF.ink3} s={9}>purpose</PFMono>
                    <p className="serif" style={{ margin: "5px 0 0", fontSize: 14.5, lineHeight: 1.45, color: PF.ink }}>{f[1]}</p>
                  </div>
                  <div>
                    <PFMono c={PF.sky} s={9}>typical output</PFMono>
                    <p className="serif" style={{ margin: "5px 0 0", fontSize: 14.5, lineHeight: 1.45, color: PF.ink2, fontStyle: "italic" }}>{f[2]}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <PFKeys />
    </div>
  );
};

// ─── Practice · visibility-risk review ────────────────────────────────────

const PF_SAMPLES = [
  { name: "Informal-settlement footprints",    a: ["service delivery, upgrading, vaccination reach"], h: ["eviction, forced removal, speculation"], rec: "generalize density, not individual structures", hold: "high" },
  { name: "Household flood-vulnerability index", a: ["targeted preparedness and aid"],              h: ["insurance exclusion, permanent stigma"], rec: "release aggregated to neighbourhood",         hold: "high" },
  { name: "Regional flood-extent layer",        a: ["early warning, relief routing"],              h: ["limited at this scale"],                  rec: "safe to publish openly",                       hold: "low" },
];

const PF_TESTS = [
  ["Benefit",     "who can use this for care, mitigation, protection, planning, or claim-making?"],
  ["Harm",        "who could use it for extraction, eviction, surveillance, stigma, or exclusion?"],
  ["Authority",   "who has standing to approve, restrict, reinterpret, or refuse publication?"],
  ["Precision",   "does the useful purpose require exact location, or would a generalized pattern be safer?"],
  ["Temporal",    "should release be delayed until a risk period has passed?"],
  ["Reciprocity", "what benefit, capacity, or control returns to the represented community?"],
];

const FigVisibilityReview = ({ accent = PF.navy }) => {
  const [s, setS] = React.useState(0);
  const a = PF_SAMPLES[s];
  return (
    <div style={{ border: `1px solid ${PF.rule2}`, background: PF.bg }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 0, borderBottom: `1px solid ${PF.rule}` }}>
        {PF_SAMPLES.map((sm, i) => {
          const on = s === i;
          return (
            <button key={i} onClick={() => setS(i)} style={{
              flex: 1, minWidth: 160, cursor: "pointer", border: "none",
              borderLeft: i ? `1px solid ${PF.rule}` : "none",
              borderTop: on ? `3px solid ${accent}` : "3px solid transparent",
              background: on ? PF.bg : PF.bg2, padding: "13px 16px", textAlign: "left", transition: "all .2s",
            }}>
              <PFMono c={PF.ink4} s={8.5}>run the review on</PFMono>
              <div style={{ marginTop: 4, fontSize: 13.5, fontWeight: 600, color: on ? PF.ink : PF.ink3, lineHeight: 1.2 }}>{sm.name}</div>
            </button>
          );
        })}
      </div>
      <div style={{ padding: "20px 26px" }} key={s}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, animation: "pfIn .3s ease both" }}>
          <div style={{ border: `1px solid ${PF.protect}44`, borderTop: `3px solid ${PF.protect}`, background: PF.protectT, padding: "12px 14px" }}>
            <PFMono c={PF.protect} s={9.5}>benefit · care</PFMono>
            {a.a.map((t, i) => (<p key={i} className="serif" style={{ margin: "6px 0 0", fontSize: 14, color: PF.ink }}>{t}</p>))}
          </div>
          <div style={{ border: `1px solid ${PF.expose}44`, borderTop: `3px solid ${PF.expose}`, background: PF.exposeT, padding: "12px 14px" }}>
            <PFMono c={PF.expose} s={9.5}>harm · control</PFMono>
            {a.h.map((t, i) => (<p key={i} className="serif" style={{ margin: "6px 0 0", fontSize: 14, color: PF.ink }}>{t}</p>))}
          </div>
        </div>
        <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, alignItems: "center", background: PF.bg2, border: `1px solid ${PF.rule2}`, padding: "12px 16px" }}>
          <div>
            <PFMono c={PF.ink3} s={9}>recommended release</PFMono>
            <div className="serif" style={{ fontSize: 15, color: PF.ink, fontStyle: "italic", marginTop: 3 }}>{a.rec}</div>
          </div>
          <span className="mono" style={{
            fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase",
            color: a.hold === "high" ? PF.expose : PF.protect,
            border: `1px solid ${a.hold === "high" ? PF.expose : PF.protect}55`,
            padding: "4px 10px",
          }}>{a.hold === "high" ? "hold · govern access" : "low risk · open"}</span>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${PF.rule}`, background: PF.bg2, padding: "14px 26px" }}>
        <PFMono c={PF.ink3} s={9.5}>the six tests</PFMono>
        <div style={{ marginTop: 10, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
          {PF_TESTS.map((t, i) => (
            <div key={i} style={{ borderLeft: `3px solid ${accent}`, paddingLeft: 11 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: PF.ink }}>{t[0]}</div>
              <div className="serif" style={{ fontSize: 12.5, lineHeight: 1.4, color: PF.ink3, marginTop: 2 }}>{t[1]}</div>
            </div>
          ))}
        </div>
      </div>
      <PFKeys />
    </div>
  );
};

Object.assign(window, {
  PF, PFMono, PFKeys, PFMovement, Block, PFProse, MOVEMENT_ACCENT,
  FigRiskRelation, FigPerspectives, FigPerspectivesMerged, FigChain, FigHeuristics, FigHeuristicsMerged, FigMismatches,
  FigRegisters, FigCounterMap, FigVisibilityMatrix, FigSolastalgia,
  FigTaiwan, FigWorkflow, FigVisibilityReview,
});
