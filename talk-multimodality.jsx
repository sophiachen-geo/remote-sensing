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
        borderTop: "4px solid var(--ink)",
        background: "var(--paper)",
        minHeight: 200,
      }}>
        <div className="num" style={{
          fontSize: 36, color: "var(--ink-3)", lineHeight: 1, letterSpacing: "-0.02em",
        }}>{r.n}</div>
        <div className="mono" style={{
          marginTop: 8, fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}>register {r.n}</div>
        <h4 className="serif" style={{
          margin: "10px 0 6px", fontSize: 24, lineHeight: 1.15, fontWeight: 500,
          letterSpacing: "-0.012em",
        }}>{r.name}</h4>
        <p style={{
          margin: 0, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5,
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
    marginTop: 16, borderLeft: "4px solid var(--ink)",
  }}>
    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 36 }}>
      <div>
        <div className="num" style={{
          fontSize: 64, color: "var(--ink-3)", lineHeight: 0.9, letterSpacing: "-0.025em",
        }}>{r.n}</div>
        <h4 className="serif" style={{
          margin: "8px 0 4px", fontSize: 32, lineHeight: 1.05, fontWeight: 500,
          letterSpacing: "-0.015em",
        }}>{r.name}</h4>
        <p style={{
          margin: "8px 0 0", fontSize: 14, color: "var(--ink-2)",
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
        <div className="caps" style={{ color: "var(--ink-3)", marginBottom: 8 }}>Operation</div>
        <p className="serif" style={{
          margin: "0 0 18px", fontSize: 19, lineHeight: 1.5, color: "var(--ink)",
          fontWeight: 500,
        }}>{r.operation}</p>

        <div className="caps" style={{ color: "var(--ink-3)", marginBottom: 10 }}>Examples</div>
        <p style={{
          margin: "0 0 22px", fontSize: 14, lineHeight: 1.6, color: "var(--ink-2)",
        }}>{r.examples}</p>

        <div className="caps" style={{ color: "var(--ink-3)", marginBottom: 10 }}>What this register actually does</div>
        <p style={{
          margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--ink)",
        }}>{r.body}</p>

        <div style={{
          marginTop: 22, padding: "16px 18px",
          background: "var(--paper-2)",
          borderLeft: "3px solid var(--ink-3)",
        }}>
          <div className="caps" style={{ color: "var(--ink-3)", marginBottom: 6 }}>The limit of this register</div>
          <p style={{
            margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--ink)",
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
      }}>
        <span className="num" style={{
          fontSize: 20, color: "var(--ink-3)", letterSpacing: "-0.01em",
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
      display: "grid", gridTemplateColumns: "300px 1fr", gap: 0,
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
                borderLeft: on ? "4px solid var(--ink)" : "4px solid transparent",
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
        <div className="mono" style={{
          fontSize: 11, color: "var(--ink-3)",
          letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8,
        }}>operational example</div>
        <h4 className="serif" style={{
          margin: "0 0 6px", fontSize: 26, fontWeight: 500, lineHeight: 1.15,
        }}>{ex.name}</h4>
        <p className="mono" style={{
          margin: 0, fontSize: 11, color: "var(--ink-3)",
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
          <span className="num" style={{ fontSize: 16, color: "var(--ink)", lineHeight: 1.4 }}>{ex.metric}</span>
        </div>

        <p style={{
          margin: "22px 0 0", paddingTop: 18,
          borderTop: "1px solid var(--rule-soft)",
          fontSize: 16, lineHeight: 1.65, color: "var(--ink)",
        }}>{ex.body}</p>
      </div>
    </div>
  );
};

const MMToggle = ({ kicker, title, lede, defaultOpen = false, children }) => {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{
      marginTop: 32, border: "1px solid var(--rule)", background: "var(--paper)",
    }}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          appearance: "none", border: "none", background: "transparent",
          width: "100%", textAlign: "left", padding: "22px 26px",
          cursor: "pointer", color: "var(--ink)",
          display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center",
        }}
      >
        <div>
          <div className="mono" style={{
            fontSize: 11, color: "var(--ink-3)",
            letterSpacing: "0.16em", textTransform: "uppercase",
          }}>{kicker}</div>
          <h3 className="serif" style={{
            margin: "8px 0 0", fontSize: 24, fontWeight: 500,
            letterSpacing: "-0.008em", lineHeight: 1.2, maxWidth: 720,
          }}>{title}</h3>
          {lede && (
            <p style={{
              margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.55,
              color: "var(--ink-2)", maxWidth: 720,
            }}>{lede}</p>
          )}
        </div>
        <span className="mono" style={{
          fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
          color: "var(--ink-3)",
        }}>{open ? "Close" : "Open"}</span>
      </button>
      {open && (
        <div style={{
          padding: "8px 26px 28px",
          borderTop: "1px solid var(--rule-soft)",
        }}>
          {children}
        </div>
      )}
    </div>
  );
};

const MultimodalitySection = () => {
  const [activeRegister, setActiveRegister] = React.useState("01");
  const active = MULTIMODALITY_REGISTERS.find(r => r.n === activeRegister) || MULTIMODALITY_REGISTERS[0];

  return (
    <section style={{ marginTop: 24 }}>
      <p style={{
        margin: "0 0 18px", fontSize: 17, lineHeight: 1.65, color: "var(--ink-2)",
        maxWidth: 760,
      }}>
        What we call multimodality in remote sensing is doing four different kinds of work at once. Most discussions collapse them. The four registers below separate them. Three are technical and well established. The fourth is where the discipline meets the limits of its own ontology, and where the work of care, resilience, and community begins in earnest.
      </p>

      {/* Overview row */}
      <RegistersOverview />

      {/* Register selector */}
      <div style={{
        display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap",
      }}>
        {MULTIMODALITY_REGISTERS.map(r => (
          <Chip key={r.n}
            accent="var(--ink)"
            on={activeRegister === r.n}
            onClick={() => setActiveRegister(r.n)}>
            {r.n} · {r.name}
          </Chip>
        ))}
      </div>

      {/* Deep panel for selected register */}
      <RegisterDeep r={active} />

      {/* Toggle, Deep Dive into Multimodality */}
      <MMToggle
        kicker="deep dive"
        title="Deep Dive into Multimodality."
        lede="Multimodal remote sensing did not begin once. It is the convergence of several lineages, each carrying a different epistemology. The 2025 Samadzadegan review synthesises more than 950 papers on multi-sensor and multi-platform fusion. Citizen science and Earth observation literature traces its formal articulation to the mid 2000s. Indigenous data governance frameworks become institutionally visible from the late 2010s. The fourth register is where they collide."
      >
        <HistoryTimeline />
      </MMToggle>

      {/* Toggle, Operational examples */}
      <MMToggle
        kicker="operational examples at scale"
        title="Where the registers work together, in institutions you can name."
        lede="Eight institutional examples that operate across registers one, two, three, and in the best cases, four. None of them is a research demonstration. Each is an operational system delivering decisions today."
      >
        <OperationalExamplesGrid />
      </MMToggle>

      {/* Section claim, written as a plain sentence per the design system */}
      <p className="serif" style={{
        marginTop: 36, fontSize: 22, lineHeight: 1.45,
        fontWeight: 500, color: "var(--ink)", maxWidth: 820,
      }}>
        {SECTION_CLAIMS.multimodality}
      </p>
    </section>
  );
};

Object.assign(window, {
  MultimodalitySection, RegistersOverview, RegisterDeep, MMToggle,
  HistoryTimeline, OntologyPrinciples, OperationalExamplesGrid,
});
