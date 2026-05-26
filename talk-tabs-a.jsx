// =======================================================================
// Tabs A — Ouverture · Slides · Modalités
// =======================================================================

// -----------------------------------------------------------------------
// OUVERTURE
// -----------------------------------------------------------------------
const TabOuverture = () => (
  <div>
    {/* TIGHTER MASTHEAD — title block, interactive painting follows */}
    <section style={{
      borderBottom: "1px solid var(--rule)",
      background: "var(--paper)",
      padding: "72px 0 56px",
    }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56, alignItems: "end" }}>
          <div>
            <div className="mono" style={{
              fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase",
              color: "var(--terra)", marginBottom: 22,
            }}>An interactive companion to a lecture</div>

            <h1 className="serif" style={{
              margin: 0, fontSize: 104, lineHeight: 0.9, fontWeight: 300,
              letterSpacing: "-0.030em",
            }}>
              Working in the<br/>
              <em style={{ fontStyle: "italic", color: "var(--terra-2)", fontWeight: 300 }}>boundary layer</em>
            </h1>

            <p className="serif" style={{
              margin: "26px 0 0", maxWidth: 660,
              fontSize: 22, lineHeight: 1.35, fontWeight: 300,
              color: "var(--ink-2)",
            }}>
              Remote sensing between <em style={{ color: "var(--lapis)" }}>sky-eye abstraction</em>,
              <em style={{ color: "var(--moss)" }}> ground-up knowledge</em>, and
              <em style={{ color: "var(--terra)" }}> care</em>. A lecture for the Canadian Remote
              Sensing Society — and a guide you can read alongside, before, or after.
            </p>
          </div>
          <aside style={{
            border: "1px solid var(--rule)", padding: 24,
            background: "var(--paper-2)",
            display: "grid", gap: 14,
          }}>
            <div className="caps" style={{ color: "var(--terra)" }}>The two questions</div>
            <p style={{
              margin: 0, fontSize: 14, color: "var(--ink-3)", fontStyle: "italic", lineHeight: 1.55,
            }}>The old question.</p>
            <p className="serif" style={{
              margin: 0, fontSize: 19, color: "var(--ink-2)", lineHeight: 1.3, fontWeight: 400,
            }}>“What can remote sensing see?”</p>
            <Rule />
            <p style={{
              margin: 0, fontSize: 14, color: "var(--terra)", fontStyle: "italic", lineHeight: 1.55,
            }}>The question this talk asks.</p>
            <p className="serif" style={{
              margin: 0, fontSize: 21, color: "var(--ink)", lineHeight: 1.3, fontWeight: 500,
            }}>“What kind of <em>relationship</em> does remote sensing build with the ground, and what obligations follow from seeing?”</p>
          </aside>
        </div>
      </div>
    </section>

    {/* MARQUEE — the interactive painting */}
    <InteractivePainting />

    {/* PLATO + ARISTOTLE dialectic */}
    <section className="wrap" style={{ padding: "96px 56px 0" }}>
      <SectionHead
        index="i"
        eyebrow="The two gestures — opening figure"
        title="A satellite is the instrument that points upward in order to look down."
        lede="Remote sensing lives inside this tension. It is a technology that reaches upward to look down — abstracting the Earth into pixels, bands, indices, classes, footprints, probabilities and models. Its value for risk, resilience and community depends on whether that abstraction can return to the ground with responsibility."
      />

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0,
        borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
        marginTop: 32,
      }}>
        {/* Plato */}
        <div style={{
          padding: "36px 36px 40px",
          borderRight: "1px solid var(--rule)",
          position: "relative",
        }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24 }}>
            <Pill tone="lapis">left figure</Pill>
            <span className="mono" style={{ fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.12em" }}>↑ INDEX UP</span>
          </div>
          <h3 className="serif" style={{
            margin: 0, fontSize: 56, fontWeight: 300, letterSpacing: "-0.02em",
          }}>Plato <em style={{ color: "var(--lapis-2)" }}>· Timaeus</em></h3>
          <p style={{
            margin: "16px 0 0", fontSize: 16, lineHeight: 1.55,
            color: "var(--ink-2)", maxWidth: 460,
          }}>
            The principle of <Fr>espérance</Fr> — anticipatory consciousness, the
            impulse toward a better world that does not yet exist. Bloch's hope.
            The total view; the dream of complete knowledge; the abstract.
          </p>
          <div style={{ marginTop: 26 }}>
            <div className="caps" style={{ color: "var(--lapis)", marginBottom: 8 }}>In our discipline</div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)" }}>
              The satellite. The foundation model. The planetary archive. The
              promise that more sensing means better decisions.
            </p>
          </div>
        </div>
        {/* Aristotle */}
        <div style={{ padding: "36px 36px 40px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24 }}>
            <Pill tone="terra">right figure</Pill>
            <span className="mono" style={{ fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.12em" }}>→ PALM FLAT</span>
          </div>
          <h3 className="serif" style={{
            margin: 0, fontSize: 56, fontWeight: 300, letterSpacing: "-0.02em",
          }}>Aristotle <em style={{ color: "var(--terra-2)" }}>· Ethics</em></h3>
          <p style={{
            margin: "16px 0 0", fontSize: 16, lineHeight: 1.55,
            color: "var(--ink-2)", maxWidth: 460,
          }}>
            The principle of <Fr>responsabilité</Fr> — the heuristic of fear, the duty
            to those who are here and to those who come after. Jonas. The ground;
            the named place; the specific person.
          </p>
          <div style={{ marginTop: 26 }}>
            <div className="caps" style={{ color: "var(--terra)", marginBottom: 8 }}>In our discipline</div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)" }}>
              The community-led monitor. OCAP. The validator in the village. The
              insistence that the pixel becomes a decision about a life.
            </p>
          </div>
        </div>
      </div>

      <Pull color="var(--ochre)">
        The boundary layer is where care happens. Everything else is preparation or aftermath.
      </Pull>
    </section>

    {/* CENTRAL THESIS — boundary layer + boundary-layer schematic */}
    <section className="wrap" style={{ padding: "40px 56px 0" }}>
      <SectionHead
        index="ii"
        eyebrow="Central thesis · what the boundary layer is"
        title="Where pixels meet bodies, models meet decisions, and images meet obligations."
        color="var(--lapis)"
        lede={TALK.central_claim}
      />

      <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 36, alignItems: "start" }}>
        <BoundaryLayerSchematic height={620} />
        <div>
          <Kicker color="var(--lapis)">The atmospheric boundary layer · the political boundary layer</Kicker>
          <P>
            The atmospheric boundary layer is the lower kilometre or so of the
            troposphere — the thin shell where weather forms, pollution mixes,
            and bodies live and breathe. It is also, in this talk, the conceptual
            layer between satellite abstraction and lived consequence.
          </P>
          <P>
            It is where hazard becomes risk; where land cover becomes land use;
            where classification becomes decision; where visibility becomes
            either protection or surveillance; and where change detection becomes
            memory, loss, and responsibility.
          </P>
          <Pull color="var(--lapis)">
            Remote sensing reaches upward in order to look down. The boundary layer is where it has to land.
          </Pull>
          <div style={{
            padding: "18px 22px",
            background: "var(--lapis-tint)",
            border: "1px solid color-mix(in oklch, var(--lapis) 30%, transparent)",
          }}>
            <div className="caps" style={{ color: "var(--lapis)", marginBottom: 6 }}>In one sentence</div>
            <p className="serif" style={{
              margin: 0, fontSize: 19, lineHeight: 1.4, color: "var(--ink)", fontWeight: 400,
            }}>
              Remote sensing does not simply see the world; it decides what counts
              as a hazard, an exposure, a building, a pond, a road, a camp, a
              vulnerable place, a useful signal, or a valid form of evidence.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* SPEAKER paragraph */}
    <section className="wrap" style={{ padding: "96px 56px 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "start" }}>
        <div>
          <Kicker color="var(--terra)">The speaker · in one paragraph</Kicker>
          <p className="serif" style={{
            margin: 0, fontSize: 21, lineHeight: 1.45, fontWeight: 300,
            color: "var(--ink)",
          }}>
            Sophia leads the Canadian Red Cross community-mapping portfolio and our
            Missing Maps work, and sits on the governance body of MapSwipe. She is
            writing climate-adaptation reports for southwestern Newfoundland. She
            trained as a software engineer at EPFL — environmental history with
            Marot, urban climate with Coccolo and Mauree — and has worked at the
            Taiwan Typhoon Research Centre, at SOCODEVI in West Africa, and at the
            Canada Energy Regulator. She reads Traditional Chinese, studies
            Japanese, and works in English and French.
          </p>
        </div>
        <Card pad={28}>
          <Kicker color="var(--ochre)">Reading this site</Kicker>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)" }}>
            Five sections. <strong>Slides</strong> mirrors the talk's 26 cues with running
            time and notes. <strong>Plongées</strong> holds the three deep dives and the
            load-bearing diagrams — the five perspectives wheel, the three-layer
            heuristic stack, the looks/sounds/felt/means quadrant.
            <strong> Avenir</strong> and <strong>Annexes</strong> are for after the talk
            and for Q&A. The painting above is the compass — click either hand.
          </p>
          <div style={{
            marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8,
            fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.10em",
            color: "var(--ink-3)", textTransform: "uppercase",
          }}>
            <span>i — Ouverture</span>
            <span>ii — Slides</span>
            <span>iii — Plongées</span>
            <span>iv — Avenir</span>
            <span>v — Annexes</span>
            <span>&nbsp;</span>
          </div>
        </Card>
      </div>

      {/* Career arc */}
      <CareerArc />

      {/* one-paragraph manifesto */}
      <div style={{
        marginTop: 80, padding: "40px 0", borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40 }}>
          <Kicker color="var(--terra)">A meta-frame</Kicker>
          <p className="serif" style={{
            margin: 0, fontSize: 26, lineHeight: 1.3, fontWeight: 400,
            color: "var(--ink)", letterSpacing: "-0.01em",
          }}>
            Remote sensing is inference under structural uncertainty, in service of
            decisions about people. The discipline matures when it stops pretending
            otherwise.
          </p>
        </div>
      </div>
    </section>
  </div>
);

// -----------------------------------------------------------------------
// SLIDES — 26-slide navigator with running clock
// -----------------------------------------------------------------------
const PART_LABELS = {
  "1A": { label: "1A · Opening — Plato, Aristotle, me", color: "var(--lapis)" },
  "1B": { label: "1B · Red Cross + Missing Maps",        color: "var(--terra)" },
  "1C": { label: "1C · Sector overview",                  color: "var(--ochre)" },
  "T1": { label: "T1 · Applications",                     color: "var(--terra)" },
  "T2": { label: "T2 · Integration & epistemology",       color: "var(--moss)" },
  "T3": { label: "T3 · Ethics & politics",                color: "var(--plum)" },
  "P3": { label: "Part 3 · Future + close",               color: "var(--lapis)" },
};

const SlideVisual = ({ kind }) => {
  // Compact diagrammatic stand-ins for each slide's main visual.
  const stripeBg = (
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: "repeating-linear-gradient(135deg, var(--rule-soft) 0 1px, transparent 1px 8px)",
      opacity: 0.7,
    }} />
  );

  if (kind === "painting-detail" || kind === "painting-bookend") {
    return (
      <div style={{
        position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "var(--ink)",
        backgroundImage: "url(img/school-of-athens.jpg)",
        backgroundSize: "260%",
        backgroundPosition: "53% 36%",
        backgroundRepeat: "no-repeat",
      }}>
        <div style={{ position: "absolute", left: 12, bottom: 12,
          color: "var(--paper)", textShadow: "0 1px 4px rgba(0,0,0,0.6)",
          fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.12em" }}>
          {kind === "painting-bookend" ? "BOOKEND" : "PLATO ←→ ARISTOTLE"}
        </div>
      </div>
    );
  }
  if (kind === "earth-disc") {
    return (
      <div style={{ position: "relative", aspectRatio: "4/3", background: "var(--ink)", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(circle at 50% 55%, var(--lapis-2) 0%, var(--lapis) 38%, var(--ink) 70%)",
        }} />
        <div style={{
          position: "absolute", left: "50%", top: "50%", width: "62%", aspectRatio: "1",
          transform: "translate(-50%, -50%)",
          border: "1px solid color-mix(in oklch, var(--paper) 35%, transparent)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", left: "50%", top: "50%", width: "78%", aspectRatio: "1",
          transform: "translate(-50%, -50%)",
          border: "1px dashed color-mix(in oklch, var(--paper) 25%, transparent)",
          borderRadius: "50%",
        }} />
      </div>
    );
  }
  if (kind === "co2-gauge") {
    return (
      <div style={{ position: "relative", aspectRatio: "4/3", padding: 18, background: "var(--paper)" }}>
        <CO2Gauge height={180} />
      </div>
    );
  }
  if (kind === "lausanne-pixel") {
    return (
      <div style={{ position: "relative", aspectRatio: "4/3", background: "var(--paper)" }}>
        <PixelWalk height={"100%"} />
      </div>
    );
  }
  // Default abstract: stripes + label
  return (
    <div style={{ position: "relative", aspectRatio: "4/3", background: "var(--paper-2)" }}>
      {stripeBg}
      <div style={{
        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.16em",
        color: "var(--ink-3)", textTransform: "uppercase",
      }}>{kind.replace(/-/g, " ")}</div>
    </div>
  );
};

const TabSlides = () => {
  const [active, setActive] = React.useState(() => {
    const stored = Number(localStorage.getItem("crss:slide"));
    return Number.isFinite(stored) && stored > 0 && stored <= SLIDES.length ? stored : 1;
  });
  React.useEffect(() => {
    localStorage.setItem("crss:slide", String(active));
  }, [active]);

  const slide = SLIDES.find(s => s.n === active) || SLIDES[0];
  const part = PART_LABELS[slide.part];
  const progress = (active / SLIDES.length) * 100;

  // group slides by part for the rail
  const grouped = React.useMemo(() => {
    const order = ["1A", "1B", "1C", "T1", "T2", "T3", "P3"];
    return order.map(p => ({ p, slides: SLIDES.filter(s => s.part === p) }));
  }, []);

  return (
    <div className="wrap" style={{ padding: "72px 56px 100px" }}>
      <SectionHead
        index="ii"
        eyebrow="The talk · 26 slides with running time"
        title="A live companion: follow the deck as it unfolds."
        lede="Use this section during the talk or as a rehearsal aid. Click any slide to read its prose notes; ←/→ to walk through the deck. The progress bar shows the position in the 60-minute envelope."
      />

      {/* Progress strip */}
      <div style={{
        position: "sticky", top: 88, zIndex: 5,
        background: "color-mix(in oklch, var(--paper) 92%, transparent)",
        backdropFilter: "blur(6px)",
        padding: "14px 0 18px", marginBottom: 28,
        borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <span className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--ink-3)" }}>
            <span style={{ color: part.color }}>● </span>{part.label}
          </span>
          <span className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--ink-3)" }}>
            slide {String(active).padStart(2,"0")} / {SLIDES.length} · running {slide.t} of 60:00
          </span>
        </div>
        <div style={{ height: 4, background: "var(--paper-3)", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, width: `${progress}%`, background: "var(--terra)", transition: "width 200ms" }} />
        </div>
      </div>

      {/* Main split: rail + slide reader */}
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 36, alignItems: "start" }}>
        {/* Rail */}
        <div style={{
          border: "1px solid var(--rule)", maxHeight: 720, overflowY: "auto",
          background: "var(--paper)",
        }}>
          {grouped.map(({ p, slides }) => (
            <div key={p}>
              <div className="caps" style={{
                padding: "12px 14px", color: PART_LABELS[p].color,
                background: "var(--paper-2)", borderBottom: "1px solid var(--rule-soft)",
                borderTop: "1px solid var(--rule-soft)",
                fontSize: 10,
              }}>{PART_LABELS[p].label}</div>
              {slides.map(s => {
                const on = s.n === active;
                return (
                  <button key={s.n} onClick={() => setActive(s.n)}
                    style={{
                      appearance: "none", border: "none", background: on ? "var(--paper-2)" : "transparent",
                      width: "100%", textAlign: "left", padding: "10px 14px",
                      borderBottom: "1px solid var(--rule-soft)",
                      display: "grid", gridTemplateColumns: "32px 1fr 38px",
                      gap: 10, cursor: "pointer", color: "var(--ink)",
                      borderLeft: on ? `3px solid ${PART_LABELS[p].color}` : "3px solid transparent",
                    }}>
                    <span className="num" style={{
                      fontSize: 18, color: on ? "var(--terra)" : "var(--ink-3)", lineHeight: 1,
                    }}>{s.n}</span>
                    <span style={{
                      fontSize: 12.5, lineHeight: 1.35, color: on ? "var(--ink)" : "var(--ink-2)",
                      fontWeight: on ? 500 : 400,
                    }}>{s.title.replace(/—.*$/,"").trim()}</span>
                    <span className="mono" style={{
                      fontSize: 9.5, color: "var(--ink-3)", textAlign: "right", letterSpacing: "0.06em",
                    }}>{s.t}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Reader */}
        <div>
          <Card pad={0}>
            <div style={{ padding: "26px 32px 22px", borderBottom: "1px solid var(--rule)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 14 }}>
                <span className="num" style={{
                  fontSize: 56, color: "var(--terra)", lineHeight: 0.92, letterSpacing: "-0.02em",
                }}>{String(slide.n).padStart(2,"0")}</span>
                <div>
                  <Pill tone="ink" style={{ marginRight: 8 }}>{slide.part}</Pill>
                  <Pill tone="ochre">{slide.t}</Pill>
                </div>
              </div>
              <h3 className="serif" style={{
                margin: 0, fontSize: 30, lineHeight: 1.15, fontWeight: 400,
                letterSpacing: "-0.01em",
              }}>{slide.title}</h3>
              {slide.kicker && (
                <p className="serif" style={{
                  margin: "10px 0 0", fontSize: 16, color: "var(--ink-3)",
                  fontStyle: "italic", fontWeight: 400,
                }}>{slide.kicker}</p>
              )}
            </div>

            {/* visual */}
            <div style={{
              padding: 28, borderBottom: "1px solid var(--rule)",
              background: "var(--paper-2)",
            }}>
              <div style={{ maxWidth: 700, margin: "0 auto" }}>
                <SlideVisual kind={slide.visual} />
              </div>
            </div>

            {/* notes */}
            <div style={{ padding: "26px 32px" }}>
              <div className="caps" style={{ color: "var(--terra)", marginBottom: 12 }}>Speaker notes</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {slide.notes.map((n, i) => (
                  <li key={i} style={{
                    display: "grid", gridTemplateColumns: "26px 1fr", gap: 12,
                    padding: "8px 0", borderBottom: i < slide.notes.length - 1 ? "1px solid var(--rule-soft)" : "none",
                    alignItems: "baseline",
                  }}>
                    <span className="mono" style={{
                      fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.10em",
                    }}>{String(i+1).padStart(2,"0")}</span>
                    <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink)" }}>{n}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* nav */}
            <div style={{
              padding: "14px 32px", borderTop: "1px solid var(--rule)",
              background: "var(--paper-2)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <button onClick={() => setActive(Math.max(1, active - 1))}
                disabled={active === 1}
                style={navBtn(active === 1)}>
                ← prev · {active > 1 ? SLIDES[active-2].title.replace(/—.*$/,"").trim() : "—"}
              </button>
              <button onClick={() => setActive(Math.min(SLIDES.length, active + 1))}
                disabled={active === SLIDES.length}
                style={{ ...navBtn(active === SLIDES.length), textAlign: "right" }}>
                {active < SLIDES.length ? SLIDES[active].title.replace(/—.*$/,"").trim() : "—"} · next →
              </button>
            </div>
          </Card>

          {/* keyboard hint */}
          <p className="mono" style={{
            marginTop: 14, fontSize: 10.5, letterSpacing: "0.10em", color: "var(--ink-3)",
            textAlign: "center",
          }}>
            ← prev · → next · selection persists across refresh
          </p>
        </div>
      </div>

      {/* keyboard handlers */}
      <KeyboardNav onPrev={() => setActive(a => Math.max(1, a - 1))} onNext={() => setActive(a => Math.min(SLIDES.length, a + 1))} />
    </div>
  );
};

const navBtn = (disabled) => ({
  appearance: "none", border: "none", background: "none",
  cursor: disabled ? "default" : "pointer",
  color: disabled ? "var(--ink-4)" : "var(--ink-2)",
  fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.06em",
  textTransform: "uppercase",
  padding: "8px 0", maxWidth: "48%", overflow: "hidden", textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const KeyboardNav = ({ onPrev, onNext }) => {
  React.useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onPrev, onNext]);
  return null;
};

// -----------------------------------------------------------------------
// MODALITÉS — the reframed modality table
// -----------------------------------------------------------------------
const TabModalities = () => {
  const [active, setActive] = React.useState("optical");
  const m = MODALITIES.find(x => x.id === active) || MODALITIES[0];

  return (
    <div className="wrap" style={{ padding: "72px 56px 100px" }}>
      <SectionHead
        index="iii"
        eyebrow="The reframed modality table — the talk's central instrument"
        title="A modality is a way of seeing. Read each row as a care relation."
        lede={
          <>
            Each modality attends to certain phenomena and structurally cannot
            attend to others. The missing is not a flaw to be fixed; it is the
            boundary of the modality's care. The columns below are <strong>care
            question · made visible · stays invisible · grounded by</strong>.
          </>
        }
      />

      {/* Compact overview row */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0,
        border: "1px solid var(--rule)", marginBottom: 28,
      }}>
        {MODALITIES.slice(0, 5).map((mm, i) => (
          <button key={mm.id} onClick={() => setActive(mm.id)}
            style={modBtn(mm, active === mm.id, i < 4)}>
            <span className="mono" style={{
              fontSize: 10, letterSpacing: "0.10em", color: active === mm.id ? accentVar(mm.accent) : "var(--ink-3)",
            }}>{String(i+1).padStart(2,"0")}</span>
            <span className="serif" style={{ fontSize: 19, lineHeight: 1.1, fontWeight: active === mm.id ? 500 : 400 }}>{mm.name}</span>
          </button>
        ))}
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0,
        border: "1px solid var(--rule)", borderTop: "none", marginTop: -28, marginBottom: 40,
      }}>
        {MODALITIES.slice(5).map((mm, i) => (
          <button key={mm.id} onClick={() => setActive(mm.id)}
            style={modBtn(mm, active === mm.id, i < 4)}>
            <span className="mono" style={{
              fontSize: 10, letterSpacing: "0.10em", color: active === mm.id ? accentVar(mm.accent) : "var(--ink-3)",
            }}>{String(i+6).padStart(2,"0")}</span>
            <span className="serif" style={{ fontSize: 19, lineHeight: 1.1, fontWeight: active === mm.id ? 500 : 400 }}>{mm.name}</span>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <article style={{
        border: "1px solid var(--rule)", background: "var(--paper)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, height: 5,
          background: accentVar(m.accent),
        }} />
        <div style={{ padding: "40px 44px 44px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline" }}>
            <h3 className="serif" style={{
              margin: 0, fontSize: 44, fontWeight: 400, letterSpacing: "-0.015em",
            }}>{m.name}</h3>
            <Pill tone={m.accent}>row · {String(MODALITIES.findIndex(x=>x.id===m.id)+1).padStart(2,"0")} of {MODALITIES.length}</Pill>
          </div>
          <div className="mono" style={{
            marginTop: 12, fontSize: 12, color: accentVar(m.accent), letterSpacing: "0.10em",
            textTransform: "uppercase",
          }}>{m.band}</div>

          {/* Care question — the load-bearing line */}
          <div style={{
            marginTop: 26, padding: "22px 26px",
            background: accentTint(m.accent),
            border: `1px solid color-mix(in oklch, ${accentVar(m.accent)} 30%, transparent)`,
          }}>
            <div className="caps" style={{ color: accentVar(m.accent), marginBottom: 6 }}>Care question</div>
            <p className="serif" style={{
              margin: 0, fontSize: 24, lineHeight: 1.35, fontStyle: "italic",
              color: "var(--ink)", fontWeight: 400,
            }}>{m.care}</p>
          </div>

          {/* The four columns */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28,
            marginTop: 28, paddingTop: 22, borderTop: "1px solid var(--rule)",
          }}>
            <div>
              <div className="caps" style={{ color: "var(--moss)", marginBottom: 12 }}>
                <Sigil color="var(--moss)" />Made visible
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {m.visible.map((v, i) => (
                  <li key={i} style={{
                    fontSize: 14, lineHeight: 1.5, padding: "6px 0",
                    borderBottom: i < m.visible.length - 1 ? "1px solid var(--rule-soft)" : "none",
                    color: "var(--ink)",
                  }}>{v}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="caps" style={{ color: "var(--terra)", marginBottom: 12 }}>
                <Sigil color="var(--terra)" />Stays invisible
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {m.invisible.map((v, i) => (
                  <li key={i} style={{
                    fontSize: 14, lineHeight: 1.5, padding: "6px 0",
                    borderBottom: i < m.invisible.length - 1 ? "1px solid var(--rule-soft)" : "none",
                    color: "var(--ink-2)", fontStyle: "italic",
                  }}>{v}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="caps" style={{ color: "var(--lapis)", marginBottom: 12 }}>
                <Sigil color="var(--lapis)" />Grounded by
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {m.ground.map((v, i) => (
                  <li key={i} style={{
                    fontSize: 14, lineHeight: 1.5, padding: "6px 0",
                    borderBottom: i < m.ground.length - 1 ? "1px solid var(--rule-soft)" : "none",
                    color: "var(--ink)",
                  }}>{v}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instruments line */}
          <div style={{
            marginTop: 28, paddingTop: 18, borderTop: "1px solid var(--rule)",
            display: "grid", gridTemplateColumns: "140px 1fr", gap: 18, alignItems: "baseline",
          }}>
            <span className="caps" style={{ color: "var(--ink-3)" }}>Instruments</span>
            <span className="mono" style={{ fontSize: 12.5, color: "var(--ink-2)", letterSpacing: "0.03em" }}>
              {m.instruments}
            </span>
          </div>
        </div>
      </article>

      {/* Takeaway band */}
      <Card style={{ marginTop: 36, background: "var(--ink)", color: "var(--paper)", border: "none" }} pad={40}>
        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 36 }}>
          <Kicker color="var(--ochre-2)">Read this whole table as</Kicker>
          <p className="serif" style={{
            margin: 0, fontSize: 24, lineHeight: 1.35, fontWeight: 300,
            color: "var(--paper)",
          }}>
            Every row is honest about what it cannot see. That honesty — not the
            list of instruments — is what makes the table useful to communities.
            <span style={{ color: "var(--ochre-2)" }}> The work of integration is staffing the chain between rows.</span>
          </p>
        </div>
      </Card>
    </div>
  );
};

const modBtn = (mm, on, hasRight) => ({
  appearance: "none", border: "none", background: on ? "var(--paper-2)" : "var(--paper)",
  borderRight: hasRight ? "1px solid var(--rule)" : "none",
  padding: "18px 16px", textAlign: "left", cursor: "pointer",
  display: "flex", flexDirection: "column", gap: 6,
  borderTop: on ? `3px solid ${accentVar(mm.accent)}` : "3px solid transparent",
  color: "var(--ink)",
});

Object.assign(window, {
  TabOuverture, TabSlides, TabModalities,
  PART_LABELS, SlideVisual,
});
