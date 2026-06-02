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
        borderTop: "4px solid var(--clay)",
        background: i % 2 === 0 ? "var(--paper)" : "var(--paper-2)",
        minHeight: 200,
      }}>
        <div className="num" style={{
          fontSize: 36, color: "var(--clay)", lineHeight: 1, letterSpacing: "-0.02em",
        }}>{r.n}</div>
        <div className="mono" style={{
          marginTop: 8, fontSize: 10, color: "var(--clay)", letterSpacing: "0.14em",
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
    marginTop: 16, borderLeft: `5px solid var(--clay)`,
  }}>
    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 36 }}>
      <div>
        <div className="num" style={{
          fontSize: 64, color: "var(--clay)", lineHeight: 0.9, letterSpacing: "-0.025em",
        }}>{r.n}</div>
        <h4 className="serif" style={{
          margin: "8px 0 4px", fontSize: 36, lineHeight: 1.0, fontWeight: 400,
          letterSpacing: "-0.018em",
        }}>{r.name}</h4>
        <p style={{
          margin: "8px 0 0", fontSize: 14, color: "var(--clay)", fontStyle: "italic",
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
        <div className="caps" style={{ color: "var(--clay)", marginBottom: 8 }}>Operation</div>
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
          background: `color-mix(in oklch, var(--clay) 8%, var(--paper))`,
          borderLeft: `3px solid var(--clay)`,
        }}>
          <div className="caps" style={{ color: "var(--clay)", marginBottom: 6 }}>The limit of this register</div>
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
          fontSize: 22, color: "var(--clay)", letterSpacing: "-0.01em",
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

// Small toggle helper used twice below — same visual language as the
// outer MultimodalityInterlude's expand button.
const InterludeToggle = ({ title, blurb, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{
      marginTop: 28,
      border: "1px solid color-mix(in oklch, var(--clay) 22%, var(--rule))",
      background: "color-mix(in oklch, var(--clay) 3%, var(--paper))",
      borderRadius: 4, overflow: "hidden",
    }}>
      <button type="button" onClick={() => setOpen(o => !o)}
        aria-expanded={open ? "true" : "false"}
        style={{
          appearance: "none", border: "none", background: "transparent",
          width: "100%", textAlign: "left", padding: "18px 22px",
          cursor: "pointer", color: "var(--ink)", fontFamily: "var(--sans)",
          display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "center",
        }}>
        <div>
          <div className="mono" style={{
            fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--clay)", fontWeight: 700,
          }}>Toggle</div>
          <div className="serif" style={{
            margin: "4px 0 0", fontSize: 19, lineHeight: 1.18, fontWeight: 500,
            letterSpacing: "-0.008em", color: "var(--ink)",
          }}>{title}</div>
          {blurb && !open && (
            <p style={{ margin: "6px 0 0", fontSize: 13, color: "var(--ink-2)", lineHeight: 1.5, maxWidth: 720 }}>{blurb}</p>
          )}
        </div>
        <span className="mono" style={{
          fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase",
          color: "var(--clay)", fontWeight: 700,
          padding: "7px 12px",
          background: "color-mix(in oklch, var(--clay) 14%, var(--paper))",
          border: "1px solid color-mix(in oklch, var(--clay) 35%, transparent)",
          whiteSpace: "nowrap",
        }}>{open ? "Hide ▴" : "Open ▾"}</span>
      </button>
      {open && (
        <div style={{
          padding: "14px 22px 22px",
          borderTop: "1px solid color-mix(in oklch, var(--clay) 22%, var(--rule))",
          background: "var(--paper)",
        }}>{children}</div>
      )}
    </div>
  );
};

const MultimodalitySection = () => {
  const [activeRegister, setActiveRegister] = React.useState("01");
  const active = MULTIMODALITY_REGISTERS.find(r => r.n === activeRegister) || MULTIMODALITY_REGISTERS[0];

  return (
    <section style={{ marginTop: 0 }}>
      {/* Overview row — all four registers in one neutral clay palette */}
      <RegistersOverview />

      {/* Register selector — uniform clay chips */}
      <div style={{ display: "flex", gap: 10, marginTop: 32, flexWrap: "wrap" }}>
        {MULTIMODALITY_REGISTERS.map(r => (
          <Chip key={r.n}
            accent="var(--clay)"
            on={activeRegister === r.n}
            onClick={() => setActiveRegister(r.n)}>
            {r.n} · {r.name}
          </Chip>
        ))}
      </div>

      {/* Deep panel for selected register */}
      <RegisterDeep r={active} />

      {/* Toggle 1 — the convergence history, renamed "Deep Dive into Multimodality" */}
      <InterludeToggle
        title="Deep Dive into Multimodality"
        blurb="Multimodal remote sensing did not begin once. It is the convergence of several lineages, each carrying a different epistemology.">
        <p style={{ margin: "0 0 18px", fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: 820 }}>
          The 2025 Samadzadegan review synthesises more than 950 papers on multi-sensor and multi-platform fusion. Citizen science and Earth observation literature traces its formal articulation to the mid 2000s. Indigenous data governance frameworks become institutionally visible from the late 2010s. Each lineage carries a different epistemology, and the fourth register is where they collide.
        </p>
        <HistoryTimeline />
      </InterludeToggle>

      {/* Toggle 2 — operational examples at scale */}
      <InterludeToggle
        title="Operational examples at scale"
        blurb="Where the registers work together, in institutions you can name.">
        <p style={{ margin: "0 0 18px", fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: 820 }}>
          Eight institutional examples that operate across registers one, two, three, and in the best cases, four. None of them is a research demonstration. Each is an operational system delivering decisions today.
        </p>
        <OperationalExamplesGrid />
      </InterludeToggle>

      {/* Section claim — now plain prose, not a pull quote */}
      <p className="serif" style={{
        margin: "32px 0 0", fontSize: 16, lineHeight: 1.65,
        color: "var(--ink-2)", maxWidth: 820,
      }}>
        {SECTION_CLAIMS.multimodality}
      </p>
    </section>
  );
};

Object.assign(window, {
  MultimodalitySection, RegistersOverview, RegisterDeep,
  HistoryTimeline, OntologyPrinciples, OperationalExamplesGrid,
});
