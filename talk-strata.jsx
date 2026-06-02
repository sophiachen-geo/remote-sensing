// =======================================================================
// Strata, the section glyph system.
// Five sections, each rendered as a layer of one earth-system cross-section.
// Canopy sits above the surface line on purpose: case studies are the part
// outsiders actually see. Pure SVG, no deps. Colours live in tokens.css.
// =======================================================================

const STRATA_SECTIONS = {
  active: { label: "Active layer", sub: "intro" },
  perma:  { label: "Permafrost",   sub: "core ideas" },
  canopy: { label: "Canopy",       sub: "case studies" },
  rhizo:  { label: "Rhizosphere",  sub: "field guide / toolkit" },
  floor:  { label: "Seafloor",     sub: "annexes / about" },
};

const StrataDefs = () => (
  <defs>
    <linearGradient id="st-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="var(--st-canopy-sky)" />
      <stop offset="1" stopColor="var(--st-active-bg-soft)" />
    </linearGradient>
    <linearGradient id="st-active" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="var(--st-active-bg)" />
      <stop offset="1" stopColor="var(--st-active-soil)" />
    </linearGradient>
    <linearGradient id="st-perma" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="var(--st-perma-bg-soft)" />
      <stop offset="1" stopColor="var(--st-perma-bg-deep)" />
    </linearGradient>
    <linearGradient id="st-ice" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="var(--st-perma-accent)" />
      <stop offset="1" stopColor="var(--st-perma-accent-2)" />
    </linearGradient>
    <radialGradient id="st-crown" cx="0.42" cy="0.34" r="0.78">
      <stop offset="0" stopColor="var(--st-canopy-bg-soft)" />
      <stop offset="1" stopColor="var(--st-canopy-bg-deep)" />
    </radialGradient>
    <linearGradient id="st-soil" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="var(--st-rhizo-bg-soft)" />
      <stop offset="1" stopColor="var(--st-rhizo-bg-deep)" />
    </linearGradient>
    <linearGradient id="st-sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="var(--st-floor-bg-soft)" />
      <stop offset="1" stopColor="var(--st-floor-bg-deep)" />
    </linearGradient>
    <linearGradient id="st-bed" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="var(--st-floor-bg)" />
      <stop offset="1" stopColor="var(--st-floor-edge)" />
    </linearGradient>
  </defs>
);

const STRATA_GLYPH = {
  active: (
    <>
      <clipPath id="c-active"><rect width="108" height="108" rx="10" /></clipPath>
      <g clipPath="url(#c-active)">
        <rect width="108" height="40" fill="url(#st-sky)" />
        <rect y="40" width="108" height="68" fill="url(#st-active)" />
        <ellipse cx="34" cy="16" rx="13" ry="6" fill="var(--st-active-accent)" opacity="0.55" />
        <ellipse cx="74" cy="13" rx="16" ry="7" fill="var(--st-active-accent)" opacity="0.45" />
        <g stroke="var(--st-active-accent-2)" strokeWidth="0.7" opacity="0.5">
          <line x1="26" y1="56" x2="26" y2="80" />
          <line x1="58" y1="58" x2="58" y2="82" />
          <line x1="86" y1="55" x2="86" y2="79" />
        </g>
        <g fill="var(--st-active-edge)" opacity="0.6">
          <circle cx="40" cy="70" r="1.4" />
          <circle cx="68" cy="76" r="1.2" />
          <circle cx="92" cy="68" r="1.1" />
        </g>
      </g>
    </>
  ),
  perma: (
    <>
      <clipPath id="c-perma"><rect width="108" height="108" rx="10" /></clipPath>
      <g clipPath="url(#c-perma)">
        <rect width="108" height="40" fill="url(#st-sky)" opacity="0.35" />
        <rect y="40" width="108" height="68" fill="url(#st-perma)" />
        <g opacity="0.55" stroke="var(--st-perma-edge)" strokeWidth="0.7" fill="none">
          <path d="M0 58 Q30 54 60 58 T108 56" />
          <path d="M0 84 Q34 80 64 84 T108 82" />
        </g>
        <g fill="url(#st-ice)" stroke="var(--st-perma-accent-2)" strokeWidth="0.4" opacity="0.92">
          <polygon points="22,50 56,47 64,80 26,86" />
          <polygon points="68,60 96,57 100,90 72,92" />
        </g>
        <line x1="26" y1="54" x2="42" y2="51" stroke="var(--st-perma-accent)" strokeWidth="0.5" opacity="0.5" />
      </g>
    </>
  ),
  canopy: (
    <>
      <clipPath id="c-canopy"><rect width="108" height="108" rx="10" /></clipPath>
      <g clipPath="url(#c-canopy)">
        <rect width="108" height="62" fill="url(#st-sky)" />
        <rect y="62" width="108" height="46" fill="url(#st-soil)" />
        <rect x="51" y="42" width="6" height="22" fill="var(--st-canopy-trunk)" />
        <path d="M54 64 C46 70 32 70 24 80" stroke="var(--st-canopy-trunk)" strokeWidth="2" fill="none" />
        <path d="M54 64 C62 70 76 70 84 80" stroke="var(--st-canopy-trunk)" strokeWidth="2" fill="none" />
        <ellipse cx="38" cy="30" rx="22" ry="17" fill="url(#st-crown)" />
        <ellipse cx="70" cy="27" rx="24" ry="18" fill="url(#st-crown)" />
        <ellipse cx="54" cy="44" rx="26" ry="15" fill="var(--st-canopy-bg-deep)" opacity="0.85" />
        <g fill="var(--st-canopy-accent)" opacity="0.6">
          <circle cx="32" cy="24" r="3" />
          <circle cx="66" cy="22" r="3.5" />
          <circle cx="48" cy="40" r="3" />
        </g>
      </g>
    </>
  ),
  rhizo: (
    <>
      <clipPath id="c-rhizo"><rect width="108" height="108" rx="10" /></clipPath>
      <g clipPath="url(#c-rhizo)">
        <rect width="108" height="40" fill="url(#st-active)" opacity="0.5" />
        <rect y="40" width="108" height="68" fill="url(#st-soil)" />
        <path d="M54 6 L54 34" stroke="var(--st-rhizo-edge)" strokeWidth="2.6" fill="none" />
        <g stroke="var(--st-rhizo-root)" strokeWidth="1.6" fill="none">
          <path d="M54 34 C44 48 28 54 20 78" />
          <path d="M54 34 C64 48 80 54 88 78" />
          <path d="M54 34 C52 54 49 76 49 102" />
        </g>
        <g stroke="var(--st-rhizo-accent-2)" strokeWidth="0.8" fill="none" opacity="0.8">
          <path d="M30 56 C26 64 22 70 20 80" />
          <path d="M78 56 C82 64 86 70 88 80" />
          <path d="M49 70 C49 80 48 88 48 100" />
        </g>
        <g fill="var(--st-rhizo-accent)">
          <circle cx="20" cy="78" r="2.4" />
          <circle cx="88" cy="78" r="2.4" />
          <circle cx="49" cy="102" r="2.2" />
        </g>
      </g>
    </>
  ),
  floor: (
    <>
      <clipPath id="c-floor"><rect width="108" height="108" rx="10" /></clipPath>
      <g clipPath="url(#c-floor)">
        <rect width="108" height="108" fill="url(#st-sea)" />
        <g fill="var(--st-floor-accent-2)" opacity="0.45">
          <circle cx="26" cy="30" r="1.5" />
          <circle cx="64" cy="22" r="1.1" />
          <circle cx="86" cy="38" r="1.3" />
        </g>
        <path d="M0 60 Q26 52 54 60 T108 58 L108 108 L0 108 Z" fill="url(#st-bed)" />
        <path d="M0 76 Q30 70 54 76 T108 74 L108 108 L0 108 Z" fill="var(--st-floor-sediment)" />
        <path d="M0 90 Q26 86 50 90 T108 88 L108 108 L0 108 Z" fill="var(--st-floor-edge)" />
        <g fill="var(--st-floor-accent)" opacity="0.7">
          <circle cx="30" cy="84" r="1.4" />
          <circle cx="70" cy="92" r="1.1" />
          <circle cx="88" cy="86" r="1.3" />
        </g>
      </g>
    </>
  ),
};

const SectionGlyph = ({ section = "active", size = 108, showSurface = true }) => {
  const m = STRATA_SECTIONS[section];
  if (!m) return null;
  return (
    <svg
      width={size} height={size} viewBox="0 0 108 108"
      role="img" aria-label={`${m.label}, ${m.sub}`}
      style={{ display: "block", flex: "0 0 auto" }}
    >
      <title>{`${m.label}, ${m.sub}`}</title>
      <StrataDefs />
      {STRATA_GLYPH[section]}
      {showSurface && (
        <line x1="0" y1="40" x2="108" y2="40" stroke="var(--st-surface-line)" strokeWidth="1.2" opacity="0.6" />
      )}
      <rect x="0.5" y="0.5" width="107" height="107" rx="10" fill="none"
        stroke="var(--st-active-edge)" strokeOpacity="0.18" strokeWidth="0.75" />
    </svg>
  );
};

const StrataColumn = ({ width = 150 }) => (
  <svg width={width} viewBox="0 0 150 500" role="img" aria-label="Strata column" style={{ display: "block" }}>
    <title>Strata column</title>
    <StrataDefs />
    <clipPath id="st-col"><rect width="150" height="500" rx="10" /></clipPath>
    <g clipPath="url(#st-col)">
      <rect width="150" height="100" fill="url(#st-sky)" />
      <ellipse cx="60" cy="44" rx="34" ry="24" fill="url(#st-crown)" />
      <ellipse cx="96" cy="40" rx="30" ry="22" fill="var(--st-canopy-bg-deep)" />
      <rect x="72" y="58" width="6" height="42" fill="var(--st-canopy-trunk)" />
      <rect y="100" width="150" height="80" fill="url(#st-active)" />
      <rect y="180" width="150" height="120" fill="url(#st-perma)" />
      <g fill="url(#st-ice)" stroke="var(--st-perma-accent-2)" strokeWidth="0.4" opacity="0.9">
        <polygon points="30,210 70,206 78,250 36,256" />
        <polygon points="90,220 124,216 130,258 94,262" />
      </g>
      <rect y="300" width="150" height="120" fill="url(#st-soil)" />
      <rect y="420" width="150" height="80" fill="url(#st-sea)" />
      <path d="M0 440 Q40 432 75 440 T150 438 L150 500 L0 500 Z" fill="url(#st-bed)" />
      <path d="M0 462 Q40 456 75 462 T150 460 L150 500 L0 500 Z" fill="var(--st-floor-sediment)" />
      <path d="M75 86 C68 110 60 140 70 175 C76 200 70 240 72 295 C74 330 60 370 75 418"
        stroke="var(--st-canopy-trunk)" strokeWidth="2.4" fill="none" />
      <g stroke="var(--st-rhizo-accent-2)" strokeWidth="0.8" fill="none" opacity="0.85">
        <path d="M70 175 C56 190 44 200 40 220" />
        <path d="M70 175 C86 192 100 202 108 222" />
        <path d="M72 295 C58 312 48 326 44 348" />
        <path d="M72 295 C88 312 100 326 106 348" />
      </g>
      <g fill="var(--st-rhizo-accent)">
        <circle cx="40" cy="220" r="2" />
        <circle cx="108" cy="222" r="2" />
        <circle cx="44" cy="348" r="2" />
        <circle cx="106" cy="348" r="2" />
      </g>
    </g>
    <line x1="0" y1="100" x2="150" y2="100" stroke="var(--st-surface-line)" strokeWidth="1.2" opacity="0.6" />
    <rect x="0.5" y="0.5" width="149" height="499" rx="10" fill="none"
      stroke="var(--st-active-edge)" strokeOpacity="0.2" strokeWidth="0.75" />
  </svg>
);

// Content map, voice is image-led and scene-first.
const STRATA_CONTENT = {
  active: {
    key: "active", label: "Active layer", sub: "intro",
    accent: "var(--st-active-accent-2)",
    epigraph: "Everything here moves. It is the only part of the ground that answers.",
    standfirst: "This is the surface that thaws each season and freezes again, the thin skin where weather and earth negotiate. Nothing is settled here yet. Read it as the place you and the material first touch, before either of you has committed to anything.",
  },
  perma: {
    key: "perma", label: "Permafrost", sub: "core ideas",
    accent: "var(--st-perma-accent-2)",
    epigraph: "Beneath the thaw, the ground that does not move.",
    standfirst: "Everything above rests on this. It is frozen not because it is dead but because it is load-bearing, the substrate that lets the surface cycle without collapsing. Handle it carefully. A layer like this degrades slowly, then all at once.",
  },
  canopy: {
    key: "canopy", label: "Canopy", sub: "case studies",
    accent: "var(--st-canopy-bg)",
    epigraph: "The part that reaches the light, and gets photographed.",
    standfirst: "Up here the abstractions become things you can see. This is the stratum outsiders point to, the visible proof that something is growing underneath. It rises above the surface on purpose. Case studies are where the work stops being theory and starts being observed.",
  },
  rhizo: {
    key: "rhizo", label: "Rhizosphere", sub: "field guide / toolkit",
    accent: "var(--st-rhizo-accent-2)",
    epigraph: "Where the roots meet the soil and trade.",
    standfirst: "This is the exchange layer, the narrow zone where what you have made passes into someone else's growth. Less a place where ideas live than where they are taken up and metabolized. Everything here is built to be lifted out and used.",
  },
  floor: {
    key: "floor", label: "Seafloor", sub: "annexes / about",
    accent: "var(--st-floor-accent)",
    epigraph: "The deepest floor, where everything finally settles.",
    standfirst: "Nothing here is in a hurry. Sources, notes, provenance, the record of how the rest came to be, all of it drifts down and accumulates in the dark. Rarely disturbed, but this is where the account is kept.",
  },
};

const STRATA_ORDER = ["active", "perma", "canopy", "rhizo", "floor"];

// SectionHead-equivalent: glyph + sub + label + epigraph + standfirst.
// Named StrataHead to avoid collision with the existing SectionHead atom.
const StrataHead = ({ section, size = 96 }) => {
  const s = STRATA_CONTENT[section];
  if (!s) return null;
  return (
    <header className="strata-head" data-section={section} style={{ "--accent": s.accent }}>
      <SectionGlyph section={section} size={size} />
      <div className="strata-head__text">
        <p className="strata-head__sub">{s.sub}</p>
        <h2 className="strata-head__title">{s.label}</h2>
        <p className="strata-head__epigraph">{s.epigraph}</p>
        {s.standfirst && <p className="strata-head__standfirst">{s.standfirst}</p>}
      </div>
    </header>
  );
};

Object.assign(window, {
  STRATA_SECTIONS, STRATA_CONTENT, STRATA_ORDER,
  SectionGlyph, StrataColumn, StrataHead,
});
