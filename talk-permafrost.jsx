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

const PFMovement = ({ id, num, name, nameEm, lede }) => (
  <section id={id} className="perma-movement">
    <div className="perma-mv-head">
      <span className="perma-mv-num">{num}</span>
      <h2 className="perma-mv-title">
        {name}{nameEm && <em>{nameEm}</em>}
      </h2>
    </div>
    {lede && <p className="perma-lede">{lede}</p>}
  </section>
);

const PFBlock = ({ kicker, kc, title, lede, caption, children }) => (
  <figure className="perma-figure">
    {kicker && <div className="perma-fig-kicker" style={kc ? { color: kc } : undefined}>{kicker}</div>}
    {title && <h3 className="perma-fig-title">{title}</h3>}
    {lede && <p className="perma-fig-lede">{lede}</p>}
    <div className="perma-figcard">
      {children}
    </div>
    {caption && <figcaption className="perma-figcaption">{caption}</figcaption>}
  </figure>
);

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

const FigRiskRelation = () => {
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
              borderTop: on ? `3px solid ${PF.navy}` : "3px solid transparent",
              background: on ? PF.bg : PF.bg2,
              padding: "16px 14px 14px", textAlign: "left", transition: "all .2s",
            }}>
              <PFMono c={PF.ink4} s={9}>{["A","B","C","D"][i]}</PFMono>
              <div style={{ marginTop: 6, fontSize: 16, fontWeight: 700, color: on ? PF.navy : PF.ink2, letterSpacing: "-0.01em" }}>{r.k}</div>
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
      <div style={{ borderTop: `1px solid ${PF.rule}`, background: PF.bg2, padding: "12px 26px" }}>
        <span className="serif" style={{ fontSize: 15, fontStyle: "italic", color: PF.ink2 }}>
          Risk = <b style={{ fontStyle: "normal", fontWeight: 600, color: PF.ink }}>Hazard</b>
          {" · "}<b style={{ fontStyle: "normal", fontWeight: 600, color: PF.ink }}>Exposure</b>
          {" · "}<b style={{ fontStyle: "normal", fontWeight: 600, color: PF.ink }}>Vulnerability</b>
          {" · "}<b style={{ fontStyle: "normal", fontWeight: 600, color: PF.ink }}>Capacity</b>.
          {" "}The satellite is one perspective among them, not the master view.
        </span>
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

const FigPerspectives = () => {
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

const FigChain = () => {
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
                  background: on ? PF.navy : (past ? PF.sky : PF.bg),
                  color: on || past ? "#fff" : PF.ink3,
                  border: `1.5px solid ${on ? PF.navy : (past ? PF.sky : PF.rule2)}`,
                  transition: "all .2s",
                }}>
                  <span className="num mono" style={{ fontSize: 11, fontWeight: 600 }}>{k + 1}</span>
                </div>
                <PFMono c={on ? PF.navy : PF.ink3} s={9} style={{ marginTop: 6, display: "block", whiteSpace: "nowrap" }}>{s.k}</PFMono>
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
          <div style={{ marginTop: 16, borderLeft: `3px solid ${PF.navy}`, paddingLeft: 14 }}>
            <PFMono c={PF.navy} s={9.5}>guiding question</PFMono>
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

const FigHeuristics = () => {
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

// ─── II·C · Six mismatches ────────────────────────────────────────────────

const PF_MIS = [
  ["Unit",        "pixel, parcel, footprint, grid cell",                                 "household, route, use-right, room, season, obligation"],
  ["Time",        "revisit interval, composite window, archive cadence",                 "warning moment, market day, snowmelt week, crop cycle"],
  ["Category",    "land-cover class, residual class, training label",                    "commons, refuge, meeting place, ceremonial ground"],
  ["Validation",  "ground truth as confirmation of imagery",                             "interpretation, contestation, distinct knowledges held together"],
  ["Objectivity", "disembodied viewpoint, standardized pipeline",                        "positioned seeing, accountability, reflexive interpretation"],
  ["Visibility",  "publication and exposure as public good",                             "protection, confidentiality, refusal, restricted access"],
];

const FigMismatches = () => {
  const [flipped, setFlipped] = React.useState({});
  const allFlipped = Object.keys(flipped).length === PF_MIS.length && Object.values(flipped).every(Boolean);
  const toggleAll = () => { const v = !allFlipped; const o = {}; PF_MIS.forEach((_, i) => (o[i] = v)); setFlipped(o); };
  return (
    <div style={{ border: `1px solid ${PF.rule2}`, background: PF.bg }}>
      <div style={{ display: "grid", gridTemplateColumns: "130px 1fr 1fr", background: PF.navy }}>
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
            background: i % 2 ? PF.bg2 : PF.bg,
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

const FigRegisters = () => {
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

const FigCounterMap = () => {
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

const FigVisibilityMatrix = () => {
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

const FigSolastalgia = () => {
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

const FigTaiwan = () => {
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

const FigWorkflow = () => {
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

const FigVisibilityReview = () => {
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
              borderTop: on ? `3px solid ${PF.navy}` : "3px solid transparent",
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
            <div key={i} style={{ borderLeft: `3px solid ${PF.navy}`, paddingLeft: 11 }}>
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

// ═══════════════════════════════════════════════════════════════════════════
// HTML-derived figures, ported from the permafrost_section.html design.
// These sit alongside the existing Fig* components in the Permafrost tab.
// ═══════════════════════════════════════════════════════════════════════════

// ─── Risk Quartet · reference table ───────────────────────────────────────
const FigRiskQuartet = () => (
  <div className="perma-tbl-scroll">
    <table className="perma-data">
      <thead>
        <tr>
          <th>Component</th>
          <th>Guiding question</th>
          <th>Strong RS contribution</th>
          <th>Grounded complement</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Hazard</td><td>What threatens?</td><td>flood extent, fire scar, heat, landslide</td><td>local thresholds, remembered extremes</td></tr>
        <tr><td>Exposure</td><td>Who is in the way?</td><td>buildings, roads, crops, settlements</td><td>occupancy, seasonal use, informal structures</td></tr>
        <tr><td>Vulnerability</td><td>Who is most harmed?</td><td>proxy indicators, spatial correlation</td><td>health, mobility, tenure, trust, language</td></tr>
        <tr><td>Capacity</td><td>Who can act or refuse?</td><td>access routes, service locations</td><td>leadership, mutual aid, evacuation options</td></tr>
      </tbody>
    </table>
  </div>
);

// ─── Perspectives Wheel · interactive radial SVG ──────────────────────────
const FIG_PERSP_WHEEL = [
  { key: "sky",       name: "Sky-eye",       color: "#5d709a", contrib: "Abstraction, pattern, and comparison across time and space. Scale, repetition, synoptic visibility.", strength: "Pattern",            limit: "Overextension: treating visible change as complete knowledge." },
  { key: "ground",    name: "Ground sensor", color: "#5a9aa8", contrib: "Calibration and thresholds at the scale of local action. Gauges, probes, loggers, in-situ measurement.", strength: "Precision",          limit: "Coverage: precise in place, blind between points." },
  { key: "community", name: "Community",     color: "#c2562a", contrib: "Use, memory, access, trusted warning channels, and the meanings that make a place matter beyond its surface cover.", strength: "Relevance", limit: "Treated as anecdotal unless a project grants it authority." },
  { key: "embodied",  name: "Embodied",      color: "#b07c3e", contrib: "Heat at walking height, smoke indoors, unsafe routes, the fatigue of detours, the difference between surface and livable recovery.", strength: "Lived consequence", limit: "Leaves no spectral signature." },
  { key: "inst",      name: "Institutional", color: "#4a5a82", contrib: "Mandate, jurisdiction, and the decision that converts evidence into action.", strength: "Governability", limit: "Abstraction from lived experience." },
];

const FigPerspectivesWheel = () => {
  const [sel, setSel] = React.useState("sky");
  const cx = 180, cy = 176, R = 118;
  const verts = FIG_PERSP_WHEEL.map((p, i) => {
    const a = (-90 + i * 72) * Math.PI / 180;
    return { ...p, x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) };
  });
  const sel_p = verts.find(v => v.key === sel) || verts[0];
  return (
    <div className="perma-wheel-wrap">
      <div className="perma-wheel-svg">
        <svg viewBox="0 0 360 380" role="img" aria-label="Five perspectives arranged around a central risk hub">
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="#4a5a82" strokeWidth="0.5" opacity="0.4" />
          <g>
            {verts.map(v => (
              <line key={v.key} x1={cx} y1={cy} x2={v.x} y2={v.y}
                stroke={v.key === sel ? v.color : "#5d709a"}
                strokeWidth={v.key === sel ? 2.5 : 1}
                opacity={v.key === sel ? 0.9 : 0.25} />
            ))}
          </g>
          <g>
            <circle cx={cx} cy={cy - 4} r="44" fill="#2a3450" stroke="#5d709a" strokeWidth="1" />
            <text x={cx} y={cy - 12} textAnchor="middle" fill="#cfdcee" fontFamily="'Spline Sans Mono', monospace" fontSize="11" letterSpacing="1">RISK</text>
            <text x={cx} y={cy + 4} textAnchor="middle" fill="#8b96b4" fontFamily="'Spline Sans Mono', monospace" fontSize="7.5">hazard·exposure</text>
            <text x={cx} y={cy + 15} textAnchor="middle" fill="#8b96b4" fontFamily="'Spline Sans Mono', monospace" fontSize="7.5">vulnerability·capacity</text>
          </g>
          <g>
            {verts.map(v => {
              const on = v.key === sel;
              const ux = v.x - cx, uy = v.y - cy, mag = Math.sqrt(ux * ux + uy * uy);
              let lx = cx + ux / mag * (R + 26), ly = cy + uy / mag * (R + 26) + 4, anchor = "middle";
              if (lx < cx - 12) { anchor = "start"; lx = 6; }
              else if (lx > cx + 12) { anchor = "end"; lx = 354; }
              return (
                <g key={v.key} className="perma-vertex" onClick={() => setSel(v.key)} style={{ cursor: "pointer" }}>
                  <circle cx={v.x} cy={v.y} r={on ? 30 : 22} fill={v.color} stroke="#cfdcee" strokeWidth="1" opacity={on ? 1 : 0.45} />
                  <text x={lx} y={ly} textAnchor={anchor} fill="#cfdcee" fontFamily="'Spline Sans Mono', monospace" fontSize="10.5">{v.name}</text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
      <div className="perma-wheel-detail">
        <p className="pname">{sel_p.name}</p>
        <div className="pbar" style={{ background: sel_p.color }} />
        <div className="block">
          <div className="lab">Contributes</div>
          <div className="val">{sel_p.contrib}</div>
        </div>
        <div className="block">
          <div className="lab">Strength</div>
          <div className="val one">{sel_p.strength}</div>
        </div>
        <div className="block">
          <div className="lab">Limit or hazard</div>
          <div className="val">{sel_p.limit}</div>
        </div>
      </div>
    </div>
  );
};

// ─── B-Taper · translation chain SVG ──────────────────────────────────────
const FigBTaper = () => (
  <div style={{ padding: "8px 26px 4px" }}>
    <svg viewBox="0 0 1100 340" role="img" aria-label="Translation chain: operational gain holds level along the top while lived meaning falls away along the rising floor" style={{ width: "100%", height: "auto" }}>
      <defs>
        <linearGradient id="pm-taper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dce8f7" /><stop offset="1" stopColor="#f6ede7" />
        </linearGradient>
      </defs>
      <text x="150" y="60" fontFamily="'Spline Sans Mono', monospace" fontSize="13" letterSpacing="1.5" fill="#2f6fd0" fontWeight="500">GAINED →  SCALE · REPETITION · COMPARISON · CHANGE DETECTION</text>
      <polygon points="150,108 1000,108 1000,176 150,240" fill="url(#pm-taper)" stroke="#5a8fd6" strokeWidth="1.5" />
      <line x1="150" y1="108" x2="1000" y2="108" stroke="#2f6fd0" strokeWidth="2" />
      <line x1="150" y1="240" x2="1000" y2="240" stroke="#d8b9a6" strokeWidth="1" strokeDasharray="2 5" />
      <g stroke="#9bb4dc" strokeWidth="1" strokeDasharray="2 4">
        {[271, 393, 514, 636, 757, 879].map((x, i) => {
          const yBot = [231, 222, 213, 204, 195, 186][i];
          return <line key={x} x1={x} y1="108" x2={x} y2={yBot} />;
        })}
      </g>
      <g fill="#1f4b8e">
        {[[150,174],[271,170],[393,165],[514,161],[636,156],[757,152],[879,147],[1000,142]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="5" />
        ))}
      </g>
      <g fontFamily="'Spline Sans Mono', monospace" fontSize="12" fill="#33404d" letterSpacing="0.5" textAnchor="middle">
        <text x="150" y="278">SIGNAL</text>
        <text x="271" y="278">IMAGE</text>
        <text x="393" y="278">INDICATOR</text>
        <text x="514" y="278">CLASS</text>
        <text x="636" y="278">MODEL</text>
        <text x="757" y="278">RISK SCORE</text>
        <text x="879" y="278">DECISION</text>
        <text x="1000" y="278">INTERVENTION</text>
      </g>
      <text x="150" y="318" fontFamily="'Spline Sans Mono', monospace" fontSize="13" letterSpacing="1.5" fill="#c2562a" fontWeight="500">LOST ↓  USE · MEMORY · ACCESS · OBLIGATION · MEANING</text>
      <text x="1000" y="318" fontFamily="'Newsreader', serif" fontSize="12" textAnchor="end" fill="#8a93a0" fontStyle="italic">gain holds; the ground is what falls away</text>
    </svg>
  </div>
);

// ─── Heuristic 3-tab figure (HTML version) ────────────────────────────────
const FIG_H3 = [
  { k: "sensor",   tab: "Sensor",   title: "The sensor defines what kind of world can be measured",
    defn: "Optical instruments privilege reflectance, SAR privileges roughness and moisture, thermal privileges surface temperature, LiDAR privileges structure. Each opens certain questions and makes others less accessible.",
    inv:  "A flooded road is visible as water extent. Its contamination, and the fear of crossing it after dark, require other evidence the instrument was never built to record." },
  { k: "model",    tab: "Model",    title: "The model defines how measurement becomes category",
    defn: "Thresholds, training labels, and loss functions turn continuous signal into analytical objects. This is where bare, built-up, damaged, and high-risk become operational categories with hard edges.",
    inv:  "A building-detection model identifies rooftops accurately while leaving occupancy, tenure, and safe egress outside the output. It is strong as geometry and incomplete as social evidence." },
  { k: "decision", tab: "Decision", title: "The institution defines how evidence becomes action",
    defn: "A hazard map can become an evacuation order, an insurance premium, or a humanitarian priority. At that point the technical output enters mandate, trust, liability, and budget.",
    inv:  "A flood model maps inundation. Whether anyone evacuates depends on who issues the order, whether people trust that institution, and whether prior warnings were experienced as credible." },
];

const FigHeuristicsHTML = () => {
  const [sel, setSel] = React.useState("sensor");
  const cur = FIG_H3.find(h => h.k === sel) || FIG_H3[0];
  return (
    <div>
      <div className="perma-htabs" role="tablist">
        {FIG_H3.map(h => (
          <button key={h.k} className="perma-htab" role="tab"
            aria-selected={sel === h.k ? "true" : "false"}
            onClick={() => setSel(h.k)}>{h.tab}</button>
        ))}
      </div>
      <div className="perma-hpanel">
        <h4>{cur.title}</h4>
        <p className="defn">{cur.defn}</p>
        <div className="invisible">
          <b>where it turns invisible</b>{cur.inv}
        </div>
      </div>
      <div className="perma-hcite">Vocabulary after Braun (2021) and Bennett, <em>Politics of Pixels</em> (2022).</div>
    </div>
  );
};

// ─── 6-row Mismatches reference table ─────────────────────────────────────
const FigMismatchesTable = () => (
  <div className="perma-tbl-scroll">
    <table className="perma-data">
      <thead>
        <tr>
          <th>Mismatch</th>
          <th>What RS privileges</th>
          <th>What often matters in practice</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Unit</td><td>pixel, parcel, footprint, grid cell</td><td>household, route, use-right, room, season</td></tr>
        <tr><td>Time</td><td>revisit interval, composite window</td><td>warning moment, market day, crop cycle</td></tr>
        <tr><td>Category</td><td>land-cover class, training label</td><td>commons, refuge, ceremonial ground</td></tr>
        <tr><td>Validation</td><td>ground truth confirms imagery</td><td>contestation, distinct knowledges held together</td></tr>
        <tr><td>Objectivity</td><td>disembodied, standardized pipeline</td><td>positioned seeing, accountability</td></tr>
        <tr><td>Visibility</td><td>publication as public good</td><td>protection, confidentiality, refusal</td></tr>
      </tbody>
    </table>
  </div>
);

// ─── Counter-Map flip cards + "Counter-mapping asks" question list ────────
const FIG_CMF = [
  { front: "A flood map shows water extent.",            back: ["which households lacked transport","which shelters were inaccessible","which warning channels were trusted","which forms of loss went uncounted"] },
  { front: "A land-cover product shows bare ground.",    back: ["commons and grazing corridors","ceremonial grounds","evacuation sites","places of memory"] },
  { front: "A damage map shows destroyed buildings.",    back: ["renters displaced from standing structures","contaminated wells","unresolved insurance disputes","the slow afterlife of disaster"] },
];

const FigCounterMapHTML = () => {
  const [flip, setFlip] = React.useState({});
  return (
    <div>
      <div className="perma-flipgrid">
        {FIG_CMF.map((c, i) => {
          const on = !!flip[i];
          return (
            <div key={i} className="perma-flip" role="button" tabIndex={0}
              aria-pressed={on ? "true" : "false"}
              onClick={() => setFlip(f => ({ ...f, [i]: !f[i] }))}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFlip(f => ({ ...f, [i]: !f[i] })); } }}>
              <div className="perma-flip-in">
                <div className="perma-flip-face perma-flip-front">
                  <div className="satlabel">the satellite shows</div>
                  <div className="satclaim">{c.front}</div>
                  <div className="hint">tap to see the counter-map</div>
                </div>
                <div className="perma-flip-face perma-flip-back">
                  <div className="clab">the counter-map shows</div>
                  <ul>{c.back.map((b, j) => <li key={j}>{b}</li>)}</ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="perma-whose">
        <div className="lab">Counter-mapping asks</div>
        <div className="perma-whose-q">
          <span>Whose land?</span>
          <span>Whose risk?</span>
          <span>Whose infrastructure?</span>
          <span>Whose memory?</span>
          <span>Whose categories?</span>
          <span>Whose map?</span>
          <span>Whose decision?</span>
        </div>
      </div>
      <p className="perma-tagline">
        The satellite identifies <b>where</b> something changed. Counter-mapping asks <b>what changed for whom</b>, according to whose categories, and under whose authority. <span style={{ display: "block", marginTop: 8, fontSize: 14, color: "var(--ink-3)" }}>After Peluso (Kalimantan, 1995), Nietschmann, Chapin (2005), and Forensic Architecture / Weizman.</span>
      </p>
    </div>
  );
};

// ─── Visibility 2×2 matrix with quadrant readout ──────────────────────────
const FIG_QUAD = {
  erasure:     { name: "Erasure",                def: "Places, people, and claims remain unseen, uncounted, and excluded from decisions.",                    ex: "Informal settlements missing from datasets; slow recovery losses absent from damage assessments." },
  protection:  { name: "Protection",             def: "Some knowledge stays deliberately restricted because visibility carries risk.",                          ex: "Sensitive harvesting areas, sacred places, household-level vulnerability data." },
  exposure:    { name: "Exposure",               def: "Places become visible to actors who can control, evict, stigmatize, police, or extract.",               ex: "Migrant routes mapped without protection; vulnerability maps feeding insurance exclusion." },
  accountable: { name: "Accountable visibility", def: "Data circulates under governance, consent, purpose limitation, and community interpretation.",          ex: "Community-validated risk maps; counter-maps used to support claims and protection." },
};

const FigVisibility2x2 = () => {
  const [sel, setSel] = React.useState(null);
  const cur = sel ? FIG_QUAD[sel] : null;
  return (
    <div className="perma-matrix-wrap">
      <div className="perma-matrix-yaxis">visibility →</div>
      <div className="perma-matrix-core">
        <div className="perma-matrix-xaxis">community authority →</div>
        <div className="perma-grid2">
          {[
            { k: "erasure",     corner: "low · low",   name: "Erasure",                hint: "unseen, uncounted, excluded" },
            { k: "protection",  corner: "low · high",  name: "Protection",             hint: "deliberately restricted" },
            { k: "exposure",    corner: "high · low",  name: "Exposure",               hint: "visible to those who can harm" },
            { k: "accountable", corner: "high · high", name: "Accountable visibility", hint: "circulates under governance" },
          ].map(q => (
            <button key={q.k} className="perma-quad"
              aria-pressed={sel === q.k ? "true" : "false"}
              onClick={() => setSel(q.k)}>
              <span className="corner">{q.corner}</span>
              <div className="qname">{q.name}</div>
              <div className="qhint">{q.hint}</div>
            </button>
          ))}
        </div>
        <div className="perma-matrix-readout">
          {cur ? (
            <React.Fragment>
              <p className="rname">{cur.name}</p>
              <p className="rdef">{cur.def}</p>
              <p className="rex">{cur.ex}</p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className="rname">Tap a quadrant</p>
              <p className="rdef">The two axes are community authority and visibility. Their combination, not visibility alone, determines whether being seen is protective or dangerous.</p>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Taiwan slider · non-linear willingness with 6 mediator chips ─────────
const FIG_TW_CHIPS = [
  { label: "prior false alarms",        d: 14, nonmono: false },
  { label: "distrust of the source",    d: 18, nonmono: false },
  { label: "high evacuation cost",      d: 16, nonmono: false },
  { label: "poor shelter quality",      d: 12, nonmono: false },
  { label: "care for elders, animals",  d: 13, nonmono: false },
  { label: "strong place attachment",   d: 0,  nonmono: true  },
];

const FigTaiwanHTML = () => {
  const [p, setP] = React.useState(50);
  const [on, setOn] = React.useState({});
  const X0 = 60, X1 = 610, Y0 = 310, Y1 = 20;
  const px = (q) => X0 + (X1 - X0) * (q / 100);
  const py = (w) => Y0 + (Y1 - Y0) * (w / 100);
  const baseWill = (q) => 100 / (1 + Math.exp(-(q - 62) / 12));
  const deltas = () => {
    let sum = 0, nonmono = false;
    FIG_TW_CHIPS.forEach((c, i) => { if (on[i]) { if (c.nonmono) nonmono = true; else sum += c.d; } });
    return { sum, nonmono };
  };
  const willAt = (q) => {
    const d = deltas();
    let w = baseWill(q) - d.sum;
    if (d.nonmono) {
      const bump = 10 * Math.sin((q / 100) * Math.PI) * (q > 75 ? -0.4 : 1);
      if (q > 75) w += 8; else w -= bump * 0.6;
    }
    return Math.max(0, Math.min(100, w));
  };
  const pts = [];
  for (let q = 0; q <= 100; q += 2) pts.push(`${px(q)},${py(willAt(q))}`);
  const curveD = "M" + pts.join(" L");
  const w = willAt(p);

  return (
    <div className="perma-tw-grid">
      <div className="perma-tw-plot">
        <svg viewBox="0 0 640 360" role="img" aria-label="Willingness to evacuate against probability of damage, non-linear curve well below the linear reference">
          <line x1="60" y1="20" x2="60" y2="310" stroke="#4a5a82" strokeWidth="1" />
          <line x1="60" y1="310" x2="610" y2="310" stroke="#4a5a82" strokeWidth="1" />
          <text x="35" y="30" fill="#8b96b4" fontFamily="'Spline Sans Mono', monospace" fontSize="9" textAnchor="middle">100</text>
          <text x="35" y="312" fill="#8b96b4" fontFamily="'Spline Sans Mono', monospace" fontSize="9" textAnchor="middle">0</text>
          <text x="335" y="340" fill="#8b96b4" fontFamily="'Spline Sans Mono', monospace" fontSize="10" textAnchor="middle" letterSpacing="1">PROBABILITY OF DAMAGE →</text>
          <text x="20" y="170" fill="#8b96b4" fontFamily="'Spline Sans Mono', monospace" fontSize="10" textAnchor="middle" transform="rotate(-90 20 170)" letterSpacing="1">WILLINGNESS →</text>
          <line x1="60" y1="310" x2="610" y2="20" stroke="#9fb4d0" strokeWidth="1.4" strokeDasharray="5 5" opacity="0.6" />
          <text x="500" y="60" fill="#9fb4d0" fontFamily="'Newsreader', serif" fontStyle="italic" fontSize="12">if it were linear</text>
          <path d={curveD} fill="none" stroke="#c2562a" strokeWidth="3" />
          <circle cx={px(p)} cy={py(w)} r="7" fill="#e3edf6" stroke="#c2562a" strokeWidth="2.5" />
          <line x1={px(p)} y1={Y0} x2={px(p)} y2={py(w)} stroke="#c2562a" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
        </svg>
      </div>
      <div className="perma-tw-readout">
        <div className="prob">probability of damage  <b>{p}</b>%</div>
        <div className="will">willingness to evacuate  <b>{Math.round(w)}</b>%</div>
      </div>
      <div className="perma-tw-slider">
        <label htmlFor="pm-tw-slider">drag the forecast</label>
        <input id="pm-tw-slider" type="range" min="0" max="100" value={p} onChange={(e) => setP(parseInt(e.target.value, 10))} />
      </div>
      <div className="perma-tw-chips">
        {FIG_TW_CHIPS.map((c, i) => {
          const pressed = !!on[i];
          return (
            <span key={i}
              className={"perma-tw-chip" + (c.nonmono ? " nonmono" : "")}
              role="button" tabIndex={0}
              aria-pressed={pressed ? "true" : "false"}
              onClick={() => setOn(s => ({ ...s, [i]: !s[i] }))}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOn(s => ({ ...s, [i]: !s[i] })); } }}>
              {c.label}
            </span>
          );
        })}
      </div>
      <p className="perma-tw-note">Each mediator bends the curve. Place attachment is marked differently because it cuts both ways: it can hold a household in place against a warning, or drive an early, protective departure.</p>
    </div>
  );
};

Object.assign(window, {
  PF, PFMono, PFKeys, PFMovement, PFBlock,
  FigRiskRelation, FigPerspectives, FigChain, FigHeuristics, FigMismatches,
  FigRegisters, FigCounterMap, FigVisibilityMatrix, FigSolastalgia,
  FigTaiwan, FigWorkflow, FigVisibilityReview,
  // HTML-derived figures
  FigRiskQuartet, FigPerspectivesWheel, FigBTaper, FigHeuristicsHTML,
  FigMismatchesTable, FigCounterMapHTML, FigVisibility2x2, FigTaiwanHTML,
});
