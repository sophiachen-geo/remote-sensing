// =======================================================================
// Tabs A. Ouverture, Slides, Modalités.
// =======================================================================

// -----------------------------------------------------------------------
// OUVERTURE
// -----------------------------------------------------------------------
const TabOuverture = () => (
  <div style={{ "--accent": "var(--st-active-accent-2)" }}>
    {/* Masthead */}
    <section style={{
      borderBottom: "1px solid var(--rule)",
      background: "var(--paper)",
      padding: "72px 0 56px",
    }}>
      <div className="wrap">
        <StrataHead section="active" />
        <h1 className="serif" style={{
          margin: "8px 0 0", fontSize: 88, lineHeight: 1.0, fontWeight: 300,
          letterSpacing: "-0.030em", whiteSpace: "nowrap",
        }}>
          Sensing for the <em style={{ fontStyle: "italic", color: "var(--terra-2)", fontWeight: 300 }}>Commons</em>
        </h1>

        {/* Website intro */}
        <div style={{
          marginTop: 48, paddingTop: 36, borderTop: "1px solid var(--rule-soft)",
          maxWidth: 900,
        }}>
          <p style={{ margin: "0 0 20px", fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)" }}>
            This guide accompanies the lecture <em style={{ color: "var(--terra)" }}>Sensing for the Commons</em>. It may be read before, during, or after the presentation as an introduction to a central question: how can remote sensing contribute to care, resilience, and community in practice, especially when observation from above becomes part of decisions made on the ground?
          </p>
          <p style={{ margin: "0 0 20px", fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)" }}>
            Remote sensing is often associated with distance: satellites, aircraft, sensors, models, platforms, and observation at regional to planetary scales. It allows us to study the Earth by collecting information from above and transforming it into maps, measurements, classifications, indicators, forecasts, and models. These forms of abstraction are powerful because they make visible patterns that are difficult to perceive from the ground alone: changes that unfold across large areas, slow transformations that accumulate over time, hazards emerging in places that are difficult to access, or inequalities that remain spatially dispersed and unevenly recorded.
          </p>
          <p style={{ margin: "0 0 20px", fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)" }}>
            Yet remote sensing is not valuable simply because it produces data. Its value lies in what those data make possible. A flood extent, a burn scar, a heat anomaly, a vegetation index, an exposure layer, or a land-cover classification may become part of decisions about emergency response, infrastructure planning, climate adaptation, conservation, public health, insurance, funding, or community preparedness. In each case, observation becomes more than observation. It enters institutions, workflows, budgets, policies, and communities. It becomes part of decisions that affect people and places.
          </p>
          <p style={{ margin: "0 0 20px", fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)" }}>
            As societies confront accelerating environmental change, expanding disaster risk, growing demands for timely information, and unprecedented volumes of Earth observation data, the challenge is no longer only how to observe the world with greater precision. The challenge is how to translate observation into knowledge that is useful, trustworthy, situated, and accountable.
          </p>
          <p style={{ margin: "0 0 20px", fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)" }}>
            The lecture explores this challenge through the practical terrain where remote sensing becomes consequential: the passage from image to interpretation, from model to decision, and from distant observation to local effect. Drawing on several years of applied research and professional practice across governmental, humanitarian, and community-facing contexts, it follows remote sensing as it moves through real-world situations: identifying risk before it becomes disaster, working with incomplete or noisy sensor data, combining Earth observation with social vulnerability, infrastructure, and local knowledge, and supporting decision-making in rural, remote, coastal, island, border, and urban communities. Rather than treating remote sensing as a finished product, the lecture examines it as a chain of translation: data must be interpreted, validated, contextualized, communicated, and sometimes challenged before they can become useful public knowledge. This is where remote sensing has its greatest civic value, but also where its limits become most visible: uncertainty, misclassification, uneven data coverage, institutional bias, extractive observation, and the danger of representing communities without their consent, involvement, or authority.
          </p>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: "var(--ink-2)" }}>
            The aim is to ask what forms of practice, interpretation, design, and accountability are needed for remote sensing to contribute meaningfully to collective life. To speak of remote sensing for the commons is therefore to ask how distant observation becomes responsible practice: how data from above can be interpreted with care, grounded in context, combined with other forms of knowledge, and used to support communities before, during, and after moments of change or crisis.
          </p>
        </div>
      </div>
    </section>

    {/* Interactive painting */}
    <InteractivePainting />

    {/* Two Gestures */}
    <section className="wrap" style={{ padding: "96px 56px 0" }}>
      <SectionHead
        index="i"
        eyebrow="Opening figure"
        title="Two Gestures"
        lede="The lecture opens with a detail from Raphael's School of Athens, painted in the Stanza della Segnatura in the Vatican Palace. Originally associated with Pope Julius II's library and private study, the room gathers several domains of knowledge: philosophy, theology, poetry, and justice. The School of Athens occupies the wall of philosophy. It stages the thinkers of antiquity within an ideal Renaissance architecture, as though knowledge itself had been given a built form: ordered, luminous, perspectival, and open toward the sky."
      />

      <Prose max={760}>
        <P>
          At the centre of the fresco, Plato and Aristotle walk side by side. Plato holds the Timaeus and raises one finger upward. Aristotle holds the Nicomachean Ethics and extends his hand outward, almost parallel to the ground. The Timaeus is a dialogue about cosmology, mathematical order, and the structure of the universe; it belongs to a mode of thought that seeks pattern, form, and intelligibility at the highest scale. The Nicomachean Ethics, by contrast, concerns practical judgment, action, virtue, and the conditions of a good life; it belongs to a mode of thought grounded in conduct, consequence, and the question of how to act well.
        </P>
        <P>
          For remote sensing, this pair is more than an art-historical metaphor. It gives form to the discipline's central tension: the need to produce knowledge through distance, abstraction, and scale, while keeping that knowledge answerable to judgment, responsibility, and the lived worlds in which its consequences unfold.
        </P>
        <P>
          Plato's upward gesture evokes the power of remote sensing as abstraction: the satellite, the orbital platform, the planetary archive, the foundation model, the synoptic view, and the ambition to understand Earth as an interconnected system. This is the promise of seeing at scale: to detect patterns beyond ordinary perception, to anticipate change, to model risk, and to make visible what cannot be seen from any single place on the ground.
        </P>
        <P>
          Aristotle's horizontal gesture recalls the demands of situated judgment: the field site, the community observer, the local planner, the validator, the emergency manager, the elder reading sea ice conditions, and the resident whose home appears as a small footprint inside a risk layer. This is the world in which knowledge is tested by consequence. A map may be elegant, a model may be powerful, and an index may be statistically robust, but its public meaning depends on how it meets the lives, landscapes, and decisions it claims to inform.
        </P>
        <P>
          Remote sensing, for me, exists between these two gestures. It needs the upward movement of abstraction and the horizontal return to the ground. Without abstraction, we lose the capacity to see across distance, scale, time, and system. Without return, we risk producing knowledge that is technically impressive but socially unmoored. The question is therefore not whether remote sensing should look from above or begin from below, but how these two movements can be held in relation: how distant observation can be interpreted through context, corrected by experience, combined with other forms of knowledge, and made accountable to the worlds it represents.
        </P>
      </Prose>

      <Pull color="var(--ochre)">
        The guide that follows approaches remote sensing not merely as a technical discipline, but as a civic and epistemic practice: a way of seeing at scale whose value depends on how it is interpreted, grounded, and used in the worlds it seeks to understand.
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
