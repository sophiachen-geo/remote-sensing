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

// Defaults indictment, ten cards spread on a table. Click to flip — the
// front is the default move and an image placeholder, the back is the
// care reading. Each card is rotated a hair to feel hand-laid. The tenth
// card carries the old / new question contrast that used to sit in
// KeptFitForPurpose.
const KeptDefaults = () => {
  const [flipped, setFlipped] = React.useState({});
  const toggle = (i) => setFlipped(f => ({ ...f, [i]: !f[i] }));
  const close = (i, e) => {
    if (e) { e.stopPropagation(); e.preventDefault(); }
    setFlipped(f => ({ ...f, [i]: false }));
  };
  // Small, deterministic rotation per card to read like cards on a table
  const tilt = (i) => {
    const angles = [-2.2, 1.4, -1.0, 2.0, -1.6, 1.8, -2.4, 1.2, -1.4, 2.2];
    return angles[i % angles.length];
  };

  // Lock body scroll when any card is open on phone (modal behaviour)
  const anyOpen = Object.values(flipped).some(Boolean);
  React.useEffect(() => {
    if (anyOpen) document.body.classList.add("default-card-modal-open");
    else document.body.classList.remove("default-card-modal-open");
    return () => document.body.classList.remove("default-card-modal-open");
  }, [anyOpen]);

  return (
    <section style={{ marginTop: 4 }}>
      <div className="mono" style={{
        fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase",
        color: "var(--ink-3)", fontWeight: 500, marginBottom: 10,
      }}>tap any card to flip · click × to close</div>

      {/* Tap-anywhere backdrop closes any open card on small viewports */}
      {anyOpen && (
        <div className="default-card__backdrop"
          onClick={() => setFlipped({})}
          aria-hidden="true" />
      )}

      <div className="defaults-table">
        {DEFAULTS.map((d, i) => {
          const isFlipped = !!flipped[i];
          return (
            <div key={i}
              role="button" tabIndex={0}
              onClick={() => toggle(i)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(i); } }}
              className="default-card"
              aria-pressed={isFlipped ? "true" : "false"}
              aria-label={`Default ${String(i + 1).padStart(2, "0")} · ${d.default}`}
              style={{ transform: `rotate(${tilt(i)}deg)`, "--terra": "var(--terra)" }}>
              <div className="default-card__inner" style={{ transform: isFlipped ? "rotateY(180deg)" : "none" }}>
                {/* Front — the SVG carries its own title; no extra header */}
                <div className="default-card__face default-card__front">
                  <img src={`img/defaults/default-${String(i + 1).padStart(2, "0")}.svg`}
                    alt={d.default} />
                </div>
                {/* Back — care reading */}
                <div className="default-card__face default-card__back">
                  <button type="button"
                    className="default-card__close"
                    onClick={(e) => close(i, e)}
                    onPointerDown={(e) => e.stopPropagation()}
                    aria-label="Close card">×</button>
                  <div className="default-card__head">
                    <span className="mono" style={{ fontSize: 9.5, letterSpacing: "0.20em", color: "rgba(255,255,255,0.78)", textTransform: "uppercase" }}>
                      Care reading · {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="serif default-card__answer">{d.answer}</div>
                  <div className="default-card__body">{d.body}</div>
                  {d.oldQ && (
                    <div className="default-card__qa">
                      <div>
                        <span className="mono" style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.78)" }}>The old question</span>
                        <p className="serif" style={{ margin: "3px 0 0", fontSize: 12.5, lineHeight: 1.35, fontStyle: "italic", color: "rgba(255,255,255,0.92)" }}>"{d.oldQ}"</p>
                      </div>
                      <div style={{ marginTop: 8 }}>
                        <span className="mono" style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.92)" }}>The question we must ask</span>
                        <p className="serif" style={{ margin: "3px 0 0", fontSize: 12.5, lineHeight: 1.35, color: "#ffffff", fontWeight: 500 }}>"{d.newQ}"</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
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

// CounterMapTable — the LULC-reads-vs-community-reads table plus the
// "Counter-mapping asks" question list. Rendered inline inside § II of
// Movement III. No outer Card, no "Also kept" header.
const CounterMapTable = () => (
  <div>
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
  </div>
);

// OperativeProtocols — clean OCAP / CARE / NISR grid. Used inside § II of
// Movement IV. No outer Card wrapper, no "Also kept" header, no period
// after "Protocols" — just the three frameworks rendered against the
// shared paper background so it reads consistently with neighbouring
// figures.
const OperativeProtocols = () => (
  <div style={{
    display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0,
    border: "1px solid var(--rule)", background: "var(--paper)",
  }}>
    {GOV.map((g, i) => (
      <div key={g.name} style={{
        padding: "24px 22px",
        borderRight: i < GOV.length - 1 ? "1px solid var(--rule)" : "none",
        background: "var(--paper)",
        minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
        <div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-3)", textTransform: "uppercase", marginBottom: 10 }}>
            Framework {String(i + 1).padStart(2, "0")}
          </div>
          <h4 className="serif" style={{ margin: 0, fontSize: 28, fontWeight: 500, letterSpacing: "-0.014em", color: "var(--ink)" }}>{g.name}</h4>
          <p className="mono" style={{ margin: "6px 0 0", fontSize: 10.5, color: "var(--plum)", letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 600 }}>{g.full}</p>
        </div>
        <p style={{ margin: "14px 0 0", fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)" }}>{g.body}</p>
      </div>
    ))}
  </div>
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
  { id: "m1",       kicker: "Movement I",   title: "Interpretation" },
  { id: "m2",       kicker: "Movement II",  title: "Translation" },
  { id: "m3",       kicker: "Movement III", title: "Integration" },
  { id: "m4",       kicker: "Movement IV",  title: "Ethics" },
  { id: "practice", kicker: "Movement V",   title: "Practice" },
];

// ─── Movement I helpers ───────────────────────────────────────────────────

// Inline serif paragraph for the Movement I prose. Keeps margins consistent
// across the long body text.
const Para = ({ children, italic, style }) => (
  <p className="serif" style={{
    margin: "16px 0 0", fontSize: 16, lineHeight: 1.7, color: "var(--ink-2)",
    maxWidth: 820, fontStyle: italic ? "italic" : "normal", ...style,
  }}>{children}</p>
);

// Equation callout — the shorthand for risk.
const RiskEquation = () => (
  <div style={{
    margin: "26px 0 6px", padding: "24px 28px",
    background: "color-mix(in oklch, var(--sky) 6%, var(--paper))",
    border: "1px solid var(--rule)",
    borderLeft: "3px solid var(--sky)",
    textAlign: "center",
  }}>
    <p className="serif" style={{
      margin: "0 0 14px", fontSize: 16, lineHeight: 1.5, fontStyle: "italic",
      color: "var(--ink-2)",
    }}>
      Risk increases as hazard, exposure, and vulnerability rise. Risk decreases when capacity is robust.
    </p>
    <p className="serif" style={{
      margin: 0, fontSize: 22, lineHeight: 1.35, fontWeight: 500,
      letterSpacing: "-0.005em", color: "var(--ink)",
    }}>
      Risk &nbsp;=&nbsp; <strong style={{ fontWeight: 700 }}>Hazard</strong> &times; <strong style={{ fontWeight: 700 }}>Exposure</strong> &times; <strong style={{ fontWeight: 700 }}>Vulnerability</strong> &nbsp;&divide;&nbsp; <strong style={{ fontWeight: 700 }}>Capacity</strong>
    </p>
  </div>
);

// The four-row risk quartet reference table.
const RiskQuartetTable = () => {
  const ROWS = [
    {
      k: "Hazard",        q: "What threatens?",
      rs: "Flood extent, fire scar, heat anomaly, drought signal, landslide susceptibility, shoreline retreat",
      gr: "Local thresholds, remembered extremes, field evidence, historical events",
    },
    {
      k: "Exposure",      q: "Who or what is in the way?",
      rs: "Buildings, roads, crops, settlements, infrastructure, land use, hazard overlap",
      gr: "Occupancy, seasonal use, informal structures, daily movement, actual presence",
    },
    {
      k: "Vulnerability", q: "Who is most harmed, and why?",
      rs: "Proxy indicators, spatial correlation, hazard overlap, built-form indicators, access constraints",
      gr: "Health, mobility, age, tenure, income, language, trust, social networks, legal status",
    },
    {
      k: "Capacity",      q: "Who can prepare, act, refuse, respond, or recover?",
      rs: "Access routes, service locations, distance to shelters, road redundancy, visible infrastructure",
      gr: "Leadership, mutual aid, evacuation options, institutional readiness, local knowledge, trust, resources",
    },
  ];
  return (
    <div style={{ margin: "28px 0 8px", border: "1px solid var(--rule)", overflow: "auto" }}>
      <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 760, fontSize: 13.5, lineHeight: 1.5 }}>
        <thead>
          <tr style={{ background: "var(--paper-2)", borderBottom: "1.5px solid var(--rule)" }}>
            {["Component", "Guiding question", "Strong remote-sensing contribution", "Grounded complement"].map((h, i) => (
              <th key={i} className="mono" style={{
                padding: "12px 16px", textAlign: "left",
                fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--ink-3)", fontWeight: 600, verticalAlign: "bottom",
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, i) => (
            <tr key={i} style={{ borderBottom: i < ROWS.length - 1 ? "1px solid var(--rule-soft)" : "none" }}>
              <td style={{ padding: "14px 16px", fontFamily: "var(--serif)", fontSize: 17, fontWeight: 500, color: "var(--navy)", verticalAlign: "top", width: "14%" }}>{row.k}</td>
              <td style={{ padding: "14px 16px", color: "var(--ink)", verticalAlign: "top", width: "22%", fontStyle: "italic" }}>{row.q}</td>
              <td style={{ padding: "14px 16px", color: "var(--ink-2)", verticalAlign: "top", width: "32%" }}>
                <span className="mono" style={{ fontSize: 9.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--sky)", display: "block", marginBottom: 4, fontWeight: 600 }}>Sky</span>
                {row.rs}
              </td>
              <td style={{ padding: "14px 16px", color: "var(--ink-2)", verticalAlign: "top", width: "32%" }}>
                <span className="mono" style={{ fontSize: 9.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--clay)", display: "block", marginBottom: 4, fontWeight: 600 }}>Ground</span>
                {row.gr}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Single perspective card for § II.
const PerspectiveCard = ({ n, philosopher, name, subtitle, color, children }) => (
  <article style={{
    display: "grid", gridTemplateColumns: "auto 1fr", gap: 32,
    padding: "30px 0", borderTop: "1px solid var(--rule)",
  }}>
    <div style={{ minWidth: 120 }}>
      <div className="mono" style={{
        fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase",
        color, fontWeight: 600, marginBottom: 8,
      }}>{n} · {philosopher}</div>
      <div style={{
        width: 64, height: 64, borderRadius: "50%",
        background: color, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--serif)", fontSize: 26, fontStyle: "italic",
        fontWeight: 500, letterSpacing: "-0.01em",
        boxShadow: "0 4px 14px rgba(31, 42, 64, 0.18)",
      }}>{n}</div>
    </div>
    <div>
      <h4 className="serif" style={{
        margin: 0, fontSize: 24, fontWeight: 500, lineHeight: 1.18,
        letterSpacing: "-0.012em", color: "var(--ink)",
      }}>{name}</h4>
      <div className="serif" style={{
        marginTop: 4, fontSize: 15.5, lineHeight: 1.35,
        color, fontStyle: "italic", fontWeight: 500,
      }}>{subtitle}</div>
      <p className="serif" style={{
        margin: "14px 0 0", fontSize: 15.5, lineHeight: 1.7, color: "var(--ink-2)",
        maxWidth: 820,
      }}>{children}</p>
    </div>
  </article>
);

const TabPlongees = () => {
  const [active, setActive] = React.useState("m1");

  return (
    <div className="wrap" style={{ padding: "40px 56px 100px", "--accent": "var(--st-perma-accent-2)" }}>
      {/* Tab masthead — lead question + five-stage framing */}
      <header style={{ padding: "8px 0 24px", maxWidth: 900 }}>
        <h1 style={{ margin: "0", fontSize: 36, lineHeight: 1.12, fontWeight: 800, letterSpacing: "-0.024em", color: "var(--ink)" }}>
          How can distant observation be transformed into usable knowledge, and what prerequisites must be met before such knowledge can inform responsible decision-making?
        </h1>
        <p className="serif" style={{ margin: "20px 0 0", maxWidth: 820, fontSize: 16.5, lineHeight: 1.65, color: "var(--ink-2)" }}>
          This section addresses the question through five interconnected stages, each of which is essential to the overall process. Remote sensing does not progress directly from image acquisition to actionable outcomes. Initially, the problem must be interpreted accurately. Subsequently, observations are translated into usable evidence, which is then integrated with other forms of knowledge. The circulation and application of this evidence must be governed by ethical considerations. Only after these steps can remote sensing become a practical and responsible workflow.
        </p>
      </header>

      <PermaSubNav tabs={PERMA_TABS} active={active} set={setActive} accentMap={MOVEMENT_ACCENT} />

      {active === "m1" && (
        <React.Fragment>
          <PFMovement id="m1" num="I" name="Interpretation"
            lede="The initial task is interpretive rather than technical: it involves defining the problem and clarifying the specific role of remote sensing in addressing it. Risk serves as an illustrative example, demonstrating the importance of this step. Events such as floods, fires, heat waves, landslides, or shoreline retreat do not constitute disasters by default. A hazard becomes a disaster only when it interacts with factors such as exposure, vulnerability, and limited capacity. While remote sensing can effectively identify hazards and exposed assets, and occasionally provide proxies for vulnerability and capacity, it cannot independently capture the full complexity of risk. Interpretation situates satellite observations within the broader context of physical processes, social conditions, institutional capacity, and lived consequences." />

          {/* § I — THE FOUR COMPONENTS OF RISK */}
          <PFBlock n="I" kicker="THE FOUR COMPONENTS OF RISK"
            title="Risk is a relational concept."
            lede="While hazards exist independently, disasters arise through the interaction of hazards, exposure, vulnerability, and capacity.">
            <Para>
              Disaster risk differs from disaster itself. Disaster risk denotes the potential for losses prior to their occurrence, such as a flood before displacement, a wildfire before evacuation, an earthquake before structural collapse, or a heat wave before fatalities. According to the UNDRR Sendai Framework, disaster risk is defined as the potential loss of life, injury, or damage to assets within a specified period, determined by the interplay of hazard, exposure, vulnerability, and capacity.
            </Para>

            <Para>
              This distinction is significant. A <strong style={{ color: "var(--ink)", fontWeight: 700 }}>hazard</strong> refers to a process, phenomenon, or human activity with the potential to cause harm. <strong style={{ color: "var(--ink)", fontWeight: 700 }}>Exposure</strong> encompasses people, infrastructure, housing, production capacities, and other tangible assets situated in areas prone to hazards. <strong style={{ color: "var(--ink)", fontWeight: 700 }}>Vulnerability</strong> refers to the physical, social, economic, and environmental conditions that heighten susceptibility to harm. <strong style={{ color: "var(--ink)", fontWeight: 700 }}>Capacity</strong> encompasses the strengths, resources, institutions, knowledge, skills, leadership, and social relationships that enable risk management and reduction.
            </Para>

            <Para>
              A disaster results from the interaction of these components in a manner that significantly disrupts the functioning of a community or society. Consequently, the term &ldquo;natural disaster&rdquo; is misleading. While hazards may be natural, anthropogenic, or socionatural, disasters are not caused by hazards alone. For example, an earthquake does not cause fatalities in isolation; factors such as collapsing buildings, unsafe land-use decisions, inadequate enforcement, poverty, insufficient preparedness, weak institutions, and unequal access to protection transform seismic events into widespread harm.
            </Para>

            <Para style={{ marginTop: 22 }}>A concise summary is as follows:</Para>

            <RiskEquation />

            <Para>
              This expression is not a precise mathematical equation but rather a pedagogical tool. Official terminology does not mandate that risk be calculated using this specific formula. The essential point is relational: identical hazards can yield markedly different outcomes depending on the nature of exposure, the degree of vulnerability, and the capacity to prepare, respond, adapt, and recover.
            </Para>

            <Para>
              Remote sensing is a valuable tool within this framework, though its effectiveness varies across different components. It is most effective for assessing hazard and exposure, such as flood extent, burn scars, heat anomalies, landslide zones, shoreline retreat, buildings, roads, crops, settlements, and other visible infrastructure. Remote sensing can also provide proxies for vulnerability and capacity, including building density, road access, distance to services, land-cover change, heat exposure, or spatial overlap with hazard zones. However, vulnerability and capacity cannot be fully determined from imagery alone, as they depend on factors such as health, mobility, tenure, income, language, trust, governance, preparedness, leadership, mutual aid, social relationships, and the ability of individuals to act upon warnings.
            </Para>

            <div style={{ marginTop: 36 }}>
              <div className="mono" style={{
                fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--ink-3)", fontWeight: 600, marginBottom: 6,
              }}>The risk quartet</div>
              <RiskQuartetTable />
            </div>

            <Para style={{ marginTop: 28 }}>
              Therefore, the distinction is not simply that satellites measure hazard and exposure while communities assess vulnerability and capacity. Rather, remote sensing advances certain aspects of the risk relationship more effectively than others. Its greatest value is realized when analyses explicitly identify what is measured directly, what is approximated through proxies, and what requires grounding in social, experiential, and institutional knowledge.
            </Para>
          </PFBlock>

          {/* § II — THE FIVE PERSPECTIVES */}
          <PFBlock n="II" kicker="THE FIVE PERSPECTIVES"
            title="No single perspective can carry the whole problem.">
            <Para>
              The following framework is not intended as a definitive theory of risk, knowledge, or remote sensing. It is a working interpretation: a way of remembering that no single perspective can carry the whole problem. A robust risk analysis must bring several forms of evidence into relation without assuming that they observe the same phenomenon, hold the same authority, or answer the same question.
            </Para>
            <Para>
              The satellite is one perspective among several. It is not the master view to which all other forms of knowledge report. It provides scale, repetition, comparison, and pattern recognition. But risk is not only pattern. Risk also involves measurement at the site of action, the use and memory of place, lived exposure, and institutional authority. These perspectives do not simply accumulate. They may confirm, correct, contradict, or expose the limitations of the initial question. Integration is therefore not only a technical process. It is an exercise in judgment.
            </Para>

            <Para style={{ marginTop: 22 }}>The five names are used as conceptual tools.</Para>
            <ul style={{ margin: "10px 0 0", padding: "0 0 0 18px", maxWidth: 820 }}>
              <li className="serif" style={{ margin: "6px 0", fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)" }}>
                <strong style={{ color: "var(--sky)", fontWeight: 700 }}>Plato</strong> names the sky-eye: abstraction, distance, pattern, and anticipation.
              </li>
              <li className="serif" style={{ margin: "6px 0", fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)" }}>
                <strong style={{ color: "var(--teal)", fontWeight: 700 }}>Tycho</strong> names the ground sensor: calibrated observation, local measurement, and instrumental precision.
              </li>
              <li className="serif" style={{ margin: "6px 0", fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)" }}>
                <strong style={{ color: "var(--clay)", fontWeight: 700 }}>Community</strong> names place-based knowledge: use, memory, access, trust, refusal, and shared meaning.
              </li>
              <li className="serif" style={{ margin: "6px 0", fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)" }}>
                <strong style={{ color: "var(--amber)", fontWeight: 700 }}>Aristotle</strong> names embodied judgment: what exposure feels like in a body, in a moment, under actual conditions.
              </li>
              <li className="serif" style={{ margin: "6px 0", fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)" }}>
                <strong style={{ color: "var(--plum)", fontWeight: 700 }}>Machiavelli</strong> names the institution: mandate, jurisdiction, authority, budget, liability, and the conversion of evidence into action.
              </li>
            </ul>

            <Para>
              These names should not be read as proof that one philosophical tradition explains remote sensing. They are mnemonic figures. Their purpose is to make the differences among perspectives memorable: the view from above, the measurement at a point, the knowledge of use and meaning, the body that experiences exposure, and the institution that can act.
            </Para>
            <Para>
              Collectively, the five perspectives ask a central question: what does each mode of observation reveal, and what does each overlook?
            </Para>

            {/* Figure 02 — interactive wheel/panel */}
            <div style={{ marginTop: 32 }}>
              <div className="mono" style={{
                fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--sky)", fontWeight: 600, marginBottom: 4,
              }}>Figure 02 · click any perspective</div>
              <h4 className="serif" style={{ margin: "0 0 14px", fontSize: 22, lineHeight: 1.18, fontWeight: 500, letterSpacing: "-0.01em", color: "var(--ink)" }}>
                Five perspectives on risk
              </h4>
              <FigPerspectivesMerged />
            </div>

            {/* Diagnostic questions */}
            <div style={{ marginTop: 28, padding: "20px 22px", background: "var(--paper-2)", border: "1px solid var(--rule)", borderLeft: "3px solid var(--sky)" }}>
              <Para style={{ marginTop: 0 }}>
                The figure should be read diagnostically, not hierarchically. Each perspective contributes something necessary, but each also fails in a specific way when treated as complete.
              </Para>
              <ul style={{ margin: "14px 0 0", padding: "0 0 0 18px", listStyle: "none" }}>
                {[
                  ["PLATO",       "var(--sky)",   "what pattern becomes visible from distance?"],
                  ["TYCHO",       "var(--teal)",  "what measurement anchors or challenges that pattern on the ground?"],
                  ["COMMUNITY",   "var(--clay)",  "what does this place mean, how is it used, who has authority, and what should not be mapped?"],
                  ["ARISTOTLE",   "var(--amber)", "how does the risk arrive in a body, through movement, fear, fatigue, breath, heat, smoke, water, or delay?"],
                  ["MACHIAVELLI", "var(--plum)",  "what institution can act on the evidence, with what mandate, budget, legal threshold, and accountability?"],
                ].map(([who, color, q]) => (
                  <li key={who} className="serif" style={{ margin: "10px 0", fontSize: 15.5, lineHeight: 1.55, color: "var(--ink-2)", display: "grid", gridTemplateColumns: "110px 1fr", gap: 16, alignItems: "baseline" }}>
                    <span className="mono" style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color, fontWeight: 600 }}>{who} asks</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              <Para style={{ marginTop: 14 }}>
                The point is not to make all five perspectives agree. The point is to know what each perspective contributes, where each one fails, and what kind of judgment is needed when they do not align.
              </Para>
            </div>

            {/* The five perspective cards — full prose per philosopher */}
            <div style={{ marginTop: 36 }}>
              <PerspectiveCard n="01" philosopher="PLATO"
                name="Sky-eye"
                subtitle="Abstraction, distance, pattern, anticipation"
                color="var(--sky)">
                The sky-eye perspective contributes scale, repetition, synoptic comparison, and change detection. It is the perspective of satellites, aircraft, orbital platforms, image archives, and large-area models. It sees flood extent, wildfire scars, shoreline erosion, land-cover change, vegetation stress, building exposure, road interruption, heat patterns, and damage signatures. Its strength is pattern: the capacity to notice what no single observer on the ground could see alone. Its danger is overextension: treating visible change as complete knowledge. For decisions made at the rhythm and grain of daily life, the orbit is often too far. The image can show that something changed; it cannot, by itself, explain what that change means, who is affected, or what should be done.
              </PerspectiveCard>

              <PerspectiveCard n="02" philosopher="TYCHO"
                name="Ground sensor"
                subtitle="Calibration at the scale of local action"
                color="var(--teal)">
                The ground-sensor perspective provides in-situ measurement, threshold determination, calibration, and validation in contexts inaccessible to satellites. This perspective includes rain gauges, river-stage sensors, soil-moisture probes, piezometers, tide gauges, air-quality stations, weather masts, stream-temperature loggers, and snow-depth measurements. It captures rain totals at specific stations, river heights at bridges, groundwater levels in wells, tides at gauges, smoke concentrations near schools, and soil moisture in particular fields. Its principal strength is spatial precision. Its limitation is restricted coverage. A sensor delivers reliable data at its location but remains silent elsewhere. Ground sensors therefore do not replace satellites. They anchor, test, and occasionally challenge the broader patterns identified by satellite observation.
              </PerspectiveCard>

              <PerspectiveCard n="03" philosopher="COMMUNITY"
                name="Place-based knowledge"
                subtitle="Use, memory, access, trust, refusal"
                color="var(--clay)">
                The community perspective contributes knowledge of how a place is used, by whom, at what time, under what history, with what trust, and with what forms of care or refusal. This perspective is informed by interviews, walkthroughs, mapping workshops, council meetings, local observers, mutual-aid networks, elders, land users, residents, and people who know how the area actually works. It identifies safe routes, seasonal access, trusted warning channels, sacred and protected sites, commons and shared rights, previous false alarms, local thresholds, informal shelters, gathering places, and definitions of recovery. Its primary strength is contextual relevance. Its hazard is dismissal: community knowledge is often treated as anecdotal unless the project formally grants it authority. A map that affects a community but is not interpretable, contestable, or co-authored by that community lacks social legitimacy. The community perspective is not simply a source of validation after the map has been produced. It can change the categories of the map before analysis begins.
              </PerspectiveCard>

              <PerspectiveCard n="04" philosopher="ARISTOTLE"
                name="Embodied judgment"
                subtitle="Exposure as lived experience"
                color="var(--amber)">
                The embodied perspective addresses the lived scale of exposure: the lower atmosphere and the human body's experience of heat, smoke, water, traffic, slope, fear, delay, fatigue, and uncertainty. This perspective centers on individuals navigating risk, rather than merely appearing within a risk layer. It interprets heat as exhaustion, slope as burden, distance as impossibility, evacuation as fear or refusal, smoke as respiratory difficulty, water level as danger, traffic as stress, and climate change as altered daily movement. Its principal strength is direct experience of exposure. Its limitation is that much of this experience leaves no detectable spectral signature. Individuals may face risks that satellites cannot directly observe. This is why the Q-TRAK example matters. For carbon dioxide as a health concern rather than a climate issue, satellites often measure the wrong scale of air. The body is not peripheral to the map. The body is the site where consequences arrive.
              </PerspectiveCard>

              <PerspectiveCard n="05" philosopher="MACHIAVELLI"
                name="Institutional power"
                subtitle="Mandate, jurisdiction, decision"
                color="var(--plum)">
                The institutional perspective provides the authority to act. This perspective encompasses statutes, mandates, plans, budgets, liability, insurance regulations, emergency powers, land-use policies, aid programs, and infrastructure responsibilities. It identifies evacuation orders, insurance triggers, disaster declarations, planning restrictions, aid allocation, camp recognition, land claims, service mandates, and adaptation funding. Its principal strength is governability: the ability to translate evidence into enforceable action. Its limitation lies in potential abstraction from lived experience. Institutions may make decisions before those most affected are consulted, or they may lack the mandate to act even when evidence is compelling. The structure of authority often determines who is heard, what qualifies as evidence, and which actions are possible before new data arrives.
              </PerspectiveCard>
            </div>

            {/* Synthesis */}
            <div style={{ marginTop: 36, paddingTop: 28, borderTop: "1px solid var(--rule)" }}>
              <div className="mono" style={{
                fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--ink-3)", fontWeight: 600, marginBottom: 4,
              }}>Synthesis</div>
              <h4 className="serif" style={{ margin: "0 0 14px", fontSize: 22, lineHeight: 1.18, fontWeight: 500, letterSpacing: "-0.01em", color: "var(--ink)" }}>
                Why five perspectives are necessary
              </h4>
              <Para style={{ marginTop: 0 }}>
                The purpose of the five perspectives is not balance for its own sake. The purpose is diagnostic. Risk analyses often fail when a single perspective is mistaken for the whole issue.
              </Para>
              <ul style={{ margin: "12px 0 0", padding: "0 0 0 18px", maxWidth: 820 }}>
                {[
                  "A satellite pattern may be mistaken for lived exposure.",
                  "A gauge reading may be mistaken for regional truth.",
                  "A community account may be dismissed as anecdote.",
                  "A bodily experience may be treated as subjective noise.",
                  "An institutional category may be treated as objective reality.",
                ].map((s, i) => (
                  <li key={i} className="serif" style={{ margin: "4px 0", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)" }}>{s}</li>
                ))}
              </ul>
              <Para>
                A stronger workflow assigns each perspective to its area of strength and highlights the resulting gaps. The sky-eye identifies patterns. The ground sensor verifies measurements. The community perspective defines use, meaning, access, and refusal. The embodied perspective situates exposure within the body. The institutional perspective clarifies who can act and under what authority.
              </Para>
              <Para>
                Only by integrating these perspectives can distant observation be transformed into usable, accountable, and contextually grounded knowledge.
              </Para>
            </div>
          </PFBlock>

          {/* § III — THE PUBLIC TRUST CURVE (moved here from Movement IV) */}
          <PFBlock n="III" kicker="THE PUBLIC TRUST CURVE" kc="var(--clay)"
            title="The last mile is not only a delivery problem. It is an interpretation problem."
            lede="A warning is not complete when a probability map is published. A warning becomes action only when it is trusted, understood, situated, and made practical. Households do not respond to probability alone. They respond through prior experience, false alarms, language access, household composition, mobility, social networks, place attachment, available shelters, work obligations, caregiving responsibilities, and trust in institutions.">
            <FigTaiwan />
            <p className="serif" style={{ margin: "20px 0 0", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)", fontStyle: "italic", maxWidth: 820 }}>
              A household interprets probability through prior false alarms, trust in the source, place attachment, language access, evacuation cost, and care obligations. A warning becomes actionable only when it enters what <strong style={{ color: "var(--ink)", fontStyle: "normal", fontWeight: 700 }}>Sheila Jasanoff</strong> calls a civic epistemology: a community's settled expectations about whose knowledge is trustworthy and which institutions deserve confidence. Field framing draws on previous work at the Taiwan Typhoon Research Centre (2017).
            </p>
          </PFBlock>
        </React.Fragment>
      )}

      {active === "m2" && (
        <React.Fragment>
          <PFMovement id="m2" num="II" name="Translation"
            lede="After the problem has been interpreted, observations must be translated into actionable forms. Signals are converted into images, indices, classes, model inputs, risk scores, maps, and occasionally direct decisions. Each transformation enhances utility but also introduces simplification. For example, clouds are masked, shadows are removed, pixels are classified, edges are smoothed, and mixed surfaces are assigned to discrete categories. Frequently, uncertainty is concealed behind visually clear outputs. Translation examines the processes that occur between sensing and knowing, treating preprocessing, classification, modeling, interpolation, and visualization as interpretive acts rather than neutral technical procedures." />
          <PFBlock n="I" kicker="THE TRANSLATION CHAIN"
            title="A signal becomes evidence only through a chain of translation."
            caption="Step through each transformation. Many political and ethical decisions enter through ordinary technical steps, none of which announces itself as a value judgment.">
            <FigChain />
          </PFBlock>
          <PFBlock n="II" kicker="THE THREE HEURISTICS"
            title="A heuristic is not an error. A heuristic is a rule that makes analysis possible under constraint."
            lede="Remote sensing depends on heuristics because the world is too complex, too continuous, and too variable to be represented without simplification. The problem begins when a heuristic is mistaken for the world itself. A cloud mask, a shadow mask, a land-cover class, an accuracy score, a damage threshold, or a vulnerability index can all be appropriate for one question and misleading for another. Methodological rigour means asking what each simplification does, what it hides, who is affected by it, and whether the chosen abstraction fits the decision being made.">
            <FigHeuristicsMerged />
          </PFBlock>
          <PFBlock n="III" kicker="THE SIX MISMATCHES"
            title="Higher spatial resolution does not necessarily yield a more relational or contextually meaningful understanding."
            lede="The following mismatches do not constitute a universal theory of remote-sensing failure. Rather, they represent a practical diagnosis that has emerged from my work across diverse applied projects, including disaster risk, community mapping, land-cover change, air-quality exposure, agricultural insurance, coastal transformation, and water governance. Repeatedly, the same pattern emerges: although the data may be technically robust, the resulting product can still fail to inform decisions if the scale, timing, classification, validation method, claim to objectivity, or visibility regime does not correspond to the realities on the ground.">
            <Para>
              These mismatches do not indicate an inherent weakness in remote sensing. Instead, they highlight areas where remote sensing methodologies require more careful design.
            </Para>
            <div style={{ marginTop: 22 }}>
              <FigMismatches />
            </div>
            <Para style={{ marginTop: 22 }}>
              The purpose of this table is not to argue against the pursuit of improved data. Enhanced spatial resolution, increased temporal frequency, refined classification, advanced models, and rigorous validation are often essential. However, improvements within the sensor system alone do not automatically address the challenges associated with serving the public good. For example, a high-resolution image may still fail to capture lived exposure; frequent revisit intervals may still miss critical moments for action; precise class labels may still misrepresent a location; high accuracy scores may obscure the social consequences of error; and public maps may inadvertently reveal information that should remain protected.
            </Para>
            <p className="serif" style={{ margin: "20px 0 0", padding: "16px 22px", fontSize: 18, lineHeight: 1.45, fontStyle: "italic", color: "var(--ink)", borderLeft: "3px solid var(--clay)", background: "var(--paper-2)", maxWidth: 820 }}>
              The practical lesson I draw from these cases is that the core issue often lies not with the sensor itself, but with the underlying assumptions embedded in the workflow.
            </p>
          </PFBlock>

          {/* § IV — THE DEFAULTS INDICTMENT */}
          <PFBlock n="IV" kicker="THE DEFAULTS INDICTMENT"
            title="The data itself is not inherently problematic. It is the default settings and assumptions that often introduce politics into the image."
            lede="Introductory remote-sensing workflows instill valuable technical practices, such as removing shadow, masking cloud, smoothing speckle, assigning one class per pixel, suppressing edges, discarding uncertainty, resampling layers to a single grid, removing outliers, and refining the image to facilitate classification, modeling, or communication. These procedures are not inherently flawed and are often necessary. The problem arises when these steps are regarded as neutral, automatic, or universally applicable.">
            <Para>
              From the perspective of community resilience, certain default preprocessing choices may frame the problem inappropriately. A decision that enhances classifier performance can simultaneously eliminate conditions that are most significant to local populations. For instance, while shadow may be considered noise in a land-cover model, shade can serve as critical infrastructure during heat waves. Clouds may obstruct optical imagery, yet they also represent moisture in motion. SAR speckle may complicate image interpretation, but it can convey information about surface roughness, ice texture, soil moisture, inundation, or disturbance. Bare ground, which may appear empty in a residual class, can function as an evacuation point, market, schoolyard, sacred space, temporary shelter, or gathering place. Similarly, an edge may be rendered as a line in a raster but may function as a membrane in lived experience, characterized by openings, timing, surveillance, negotiation, fear, or refusal.
            </Para>
            <p className="serif" style={{ margin: "20px 0 0", padding: "16px 22px", fontSize: 18, lineHeight: 1.45, fontStyle: "italic", color: "var(--ink)", borderLeft: "3px solid var(--clay)", background: "var(--paper-2)", maxWidth: 820 }}>
              The key lesson is not to abandon preprocessing, but rather to ensure that preprocessing choices are responsive to the specific research question.
            </p>
            <Para>
              Each card identifies a standard default and considers how the same operation might be interpreted from a care-oriented perspective.
            </Para>
            <div style={{ marginTop: 22 }}>
              <KeptDefaults />
            </div>
            <Para style={{ marginTop: 8 }}>
              These cards do not constitute prescriptive rules; rather, they serve as prompts for methodological judgment. A project may still require masking clouds, filtering speckle, classifying bare ground, resampling layers, removing outliers, or reporting accuracy. However, each methodological choice should be justified in relation to the decision context, the affected populations, and the types of knowledge that remote-sensing imagery alone cannot convey.
            </Para>
            <Para italic>
              The central question, therefore, is not merely whether the output is clean, accurate, or visually persuasive. Rather, it is whether the chosen method preserves what is most significant for the people, institutions, and places impacted by the decision.
            </Para>
          </PFBlock>
        </React.Fragment>
      )}

      {active === "m3" && (
        <React.Fragment>
          <PFMovement id="m3" num="III" name="Integration"
            lede="Following translation, remote-sensing evidence must be integrated with other forms of knowledge. Integration extends beyond sensor fusion or data assimilation. In community-oriented contexts, it involves relating satellite-derived evidence to field measurements, local observations, institutional records, planning documents, lived experiences, and, in some cases, Indigenous or community-defined knowledge systems. The central challenge is not solely the technical combination of datasets, but also determining who holds the authority to define the meaning and relevance of the data." />
          <PFBlock n="I" kicker="THE FOUR REGISTERS"
            title="Technical fusion asks how different measurements describe the same state. Interpretive integration asks whether the state has been defined correctly."
            lede="Institutional integration asks who has authority to use the result. Ethical integration asks whether the result should circulate at all.">
            <FigRegisters />
          </PFBlock>
          <PFBlock n="II" kicker="COUNTER-MAPPING"
            title="Counter-mapping is not merely adding local labels to a remote-sensing product. It reverses the direction of the question."
            lede="Instead of asking how a community can help validate a map, counter-mapping asks what the map failed to recognize, whose categories organized the analysis, what forms of use or meaning were made invisible, and whether visibility itself creates risk."
            caption="The satellite reads edges as lines. Lived experience reads them as membranes. The tradition is documented by Nancy Peluso's 1995 paper on the forests of Kalimantan, by Bernard Nietschmann's work with the Miskito of Nicaragua, and by Mac Chapin's 2005 critique of conservation NGO mapping in World Watch Magazine.">
            <FigCounterMap />
            <div style={{ marginTop: 24, paddingTop: 22, borderTop: "1px solid var(--rule)" }}>
              <CounterMapTable />
            </div>
          </PFBlock>
        </React.Fragment>
      )}

      {active === "m4" && (
        <React.Fragment>
          <PFMovement id="m4" num="IV" name="Ethics"
            lede="When remote-sensing evidence begins to influence decision-making, ethical considerations become integral to the methodology. Choices regarding resolution, access, uncertainty, classification, visibility, and data release all constitute aspects of governance. Even technically accurate maps can potentially expose individuals to harm, misrepresent communities, support coercive actions, or be disseminated without appropriate authorization. This stage addresses questions regarding who benefits from increased visibility, who may be exposed, who has the right to refuse participation, and what safeguards are necessary before a map is made public or operational." />

          <PFBlock n="I" kicker="THE GOVERNING MATRIX"
            title="Some information should be public. Some information should remain under community control. Some information should not be mapped at all."
            lede="Sacred sites, burial grounds, culturally sensitive places, informal shelters, routes used for safety, and locations that could expose vulnerable people require governance before representation. Non-mapping can be a valid method. Refusal can be a valid data-governance decision."
            caption="The same Sentinel-2 archive serves UNHCR and a military. The same Maxar tile runs from Bucha in 2022 to Gaza, where an October 2025 UNOSAT assessment counted some 198,000 damaged structures, roughly 81 per cent of the total. Planet Labs has at times imposed a thirty-day delay on Gaza imagery. Visibility is power; the task is to govern it.">
            <FigVisibilityMatrix />
            <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--rule)" }}>
              <p className="serif" style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 820 }}>
                Visibility can be protective. It can be dangerous. What determines the technology's valence is governance, institutional embedding, and whether anyone can challenge an interpretation. The same Sentinel-2 scene can be read for refugee camp population estimation by UNHCR and for forced displacement targeting by a military. The same Maxar tile documented Russian atrocities in Bucha in 2022 and informs Gaza operations today.
              </p>
              <p className="serif" style={{ margin: "14px 0 0", fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 820 }}>
                The Decentralized Damage Mapping Group, with Van Den Hoek at Oregon State, Scher at the City University of New York, and Yin at Kent State, uses Sentinel-1 SAR coherence change detection to count damaged buildings in Gaza, conservatively, and only when a building is more than ninety-nine per cent covered by damaged pixels. The October 2025 UNOSAT Comprehensive Damage Assessment, using Pléiades NEO and Maxar very high resolution optical imagery, reports approximately 198,000 damaged or destroyed structures, around 81 per cent of all structures in the territory. Planet Labs has publicly acknowledged delaying its highest resolution Gaza imagery by thirty days, in their words, to reduce the potential for misuse and abuse.
              </p>
              <p className="serif" style={{ margin: "20px 0 0", fontSize: 22, lineHeight: 1.35, fontStyle: "italic", color: "var(--ink)", maxWidth: 820, borderLeft: "3px solid var(--plum)", paddingLeft: 22 }}>
                The resolution of an edge is itself a political variable.
              </p>
              <div style={{ marginTop: 24 }}>
                <VisibilityBalance />
                <p className="mono" style={{
                  marginTop: 12, fontSize: 10.5, letterSpacing: "0.14em",
                  color: "var(--ink-3)", textTransform: "uppercase", textAlign: "center",
                }}>who benefits from this visibility, who is exposed by it, who has the authority to refuse it</p>
              </div>
            </div>
          </PFBlock>

          <PFBlock n="II" kicker="THE OPERATIVE PROTOCOLS"
            title="Indigenous data sovereignty has operative frameworks, not sentiment."
            lede="OCAP®, CARE, and NISR with the Traditional Knowledge Labels do not ask remote sensing to become less rigorous. They ask rigour to include authority, consent, benefit, governance, and the right to define what should and should not be known through a map. Some things should not be mapped. Sacred sites, burial grounds, sensitive cultural locations. Non-mapping is a methodology, and a sovereign choice."
            caption="FAIR is one data virtue. Sovereignty is another. For sacred places, harvesting areas, and community vulnerability, openness alone is not a defensible default.">
            <OperativeProtocols />
          </PFBlock>
        </React.Fragment>
      )}

      {active === "practice" && (
        <React.Fragment>
          <PFMovement id="practice" num="V" name="Practice"
            lede="From principle to workflow. Practice is where the previous four movements become operational. Interpretation defines the problem. Translation turns observations into usable evidence. Integration brings remote sensing into relation with other forms of knowledge. Ethics governs what should be visible, shared, withheld, or refused. Practice asks how those commitments are built into an actual project from the beginning." />

          <Para>
            A responsible remote-sensing project should not begin with the satellite product that happens to be available. It should begin with the decision, question, or public-good problem that needs support. The first task is to identify what is at stake, who is affected, who has authority, what kind of evidence is needed, what kind of evidence would be harmful, and what action the work is supposed to make possible.
          </Para>
          <Para>The practical question is therefore not only: what can be mapped?</Para>
          <Para italic>
            It is also: who needs this knowledge, who defines the problem, who interprets the result, who governs the data, who can act on the evidence, and who remains accountable after the map is released?
          </Para>

          {/* INTERLUDE · Multimodality as method
              Distinct tinted callout. No § number — interludes break the
              numbered sequence rather than continue it. */}
          <section style={{
            marginTop: 36, marginBottom: 18,
            padding: "30px 32px 32px",
            background: "color-mix(in oklch, var(--clay) 6%, var(--paper))",
            border: "1px solid color-mix(in oklch, var(--clay) 22%, var(--rule))",
            borderLeft: "4px solid var(--clay)",
            borderRadius: 4,
          }}>
            <div className="mono" style={{
              fontSize: 11.5, letterSpacing: "0.24em", textTransform: "uppercase",
              color: "var(--clay)", fontWeight: 700, marginBottom: 12,
            }}>Interlude · Multimodality as method</div>
            <h3 className="serif" style={{
              margin: 0, fontSize: 26, lineHeight: 1.18, fontWeight: 500,
              letterSpacing: "-0.012em", color: "var(--ink)", maxWidth: 820,
            }}>
              Multimodality is not only physical. It is also contributory and ontological.
            </h3>
            <p className="serif" style={{ margin: "14px 0 0", fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: 820 }}>
              Multimodality is often treated as a technical matter: combining optical imagery, SAR, LiDAR, thermal data, passive microwave, hyperspectral data, atmospheric measurements, acoustic data, or gravity-based observations. This kind of physical multimodality is essential. Different sensors interact with the world differently, and no single sensor sees everything.
            </p>
            <p className="serif" style={{ margin: "16px 0 0", fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: 820 }}>
              But practice requires a broader understanding of multimodality.
            </p>
            <ul style={{ margin: "12px 0 0", padding: "0 0 0 18px", maxWidth: 820 }}>
              <li className="serif" style={{ margin: "8px 0", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)" }}>
                There is <strong style={{ color: "var(--ink)", fontWeight: 700 }}>physical multimodality</strong>: different wavelengths and sensing principles observing different properties of the same landscape.
              </li>
              <li className="serif" style={{ margin: "8px 0", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)" }}>
                There is <strong style={{ color: "var(--ink)", fontWeight: 700 }}>geometric multimodality</strong>: satellites, aircraft, drones, fixed stations, handheld instruments, indoor sensors, and body-altitude measurements observing from different distances and reference frames.
              </li>
              <li className="serif" style={{ margin: "8px 0", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)" }}>
                There is <strong style={{ color: "var(--clay)", fontWeight: 700 }}>contributory multimodality</strong>: institutions, researchers, volunteers, residents, citizen scientists, community observers, and local organizations helping produce or interpret data.
              </li>
              <li className="serif" style={{ margin: "8px 0", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)" }}>
                There is <strong style={{ color: "var(--clay)", fontWeight: 700 }}>ontological multimodality</strong>: different knowledge systems defining the object of concern differently.
              </li>
            </ul>
            <p className="serif" style={{ margin: "18px 0 0", fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: 820 }}>
              The first two are established technical practices. The last two are where remote sensing becomes socially and politically consequential. A community observation is not simply another variable to insert into a model. It may identify a different object, a different boundary, a different timescale, a different harm, or a different reason the map matters. This is why integration cannot be reduced to data fusion. Sometimes the task is not to combine measurements of the same thing. Sometimes the task is to recognize that the "thing" itself has been defined too narrowly.
            </p>
            <p className="serif" style={{ margin: "22px 0 0", padding: "16px 22px", fontSize: 18, lineHeight: 1.45, fontStyle: "italic", color: "var(--ink)", borderLeft: "3px solid var(--clay)", background: "rgba(255,255,255,0.6)", maxWidth: 820 }}>
              The bridge from technical multimodality to ontological multimodality is the bridge from better sensing to better judgment.
            </p>
            <div style={{ marginTop: 22 }}>
              <MultimodalitySection />
            </div>
          </section>

          {/* § I — THE PRINCIPLE: KEEP EVIDENCE CONNECTED, BUT NOT COLLAPSED */}
          <PFBlock n="I" kicker="THE PRINCIPLE" kc="var(--clay)"
            title="Keep evidence connected, but not collapsed."
            lede="A rigorous workflow does not force every kind of knowledge into a single grid, score, or model. Some evidence can be fused. Some evidence should be compared. Some evidence should remain parallel but linked through place, time, provenance, and interpretation.">
            <Para>
              A satellite-derived flood layer, a river gauge, a household interview, an evacuation route, a municipal plan, an elder's memory of past water levels, and a photograph of a washed-out road may all belong to the same analysis, but they do not all have to become the same kind of data.
            </Para>
            <p className="serif" style={{ margin: "20px 0 6px", padding: "16px 22px", fontSize: 18, lineHeight: 1.45, fontStyle: "italic", color: "var(--ink)", borderLeft: "3px solid var(--clay)", background: "var(--paper-2)", maxWidth: 820 }}>
              The goal is not forced synthesis. The goal is accountable association.
            </p>
            <Para>
              This means preserving the differences among evidence types rather than erasing them too early. <strong style={{ color: "var(--ink)", fontWeight: 700 }}>Remote-sensing products</strong> should remain traceable to their sensors, dates, resolutions, methods, and uncertainties. <strong style={{ color: "var(--ink)", fontWeight: 700 }}>Field measurements</strong> should remain traceable to instruments, locations, thresholds, and maintenance conditions. <strong style={{ color: "var(--ink)", fontWeight: 700 }}>Community knowledge</strong> should remain traceable to consent, context, authority, permitted use, and possible refusal. <strong style={{ color: "var(--ink)", fontWeight: 700 }}>Institutional records</strong> should remain traceable to mandates, legal effects, planning instruments, and decision responsibilities.
            </Para>
            <Para>
              A useful system makes agreement visible, but also makes disagreement visible. Disagreement is not always a failure. It may be the moment when the project discovers that the satellite, the institution, and the community are not actually talking about the same object.
            </Para>
          </PFBlock>

          {/* § II — THE COMMUNITY-FIRST WORKFLOW */}
          <PFBlock n="II" kicker="THE COMMUNITY-FIRST WORKFLOW" kc="var(--clay)"
            title="A community-first workflow begins with the question, not the dataset."
            lede="Eleven stages, beginning with the public-good problem and ending in monitoring, maintenance, and revision.">
            <FigWorkflow />
          </PFBlock>

          {/* § III — THE VISIBILITY-RISK REVIEW */}
          <PFBlock n="III" kicker="THE VISIBILITY-RISK REVIEW" kc="var(--clay)"
            title="Visibility is not automatically good. A map can protect, but it can also expose."
            lede="A high-resolution image can support humanitarian response, document harm, guide adaptation, or strengthen community claims. The same image can also assist surveillance, targeting, extraction, displacement, or unwanted exposure of sensitive sites. Every project therefore needs a visibility-risk review before release.">
            <FigVisibilityReview />
            <div style={{ marginTop: 22 }}>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-3)", fontWeight: 600, marginBottom: 10 }}>The review should ask</div>
              <ul style={{ margin: 0, padding: "0 0 0 18px", maxWidth: 820 }}>
                {[
                  "Who benefits from this visibility?",
                  "Who may be exposed or harmed by it?",
                  "Who has authority to approve, restrict, or refuse publication?",
                  "Does the map reveal sensitive cultural, ecological, household, infrastructural, or safety-related information?",
                  "Could the output be misused by actors outside the intended audience?",
                  "What uncertainty might be misunderstood as certainty?",
                  "What safeguards, access controls, aggregation, masking, delay, or non-mapping decisions are required?",
                  "What obligations continue after release?",
                ].map((q, i) => (
                  <li key={i} className="serif" style={{ margin: "6px 0", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)", fontStyle: "italic" }}>{q}</li>
                ))}
              </ul>
            </div>
            <Para>
              This review is not separate from technical quality. It is part of technical quality. A map that is accurate but unsafe is not a successful output. A map that is open but violates data sovereignty is not a responsible output. A map that is useful to outsiders but unusable or harmful to the people represented has failed the public-good test.
            </Para>
          </PFBlock>

          {/* § IV — OPERATIONAL STANDARDS */}
          <PFBlock n="IV" kicker="OPERATIONAL STANDARDS" kc="var(--clay)"
            title="A rigorous project funds and evaluates the work it claims to value."
            lede="Community interpretation, translation, legal review, data-sovereignty review, accessibility, maintenance, and post-release accountability are not optional extras. They are part of the method. Five standards follow from this.">
            <ol style={{ margin: "12px 0 0", padding: 0, listStyle: "none" }}>
              {[
                ["First",  "Co-design begins at question formulation.",          "The project should not arrive with a completed research design and ask for local validation. It should ask which community, institutional, or public-good questions remote sensing can help answer."],
                ["Second", "Governance must be layered.",                        "Technical metadata is not enough. A responsible dataset also needs social, legal, and ethical metadata: provenance, consent, cultural protocols, permitted uses, withdrawal mechanisms, benefit-sharing expectations, and access conditions."],
                ["Third",  "Data sovereignty is a default condition.",           "Where Indigenous or community-defined knowledge is involved. OCAP®, CARE, NISR, and Traditional Knowledge Labels are not decorative references. They define minimum expectations for authority, consent, responsibility, and control."],
                ["Fourth", "Validation must be reciprocal.",                     "Community observations should not be the only evidence expected to prove itself. Sensor products must also be tested against lived conditions, local categories, language, field knowledge, and culturally meaningful interpretations of change."],
                ["Fifth",  "The project must have a future.",                    "Research that arrives, extracts, publishes, and leaves is not a durable public-good practice. A useful project identifies who maintains the data, who updates the workflow, who trains the next users, who hosts the outputs, and who remains accountable in five or ten years."],
              ].map(([ord, head, body], i) => (
                <li key={i} style={{
                  display: "grid", gridTemplateColumns: "auto 1fr", gap: 22,
                  padding: "18px 0",
                  borderBottom: i < 4 ? "1px solid var(--rule)" : "none",
                  alignItems: "baseline",
                }}>
                  <div style={{
                    fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.18em",
                    textTransform: "uppercase", color: "var(--clay)", fontWeight: 600,
                    minWidth: 78,
                  }}>{ord}</div>
                  <div>
                    <div className="serif" style={{ fontSize: 19, lineHeight: 1.22, fontWeight: 500, letterSpacing: "-0.008em", color: "var(--ink)" }}>{head}</div>
                    <p className="serif" style={{ margin: "6px 0 0", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 760 }}>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </PFBlock>

          {/* Closing block */}
          <section style={{ background: "var(--ink)", color: "#fff", padding: "60px 32px 72px", marginTop: 48 }}>
            <PFMono c="#8fb4d6" s={11}>closing · from seeing to relation</PFMono>
            <h2 className="serif" style={{ margin: "16px 0 0", fontSize: 30, lineHeight: 1.22, fontWeight: 500, letterSpacing: "-0.014em", maxWidth: 980, color: "#fff" }}>
              Remote sensing can show where water spread, where fire burned, where vegetation declined, where ice thinned, where the shoreline moved, or where buildings appeared. Practice asks different questions: who needed the knowledge, who interpreted it, who could act, who was exposed, who had authority, what decision followed, and what changed afterward.
            </h2>
            <p className="serif" style={{ margin: "20px 0 0", maxWidth: 760, fontSize: 17, lineHeight: 1.55, color: "rgba(255,255,255,0.84)", fontStyle: "italic" }}>
              Responsible practice begins when distant observation is returned to relation: with the people, institutions, and places that must live with its consequences.
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

    {/* Solastalgia — moved here from Movement IV. Change detection as the
        affective register of remote sensing. */}
    <section style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--rule)" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap", marginBottom: 12 }}>
        <span className="mono" style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--plum)", fontWeight: 600 }}>§ II</span>
        <span aria-hidden="true" style={{ width: 1, height: 12, background: "var(--rule)" }} />
        <span className="mono" style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-3)", fontWeight: 500 }}>SOLASTALGIA</span>
      </div>
      <h3 className="serif" style={{ margin: 0, fontSize: 26, lineHeight: 1.18, fontWeight: 500, letterSpacing: "-0.012em", color: "var(--ink)", maxWidth: 820 }}>
        Change detection as the visual grammar of grief.
      </h3>
      <p className="serif" style={{ margin: "14px 0 0", maxWidth: 760, color: "var(--ink-2)", fontSize: 16, lineHeight: 1.6 }}>
        Remote sensing has an affective dimension that the technical vocabulary tends to miss. Change detection does not only show altered surfaces. It can show the transformation of home while people are still living there. Solastalgia names the distress caused by environmental change to a place of belonging. The before-and-after pair and the time series are, structurally, the technical apparatus of solastalgia.
      </p>
      <div style={{ marginTop: 22 }}>
        <FigSolastalgia />
      </div>
      <div style={{ marginTop: 22 }}>
        <KeptSolastalgia />
      </div>
    </section>

    {/* Bookend, the closing argument — moved here from the Field Guides tab */}
    <Bookend />
  </div>
);

Object.assign(window, { TabPlongees, TabAvenir, TabAnnexes, Bookend });
