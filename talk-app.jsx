// =======================================================================
// App mount + tab router (hash-based)
// =======================================================================

const TABS = [
  { id: "ouverture",  roman: "i",   label: "Ouverture",   component: TabOuverture },
  { id: "slides",     roman: "ii",  label: "Slides",      component: TabSlides },
  { id: "plongees",   roman: "iii", label: "Plongées",    component: TabPlongees },
  { id: "avenir",     roman: "iv",  label: "Avenir",      component: TabAvenir },
  { id: "annexes",    roman: "v",   label: "Annexes",     component: TabAnnexes },
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
        Working in the Boundary Layer · <em className="fr">Société canadienne de télédétection</em>
      </span>
      <span>
        a companion · 26 slides · 60 minutes
      </span>
    </div>
    <nav className="chrome-tabs">
      {TABS.map(t => (
        <button key={t.id} onClick={() => go(t.id)}
          className={`tab ${active === t.id ? "on" : ""}`}>
          <span className="roman">{t.roman}</span>
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
