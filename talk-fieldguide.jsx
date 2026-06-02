// =======================================================================
// A Critical Field Guide to Remote Sensing & Community Mapping.
// Twelve principles + the four "how to use" moments, each principle with
// its own figure, the matrix at the top, back-to-top buttons at the end
// of every principle, and the closing dark statement.
// =======================================================================

const FG = {
  sky: "var(--sky)",   skyT: "var(--sky-tint)",   sky2: "var(--sky-2)",
  clay: "var(--clay)", clayT: "var(--clay-tint)", clay2: "var(--clay-2)",
  navy: "var(--navy)", amber: "var(--amber)", teal: "var(--teal)", plum: "var(--plum)",
  protect: "var(--protect)", protectT: "var(--protect-tint)",
  expose: "var(--expose)",   exposeT: "var(--expose-tint)",
  rule: "var(--rule)", rule2: "var(--paper-4)", bg: "var(--paper)", bg2: "var(--paper-2)",
  ink: "var(--ink)",   ink2: "var(--ink-2)", ink3: "var(--ink-3)", ink4: "var(--ink-4)",
};

// ─── small shared atoms ──────────────────────────────────────────────────

const FgArrow = ({ size = 36, color }) => (
  <svg width={size} height={Math.round(size * 0.48)} viewBox="0 0 42 20"
    aria-hidden="true" style={{ flex: "0 0 auto" }}>
    <line x1="2" y1="10" x2="34" y2="10" stroke={color || FG.ink4} strokeWidth="2" />
    <polyline points="28,4 40,10 28,16" fill="none"
      stroke={color || FG.ink4} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FromTo = ({ from, to, size = "lg" }) => {
  const fontSize = size === "lg" ? 38 : 22;
  return (
    <div style={{
      display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 14,
      fontFamily: "var(--sans)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05,
    }}>
      <span style={{ color: FG.sky, fontSize }}>{from}</span>
      <FgArrow size={size === "lg" ? 42 : 28} />
      <span style={{ color: FG.clay, fontSize }}>{to}</span>
    </div>
  );
};

const FigureCard = ({ children, pad = 26, style }) => (
  <div style={{
    margin: "30px 0 8px", padding: pad,
    background: FG.bg, border: `1px solid ${FG.rule2}`, borderRadius: 4,
    ...style,
  }}>{children}</div>
);

const Couplet = ({ a, b }) => (
  <div style={{
    margin: "26px 0", padding: "22px 26px",
    background: FG.skyT, borderLeft: `4px solid ${FG.sky}`,
  }}>
    <p className="serif" style={{ margin: 0, fontSize: 19, lineHeight: 1.45, color: FG.ink, fontWeight: 500 }}>{a}</p>
    {b && <p className="serif" style={{ margin: "8px 0 0", fontSize: 19, lineHeight: 1.45, color: FG.clay, fontWeight: 500 }}>{b}</p>}
  </div>
);

const PracticalTest = ({ text }) => (
  <div style={{
    marginTop: 30, paddingTop: 18, borderTop: `2px solid ${FG.ink}`,
    display: "grid", gridTemplateColumns: "180px 1fr", gap: 24, alignItems: "baseline",
  }}>
    <span className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: FG.ink3 }}>Practical test</span>
    <span className="serif" style={{ fontSize: 18, lineHeight: 1.5, color: FG.ink, fontWeight: 500 }}>{text}</span>
  </div>
);

const BackToTop = () => (
  <div style={{ marginTop: 26, display: "flex", justifyContent: "flex-end" }}>
    <a href="#fg-matrix" className="mono" style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      padding: "10px 18px", border: `1px solid ${FG.rule2}`,
      background: FG.bg, color: FG.navy, textDecoration: "none",
      fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase",
    }}>
      <span aria-hidden="true">↑</span>
      Back to the twelve at a glance
    </a>
  </div>
);

// ─── utility figures ─────────────────────────────────────────────────────

const FrameworkPanel = () => {
  const [open, setOpen] = React.useState(null);
  const colors = [FG.sky, FG.amber, FG.teal, FG.clay];
  const summaries = [
    "Begin with the decision, risk or community concern. Let the dataset follow the question.",
    "Every workflow narrows the world. Make translations explicit; treat each output as produced evidence.",
    "The map becomes meaningful when those affected can interpret, contest, refine or restrict its use.",
    "Visibility shifts power. Ask who gains and who is exposed before the dataset leaves the team.",
  ];
  return (
    <FigureCard>
      <div className="mono" style={{
        fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
        color: FG.ink3, marginBottom: 18,
      }}>Four moments where the guide is most useful · click a card to read</div>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 20, left: 12, right: 12, height: 2, background: FG.rule }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, position: "relative" }}>
          {FG_MOMENTS.map((m, i) => {
            const isOpen = open === i;
            return (
              <button key={i} onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen} aria-controls="fg-moment-panel"
                style={{
                  appearance: "none", cursor: "pointer", textAlign: "left",
                  background: isOpen ? `color-mix(in oklch, ${colors[i]} 10%, var(--paper))` : FG.bg,
                  border: `1px solid ${isOpen ? colors[i] : FG.rule2}`,
                  borderTop: `3px solid ${colors[i]}`,
                  padding: "16px 16px 18px",
                  position: "relative", color: FG.ink, fontFamily: "var(--sans)",
                  transition: "background 200ms, border-color 200ms",
                }}>
                <div style={{
                  width: 22, height: 22, borderRadius: "50%", background: colors[i], color: FG.bg,
                  fontFamily: "var(--mono)", fontSize: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 14, position: "relative", zIndex: 2,
                }}>{i + 1}</div>
                <div className="mono" style={{
                  fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: colors[i], marginBottom: 8,
                }}>{m.label}</div>
                <div className="serif" style={{
                  fontSize: 16, fontWeight: 600, color: FG.ink, marginBottom: 10,
                  letterSpacing: "-0.01em", lineHeight: 1.2,
                }}>{m.title}</div>
                <p className="serif" style={{
                  margin: 0, fontSize: 13, lineHeight: 1.5, color: FG.ink2,
                }}>{summaries[i]}</p>
                <div className="mono" style={{
                  marginTop: 12, fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase",
                  color: colors[i],
                }}>{isOpen ? "↑ Hide" : "↓ Read in full"}</div>
              </button>
            );
          })}
        </div>
      </div>
      {open !== null && (
        <div id="fg-moment-panel" style={{
          marginTop: 24, padding: "32px 32px 30px",
          background: `color-mix(in oklch, ${colors[open]} 6%, var(--paper))`,
          border: `1px solid ${colors[open]}`,
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 14 }}>
            <span className="num" style={{
              fontSize: 34, color: colors[open], letterSpacing: "-0.02em", fontWeight: 300, lineHeight: 1,
            }}>{String(open + 1).padStart(2, "0")}</span>
            <span className="mono" style={{
              fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: colors[open],
            }}>{FG_MOMENTS[open].label}</span>
          </div>
          <h4 className="serif" style={{
            margin: "0 0 22px", fontSize: 28, fontWeight: 500, color: FG.ink,
            letterSpacing: "-0.014em", lineHeight: 1.15, maxWidth: 780,
          }}>{FG_MOMENTS[open].title}</h4>
          <div style={{ maxWidth: 720 }}>
            {FG_MOMENTS[open].paragraphs.map((para, i) => (
              <p key={i} className="serif" style={{
                margin: "0 0 16px", fontSize: 16.5, lineHeight: 1.65, color: FG.ink2,
              }}>{para}</p>
            ))}
          </div>
          {FG_MOMENTS[open].questions && (
            <ul style={{ margin: "8px 0 18px", padding: 0, listStyle: "none", maxWidth: 720 }}>
              {FG_MOMENTS[open].questions.map((q, i) => (
                <li key={i} className="serif" style={{
                  padding: "10px 0",
                  borderBottom: i < FG_MOMENTS[open].questions.length - 1
                    ? `1px solid color-mix(in oklch, ${colors[open]} 28%, transparent)`
                    : "none",
                  fontSize: 16.5, lineHeight: 1.55, color: FG.ink,
                }}>{q}</li>
              ))}
            </ul>
          )}
          {FG_MOMENTS[open].closing && (
            <p className="serif" style={{
              margin: "22px 0 0", padding: "18px 22px",
              background: FG.bg, borderLeft: `4px solid ${colors[open]}`,
              fontSize: 17, lineHeight: 1.55, color: FG.ink, fontWeight: 500,
              maxWidth: 780,
            }}>{FG_MOMENTS[open].closing}</p>
          )}
        </div>
      )}
    </FigureCard>
  );
};

const TranslationChain = () => {
  const stages = ["raw imagery", "bands", "indices", "thresholds", "classes", "maps", "evidence", "decisions"];
  const xs = stages.map((_, i) => 80 + i * 120);
  const heights = stages.map((_, i) => 120 - i * (120 - 26) / 7);
  const topLine = heights.map((h, i) => [xs[i], 150 - h / 2]);
  const botLine = heights.map((h, i) => [xs[i], 150 + h / 2]);
  return (
    <FigureCard>
      <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: FG.ink3, marginBottom: 14 }}>
        The translation chain
      </div>
      <svg viewBox="0 0 1000 300" width="100%" style={{ display: "block" }}>
        <path d={`M ${topLine.map(p => p.join(",")).join(" L ")} L ${botLine.slice().reverse().map(p => p.join(",")).join(" L ")} Z`}
          fill={FG.skyT} stroke={FG.sky} strokeWidth="1.2" />
        {stages.map((s, i) => (
          <g key={i}>
            <line x1={xs[i]} y1={150 - heights[i] / 2} x2={xs[i]} y2={150 + heights[i] / 2} stroke={FG.sky} strokeWidth="0.8" strokeDasharray="2 3" opacity="0.65" />
            <circle cx={xs[i]} cy={150} r="3.2" fill={FG.navy} />
            <text x={xs[i]} y={150 + heights[i] / 2 + 22} textAnchor="middle" fontFamily="var(--mono)" fontSize="10" fill={FG.ink2} style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}>{s}</text>
          </g>
        ))}
        <text x={80} y={42} fontFamily="var(--mono)" fontSize="11" fill={FG.sky} style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}>Gained ↑ scale · repetition · comparison · change detection</text>
        <text x={80} y={282} fontFamily="var(--mono)" fontSize="11" fill={FG.clay} style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}>Narrowed ↓ use · memory · access · obligation · meaning</text>
      </svg>
    </FigureCard>
  );
};

// ─── per-principle figures ───────────────────────────────────────────────

const P1Figure = () => {
  const uses = ["footpath", "shade tree", "drainage ditch", "schoolyard", "market edge", "sacred grove"];
  return (
    <FigureCard>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 36px 1fr", gap: 18, alignItems: "center" }}>
        <div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.ink3, marginBottom: 10 }}>The pixel · 10 m</div>
          <svg viewBox="0 0 200 160" width="100%" style={{ background: FG.skyT, display: "block" }}>
            {Array.from({ length: 4 }).map((_, r) => Array.from({ length: 5 }).map((_, c) => (
              <rect key={`${r}-${c}`} x={c * 40} y={r * 40} width="40" height="40"
                fill="none" stroke={FG.sky} strokeWidth="0.8"
              />
            )))}
            <rect x="80" y="40" width="40" height="40" fill="none" stroke={FG.clay} strokeWidth="2.5" />
          </svg>
        </div>
        <FgArrow size={36} color={FG.navy} />
        <div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.ink3, marginBottom: 10 }}>The place · inside one pixel</div>
          <div style={{ position: "relative", padding: 14, border: `2px solid ${FG.clay}`, background: FG.clayT, minHeight: 160 }}>
            {uses.map((u, i) => (
              <div key={i} className="serif" style={{
                position: "absolute",
                left: `${[8, 55, 12, 60, 22, 70][i]}%`,
                top: `${[15, 25, 50, 50, 78, 75][i]}%`,
                fontSize: 14, fontStyle: "italic", color: FG.clay, fontWeight: 500,
              }}>{u}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <div className="serif" style={{ fontSize: 13.5, color: FG.ink2, lineHeight: 1.55 }}>
          The sensor records <strong style={{ color: FG.sky }}>surface</strong>, classified as &quot;bare / open space&quot;.
        </div>
        <div className="serif" style={{ fontSize: 13.5, color: FG.ink2, lineHeight: 1.55 }}>
          The community map records <strong style={{ color: FG.clay }}>use, memory, access, obligation</strong>.
        </div>
      </div>
    </FigureCard>
  );
};

const P2Figure = () => {
  const [open, setOpen] = React.useState(false);
  const residual = [
    "fallow in a planned cycle",
    "dry-season grazing corridor",
    "canoe landing",
    "ceremonial site",
    "gathering place after floods",
    "shelter / helicopter pad",
    "heat refuge",
  ];
  const bins = [
    { label: "Water",      n: 1 },
    { label: "Vegetation", n: 1 },
    { label: "Built-up",   n: 1 },
  ];
  return (
    <FigureCard>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, alignItems: "stretch" }}>
        {bins.map((b, i) => (
          <div key={i} style={{ padding: 16, background: FG.skyT, border: `1px solid ${FG.sky}` }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.sky }}>{b.label}</div>
            <div className="num" style={{ fontSize: 32, color: FG.navy, marginTop: 6 }}>{b.n}</div>
            <div style={{ fontSize: 12, color: FG.ink3, marginTop: 4 }}>tidy class</div>
          </div>
        ))}
        <div style={{ padding: 16, background: FG.clayT, border: `1px solid ${FG.clay}` }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.clay }}>Bare / Other</div>
          {!open && (
            <>
              <div className="num" style={{ fontSize: 32, color: FG.clay, marginTop: 6 }}>7</div>
              <div style={{ fontSize: 12, color: FG.ink2, marginTop: 4, marginBottom: 12 }}>uses collapsed into one class</div>
            </>
          )}
          {open && (
            <ul style={{ margin: "10px 0 14px", padding: 0, listStyle: "none" }}>
              {residual.map((r, i) => (
                <li key={i} className="serif" style={{
                  fontSize: 13.5, fontStyle: "italic", color: FG.clay, padding: "3px 0",
                  animation: `p2in 240ms ease ${i * 0.04}s both`,
                }}>{r}</li>
              ))}
            </ul>
          )}
          <button onClick={() => setOpen(o => !o)} style={{
            appearance: "none", border: `1px solid ${FG.clay}`, background: FG.bg, color: FG.clay,
            padding: "6px 12px", fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: "0.12em",
            textTransform: "uppercase", cursor: "pointer",
          }}>{open ? "Hide" : "Reveal what is inside"}</button>
        </div>
      </div>
      <style>{`@keyframes p2in { from { opacity: 0; transform: translateY(4px) } to { opacity: 1; transform: translateY(0) } }`}</style>
    </FigureCard>
  );
};

const P3Figure = () => (
  <FigureCard>
    <svg viewBox="0 0 1000 280" width="100%" style={{ display: "block" }}>
      <text x="20" y="36" fontFamily="var(--mono)" fontSize="11" fill={FG.sky} style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}>Orbital time · uniform</text>
      <line x1="20" y1="78" x2="980" y2="78" stroke={FG.sky} strokeWidth="1.5" />
      {[100, 220, 340, 460, 580, 700, 820, 940].map((x, i) => (
        <g key={i}>
          <line x1={x} y1={70} x2={x} y2={86} stroke={FG.sky} strokeWidth="1.2" />
          <circle cx={x} cy={78} r="3" fill={FG.sky} />
        </g>
      ))}
      <text x="100" y="60" fontFamily="var(--mono)" fontSize="10" fill={FG.ink3} textAnchor="middle">daily</text>
      <text x="220" y="60" fontFamily="var(--mono)" fontSize="10" fill={FG.ink3} textAnchor="middle">every 5 days</text>
      <text x="340" y="60" fontFamily="var(--mono)" fontSize="10" fill={FG.ink3} textAnchor="middle">every 16 days</text>
      <text x="460" y="60" fontFamily="var(--mono)" fontSize="10" fill={FG.ink3} textAnchor="middle">cloud gap</text>
      <text x="580" y="60" fontFamily="var(--mono)" fontSize="10" fill={FG.ink3} textAnchor="middle">tasking</text>

      <text x="20" y="156" fontFamily="var(--mono)" fontSize="11" fill={FG.clay} style={{ letterSpacing: "0.14em", textTransform: "uppercase" }}>Community time · threshold driven</text>

      <rect x="60"  y="186" width="80"  height="18" fill={FG.clayT} stroke={FG.clay} />
      <text x="100" y="227" fontFamily="var(--mono)" fontSize="9.5" fill={FG.clay} textAnchor="middle" style={{ letterSpacing: "0.10em", textTransform: "uppercase" }}>evacuation · hours</text>

      <rect x="200" y="186" width="40" height="18" fill={FG.clay} />
      <text x="220" y="227" fontFamily="var(--mono)" fontSize="9.5" fill={FG.clay} textAnchor="middle" style={{ letterSpacing: "0.10em", textTransform: "uppercase" }}>market day</text>

      <rect x="300" y="186" width="160" height="18" fill={FG.clayT} stroke={FG.clay} />
      <text x="380" y="227" fontFamily="var(--mono)" fontSize="9.5" fill={FG.clay} textAnchor="middle" style={{ letterSpacing: "0.10em", textTransform: "uppercase" }}>snowmelt window</text>

      <rect x="500" y="186" width="120" height="18" fill={FG.clayT} stroke={FG.clay} />
      <text x="560" y="227" fontFamily="var(--mono)" fontSize="9.5" fill={FG.clay} textAnchor="middle" style={{ letterSpacing: "0.10em", textTransform: "uppercase" }}>floodplain recession</text>

      <rect x="660" y="186" width="80" height="18" fill={FG.clay} />
      <text x="700" y="227" fontFamily="var(--mono)" fontSize="9.5" fill={FG.clay} textAnchor="middle" style={{ letterSpacing: "0.10em", textTransform: "uppercase" }}>fishing opening</text>

      <line x1="780" y1="195" x2="980" y2="195" stroke={FG.clay} strokeWidth="2" />
      <polyline points="970,190 982,195 970,200" fill="none" stroke={FG.clay} strokeWidth="2" />
      <text x="880" y="227" fontFamily="var(--mono)" fontSize="9.5" fill={FG.clay} textAnchor="middle" style={{ letterSpacing: "0.10em", textTransform: "uppercase" }}>sacred · generations</text>
    </svg>
  </FigureCard>
);

const P4Figure = () => (
  <FigureCard>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      <div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.sky, marginBottom: 12 }}>Ground truth · hierarchy</div>
        <div style={{ padding: 14, background: FG.skyT, border: `1px solid ${FG.sky}`, marginBottom: 10, textAlign: "center" }}>
          <div className="serif" style={{ fontSize: 16, fontWeight: 600, color: FG.ink }}>Satellite image</div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.10em", color: FG.sky, marginTop: 4, textTransform: "uppercase" }}>primary object</div>
        </div>
        <div style={{ textAlign: "center", color: FG.ink4, fontSize: 18, margin: "4px 0" }}>↓</div>
        <div style={{ padding: 14, background: FG.bg, border: `1px solid ${FG.rule}`, textAlign: "center" }}>
          <div className="serif" style={{ fontSize: 16, color: FG.ink2 }}>Ground</div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.10em", color: FG.ink3, marginTop: 4, textTransform: "uppercase" }}>verifier</div>
        </div>
      </div>
      <div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.clay, marginBottom: 12 }}>Co-presence · Two-Eyed Seeing</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={{ padding: 14, background: FG.skyT, border: `1px solid ${FG.sky}`, textAlign: "center" }}>
            <div className="serif" style={{ fontSize: 16, fontWeight: 600, color: FG.ink }}>Satellite evidence</div>
          </div>
          <div style={{ padding: 14, background: FG.clayT, border: `1px solid ${FG.clay}`, textAlign: "center" }}>
            <div className="serif" style={{ fontSize: 16, fontWeight: 600, color: FG.ink }}>Lived knowledge</div>
          </div>
        </div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: "0.10em", textTransform: "uppercase", color: FG.ink3, marginTop: 10, textAlign: "center" }}>parallel systems · equal standing</div>
      </div>
    </div>
  </FigureCard>
);

const P5Figure = () => {
  const [view, setView] = React.useState("exposure");
  const houseA = { label: "A", conditions: ["a truck", "insurance & savings", "family nearby", "first-floor living"], outcome: "recovers", protect: true };
  const houseB = { label: "B", conditions: ["elderly resident alone", "basement tenant", "refrigerated medication", "no safe evacuation route"], outcome: "may not", protect: false };
  return (
    <FigureCard>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 14 }}>
        <div style={{ display: "inline-flex", border: `1px solid ${FG.rule2}`, borderRadius: 999, overflow: "hidden" }}>
          {["exposure", "vulnerability"].map(v => (
            <button key={v} onClick={() => setView(v)} style={{
              appearance: "none", border: "none", padding: "8px 18px",
              background: view === v ? FG.ink : FG.bg, color: view === v ? FG.bg : FG.ink2,
              fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: "0.14em",
              textTransform: "uppercase", cursor: "pointer",
            }}>{v}</button>
          ))}
        </div>
      </div>
      <svg viewBox="0 0 800 180" width="100%" style={{ display: "block", background: FG.skyT, border: `1px solid ${FG.sky}` }}>
        <path d="M0 80 Q200 60 400 90 T800 80 L800 180 L0 180 Z" fill={FG.sky} opacity="0.18" />
        <text x="20" y="32" fontFamily="var(--mono)" fontSize="11" fill={FG.sky} style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}>flood polygon · same inundation</text>
        {[{ x: 230, h: houseA }, { x: 570, h: houseB }].map(({ x, h }) => {
          const color = view === "exposure" ? FG.sky : (h.protect ? FG.protect : FG.expose);
          return (
            <g key={h.label} transform={`translate(${x} 110)`}>
              <polygon points="0,0 50,-30 100,0 100,40 0,40" fill={color} opacity="0.92" />
              <text x="50" y="24" textAnchor="middle" fontFamily="var(--serif)" fontSize="20" fill={FG.bg} fontWeight="700">{h.label}</text>
            </g>
          );
        })}
      </svg>
      {view === "exposure" ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 }}>
          {[houseA, houseB].map(h => (
            <div key={h.label} style={{ padding: 14, background: FG.skyT, border: `1px solid ${FG.sky}` }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.sky }}>House {h.label}</div>
              <div className="serif" style={{ marginTop: 6, fontSize: 16, color: FG.ink, fontWeight: 600 }}>exposure = 1.0</div>
              <div className="serif" style={{ marginTop: 4, fontSize: 13, color: FG.ink2, fontStyle: "italic" }}>same water touches both polygons</div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 }}>
          {[houseA, houseB].map(h => (
            <div key={h.label} style={{
              padding: 14,
              background: h.protect ? FG.protectT : FG.exposeT,
              border: `1px solid ${h.protect ? FG.protect : FG.expose}`,
            }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: h.protect ? FG.protect : FG.expose }}>House {h.label}</div>
              <ul style={{ margin: "8px 0 8px 16px", padding: 0, fontSize: 13, color: FG.ink2 }}>
                {h.conditions.map((c, i) => (
                  <li key={i} className="serif" style={{ fontStyle: "italic", padding: "2px 0", animation: `p5in 240ms ease ${i * 0.05}s both` }}>{c}</li>
                ))}
              </ul>
              <div className="serif" style={{ fontSize: 14, color: FG.ink, fontWeight: 600 }}>{h.outcome}</div>
            </div>
          ))}
        </div>
      )}
      <div style={{
        marginTop: 18, padding: "10px 14px", display: "flex", justifyContent: "space-between",
        background: FG.bg2, fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: "0.10em",
        textTransform: "uppercase", color: FG.ink3,
      }}>
        <span>exposure is spatial</span>
        <span style={{ fontStyle: "italic", textTransform: "none", letterSpacing: "0.04em", color: FG.ink }}>Same water. Different disaster.</span>
        <span>vulnerability is relational</span>
      </div>
      <style>{`@keyframes p5in { from { opacity: 0; transform: translateY(4px) } to { opacity: 1; transform: translateY(0) } }`}</style>
    </FigureCard>
  );
};

const P6Figure = () => {
  const occupancies = [
    "a storage shed",
    "one family",
    "fifty workers",
    "temporary evacuees",
    "seasonal labourers",
    "owners · renters · subtenants",
    "empty half the year",
  ];
  return (
    <FigureCard>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 36px 1fr", gap: 18, alignItems: "center" }}>
        <div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.sky, marginBottom: 10 }}>The footprint</div>
          <div style={{ padding: "28px 16px", background: FG.skyT, border: `2px solid ${FG.sky}`, textAlign: "center" }}>
            <div className="serif" style={{ fontSize: 22, fontWeight: 600, color: FG.ink }}>one polygon</div>
            <div className="serif" style={{ fontSize: 15, color: FG.ink2, marginTop: 4 }}>one number</div>
          </div>
        </div>
        <FgArrow size={36} color={FG.navy} />
        <div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.clay, marginBottom: 10 }}>The household, occupancy</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {occupancies.map((o, i) => (
              <div key={i} style={{ padding: "10px 12px", border: `1px solid ${FG.clay}`, background: FG.clayT }}>
                <span className="serif" style={{ fontSize: 13.5, color: FG.clay, fontStyle: "italic", fontWeight: 500 }}>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FigureCard>
  );
};

const P7Figure = () => {
  const [t, setT] = React.useState(42);
  const u = t / 100;
  const satRecovered = Math.round((1 - Math.exp(-u * 5)) * 100);
  const livRecovered = Math.round((1 - Math.exp(-u * 1.6)) * 100);
  const gap = satRecovered - livRecovered;
  const W = 1120, H = 300, padL = 60, padR = 280, top = 60, bot = 240;
  const innerW = W - padL - padR;
  const x = (uu) => padL + uu * innerW;
  const ySat = (uu) => bot - (1 - Math.exp(-uu * 5)) * (bot - top);
  const yLiv = (uu) => bot - (1 - Math.exp(-uu * 1.6)) * (bot - top);
  const samples = Array.from({ length: 41 }, (_, i) => i / 40);
  const satPath = samples.map(uu => `${x(uu)},${ySat(uu)}`).join(" ");
  const livPath = samples.map(uu => `${x(uu)},${yLiv(uu)}`).join(" ");
  const callouts = [
    "contaminated road surfaces",
    "reopened clinic without staff",
    "mold in the basement",
    "groceries at higher prices",
    "a route that feels unsafe at night",
    "insurance disputes · fear of returning",
  ];
  return (
    <FigureCard>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: "block" }}>
        <line x1={padL} y1={bot} x2={W - padR + 20} y2={bot} stroke={FG.rule2} strokeWidth="1" />
        <line x1={padL} y1={top} x2={padL} y2={bot} stroke={FG.ink} strokeWidth="1.5" />
        <text x={padL - 8} y={top + 6} textAnchor="end" fontFamily="var(--mono)" fontSize="9.5" fill={FG.ink3}>event</text>
        <polygon points={`${satPath} ${samples.slice().reverse().map(uu => `${x(uu)},${yLiv(uu)}`).join(" ")}`} fill={FG.clay} opacity="0.09" />
        <polyline points={satPath} fill="none" stroke={FG.sky} strokeWidth="2.4" />
        <polyline points={livPath} fill="none" stroke={FG.clay} strokeWidth="2.4" />
        <circle cx={x(u)} cy={ySat(u)} r="6" fill={FG.sky} />
        <circle cx={x(u)} cy={yLiv(u)} r="6" fill={FG.clay} />
        <line x1={x(u)} y1={top - 10} x2={x(u)} y2={bot + 10} stroke={FG.ink4} strokeWidth="0.8" strokeDasharray="3 3" />
        <text x={W - padR - 16} y={ySat(0.95) - 8} textAnchor="end" fontFamily="var(--mono)" fontSize="10" fill={FG.sky} style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}>surface restored · satellite</text>
        <text x={W - padR - 16} y={yLiv(0.95) + 18} textAnchor="end" fontFamily="var(--mono)" fontSize="10" fill={FG.clay} style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}>livable again · lived</text>
        <g transform={`translate(${W - padR + 32} ${top - 20})`}>
          <text fontFamily="var(--mono)" fontSize="10" fill={FG.clay} style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}>The recovery the image cannot see</text>
          {callouts.map((c, i) => (
            <text key={i} x="0" y={28 + i * 22} fontFamily="var(--serif)" fontSize="12.5" fill={FG.ink2} fontStyle="italic">· {c}</text>
          ))}
        </g>
      </svg>
      <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 220px", gap: 18, alignItems: "center", marginTop: 16 }}>
        <span className="mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.ink3 }}>drag through time →</span>
        <input type="range" min="0" max="100" value={t} onChange={(e) => setT(Number(e.target.value))}
          style={{ width: "100%", accentColor: FG.clay, cursor: "pointer" }} />
        <span className="mono" style={{ fontSize: 11, color: FG.ink2, letterSpacing: "0.06em", textAlign: "right" }}>
          satellite <strong style={{ color: FG.sky }}>{satRecovered}%</strong> · lived <strong style={{ color: FG.clay }}>{livRecovered}%</strong> · gap <strong>{gap} pts</strong>
        </span>
      </div>
    </FigureCard>
  );
};

const P8Figure = () => {
  const registers = [
    { label: "Auditory",   ex: "a market grows quiet, a language fades from the street",        method: "soundscape work" },
    { label: "Affective",  ex: "a park feels unsafe after dark, a fishing place feels heavy",   method: "walking interviews" },
    { label: "Embodied",   ex: "smoke memory, the weight of evacuation, fear of returning",     method: "narrative cartography" },
    { label: "Relational", ex: "evicted tenants behind a standing wall, broken neighbouring",   method: "oral history" },
  ];
  return (
    <FigureCard>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 18 }}>
        <div style={{ padding: 18, background: FG.skyT, border: `1px solid ${FG.sky}` }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.sky }}>The sensor sees</div>
          <div className="serif" style={{ fontSize: 24, fontWeight: 600, color: FG.ink, margin: "10px 0 8px", letterSpacing: "-0.01em" }}>one register · sight</div>
          <div className="serif" style={{ fontSize: 13.5, color: FG.ink2, fontStyle: "italic", lineHeight: 1.55 }}>
            radar, thermal, optical, lidar, all rendered as surfaces to look at
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {registers.map((r, i) => (
            <div key={i} style={{ padding: 14, background: FG.clayT, border: `1px solid ${FG.clay}` }}>
              <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.clay }}>{r.label}</div>
              <div className="serif" style={{ marginTop: 6, fontSize: 13.5, fontStyle: "italic", color: FG.ink, lineHeight: 1.5 }}>{r.ex}</div>
              <div className="mono" style={{ marginTop: 8, fontSize: 9.5, color: FG.ink3, letterSpacing: "0.10em", textTransform: "uppercase" }}>captured by · {r.method}</div>
            </div>
          ))}
        </div>
      </div>
    </FigureCard>
  );
};

const P9Figure = () => {
  const rows = [
    { sym: "earlier snowmelt",       q: "who maintains the alert protocol?" },
    { sym: "declining soil moisture", q: "who allocates the irrigation share?" },
    { sym: "wetland loss",           q: "who enforces the conservation rule?" },
    { sym: "flood extent",           q: "who reaches isolated residents first?" },
    { sym: "lake bloom",             q: "who closes the intake, and warns whom?" },
  ];
  return (
    <FigureCard pad={0}>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 80px 1fr",
        background: FG.navy, color: FG.bg, padding: "10px 18px", gap: 12,
        fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase",
      }}>
        <span>Detection</span>
        <span style={{ textAlign: "center" }}>The gap</span>
        <span>Response</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{
          display: "grid", gridTemplateColumns: "1fr 80px 1fr",
          padding: "14px 18px", gap: 12, alignItems: "center",
          borderBottom: i < rows.length - 1 ? `1px solid ${FG.rule}` : "none",
        }}>
          <span className="serif" style={{ fontSize: 16, color: FG.sky, fontStyle: "italic" }}>{r.sym}</span>
          <span style={{ textAlign: "center", fontFamily: "var(--mono)", fontSize: 18, color: FG.ink4 }}>?</span>
          <span className="serif" style={{ fontSize: 16, color: FG.plum, fontStyle: "italic" }}>{r.q}</span>
        </div>
      ))}
      <div style={{
        padding: "12px 18px", background: FG.bg2, fontFamily: "var(--mono)",
        fontSize: 10.5, color: FG.ink3, letterSpacing: "0.10em", textTransform: "uppercase",
      }}>environmental change becomes disaster at the broken link, not at the pixel</div>
    </FigureCard>
  );
};

const P10Figure = () => {
  const rows = [
    { name: "informal settlements",          care: "service delivery",         control: "eviction risk" },
    { name: "Indigenous harvesting areas",   care: "territorial claims",       control: "surveillance, extraction" },
    { name: "migrant routes",                care: "humanitarian response",    control: "enforcement targeting" },
    { name: "disaster-vulnerable households", care: "assistance targeting",    control: "stigmatising labels" },
  ];
  return (
    <FigureCard>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
        <div style={{ padding: "8px 16px", background: FG.bg2, border: `1px solid ${FG.rule2}`, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.ink2 }}>
          one open dataset
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div className="mono" style={{ textAlign: "center", padding: "6px 0", color: FG.protect, fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase" }}>used for care</div>
        <div className="mono" style={{ textAlign: "center", padding: "6px 0", color: FG.expose, fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase" }}>used for control</div>
      </div>
      <div style={{ border: `1px solid ${FG.rule2}` }}>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            borderBottom: i < rows.length - 1 ? `1px solid ${FG.rule}` : "none",
          }}>
            <div style={{ padding: 14, background: FG.protectT, borderRight: `1px solid ${FG.rule2}` }}>
              <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: FG.ink3 }}>{r.name}</div>
              <div className="serif" style={{ marginTop: 4, fontSize: 14.5, color: FG.protect, fontStyle: "italic" }}>{r.care}</div>
            </div>
            <div style={{ padding: 14, background: FG.exposeT }}>
              <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.10em", textTransform: "uppercase", color: FG.ink3 }}>{r.name}</div>
              <div className="serif" style={{ marginTop: 4, fontSize: 14.5, color: FG.expose, fontStyle: "italic" }}>{r.control}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14,
      }}>
        <div style={{ padding: 12, border: `1px solid ${FG.rule2}` }}>
          <div className="mono" style={{ fontSize: 10.5, color: FG.sky, letterSpacing: "0.14em", textTransform: "uppercase" }}>FAIR</div>
          <div style={{ fontSize: 12.5, color: FG.ink2, marginTop: 4, fontStyle: "italic" }}>findable · accessible · interoperable · reusable</div>
        </div>
        <div style={{ padding: 12, border: `1px solid ${FG.clay}`, background: FG.clayT }}>
          <div className="mono" style={{ fontSize: 10.5, color: FG.clay, letterSpacing: "0.14em", textTransform: "uppercase" }}>CARE</div>
          <div style={{ fontSize: 12.5, color: FG.ink, marginTop: 4, fontStyle: "italic" }}>collective benefit · authority to control · responsibility · ethics</div>
        </div>
      </div>
    </FigureCard>
  );
};

const P11Figure = () => {
  const tech = ["confusion matrix", "RMSE", "validation samples", "uncertainty intervals", "cross-validation", "error propagation"];
  const epi  = ["Who chose the categories?", "Who benefits from the map?", "Who can contest the interpretation?", "Who governs the data afterwards?", "Who carries risk when it becomes visible?", "What knowledge was excluded?"];
  return (
    <FigureCard pad={0}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ padding: 22, background: FG.skyT, borderRight: `1px solid ${FG.rule2}` }}>
          <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.sky, marginBottom: 14 }}>Technical accountability</div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {tech.map((t, i) => (
              <li key={i} className="serif" style={{
                padding: "8px 0",
                borderBottom: i < tech.length - 1 ? `1px solid color-mix(in oklch, ${FG.sky} 25%, transparent)` : "none",
                fontSize: 15, color: FG.ink,
              }}>
                <span style={{ color: FG.sky, marginRight: 10, fontWeight: 700 }}>✓</span>{t}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ padding: 22, background: FG.clayT }}>
          <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.clay, marginBottom: 14 }}>Epistemic accountability</div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {epi.map((q, i) => (
              <li key={i} className="serif" style={{
                padding: "8px 0",
                borderBottom: i < epi.length - 1 ? `1px solid color-mix(in oklch, ${FG.clay} 25%, transparent)` : "none",
                fontSize: 15, color: FG.ink, fontStyle: "italic",
              }}>
                <span style={{ color: FG.clay, marginRight: 10, fontWeight: 700, fontStyle: "normal" }}>?</span>{q}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{
        padding: "14px 22px", background: FG.navy, color: FG.bg,
        fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 16, lineHeight: 1.4,
      }}>A map can be perfectly accurate and still be the wrong way to know the place.</div>
    </FigureCard>
  );
};

const P12Figure = () => (
  <FigureCard>
    <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.sky, marginBottom: 10 }}>Conventional · image-first</div>
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, padding: 14, background: FG.skyT, border: `1px solid ${FG.sky}` }}>
      {["Satellite image", "Classification", "Field validation", "Final product"].map((step, i, a) => (
        <React.Fragment key={i}>
          <span className="serif" style={{ fontSize: 14.5, color: FG.ink, fontWeight: 500 }}>{step}</span>
          {i < a.length - 1 && <FgArrow size={22} color={FG.sky} />}
        </React.Fragment>
      ))}
    </div>
    <div style={{
      margin: "14px 0", padding: "10px 16px", background: FG.ink, color: FG.bg,
      fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", textAlign: "center",
    }}>reverse the direction of authority</div>
    <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: FG.clay, marginBottom: 10 }}>Accountable · question-first</div>
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, padding: 14, background: FG.clayT, border: `1px solid ${FG.clay}` }}>
      {["Testimony · memory · claim", "Satellite (one piece of evidence)", "Return to grounded questions"].map((step, i, a) => (
        <React.Fragment key={i}>
          <span className="serif" style={{ fontSize: 14.5, color: FG.ink, fontWeight: 500 }}>{step}</span>
          {i < a.length - 1 && <FgArrow size={22} color={FG.clay} />}
        </React.Fragment>
      ))}
    </div>
    <p className="serif" style={{ margin: "16px 0 0", fontStyle: "italic", color: FG.ink2, fontSize: 14, lineHeight: 1.55 }}>
      The community is not a correction layer. It is a site of interpretation.
    </p>
  </FigureCard>
);

// ─── content data ────────────────────────────────────────────────────────

const FG_PRINCIPLES = [
  { n: "01", mismatch: "unit",                       from: "the pixel",            to: "the place",                 title: "The pixel is not the place.",
    paragraphs: [
      "Remote sensing begins by dividing the world into pixels. This is necessary for measurement. It is also a reduction.",
      "A ten-metre Sentinel-2 pixel can contain part of a household compound, a drainage ditch, a footpath, a shade tree, a schoolyard, a market edge, a sacred grove, or an informal meeting place. The pixel can measure reflectance. It cannot know the social unit.",
      "This distinction is significant for resilience, as risk frequently exists at scales smaller than or spanning multiple pixels. For example, a household may rely on a path too narrow to be mapped, a women's agricultural plot may be situated within a male-titled parcel, or a shelter may be visually indistinguishable from a storage structure. Additionally, safe routes may be known only through local knowledge, such as which fence opens, which neighbor possesses a generator, or which road is prone to flooding first.",
      "A satellite may see bare ground beside a school. A classifier may call it open space. Local residents may know it as the evacuation assembly point, Friday market overflow, only shaded waiting area during a heat wave, or where children gather after an earthquake.",
    ],
    coupletA: "The remote-sensing product records surface.",
    coupletB: "The community map records use.",
    closing: [
      "The gap between the two is not only a data gap. It is an ontological gap: the satellite and community describe different kinds of objects.",
      "Counter-mapping is important because it not only supplements official maps with missing features but also transforms the types of entities that maps can represent. Through counter-mapping, customary claims, access relationships, informal infrastructure, and shared spaces become visible in contexts where official systems recognize only property boundaries, land cover, or administrative units.",
    ],
    test: "Before using a pixel, polygon, or building footprint as the unit of analysis, ask: is this the unit through which people actually experience risk?",
    Figure: P1Figure,
  },
  { n: "02", mismatch: "category",                   from: "land cover",           to: "land meaning",              title: "Land cover is not land meaning.",
    paragraphs: [
      "Remote sensing excels at identifying physical land cover types such as water, vegetation, built-up areas, snow, bare soil, crops, forests, asphalt, or wetlands. While these categories are valuable for analysis, they do not capture the full meaning or significance of land use.",
      "A fallow field may look abandoned from space, but locally it may be resting in a planned agricultural cycle. A dry riverbed may look empty, but it may be a seasonal grazing corridor. A shoreline clearing may look degraded, but it may be a canoe landing, fishing access point, or ceremonial site. A vacant lot may look unused, but it may be the place people have already agreed to meet after a flood.",
    ],
    coupletA: "The “bare” class is not empty.",
    coupletB: "It is often the place where the classifier deposits what it does not know how to value.",
    closing: [
      "This issue extends beyond technical limitations to encompass classification challenges. Every classification system embeds assumptions regarding significance and value. Categories such as “productive,” “unused,” “natural,” “urban,” “formal,” “informal,” “damaged,” or “other” do more than describe the world; they structure it, rendering certain claims visible while relegating others to residual status.",
      "In disaster and resilience work, this matters because residual spaces often become critical spaces. A schoolyard becomes a shelter site. A sports field becomes a helicopter landing zone. A parking lot becomes a distribution hub. A vacant lot becomes a community kitchen. A shaded wall becomes heat refuge. A dry-season pond becomes pastoral infrastructure.",
      "Remote sensing frequently interprets a lack of spectral complexity as an absence of social significance.",
    ],
    test: "For every land-cover class, ask what socially important uses may be hidden inside it.",
    Figure: P2Figure,
  },
  { n: "03", mismatch: "time",                       from: "the revisit interval", to: "the community calendar",    title: "The satellite has a revisit interval. The community has a calendar.",
    paragraphs: [
      "Satellite time is determined by orbital mechanics, whereas community time is defined by lived experience.",
      "A sensor may return every day, every five days, every sixteen days, or irregularly because of clouds, tasking, or data availability. This rhythm is powerful for some questions. It is poorly suited to others.",
      "Many community-relevant events happen too fast or slow for the satellite. A flood evacuation may unfold over hours. A temporary bridge may fail in a morning. A market may exist only one day a week. A road may be passable only during a short snowmelt window. A floodplain may become cultivable only during a narrow recession. A fishing ground may matter only during one seasonal opening. A sacred place may matter through intergenerational memory even if its surface never changes.",
      "A median annual composite may stabilize classification signals but can obscure the variability experienced by communities. For certain livelihoods, what appears as an anomaly in data is, in fact, a critical part of the local calendar.",
      "This is especially important in drylands, floodplains, Arctic regions, coastal communities, and agricultural systems where timing is everything. The relevant question is often not “what is the average condition?” but “when did the threshold arrive, how long did it last, and who was able to act within that window?”",
    ],
    coupletA: "The satellite can show change.",
    coupletB: "Community knowledge can tell us when change becomes consequential.",
    closing: [],
    test: "Before compositing or averaging, ask which seasonal, daily, or threshold events the method might erase.",
    Figure: P3Figure,
  },
  { n: "04", mismatch: "validation",                 from: "ground truth",         to: "co-presence",               title: "Ground truth is not truth.",
    paragraphs: [
      "The term “ground truth” is widely used in remote sensing, yet it is often misleading.",
      "The phrase implies the satellite image is the main object and the ground exists to verify it. It suggests community knowledge is valuable only when it improves classification accuracy. But often, the satellite and field observation do not measure the same thing.",
      "A farmer saying “this land is resting” is not just confirming or rejecting a bare-soil class. She is naming a land-use relation. A resident saying “this road is unsafe at night” is not correcting a road layer. She is describing a social condition the road layer was never built to capture. A community saying “this area should not be mapped publicly” is not withholding data. It is asserting governance over visibility.",
      "Community knowledge should not be reduced to ground truth. It is a parallel knowledge system with its own categories, memories, thresholds, and relevance standards.",
    ],
    coupletA: "The objective is not solely validation, but rather co-presence.",
    coupletB: "Satellite evidence and lived knowledge together, each providing insights the other cannot.",
    closing: [
      "This is where Two-Eyed Seeing is especially useful. It does not ask one knowledge system to absorb the other. It asks what becomes possible when different ways of knowing are held together without erasing differences.",
    ],
    test: "Replace “Does the community validate the image?” with “What does the community know that the image was never designed to ask?”",
    Figure: P4Figure,
  },
  { n: "05", mismatch: "unit and relation",          from: "exposure",             to: "vulnerability",             title: "Exposure is not vulnerability.",
    paragraphs: [
      "Remote sensing can map where a hazard touches the ground. It cannot map what that hazard affects in people's lives.",
      "A flood map may show two houses inside the same inundation polygon. From the satellite, they have the same exposure. But one household may have a truck, insurance, savings, family nearby, and a first-floor living space. Another may include an elderly person living alone, a basement tenant, undocumented residents afraid to ask for help, a person dependent on refrigerated medication, or no safe evacuation route.",
    ],
    coupletA: "The flood pixel says: water reached both houses.",
    coupletB: "The community map says: the disaster will not be the same.",
    closing: [
      "This distinction matters because many risk models move too quickly from hazard and exposure to vulnerability. They map where something could happen, then infer who is at risk. But vulnerability is not only location. It is shaped by income, health, mobility, age, documentation status, tenure, social networks, language, disability, trust in institutions, access to transportation, and history of previous harm.",
      "Remote sensing can identify exposed structures, roads, slopes, burn scars, surface temperature, water extent, and vegetation loss. It can support excellent hazard and exposure analysis. But vulnerability requires additional forms of knowledge.",
      "Exposure is a spatial concept, whereas vulnerability is fundamentally relational.",
    ],
    test: "For every exposed asset, ask what social condition determines whether exposure becomes harm.",
    Figure: P5Figure,
  },
  { n: "06", mismatch: "unit and occupancy",         from: "the building footprint", to: "the household",           title: "The building footprint is not the household.",
    paragraphs: [
      "AI building extraction is appealing because it seems to solve exposure: count roofs, estimate population, plan response. Building footprints are useful but easy to overinterpret.",
      "A building footprint is not a household. It is not tenure, occupancy, condition, safety, density, or social relation.",
      "A detected roof may be a storage shed, not a residence. A missing roof may be a lightweight shelter, not an empty place. A large building may house one family, fifty workers, temporary evacuees, or seasonal labourers. A house may be empty part of the year. A single structure may be divided among owners, renters, subtenants, and informal occupants whose rights do not appear in cadastral data.",
    ],
    coupletA: "The footprint is a geometry.",
    coupletB: "The household is a social arrangement.",
    closing: [
      "This matters for humanitarian mapping, public health campaigns, disaster response, and climate adaptation. If buildings are treated as households, aid may be misallocated. If missing roofs are treated as absence, informal or lightweight settlements may disappear from planning. If structure size is treated as wealth, large shared or multi-family dwellings may be misread. If occupancy is assumed stable, seasonal migration, evacuation, tourism, labour, and displacement are erased.",
      "Building extraction gives exposure geometry. Community mapping gives social occupancy.",
      "Disaster risk emerges from the gap between geometric representation and social reality.",
    ],
    test: "Do not ask only “Where are the buildings?” Ask “What are they, who uses them, when, and under what conditions?”",
    Figure: P6Figure,
  },
  { n: "07", mismatch: "time and lived aftermath",   from: "damage",               to: "recovery",                  title: "Damage is not recovery.",
    paragraphs: [
      "Remote sensing can detect destroyed buildings, flooded roads, landslides, burn scars, debris, and water extent. It is often strongest immediately after an event, when visible change is sharp and urgent. But recovery is not simply the inverse of damage.",
      "After a flood, satellite imagery may show water has receded and roads are visible again. A damage map may mark the area as accessible. But residents may know the road surface is contaminated, the bridge railing is gone, the clinic reopened without staff, the grocery store reopened with doubled prices, the school is used as a shelter, the basement is full of mold, or the official route is unsafe at night.",
      "After a wildfire, the burn scar may be mapped, but the loss of shade, the smoke trauma, the housing precarity, the insurance dispute, the damaged water system, and the fear of returning may not be visible. After an earthquake, collapsed buildings may be detected, but whether people can recover depends on permits, rental markets, debt, remittances, kinship networks, and political recognition.",
    ],
    coupletA: "The satellite sees surface restoration.",
    coupletB: "The community sees whether life has become livable again.",
    closing: [
      "Remote sensing is effective at detecting the occurrence of events but is considerably less capable of capturing their long-term aftermath.",
    ],
    test: "Treat post-event imagery as the beginning of recovery analysis, not its conclusion.",
    Figure: P7Figure,
  },
  { n: "08", mismatch: "sensory mode",               from: "the visual image",     to: "the lived atmosphere",      title: "The image cannot hear.",
    paragraphs: [
      "Remote sensing is visually dominant. Even radar, LiDAR, thermal imagery, and multispectral products are usually converted into visual surfaces for interpretation. But many spatial losses are auditory, affective, embodied, and relational.",
      "A neighbourhood may lose Spanish, Arabic, Cree, Haitian Creole, or another language from the street. A market may become quieter because vendors have been displaced. A forest trail may become unsafe because of harassment, policing, or fear. A fishing place may become emotionally inaccessible after contamination, enforcement conflict, or death. A building may remain standing while tenants have been evicted. A park may remain green while women stop using it after dark.",
      "Many of these forms of loss do not produce a detectable spectral signature.",
      "This is why oral history, walking interviews, participatory mapping, soundscape work, and narrative cartography matter. They do not decorate the map. They document forms of spatial change that visual instruments cannot register.",
    ],
    coupletA: "Some changes have to be heard, remembered, walked, and narrated.",
    coupletB: "",
    closing: [],
    test: "Ask what forms of loss, exclusion, fear, or belonging would remain invisible if the map could only see.",
    Figure: P8Figure,
  },
  { n: "09", mismatch: "institutional visibility",   from: "environmental symptoms", to: "governance capacity",     title: "The satellite sees symptoms, not governance.",
    paragraphs: [
      "Remote sensing can show earlier snowmelt, declining soil moisture, wetland loss, vegetation stress, lake blooms, urban expansion, flood extent, drought anomalies, and surface temperature. It cannot show whether institutions are capable of responding.",
      "It cannot show whether municipalities coordinate, whether a watershed plan has authority, whether farmers trust the data, whether a county has staff to implement a policy, whether a conservation rule is enforced, whether emergency protocols reach isolated residents, whether aid applications are legible to those who need them, or whether a community feels heard.",
      "While satellites can reveal indicators such as water stress, they cannot capture institutional or coordination stress.",
      "This is crucial for climate adaptation and disaster-risk governance. Environmental change becomes disaster through institutions, mandates, exclusions, delays, and failures of care. A drought is not only a rainfall deficit. It is also a water-allocation regime, an irrigation decision, a communication failure, a maintenance backlog, a planning horizon, and a trust relationship. A flood is not only water extent. It is also zoning, warning systems, transport access, insurance, shelter capacity, and social memory.",
    ],
    coupletA: "Remote sensing can detect environmental change.",
    coupletB: "It cannot detect whether institutions are able, willing, or trusted to act on it.",
    closing: [],
    test: "Pair every biophysical indicator with a governance question: who can act, with what mandate, using which instrument, and who is excluded?",
    Figure: P9Figure,
  },
  { n: "10", mismatch: "visibility and governance",  from: "open data",            to: "governed visibility",       title: "Open data is not automatically just.",
    paragraphs: [
      "Open Earth observation has transformed environmental work. Open Landsat and Sentinel data, digital elevation models, global land-cover products, and building-footprint datasets have made analysis possible for people and organizations who would never have had access to commercial imagery or proprietary datasets. Open data matters.",
      "However, data openness does not equate to justice.",
      "Data can be findable, accessible, interoperable, and reusable while still not being governed by the people it represents. A dataset can be technically open and politically harmful. A map can make a place visible to aid agencies and to police, to planners and to extractive companies, to community advocates and to landlords.",
      "Mapping informal settlements can support service delivery, but it can also enable eviction. Mapping Indigenous harvesting areas can support territorial claims, but it can also invite surveillance or extraction. Mapping sacred sites can expose knowledge that should remain governed by protocol. Mapping migrant routes can support humanitarian care, but it can also support enforcement. Mapping disaster-vulnerable households can attract assistance, but it can also stigmatize a community as permanently risky.",
    ],
    coupletA: "Visibility is not always empowerment.",
    coupletB: "Sometimes visibility is exposure.",
    closing: [
      "This is why Indigenous Data Sovereignty and the CARE principles matter. FAIR data asks whether data is findable, accessible, interoperable, and reusable. CARE asks whether data produces collective benefit, respects authority to control, carries responsibility, and is governed ethically.",
      "Remote sensing is often FAIR before it is CARE.",
    ],
    test: "Before publishing or opening a dataset, ask who gains power from visibility and who becomes more vulnerable because of it.",
    Figure: P10Figure,
  },
  { n: "11", mismatch: "objectivity and authority",  from: "technical accuracy",   to: "epistemic accountability",  title: "Accuracy is not epistemic accountability.",
    paragraphs: [
      "Remote sensing has strong tools for technical accountability: confusion matrices, RMSE, validation samples, uncertainty intervals, cross-validation, error propagation, and accuracy scores. These tools are necessary. They are not sufficient.",
      "Accuracy tells us whether a model matched its labels. Epistemic accountability asks whether the labels were the right way to know the world in the first place.",
      "A model may accurately classify a place as bare ground while missing that it is a commons. A flood model may accurately map inundation while missing who cannot evacuate. A building detector may accurately draw rooftops while missing households. A land-cover product may accurately distinguish forest from non-forest while missing customary access, ceremonial use, or food gathering. A damage map may accurately detect collapsed structures while missing social recovery.",
      "A map that is technically accurate may nonetheless misrepresent or overlook critical social realities.",
      "Epistemic accountability asks different questions. Who chose the categories? Who benefits from the map? Who can contest the interpretation? Who can decide that a class is wrong? Who governs the data after it is produced? Who is harmed by being made visible? What forms of knowledge were excluded before analysis began?",
    ],
    coupletA: "Accuracy asks whether a model matched its labels.",
    coupletB: "Epistemic accountability asks whether the labels were the right way to know.",
    closing: [
      "This perspective does not diminish the importance of technical accuracy; rather, it situates accuracy within a broader ethical context. Accuracy is essential for robust remote sensing, but it does not encompass the entirety of ethical knowledge production.",
    ],
    test: "After asking “How accurate is the product?” ask “Who has the authority to say whether this is the right representation?”",
    Figure: P11Figure,
  },
  { n: "12", mismatch: "methodological response",    from: "the image",            to: "the grounded question",     title: "Ground the satellite. Do not satellite the ground.",
    paragraphs: [
      "The standard workflow often begins with the image: satellite data, classification, field validation, final product. A more accountable workflow can begin elsewhere: testimony, memory, community claim, local concern, institutional problem, or lived risk. The satellite then becomes one piece of evidence among others.",
      "The objective is not to require communities to validate satellite data, but to ensure that satellite analysis is responsive to community claims.",
      "Instead of asking, “Does the ground confirm the image?” we ask, “Can the image help investigate what people already know, fear, remember, or contest?”",
      "This reverses the direction of authority. The community is not a correction layer. It is a site of interpretation.",
      "This approach enhances, rather than diminishes, the utility of remote sensing. Satellite imagery is most effective when applied to questions it is well-suited to address, such as identifying changes in water distribution, vegetation stress, wetland coverage, burn scars, surface temperatures, shoreline movement, road disruptions, or expansion of impervious surfaces.",
      "But the interpretation must then return to the ground: What does this change mean? Who is affected? Who can act? Who has authority? Who is exposed by the map? What remains unseen? What should not be made visible? What decision does this evidence support?",
    ],
    coupletA: "Satellites provide quantitative measurements.",
    coupletB: "Communities interpret and assign meaning to these measurements.",
    closing: [],
    test: "Begin with the community question, not the satellite product.",
    Figure: P12Figure,
  },
];

const FG_INTRO = [
  "This field guide advances a more rigorous and accountable practice of remote sensing. It begins from the strengths of Earth observation: its capacity to provide continuity, spatial coverage, repeatability, and evidence across territories that exceed the reach of any single field campaign. Satellite data can trace floods across watersheds, monitor wetland loss over decades, identify surface-temperature patterns, document burn scars, detect vegetation stress, follow snowmelt, and compare environmental change across regions.",
  "The greatest value of remote sensing arises when its technical capacities are integrated with forms of knowledge that satellites alone cannot generate, such as local interpretation, institutional context, lived experience, social vulnerability, memory, consent, and governance.",
  "The purpose of this guide is therefore practical as much as methodological. It helps researchers, analysts, planners, humanitarian actors, and community partners use remote sensing with precision: to keep the analytical power of satellite data while situating its outputs within the social, ecological, and institutional realities that give them meaning.",
  "The guide is most useful at four moments in a project: before analysis, during analysis, after analysis, and before publication.",
];

const FG_MOMENTS = [
  {
    label: "Before analysis", title: "Define the object of inquiry",
    paragraphs: [
      "A strong remote-sensing project begins with the decision, risk, or community concern that motivates the work. The available dataset matters, but it should follow the question rather than define it too early.",
      "A project may begin with Sentinel imagery, the Landsat archive, a flood layer, a vegetation index, a building-footprint product, or a digital elevation model. Each of these products can support valuable analysis. The first methodological task is to clarify what, exactly, the project needs to understand.",
      "Is the object of analysis a pixel, a household, a road, a seasonal route, a water source, a market, a shelter, a memory, a mandate, or a claim? Is the project concerned with exposure, vulnerability, access, responsibility, recovery, trust, or institutional coordination? What changes when a lived situation is translated into a raster, polygon, index, or class?",
      "This first step matters because the analytical unit shapes the entire project. A flood layer may identify affected buildings, while the central question may concern households with elderly residents, basement tenants, undocumented occupants, livestock, medication needs, limited mobility, no vehicle, or no safe evacuation route. A land-cover map may identify “bare land,” while the relevant community question may concern a schoolyard, gathering place, evacuation site, grazing corridor, fallow field, or ceremonial ground.",
    ],
    closing: "Before selecting the remote-sensing product, define the human, institutional, and ecological object that requires interpretation.",
  },
  {
    label: "During analysis", title: "Track the work of translation",
    paragraphs: [
      "Every remote-sensing workflow translates the world.",
      "Raw imagery becomes bands. Bands become indices. Indices become thresholds. Thresholds become classes. Classes become maps. Maps become evidence. Evidence enters decisions.",
      "Each stage produces analytical value. Each stage also narrows the phenomenon into a form that the workflow can process. Rigorous analysis requires attention to both movements: what becomes clearer, and what becomes less visible.",
      "A water index may reveal flood extent while leaving basement flooding, contaminated wells, damaged culverts, and unsafe roads to be documented through other means. A vegetation index may reveal drought stress while requiring additional evidence to understand crop failure, irrigation cost, labour shortage, market pressure, or pest damage. A building footprint may reveal exposure while requiring local knowledge to understand occupancy, tenure, crowding, seasonal use, or informal subdivision. A land-cover class may reveal surface type while requiring community interpretation to understand access rights, memory, cultural significance, or social function.",
      "The central methodological question is therefore larger than technical correctness. It asks what kind of reality the method produces.",
      "Does the workflow represent households as rooftops? Does it represent commons as empty land? Does it represent recovery as surface clearance? Does it represent vulnerability as exposure? Does it make a complex place legible only through the categories available to the sensor?",
    ],
    closing: "Rigorous analysis requires making these translations explicit and treating each output as methodologically produced evidence, rather than as a comprehensive representation of the location.",
  },
  {
    label: "After analysis", title: "Return interpretation to the ground",
    paragraphs: [
      "A map reaches its full value through interpretation.",
      "A classification result, flood extent, burn scar, heat map, building extraction, or change-detection layer is one stage in a wider knowledge process. The map becomes meaningful when the people and institutions affected by it can interpret it, contextualize it, contest it, refine it, restrict it, or redirect its use.",
      "This step is especially important when maps concern informal settlements, Indigenous territories, migrant routes, sacred sites, disaster vulnerability, politically sensitive infrastructure, or communities already exposed to surveillance, displacement, or exclusion.",
      "Individuals represented in geospatial projects should be recognized not only as data points or validation samples, but also as interpreters, knowledge holders, authorities, and decision-makers.",
      "After analysis, the project should return to grounded questions.",
    ],
    questions: [
      "Does this map correspond to local experience?",
      "Where does it require correction or contextualization?",
      "What does it make visible that requires protection?",
      "What forms of risk, memory, access, or meaning remain outside the product?",
      "Who has the authority to interpret disagreement between the map and lived experience?",
      "Who should decide how this information circulates and how it is used?",
    ],
    closing: "A satellite product can identify a pattern. Grounded interpretation clarifies what that pattern means, for whom it matters, and what forms of action it can support.",
  },
  {
    label: "Before publication", title: "Assess the politics of visibility",
    paragraphs: [
      "Publication is an ethical and political moment.",
      "Making a place visible can support recognition, resources, planning, emergency response, and care. It can also shift power. A dataset may become useful to agencies, planners, researchers, police, landlords, insurers, extractive companies, or political actors in ways that exceed the project's original intent.",
      "A map of informal settlements may support service delivery and also increase exposure to eviction. A map of Indigenous harvesting areas may support territorial claims and also reveal sensitive knowledge. A map of migrant routes may support humanitarian response and also become useful for enforcement. A map of disaster-vulnerable households may help target assistance and also stigmatize a community as permanently risky. A map of sacred sites may preserve memory for one audience and violate protocol for another.",
      "Before publication, assess the dataset's likely lifespan beyond the project team.",
    ],
    questions: [
      "Who could use this information for care?",
      "Who could use it for control?",
      "What forms of visibility might increase risk?",
      "Should some information be generalized, anonymized, delayed, restricted, aggregated, or withheld?",
      "Who has the authority to decide what can be made visible?",
    ],
    closing: "Ethical remote sensing encompasses data quality, methodological transparency, and consideration of the consequences of data dissemination. The responsibility associated with a map persists beyond its production, particularly when increased visibility influences safety, sovereignty, dignity, or access to land and resources.",
  },
];

// ─── section renderers ───────────────────────────────────────────────────

const PrincipleBlock = ({ p }) => {
  const Fig = p.Figure;
  return (
    <section id={`p${p.n}`} style={{ padding: "56px 0", borderTop: `1px solid ${FG.rule}`, scrollMarginTop: 80 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginBottom: 12 }}>
        <span className="num" style={{ fontSize: 42, fontWeight: 300, color: FG.navy, letterSpacing: "-0.02em", lineHeight: 1 }}>{p.n}</span>
        <span className="mono" style={{ fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: FG.ink3 }}>Diagnostic mismatch · {p.mismatch}</span>
      </div>
      <FromTo from={p.from} to={p.to} />
      <h3 className="serif" style={{ margin: "20px 0 24px", fontSize: 26, fontWeight: 500, color: FG.ink, letterSpacing: "-0.01em", lineHeight: 1.2, maxWidth: 760 }}>{p.title}</h3>
      <div style={{ maxWidth: 720 }}>
        {p.paragraphs.map((para, i) => (
          <p key={i} className="serif" style={{ margin: "0 0 16px", fontSize: 17, lineHeight: 1.65, color: FG.ink2 }}>{para}</p>
        ))}
      </div>
      {Fig && <Fig />}
      {p.coupletA && <Couplet a={p.coupletA} b={p.coupletB} />}
      {p.closing.length > 0 && (
        <div style={{ maxWidth: 720 }}>
          {p.closing.map((para, i) => (
            <p key={i} className="serif" style={{ margin: "0 0 16px", fontSize: 17, lineHeight: 1.65, color: FG.ink2 }}>{para}</p>
          ))}
        </div>
      )}
      <PracticalTest text={p.test} />
      <BackToTop />
    </section>
  );
};

const MomentBlock = ({ m, idx }) => (
  <section style={{ padding: "44px 0", borderTop: `1px solid ${FG.rule}` }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 14 }}>
      <span className="num" style={{ fontSize: 28, color: FG.clay, letterSpacing: "-0.02em", fontWeight: 300 }}>{String(idx + 1).padStart(2, "0")}</span>
      <span className="mono" style={{ fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: FG.clay }}>{m.label}</span>
    </div>
    <h3 className="serif" style={{ margin: "0 0 22px", fontSize: 30, fontWeight: 500, color: FG.ink, letterSpacing: "-0.014em", lineHeight: 1.15, maxWidth: 760 }}>{m.title}</h3>
    <div style={{ maxWidth: 720 }}>
      {m.paragraphs.map((para, i) => (
        <p key={i} className="serif" style={{ margin: "0 0 16px", fontSize: 17, lineHeight: 1.65, color: FG.ink2 }}>{para}</p>
      ))}
    </div>
    {m.questions && (
      <ul style={{ margin: "8px 0 18px", padding: 0, listStyle: "none", maxWidth: 720 }}>
        {m.questions.map((q, i) => (
          <li key={i} className="serif" style={{
            padding: "10px 0",
            borderBottom: i < m.questions.length - 1 ? `1px solid ${FG.rule}` : "none",
            fontSize: 17, lineHeight: 1.55, color: FG.ink,
          }}>{q}</li>
        ))}
      </ul>
    )}
    {m.closing && (
      <p className="serif" style={{
        margin: "20px 0 0", padding: "18px 22px",
        background: FG.clayT, borderLeft: `4px solid ${FG.clay}`,
        fontSize: 18, lineHeight: 1.55, color: FG.ink, fontWeight: 500,
        maxWidth: 760,
      }}>{m.closing}</p>
    )}
  </section>
);

const FieldGuideMatrix = () => {
  const readHash = () => {
    if (typeof window === "undefined") return null;
    const m = (window.location.hash || "").match(/^#p(\d+)/);
    return m ? m[1] : null;
  };
  const [active, setActive] = React.useState(readHash);
  React.useEffect(() => {
    const update = () => setActive(readHash());
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  return (
    <section id="fg-matrix" style={{ padding: "44px 0", borderTop: `1px solid ${FG.rule}`, scrollMarginTop: 80 }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: FG.ink3, marginBottom: 18 }}>
        The twelve principles at a glance · click any to jump
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1,
        background: FG.rule, border: `1px solid ${FG.rule}`,
      }}>
        {FG_PRINCIPLES.map(p => {
          const on = active === p.n;
          return (
            <a key={p.n} href={`#p${p.n}`}
              onClick={() => setActive(p.n)}
              style={{
                display: "block", padding: "16px 18px", textDecoration: "none",
                background: on ? FG.skyT : FG.bg,
                boxShadow: on ? `inset 0 3px 0 0 ${FG.navy}` : "none",
                transition: "background 220ms, box-shadow 220ms",
              }}>
              <div className="mono" style={{
                fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase",
                color: on ? FG.navy : FG.ink3, marginBottom: 8, fontWeight: on ? 600 : 400,
              }}>{p.n} · {p.mismatch}</div>
              <FromTo from={p.from} to={p.to} size="sm" />
            </a>
          );
        })}
      </div>
    </section>
  );
};

const TwelvePrinciples = () => {
  const [activeN, setActiveN] = React.useState("01");
  const p = FG_PRINCIPLES.find(x => x.n === activeN) || FG_PRINCIPLES[0];
  const Fig = p.Figure;
  return (
    <section id="fg-twelve" style={{ padding: "44px 0", borderTop: `1px solid ${FG.rule}`, scrollMarginTop: 80 }}>
      <div className="mono" style={{
        fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
        color: FG.ink3, marginBottom: 18,
      }}>The twelve principles · click any to read</div>
      <div style={{
        display: "grid", gridTemplateColumns: "minmax(280px, 340px) 1fr",
        gap: 0, border: `1px solid ${FG.rule2}`, background: FG.bg,
      }}>
        <nav style={{ borderRight: `1px solid ${FG.rule2}`, background: FG.bg2 }}>
          {FG_PRINCIPLES.map(item => {
            const on = item.n === activeN;
            return (
              <button key={item.n} onClick={() => setActiveN(item.n)}
                aria-pressed={on}
                style={{
                  appearance: "none", border: "none", cursor: "pointer",
                  width: "100%", padding: "16px 18px", textAlign: "left",
                  background: on ? FG.bg : "transparent",
                  borderLeft: on ? `3px solid ${FG.sky}` : "3px solid transparent",
                  borderBottom: `1px solid ${FG.rule}`,
                  fontFamily: "var(--sans)", color: FG.ink,
                  transition: "background 180ms",
                }}>
                <div style={{ display: "flex", gap: 14, alignItems: "baseline" }}>
                  <span className="num" style={{
                    fontSize: 22, fontWeight: 300, color: on ? FG.navy : FG.ink3,
                    letterSpacing: "-0.02em", lineHeight: 1, minWidth: 30,
                  }}>{item.n}</span>
                  <div style={{ flex: 1 }}>
                    <div className="mono" style={{
                      fontSize: 9.5, letterSpacing: "0.14em", textTransform: "uppercase",
                      color: on ? FG.ink : FG.ink3, marginBottom: 6,
                      fontWeight: on ? 600 : 400,
                    }}>mismatch · {item.mismatch}</div>
                    <FromTo from={item.from} to={item.to} size="sm" />
                  </div>
                </div>
              </button>
            );
          })}
        </nav>
        <article style={{ padding: "34px 36px 36px", minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginBottom: 12 }}>
            <span className="num" style={{
              fontSize: 48, fontWeight: 300, color: FG.navy, letterSpacing: "-0.02em", lineHeight: 1,
            }}>{p.n}</span>
            <span className="mono" style={{
              fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: FG.ink3,
            }}>mismatch · {p.mismatch}</span>
          </div>
          <FromTo from={p.from} to={p.to} size="lg" />
          <h3 className="serif" style={{
            margin: "20px 0 24px", fontSize: 26, fontWeight: 500, color: FG.ink,
            letterSpacing: "-0.01em", lineHeight: 1.2, maxWidth: 760,
          }}>{p.title}</h3>
          <div style={{ maxWidth: 720 }}>
            {p.paragraphs.map((para, i) => (
              <p key={i} className="serif" style={{
                margin: "0 0 16px", fontSize: 17, lineHeight: 1.65, color: FG.ink2,
              }}>{para}</p>
            ))}
          </div>
          {Fig && <Fig />}
          {p.coupletA && <Couplet a={p.coupletA} b={p.coupletB} />}
          {p.closing.length > 0 && (
            <div style={{ maxWidth: 720 }}>
              {p.closing.map((para, i) => (
                <p key={i} className="serif" style={{
                  margin: "0 0 16px", fontSize: 17, lineHeight: 1.65, color: FG.ink2,
                }}>{para}</p>
              ))}
            </div>
          )}
          <PracticalTest text={p.test} />
        </article>
      </div>
    </section>
  );
};

const CriticalFieldGuide = () => (
  <div style={{ "--accent": FG.clay }}>
    <header style={{ padding: "48px 0 8px" }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: FG.ink3, marginBottom: 18 }}>
        A critical field guide
      </div>
      <h2 className="serif" style={{
        margin: 0, fontSize: 52, fontWeight: 700, letterSpacing: "-0.024em",
        lineHeight: 1.05, maxWidth: 980, color: FG.ink,
      }}>
        A Critical Field Guide to <span style={{ color: FG.sky }}>Remote Sensing</span> &amp; <span style={{ color: FG.clay }}>Community Mapping</span>.
      </h2>
      <p className="serif" style={{
        margin: "28px 0 0", fontSize: 20, lineHeight: 1.5, color: FG.ink2, maxWidth: 760, fontWeight: 300,
      }}>
        Each principle frames a single move, from what the sensor measures to what it means for a life. The grammar runs <em style={{ color: FG.sky, fontStyle: "normal", fontWeight: 500 }}>sensor</em> to <em style={{ color: FG.clay, fontStyle: "normal", fontWeight: 500 }}>meaning</em>, throughout.
      </p>
    </header>

    <section style={{ padding: "44px 0", borderTop: `1px solid ${FG.rule}` }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: FG.ink3, marginBottom: 14 }}>How to use this field guide</div>
      <h3 className="serif" style={{ margin: "0 0 20px", fontSize: 30, fontWeight: 500, letterSpacing: "-0.014em", lineHeight: 1.15, color: FG.ink, maxWidth: 820 }}>An accountable workflow, at four moments.</h3>
      <div style={{ maxWidth: 760 }}>
        {FG_INTRO.map((para, i) => (
          <p key={i} className="serif" style={{ margin: "0 0 16px", fontSize: 17, lineHeight: 1.65, color: FG.ink2 }}>{para}</p>
        ))}
      </div>
    </section>

    <FrameworkPanel />
    <TranslationChain />

    <div style={{ padding: "44px 0 16px" }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: FG.ink3, marginBottom: 14 }}>The twelve principles</div>
      <h3 className="serif" style={{ margin: 0, fontSize: 30, fontWeight: 500, letterSpacing: "-0.014em", lineHeight: 1.15, color: FG.ink, maxWidth: 820 }}>From the sensor measurement to the lived consequence.</h3>
    </div>

    <TwelvePrinciples />

    <section style={{
      marginTop: 56, padding: "56px 0",
      borderTop: `1px solid ${FG.rule}`,
      background: FG.ink, color: FG.bg,
    }}>
      <div style={{ padding: "0 28px" }}>
        <p className="serif" style={{
          margin: 0, fontSize: 26, lineHeight: 1.35, fontWeight: 500,
          color: FG.bg, letterSpacing: "-0.014em", maxWidth: 920,
        }}>
          Satellites provide quantitative measurements; communities interpret and assign meaning to these measurements.
        </p>
        <p className="serif" style={{
          margin: "22px 0 0", fontSize: 18, lineHeight: 1.55, fontWeight: 300,
          color: "color-mix(in oklch, var(--paper) 78%, transparent)", maxWidth: 820,
        }}>
          Ethical remote sensing encompasses data quality, methodological transparency, and consideration of the consequences of data dissemination. The responsibility associated with a map persists beyond its production, particularly when increased visibility influences safety, sovereignty, dignity, or access to land and resources.
        </p>
      </div>
    </section>
  </div>
);

Object.assign(window, { CriticalFieldGuide });
