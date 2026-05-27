// =======================================================================
// Tabs A. Ouverture, Slides, Modalités.
// =======================================================================

// -----------------------------------------------------------------------
// OUVERTURE
// -----------------------------------------------------------------------
const TabOuverture = () => (
  <div>
    {/* Masthead */}
    <section style={{
      borderBottom: "1px solid var(--rule)",
      background: "var(--paper)",
      padding: "72px 0 56px",
    }}>
      <div className="wrap">
        <div>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase",
            color: "var(--terra)", marginBottom: 22,
          }}>An interactive companion to a lecture</div>

          <h1 className="serif" style={{
            margin: 0, fontSize: 104, lineHeight: 0.9, fontWeight: 300,
            letterSpacing: "-0.030em",
          }}>
            Sensing for the<br/>
            <em style={{ fontStyle: "italic", color: "var(--terra-2)", fontWeight: 300 }}>commons</em>
          </h1>

          <p className="serif" style={{
            margin: "26px 0 0", maxWidth: 720,
            fontSize: 22, lineHeight: 1.35, fontWeight: 300,
            color: "var(--ink-2)",
          }}>
            Remote sensing between <em style={{ color: "var(--lapis)" }}>sky-eye abstraction</em>,
            <em style={{ color: "var(--moss)" }}> ground-up knowledge</em>, and
            <em style={{ color: "var(--terra)" }}> care</em>. A lecture prepared for the Canadian Remote
            Sensing Society, and a written companion you can read alongside, before, or after the talk.
          </p>
        </div>

        {/* Website intro */}
        <div style={{
          marginTop: 48, paddingTop: 36, borderTop: "1px solid var(--rule-soft)",
          maxWidth: 900,
        }}>
          <p style={{ margin: "0 0 20px", fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)" }}>
            Between the sky and the ground, remote sensing becomes most consequential when it enters the messy middle of practice, moving across cultures, disciplines, institutions and real-world contexts. This talk is, in many ways, a survey of my last few years of applied research and professional practice, shaped by a recurring effort to close the gap between observation and action, with particular attention to complex geographies: coastal and island environments, rural and remote communities, rapidly changing landscapes, border regions, and urban spaces where risk is often unevenly distributed and difficult to see.
          </p>
          <p style={{ margin: "0 0 28px", fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)" }}>
            What does remote sensing look like when it is turned toward care, resilience, and community? Drawing on professional practice across governmental and humanitarian institutions, this talk traces how risk is mapped before it becomes disaster, how messy sensor data becomes knowledge we can trust, and what we owe the people we observe from a distance. <em style={{ color: "var(--terra)", fontStyle: "italic" }}>Sensing for the commons — between the practical and the unresolved.</em>
          </p>
          <p className="serif" style={{
            margin: 0, paddingTop: 24, borderTop: "1px solid var(--rule-soft)",
            fontSize: 21, lineHeight: 1.5, color: "var(--ink)", fontWeight: 300, maxWidth: 880,
          }}>
            {TALK.argument_in_one_paragraph}
          </p>
        </div>
      </div>
    </section>

    {/* Interactive painting */}
    <InteractivePainting />

    {/* Plato and Aristotle dialectic */}
    <section className="wrap" style={{ padding: "96px 56px 0" }}>
      <SectionHead
        index="i"
        eyebrow="The two gestures, opening figure"
        title="A satellite is the instrument that points upward in order to look down."
        lede="Remote sensing lives inside this tension. It is a technology that reaches upward to look down, abstracting the Earth into pixels, bands, indices, classes, footprints, probabilities, and models. Its value for risk, resilience, and community depends on whether that abstraction can return to the ground with responsibility."
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
          }}>Plato <em style={{ color: "var(--lapis-2)" }}>, Timaeus</em></h3>
          <p style={{
            margin: "16px 0 0", fontSize: 16, lineHeight: 1.55,
            color: "var(--ink-2)", maxWidth: 460,
          }}>
            Plato raises his index finger toward the heavens. The gesture orients itself toward the world of forms, toward what is not yet here, toward the ideal. The architectural theorist Sébastien Marot, with whom I studied at EPFL, reads this gesture through Ernst Bloch as the principle of <Fr>espérance</Fr>, the principle of hope. Anticipatory consciousness. The impulse toward a better world that does not yet exist.
          </p>
          <div style={{ marginTop: 26 }}>
            <div className="caps" style={{ color: "var(--lapis)", marginBottom: 8 }}>In our discipline</div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--ink-2)" }}>
              The satellite. The foundation model. The planetary archive. The promise that more sensing means better decisions. The dream of total knowledge, of pattern, of abstraction at the scale of the planet itself.
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
          }}>Aristotle <em style={{ color: "var(--terra-2)" }}>, Ethics</em></h3>
          <p style={{
            margin: "16px 0 0", fontSize: 16, lineHeight: 1.55,
            color: "var(--ink-2)", maxWidth: 460,
          }}>
            Aristotle extends his palm horizontally, parallel to the ground. The gesture orients itself toward what is, toward the ground we share, toward responsibility for the present. Marot reads this gesture through Hans Jonas as the principle of <Fr>responsabilité</Fr>, the heuristic of fear. The duty to those who are here and to those who come after.
          </p>
          <div style={{ marginTop: 26 }}>
            <div className="caps" style={{ color: "var(--terra)", marginBottom: 8 }}>In our discipline</div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--ink-2)" }}>
              The community-led monitor. OCAP. The validator in the village. The Inuit elder reading sea ice. The insistence that the pixel becomes a decision about a life, and that the life has a name.
            </p>
          </div>
        </div>
      </div>

      <Pull color="var(--ochre)">
        {TALK.spineSentence}
      </Pull>
    </section>

  </div>
);

// -----------------------------------------------------------------------
// SLIDES. The 26-slide navigator with running clock.
// -----------------------------------------------------------------------
const PART_LABELS = {
  "1A": { label: "1A, Opening, Plato, Aristotle, me",  color: "var(--lapis)" },
  "1B": { label: "1B, Red Cross and Missing Maps",     color: "var(--terra)" },
  "1C": { label: "1C, Sector overview",                color: "var(--ochre)" },
  "T1": { label: "T1, Applications",                    color: "var(--terra)" },
  "T2": { label: "T2, Integration and epistemology",   color: "var(--moss)" },
  "T3": { label: "T3, Ethics and politics",            color: "var(--plum)" },
  "P3": { label: "Part 3, Future and close",           color: "var(--lapis)" },
};

const SlideVisual = ({ kind }) => {
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
          {kind === "painting-bookend" ? "BOOKEND" : "PLATO and ARISTOTLE"}
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

  const grouped = React.useMemo(() => {
    const order = ["1A", "1B", "1C", "T1", "T2", "T3", "P3"];
    return order.map(p => ({ p, slides: SLIDES.filter(s => s.part === p) }));
  }, []);

  return (
    <div className="wrap" style={{ padding: "72px 56px 100px" }}>
      <SectionHead
        index="ii"
        eyebrow="The talk, twenty-six slides with running time"
        title="A live companion. Follow the deck as it unfolds."
        lede="Use this section during the talk itself, or as a rehearsal aid. Click any slide to read its prose notes. The left and right arrow keys walk through the deck. The progress bar at the top shows position within the sixty-minute envelope, including the parts allocated to Q&A."
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
            slide {String(active).padStart(2,"0")} of {SLIDES.length}, running {slide.t} of 60:00
          </span>
        </div>
        <div style={{ height: 4, background: "var(--paper-3)", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, width: `${progress}%`, background: "var(--terra)", transition: "width 200ms" }} />
        </div>
      </div>

      {/* Rail and reader */}
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 36, alignItems: "start" }}>
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
                    }}>{s.title.replace(/,.*$/,"").trim()}</span>
                    <span className="mono" style={{
                      fontSize: 9.5, color: "var(--ink-3)", textAlign: "right", letterSpacing: "0.06em",
                    }}>{s.t}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>

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

            <div style={{
              padding: 28, borderBottom: "1px solid var(--rule)",
              background: "var(--paper-2)",
            }}>
              <div style={{ maxWidth: 700, margin: "0 auto" }}>
                <SlideVisual kind={slide.visual} />
              </div>
            </div>

            <div style={{ padding: "26px 32px" }}>
              <div className="caps" style={{ color: "var(--terra)", marginBottom: 12 }}>Speaker notes</div>
              <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {slide.notes.map((n, i) => (
                  <li key={i} style={{
                    display: "grid", gridTemplateColumns: "26px 1fr", gap: 12,
                    padding: "10px 0", borderBottom: i < slide.notes.length - 1 ? "1px solid var(--rule-soft)" : "none",
                    alignItems: "baseline",
                  }}>
                    <span className="mono" style={{
                      fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.10em",
                    }}>{String(i+1).padStart(2,"0")}</span>
                    <span style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--ink)" }}>{n}</span>
                  </li>
                ))}
              </ol>
            </div>

            {slide.synthesis && (
              <div style={{
                padding: "30px 32px 32px",
                borderTop: "1px solid var(--rule)",
                background: "var(--paper)",
              }}>
                <div className="caps" style={{ color: "var(--ochre)", marginBottom: 16 }}>
                  Synthesis, the slide read in full
                </div>
                <div style={{ maxWidth: 780 }}>
                  {slide.synthesis.split("\n\n").map((para, i) => (
                    <p key={i} className="serif" style={{
                      margin: i === 0 ? "0 0 18px" : "0 0 18px",
                      fontSize: 16.5, lineHeight: 1.65,
                      color: "var(--ink)", fontWeight: 400, textWrap: "pretty",
                    }}>{para}</p>
                  ))}
                </div>

                {(slide.sources && slide.sources.length > 0) && (
                  <div style={{
                    marginTop: 24, paddingTop: 20,
                    borderTop: "1px solid var(--rule-soft)",
                  }}>
                    <div className="caps" style={{ color: "var(--ink-3)", marginBottom: 10 }}>
                      Sources and anchors
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {slide.sources.map((s, i) => (
                        <span key={i} style={{
                          display: "inline-flex", alignItems: "center",
                          padding: "5px 10px",
                          background: "var(--paper-2)",
                          border: "1px solid var(--rule)",
                          fontFamily: "var(--mono)", fontSize: 10.5,
                          letterSpacing: "0.04em", color: "var(--ink-2)",
                        }}>{s}</span>
                      ))}
                    </div>
                  </div>
                )}

                {(slide.connects && slide.connects.length > 0) && (
                  <div style={{
                    marginTop: 20, paddingTop: 16,
                    borderTop: "1px solid var(--rule-soft)",
                  }}>
                    <div className="caps" style={{ color: "var(--lapis)", marginBottom: 10 }}>
                      Connects to
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                      {slide.connects.map((c, i) => (
                        <li key={i} style={{
                          display: "grid", gridTemplateColumns: "12px 1fr", gap: 10,
                          padding: "4px 0",
                          fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5,
                        }}>
                          <span style={{
                            width: 6, height: 6, background: "var(--lapis)",
                            marginTop: 8, opacity: 0.6,
                          }} />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div style={{
              padding: "14px 32px", borderTop: "1px solid var(--rule)",
              background: "var(--paper-2)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <button onClick={() => setActive(Math.max(1, active - 1))}
                disabled={active === 1}
                style={navBtn(active === 1)}>
                ← previous, {active > 1 ? SLIDES[active-2].title.replace(/,.*$/,"").trim() : "first slide"}
              </button>
              <button onClick={() => setActive(Math.min(SLIDES.length, active + 1))}
                disabled={active === SLIDES.length}
                style={{ ...navBtn(active === SLIDES.length), textAlign: "right" }}>
                {active < SLIDES.length ? SLIDES[active].title.replace(/,.*$/,"").trim() : "last slide"}, next →
              </button>
            </div>
          </Card>

          <p className="mono" style={{
            marginTop: 14, fontSize: 10.5, letterSpacing: "0.10em", color: "var(--ink-3)",
            textAlign: "center",
          }}>
            ← previous, → next. Selection persists across refresh.
          </p>
        </div>
      </div>

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
// MODALITIES. The reframed modality table.
// -----------------------------------------------------------------------
const TabModalities = () => {
  const [active, setActive] = React.useState("optical");
  const m = MODALITIES.find(x => x.id === active) || MODALITIES[0];

  return (
    <div className="wrap" style={{ padding: "72px 56px 100px" }}>
      <SectionHead
        index="iii"
        eyebrow="The reframed modality table, the talk's central instrument"
        title="A modality is a way of seeing. Read each row as a care relation."
        lede={
          <>
            Each modality attends to certain phenomena and structurally cannot attend to others. The missing is not a flaw to be fixed. It is the boundary of the modality's care. The columns below are, in order, the <strong>care question</strong>, what the modality <strong>makes visible</strong>, what <strong>stays invisible</strong>, and what <strong>grounds</strong> the modality in the world of bodies and communities.
          </>
        }
      />

      {/* Overview rows */}
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
            <Pill tone={m.accent}>row {String(MODALITIES.findIndex(x=>x.id===m.id)+1).padStart(2,"0")} of {MODALITIES.length}</Pill>
          </div>
          <div className="mono" style={{
            marginTop: 12, fontSize: 12, color: accentVar(m.accent), letterSpacing: "0.10em",
            textTransform: "uppercase",
          }}>{m.band}</div>

          <div style={{
            marginTop: 26, padding: "22px 26px",
            background: accentTint(m.accent),
            border: `1px solid color-mix(in oklch, ${accentVar(m.accent)} 30%, transparent)`,
          }}>
            <div className="caps" style={{ color: accentVar(m.accent), marginBottom: 6 }}>Care question</div>
            <p className="serif" style={{
              margin: 0, fontSize: 24, lineHeight: 1.4, fontStyle: "italic",
              color: "var(--ink)", fontWeight: 400,
            }}>{m.care}</p>
          </div>

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
                    fontSize: 14, lineHeight: 1.55, padding: "8px 0",
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
                    fontSize: 14, lineHeight: 1.55, padding: "8px 0",
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
                    fontSize: 14, lineHeight: 1.55, padding: "8px 0",
                    borderBottom: i < m.ground.length - 1 ? "1px solid var(--rule-soft)" : "none",
                    color: "var(--ink)",
                  }}>{v}</li>
                ))}
              </ul>
            </div>
          </div>

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

      <Card style={{ marginTop: 36, background: "var(--ink)", color: "var(--paper)", border: "none" }} pad={40}>
        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 36 }}>
          <Kicker color="var(--ochre-2)">Read the whole table as</Kicker>
          <p className="serif" style={{
            margin: 0, fontSize: 24, lineHeight: 1.4, fontWeight: 300,
            color: "var(--paper)",
          }}>
            Every row is honest about what it cannot see. That honesty, not the list of instruments, is what makes the table useful to communities.
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
