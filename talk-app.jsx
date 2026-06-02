// =======================================================================
// App mount + tab router (hash-based)
// =======================================================================

const TABS = [
  { id: "ouverture", roman: "i",   label: "Active Layer", component: TabOuverture, accent: "var(--terra)" },
  { id: "plongees",  roman: "ii",  label: "Permafrost",   component: TabPlongees,  accent: "var(--lapis)" },
  { id: "deepdive",  roman: "iii", label: "Canopy",       component: TabDeepDive,  accent: "var(--moss)"  },
  { id: "avenir",    roman: "iv",  label: "Rhizosphere",  component: TabAvenir,    accent: "var(--ochre)" },
  { id: "annexes",   roman: "v",   label: "Seafloor",     component: TabAnnexes,   accent: "var(--plum)"  },
];

const useHashTab = () => {
  const get = () => {
    const h = (window.location.hash || "").replace(/^#/, "");
    return TABS.find(t => t.id === h) ? h : "ouverture";
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
      <span>
        <Sigil color="var(--terra)" />
        Canadian Remote Sensing Society · Presentation Guide
      </span>
    </div>
    <nav className="chrome-tabs">
      {TABS.map(t => (
        <button key={t.id} onClick={() => go(t.id)}
          className={`tab ${active === t.id ? "on" : ""}`}
          style={{ "--tab-accent": t.accent }}>
          <span className="roman">{t.roman}</span>
          <span className="glyph" aria-hidden="true" />
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
