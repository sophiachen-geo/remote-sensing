// =======================================================================
// CareerArc — disciplines, trainings & the relation to remote sensing.
// Lives in the Ouverture tab.
// =======================================================================

const DiscChip = ({ disc, on = true }) => {
  const d = DISCIPLINES[disc];
  if (!d) return null;
  return <Chip accent={d.color} on={on}>{d.label}</Chip>;
};

const RsChip = ({ rs }) => {
  const r = RS_RELATIONS[rs];
  if (!r) return null;
  return <Chip accent={r.color} on>{r.label}</Chip>;
};

const Swatch = ({ color, size = 8 }) => (
  <span style={{
    display: "inline-block", width: size, height: size,
    background: color, marginRight: 8, verticalAlign: "middle",
  }} />
);

// ---- Disciplinary legend strip -----------------------------------------
const DisciplineLegend = () => (
  <div style={{
    marginTop: 24,
    padding: "16px 20px",
    background: "var(--paper-2)",
    border: "1px solid var(--rule)",
    display: "flex", flexWrap: "wrap", gap: "10px 24px", alignItems: "center",
  }}>
    <span className="caps" style={{ color: "var(--ink-3)", marginRight: 8 }}>Disciplines ·</span>
    {Object.entries(DISCIPLINES).map(([id, d]) => (
      <span key={id} style={{
        display: "inline-flex", alignItems: "center",
        fontSize: 12.5, color: "var(--ink-2)",
      }}>
        <Swatch color={d.color} />{d.label}
      </span>
    ))}
  </div>
);

// ---- Formations column -------------------------------------------------
const FormationsList = () => (
  <div>
    <Kicker color="var(--terra)">i · Formations · the schools</Kicker>
    <p style={{ margin: "0 0 18px", fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>
      Five trainings, in order. The arc moves from health sciences into physical
      geography and urban systems, then into the engineering of measurement —
      the path that produces a remote-sensing practitioner who reads the
      atmosphere as well as the pixel.
    </p>
    <ol style={{ margin: 0, padding: 0, listStyle: "none", borderTop: "1px solid var(--rule)" }}>
      {FORMATIONS.map((f, i) => {
        const d = DISCIPLINES[f.disc];
        return (
          <li key={i} style={{
            display: "grid",
            gridTemplateColumns: "36px 1fr",
            gap: 14,
            padding: "18px 0",
            borderBottom: "1px solid var(--rule-soft)",
            position: "relative",
          }}>
            <div className="num" style={{
              fontSize: 22, color: d.color, lineHeight: 1, letterSpacing: "-0.01em",
            }}>{String(i+1).padStart(2,"0")}</div>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                <span className="serif" style={{ fontSize: 19, lineHeight: 1.15, fontWeight: 500 }}>{f.inst}</span>
                <span className="mono" style={{
                  fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.10em",
                  textTransform: "uppercase",
                }}>{f.place}</span>
              </div>
              <div className="mono" style={{
                fontSize: 11, color: d.color, letterSpacing: "0.06em",
                textTransform: "uppercase", marginTop: 4,
              }}>{f.cred}</div>
              <div style={{
                fontSize: 13.5, color: "var(--ink)", lineHeight: 1.45,
                marginTop: 6, fontStyle: "italic",
              }}>{f.field}</div>
              <div style={{ marginTop: 10 }}>
                <DiscChip disc={f.disc} />
              </div>
              <p style={{
                margin: "12px 0 0", fontSize: 13, lineHeight: 1.55,
                color: "var(--ink-2)",
              }}>{f.note}</p>
            </div>
          </li>
        );
      })}
    </ol>
  </div>
);

// ---- Practices vertical timeline ---------------------------------------
const PracticesTimeline = () => (
  <div>
    <Kicker color="var(--terra)">ii · Practices · what each role actually was</Kicker>
    <p style={{ margin: "0 0 18px", fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>
      Ten positions, in chronological order. Each carries a disciplinary tag and
      a chip locating it inside the remote-sensing chain — from operational
      classification at ECCC, through spatial-data engineering at NRCan, to
      community-mapping leadership at the Red Cross.
    </p>

    <ol style={{
      margin: 0, padding: 0, listStyle: "none", position: "relative",
    }}>
      {/* spine */}
      <div style={{
        position: "absolute", left: 7, top: 6, bottom: 6,
        width: 1, background: "var(--rule)",
      }} />
      {PRACTICES.map((p, i) => {
        const primary = DISCIPLINES[p.disc[0]];
        const isCurrent = /present/i.test(p.year);
        return (
          <li key={i} style={{
            position: "relative",
            paddingLeft: 32,
            paddingTop: i === 0 ? 0 : 22,
            paddingBottom: 22,
            borderBottom: i < PRACTICES.length - 1 ? "1px solid var(--rule-soft)" : "none",
          }}>
            {/* node */}
            <div style={{
              position: "absolute", left: 0, top: i === 0 ? 4 : 26,
              width: 15, height: 15,
              background: isCurrent ? primary.color : "var(--paper)",
              border: `2px solid ${primary.color}`,
              borderRadius: 999,
              zIndex: 2,
              boxShadow: isCurrent ? `0 0 0 6px color-mix(in oklch, ${primary.color} 18%, transparent)` : "none",
            }} />

            {/* year */}
            <div className="mono" style={{
              fontSize: 11, color: primary.color, letterSpacing: "0.10em",
              textTransform: "uppercase", marginBottom: 6,
            }}>{p.year}{p.note && <span style={{ color: "var(--ink-3)", marginLeft: 10 }}>· {p.note}</span>}</div>

            <div className="serif" style={{
              fontSize: 22, lineHeight: 1.15, fontWeight: 500, letterSpacing: "-0.005em",
            }}>{p.inst}</div>
            <div style={{
              fontSize: 12, color: "var(--ink-3)",
              fontFamily: "var(--mono)", letterSpacing: "0.06em",
              textTransform: "uppercase", marginTop: 3,
            }}>{p.place}</div>
            <div style={{
              fontSize: 14, color: "var(--ink)",
              marginTop: 8, fontStyle: "italic",
            }}>{p.role}</div>

            {/* chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
              {p.disc.map(d => <DiscChip key={d} disc={d} />)}
              {p.rs.map(r => <RsChip key={r} rs={r} />)}
            </div>

            <p style={{
              margin: "12px 0 0", fontSize: 13.5, lineHeight: 1.55,
              color: "var(--ink-2)", maxWidth: 640,
            }}>{p.body}</p>
          </li>
        );
      })}
    </ol>
  </div>
);

// ---- Bottom strip: languages · service · certifications ---------------
const BottomStrip = () => (
  <div style={{
    marginTop: 56, paddingTop: 36, borderTop: "1px solid var(--rule)",
    display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 40,
  }}>
    {/* Languages */}
    <div>
      <Kicker color="var(--ochre)">Working languages</Kicker>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {LANGUAGES.map((l, i) => (
          <li key={i} style={{
            display: "grid", gridTemplateColumns: "1fr auto", gap: 12,
            padding: "8px 0",
            borderBottom: i < LANGUAGES.length - 1 ? "1px solid var(--rule-soft)" : "none",
            alignItems: "baseline",
          }}>
            <span className="serif" style={{ fontSize: 17, color: "var(--ink)" }}>{l.l}</span>
            <span className="mono" style={{
              fontSize: 10, letterSpacing: "0.10em",
              color: "var(--ink-3)", textTransform: "uppercase",
            }}>{l.level}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Service */}
    <div>
      <Kicker color="var(--lapis)">Service · United Nations MGCY</Kicker>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {SERVICE.map((s, i) => (
          <li key={i} style={{
            padding: "10px 0",
            borderBottom: i < SERVICE.length - 1 ? "1px solid var(--rule-soft)" : "none",
          }}>
            <div className="mono" style={{
              fontSize: 10, color: "var(--lapis)", letterSpacing: "0.10em",
              textTransform: "uppercase",
            }}>{s.years}</div>
            <div className="serif" style={{ fontSize: 16, color: "var(--ink)", marginTop: 4, lineHeight: 1.3 }}>
              {s.role}
            </div>
            <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 4 }}>{s.who}</div>
          </li>
        ))}
      </ul>
    </div>

    {/* Certifications */}
    <div>
      <Kicker color="var(--moss)">Certifications · adjacent</Kicker>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {CERTS.map((c, i) => (
          <li key={i} style={{
            padding: "10px 0",
            borderBottom: i < CERTS.length - 1 ? "1px solid var(--rule-soft)" : "none",
            fontSize: 13.5, color: "var(--ink)", lineHeight: 1.45,
          }}>{c}</li>
        ))}
      </ul>
      <p style={{
        margin: "16px 0 0", fontSize: 12, color: "var(--ink-3)", lineHeight: 1.5, fontStyle: "italic",
      }}>
        Top skills (LinkedIn) · report writing · environmental impact assessment · environmental policy.
      </p>
    </div>
  </div>
);

// ---- The composed section ----------------------------------------------
const CareerArc = () => (
  <section style={{ marginTop: 72 }}>
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "end", marginBottom: 8 }}>
      <div>
        <Kicker color="var(--terra)">Career arc · disciplines, trainings, & relation to remote sensing</Kicker>
        <h3 className="serif" style={{
          margin: 0, fontSize: 44, fontWeight: 400, letterSpacing: "-0.016em", lineHeight: 1.02,
        }}>Five formations. Ten practices.<br/>
          <em style={{ color: "var(--terra-2)" }}>One disciplinary path into the boundary layer.</em>
        </h3>
      </div>
      <p style={{
        margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)",
      }}>
        The arc reads from health-sciences and physical geography into
        geomatics engineering and humanitarian GIS. Remote sensing enters
        explicitly at ECCC AFOLU, runs through CCMEO data engineering, SOCODEVI
        sensor fusion and Laval sociohydrology, and arrives at the Red Cross
        community-mapping portfolio. Each node below carries a discipline tag
        and a chip locating it inside the RS chain.
      </p>
    </div>

    <DisciplineLegend />

    <div style={{
      display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 48,
      marginTop: 32, alignItems: "start",
    }}>
      <FormationsList />
      <PracticesTimeline />
    </div>

    <BottomStrip />
  </section>
);

Object.assign(window, { CareerArc, DiscChip, RsChip });
