// =======================================================================
// App mount + tab router (hash-based)
// =======================================================================

const TABS = [
  { id: "activelayer",  roman: "i",   label: "Active Layer", component: TabOuverture, accent: "var(--st-active-accent-2)", strata: "active" },
  { id: "permafrost",   roman: "ii",  label: "Permafrost",   component: TabPlongees,  accent: "var(--st-perma-accent-2)",  strata: "perma"  },
  { id: "canopy",       roman: "iii", label: "Canopy",       component: TabDeepDive,  accent: "var(--st-canopy-bg)",       strata: "canopy" },
  { id: "rhizosphere",  roman: "iv",  label: "Rhizosphere",  component: TabAvenir,    accent: "var(--st-rhizo-accent-2)",  strata: "rhizo"  },
  { id: "seafloor",     roman: "v",   label: "Seafloor",     component: TabAnnexes,   accent: "var(--st-floor-accent)",    strata: "floor"  },
];

const useHashTab = () => {
  const get = () => {
    const h = (window.location.hash || "").replace(/^#/, "");
    return TABS.find(t => t.id === h) ? h : "activelayer";
  };
  const [tab, setTab] = React.useState(get);
  React.useEffect(() => {
    const onHash = () => setTab(get());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const go = (id) => {
    window.location.hash = id;
    // scroll to top on switch
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "instant" }));
  };
  return [tab, go];
};

const Chrome = ({ active, go }) => (
  <header className="chrome">
    <div className="chrome-strip">
      <span>Canadian Remote Sensing Society · Presentation Companion Guide</span>
    </div>
    <nav className="chrome-tabs">
      {TABS.map(t => (
        <button key={t.id} onClick={() => go(t.id)}
          className={`tab ${active === t.id ? "on" : ""}`}
          style={{ "--tab-accent": t.accent }}>
          <span className="roman">{t.roman}</span>
          <span className="strata-mark" aria-hidden="true">
            <SectionGlyph section={t.strata} size={22} showSurface={false} />
          </span>
          {t.label}
        </button>
      ))}
    </nav>
  </header>
);

const App = () => {
  const [tab, go] = useHashTab();
  const Current = TABS.find(t => t.id === tab).component;
  return (
    <>
      <Chrome active={tab} go={go} />
      <main className="pane">
        <Current />
      </main>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
