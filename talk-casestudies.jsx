// =======================================================================
// Deep Dive. A collection of interactive case-study dashboards, each
// embedded inline from its own self-contained HTML file.
// =======================================================================

const CASE_STUDIES = [
  {
    id: "greater-lausanne",
    eyebrow: "Field survey · EPFL · spring 2019",
    title: "Greater Lausanne, the boundary layer at city scale",
    blurb:
      "A handheld walk of CO₂, temperature, and humidity across 27 indoor and outdoor points in and around Lausanne, joined to satellite layers from the same period. The map, the charts, and the detail panel are linked, click any numbered point or any bar to inspect it everywhere. This is the Q-TRAK walk of Topic 2 done at city scale, with governance.",
    tags: ["CO₂ field readings", "Sentinel-2 and 5P", "Landsat 8 LST", "Local Climate Zones", "GHSL"],
    src: "case-studies/greater-lausanne.html",
    accent: "lapis",
  },
];

const CaseStudyTab = ({ study, on, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      appearance: "none", cursor: "pointer", textAlign: "left",
      background: on ? "var(--paper-2)" : "var(--paper)",
      border: "1px solid var(--rule)",
      borderTop: `3px solid ${on ? accentVar(study.accent) : "transparent"}`,
      padding: "18px 20px 20px",
      display: "flex", flexDirection: "column", gap: 8, color: "var(--ink)",
      opacity: on ? 1 : 0.82,
    }}
  >
    <span className="mono" style={{
      fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase",
      color: accentVar(study.accent),
    }}>{study.eyebrow}</span>
    <span className="serif" style={{ fontSize: 21, lineHeight: 1.12, letterSpacing: "-0.01em" }}>
      {study.title}
    </span>
  </button>
);

const TabDeepDive = () => {
  const [activeId, setActiveId] = React.useState(CASE_STUDIES[0].id);
  const active = CASE_STUDIES.find(c => c.id === activeId) || CASE_STUDIES[0];

  return (
    <div className="wrap" style={{ padding: "64px 56px 96px" }}>
      <SectionHead
        index="iv"
        eyebrow="Case studies"
        title="Deep Dive"
        lede="Interactive companions to the argument. Each case study is a working dashboard, embedded live below, where the satellite layers and the field readings can be cross-examined point by point."
        color="var(--lapis)"
      />

      {CASE_STUDIES.length > 1 && (
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(CASE_STUDIES.length, 3)}, 1fr)`,
          gap: 14, marginBottom: 36,
        }}>
          {CASE_STUDIES.map(c => (
            <CaseStudyTab key={c.id} study={c} on={c.id === activeId}
              onClick={() => setActiveId(c.id)} />
          ))}
        </div>
      )}

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <Kicker color={accentVar(active.accent)}>{active.eyebrow}</Kicker>
          <a href={active.src} target="_blank" rel="noopener noreferrer" className="mono" style={{
            fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
            color: accentVar(active.accent), textDecoration: "none", whiteSpace: "nowrap",
          }}>Open full screen &#8599;</a>
        </div>
        <h3 className="serif" style={{
          margin: "6px 0 14px", fontSize: 30, lineHeight: 1.08,
          fontWeight: 400, letterSpacing: "-0.014em",
        }}>{active.title}</h3>
        <Prose max={840}>
          <P>{active.blurb}</P>
        </Prose>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
          {active.tags.map((t, i) => <Pill key={i} tone={active.accent}>{t}</Pill>)}
        </div>
      </div>

      <Card pad={0} style={{ overflow: "hidden", background: "var(--ink)" }}>
        <iframe
          key={active.id}
          src={active.src}
          title={active.title}
          loading="lazy"
          style={{
            display: "block", width: "100%", height: "86vh", minHeight: 760,
            border: "none",
          }}
        />
      </Card>
      <div className="mono" style={{
        marginTop: 10, fontSize: 10.5, letterSpacing: "0.08em",
        color: "var(--ink-3)", textTransform: "uppercase",
      }}>Scroll inside the frame to reach the charts, or open it full screen.</div>
    </div>
  );
};

Object.assign(window, { TabDeepDive, CASE_STUDIES });
