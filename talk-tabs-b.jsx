// =======================================================================
// Tabs B. Plongées, Avenir, Annexes.
// =======================================================================

// -----------------------------------------------------------------------
// PLONGÉES, three deep dives plus the interlude on multimodality.
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
          }}>{d.roman}</div>
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

// -----------------------------------------------------------------------
// DIVE I, Applications
// -----------------------------------------------------------------------
const DiveApplications = () => (
  <div>
    <Lead>
      Risk is not a single object. It is a relationship among hazard, exposure, vulnerability, and capacity, in the language formalised by the United Nations Office for Disaster Risk Reduction. Remote sensing reads hazard and exposure with relative confidence. Vulnerability, capacity, and resilience live in the messy middle of practice, and require ground-up knowledge, embodied experience, community attention, and institutional decision-making to become legible at all.
    </Lead>

    <Card pad={28} style={{ marginTop: 16 }}>
      <Kicker color="var(--lapis)">The UNDRR risk quartet, two halves of the same question</Kicker>
      <p style={{ margin: "0 0 18px", color: "var(--ink-2)", fontSize: 14.5, maxWidth: 720 }}>
        The official definition of disaster is a serious disruption caused by hazardous events interacting with conditions of exposure, vulnerability, and capacity. The first two terms describe what the sky can see. The second two describe what only ground-level knowledge can attest.
      </p>
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
            }}>{r.sky ? "Sky-eye reads" : "Ground-up reads"}</div>
            <h4 className="serif" style={{
              margin: "8px 0 0", fontSize: 28, fontWeight: 400, letterSpacing: "-0.012em",
            }}>{r.name}</h4>
            <p style={{ margin: "6px 0 0", fontSize: 12.5, color: "var(--ink-2)", fontStyle: "italic" }}>{r.tag}</p>
          </div>
        ))}
      </div>
    </Card>

    <Card pad={36} style={{ marginTop: 24 }}>
      <Kicker color="var(--terra)">Five perspectives on risk, click any vertex</Kicker>
      <h3 className="serif" style={{
        margin: "0 0 14px", fontSize: 32, fontWeight: 400, letterSpacing: "-0.012em", maxWidth: 820,
      }}>
        Resilience requires several perspectives at once, and these perspectives do not simply add. They argue.
      </h3>
      <p style={{ margin: "0 0 22px", color: "var(--ink-2)", fontSize: 14.5, maxWidth: 760 }}>
        The diagram below names the five vantage points that any defensible risk reading must reconcile. The satellite is one perspective among five, not the master perspective to which the others contribute. Each vertex contributes what no other vertex can see, and the integration is the work of a person, not the work of a filter.
      </p>
      <FivePerspectivesWheel />
    </Card>

    <Pull color="var(--terra)">
      {SECTION_CLAIMS.applications}
    </Pull>

    {/* Taiwan typhoon */}
    <Card pad={36} style={{
      marginTop: 24, background: "var(--ochre-tint)",
      border: "1px solid color-mix(in oklch, var(--ochre) 30%, transparent)",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 36 }}>
        <Kicker color="var(--ochre)">Taiwan, where the last mile turns out not to be a delivery problem</Kicker>
        <div>
          <p className="serif" style={{
            margin: 0, fontSize: 24, lineHeight: 1.35, fontStyle: "italic", color: "var(--ink)",
          }}>
            Probability of damage and willingness to evacuate are not linearly related.
          </p>
          <P style={{ marginTop: 14 }}>
            At the Taiwan Typhoon Research Centre, the question that mattered was not the satellite's confidence that a typhoon would strike. The question was what households would do once the warning arrived. Trust in the source, prior false alarms, household composition, place attachment, language access, the social capital of the neighbourhood, and the practicalities of where to go and with whom all intervene between the map and the action.
          </P>
          <P>
            The framing of last mile concedes too much. The last mile is not a delivery problem in which a clear message simply needs to travel further. It is an epistemological problem in which the receiver constitutes the meaning of the message according to her own civic epistemology, in Sheila Jasanoff's term. The work of remote sensing for care, resilience, and community is not finished when the map is published. It begins there.
          </P>
        </div>
      </div>
    </Card>
  </div>
);

// -----------------------------------------------------------------------
// DIVE II, Integration and epistemology
// -----------------------------------------------------------------------
const DiveIntegration = () => {
  const [flipped, setFlipped] = React.useState({});
  const toggle = (i) => setFlipped(f => ({ ...f, [i]: !f[i] }));

  return (
    <div>
      <Lead>
        What happens in the chain between signal, class, model, and decision? Three layers of heuristic, physical, interpretive, and ethical. The discipline of care, resilience, and community is the discipline of taking that stack seriously at every level, not only at the level where it is mathematically tractable.
      </Lead>

      {/* Heuristic stack */}
      <Card pad={36} style={{ marginTop: 16 }}>
        <Kicker color="var(--terra)">The three-layer heuristic stack, click each layer</Kicker>
        <h3 className="serif" style={{
          margin: "0 0 14px", fontSize: 32, fontWeight: 400, letterSpacing: "-0.012em", maxWidth: 800,
        }}>
          A signal becomes a class. A class becomes a decision. A decision becomes a life.
        </h3>
        <p style={{ margin: "0 0 22px", color: "var(--ink-2)", fontSize: 14.5, maxWidth: 720 }}>
          The vocabulary of this stack is owed to Andreas Braun, whose 2021 paper in Progress in Physical Geography distilled the relationship between accuracy and meaningfulness, and to Mia Bennett and colleagues, whose 2022 Politics of Pixels in Progress in Human Geography treated remote sensing's confident epistemology as itself political. Both are the foundation of the critical remote sensing literature this talk draws on.
        </p>
        <HeuristicStackDiagram />
      </Card>

      {/* Lausanne TROPOMI / Q-TRAK */}
      <Card pad={40} style={{ marginTop: 12, background: "var(--paper)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "start" }}>
          <div>
            <Kicker color="var(--terra)">TROPOMI against Q-TRAK, the scale collision</Kicker>
            <h3 className="serif" style={{
              margin: 0, fontSize: 34, lineHeight: 1.05, fontWeight: 400,
              letterSpacing: "-0.014em",
            }}>The entire walk on the right fits inside one pixel on the left.</h3>
            <P style={{ marginTop: 18 }}>
              May 2019. With two classmates in the EPFL urban climate course taught by Silvia Coccolo and Dasaraden Mauree, I walked Lausanne with a Q-TRAK air quality monitor for four afternoons. The measurements were taken at body altitude, 1.4 metres above the ground, the height at which an adult or a child actually inhales.
            </P>
            <P>
              The peak was the M1 metro from EPFL to Lausanne Flon at five thirty in the afternoon, 1,693 parts per million of carbon dioxide. The sick building syndrome threshold is 800. The Harvard CogFX study finds that cognitive scores decline measurably above approximately 945. Cars passing at Lausanne Flon produced spikes of three to four hundred parts per million. Buses idled at 1,880 ppm. The S2 commuter train showed elevated but lower values at 1,136. The Botanical Garden bushes under sun at optimal temperature read 368 ppm, which is below atmospheric background, because photosynthesis was outpacing respiration that afternoon. The closed EPFL campus with no through traffic, and Ouchy waterfront with Lake Geneva as natural sink and dispersion engine, both registered lower than central Lausanne.
            </P>
            <P>
              The Sentinel-5P TROPOMI nitrogen dioxide pixel covering the Lake Geneva basin is approximately 5 kilometres by 3.5 kilometres. The entire Lausanne footprint is roughly one pixel. The entire afternoon walk fits inside that single pixel. There are three structural reasons the satellite cannot do what the walk did. Column retrievals are weighted toward the lower troposphere but cannot resolve the bottom ten metres where bodies breathe. Remote sensing sees nothing through a roof or a tunnel, and the worst exposures were in spaces it does not exist for. The spike from a passing car is seconds long; satellite revisit is days. For carbon dioxide as a health question rather than a climate question, satellites are measuring the wrong thing.
            </P>
            <Pull color="var(--terra)">
              For carbon dioxide as a health question rather than a climate question, satellites are measuring the wrong thing.
            </Pull>
          </div>

          <div>
            <div style={{ marginBottom: 18 }}>
              <Kicker color="var(--terra)">Reading, parts per million of carbon dioxide</Kicker>
              <CO2Gauge height={220} />
            </div>
            <div>
              <Kicker color="var(--lapis)">Pixel against walk</Kicker>
              <PixelWalk height={340} />
            </div>
          </div>
        </div>
      </Card>

      {/* SOCODEVI */}
      <Card pad={36} style={{ marginTop: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 36 }}>
          <Kicker color="var(--moss)">SOCODEVI, West Africa, the integration is a person</Kicker>
          <div>
            <p className="serif" style={{
              margin: 0, fontSize: 22, lineHeight: 1.35, fontWeight: 300,
              fontStyle: "italic", color: "var(--ink)",
            }}>
              A Kalman filter can combine estimates once the variable has already been defined. In resilience work, the variable itself is contested.
            </p>
            <P style={{ marginTop: 14 }}>
              At SOCODEVI, the work was integrating ground rain sensors with satellite precipitation products for smallholder agriculture in West Africa. The textbook story is data assimilation, the engineering of bias and variance into a fused estimate. The lived story is simpler and more consequential. The satellite said one thing. The farmer's gauge said another. The neighbour's gauge said a third. The satellite product had been validated at continental scale and was not wrong, at its scale. But the answer to the question that mattered, did it rain enough on our parcel today to plant, required all three streams, and it required someone in the village to translate between them.
            </P>
            <P>
              That translator is the integration. The statistical filter assumes that all three instruments are measuring the same underlying variable with different bias and variance. The translator, by contrast, recognises that the satellite, the farmer's gauge, and the neighbour's gauge are not three measurements of one quantity. They are three accounts of related but distinct phenomena, each authoritative within its own scale and ontology, and the integration is a political and interpretive act that no algorithm can perform on its own.
            </P>
          </div>
        </div>
      </Card>

      {/* Defaults flip cards */}
      <Card pad={40} style={{ marginTop: 24 }}>
        <Kicker color="var(--terra)">The defaults indictment, click any card to flip</Kicker>
        <h3 className="serif" style={{
          margin: "0 0 12px", fontSize: 30, fontWeight: 400, letterSpacing: "-0.01em", maxWidth: 800,
        }}>The data is fine. The defaults are the problem.</h3>
        <p style={{ margin: "0 0 24px", color: "var(--ink-2)", fontSize: 14.5, maxWidth: 760 }}>
          Every introductory remote sensing course teaches a set of preprocessing defaults that, from a community resilience perspective, ask their questions from the wrong direction. Each card below names a standard default on the front and the care reading on the back. The cards are not exhaustive. They are a method.
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
                        flip
                      </span>
                    </div>
                  </div>
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

      {/* Fit for purpose */}
      <Card pad={36} style={{ marginTop: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>
          <div>
            <Kicker color="var(--lapis)">Fit for purpose modelling, the ordinary city</Kicker>
            <h3 className="serif" style={{
              margin: 0, fontSize: 28, lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.012em",
            }}>A model can be technically strong and still fail the decision.</h3>
            <P style={{ marginTop: 14 }}>
              A global product may be accurate enough for continental comparison and yet entirely inadequate for a Swiss small town, a Newfoundland outport, a Quebec rang, a prairie hamlet, or an Indigenous community whose morphology is underrepresented in training data. The places that most need careful modelling are often not the spectacular megacities or the canonical test sites. They are the ordinary cities and small communities where the consequences of a misclassification are absorbed by people who have no recourse to a second opinion.
            </P>
            <P>
              The right question for the discipline is therefore not whether the model is accurate in the abstract. The right question is accurate for whom, at what scale, for what decision, and with what consequences for the people whose lives will be reorganised by the answer.
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
              <span className="caps" style={{ color: "var(--lapis)" }}>The question we must ask</span>
              <p className="serif" style={{
                margin: "4px 0 0", fontSize: 22, lineHeight: 1.3, color: "var(--ink)", fontWeight: 500,
              }}>
                "{FIT_FOR_PURPOSE.new_q}"
              </p>
            </div>
          </Card>
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

// -----------------------------------------------------------------------
// DIVE III, Ethics and politics
// -----------------------------------------------------------------------
const DiveEthics = () => (
  <div>
    <Lead>
      What do we owe the people and places we observe from a distance? Remote sensing is not neutral, but neither is it univocal. The same image can protect or endanger, and the threshold between the two is governance. The previous interlude on the four registers of multimodality reframed this question. Ethics enters the moment the discipline moves from technical multimodality, which combines sensor streams, to ontological multimodality, which negotiates among different ways of constituting what the data is about.
    </Lead>

    {/* Four ways of change */}
    <Card pad={36} style={{ marginTop: 16 }}>
      <Kicker color="var(--plum)">Seeing against experiencing, click any quadrant</Kicker>
      <h3 className="serif" style={{
        margin: "0 0 14px", fontSize: 32, fontWeight: 400, letterSpacing: "-0.012em", maxWidth: 820,
      }}>
        Four instruments, four questions, one phenomenon.
      </h3>
      <p style={{ margin: "0 0 18px", color: "var(--ink-2)", fontSize: 14.5, maxWidth: 760 }}>
        Remote sensing sees surfaces. People experience friction. Acoustic sensing asks what change sounds like. Community knowledge asks what change means. The full picture takes all four registers, kept analytically distinct and associable through time, place, and provenance.
      </p>
      <ChangeFourWaysGrid />
    </Card>

    <Pull color="var(--plum)" by="Section claim, Dive III">
      {SECTION_CLAIMS.ethics}
    </Pull>

    {/* Counter-mapping */}
    <Card pad={40} style={{ marginTop: 12 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginBottom: 28 }}>
        <div>
          <Kicker color="var(--plum)">Counter-mapping, the satellite reads edges as lines</Kicker>
          <h3 className="serif" style={{
            margin: 0, fontSize: 30, lineHeight: 1.1, fontWeight: 400,
            letterSpacing: "-0.01em", maxWidth: 480,
          }}>Lived experience reads them as membranes.</h3>
        </div>
        <p style={{
          fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)", margin: 0, maxWidth: 460,
        }}>
          Counter-mapping is the practice of changing the question that the map answers, and therefore the ontology it inhabits. The tradition is documented by Nancy Peluso's 1995 paper on the forests of Kalimantan, by Bernard Nietschmann's work with the Miskito of Nicaragua, and by Mac Chapin's 2005 critique of conservation NGO mapping practices in World Watch Magazine.
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

      <p style={{ marginTop: 20, fontSize: 14, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: 800 }}>
        The classifier sees what it was trained to see, and the training inherited the discipline's origins: military terrain analysis, resource extraction, cartographic survey, and agricultural inventory. None of these origins is care work. Counter-mapping is what changes the inheritance. Consider the satellite reading of a border fence as a binary line, then consider the lived experience of the same fence as a membrane, with timing, with gaps, with surveillance shadows, with the rhythm of patrols, with the seasonal flux of migration. Forensic Architecture, under Eyal Weizman at Goldsmiths, built an entire discipline of counter-forensic analysis around precisely that gap, taking the same imagery used by states to surveil and turning it into evidence of state violence.
      </p>
    </Card>

    {/* Visibility balance */}
    <Card pad={36} style={{ marginTop: 24 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 36, alignItems: "start" }}>
        <div>
          <Kicker color="var(--terra)">Visibility, protection and exposure</Kicker>
          <h3 className="serif" style={{
            margin: 0, fontSize: 30, lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.012em",
          }}>The same Maxar tile.</h3>
          <P style={{ marginTop: 18 }}>
            Visibility can be protective. It can be dangerous. What determines the technology's valence is governance, institutional embedding, and whether anyone can challenge an interpretation. The same Sentinel-2 scene can be read for refugee camp population estimation by UNHCR and for forced displacement targeting by a military. The same Maxar tile documented Russian atrocities in Bucha in 2022 and informs Gaza operations today.
          </P>
          <P>
            The Decentralized Damage Mapping Group, with Van Den Hoek at Oregon State, Scher at the City University of New York, and Yin at Kent State, uses Sentinel-1 SAR coherence change detection to count damaged buildings in Gaza, conservatively, and only when a building is more than ninety-nine per cent covered by damaged pixels. The October 2025 UNOSAT Comprehensive Damage Assessment, using Pléiades NEO and Maxar very high resolution optical imagery, reports approximately 198,000 damaged or destroyed structures, around 81 per cent of all structures in the territory. Planet Labs has publicly acknowledged delaying its highest resolution Gaza imagery by thirty days, in their words, to reduce the potential for misuse and abuse.
          </P>
          <Pull color="var(--terra)">
            The resolution of an edge is itself a political variable.
          </Pull>
        </div>
        <div>
          <VisibilityBalance />
          <p className="mono" style={{
            marginTop: 14, fontSize: 10.5, letterSpacing: "0.14em",
            color: "var(--ink-3)", textTransform: "uppercase", textAlign: "center",
          }}>
            who benefits from this visibility, who is exposed by it, who has the authority to refuse it
          </p>
        </div>
      </div>
    </Card>

    {/* Governance triptych */}
    <Card pad={40} style={{ marginTop: 24, background: "var(--ink)", color: "var(--paper)", border: "none" }}>
      <Kicker color="var(--ochre-2)">Indigenous data sovereignty, governance protocols for the messy middle</Kicker>
      <h3 className="serif" style={{
        margin: "0 0 4px", fontSize: 38, fontWeight: 300, letterSpacing: "-0.014em",
        color: "var(--paper)", maxWidth: 880,
      }}>
        The <em style={{ color: "var(--ochre-2)" }}>Operative</em> Protocols.
      </h3>
      <p style={{
        margin: "12px 0 28px", fontSize: 15, lineHeight: 1.6,
        color: "color-mix(in oklch, var(--paper) 80%, transparent)", maxWidth: 800,
      }}>
        Some things should not be mapped. Sacred sites, burial grounds, sensitive cultural locations. Non-mapping is a methodology, and a sovereign choice. Some things must be mapped, but by whom matters. SmartICE in Inuit Nunangat and the Indigenous Guardians programs across the country are the institutional and embodied forms of what the protocols below name in writing.
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
            minHeight: 260,
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
          <Kicker color="var(--plum)">Solastalgia, change detection as the visual grammar of grief</Kicker>
          <h3 className="serif" style={{
            margin: 0, fontSize: 34, lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.014em",
          }}>The before and after pair is a memorial structure.</h3>
          <P style={{ marginTop: 18 }}>
            Glenn Albrecht coined the term solastalgia in 2003. It names the distress caused by environmental change to one's home while one is still in it, the grief of watching a beloved place become a different place. Change detection in remote sensing, the before and after pair and the time series, is structurally the technical apparatus of solastalgia. Glacier National Park's repeat photography, the receding coastlines of southwestern Newfoundland, the vanishing wetlands of the Mississippi delta, the burn scars accumulating across the boreal year after year, and the disappeared villages of climate displacement are all forms of this apparatus at work.
          </P>
          <P>
            Community mapping, when it works, is not only a technical practice. It becomes collective grief work. The community decides what must be remembered, what must be protected, what must be mourned, what must be repaired, and what must be transformed. The map functions as ritual. It is a way to come to terms with what is about to be lost forever, and to negotiate, collectively, what comes next.
          </P>
        </div>
        <Card pad={28} style={{
          background: "var(--plum-tint)",
          border: `1px solid color-mix(in oklch, var(--plum) 35%, transparent)`,
        }}>
          <Kicker color="var(--plum)">A short list of the memorial archive</Kicker>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {[
              "Glacier National Park, repeat photography",
              "Southwestern Newfoundland, receding coastline",
              "Mississippi delta, vanishing wetlands",
              "Boreal Canada, accumulating burn scars",
              "Climate displacement, disappeared villages",
              "Tuktoyaktuk Island, two metres per year of shoreline",
            ].map((it, i) => (
              <li key={i} style={{
                padding: "10px 0",
                borderBottom: i < 5 ? "1px solid color-mix(in oklch, var(--plum) 25%, transparent)" : "none",
                fontSize: 14.5, color: "var(--ink)",
              }}>{it}</li>
            ))}
          </ul>
        </Card>
      </div>

      <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--rule)" }}>
        <Kicker color="var(--plum)">Artists of the vanishing, two works that hold the grief</Kicker>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 6 }}>
          {[
            { who: "Jakob Kudsk Steensen", work: "Boreal Dreams — disappearing ecosystems, rendered as immersive living worlds.", href: "https://borealdreams.live/" },
            { who: "Ludwig Berger", work: "Melting Landscapes — the sound of crying glaciers and the acoustics of ice in retreat.", href: "https://ludwigberger.com/work/melting-landscapes/" },
          ].map((a, i) => (
            <a key={i} href={a.href} target="_blank" rel="noopener noreferrer" style={{
              display: "flex", flexDirection: "column", gap: 8, textDecoration: "none",
              padding: "22px 24px",
              background: "var(--plum-tint)",
              border: "1px solid color-mix(in oklch, var(--plum) 30%, transparent)",
            }}>
              <span className="serif" style={{ fontSize: 24, lineHeight: 1.1, color: "var(--ink)", fontWeight: 500, letterSpacing: "-0.01em" }}>{a.who}</span>
              <span style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)" }}>{a.work}</span>
              <span className="mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--plum)", marginTop: 6 }}>Visit the work &#8599;</span>
            </a>
          ))}
        </div>
      </div>
    </Card>
  </div>
);

// -----------------------------------------------------------------------
// PLONGÉES tab, dive selector with multimodality interlude between II and III
// -----------------------------------------------------------------------
// ─── Kept-content snippets for Permafrost ─────────────────────────────────
// These keep specific items the author wanted preserved alongside the new
// figures from the handoff: Defaults flip cards (C), Fit-for-purpose (D),
// Five Perspectives Wheel (F), Heuristic Stack Diagram (E), Counter-mapping
// table + questions (I), Operative Protocols (H), Visibility Balance (J),
// Solastalgia + artists (K), Taiwan prose with Jasanoff (L).

const KeptFivePerspectives = () => (
  <Card pad={30} style={{ marginTop: 20 }}>
    <Kicker color="var(--terra)">Also kept · the radial five-perspectives wheel</Kicker>
    <p style={{ margin: "8px 0 18px", color: "var(--ink-2)", fontSize: 14, maxWidth: 720 }}>
      Click any vertex. The same five perspectives, arranged as spokes around the central UNDRR risk hub.
    </p>
    <FivePerspectivesWheel />
  </Card>
);

const KeptHeuristicStack = () => (
  <Card pad={30} style={{ marginTop: 20 }}>
    <Kicker color="var(--terra)">Also kept · the three-layer heuristic stack</Kicker>
    <p style={{ margin: "8px 0 18px", color: "var(--ink-2)", fontSize: 14, maxWidth: 720 }}>
      The vocabulary of this stack is owed to Andreas Braun, 2021 (<em>Progress in Physical Geography</em>) and Mia Bennett and colleagues, 2022, <em>Politics of Pixels</em> (<em>Progress in Human Geography</em>). Click each layer to expand.
    </p>
    <HeuristicStackDiagram />
  </Card>
);

const KeptDefaults = () => {
  const [flipped, setFlipped] = React.useState({});
  const toggle = (i) => setFlipped(f => ({ ...f, [i]: !f[i] }));
  return (
    <Card pad={30} style={{ marginTop: 20 }}>
      <Kicker color="var(--terra)">Also kept · the defaults indictment, click any card to flip</Kicker>
      <h3 className="serif" style={{ margin: "10px 0 12px", fontSize: 26, fontWeight: 500, letterSpacing: "-0.01em", maxWidth: 760 }}>The data is fine. The defaults are the problem.</h3>
      <p style={{ margin: "0 0 22px", color: "var(--ink-2)", fontSize: 14, maxWidth: 760 }}>
        Every introductory remote-sensing course teaches a set of preprocessing defaults that, from a community-resilience perspective, ask their questions from the wrong direction. Each card names a standard default on the front and the care reading on the back.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }}>
        {DEFAULTS.map((d, i) => {
          const isFlipped = !!flipped[i];
          return (
            <button key={i} onClick={() => toggle(i)} style={{
              appearance: "none", border: "none", background: "none", padding: 0,
              cursor: "pointer", textAlign: "left", color: "var(--ink)",
              perspective: 800, fontFamily: "var(--sans)",
            }}>
              <div style={{
                position: "relative", width: "100%", aspectRatio: "0.78",
                transition: "transform 500ms cubic-bezier(.2,.7,.3,1)",
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "none",
              }}>
                <div style={cardFace({ bg: "var(--paper-2)", border: "1px solid var(--rule)" })}>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-3)", textTransform: "uppercase" }}>default {String(i + 1).padStart(2, "0")}</div>
                  <div className="serif" style={{ fontSize: 24, lineHeight: 1.1, fontWeight: 500, marginTop: 8, color: "var(--ink)" }}>{d.default}</div>
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 8 }}>
                    <Sigil color="var(--terra)" size={7} />
                    <span className="mono" style={{ fontSize: 10, color: "var(--terra)", letterSpacing: "0.10em" }}>flip</span>
                  </div>
                </div>
                <div style={{ ...cardFace({ bg: "var(--terra)", border: "none", color: "var(--paper)" }), transform: "rotateY(180deg)" }}>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "color-mix(in oklch, var(--paper) 70%, transparent)", textTransform: "uppercase" }}>care reading</div>
                  <div className="serif" style={{ fontSize: 20, lineHeight: 1.1, fontWeight: 500, marginTop: 8, color: "var(--paper)" }}>{d.answer}</div>
                  <div style={{ marginTop: 12, fontSize: 12, lineHeight: 1.45, color: "color-mix(in oklch, var(--paper) 90%, transparent)" }}>{d.body}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Card>
  );
};

const KeptFitForPurpose = () => (
  <Card pad={30} style={{ marginTop: 20 }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}>
      <div>
        <Kicker color="var(--lapis)">Also kept · fit-for-purpose modelling, the ordinary city</Kicker>
        <h3 className="serif" style={{ margin: "8px 0 0", fontSize: 24, lineHeight: 1.15, fontWeight: 500, letterSpacing: "-0.01em" }}>A model can be technically strong and still fail the decision.</h3>
        <P style={{ marginTop: 14 }}>
          A global product may be accurate enough for continental comparison and yet entirely inadequate for a Swiss small town, a Newfoundland outport, a Quebec rang, a prairie hamlet, or an Indigenous community whose morphology is underrepresented in training data.
        </P>
        <P>
          The right question for the discipline is therefore not whether the model is accurate in the abstract. The right question is accurate for whom, at what scale, for what decision, and with what consequences.
        </P>
      </div>
      <Card pad={24} style={{ background: "var(--paper-2)", border: "1px solid var(--rule)" }}>
        <div style={{ marginBottom: 16 }}>
          <span className="caps" style={{ color: "var(--ink-3)" }}>The old question</span>
          <p className="serif" style={{ margin: "4px 0 0", fontSize: 20, lineHeight: 1.3, color: "var(--ink-2)", fontStyle: "italic" }}>"{FIT_FOR_PURPOSE.old_q}"</p>
        </div>
        <Rule />
        <div style={{ marginTop: 16 }}>
          <span className="caps" style={{ color: "var(--lapis)" }}>The question we must ask</span>
          <p className="serif" style={{ margin: "4px 0 0", fontSize: 20, lineHeight: 1.3, color: "var(--ink)", fontWeight: 500 }}>"{FIT_FOR_PURPOSE.new_q}"</p>
        </div>
      </Card>
    </div>
  </Card>
);

const KeptCounterMapTable = () => (
  <Card pad={30} style={{ marginTop: 20 }}>
    <Kicker color="var(--plum)">Also kept · counter-mapping, the satellite reads edges as lines</Kicker>
    <h3 className="serif" style={{ margin: "8px 0 14px", fontSize: 24, lineHeight: 1.15, fontWeight: 500, letterSpacing: "-0.01em" }}>Lived experience reads them as membranes.</h3>
    <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", margin: "0 0 18px", maxWidth: 720 }}>
      The tradition is documented by Nancy Peluso's 1995 paper on the forests of Kalimantan, by Bernard Nietschmann's work with the Miskito of Nicaragua, and by Mac Chapin's 2005 critique of conservation NGO mapping in <em>World Watch Magazine</em>.
    </p>
    <div style={{ border: "1px solid var(--rule)" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1.2fr 1.4fr 1fr",
        background: "var(--paper-2)", borderBottom: "1px solid var(--rule)",
        padding: "10px 16px", fontFamily: "var(--mono)", fontSize: 11,
        letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-3)",
      }}>
        <span>Official LULC reads</span>
        <span style={{ color: "var(--plum)" }}>Community reads</span>
        <span>Where</span>
      </div>
      {COUNTER_MAP.map((row, i) => (
        <div key={i} style={{
          display: "grid", gridTemplateColumns: "1.2fr 1.4fr 1fr",
          padding: "12px 16px",
          borderBottom: i < COUNTER_MAP.length - 1 ? "1px solid var(--rule-soft)" : "none",
          alignItems: "baseline",
        }}>
          <span style={{ fontSize: 13, color: "var(--ink-3)", fontStyle: "italic" }}>{row.official}</span>
          <span className="serif" style={{ fontSize: 16, color: "var(--ink)" }}>{row.community}</span>
          <span className="mono" style={{ fontSize: 11, color: "var(--ink-2)", letterSpacing: "0.04em" }}>{row.where}</span>
        </div>
      ))}
    </div>
    <div style={{
      marginTop: 20, padding: "18px 22px",
      background: "var(--plum-tint)",
      border: "1px solid color-mix(in oklch, var(--plum) 30%, transparent)",
    }}>
      <span className="caps" style={{ color: "var(--plum)" }}>Counter-mapping asks</span>
      <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 14, alignItems: "baseline" }}>
        {COUNTER_MAPPING_QUESTIONS.map((q, i) => (
          <React.Fragment key={i}>
            <span className="serif" style={{ fontSize: 20, fontStyle: "italic", color: "var(--plum)", fontWeight: 500 }}>{q}</span>
            {i < COUNTER_MAPPING_QUESTIONS.length - 1 && <span style={{ color: "var(--ink-4)" }}>·</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  </Card>
);

const KeptOperativeProtocols = () => (
  <Card pad={36} style={{ marginTop: 20, background: "var(--ink)", color: "var(--paper)", border: "none" }}>
    <Kicker color="var(--ochre-2)">Also kept · Indigenous data sovereignty, the operative protocols</Kicker>
    <h3 className="serif" style={{
      margin: "8px 0 4px", fontSize: 32, fontWeight: 300, letterSpacing: "-0.014em",
      color: "var(--paper)", maxWidth: 880,
    }}>The <em style={{ color: "var(--ochre-2)" }}>Operative</em> Protocols.</h3>
    <p style={{ margin: "10px 0 24px", fontSize: 14.5, lineHeight: 1.55, color: "color-mix(in oklch, var(--paper) 80%, transparent)", maxWidth: 800 }}>
      Some things should not be mapped. Sacred sites, burial grounds, sensitive cultural locations. Non-mapping is a methodology, and a sovereign choice. Some things must be mapped, but by whom matters. SmartICE in Inuit Nunangat and the Indigenous Guardians programs are the institutional and embodied forms of what the frameworks below name in writing.
    </p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0,
      borderTop: "1px solid color-mix(in oklch, var(--paper) 22%, transparent)",
      borderLeft: "1px solid color-mix(in oklch, var(--paper) 22%, transparent)" }}>
      {GOV.map((g, i) => (
        <div key={g.name} style={{
          padding: "26px 22px",
          borderRight: "1px solid color-mix(in oklch, var(--paper) 22%, transparent)",
          borderBottom: "1px solid color-mix(in oklch, var(--paper) 22%, transparent)",
          minHeight: 240, display: "flex", flexDirection: "column", justifyContent: "space-between",
        }}>
          <div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "color-mix(in oklch, var(--paper) 55%, transparent)", textTransform: "uppercase", marginBottom: 12 }}>framework {String(i + 1).padStart(2, "0")}</div>
            <h4 className="serif" style={{ margin: 0, fontSize: 44, fontWeight: 400, letterSpacing: "-0.02em" }}>{g.name}</h4>
            <p className="mono" style={{ margin: "8px 0 0", fontSize: 11, color: "var(--ochre-2)", letterSpacing: "0.10em", textTransform: "uppercase" }}>{g.full}</p>
          </div>
          <p style={{ margin: "14px 0 0", fontSize: 13, lineHeight: 1.55, color: "color-mix(in oklch, var(--paper) 80%, transparent)" }}>{g.body}</p>
        </div>
      ))}
    </div>
  </Card>
);

const KeptVisibilityBalance = () => (
  <Card pad={30} style={{ marginTop: 20 }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 30, alignItems: "start" }}>
      <div>
        <Kicker color="var(--terra)">Also kept · visibility, protection and exposure</Kicker>
        <h3 className="serif" style={{ margin: "8px 0 0", fontSize: 24, lineHeight: 1.15, fontWeight: 500, letterSpacing: "-0.01em" }}>The same Maxar tile.</h3>
        <P style={{ marginTop: 14 }}>
          Visibility can be protective. It can be dangerous. What determines the technology's valence is governance, institutional embedding, and whether anyone can challenge an interpretation. The same Sentinel-2 scene can be read for refugee camp population estimation by UNHCR and for forced displacement targeting by a military. The same Maxar tile documented Russian atrocities in Bucha in 2022 and informs Gaza operations today.
        </P>
        <P>
          The Decentralized Damage Mapping Group, with Van Den Hoek at Oregon State, Scher at the City University of New York, and Yin at Kent State, uses Sentinel-1 SAR coherence change detection to count damaged buildings in Gaza, conservatively, and only when a building is more than ninety-nine per cent covered by damaged pixels. The October 2025 UNOSAT Comprehensive Damage Assessment, using Pléiades NEO and Maxar very high resolution optical imagery, reports approximately 198,000 damaged or destroyed structures, around 81 per cent of all structures in the territory. Planet Labs has publicly acknowledged delaying its highest resolution Gaza imagery by thirty days, in their words, to reduce the potential for misuse and abuse.
        </P>
        <Pull color="var(--terra)">The resolution of an edge is itself a political variable.</Pull>
      </div>
      <div>
        <VisibilityBalance />
        <p className="mono" style={{
          marginTop: 12, fontSize: 10.5, letterSpacing: "0.14em",
          color: "var(--ink-3)", textTransform: "uppercase", textAlign: "center",
        }}>who benefits from this visibility, who is exposed by it, who has the authority to refuse it</p>
      </div>
    </div>
  </Card>
);

const KeptSolastalgia = () => (
  <Card pad={30} style={{ marginTop: 20 }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 30 }}>
      <div>
        <Kicker color="var(--plum)">Also kept · solastalgia, change detection as the visual grammar of grief</Kicker>
        <h3 className="serif" style={{ margin: "8px 0 0", fontSize: 26, lineHeight: 1.15, fontWeight: 500, letterSpacing: "-0.014em" }}>The before-and-after pair is a memorial structure.</h3>
        <P style={{ marginTop: 14 }}>
          Glenn Albrecht coined the term solastalgia in 2003. It names the distress caused by environmental change to one's home while one is still in it. Change detection in remote sensing, the before-and-after pair and the time series, is structurally the technical apparatus of solastalgia. Glacier National Park's repeat photography, the receding coastlines of southwestern Newfoundland, the vanishing wetlands of the Mississippi delta, the burn scars accumulating across the boreal year after year, and the disappeared villages of climate displacement are all forms of this apparatus at work.
        </P>
        <P>
          Community mapping, when it works, is not only a technical practice. It becomes collective grief work. The community decides what must be remembered, what must be protected, what must be mourned, what must be repaired, and what must be transformed.
        </P>
      </div>
      <Card pad={26} style={{ background: "var(--plum-tint)", border: `1px solid color-mix(in oklch, var(--plum) 35%, transparent)` }}>
        <Kicker color="var(--plum)">A short memorial archive</Kicker>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {[
            "Glacier National Park, repeat photography",
            "Southwestern Newfoundland, receding coastline",
            "Mississippi delta, vanishing wetlands",
            "Boreal Canada, accumulating burn scars",
            "Climate displacement, disappeared villages",
            "Tuktoyaktuk Island, two metres per year of shoreline",
          ].map((it, i) => (
            <li key={i} style={{
              padding: "10px 0",
              borderBottom: i < 5 ? "1px solid color-mix(in oklch, var(--plum) 25%, transparent)" : "none",
              fontSize: 14, color: "var(--ink)",
            }}>{it}</li>
          ))}
        </ul>
      </Card>
    </div>
    <div style={{ marginTop: 24, paddingTop: 22, borderTop: "1px solid var(--rule)" }}>
      <Kicker color="var(--plum)">Artists of the vanishing, two works that hold the grief</Kicker>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 6 }}>
        {[
          { who: "Jakob Kudsk Steensen", work: "Boreal Dreams — disappearing ecosystems, rendered as immersive living worlds.", href: "https://borealdreams.live/" },
          { who: "Ludwig Berger",         work: "Melting Landscapes — the sound of crying glaciers and the acoustics of ice in retreat.", href: "https://ludwigberger.com/work/melting-landscapes/" },
        ].map((a, i) => (
          <a key={i} href={a.href} target="_blank" rel="noopener noreferrer" style={{
            display: "flex", flexDirection: "column", gap: 6, textDecoration: "none",
            padding: "20px 22px",
            background: "var(--plum-tint)",
            border: "1px solid color-mix(in oklch, var(--plum) 30%, transparent)",
          }}>
            <span className="serif" style={{ fontSize: 22, lineHeight: 1.1, color: "var(--ink)", fontWeight: 500, letterSpacing: "-0.01em" }}>{a.who}</span>
            <span style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)" }}>{a.work}</span>
            <span className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--plum)", marginTop: 4 }}>Visit the work &#8599;</span>
          </a>
        ))}
      </div>
    </div>
  </Card>
);

const KeptTaiwanProse = () => (
  <Card pad={30} style={{
    marginTop: 20, background: "var(--ochre-tint)",
    border: "1px solid color-mix(in oklch, var(--ochre) 30%, transparent)",
  }}>
    <Kicker color="var(--ochre)">Also kept · Taiwan, the last mile turns out not to be a delivery problem</Kicker>
    <p className="serif" style={{ margin: "10px 0 14px", fontSize: 22, lineHeight: 1.35, fontStyle: "italic", color: "var(--ink)" }}>
      Probability of damage and willingness to evacuate are not linearly related.
    </p>
    <P>
      At the Taiwan Typhoon Research Centre, the question that mattered was not the satellite's confidence that a typhoon would strike. The question was what households would do once the warning arrived. Trust in the source, prior false alarms, household composition, place attachment, language access, the social capital of the neighbourhood, and the practicalities of where to go and with whom all intervene between the map and the action.
    </P>
    <P>
      The framing of last mile concedes too much. The last mile is not a delivery problem in which a clear message simply needs to travel further. It is an epistemological problem in which the receiver constitutes the meaning of the message according to her own civic epistemology, in Sheila Jasanoff's term. The work of remote sensing for care, resilience, and community is not finished when the map is published. It begins there.
    </P>
  </Card>
);

// Click-to-expand interlude for the multimodality section.
const InterludeDisclosure = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <section style={{ marginTop: 36, marginBottom: 12 }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          appearance: "none", width: "100%", textAlign: "left",
          cursor: "pointer", padding: "22px 26px",
          background: open ? "var(--bg-2, var(--paper-2))" : "var(--paper)",
          border: "1px solid var(--rule)",
          borderLeft: "3px solid var(--plum)",
          color: "var(--ink)", display: "grid",
          gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center",
        }}
      >
        <div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--plum)" }}>
            Interlude · click to {open ? "collapse" : "expand"}
          </div>
          <div className="serif" style={{ marginTop: 8, fontSize: 22, lineHeight: 1.2, fontWeight: 500, letterSpacing: "-0.01em", color: "var(--ink)" }}>
            Multimodality, or, when more than one way of knowing has to share the page.
          </div>
          <div style={{ marginTop: 6, fontSize: 14, lineHeight: 1.5, color: "var(--ink-3)", maxWidth: 700 }}>
            A short detour between Movements III and IV. Why integrating community knowledge into a remote-sensing pipeline is not a data problem but a methodological one.
          </div>
        </div>
        <span className="mono" style={{
          fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
          color: "var(--plum)", padding: "8px 12px",
          border: "1px solid color-mix(in oklch, var(--plum) 40%, transparent)",
          background: "var(--plum-tint)",
        }}>{open ? "Close ▲" : "Open ▼"}</span>
      </button>
      {open && (
        <div style={{ marginTop: 0 }}>
          <section style={{ padding: "24px 28px 8px", border: "1px solid var(--rule)", borderTop: "none", background: "var(--paper)" }}>
            <p className="serif" style={{ margin: 0, fontSize: 16.5, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 820 }}>
              Multimodality should be understood in more than a technical sense. There is physical multimodality, where optical, SAR, thermal, LiDAR, passive microwave, hyperspectral, atmospheric, acoustic, or gravity-based sensors observe different properties of the same landscape. There is geometric multimodality, where satellites, aircraft, drones, fixed stations, handheld sensors, and indoor instruments observe from different distances and reference frames. There is contributory multimodality, where institutions, volunteers, residents, citizen scientists, and community observers help author the data. There is ontological multimodality, where different knowledge systems define the object of concern differently. The first two are mature technical practices. The last two are where remote sensing becomes socially and politically consequential.
            </p>
          </section>
          <MultimodalitySection />
        </div>
      )}
    </section>
  );
};

const PermaSubNav = ({ tabs, active, set, accentMap }) => {
  const [hover, setHover] = React.useState(null);
  return (
    <div style={{
      display: "grid", gridTemplateColumns: `repeat(${tabs.length}, 1fr)`,
      gap: 0, marginTop: 8, marginBottom: 16,
      border: "1px solid var(--rule)", background: "var(--paper)",
      position: "sticky", top: 56, zIndex: 5,
      borderRadius: 6, overflow: "hidden",
    }}>
      {tabs.map((t, i) => {
        const on = active === t.id;
        const hovered = hover === t.id;
        const acc = (accentMap && accentMap[t.id]) || "var(--clay)";
        const bg = on
          ? `color-mix(in oklch, ${acc} 9%, var(--paper))`
          : hovered ? "var(--paper-2)" : "var(--paper)";
        return (
          <button key={t.id}
            onClick={() => set(t.id)}
            onMouseEnter={() => setHover(t.id)}
            onMouseLeave={() => setHover(null)}
            style={{
              appearance: "none", border: "none",
              background: bg, cursor: "pointer",
              padding: "12px 12px 14px", textAlign: "center",
              borderRight: i < tabs.length - 1 ? "1px solid var(--rule)" : "none",
              borderTop: `3px solid ${on ? acc : "transparent"}`,
              color: "var(--ink)", transition: "background .2s, border-color .2s",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              minHeight: 64,
            }}>
            <div className="mono" style={{
              fontSize: 9.5, letterSpacing: "0.18em", textTransform: "uppercase",
              color: on ? acc : "var(--ink-3)", transition: "color .2s", fontWeight: 600,
            }}>{t.kicker}</div>
            <div className="serif" style={{
              fontSize: 14.5, lineHeight: 1.22, textAlign: "center",
              fontWeight: on ? 600 : 500, letterSpacing: "-0.005em", color: "var(--ink)",
            }}>{t.title}</div>
          </button>
        );
      })}
    </div>
  );
};

const PERMA_TABS = [
  { id: "m1",       kicker: "Risk",        title: "Risk is a relation" },
  { id: "m2",       kicker: "Translation", title: "Knowledge through translation" },
  { id: "m3",       kicker: "Integration", title: "Integration begins before fusion" },
  { id: "m4",       kicker: "Ethics",      title: "Ethics is internal to method" },
  { id: "practice", kicker: "Practice",    title: "From principle to practice" },
];

const TabPlongees = () => {
  const [active, setActive] = React.useState("m1");

  return (
    <div className="wrap" style={{ padding: "40px 56px 100px", "--accent": "var(--st-perma-accent-2)" }}>
      {/* Tab masthead, focused question only */}
      <header style={{ padding: "8px 0 28px" }}>
        <h1 style={{ margin: "0", fontSize: 44, lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.026em", maxWidth: 1040, color: "var(--ink)" }}>
          How does distant observation become usable knowledge, and what has to happen before that knowledge can support responsible decisions?
        </h1>
      </header>

      <PermaSubNav tabs={PERMA_TABS} active={active} set={setActive} accentMap={MOVEMENT_ACCENT} />

      {active === "m1" && (
        <React.Fragment>
          <PFMovement id="m1" num="I" name="Risk is a relation"
            lede="Most confusion about remote sensing begins when risk is treated as a thing that can be mapped directly. Risk is not a single object. It is a relation among hazard, exposure, vulnerability, and capacity." />
          <p className="serif" style={{ margin: "12px 0 0", fontSize: 16.5, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 820 }}>
            Remote sensing often contributes strongly to the first two: where water spread, where fire burned, where vegetation declined, where buildings stand, where a coastline retreated, where a settlement expanded. It can also provide useful proxies for vulnerability and capacity, such as building density, road access, heat exposure, land-cover change, or distance to services. But vulnerability and capacity are not reducible to what is visible from above. They depend on income, health, mobility, tenure, trust, language, governance, preparedness, social networks, and whether institutions are able to act. The methodological challenge is therefore not to reject remote sensing, but to place it correctly within a wider risk-reading system.
          </p>
          <PFBlock n="I" kicker="THE FOUR COMPONENTS"
            title="Remote sensing is strongest when it is clear about the part of risk it is measuring and honest about the part it cannot measure alone."
            caption="Each component, its guiding question, the strong remote-sensing contribution, and the grounded complement. The meter reads how far the satellite can carry that dimension alone.">
            <FigRiskRelation />
          </PFBlock>
          <PFBlock n="II" kicker="THE FIVE PERSPECTIVES"
            title="The satellite is one perspective among several. It is not the master view to which all other forms of knowledge report."
            lede="A defensible risk analysis must hold multiple perspectives together: the synoptic view from above, the field view from direct observation, the institutional view from planners and responders, the lived view from residents, and the political view that asks who has authority to define the problem."
            caption="These perspectives do not simply add together. They sometimes correct one another, sometimes contradict one another, and sometimes reveal that the original question was too narrow. Integration is therefore not only a technical operation. It is an act of judgment.">
            <FigPerspectives />
            <div style={{ marginTop: 20, padding: "18px 0 0", borderTop: "1px dashed var(--rule)" }}>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 14 }}>
                THE WHEEL · the same five as spokes around the central UNDRR risk hub
              </div>
              <FivePerspectivesWheel />
            </div>
          </PFBlock>
        </React.Fragment>
      )}

      {active === "m2" && (
        <React.Fragment>
          <PFMovement id="m2" num="II" name="Knowledge is produced through translation"
            lede="Remote sensing never moves directly from observation to decision. A signal becomes an image. An image becomes an indicator. An indicator becomes a class or model input. A model input becomes a risk score. A risk score may then become a decision, a budget priority, an evacuation zone, an insurance trigger, a planning restriction, or a public-facing map." />
          <p className="serif" style={{ margin: "12px 0 0", fontSize: 16.5, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 820 }}>
            Each transformation makes something more legible, but each also changes the object being represented. Compression, classification, smoothing, thresholding, interpolation, and modelling are not neutral steps. They are necessary simplifications, and necessary simplifications become dangerous when their assumptions disappear behind the authority of a finished map.
          </p>
          <PFBlock n="I" kicker="THE TRANSLATION CHAIN"
            title="A signal becomes evidence only through a chain of translation."
            caption="Step through each transformation. Many political and ethical decisions enter through ordinary technical steps, none of which announces itself as a value judgment.">
            <FigChain />
          </PFBlock>
          <PFBlock n="II" kicker="THE THREE HEURISTICS"
            title="A heuristic is not an error. A heuristic is a rule that makes analysis possible under constraint."
            lede="Remote sensing depends on heuristics because the world is too complex, too continuous, and too variable to be represented without simplification. The problem begins when a heuristic is mistaken for the world itself. A cloud mask, a shadow mask, a land-cover class, an accuracy score, a damage threshold, or a vulnerability index can all be appropriate for one question and misleading for another. Methodological rigour means asking what each simplification does, what it hides, who is affected by it, and whether the chosen abstraction fits the decision being made.">
            <FigHeuristics />
          </PFBlock>
          <KeptHeuristicStack />
          <PFBlock n="III" kicker="THE SIX MISMATCHES"
            title="Six recurring mismatches matter in applied work."
            lede="Spatial scale may not match lived scale. Temporal resolution may not match the timing of action. Classification categories may not match local meanings. Accuracy metrics may not match social consequences. Model outputs may not match institutional authority. Visibility may not match safety. These are not reasons to abandon remote sensing. They are reasons to design remote-sensing workflows around the decision context from the start."
            caption="For each mismatch, what remote sensing privileges and what often matters in practice. Reveal one row, or all six.">
            <FigMismatches />
          </PFBlock>
          <section style={{ padding: "20px 0 0" }}>
            <p className="serif" style={{ margin: 0, fontSize: 22, lineHeight: 1.35, color: "var(--ink)", fontStyle: "italic", maxWidth: 820, borderLeft: "3px solid var(--clay)", paddingLeft: 22 }}>
              The data may be good and still be misused. The problem is often not the sensor. The problem is the default question.
            </p>
            <p className="serif" style={{ margin: "16px 0 0", fontSize: 16.5, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 820 }}>
              Standard preprocessing choices should be treated as methodological decisions, not automatic cleaning. Shadow may be noise in a land-cover classifier, but shade may be life-saving infrastructure during a heat wave. Cloud may obstruct an optical image, but cloud may also indicate the rain system that matters to farmers. SAR speckle may make an image harder to read, but it can also contain information about roughness, ice texture, soil moisture, or surface disturbance. A "bare" class may contain evacuation grounds, weekly markets, schoolyards, sacred spaces, or temporary shelters. An edge may be a fence in a raster but a membrane in lived experience, with openings, timing, surveillance, negotiation, and fear. Good remote sensing does not eliminate these complexities too early. It asks whether the default serves the problem.
            </p>
          </section>
          <KeptDefaults />
          <KeptFitForPurpose />
        </React.Fragment>
      )}

      {active === "m3" && (
        <React.Fragment>
          <PFMovement id="m3" num="III" name="Integration begins before fusion"
            lede="In technical language, integration often means sensor fusion, data assimilation, or statistical updating. These methods are valuable when different data streams are measuring the same underlying variable at different scales or with different uncertainties. But in community-facing risk work, integration often begins earlier. The key question is not only how to combine data streams. The key question is who defines what the data are about." />
          <p className="serif" style={{ margin: "12px 0 0", fontSize: 16.5, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 820 }}>
            Community knowledge is not simply another noisy sensor. It may identify a different object, a different boundary, a different time scale, or a different reason the map matters. A satellite product may classify a surface as water, bare ground, shrubland, ice, wetland, or built area. Local knowledge may identify a fire-suppression pond, a trapline cabin, an ice road, a seasonal gathering place, a burial site that should not be mapped, a grazing commons, or an evacuation refuge. The disagreement is not always an error to be resolved. Sometimes the disagreement reveals that the official category is too poor for the decision being made.
          </p>
          <PFBlock n="I" kicker="THE FOUR REGISTERS"
            title="Technical fusion asks how different measurements describe the same state. Interpretive integration asks whether the state has been defined correctly."
            lede="Institutional integration asks who has authority to use the result. Ethical integration asks whether the result should circulate at all.">
            <FigRegisters />
          </PFBlock>
          <PFBlock n="II" kicker="COUNTER-MAPPING"
            title="Counter-mapping is not merely adding local labels to a remote-sensing product. It reverses the direction of the question."
            lede="Instead of asking how a community can help validate a map, counter-mapping asks what the map failed to recognize, whose categories organized the analysis, what forms of use or meaning were made invisible, and whether visibility itself creates risk. The satellite may identify where a surface changed. Counter-mapping asks what changed, for whom, by whose categories, and with what consequences.">
            <FigCounterMap />
          </PFBlock>
          <KeptCounterMapTable />
          <InterludeDisclosure />
        </React.Fragment>
      )}

      {active === "m4" && (
        <React.Fragment>
          <PFMovement id="m4" num="IV" name="Ethics is internal to method"
            lede="Ethics is not an extra paragraph added after the analysis. Ethics is built into the choice of sensor, resolution, classification scheme, training data, uncertainty threshold, release format, access control, and map audience. A technically accurate map can still expose people to harm, misrepresent a community, support coercive action, or circulate without the authority of those represented. The goal is therefore not maximum visibility. The goal is accountable visibility." />
          <PFBlock n="I" kicker="THE GOVERNING MATRIX"
            title="Some information should be public. Some information should remain under community control. Some information should not be mapped at all."
            lede="Sacred sites, burial grounds, culturally sensitive places, informal shelters, routes used for safety, and locations that could expose vulnerable people require governance before representation. Non-mapping can be a valid method. Refusal can be a valid data-governance decision.">
            <FigVisibilityMatrix />
          </PFBlock>
          <p className="serif" style={{ margin: "10px 0 0", fontSize: 16.5, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 820 }}>
            Indigenous data sovereignty frameworks make this operational. OCAP&reg; centres First Nations ownership, control, access, and possession. CARE centres collective benefit, authority to control, responsibility, and ethics. The National Inuit Strategy on Research establishes expectations for research in Inuit Nunangat. These frameworks do not ask remote sensing to become less rigorous. They ask rigour to include authority, consent, benefit, governance, and the right to define what should and should not be known through a map.
          </p>
          <KeptOperativeProtocols />
          <p className="serif" style={{ margin: "10px 0 0", fontSize: 16.5, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 820 }}>
            Visibility can protect, and visibility can endanger. The same type of image can document harm, guide humanitarian response, support legal evidence, expose environmental damage, or assist surveillance and targeting. The political meaning of resolution depends on who has access, who interprets the image, who can challenge the interpretation, and who bears the consequences. A responsible workflow therefore needs a visibility-risk review before release: who benefits from this visibility, who is exposed by it, who can refuse it, and what safeguards are required?
          </p>
          <KeptVisibilityBalance />
          <PFBlock n="II" kicker="SOLASTALGIA"
            title="Remote sensing also has an affective dimension. Change detection does not only show altered surfaces. It can show the transformation of home while people are still living there."
            lede="Solastalgia names the distress caused by environmental change to a place of belonging. Before-and-after images, time series, shoreline retreat maps, burn-scar archives, glacier photographs, disappearing wetlands, and eroding islands can become technical records of grief. Community mapping, when done well, can therefore become more than data collection. It can become a way to decide what must be remembered, what must be protected, what must be mourned, what must be repaired, and what must be transformed.">
            <FigSolastalgia />
          </PFBlock>
          <KeptSolastalgia />

          {/* Taiwan anchor sits inside Movement IV because it closes the ethics argument */}
          <section id="taiwan" style={{ padding: "56px 0 0", borderTop: "1px solid var(--rule)" }}>
            <PFMono c="var(--clay)" s={11}>the anchor · early warning in Taiwan</PFMono>
            <h2 style={{ margin: "12px 0 0", fontSize: 34, lineHeight: 1.1, fontWeight: 800, letterSpacing: "-0.022em", maxWidth: 900, color: "var(--ink)" }}>
              The last mile is not only a delivery problem. It is an interpretation problem.
            </h2>
            <p className="serif" style={{ margin: "16px 0 0", fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 760 }}>
              A warning is not complete when a probability map is published. A warning becomes action only when it is trusted, understood, situated, and made practical. Households do not respond to probability alone. They respond through prior experience, false alarms, language access, household composition, mobility, social networks, place attachment, available shelters, work obligations, caregiving responsibilities, and trust in institutions. A technically strong hazard forecast can therefore fail if it does not become meaningful and actionable inside the lives of the people receiving it.
            </p>
            <p className="serif" style={{ margin: "16px 0 0", fontSize: 19, lineHeight: 1.4, color: "var(--ink)", fontStyle: "italic", maxWidth: 760 }}>
              The question is not only whether the warning reached the household. The question is whether the household could act on it.
            </p>
          </section>
          <PFBlock n="III" kicker="THE TAIWAN CURVE" kc="var(--clay)"
            caption="Drag the probability of damage; willingness to evacuate does not track it linearly. Toggle the conditions through which a household interprets the warning.">
            <FigTaiwan />
          </PFBlock>
          <KeptTaiwanProse />
        </React.Fragment>
      )}

      {active === "practice" && (
        <React.Fragment>
          <PFMovement id="practice" num="→" name="From principle to practice"
            lede="A community-first workflow begins with the decision that needs support, not with the satellite product that happens to be available. The first step is to identify the public-good question: evacuation, adaptation, land-use planning, damage assessment, food security, infrastructure protection, insurance, conservation, or community memory." />
          <p className="serif" style={{ margin: "12px 0 0", fontSize: 16.5, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 820 }}>
            The second step is to identify who has authority and who is affected. The third step is to decide what remote sensing can contribute and what it cannot responsibly answer alone. Only then should the workflow move to data selection, preprocessing, classification, modelling, validation, interpretation, uncertainty communication, visibility review, public release, action, monitoring, and revision.
          </p>
          <PFBlock n="I" kicker="THE COMMUNITY-FIRST WORKFLOW" kc="var(--clay)"
            title="Eleven stages, beginning with the question and ending in action, monitoring, and revision.">
            <FigWorkflow />
          </PFBlock>
          <PFBlock n="II" kicker="THE VISIBILITY-RISK REVIEW" kc="var(--clay)"
            title="A rigorous project funds and evaluates the work it claims to value."
            lede="Community interpretation, translation, legal review, data-sovereignty review, accessibility, maintenance, and post-release accountability are not optional extras. They are part of the method.">
            <FigVisibilityReview />
          </PFBlock>

          {/* Closing block, only shown at the very end */}
          <section style={{ background: "var(--ink)", color: "#fff", padding: "60px 32px 72px", marginTop: 48 }}>
            <PFMono c="#8fb4d6" s={11}>closing · from seeing to judgment</PFMono>
            <h2 style={{ margin: "16px 0 0", fontSize: 32, lineHeight: 1.18, fontWeight: 700, letterSpacing: "-0.018em", maxWidth: 980, color: "#fff" }}>
              The satellite can show where water spread, where fire burned, where vegetation declined, where ice thinned, where the shoreline moved, or where buildings appeared. Judgment asks different questions: who could leave, who stayed, who was believed, who had authority, who was protected, who was exposed, what decision followed, and what kind of recovery became possible afterward.
            </h2>
            <p className="serif" style={{ margin: "20px 0 0", maxWidth: 760, fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,0.84)" }}>
              Remote sensing begins with seeing at a distance. Responsible practice begins when that distant seeing is brought back into relation with the people, institutions, and places that must live with its consequences.
            </p>
          </section>
        </React.Fragment>
      )}
    </div>
  );
};

// -----------------------------------------------------------------------
// AVENIR. Future, fragility, and the Phase 1 and Phase 2 GEE methodology.
// -----------------------------------------------------------------------
const PhaseOneMethodology = () => (
  <Card pad={40} style={{ marginTop: 32 }}>
    <Kicker color="var(--moss)">A deliverable companion to the talk</Kicker>
    <h3 className="serif" style={{
      margin: "0 0 14px", fontSize: 36, fontWeight: 400, letterSpacing: "-0.014em", maxWidth: 880,
    }}>{GEE_PHASE_1.title}</h3>
    <p className="serif" style={{
      margin: "0 0 22px", fontSize: 20, lineHeight: 1.4, color: "var(--moss)",
      fontStyle: "italic", fontWeight: 400, maxWidth: 880,
    }}>{GEE_PHASE_1.subtitle}</p>

    <p style={{ margin: "0 0 26px", fontSize: 15.5, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: 820 }}>
      {GEE_PHASE_1.premise} The phase asks five questions of any candidate site, and answers each with a structured retrieval from the Google Earth Engine data catalogue. The pipeline is reproducible, the inputs are open, and the output is a structured report that any architect, planner, community organiser, or community-led project can use as the atmospheric baseline against which to design.
    </p>

    {/* Questions */}
    <div style={{
      background: "var(--moss-tint)",
      border: "1px solid color-mix(in oklch, var(--moss) 30%, transparent)",
      padding: "22px 28px", marginBottom: 26,
    }}>
      <span className="caps" style={{ color: "var(--moss)" }}>The five questions the report answers</span>
      <ol style={{ margin: "12px 0 0", padding: "0 0 0 22px" }}>
        {GEE_PHASE_1.questions.map((q, i) => (
          <li key={i} className="serif" style={{
            fontSize: 17, lineHeight: 1.5, color: "var(--ink)", marginBottom: 6, fontStyle: "italic",
          }}>{q}</li>
        ))}
      </ol>
    </div>

    {/* Variables table */}
    <div style={{ overflow: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid var(--rule)" }}>
            {["Variable", "Source", "Spatial grain", "What the report produces"].map(h => (
              <th key={h} style={{
                padding: "10px 12px 10px 0", textAlign: "left",
                fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em",
                color: "var(--ink-3)", textTransform: "uppercase", fontWeight: 500,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {GEE_PHASE_1.variables.map((v, i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--rule-soft)" }}>
              <td style={{ padding: "14px 12px 14px 0", fontFamily: "var(--serif)", fontSize: 16, color: "var(--ink)", fontWeight: 500, verticalAlign: "top", width: "22%" }}>{v.name}</td>
              <td style={{ padding: "14px 12px 14px 0", fontSize: 13, color: "var(--ink-2)", verticalAlign: "top", width: "26%" }}>{v.source}</td>
              <td style={{ padding: "14px 12px 14px 0", fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--moss)", letterSpacing: "0.04em", verticalAlign: "top", width: "16%" }}>{v.grain}</td>
              <td style={{ padding: "14px 12px 14px 0", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5, verticalAlign: "top" }}>{v.output}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Output and status */}
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 28,
    }}>
      <Card pad={24} style={{ background: "var(--paper-2)", border: "1px solid var(--rule)" }}>
        <Kicker color="var(--moss)">The output</Kicker>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)" }}>{GEE_PHASE_1.output}</p>
      </Card>
      <Card pad={24} style={{ background: "var(--paper-2)", border: "1px solid var(--rule)" }}>
        <Kicker color="var(--terra)">Status</Kicker>
        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-2)" }}>{GEE_PHASE_1.status}</p>
      </Card>
    </div>
  </Card>
);

const PhaseTwoMethodology = () => (
  <Card pad={40} style={{ marginTop: 24 }}>
    <Kicker color="var(--lapis)">Phase 2, the building envelope</Kicker>
    <h3 className="serif" style={{
      margin: "0 0 14px", fontSize: 32, fontWeight: 400, letterSpacing: "-0.014em", maxWidth: 880,
    }}>{GEE_PHASE_2.title}</h3>
    <p className="serif" style={{
      margin: "0 0 22px", fontSize: 18, lineHeight: 1.4, color: "var(--lapis)",
      fontStyle: "italic", fontWeight: 400, maxWidth: 880,
    }}>{GEE_PHASE_2.subtitle}</p>

    <p style={{ margin: "0 0 26px", fontSize: 15, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: 820 }}>
      {GEE_PHASE_2.practical}
    </p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      <Card pad={26} style={{ background: "var(--moss-tint)", border: "1px solid color-mix(in oklch, var(--moss) 30%, transparent)" }}>
        <Kicker color="var(--moss)">Doable from open data alone</Kicker>
        <ul style={{ margin: 0, padding: "0 0 0 20px" }}>
          {GEE_PHASE_2.doable_open.map((d, i) => (
            <li key={i} style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink)", marginBottom: 8 }}>{d}</li>
          ))}
        </ul>
      </Card>
      <Card pad={26} style={{ background: "var(--terra-tint)", border: "1px solid color-mix(in oklch, var(--terra) 30%, transparent)" }}>
        <Kicker color="var(--terra)">Requires hardware, the drone job</Kicker>
        <ul style={{ margin: 0, padding: "0 0 0 20px" }}>
          {GEE_PHASE_2.needs_hardware.map((d, i) => (
            <li key={i} style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink)", marginBottom: 8 }}>{d}</li>
          ))}
        </ul>
      </Card>
    </div>
  </Card>
);

const RhizoSubTabs = ({ view, set }) => (
  <div style={{
    display: "flex", gap: 0, marginBottom: 32,
    borderBottom: "1px solid var(--rule)",
  }}>
    {[
      { id: "guide",     n: "1", label: "Field Guide to Remote Sensing & Community Mapping" },
      { id: "practices", n: "2", label: "Observations & Best Practices" },
    ].map((t) => {
      const on = view === t.id;
      return (
        <button key={t.id} onClick={() => set(t.id)} style={{
          appearance: "none", border: "none", background: "none",
          padding: "14px 26px 16px",
          cursor: "pointer", color: on ? "var(--ink)" : "var(--ink-3)",
          fontFamily: "var(--sans)", fontSize: 14, letterSpacing: "0.01em",
          fontWeight: on ? 600 : 400,
          borderBottom: on ? "2px solid var(--accent, var(--ochre))" : "2px solid transparent",
          marginBottom: -1,
          display: "inline-flex", alignItems: "baseline", gap: 9,
        }}>
          <span className="mono" style={{
            fontSize: 11, letterSpacing: "0.06em", fontWeight: 600,
            color: on ? "var(--accent, var(--ochre))" : "var(--ink-4)",
          }}>{t.n}</span>
          <span>{t.label}</span>
        </button>
      );
    })}
  </div>
);

const TabAvenir = () => {
  const [view, setView] = React.useState("guide");
  const PRACTICES = [
    { t: "Co-design from the start, including question formulation.", b: "The most common failure mode is a southern team arriving with a question, a sensor list, and a sampling design, and asking for community validation. The more useful posture is to arrive with the sensor list and ask which of the community's existing questions the data could help answer. This often produces entirely different study designs from the imported one." },
    { t: "Layered governance.", b: "Technical metadata combined with social and legal metadata, including provenance, consent status, cultural protocols, permitted reuses, withdrawal mechanisms, and benefit-sharing expectations where relevant." },
    { t: "Data sovereignty as a default condition.", b: "Three frameworks set the floor: OCAP®, Ownership, Control, Access and Possession, of the First Nations Information Governance Centre (FNIGC); the CARE Principles, Collective benefit, Authority to control, Responsibility, Ethics, of the Global Indigenous Data Alliance (GIDA); and NISR of ITK, with the Traditional Knowledge Labels (TK Labels) of Local Contexts. They are the floor of acceptable practice rather than its ceiling. Data products derived in whole or in part from community input should remain under community authority by default, with publication, redistribution, and downstream use governed by explicit agreement rather than open licensing." },
    { t: "Parallel evidentiary tracks.", b: "Not every meaningful observation should be converted into a numerical feature. A linked system, in which satellite, UAV, acoustic, field, and qualitative observations are kept analytically distinct but associable through time, place, and provenance, reduces epistemic loss and makes disagreement visible rather than disappearing it into a fused output." },
    { t: "Reciprocal and hybrid validation.", b: "Validation against lived conditions, language, and locally and culturally meaningful interpretations of change." },
  ];
  const OBSERVATIONS = [
    { t: "Communities need capacity-sharing, not capacity-building.", b: "The framing of capacity-building presumes a deficit on one side of the relationship and an abundance on the other. In the Arctic case the deficit is often on the practitioner's side: it is the southern researcher who lacks the daily ice reading, the multi-generational harvest record, the language for ten kinds of snow, the safe travel knowledge for a specific bay in a specific month. Capacity-sharing as a frame names what is actually being exchanged." },
    { t: "Communities need honest uncertainty communication.", b: "The satellite product comes with confusion matrices, geolocation residuals, classification confidence intervals, and known scene contamination rates. These should be communicated, not hidden behind a cleaned final layer. The community user is more, not less, able to integrate honest uncertainty than a downstream analyst, because the user has independent observation against which to triangulate." },
    { t: "Communities need long-term commitment, with successor planning.", b: "Research expeditions that arrive, sample, and leave are extractive in the technical sense: they take material out of a system without returning equivalent value, and they leave no infrastructure capable of continuing the observation. A useful project plan must include a successor plan describing who maintains the loggers, who continues the satellite acquisition, who trains the next cohort of analysts, and under whose institutional authority the data products live in five and ten years." },
    { t: "Communities need accountability to refusal.", b: "If a community decides that a place, a phenomenon, or a category of information should not be mapped, that decision is a methodological constraint, not a barrier to be negotiated around. Some things should not be mapped, and some that must be, only by whom matters. The constraint applies particularly strongly to sacred sites, harvest locations whose disclosure would invite commercial exploitation, and sea ice corridors whose disclosure could be weaponised by extractive industries." },
  ];
  return (
    <div className="wrap" style={{ padding: "40px 56px 100px", "--accent": "var(--st-rhizo-accent-2)" }}>
      <RhizoSubTabs view={view} set={setView} />

      {view === "guide" && <CriticalFieldGuide />}

      {view === "practices" && (<>
      <Card pad={36} style={{ marginTop: 8 }}>
        <Kicker color="var(--moss)">Highly suggested best practices</Kicker>
        <ol style={{ margin: "8px 0 0", padding: 0, listStyle: "none" }}>
          {PRACTICES.map((p, i) => (
            <li key={i} style={{
              display: "grid", gridTemplateColumns: "44px 1fr", gap: 18,
              padding: "16px 0", alignItems: "baseline",
              borderBottom: i < PRACTICES.length - 1 ? "1px solid var(--rule-soft)" : "none",
            }}>
              <span className="num" style={{ fontSize: 28, color: "var(--moss)", letterSpacing: "-0.02em", lineHeight: 1 }}>{String(i+1).padStart(2,"0")}</span>
              <div>
                <div className="serif" style={{ fontSize: 19, lineHeight: 1.25, color: "var(--ink)", fontWeight: 500 }}>{p.t}</div>
                <p style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: 820 }}>{p.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </Card>

      <Card pad={36} style={{ marginTop: 24 }}>
        <Kicker color="var(--lapis)">Some of my observations</Kicker>
        <div style={{ marginTop: 8 }}>
          {OBSERVATIONS.map((o, i) => (
            <div key={i} style={{
              padding: "16px 0",
              borderBottom: i < OBSERVATIONS.length - 1 ? "1px solid var(--rule-soft)" : "none",
            }}>
              <div className="serif" style={{ fontSize: 20, lineHeight: 1.25, color: "var(--ink)", fontWeight: 500 }}>{o.t}</div>
              <p style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: 820 }}>{o.b}</p>
            </div>
          ))}
        </div>
      </Card>
      </>)}
    </div>
  );
};

// Bookend, lifted out of TabAvenir so it sits at the bottom of the Annexes
// tab (the closing argument, alongside the bibliography).
const Bookend = () => (
  <section style={{
    marginTop: 32,
    borderTop: "1px solid var(--rule)", paddingTop: 56,
  }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
      <div>
        <Kicker color="var(--terra)">Bookend, return to the School of Athens</Kicker>
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
          margin: "24px 0 0", fontSize: 22, lineHeight: 1.45, color: "var(--ink)", fontStyle: "italic",
        }}>
          The discipline we need is not only a discipline of better seeing. It is a discipline of <em style={{ color: "var(--terra)" }}>returning</em>, returning the image to the people, the places, and the decisions that give it meaning.
        </p>
      </div>
      <div style={{
        position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "var(--ink)",
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
      }}>Final line, the closing sentence</div>
      <p className="serif" style={{
        margin: 0, fontSize: 28, lineHeight: 1.35, fontWeight: 300,
        color: "var(--paper)", letterSpacing: "-0.012em", maxWidth: 1100,
      }}>
        "Remote sensing points upward in order to look down. For care, resilience, and community, the real work begins when the image enters the messy middle, where the sky-eye view must answer to ground-up knowledge, embodied experience, and
        <em style={{ color: "var(--ochre-2)" }}> the obligations of shared life.</em>"
      </p>
    </div>
  </section>
);

// -----------------------------------------------------------------------
// ANNEXES, time budget, cuts and expands, Q&A, reading, bilingual, spine.
// -----------------------------------------------------------------------
const TabAnnexes = () => (
  <div className="wrap" style={{ padding: "40px 56px 100px", "--accent": "var(--st-floor-accent)" }}>
    <Card pad={32} style={{ marginTop: 8 }}>
      <Kicker color="var(--terra)">Further reading, the bibliography that sits behind the talk</Kicker>
      <p style={{ margin: "0 0 16px", color: "var(--ink-2)", fontSize: 13.5, lineHeight: 1.6, maxWidth: 820 }}>
        The bibliography is intentionally layered. It includes the critical remote sensing literature, the participatory and citizen science literature, the Indigenous data governance literature, the soundscape ecology literature, and the foundational sensor fusion papers. Together they trace the convergence history of multimodal remote sensing as it is described in the multimodality interlude.
      </p>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {READING.map((r, i) => (
          <li key={i} style={{
            display: "grid", gridTemplateColumns: "60px 1fr",
            padding: "10px 0", borderBottom: i < READING.length - 1 ? "1px solid var(--rule-soft)" : "none",
            gap: 16, alignItems: "baseline",
          }}>
            <span className="num" style={{ fontSize: 15, color: "var(--terra)" }}>{r.year}</span>
            <span style={{ fontSize: 14, lineHeight: 1.5, color: "var(--ink)" }}>
              <strong style={{ color: "var(--ink)" }}>{r.who}</strong>, {r.what}
            </span>
          </li>
        ))}
      </ul>
    </Card>

    {/* Bookend, the closing argument — moved here from the Field Guides tab */}
    <Bookend />
  </div>
);

Object.assign(window, { TabPlongees, TabAvenir, TabAnnexes, Bookend });
