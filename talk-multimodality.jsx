// =======================================================================
// Multimodality Registers, the four-register argument.
// Renders inside Plongées, between Dive II (Integration) and Dive III
// (Ethics). The structural bridge that turns the technical Kalman-filter
// observation into the ontological counter-mapping claim.
// =======================================================================

const RegistersOverview = () => (
  <div style={{
    display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
    border: "1px solid var(--rule)", marginTop: 18,
  }}>
    {MULTIMODALITY_REGISTERS.map((r, i) => (
      <div key={r.n} style={{
        padding: "20px 20px 22px",
        borderRight: i < 3 ? "1px solid var(--rule)" : "none",
        borderTop: `4px solid ${r.color}`,
        background: i % 2 === 0 ? "var(--paper)" : "var(--paper-2)",
        minHeight: 200,
      }}>
        <div className="num" style={{
          fontSize: 36, color: r.color, lineHeight: 1, letterSpacing: "-0.02em",
        }}>{r.n}</div>
        <div className="mono" style={{
          marginTop: 8, fontSize: 10, color: r.color, letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}>register {r.n}</div>
        <h4 className="serif" style={{
          margin: "10px 0 6px", fontSize: 26, lineHeight: 1.1, fontWeight: 500,
          letterSpacing: "-0.015em",
        }}>{r.name}</h4>
        <p style={{
          margin: 0, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.45, fontStyle: "italic",
        }}>{r.domain}</p>
        <div className="mono" style={{
          marginTop: 14, paddingTop: 12, borderTop: "1px solid var(--rule-soft)",
          fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.06em",
        }}>{r.maturity}</div>
      </div>
    ))}
  </div>
);

const RegisterDeep = ({ r }) => (
  <Card pad={36} style={{
    marginTop: 16, borderLeft: `5px solid ${r.color}`,
  }}>
    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 36 }}>
      <div>
        <div className="num" style={{
          fontSize: 64, color: r.color, lineHeight: 0.9, letterSpacing: "-0.025em",
        }}>{r.n}</div>
        <h4 className="serif" style={{
          margin: "8px 0 4px", fontSize: 36, lineHeight: 1.0, fontWeight: 400,
          letterSpacing: "-0.018em",
        }}>{r.name}</h4>
        <p style={{
          margin: "8px 0 0", fontSize: 14, color: r.color, fontStyle: "italic",
        }}>{r.domain}</p>
        <div style={{
          marginTop: 20, paddingTop: 14, borderTop: "1px solid var(--rule-soft)",
        }}>
          <div className="caps" style={{ color: "var(--ink-3)", marginBottom: 6 }}>Maturity</div>
          <p style={{ margin: 0, fontSize: 13, color: "var(--ink-2)" }}>{r.maturity}</p>
        </div>
        <div style={{ marginTop: 14 }}>
          <div className="caps" style={{ color: "var(--ink-3)", marginBottom: 6 }}>Formalised in</div>
          <p style={{ margin: 0, fontSize: 13, color: "var(--ink-2)" }}>{r.formalised}</p>
        </div>
      </div>
      <div>
        <div className="caps" style={{ color: r.color, marginBottom: 8 }}>Operation</div>
        <p className="serif" style={{
          margin: "0 0 18px", fontSize: 19, lineHeight: 1.4, color: "var(--ink)",
          fontStyle: "italic", fontWeight: 400,
        }}>{r.operation}</p>

        <div className="caps" style={{ color: "var(--ink-3)", marginBottom: 10 }}>Examples</div>
        <p style={{
          margin: "0 0 22px", fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)",
        }}>{r.examples}</p>

        <div className="caps" style={{ color: "var(--ink-3)", marginBottom: 10 }}>What this register actually does</div>
        <p style={{
          margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--ink)",
        }}>{r.body}</p>

        <div style={{
          marginTop: 22, padding: "16px 18px",
          background: `color-mix(in oklch, ${r.color} 8%, var(--paper))`,
          borderLeft: `3px solid ${r.color}`,
        }}>
          <div className="caps" style={{ color: r.color, marginBottom: 6 }}>The limit of this register</div>
          <p style={{
            margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "var(--ink)",
            fontStyle: "italic",
          }}>{r.limit}</p>
        </div>
      </div>
    </div>
  </Card>
);

const HistoryTimeline = () => (
  <div style={{
    border: "1px solid var(--rule)",
    background: "var(--paper)",
  }}>
    {MULTIMODALITY_HISTORY.map((h, i) => (
      <div key={i} style={{
        display: "grid", gridTemplateColumns: "100px 280px 1fr",
        padding: "14px 22px",
        borderBottom: i < MULTIMODALITY_HISTORY.length - 1 ? "1px solid var(--rule-soft)" : "none",
        gap: 24, alignItems: "baseline",
        background: i % 2 === 0 ? "var(--paper)" : "var(--paper-2)",
      }}>
        <span className="num" style={{
          fontSize: 22, color: "var(--terra)", letterSpacing: "-0.01em",
        }}>{h.era}</span>
        <span className="serif" style={{
          fontSize: 17, color: "var(--ink)", lineHeight: 1.25, fontWeight: 500,
        }}>{h.stream}</span>
        <span style={{
          fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55,
        }}>{h.note}</span>
      </div>
    ))}
  </div>
);

const OntologyPrinciples = () => (
  <div style={{ display: "grid", gap: 16 }}>
    {ONTOLOGY_PRINCIPLES.map((p, i) => (
      <Card key={p.n} pad={28} style={{ borderLeft: "5px solid var(--terra)" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "60px 1fr", gap: 22, alignItems: "baseline",
        }}>
          <span className="num" style={{
            fontSize: 32, color: "var(--terra)", lineHeight: 1, letterSpacing: "-0.01em",
          }}>{p.n}</span>
          <div>
            <h4 className="serif" style={{
              margin: 0, fontSize: 24, lineHeight: 1.2, fontWeight: 500,
              letterSpacing: "-0.012em",
            }}>{p.title}</h4>
            <p style={{
              margin: "10px 0 0", fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)",
            }}>{p.body}</p>
          </div>
        </div>
      </Card>
    ))}
  </div>
);

const OperationalExamplesGrid = () => {
  const [active, setActive] = React.useState(OPERATIONAL_EXAMPLES[0].name);
  const ex = OPERATIONAL_EXAMPLES.find(e => e.name === active) || OPERATIONAL_EXAMPLES[0];

  return (
    <div style={{
      display: "grid", gridTemplateColumns: "300px 1fr", gap: 28,
      border: "1px solid var(--rule)", background: "var(--paper)",
    }}>
      <nav style={{
        borderRight: "1px solid var(--rule)",
        background: "var(--paper-2)",
      }}>
        {OPERATIONAL_EXAMPLES.map((e) => {
          const on = e.name === active;
          return (
            <button key={e.name} onClick={() => setActive(e.name)}
              style={{
                appearance: "none", border: "none",
                background: on ? "var(--paper)" : "transparent",
                width: "100%", textAlign: "left",
                padding: "14px 18px",
                borderBottom: "1px solid var(--rule-soft)",
                borderLeft: on ? `4px solid ${accentVar(e.accent)}` : "4px solid transparent",
                cursor: "pointer",
                color: "var(--ink)",
              }}>
              <div className="serif" style={{
                fontSize: 16, fontWeight: on ? 600 : 400, lineHeight: 1.2,
              }}>{e.name}</div>
              <div className="mono" style={{
                marginTop: 4, fontSize: 10, color: "var(--ink-3)",
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}>{e.domain}</div>
            </button>
          );
        })}
      </nav>
      <div style={{ padding: "26px 28px 30px" }}>
        <Pill tone={ex.accent}>operational example</Pill>
        <h4 className="serif" style={{
          margin: "10px 0 6px", fontSize: 28, fontWeight: 500, lineHeight: 1.15,
        }}>{ex.name}</h4>
        <p className="mono" style={{
          margin: 0, fontSize: 11, color: accentVar(ex.accent),
          letterSpacing: "0.10em", textTransform: "uppercase",
        }}>{ex.domain}</p>

        <div style={{
          marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--rule-soft)",
          display: "grid", gridTemplateColumns: "120px 1fr", rowGap: 12, columnGap: 18,
          alignItems: "baseline",
        }}>
          <span className="caps" style={{ color: "var(--ink-3)" }}>Modalities</span>
          <span style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>{ex.modalities}</span>
          <span className="caps" style={{ color: "var(--ink-3)" }}>Contributors</span>
          <span style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>{ex.contributors}</span>
          <span className="caps" style={{ color: "var(--ink-3)" }}>Scale</span>
          <span className="num" style={{ fontSize: 16, color: accentVar(ex.accent), lineHeight: 1.4 }}>{ex.metric}</span>
        </div>

        <p style={{
          margin: "22px 0 0", paddingTop: 18,
          borderTop: "1px solid var(--rule-soft)",
          fontSize: 15, lineHeight: 1.6, color: "var(--ink)",
        }}>{ex.body}</p>
      </div>
    </div>
  );
};

const MultimodalitySection = () => {
  const [activeRegister, setActiveRegister] = React.useState("01");
  const active = MULTIMODALITY_REGISTERS.find(r => r.n === activeRegister) || MULTIMODALITY_REGISTERS[0];

  return (
    <section style={{ marginTop: 56, paddingTop: 56, borderTop: "1px solid var(--rule)" }}>
      <SectionHead
        index="ii · interlude"
        eyebrow="The bridge from technical multimodality to ontological multimodality"
        title="Four registers of multimodality. Three are mature. One is where ethics begins."
        color="var(--terra)"
        lede={
          <>
            What we call multimodality in remote sensing is doing four different kinds of work at once. Most discussions collapse them. This interlude separates them. Three registers are technical and well established. The fourth is where the discipline meets the limits of its own ontology, and where the work of care, resilience, and community begins in earnest.
          </>
        }
      />

      {/* Overview row */}
      <RegistersOverview />

      {/* Register selector */}
      <div style={{
        display: "flex", gap: 10, marginTop: 32, flexWrap: "wrap",
      }}>
        {MULTIMODALITY_REGISTERS.map(r => (
          <Chip key={r.n}
            accent={r.color}
            on={activeRegister === r.n}
            onClick={() => setActiveRegister(r.n)}>
            {r.n} · {r.name}
          </Chip>
        ))}
      </div>

      {/* Deep panel for selected register */}
      <RegisterDeep r={active} />

      {/* The bridge sentence */}
      <Card pad={44} style={{
        marginTop: 24,
        background: "var(--ink)", color: "var(--paper)",
        border: "none",
      }}>
        <Kicker color="var(--ochre-2)">The bridge sentence</Kicker>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18, maxWidth: 920 }}>
          <p className="serif" style={{
            margin: 0, fontSize: 24, lineHeight: 1.4, fontWeight: 300,
            color: "color-mix(in oklch, var(--paper) 88%, transparent)",
          }}>
            {ARGUMENT_BRIDGE.technical}
          </p>
          <p className="serif" style={{
            margin: 0, fontSize: 24, lineHeight: 1.4, fontWeight: 300,
            color: "color-mix(in oklch, var(--paper) 88%, transparent)",
          }}>
            {ARGUMENT_BRIDGE.political}
          </p>
          <p className="serif" style={{
            margin: "12px 0", fontSize: 32, lineHeight: 1.3, fontWeight: 400,
            color: "var(--ochre-2)", letterSpacing: "-0.012em",
            paddingTop: 18,
            borderTop: "1px solid color-mix(in oklch, var(--paper) 22%, transparent)",
          }}>
            {ARGUMENT_BRIDGE.hinge}
          </p>
          <p className="serif" style={{
            margin: 0, fontSize: 18, lineHeight: 1.5, fontWeight: 300,
            color: "color-mix(in oklch, var(--paper) 75%, transparent)",
            fontStyle: "italic",
          }}>
            {ARGUMENT_BRIDGE.close}
          </p>
        </div>
      </Card>

      {/* Ontology principles */}
      <div style={{ marginTop: 40 }}>
        <Kicker color="var(--terra)">Five principles for working in register four</Kicker>
        <h3 className="serif" style={{
          margin: "0 0 22px", fontSize: 30, fontWeight: 400, letterSpacing: "-0.012em",
          maxWidth: 800,
        }}>
          What changes once you take ontological multimodality seriously.
        </h3>
        <OntologyPrinciples />
      </div>

      {/* History timeline */}
      <div style={{ marginTop: 48 }}>
        <Kicker color="var(--lapis)">A convergence history, not a single chronology</Kicker>
        <h3 className="serif" style={{
          margin: "0 0 8px", fontSize: 30, fontWeight: 400, letterSpacing: "-0.012em",
          maxWidth: 880,
        }}>
          Multimodal remote sensing did not begin once. It is the convergence of several lineages.
        </h3>
        <p style={{
          margin: "0 0 22px", fontSize: 14.5, color: "var(--ink-2)", maxWidth: 820,
        }}>
          The 2025 Samadzadegan review synthesises more than 950 papers on multi-sensor and multi-platform fusion. Citizen science and Earth observation literature traces its formal articulation to the mid 2000s. Indigenous data governance frameworks become institutionally visible from the late 2010s. Each lineage carries a different epistemology, and the fourth register is where they collide.
        </p>
        <HistoryTimeline />
      </div>

      {/* Operational examples */}
      <div style={{ marginTop: 48 }}>
        <Kicker color="var(--moss)">Operational examples at scale</Kicker>
        <h3 className="serif" style={{
          margin: "0 0 8px", fontSize: 30, fontWeight: 400, letterSpacing: "-0.012em",
          maxWidth: 820,
        }}>
          Where the registers work together, in institutions you can name.
        </h3>
        <p style={{
          margin: "0 0 22px", fontSize: 14.5, color: "var(--ink-2)", maxWidth: 760,
        }}>
          Eight institutional examples that operate across registers one, two, three, and in the best cases, four. None of them is a research demonstration. Each is an operational system delivering decisions today.
        </p>
        <OperationalExamplesGrid />
      </div>

      {/* Section claim */}
      <Pull color="var(--terra)" by="Section claim · the bridge">
        {SECTION_CLAIMS.multimodality}
      </Pull>
    </section>
  );
};

Object.assign(window, {
  MultimodalitySection, RegistersOverview, RegisterDeep,
  HistoryTimeline, OntologyPrinciples, OperationalExamplesGrid,
});
