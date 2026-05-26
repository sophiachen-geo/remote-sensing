// =======================================================================
// Tabs B — Plongées · Avenir · Annexes
// =======================================================================

// -----------------------------------------------------------------------
// PLONGÉES — three deep dives as sub-tabs
// -----------------------------------------------------------------------
const DiveNav = ({ active, set }) => (
  <div style={{
    display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0,
    border: "1px solid var(--rule)", marginBottom: 40,
  }}>
    {Object.values(DIVES).map((d, i) => {
      const on = active === d.id;
      return (
        <button key={d.id} onClick={() => set(d.id)}
          style={{
            appearance: "none", border: "none",
            background: on ? "var(--paper-2)" : "var(--paper)",
            padding: "22px 24px 24px", textAlign: "left", cursor: "pointer",
            borderRight: i < 2 ? "1px solid var(--rule)" : "none",
            borderTop: on ? "3px solid var(--terra)" : "3px solid transparent",
            color: "var(--ink)",
          }}>
          <div className="mono" style={{
            fontSize: 11, color: on ? "var(--terra)" : "var(--ink-3)",
            letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8,
          }}>Plongée {d.roman}</div>
          <div className="serif" style={{
            fontSize: 24, lineHeight: 1.1, fontWeight: on ? 500 : 400,
            letterSpacing: "-0.01em",
          }}>{d.title}</div>
          <div className="mono" style={{
            marginTop: 8, fontSize: 11, letterSpacing: "0.06em",
            color: "var(--ink-3)", textTransform: "uppercase",
          }}>{d.sub}</div>
        </button>
      );
    })}
  </div>
);

// --- Dive 1: Applications ---
const DiveApplications = () => (
  <div>
    <Lead>
      Risk is not a single object. It is a relationship among <strong>hazard,
      exposure, vulnerability and capacity</strong> (UNDRR). Remote sensing sees
      hazard and exposure well. Vulnerability, capacity and resilience live in
      the boundary layer — and require ground-up, embodied, community and
      institutional perspectives alongside the satellite view.
    </Lead>

    {/* Risk quartet mini-visual */}
    <Card pad={28} style={{ marginTop: 16 }}>
      <Kicker color="var(--lapis)">Risk · UNDRR · four parts, two halves</Kicker>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
        border: "1px solid var(--rule)", marginTop: 14,
      }}>
        {RISK_QUARTET.map((r, i) => (
          <div key={r.id} style={{
            padding: "20px 18px 22px",
            borderRight: i < 3 ? "1px solid var(--rule)" : "none",
            background: r.sky ? "var(--lapis-tint)" : "var(--terra-tint)",
            borderTop: `4px solid ${r.color}`,
          }}>
            <div className="mono" style={{
              fontSize: 10, letterSpacing: "0.14em", color: r.color, textTransform: "uppercase",
            }}>{r.sky ? "Sky-eye reads" : "Boundary-layer reads"}</div>
            <h4 className="serif" style={{
              margin: "8px 0 0", fontSize: 28, fontWeight: 400, letterSpacing: "-0.012em",
            }}>{r.name}</h4>
            <p style={{ margin: "6px 0 0", fontSize: 12.5, color: "var(--ink-2)", fontStyle: "italic" }}>{r.tag}</p>
          </div>
        ))}
      </div>
      <p className="mono" style={{
        margin: "14px 0 0", fontSize: 11, color: "var(--ink-3)",
        textAlign: "center", letterSpacing: "0.06em",
      }}>
        UNDRR · "a serious disruption caused by hazardous events interacting with conditions of exposure, vulnerability and capacity"
      </p>
    </Card>

    {/* Five perspectives wheel */}
    <Card pad={36} style={{ marginTop: 24 }}>
      <Kicker color="var(--terra)">Five perspectives on risk · click any vertex</Kicker>
      <h3 className="serif" style={{
        margin: "0 0 22px", fontSize: 32, fontWeight: 400, letterSpacing: "-0.012em", maxWidth: 820,
      }}>
        Resilience requires several perspectives at once.
      </h3>
      <FivePerspectivesWheel />
    </Card>

    {/* Section claim */}
    <Pull color="var(--terra)" by="Section claim · Dive I">
      {SECTION_CLAIMS.applications}
    </Pull>

    {/* RCM / Tuktoyaktuk */}
    <Card pad={36} style={{ marginTop: 12 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 36 }}>
        <div>
          <Kicker color="var(--terra)">RCM · Tuktoyaktuk · the Canadian case</Kicker>
          <h3 className="serif" style={{
            margin: 0, fontSize: 30, lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.012em",
          }}>The instrument is here. The community-led partner is here. The funding is in place. One paper remains unwritten.</h3>
          <P style={{ marginTop: 18 }}>
            The RADARSAT Constellation Mission is one of the strongest operational
            instruments in any national portfolio. The partner — community-led
            monitoring through Pokiak's time-lapse cameras and SmartICE — already exists.
            A gap a Canadian remote-sensing audience can fill. Named not as criticism, but as opportunity.
          </P>
        </div>
        <div style={{ display: "grid", gap: 24 }}>
          <div>
            <Kicker color="var(--ink-3)">RCM · operational record</Kicker>
            <FactList items={RCM_FACTS} color="var(--terra)" />
          </div>
          <div>
            <Kicker color="var(--ink-3)">Tuktoyaktuk · the gap</Kicker>
            <FactList items={TUK_FACTS} color="var(--lapis)" />
          </div>
        </div>
      </div>
    </Card>

    {/* Atoll diagram */}
    <Card pad={36} style={{ marginTop: 24 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 36, alignItems: "start" }}>
        <div>
          <Kicker color="var(--lapis)">The atoll · the smaller-than-pixel problem</Kicker>
          <h3 className="serif" style={{
            margin: 0, fontSize: 30, lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.012em",
          }}>The instrument's noise floor exceeds the thing being measured.</h3>
          <P style={{ marginTop: 16 }}>
            Tuvalu makes its legal claim for statehood preservation and for the
            continuity of its UNCLOS-derived exclusive economic zone on data whose
            vertical noise floor is larger than the country's maximum height.
            Islands fail every assumption that lets remote sensing work — simultaneously.
          </P>
          <FactList items={ISLANDS_FACTS} color="var(--lapis)" />
        </div>
        <div style={{ background: "var(--paper-2)", border: "1px solid var(--rule)", padding: 20 }}>
          <AtollVsPixelDiagram height={360} />
        </div>
      </div>
    </Card>

    {/* Taiwan typhoon */}
    <Card pad={36} style={{
      marginTop: 24, background: "var(--ochre-tint)",
      border: "1px solid color-mix(in oklch, var(--ochre) 30%, transparent)",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 36 }}>
        <Kicker color="var(--ochre)">Taiwan · the last mile is epistemological</Kicker>
        <div>
          <p className="serif" style={{
            margin: 0, fontSize: 24, lineHeight: 1.35, fontStyle: "italic", color: "var(--ink)",
          }}>
            Probability of damage and willingness to evacuate are not linearly related.
          </p>
          <P style={{ marginTop: 14 }}>
            Trust, prior false alarms, household composition, place attachment,
            language access and the social capital of the neighbourhood all
            intervene. Sheila Jasanoff calls these different <em>civic
            epistemologies</em>. The work of remote sensing is not finished when
            the map is published. <strong>It begins there.</strong>
          </P>
        </div>
      </div>
    </Card>
  </div>
);

// --- Dive 2: Integration & epistemology ---
const DiveIntegration = () => {
  const [flipped, setFlipped] = React.useState({});
  const toggle = (i) => setFlipped(f => ({ ...f, [i]: !f[i] }));

  return (
    <div>
      <Lead>
        What happens between signal, class, model, and decision? Three layers of
        heuristic — <em>physical</em>, <em>interpretive</em>, <em>ethical</em>.
        The discipline of care, resilience and community is the discipline of
        taking that stack seriously at every level.
      </Lead>

      {/* Heuristic stack — the central diagram */}
      <Card pad={36} style={{ marginTop: 16 }}>
        <Kicker color="var(--terra)">The three-layer heuristic stack · click each layer</Kicker>
        <h3 className="serif" style={{
          margin: "0 0 18px", fontSize: 32, fontWeight: 400, letterSpacing: "-0.012em", maxWidth: 800,
        }}>
          A signal becomes a class. A class becomes a decision. A decision becomes a life.
        </h3>
        <HeuristicStackDiagram />
      </Card>

      {/* Section claim */}
      <Pull color="var(--terra)" by="Section claim · Dive II">
        {SECTION_CLAIMS.integration}
      </Pull>

      {/* Lausanne TROPOMI / Q-TRAK */}
      <Card pad={40} style={{ marginTop: 12, background: "var(--paper)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "start" }}>
          <div>
            <Kicker color="var(--terra)">TROPOMI ↔ Q-TRAK · the scale collision</Kicker>
            <h3 className="serif" style={{
              margin: 0, fontSize: 34, lineHeight: 1.05, fontWeight: 400,
              letterSpacing: "-0.014em",
            }}>The entire walk on the right fits inside one pixel on the left.</h3>
            <P style={{ marginTop: 18 }}>
              May 2019 · Q-TRAK at 1.4 m body altitude through Lausanne, four
              afternoons. The M1 metro at peak: <strong>1,693 ppm</strong>. The
              Botanical Garden bushes under sun: <strong>368 ppm</strong> — below
              atmospheric background, because photosynthesis was outpacing
              respiration.
            </P>
            <P>
              <strong>Three structural reasons</strong> the satellite cannot do what the walk did:
            </P>
            <ul style={{ margin: "0 0 18px", padding: "0 0 0 20px", color: "var(--ink-2)" }}>
              <li style={{ marginBottom: 8 }}><strong>Vertical mismatch.</strong> Column retrievals are weighted toward the lower troposphere — but cannot resolve the bottom ten metres where bodies breathe.</li>
              <li style={{ marginBottom: 8 }}><strong>Indoor invisibility.</strong> Nothing through a roof or a tunnel. The worst exposures were in spaces remote sensing does not exist for.</li>
              <li style={{ marginBottom: 8 }}><strong>Temporal mismatch.</strong> The spike from a passing car is seconds long; satellite revisit is days.</li>
            </ul>
            <Pull color="var(--terra)">
              For CO₂ as a health question rather than a climate question, satellites are measuring the wrong thing.
            </Pull>
          </div>

          <div>
            <div style={{ marginBottom: 18 }}>
              <Kicker color="var(--terra)">Reading · ppm CO₂</Kicker>
              <CO2Gauge height={220} />
            </div>
            <div>
              <Kicker color="var(--lapis)">Pixel ↔ Walk</Kicker>
              <PixelWalk height={340} />
            </div>
          </div>
        </div>
      </Card>

      {/* SOCODEVI sidebar */}
      <Card pad={36} style={{ marginTop: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 36 }}>
          <Kicker color="var(--moss)">SOCODEVI · West Africa · the integration is a person</Kicker>
          <div>
            <p className="serif" style={{
              margin: 0, fontSize: 22, lineHeight: 1.35, fontWeight: 300,
              fontStyle: "italic", color: "var(--ink)",
            }}>
              A Kalman filter can combine estimates once the variable has already been defined. But in resilience work, the variable itself is contested.
            </p>
            <P style={{ marginTop: 14 }}>
              "Did it rain?" may mean millimetres in a gauge, a satellite
              precipitation estimate, or enough usable moisture to plant on this
              parcel today. The continental-scale validation is not wrong at its
              scale. The answer required all three — and required someone in the
              village to translate between them.
            </P>
          </div>
        </div>
      </Card>

      {/* Defaults flip cards */}
      <Card pad={40} style={{ marginTop: 24 }}>
        <Kicker color="var(--terra)">The defaults indictment · a full theory of remote-sensing defaults · click to flip</Kicker>
        <h3 className="serif" style={{
          margin: "0 0 8px", fontSize: 30, fontWeight: 400, letterSpacing: "-0.01em", maxWidth: 800,
        }}>The data is fine. The defaults are the problem.</h3>
        <p style={{ margin: "0 0 24px", color: "var(--ink-2)", fontSize: 14.5, maxWidth: 700 }}>
          Every preprocessing default contains a theory of what matters. From a
          care perspective, the default is often a question asked from the wrong
          direction.
        </p>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12,
        }}>
          {DEFAULTS.map((d, i) => {
            const isFlipped = !!flipped[i];
            return (
              <button key={i} onClick={() => toggle(i)}
                style={{
                  appearance: "none", border: "none", background: "none",
                  padding: 0, cursor: "pointer", textAlign: "left", color: "var(--ink)",
                  perspective: 800, fontFamily: "var(--sans)",
                }}>
                <div style={{
                  position: "relative", width: "100%", aspectRatio: "0.78",
                  transition: "transform 500ms cubic-bezier(.2,.7,.3,1)",
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "none",
                }}>
                  {/* Front */}
                  <div style={cardFace({ bg: "var(--paper-2)", border: "1px solid var(--rule)" })}>
                    <div className="mono" style={{
                      fontSize: 10, letterSpacing: "0.18em",
                      color: "var(--ink-3)", textTransform: "uppercase",
                    }}>default {String(i+1).padStart(2,"0")}</div>
                    <div className="serif" style={{
                      fontSize: 26, lineHeight: 1.1, fontWeight: 500, marginTop: 8,
                      color: "var(--ink)",
                    }}>{d.default}</div>
                    <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 8 }}>
                      <Sigil color="var(--terra)" size={7} />
                      <span className="mono" style={{ fontSize: 10, color: "var(--terra)", letterSpacing: "0.10em" }}>
                        FLIP →
                      </span>
                    </div>
                  </div>
                  {/* Back */}
                  <div style={{
                    ...cardFace({ bg: "var(--terra)", border: "none", color: "var(--paper)" }),
                    transform: "rotateY(180deg)",
                  }}>
                    <div className="mono" style={{
                      fontSize: 10, letterSpacing: "0.18em",
                      color: "color-mix(in oklch, var(--paper) 70%, transparent)",
                      textTransform: "uppercase",
                    }}>care reading</div>
                    <div className="serif" style={{
                      fontSize: 22, lineHeight: 1.1, fontWeight: 500, marginTop: 8,
                      color: "var(--paper)",
                    }}>{d.answer}</div>
                    <div style={{ marginTop: 12, fontSize: 12, lineHeight: 1.45, color: "color-mix(in oklch, var(--paper) 90%, transparent)" }}>
                      {d.body}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Card>

      {/* Fit-for-purpose */}
      <Card pad={36} style={{ marginTop: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>
          <div>
            <Kicker color="var(--lapis)">Fit-for-purpose modelling · the ordinary city</Kicker>
            <h3 className="serif" style={{
              margin: 0, fontSize: 28, lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.012em",
            }}>A model can be technically strong and still fail the decision.</h3>
            <P style={{ marginTop: 14 }}>
              A global product may be accurate enough for continental comparison
              but not for a Swiss small town, a Newfoundland outport, a Quebec
              rang, a prairie hamlet, or an Indigenous community whose morphology
              is underrepresented in training data. The places that most need
              careful modelling are often not the spectacular megacities or
              canonical test sites.
            </P>
          </div>
          <Card pad={26} style={{ background: "var(--paper-2)", border: "1px solid var(--rule)" }}>
            <div style={{ marginBottom: 18 }}>
              <span className="caps" style={{ color: "var(--ink-3)" }}>The old question</span>
              <p className="serif" style={{
                margin: "4px 0 0", fontSize: 22, lineHeight: 1.3, color: "var(--ink-2)", fontStyle: "italic",
              }}>
                "{FIT_FOR_PURPOSE.old_q}"
              </p>
            </div>
            <Rule />
            <div style={{ marginTop: 18 }}>
              <span className="caps" style={{ color: "var(--lapis)" }}>The question we have to ask</span>
              <p className="serif" style={{
                margin: "4px 0 0", fontSize: 22, lineHeight: 1.3, color: "var(--ink)", fontWeight: 500,
              }}>
                "{FIT_FOR_PURPOSE.new_q}"
              </p>
            </div>
          </Card>
        </div>
        <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 10 }}>
          {FIT_FOR_PURPOSE.ordinary.map((o, i) => (
            <Chip key={i} accent="var(--lapis)" on>{o}</Chip>
          ))}
        </div>
      </Card>

      {/* Rahm */}
      <Card pad={36} style={{ marginTop: 24, background: "var(--ink)", color: "var(--paper)", border: "none" }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 36 }}>
          <Kicker color="var(--ochre-2)">Taichung Central Park · meteorological urbanism</Kicker>
          <div>
            <p className="serif" style={{
              margin: 0, fontSize: 28, lineHeight: 1.3, fontWeight: 300, color: "var(--paper)",
            }}>
              Remote sensing makes the city's atmosphere visible at one scale.
              <span style={{ color: "var(--ochre-2)" }}> Meteorological urbanism builds at the scale the body inhabits.</span>
              Care work is what staffs the layer between them.
            </p>
            <p style={{ margin: "18px 0 0", fontSize: 14, color: "color-mix(in oklch, var(--paper) 75%, transparent)" }}>
              Philippe Rahm + Catherine Mosbach + Ricky Liu and Associates. 67 ha,
              opened 2020. Three climatic paths: coolest, least humid, least
              polluted. Trees selected and located by climatic function. <Fr>Histoire naturelle de l'architecture.</Fr>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

const cardFace = ({ bg, border, color = "var(--ink)" }) => ({
  position: "absolute", inset: 0,
  background: bg, border, color,
  padding: "16px 16px 14px",
  display: "flex", flexDirection: "column",
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
});

// --- Dive 3: Ethics ---
const DiveEthics = () => (
  <div>
    <Lead>
      What do we owe the people and places we observe from a distance? Remote
      sensing is not neutral, but it is also not univocal. The same image can
      protect or endanger — and the threshold between the two is governance.
    </Lead>

    {/* Four-ways-of-change quadrant */}
    <Card pad={36} style={{ marginTop: 16 }}>
      <Kicker color="var(--plum)">Seeing vs. experiencing · click any quadrant</Kicker>
      <h3 className="serif" style={{
        margin: "0 0 8px", fontSize: 32, fontWeight: 400, letterSpacing: "-0.012em", maxWidth: 820,
      }}>
        Four instruments, four questions, one phenomenon.
      </h3>
      <p style={{ margin: "0 0 18px", color: "var(--ink-2)", fontSize: 14.5, maxWidth: 700 }}>
        Remote sensing sees surfaces. People experience friction. Acoustic
        sensing asks what change sounds like. Community knowledge asks what
        change means. The full picture takes all four.
      </p>
      <ChangeFourWaysGrid />
    </Card>

    {/* Section claim */}
    <Pull color="var(--plum)" by="Section claim · Dive III">
      {SECTION_CLAIMS.ethics}
    </Pull>

    {/* Counter-mapping — lines vs membranes */}
    <Card pad={40} style={{ marginTop: 12 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginBottom: 28 }}>
        <div>
          <Kicker color="var(--plum)">Counter-mapping · the satellite reads edges as lines</Kicker>
          <h3 className="serif" style={{
            margin: 0, fontSize: 30, lineHeight: 1.1, fontWeight: 400,
            letterSpacing: "-0.01em", maxWidth: 480,
          }}>Lived experience reads them as membranes.</h3>
        </div>
        <p style={{
          fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)", margin: 0, maxWidth: 460,
        }}>
          Counter-mapping does not add data. It changes the ontology. The
          classifier sees what it was trained to see; the training inherited the
          discipline's origins — military terrain analysis, resource extraction,
          cartographic survey, agricultural inventory. None of these are care work.
        </p>
      </div>

      <div style={{ border: "1px solid var(--rule)" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1.2fr 1.4fr 1fr",
          background: "var(--paper-2)",
          borderBottom: "1px solid var(--rule)",
          padding: "12px 18px",
          fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em",
          textTransform: "uppercase", color: "var(--ink-3)",
        }}>
          <span>Official LULC reads</span>
          <span style={{ color: "var(--plum)" }}>Community reads</span>
          <span>Where</span>
        </div>
        {COUNTER_MAP.map((row, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "1.2fr 1.4fr 1fr",
            padding: "14px 18px",
            borderBottom: i < COUNTER_MAP.length - 1 ? "1px solid var(--rule-soft)" : "none",
            alignItems: "baseline",
          }}>
            <span style={{ fontSize: 13.5, color: "var(--ink-3)", fontStyle: "italic" }}>{row.official}</span>
            <span className="serif" style={{ fontSize: 17, color: "var(--ink)" }}>{row.community}</span>
            <span className="mono" style={{ fontSize: 11, color: "var(--ink-2)", letterSpacing: "0.04em" }}>{row.where}</span>
          </div>
        ))}
      </div>

      {/* Counter-mapping questions */}
      <div style={{
        marginTop: 24, padding: "20px 26px",
        background: "var(--plum-tint)",
        border: "1px solid color-mix(in oklch, var(--plum) 30%, transparent)",
      }}>
        <span className="caps" style={{ color: "var(--plum)" }}>Counter-mapping asks</span>
        <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 16, alignItems: "baseline" }}>
          {COUNTER_MAPPING_QUESTIONS.map((q, i) => (
            <React.Fragment key={i}>
              <span className="serif" style={{
                fontSize: 22, fontStyle: "italic", color: "var(--plum)", fontWeight: 500,
              }}>{q}</span>
              {i < COUNTER_MAPPING_QUESTIONS.length - 1 && (
                <span style={{ color: "var(--ink-4)" }}>·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <p style={{ marginTop: 20, fontSize: 14, color: "var(--ink-2)", maxWidth: 720 }}>
        My colleague Alaa works on migration routes. The satellite reads a fence
        as a binary line. Lived experience reads it as a <strong>membrane</strong>:
        with timing, with gaps, with surveillance shadows, with corruption
        gradients, with the rhythm of patrols. Forensic Architecture (Eyal
        Weizman, Goldsmiths) built an entire discipline of counter-forensic
        analysis around that gap.
      </p>
    </Card>

    {/* Visibility balance — protection ↔ exposure */}
    <Card pad={36} style={{ marginTop: 24 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 36, alignItems: "start" }}>
        <div>
          <Kicker color="var(--terra)">Visibility · protection ↔ exposure</Kicker>
          <h3 className="serif" style={{
            margin: 0, fontSize: 30, lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.012em",
          }}>The same Maxar tile.</h3>
          <P style={{ marginTop: 18 }}>
            Visibility can be protective — and it can be dangerous. What
            determines the technology's valence is governance, institutional
            embedding, and whether anyone can challenge an interpretation.
          </P>
          <Pull color="var(--terra)">
            The resolution of an edge is itself a political variable.
          </Pull>
          <p style={{ fontSize: 13.5, color: "var(--ink-3)", margin: 0 }}>
            UNOSAT October 2025 · ≈ 198,000 damaged or destroyed structures, ≈ 81 %
            of all Gaza structures. Decentralized Damage Mapping Group uses
            Sentinel-1 SAR coherence with a > 99% damaged-pixel threshold.
            Planet Labs delays highest-resolution Gaza imagery by 30 days
            "to reduce potential for misuse and abuse."
          </p>
        </div>
        <div>
          <VisibilityBalance />
          <p className="mono" style={{
            marginTop: 14, fontSize: 10.5, letterSpacing: "0.14em",
            color: "var(--ink-3)", textTransform: "uppercase", textAlign: "center",
          }}>
            who benefits from this visibility · who is exposed by it · who has the authority to refuse it
          </p>
        </div>
      </div>
    </Card>

    {/* Governance triptych */}
    <Card pad={40} style={{ marginTop: 24, background: "var(--ink)", color: "var(--paper)", border: "none" }}>
      <Kicker color="var(--ochre-2)">Indigenous data sovereignty · governance protocols for the boundary layer</Kicker>
      <h3 className="serif" style={{
        margin: "0 0 4px", fontSize: 38, fontWeight: 300, letterSpacing: "-0.014em",
        color: "var(--paper)", maxWidth: 880,
      }}>
        Not soft governance documents. The <em style={{ color: "var(--ochre-2)" }}>operative</em> protocols.
      </h3>
      <p style={{
        margin: "12px 0 28px", fontSize: 15, lineHeight: 1.6,
        color: "color-mix(in oklch, var(--paper) 80%, transparent)", maxWidth: 720,
      }}>
        Some things should not be mapped. Sacred sites, burial grounds, sensitive
        cultural locations — non-mapping is a methodology, and a sovereign
        choice. Some things must be mapped, but by whom matters.
      </p>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0,
        borderTop: "1px solid color-mix(in oklch, var(--paper) 22%, transparent)",
        borderLeft: "1px solid color-mix(in oklch, var(--paper) 22%, transparent)",
      }}>
        {GOV.map((g, i) => (
          <div key={g.name} style={{
            padding: "28px 24px",
            borderRight: "1px solid color-mix(in oklch, var(--paper) 22%, transparent)",
            borderBottom: "1px solid color-mix(in oklch, var(--paper) 22%, transparent)",
            minHeight: 240,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div>
              <div className="mono" style={{
                fontSize: 10, letterSpacing: "0.18em",
                color: "color-mix(in oklch, var(--paper) 55%, transparent)",
                textTransform: "uppercase", marginBottom: 14,
              }}>framework {String(i+1).padStart(2,"0")}</div>
              <h4 className="serif" style={{
                margin: 0, fontSize: 50, fontWeight: 400, letterSpacing: "-0.02em",
              }}>{g.name}</h4>
              <p className="mono" style={{
                margin: "10px 0 0", fontSize: 11, color: "var(--ochre-2)",
                letterSpacing: "0.10em", textTransform: "uppercase",
              }}>{g.full}</p>
            </div>
            <p style={{
              margin: "16px 0 0", fontSize: 13.5, lineHeight: 1.55,
              color: "color-mix(in oklch, var(--paper) 80%, transparent)",
            }}>{g.body}</p>
          </div>
        ))}
      </div>
    </Card>

    {/* Solastalgia */}
    <Card pad={40} style={{ marginTop: 24 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 36 }}>
        <div>
          <Kicker color="var(--plum)">Solastalgia · change detection as visual grammar of grief</Kicker>
          <h3 className="serif" style={{
            margin: 0, fontSize: 34, lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.014em",
          }}>The before-and-after pair is a memorial structure.</h3>
          <P style={{ marginTop: 18 }}>
            <strong>Solastalgia</strong> — Glenn Albrecht, 2003 — the distress
            caused by environmental change to one's home while one is still in it.
            Change detection is, structurally, the technical apparatus of
            solastalgia.
          </P>
          <P>
            Community mapping, when it works, is not only a technical practice.
            It becomes <strong>collective grief work</strong>: a way to decide what
            must be remembered, protected, mourned, repaired, or transformed.
            <em> The map as ritual.</em>
          </P>
        </div>
        <Card pad={28} style={{
          background: "var(--plum-tint)",
          border: `1px solid color-mix(in oklch, var(--plum) 35%, transparent)`,
        }}>
          <Kicker color="var(--plum)">A short list of the memorial archive</Kicker>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {[
              "Glacier National Park · repeat photography",
              "Southwestern Newfoundland · receding coastline",
              "Mississippi delta · vanishing wetlands",
              "Boreal Canada · accumulating burn scars",
              "Climate displacement · disappeared villages",
            ].map((it, i) => (
              <li key={i} style={{
                padding: "10px 0",
                borderBottom: i < 4 ? "1px solid color-mix(in oklch, var(--plum) 25%, transparent)" : "none",
                fontSize: 14.5, color: "var(--ink)",
              }}>{it}</li>
            ))}
          </ul>
        </Card>
      </div>
    </Card>
  </div>
);

const TabPlongees = () => {
  const [active, setActive] = React.useState("applications");
  return (
    <div className="wrap" style={{ padding: "72px 56px 100px" }}>
      <SectionHead
        index="iii"
        eyebrow="Three deep dives · the body of the talk"
        title="Each dive sits in the boundary layer."
        lede={<>
          <strong>Applications</strong> · why risk and resilience require more than the satellite view. ·
          <strong> Integration & epistemology</strong> · what happens between signal, class, model, decision. ·
          <strong> Ethics & politics</strong> · what we owe the people and places we observe from a distance. Each dive carries a load-bearing diagram — the five perspectives wheel, the three-layer heuristic stack, the looks/sounds/felt/means quadrant.
        </>}
      />
      <DiveNav active={active} set={setActive} />
      {active === "applications" && <DiveApplications />}
      {active === "integration"  && <DiveIntegration />}
      {active === "ethics"       && <DiveEthics />}
    </div>
  );
};

// -----------------------------------------------------------------------
// AVENIR — Future + funding fragility
// -----------------------------------------------------------------------
const TabAvenir = () => (
  <div className="wrap" style={{ padding: "72px 56px 100px" }}>
    <SectionHead
      index="iv"
      eyebrow="Avenir · what is coming · what is at stake"
      title="Foundation models, new SAR, fragile funding — and Canada's particular moment."
      lede="The biggest single shift since 2023 is foundation models. The biggest hardware moment is in radar. The biggest political risk is funding fragility — and Canada's relative stability is a global asset and a global responsibility."
    />

    {/* Foundation models */}
    <Card pad={36} style={{ marginTop: 12 }}>
      <Kicker color="var(--lapis)">Slide 23 · foundation models · the espérance side at amplitude</Kicker>
      <h3 className="serif" style={{
        margin: 0, fontSize: 32, fontWeight: 400, letterSpacing: "-0.012em", maxWidth: 800,
      }}>A foundation model is a heuristic engine whose failure modes are correlated and hard to characterize.</h3>

      <div style={{
        marginTop: 28, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
        border: "1px solid var(--rule)",
      }}>
        {FOUNDATION.map((f, i) => (
          <div key={i} style={{
            padding: "22px 20px",
            borderRight: i < 3 ? "1px solid var(--rule)" : "none",
          }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--lapis)", textTransform: "uppercase" }}>model {String(i+1).padStart(2,"0")}</div>
            <div className="serif" style={{ fontSize: 26, fontWeight: 500, marginTop: 8, lineHeight: 1.1 }}>{f.name}</div>
            <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 6 }}>{f.org}</div>
            <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 6, letterSpacing: "0.06em" }}>{f.date}</div>
            {f.note && (
              <div style={{ fontSize: 12.5, color: "var(--lapis)", marginTop: 10, lineHeight: 1.45, fontStyle: "italic" }}>{f.note}</div>
            )}
          </div>
        ))}
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 28,
      }}>
        <div>
          <div className="caps" style={{ color: "var(--moss)", marginBottom: 8 }}>What this changes</div>
          <ul style={{ margin: 0, padding: "0 0 0 18px", color: "var(--ink-2)", fontSize: 14.5, lineHeight: 1.65 }}>
            <li>Democratization — fine-tune with hundreds of labels instead of tens of thousands.</li>
            <li>Multimodal fusion becomes default — S-2 + S-1 without custom pipeline engineering.</li>
            <li>Near-real-time analysis becomes operationally feasible.</li>
          </ul>
        </div>
        <div>
          <div className="caps" style={{ color: "var(--terra)", marginBottom: 8 }}>What it does not</div>
          <ul style={{ margin: 0, padding: "0 0 0 18px", color: "var(--ink-2)", fontSize: 14.5, lineHeight: 1.65 }}>
            <li>A bias in pretraining propagates to every downstream task.</li>
            <li>The auditability problem deepens.</li>
            <li>Pretraining archives sample continents more than oceans-with-islands.</li>
          </ul>
        </div>
      </div>
    </Card>

    {/* SAR timeline */}
    <Card pad={36} style={{ marginTop: 24 }}>
      <Kicker color="var(--terra)">Slide 24 · SAR missions · a remarkable moment</Kicker>
      <h3 className="serif" style={{ margin: 0, fontSize: 28, fontWeight: 400, letterSpacing: "-0.01em", maxWidth: 740 }}>
        The economics of synthetic aperture radar have inverted in under a decade.
      </h3>

      <div style={{ marginTop: 28, position: "relative" }}>
        <div style={{ position: "absolute", top: 26, left: 0, right: 0, height: 1, background: "var(--rule)" }} />
        <div style={{
          display: "grid", gridTemplateColumns: `repeat(${SAR_MISSIONS.length}, 1fr)`, gap: 0,
        }}>
          {SAR_MISSIONS.map((s, i) => (
            <div key={i} style={{
              padding: "0 10px", textAlign: "left",
              display: "flex", flexDirection: "column", alignItems: "flex-start",
              gap: 8,
            }}>
              <div style={{
                width: 12, height: 12, background: "var(--terra)", borderRadius: 999, marginTop: 20, zIndex: 2,
              }} />
              <div className="mono" style={{
                fontSize: 10, color: "var(--terra)", letterSpacing: "0.10em",
                textTransform: "uppercase",
              }}>{s.when}</div>
              <div className="serif" style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.1 }}>{s.name}</div>
              <div className="mono" style={{ fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.08em" }}>{s.org}</div>
              <div style={{ fontSize: 11.5, color: "var(--ink-2)", fontStyle: "italic", lineHeight: 1.35 }}>{s.band}</div>
              <div style={{ fontSize: 12, color: "var(--ink-2)", lineHeight: 1.45 }}>{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>

    {/* Fragility */}
    <Card pad={36} style={{ marginTop: 24, background: "var(--ink)", color: "var(--paper)", border: "none" }}>
      <Kicker color="var(--ochre-2)">Slide 25 · funding fragility · honest backdrop</Kicker>
      <h3 className="serif" style={{ margin: 0, fontSize: 36, fontWeight: 300, letterSpacing: "-0.014em", color: "var(--paper)", maxWidth: 880 }}>
        Canada's relative stability is a global asset and a global responsibility.
      </h3>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 40, marginTop: 28 }}>
        <div>
          <div className="caps" style={{ color: "var(--terra-2)", marginBottom: 12 }}>Under stress · past 18 months</div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {FRAGILITY.map((f, i) => (
              <li key={i} style={{
                display: "grid", gridTemplateColumns: "160px 130px 1fr",
                padding: "12px 0",
                borderBottom: i < FRAGILITY.length - 1 ? "1px solid color-mix(in oklch, var(--paper) 22%, transparent)" : "none",
                alignItems: "baseline", gap: 16,
              }}>
                <span className="serif" style={{ fontSize: 19, lineHeight: 1.1 }}>{f.name}</span>
                <span className="mono" style={{ fontSize: 11, letterSpacing: "0.10em", color: "var(--terra-2)", textTransform: "uppercase" }}>{f.status}</span>
                <span className="mono" style={{ fontSize: 11, color: "color-mix(in oklch, var(--paper) 65%, transparent)", letterSpacing: "0.04em" }}>{f.when} · {f.region}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="caps" style={{ color: "var(--ochre-2)", marginBottom: 12 }}>Canada · in this moment</div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {CANADA_STABILITY.map((c, i) => (
              <li key={i} style={{
                padding: "14px 0",
                borderBottom: i < CANADA_STABILITY.length - 1 ? "1px solid color-mix(in oklch, var(--paper) 22%, transparent)" : "none",
              }}>
                <span className="serif" style={{ fontSize: 19, lineHeight: 1.1 }}>{c.name}</span>
                <div style={{ fontSize: 13, color: "color-mix(in oklch, var(--paper) 80%, transparent)", marginTop: 4 }}>{c.note}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="serif" style={{
        margin: "36px 0 0", paddingTop: 28,
        borderTop: "1px solid color-mix(in oklch, var(--paper) 22%, transparent)",
        fontSize: 22, lineHeight: 1.4, fontWeight: 300, color: "var(--paper)", maxWidth: 920,
      }}>
        If you are in this room — researcher, graduate student, policy person,
        humanitarian, architect, journalist — you are part of one of the few
        national remote-sensing communities that has both the technical capacity
        and the institutional posture <em style={{ color: "var(--ochre-2)" }}>to staff the boundary layer at scale, in the next decade, with care.</em>
      </p>
    </Card>

    {/* Bookend — return to Raphael */}
    <section style={{
      marginTop: 64,
      borderTop: "1px solid var(--rule)", paddingTop: 56,
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <Kicker color="var(--terra)">Bookend · return to the École d'Athènes</Kicker>
          <h3 className="serif" style={{ margin: 0, fontSize: 44, fontWeight: 300, letterSpacing: "-0.018em", lineHeight: 1.05 }}>
            Plato <em style={{ color: "var(--lapis-2)" }}>and</em> Aristotle.
          </h3>
          <P style={{ marginTop: 22, fontSize: 17 }}>
            {TALK.closing_plato}
          </P>
          <P style={{ fontSize: 17 }}>
            {TALK.closing_aristotle}
          </P>
          <p className="serif" style={{
            margin: "24px 0 0", fontSize: 22, lineHeight: 1.4, color: "var(--ink)", fontStyle: "italic",
          }}>
            The discipline we need is not only a discipline of better seeing. It
            is a discipline of <em style={{ color: "var(--terra)" }}>returning</em> —
            returning the image to the people, places and decisions that give it
            meaning.
          </p>
        </div>
        <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "var(--ink)",
          backgroundImage: "url(img/school-of-athens.jpg)",
          backgroundSize: "180%",
          backgroundPosition: "53% 36%",
          backgroundRepeat: "no-repeat",
        }} />
      </div>

      {/* Final line */}
      <div style={{
        marginTop: 56, padding: "44px 48px",
        background: "var(--ink)", color: "var(--paper)",
      }}>
        <div className="mono" style={{
          fontSize: 11, letterSpacing: "0.20em", color: "var(--ochre-2)",
          textTransform: "uppercase", marginBottom: 18,
        }}>Final line · the closing sentence</div>
        <p className="serif" style={{
          margin: 0, fontSize: 30, lineHeight: 1.3, fontWeight: 300,
          color: "var(--paper)", letterSpacing: "-0.012em", maxWidth: 1100,
        }}>
          “{TALK.closing_final.split(" — ")[0]} — <em style={{ color: "var(--ochre-2)" }}>{TALK.closing_final.split(" — ")[1]}</em>”
        </p>
      </div>
    </section>
  </div>
);

// -----------------------------------------------------------------------
// ANNEXES — Q&A, reading, bilingual register, time budget, cuts/expands
// -----------------------------------------------------------------------
const TabAnnexes = () => (
  <div className="wrap" style={{ padding: "72px 56px 100px" }}>
    <SectionHead
      index="v"
      eyebrow="Annexes · operations · references"
      title="The boring, useful bits."
      lede="Time budget for the lecturer. Probable Q&A landing zones. Bilingual register notes for a Canadian audience. Further reading. The cut and expand instructions for live timing."
    />

    {/* Budget */}
    <Card pad={36} style={{ marginTop: 8 }}>
      <Kicker color="var(--terra)">Time budget · 60 min envelope</Kicker>
      <div style={{ overflow: "auto", marginTop: 20 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--rule)" }}>
              {["Section","Target","Words","Delivery note"].map(h => (
                <th key={h} style={{
                  padding: "10px 0", textAlign: "left",
                  fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em",
                  color: "var(--ink-3)", textTransform: "uppercase", fontWeight: 500,
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {BUDGET.map((b, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--rule-soft)" }}>
                <td style={{ padding: "12px 0", fontFamily: "var(--serif)", fontSize: 17, color: "var(--ink)" }}>{b.sect}</td>
                <td style={{ padding: "12px 0", fontFamily: "var(--mono)", fontSize: 13, color: "var(--terra)" }}>{b.target}</td>
                <td style={{ padding: "12px 0", fontFamily: "var(--serif)", fontVariantNumeric: "tabular-nums", fontSize: 15, color: "var(--ink-2)" }}>{b.words.toLocaleString()}</td>
                <td style={{ padding: "12px 0", fontSize: 13.5, color: "var(--ink-2)" }}>{b.notes}</td>
              </tr>
            ))}
            <tr style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
              <td style={{ padding: "12px 0", fontFamily: "var(--serif)", fontSize: 17, fontWeight: 600 }}>Total</td>
              <td style={{ padding: "12px 0", fontFamily: "var(--mono)", fontSize: 13, color: "var(--terra)", fontWeight: 600 }}>52–55 + 5–7 Q&A</td>
              <td style={{ padding: "12px 0", fontFamily: "var(--serif)", fontVariantNumeric: "tabular-nums", fontSize: 15, fontWeight: 600 }}>≈ 6,820</td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    </Card>

    {/* Cut / Expand */}
    <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      <Card pad={28} style={{ background: "var(--terra-tint)", border: "1px solid color-mix(in oklch, var(--terra) 30%, transparent)" }}>
        <Kicker color="var(--terra)">If you run long · cut</Kicker>
        <ol style={{ margin: 0, padding: "0 0 0 24px" }}>
          {CUTS.map((c, i) => (
            <li key={i} style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink)", marginBottom: 10 }}>
              <strong>{c.when}.</strong> {c.how}
            </li>
          ))}
        </ol>
      </Card>
      <Card pad={28} style={{ background: "var(--moss-tint)", border: "1px solid color-mix(in oklch, var(--moss) 30%, transparent)" }}>
        <Kicker color="var(--moss)">If you run short · expand</Kicker>
        <ol style={{ margin: 0, padding: "0 0 0 24px" }}>
          {EXPANDS.map((c, i) => (
            <li key={i} style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink)", marginBottom: 10 }}>
              <strong>{c.when}.</strong> {c.how}
            </li>
          ))}
        </ol>
      </Card>
    </div>

    {/* Q&A */}
    <Card pad={36} style={{ marginTop: 24 }}>
      <Kicker color="var(--lapis)">Probable Q&A landing zones · pre-rehearsed pivots</Kicker>
      <div style={{ marginTop: 18 }}>
        {QA_LANDING.map((q, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 28,
            padding: "16px 0", borderBottom: i < QA_LANDING.length - 1 ? "1px solid var(--rule-soft)" : "none",
            alignItems: "baseline",
          }}>
            <div className="serif" style={{ fontSize: 18, lineHeight: 1.35, color: "var(--ink)" }}>
              <span className="mono" style={{ fontSize: 10, color: "var(--lapis)", letterSpacing: "0.10em", marginRight: 12 }}>Q{String(i+1).padStart(2,"0")}</span>
              {q.q}
            </div>
            <div style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5 }}>{q.a}</div>
          </div>
        ))}
      </div>
    </Card>

    {/* Reading + Bilingual */}
    <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 24 }}>
      <Card pad={32}>
        <Kicker color="var(--terra)">Further reading · the bibliography that sits behind the talk</Kicker>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {READING.map((r, i) => (
            <li key={i} style={{
              display: "grid", gridTemplateColumns: "60px 1fr",
              padding: "10px 0", borderBottom: i < READING.length - 1 ? "1px solid var(--rule-soft)" : "none",
              gap: 16, alignItems: "baseline",
            }}>
              <span className="num" style={{ fontSize: 16, color: "var(--terra)" }}>{r.year}</span>
              <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "var(--ink)" }}>
                <strong style={{ color: "var(--ink)" }}>{r.who}</strong> — {r.what}
              </span>
            </li>
          ))}
        </ul>
      </Card>
      <Card pad={32}>
        <Kicker color="var(--ochre)">Bilingual register · let them land untranslated</Kicker>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {BILINGUAL.map((b, i) => (
            <li key={i} style={{
              padding: "12px 0", borderBottom: i < BILINGUAL.length - 1 ? "1px solid var(--rule-soft)" : "none",
            }}>
              <div className="serif" style={{
                fontSize: 22, fontStyle: "italic", color: "var(--ink)", lineHeight: 1.15,
              }}>{b.fr}</div>
              <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 4 }}>{b.en}</div>
            </li>
          ))}
        </ul>
      </Card>
    </div>

    {/* Spine */}
    <Card pad={40} style={{
      marginTop: 24, background: "var(--ink)", color: "var(--paper)", border: "none",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40 }}>
        <Kicker color="var(--ochre-2)">Spine · memorise</Kicker>
        <div>
          <p className="serif" style={{
            margin: 0, fontSize: 32, lineHeight: 1.25, fontWeight: 300,
            color: "var(--paper)", letterSpacing: "-0.01em",
          }}>
            “The boundary layer is where care happens.<br/>
            <em style={{ color: "var(--ochre-2)" }}>Everything else is preparation or aftermath.</em>”
          </p>
          <p className="mono" style={{
            margin: "18px 0 0", fontSize: 11, letterSpacing: "0.12em",
            color: "color-mix(in oklch, var(--paper) 60%, transparent)",
            textTransform: "uppercase",
          }}>If the talk drifts mid-delivery, this sentence brings it back. It is the talk's compass.</p>
        </div>
      </div>
    </Card>

    {/* Colophon */}
    <footer style={{
      marginTop: 64, paddingTop: 36, borderTop: "1px solid var(--rule)",
      display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 18,
    }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)" }}>
        Set in Newsreader, IBM Plex Sans & JetBrains Mono · CRSS 2026
      </div>
      <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)" }}>
        Companion site · v 1.0 · ← prev / → next inside the slide tab
      </div>
    </footer>
  </div>
);

Object.assign(window, { TabPlongees, TabAvenir, TabAnnexes });
