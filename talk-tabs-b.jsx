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

    <Pull color="var(--terra)" by="Section claim, Dive I">
      {SECTION_CLAIMS.applications}
    </Pull>

    {/* RCM, Tuktoyaktuk */}
    <Card pad={36} style={{ marginTop: 12 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 36 }}>
        <div>
          <Kicker color="var(--terra)">RCM and Tuktoyaktuk, a specifically Canadian case</Kicker>
          <h3 className="serif" style={{
            margin: 0, fontSize: 30, lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.012em",
          }}>The instrument is here. The community-led partner is here. The funding is in place. One paper remains unwritten.</h3>
          <P style={{ marginTop: 18 }}>
            The RADARSAT Constellation Mission is among the strongest operational SAR systems in any national portfolio. Three identical C-band satellites at 592 kilometres altitude, twelve-day individual repeat, four-day exact constellation revisit, up to four daily acquisitions over Arctic latitudes, and the first operational deployment of compact polarimetry as a primary imaging mode. The validation record is strong. Shabanov and colleagues report a correlation of 0.996 between RCM-derived sea ice concentrations and the manual analyst charts produced by the Canadian Ice Service. Jain and colleagues report 97 per cent user accuracy and 98 per cent producer accuracy for Natural Resources Canada's wildfire perimeter algorithm on Sentinel-2 and Landsat during the 2023 fire season.
          </P>
          <P>
            Tuktoyaktuk Island, in the Beaufort Sea, in Inuvialuit territory, is eroding at approximately two metres per year. Pelly Island, nearby, can lose forty metres of coast in one summer. The community is actively confronting whether to relocate. Community-led monitoring is in place through Deva-Lynn Pokiak's time-lapse cameras and the SmartICE program. Federal funding is in place through Climate Change Preparedness in the North and the Coastal Environmental Baseline Program. The opportunity for this room is a peer-reviewed RCM-specific Tuktoyaktuk shoreline change paper, which to my knowledge does not yet exist. I name it not as a criticism of the field but as an invitation.
          </P>
        </div>
        <div style={{ display: "grid", gap: 24 }}>
          <div>
            <Kicker color="var(--ink-3)">RCM, operational record</Kicker>
            <FactList items={RCM_FACTS} color="var(--terra)" />
          </div>
          <div>
            <Kicker color="var(--ink-3)">Tuktoyaktuk, the gap</Kicker>
            <FactList items={TUK_FACTS} color="var(--lapis)" />
          </div>
        </div>
      </div>
    </Card>

    {/* Atoll diagram */}
    <Card pad={36} style={{ marginTop: 24 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 36, alignItems: "start" }}>
        <div>
          <Kicker color="var(--lapis)">Tuvalu and Kiribati, the smaller than pixel problem</Kicker>
          <h3 className="serif" style={{
            margin: 0, fontSize: 30, lineHeight: 1.1, fontWeight: 400, letterSpacing: "-0.012em",
          }}>The instrument's noise floor exceeds the thing being measured.</h3>
          <P style={{ marginTop: 16 }}>
            Tuvalu has a maximum elevation of approximately 4.5 metres. The Shuttle Radar Topography Mission digital elevation model has a vertical root mean square error of approximately 6 to 10 metres. Copernicus DEM and TanDEM-X improve this, but not enough. Tuvalu makes its legal claim for statehood preservation, for climate compensation, and for the continuity of its UNCLOS-derived exclusive economic zone, on data whose vertical noise floor is larger than the country's maximum height. Article 121 of the United Nations Convention on the Law of the Sea turns satellite imagery into evidence in legal disputes over the very existence of states.
          </P>
          <P>
            Islands are where every modelling assumption that lets remote sensing work fails at once. They are smaller than the pixel. They are surrounded by ocean dynamics that defeat coastal calibration. They are persistently cloud covered. They have no flux towers and no dense ground network. The pretraining archives of every foundation model sample continents more heavily than oceans with islands in them. The AI shift may widen the island and continent capability gap before it narrows it.
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

      <Pull color="var(--terra)" by="Section claim, Dive II">
        {SECTION_CLAIMS.integration}
      </Pull>

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
        <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 10 }}>
          {FIT_FOR_PURPOSE.ordinary.map((o, i) => (
            <Chip key={i} accent="var(--lapis)" on>{o}</Chip>
          ))}
        </div>
      </Card>

      {/* Rahm */}
      <Card pad={36} style={{ marginTop: 24, background: "var(--ink)", color: "var(--paper)", border: "none" }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 36 }}>
          <Kicker color="var(--ochre-2)">Taichung Central Park, meteorological urbanism</Kicker>
          <div>
            <p className="serif" style={{
              margin: 0, fontSize: 28, lineHeight: 1.3, fontWeight: 300, color: "var(--paper)",
            }}>
              Remote sensing makes the city's atmosphere visible at one scale.
              <span style={{ color: "var(--ochre-2)" }}> Meteorological urbanism builds at the scale the body inhabits.</span>
              Care work staffs the layer between them.
            </p>
            <p style={{ margin: "18px 0 0", fontSize: 14, lineHeight: 1.6, color: "color-mix(in oklch, var(--paper) 80%, transparent)" }}>
              Philippe Rahm, with the landscape architect Catherine Mosbach and the firm Ricky Liu and Associates, built a 67 hectare park in Taichung, Taiwan, that opened in 2020. The park is organised around three climatic paths: the coolest, the least humid, and the least polluted. The trees are selected and located by their climatic function, cooling, drying, depolluting. Rahm calls this meteorological urbanism. The Lausanne carbon dioxide map I just showed you is, in his vocabulary, a materials list. His <Fr>Histoire naturelle de l'architecture</Fr> argues for a long history of architecture as climatic design that the twentieth century forgot, and that the climate emergency now requires us to recover.
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
        Not soft governance documents. The <em style={{ color: "var(--ochre-2)" }}>operative</em> protocols.
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
    </Card>
  </div>
);

// -----------------------------------------------------------------------
// PLONGÉES tab, dive selector with multimodality interlude between II and III
// -----------------------------------------------------------------------
const TabPlongees = () => {
  const [active, setActive] = React.useState("applications");

  return (
    <div className="wrap" style={{ padding: "72px 56px 100px" }}>
      <SectionHead
        index="ii"
        eyebrow="Three deep dives, plus the interlude on multimodality, the body of the talk"
        title="Each dive sits in the messy middle."
        lede={
          <>
            Three deep dives carry the argument from the operational to the ethical. The first asks why risk and resilience modelling require more than the satellite view. The second asks what happens in the chain between signal, class, model, and decision. The third asks what we owe the people and places we observe from a distance. Between Dive II and Dive III sits an interlude on the four registers of multimodality, which is the structural bridge that turns the technical observation about Kalman filters into the ontological claim about counter-mapping. Each dive carries a load-bearing diagram.
          </>
        }
      />
      <DiveNav active={active} set={setActive} />
      {active === "applications" && <DiveApplications />}
      {active === "integration"  && (
        <>
          <DiveIntegration />
          <MultimodalitySection />
        </>
      )}
      {active === "ethics"       && <DiveEthics />}
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

const TabAvenir = () => (
  <div className="wrap" style={{ padding: "72px 56px 100px" }}>
    <SectionHead
      index="iv"
      eyebrow="Avenir, what is coming and what is at stake"
      title="Foundation models, new SAR, fragile funding, and Canada's particular moment."
      lede="The biggest single shift in the discipline since 2023 is the arrival of foundation models for Earth observation. The biggest hardware moment is in radar, with NISAR, BIOMASS, Sentinel-1C, and the commercial SAR constellations together inverting the economics of synthetic aperture radar in under a decade. The biggest political risk is funding fragility. Canada's relative stability in this turbulent year is a global asset and a global responsibility."
    />

    {/* Foundation models */}
    <Card pad={36} style={{ marginTop: 12 }}>
      <Kicker color="var(--lapis)">Slide 23, foundation models, the espérance side at amplitude</Kicker>
      <h3 className="serif" style={{
        margin: 0, fontSize: 32, fontWeight: 400, letterSpacing: "-0.012em", maxWidth: 800,
      }}>A foundation model is a heuristic engine whose failure modes are correlated and hard to characterise.</h3>

      <p style={{ margin: "16px 0 24px", fontSize: 15, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: 820 }}>
        Prithvi-EO-2.0 from NASA and IBM, released in December 2024, and TerraMind from IBM, the European Space Agency, and Forschungszentrum Jülich, released in April 2025, mark the moment at which large pretrained Earth observation models became serious production instruments. Clay, with open weights, and SatlasPretrain from the Allen Institute, complete the open landscape. The promise is democratisation. A small humanitarian team can now fine tune a damage assessment model with hundreds of labels instead of training from scratch with tens of thousands. Multimodal fusion across optical, SAR, and digital elevation becomes default. Near real-time analysis becomes operationally feasible at humanitarian timescales.
      </p>

      <div style={{
        marginTop: 14, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
        border: "1px solid var(--rule)",
      }}>
        {FOUNDATION.map((f, i) => (
          <div key={i} style={{
            padding: "22px 20px",
            borderRight: i < 3 ? "1px solid var(--rule)" : "none",
          }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--lapis)", textTransform: "uppercase" }}>model {String(i+1).padStart(2,"0")}</div>
            <div className="serif" style={{ fontSize: 24, fontWeight: 500, marginTop: 8, lineHeight: 1.1 }}>{f.name}</div>
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
          <div className="caps" style={{ color: "var(--moss)", marginBottom: 8 }}>What the shift changes</div>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-2)" }}>
            The cost of analytic capability falls by orders of magnitude. Multimodal fusion stops being a custom engineering project and becomes a default. Humanitarian organisations can iterate on damage assessment within hours of an event. Multilingual interfaces and conversational query layers open Earth observation to people who have never touched a GIS.
          </p>
        </div>
        <div>
          <div className="caps" style={{ color: "var(--terra)", marginBottom: 8 }}>What the shift does not change</div>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-2)" }}>
            A bias in pretraining propagates through every downstream task. The auditability problem deepens. The pretraining archives sample continents more heavily than oceans with islands in them. The model's confidence is highest where the discipline has most decisively decided what counts. Register four of multimodality, the ontological register, is precisely the level at which foundation models are weakest, because the entire training procedure assumes a single ontology of what the Earth is.
          </p>
        </div>
      </div>
    </Card>

    {/* SAR timeline */}
    <Card pad={36} style={{ marginTop: 24 }}>
      <Kicker color="var(--terra)">Slide 24, SAR missions, a remarkable moment</Kicker>
      <h3 className="serif" style={{ margin: 0, fontSize: 28, fontWeight: 400, letterSpacing: "-0.01em", maxWidth: 800 }}>
        The economics of synthetic aperture radar have inverted in under a decade.
      </h3>
      <p style={{ margin: "16px 0 28px", fontSize: 15, lineHeight: 1.65, color: "var(--ink-2)", maxWidth: 820 }}>
        Three space agency missions in three quarters, complemented by a constellation of commercial small SAR providers, have changed what is operationally possible. NISAR offers the first operational L band and S band dual-frequency observations with millimetre-scale deformation sensitivity. BIOMASS introduces P band from space, capable of penetrating tropical canopy to estimate forest biomass. Sentinel-1C closed the data gap left when Sentinel-1B failed in 2021. The commercial constellations, ICEYE, Capella, and Umbra, now offer sub-metre resolution at sub-daily revisit. RCM remains the operational backbone of Canadian work and sits inside this transformation as one of its pillars.
      </p>

      <div style={{ marginTop: 28, position: "relative" }}>
        <div style={{ position: "absolute", top: 26, left: 0, right: 0, height: 1, background: "var(--rule)" }} />
        <div style={{
          display: "grid", gridTemplateColumns: `repeat(${SAR_MISSIONS.length}, 1fr)`, gap: 0,
        }}>
          {SAR_MISSIONS.map((s, i) => (
            <div key={i} style={{
              padding: "0 10px", textAlign: "left",
              display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8,
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
      <Kicker color="var(--ochre-2)">Slide 25, funding fragility, the honest backdrop</Kicker>
      <h3 className="serif" style={{ margin: 0, fontSize: 36, fontWeight: 300, letterSpacing: "-0.014em", color: "var(--paper)", maxWidth: 880 }}>
        Canada's relative stability is a global asset and a global responsibility.
      </h3>
      <p style={{ margin: "16px 0 28px", fontSize: 15, lineHeight: 1.7, color: "color-mix(in oklch, var(--paper) 80%, transparent)", maxWidth: 880 }}>
        The funding environment around remote sensing has shifted significantly in the past eighteen months. The dismantling of USAID in early 2025 ended a major source of humanitarian Earth observation funding. The Famine Early Warning Systems Network, on which much of the world's food security analysis depended, went dark in February 2025. The NICFI program that provided free high-resolution tropical forest mosaics via Planet ended in January 2025. MethaneSAT was lost in orbit in June 2025. The Decadal Survey priorities at NASA are under budget pressure. The Sentinel program continues at Copernicus, but the funding envelope around it is tighter than it was. Canadian remote sensing infrastructure, in this context, occupies an unusually stable position, and that stability carries both opportunity and obligation.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 40, marginTop: 8 }}>
        <div>
          <div className="caps" style={{ color: "var(--terra-2)", marginBottom: 12 }}>Under stress, past eighteen months</div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {FRAGILITY.map((f, i) => (
              <li key={i} style={{
                display: "grid", gridTemplateColumns: "160px 140px 1fr",
                padding: "12px 0",
                borderBottom: i < FRAGILITY.length - 1 ? "1px solid color-mix(in oklch, var(--paper) 22%, transparent)" : "none",
                alignItems: "baseline", gap: 16,
              }}>
                <span className="serif" style={{ fontSize: 18, lineHeight: 1.1 }}>{f.name}</span>
                <span className="mono" style={{ fontSize: 11, letterSpacing: "0.10em", color: "var(--terra-2)", textTransform: "uppercase" }}>{f.status}</span>
                <span className="mono" style={{ fontSize: 11, color: "color-mix(in oklch, var(--paper) 65%, transparent)", letterSpacing: "0.04em" }}>{f.when} · {f.region}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="caps" style={{ color: "var(--ochre-2)", marginBottom: 12 }}>Canada, in this moment</div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {CANADA_STABILITY.map((c, i) => (
              <li key={i} style={{
                padding: "14px 0",
                borderBottom: i < CANADA_STABILITY.length - 1 ? "1px solid color-mix(in oklch, var(--paper) 22%, transparent)" : "none",
              }}>
                <span className="serif" style={{ fontSize: 18, lineHeight: 1.1 }}>{c.name}</span>
                <div style={{ fontSize: 13, color: "color-mix(in oklch, var(--paper) 80%, transparent)", marginTop: 4 }}>{c.note}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="serif" style={{
        margin: "36px 0 0", paddingTop: 28,
        borderTop: "1px solid color-mix(in oklch, var(--paper) 22%, transparent)",
        fontSize: 22, lineHeight: 1.5, fontWeight: 300, color: "var(--paper)", maxWidth: 940,
      }}>
        If you are in this room, whether as a researcher, a graduate student, a policy person, a humanitarian practitioner, an architect, or a journalist, you are part of one of the few national remote sensing communities that has both the technical capacity and the institutional posture
        <em style={{ color: "var(--ochre-2)" }}> to staff the messy middle at scale, in the next decade, with care.</em>
      </p>
    </Card>

    {/* Phase 1 and Phase 2 methodology */}
    <SectionHead
      index="iv · annexe"
      eyebrow="A deliverable that follows from the talk"
      title="The Rahmian atmospheric inheritance methodology, Phase 1 and Phase 2."
      color="var(--moss)"
      lede="The argument of the talk implies a deliverable. If meteorological urbanism builds at the scale the body inhabits, and if remote sensing makes the city's atmosphere visible at one scale, then there should be a structured pipeline that translates between them. Phase 1 produces the regional atmospheric inheritance report for any candidate site. Phase 2 produces the building envelope and microclimatic analysis for the site itself. Both are reproducible, both are open source, and both are immediately applicable to community-led design work in Canada, in Newfoundland, in Inuit Nunangat, in Saskatchewan, and elsewhere."
    />
    <PhaseOneMethodology />
    <PhaseTwoMethodology />

    {/* Bookend, return to Raphael */}
    <section style={{
      marginTop: 64,
      borderTop: "1px solid var(--rule)", paddingTop: 56,
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <Kicker color="var(--terra)">Bookend, return to the École d'Athènes</Kicker>
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
  </div>
);

// -----------------------------------------------------------------------
// ANNEXES, time budget, cuts and expands, Q&A, reading, bilingual, spine.
// -----------------------------------------------------------------------
const TabAnnexes = () => (
  <div className="wrap" style={{ padding: "72px 56px 100px" }}>
    <SectionHead
      index="v"
      eyebrow="Annexes, operations and references"
      title="The boring, useful, indispensable bits."
      lede="The time budget for a sixty minute envelope. Probable Q&A landing zones with pre-rehearsed pivots. Bilingual register notes that the French phrases in the talk are meant to land untranslated, the way an English speaker lands the word weltanschauung. Further reading. The cut and expand instructions for live timing."
    />

    {/* Budget */}
    <Card pad={36} style={{ marginTop: 8 }}>
      <Kicker color="var(--terra)">Time budget for a sixty minute envelope</Kicker>
      <p style={{ margin: "0 0 18px", color: "var(--ink-2)", fontSize: 14.5, maxWidth: 760 }}>
        The talk runs approximately 52 to 55 minutes of spoken material, leaving five to seven minutes for Q&A. The word counts below assume a measured pace of approximately 130 words per minute, slowing where indicated. If the talk runs long, the cuts column below identifies what to drop in order. If it runs short, the expands column suggests where additional depth is available.
      </p>
      <div style={{ overflow: "auto", marginTop: 12 }}>
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
                <td style={{ padding: "12px 0", fontFamily: "var(--serif)", fontSize: 16, color: "var(--ink)" }}>{b.sect}</td>
                <td style={{ padding: "12px 0", fontFamily: "var(--mono)", fontSize: 13, color: "var(--terra)" }}>{b.target}</td>
                <td style={{ padding: "12px 0", fontFamily: "var(--serif)", fontVariantNumeric: "tabular-nums", fontSize: 15, color: "var(--ink-2)" }}>{b.words.toLocaleString()}</td>
                <td style={{ padding: "12px 0", fontSize: 13.5, color: "var(--ink-2)" }}>{b.notes}</td>
              </tr>
            ))}
            <tr style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
              <td style={{ padding: "12px 0", fontFamily: "var(--serif)", fontSize: 17, fontWeight: 600 }}>Total</td>
              <td style={{ padding: "12px 0", fontFamily: "var(--mono)", fontSize: 13, color: "var(--terra)", fontWeight: 600 }}>52 to 55 plus 5 to 7 Q&A</td>
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
        <Kicker color="var(--terra)">If you run long, cut</Kicker>
        <ol style={{ margin: 0, padding: "0 0 0 24px" }}>
          {CUTS.map((c, i) => (
            <li key={i} style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--ink)", marginBottom: 10 }}>
              <strong>{c.when}.</strong> {c.how}
            </li>
          ))}
        </ol>
      </Card>
      <Card pad={28} style={{ background: "var(--moss-tint)", border: "1px solid color-mix(in oklch, var(--moss) 30%, transparent)" }}>
        <Kicker color="var(--moss)">If you run short, expand</Kicker>
        <ol style={{ margin: 0, padding: "0 0 0 24px" }}>
          {EXPANDS.map((c, i) => (
            <li key={i} style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--ink)", marginBottom: 10 }}>
              <strong>{c.when}.</strong> {c.how}
            </li>
          ))}
        </ol>
      </Card>
    </div>

    {/* Q&A */}
    <Card pad={36} style={{ marginTop: 24 }}>
      <Kicker color="var(--lapis)">Probable Q&A landing zones, pre-rehearsed pivots</Kicker>
      <p style={{ margin: "0 0 16px", color: "var(--ink-2)", fontSize: 14.5, maxWidth: 720 }}>
        Each row anticipates a likely question and identifies a structured pivot that returns the conversation to one of the talk's load-bearing frames: the messy middle, the chain of translators, the four registers of multimodality, governance protocols, and the Phase 1 methodology.
      </p>
      <div>
        {QA_LANDING.map((q, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 28,
            padding: "16px 0", borderBottom: i < QA_LANDING.length - 1 ? "1px solid var(--rule-soft)" : "none",
            alignItems: "baseline",
          }}>
            <div className="serif" style={{ fontSize: 17, lineHeight: 1.4, color: "var(--ink)" }}>
              <span className="mono" style={{ fontSize: 10, color: "var(--lapis)", letterSpacing: "0.10em", marginRight: 12 }}>Q{String(i+1).padStart(2,"0")}</span>
              {q.q}
            </div>
            <div style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{q.a}</div>
          </div>
        ))}
      </div>
    </Card>

    {/* Reading + Bilingual */}
    <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 24 }}>
      <Card pad={32}>
        <Kicker color="var(--terra)">Further reading, the bibliography that sits behind the talk</Kicker>
        <p style={{ margin: "0 0 16px", color: "var(--ink-2)", fontSize: 13.5, lineHeight: 1.6 }}>
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
      <Card pad={32}>
        <Kicker color="var(--ochre)">Bilingual register, let them land untranslated</Kicker>
        <p style={{ margin: "0 0 14px", color: "var(--ink-2)", fontSize: 13.5, lineHeight: 1.6 }}>
          The French phrases in the talk carry meanings that the closest English equivalents flatten. Marot's framing of <Fr>espérance</Fr> and <Fr>responsabilité</Fr>, in particular, belongs to a specific intellectual tradition: Bloch's principle of hope and Jonas's heuristic of fear. Letting them land in French preserves their force.
        </p>
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
        <Kicker color="var(--ochre-2)">Spine sentence, memorise</Kicker>
        <div>
          <p className="serif" style={{
            margin: 0, fontSize: 32, lineHeight: 1.3, fontWeight: 300,
            color: "var(--paper)", letterSpacing: "-0.01em",
          }}>
            "The messy middle is where care happens.<br/>
            <em style={{ color: "var(--ochre-2)" }}>Everything else is preparation or aftermath.</em>"
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
        Set in Newsreader, IBM Plex Sans, and JetBrains Mono. Prepared for CRSS 2026.
      </div>
      <div className="mono" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)" }}>
        Companion site v 2.0. Slide navigation, left and right arrow keys, inside the Slides tab.
      </div>
    </footer>
  </div>
);

Object.assign(window, { TabPlongees, TabAvenir, TabAnnexes });
