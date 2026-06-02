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

const TabPlongees = () => (
  <div className="wrap" style={{ padding: "72px 56px 100px", "--accent": "var(--st-perma-accent-2)" }}>
    <StrataHead section="perma" />

    {/* Masthead from handoff */}
    <header style={{ padding: "44px 0 20px", borderTop: "1px solid var(--rule)" }}>
      <PFMono c="var(--sky)" s={11}>Permafrost · the layer that carries everything else</PFMono>
      <h1 style={{ margin: "16px 0 0", fontSize: 50, lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.026em", maxWidth: 1040, color: "var(--ink)" }}>
        How does distant observation become knowledge, and when does that knowledge become useful, accountable, and just?
      </h1>
      <p className="serif" style={{ margin: "22px 0 0", fontSize: 18, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 760 }}>
        Remote sensing is indispensable to contemporary risk work. It supplies scale, speed, repetition, and continuity across territories that exceed direct observation. The guide begins from a more demanding proposition. Seeing at scale is not the same as understanding in place.
      </p>
      <div style={{ marginTop: 28, borderLeft: "3px solid var(--clay)", paddingLeft: 22, maxWidth: 820 }}>
        <p className="serif" style={{ margin: 0, fontSize: 22, lineHeight: 1.35, color: "var(--ink)", fontStyle: "italic" }}>
          Remote sensing begins with seeing at a distance. Resilience begins when that distant seeing is returned to relationship.
        </p>
      </div>
    </header>

    {/* MOVEMENT I */}
    <PFMovement id="m1" num="I" name="Risk is a relation"
      lede="Most confusion about what remote sensing can and cannot do begins with treating risk as a single object rather than a relation among hazard, exposure, vulnerability and capacity." />
    <PFBlock kicker="the four components · click to compare"
      title="Remote sensing is strong on some dimensions of risk, and needs grounding on others."
      caption="Each component, its guiding question, the strong remote-sensing contribution, and the grounded complement. The meter reads how far the satellite can carry that dimension alone.">
      <FigRiskRelation />
    </PFBlock>
    <PFBlock kicker="several perspectives, held at once"
      title="The satellite is one perspective among five, not the master view to which the others report."
      caption="Five ways of seeing the same risk. Integrating them is the work of judgment, not of a filter.">
      <FigPerspectives />
    </PFBlock>
    <KeptFivePerspectives />

    {/* MOVEMENT II */}
    <PFMovement id="m2" num="II" name="Knowledge is produced through translation"
      lede="Remote sensing never moves directly from observation to decision. It passes through a sequence of transformations, and each one carries assumptions that are easy to forget once the map looks finished." />
    <PFBlock kicker="walk the chain · seven stages"
      title="A signal becomes an image, an indicator, a class, a model input, a risk score, a decision, an intervention."
      lede="At every stage something is gained, including compression, legibility, and the capacity to act across scale. At every stage something is also transformed."
      caption="Step through each transformation. Many political and ethical decisions enter through ordinary technical steps, none of which announces itself as a value judgment.">
      <FigChain />
    </PFBlock>
    <PFBlock kicker="three heuristics that govern the chain"
      title="A heuristic is not an error but a necessary simplification that becomes dangerous only when it turns invisible.">
      <FigHeuristics />
    </PFBlock>
    <KeptHeuristicStack />
    <PFBlock kicker="six recurring mismatches"
      title="Where the grammar of remote sensing meets how risk is lived, governed, and contested."
      caption="For each mismatch, what remote sensing privileges and what often matters in practice. Reveal one row, or all six.">
      <FigMismatches />
    </PFBlock>
    <KeptDefaults />
    <KeptFitForPurpose />

    {/* MOVEMENT III */}
    <PFMovement id="m3" num="III" name="Integration is a contest over who defines the problem"
      lede="Heard technically, integration suggests sensor fusion or Bayesian updating. But community knowledge is not simply another noisy sensor feeding the same estimate. It may name another state altogether, challenge the category, or contest the purpose of the map." />
    <PFBlock kicker="four registers of integration"
      title="Technical fusion asks how data streams describe the same state. The harder registers ask who defines the state.">
      <FigRegisters />
    </PFBlock>
    <PFBlock kicker="counter-mapping · an inversion"
      title="The satellite identifies where something changed. Counter-mapping asks what changed, for whom, by whose categories.">
      <FigCounterMap />
    </PFBlock>
    <KeptCounterMapTable />
    <MultimodalitySection />

    {/* MOVEMENT IV */}
    <PFMovement id="m4" num="IV" name="Ethics is internal to method"
      lede="If remote sensing produces decision-ready evidence through a chain of translations, ethics is not an addition to the technical work. The governing question is larger than accuracy. It asks who has authority over the meaning, circulation, and consequences of the data." />
    <PFBlock kicker="the governing matrix · click a quadrant"
      title="The aim is not maximum visibility. It is accountable visibility."
      lede="Three commitments converge here: objectivity that becomes answerable, attention to dual use, and data sovereignty.">
      <FigVisibilityMatrix />
    </PFBlock>
    <KeptOperativeProtocols />
    <KeptVisibilityBalance />
    <PFBlock kicker="the affective dimension · solastalgia"
      title="Remote sensing shows the changed surface. Solastalgia names what the changed surface does to belonging.">
      <FigSolastalgia />
    </PFBlock>
    <KeptSolastalgia />

    {/* TAIWAN ANCHOR */}
    <section id="taiwan" style={{ padding: "56px 0 0", borderTop: "1px solid var(--rule)" }}>
      <PFMono c="var(--clay)" s={11}>the anchor · early warning in Taiwan</PFMono>
      <h2 style={{ margin: "12px 0 0", fontSize: 34, lineHeight: 1.1, fontWeight: 800, letterSpacing: "-0.022em", maxWidth: 900, color: "var(--ink)" }}>
        The last mile is not a delivery problem. It is a meaning problem.
      </h2>
      <p className="serif" style={{ margin: "16px 0 0", fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 760 }}>
        The usual phrase suggests the warning is complete and simply needs to travel farther. But a warning becomes action only when it is interpreted, trusted, situated, and made practical. A household does not respond to probability alone.
      </p>
    </section>
    <PFBlock caption="Drag the probability of damage; willingness to evacuate does not track it linearly. Toggle the conditions through which a household interprets the warning.">
      <FigTaiwan />
    </PFBlock>
    <KeptTaiwanProse />

    {/* PRACTICE */}
    <PFMovement id="practice" num="→" name="From principle to practice"
      lede="The structure above becomes operational through a community-first workflow. The decisive design choice is where it begins: from a community question or decision point, not from the available satellite product." />
    <PFBlock kicker="the community-first workflow · expand any stage" kc="var(--clay)"
      title="Eleven stages, beginning with the question and ending in action, monitoring, and revision.">
      <FigWorkflow />
    </PFBlock>
    <PFBlock kicker="the visibility-risk review · run it on a sample" kc="var(--clay)"
      title="Simple enough to apply to any output, before it is released."
      lede="A rigorous project funds and evaluates the work it claims to value. Community interpretation, visibility review, translation, and legal review are part of the method, not optional extras.">
      <FigVisibilityReview />
    </PFBlock>

    {/* CLOSING */}
    <section style={{ background: "var(--ink)", color: "#fff", padding: "60px 32px 72px", marginTop: 48 }}>
      <PFMono c="#8fb4d6" s={11}>closing · from seeing to judgment</PFMono>
      <h2 style={{ margin: "16px 0 0", fontSize: 32, lineHeight: 1.18, fontWeight: 700, letterSpacing: "-0.018em", maxWidth: 980, color: "#fff" }}>
        The satellite can show where the water went. Judgment asks who could leave, who stayed, who was believed, who had authority, and what kind of recovery became possible afterward.
      </h2>
      <p className="serif" style={{ margin: "20px 0 0", maxWidth: 760, fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,0.84)" }}>
        Remote sensing begins with seeing at a distance. Resilience begins when that distant seeing is brought back into relationship with the people, institutions, and places that must live with its consequences.
      </p>
    </section>
  </div>
);

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
      { id: "practices", label: "Best practices, observations and bookend" },
      { id: "guide",     label: "A critical field guide to remote sensing" },
    ].map((t) => {
      const on = view === t.id;
      return (
        <button key={t.id} onClick={() => set(t.id)} style={{
          appearance: "none", border: "none", background: "none",
          padding: "14px 28px 16px",
          cursor: "pointer", color: on ? "var(--ink)" : "var(--ink-3)",
          fontFamily: "var(--sans)", fontSize: 14, letterSpacing: "0.01em",
          fontWeight: on ? 600 : 400,
          borderBottom: on ? "2px solid var(--accent, var(--ochre))" : "2px solid transparent",
          marginBottom: -1,
        }}>{t.label}</button>
      );
    })}
  </div>
);

const TabAvenir = () => {
  const [view, setView] = React.useState("practices");
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
    <div className="wrap" style={{ padding: "72px 56px 100px", "--accent": "var(--st-rhizo-accent-2)" }}>
      <StrataHead section="rhizo" />
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

      {/* Bookend, return to the School of Athens */}
      <section style={{
        marginTop: 64,
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
      </>)}
    </div>
  );
};

// -----------------------------------------------------------------------
// ANNEXES, time budget, cuts and expands, Q&A, reading, bilingual, spine.
// -----------------------------------------------------------------------
const TabAnnexes = () => (
  <div className="wrap" style={{ padding: "72px 56px 100px", "--accent": "var(--st-floor-accent)" }}>
    <StrataHead section="floor" />

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
  </div>
);

Object.assign(window, { TabPlongees, TabAvenir, TabAnnexes });
