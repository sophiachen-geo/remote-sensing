// =======================================================================
// App mount + tab router (hash-based)
// =======================================================================

const TABS = [
  { id: "activelayer",  label: "Introduction", sub: "Active Layer", component: TabOuverture, accent: "var(--st-active-accent-2)", strata: "active" },
  { id: "permafrost",   label: "Core Ideas",   sub: "Permafrost",   component: TabPlongees,  accent: "var(--st-perma-accent-2)",  strata: "perma"  },
  { id: "canopy",       label: "Case Studies", sub: "Canopy",       component: TabDeepDive,  accent: "var(--st-canopy-bg)",       strata: "canopy" },
  { id: "rhizosphere",  label: "Field Guide",  sub: "Rhizosphere",  component: TabAvenir,    accent: "var(--st-rhizo-accent-2)",  strata: "rhizo"  },
  { id: "seafloor",     label: "Annexes",      sub: "Seafloor",     component: TabAnnexes,   accent: "var(--st-floor-accent)",    strata: "floor"  },
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

const Chrome = ({ active, go, introOpen }) => (
  <header className="chrome">
    <div className="chrome-strip">
      <span>Canadian Remote Sensing Society · Presentation Companion Guide</span>
    </div>
    <nav className="chrome-tabs">
      {TABS.map(t => {
        const on = active === t.id;
        return (
          <button key={t.id} onClick={() => go(t.id)}
            className={`tab-card ${on ? "on" : ""}`}
            aria-expanded={on ? (introOpen ? "true" : "false") : undefined}
            style={{ "--tab-accent": t.accent }}>
            <span className="tab-strip" aria-hidden="true">
              <StrataStrip section={t.strata} />
            </span>
            <span className="tab-label">
              {t.label}
              {on && (
                <span className="tab-caret" aria-hidden="true">{introOpen ? "▾" : "▸"}</span>
              )}
            </span>
            <span className="tab-sub">{t.sub}</span>
          </button>
        );
      })}
    </nav>
  </header>
);

const App = () => {
  const [tab, go] = useHashTab();
  const [introOpen, setIntroOpen] = React.useState(true);
  const prevTabRef = React.useRef(tab);
  React.useEffect(() => {
    if (prevTabRef.current !== tab) {
      setIntroOpen(true);
      prevTabRef.current = tab;
    }
  }, [tab]);
  const onTabClick = (id) => {
    if (id === tab) setIntroOpen(o => !o);
    else { go(id); setIntroOpen(true); }
  };
  const activeTab = TABS.find(t => t.id === tab);
  const Current = activeTab.component;
  return (
    <>
      <Chrome active={tab} go={onTabClick} introOpen={introOpen} />
      {introOpen && <SectionIntro section={activeTab.strata} accent={activeTab.accent} />}
      <main className="pane">
        <Current />
      </main>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
