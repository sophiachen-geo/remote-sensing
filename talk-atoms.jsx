// =======================================================================
// Atoms, shared components across tabs.
// =======================================================================

const accentVar = (key) => ({
  terra: "var(--terra)", lapis: "var(--lapis)", ochre: "var(--ochre)",
  moss: "var(--moss)", plum: "var(--plum)", ink: "var(--ink)",
}[key] || "var(--ink)");
const accentTint = (key) => ({
  terra: "var(--terra-tint)", lapis: "var(--lapis-tint)", ochre: "var(--ochre-tint)",
  moss: "var(--moss-tint)", plum: "var(--plum-tint)", ink: "var(--paper-2)",
}[key] || "var(--paper-2)");

const Sigil = ({ color = "var(--terra)", size = 9, rot = 45, style }) => (
  <span style={{
    display: "inline-block", width: size, height: size,
    background: color, transform: `rotate(${rot}deg)`,
    marginRight: 8, verticalAlign: "middle", ...style,
  }} />
);

const Kicker = ({ children, color = "var(--terra)" }) => (
  <div className="kicker" style={{ color, marginBottom: 14 }}>{children}</div>
);

const Pill = ({ tone = "ink", children, style }) => {
  const bg = accentTint(tone), fg = accentVar(tone);
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "3px 9px",
      background: bg, color: fg,
      border: `1px solid color-mix(in oklch, ${fg} 35%, transparent)`,
      borderRadius: 999,
      fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: "0.08em",
      textTransform: "uppercase", fontWeight: 500, ...style,
    }}>{children}</span>
  );
};

const Rule = ({ tone = "var(--rule)", style }) => (
  <hr style={{ border: 0, borderTop: `1px solid ${tone}`, margin: 0, ...style }} />
);

const SectionHead = ({ index, eyebrow, title, lede, color = "var(--terra)" }) => (
  <div style={{
    display: "grid", gridTemplateColumns: "60px 1fr", columnGap: 32,
    rowGap: 8, alignItems: "baseline", marginBottom: 40,
  }}>
    <div className="mono" style={{
      color: "var(--ink-3)", fontSize: 11, letterSpacing: "0.16em",
      textTransform: "uppercase", paddingTop: 8,
    }}>§ {index}</div>
    <div>
      <Kicker color={color}>{eyebrow}</Kicker>
      <h2 className="serif" style={{
        margin: 0, fontSize: 48, lineHeight: 1.02, fontWeight: 400,
        letterSpacing: "-0.014em", maxWidth: 920,
      }}>{title}</h2>
      {lede && (
        <p style={{
          margin: "20px 0 0", maxWidth: 760, color: "var(--ink-2)",
          fontSize: 17, lineHeight: 1.6,
        }}>{lede}</p>
      )}
    </div>
  </div>
);

const Prose = ({ children, max = 720, style }) => (
  <div style={{ maxWidth: max, ...style }}>{children}</div>
);

const P = ({ children, ...rest }) => (
  <p {...rest} style={{
    margin: "0 0 18px", fontSize: 16, lineHeight: 1.65,
    color: "var(--ink-2)", textWrap: "pretty",
    ...rest.style,
  }}>{children}</p>
);

const Lead = ({ children, ...rest }) => (
  <p {...rest} style={{
    margin: "0 0 22px", fontSize: 20, lineHeight: 1.55,
    fontFamily: "var(--serif)", fontWeight: 400,
    color: "var(--ink-2)",
    textWrap: "pretty", ...rest.style,
  }}>{children}</p>
);

const Fr = ({ children }) => (
  <em className="fr">{children}</em>
);

// Inline claim, plain serif sentence per the design system. No italics, no quotation marks.
const Pull = ({ children, by }) => (
  <div style={{ margin: "30px 0", maxWidth: 760 }}>
    {by && (
      <div className="mono" style={{
        marginBottom: 10, fontSize: 11, letterSpacing: "0.16em",
        textTransform: "uppercase", color: "var(--ink-3)",
      }}>{by}</div>
    )}
    <p className="serif" style={{
      margin: 0, fontSize: 22, lineHeight: 1.45, fontWeight: 500,
      letterSpacing: "-0.008em", color: "var(--ink)",
    }}>{children}</p>
  </div>
);

const BigStat = ({ value, label, accent = "var(--terra)", size = 72, sub }) => (
  <div>
    <div className="num" style={{
      fontSize: size, lineHeight: 0.92, color: accent,
      letterSpacing: "-0.028em", fontWeight: 400,
    }}>{value}</div>
    <div style={{
      marginTop: 12, fontSize: 14, lineHeight: 1.5,
      color: "var(--ink-2)", maxWidth: 260,
    }}>{label}</div>
    {sub && (
      <div className="mono" style={{
        marginTop: 8, fontSize: 11, letterSpacing: "0.08em",
        color: "var(--ink-3)", textTransform: "uppercase",
      }}>{sub}</div>
    )}
  </div>
);

const FactList = ({ items, color = "var(--terra)" }) => (
  <ul style={{ margin: 0, padding: 0, listStyle: "none", borderTop: "1px solid var(--rule-soft)" }}>
    {items.map((it, i) => (
      <li key={i} style={{
        display: "grid", gridTemplateColumns: "130px 1fr", gap: 18,
        padding: "14px 0", borderBottom: "1px solid var(--rule-soft)",
        alignItems: "baseline",
      }}>
        <span className="num" style={{
          fontSize: 22, color, letterSpacing: "-0.01em",
        }}>{it.k}</span>
        <span style={{ fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.55 }}>{it.v}</span>
      </li>
    ))}
  </ul>
);

const Chip = ({ children, accent = "var(--ink)", on = true, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      appearance: "none", cursor: onClick ? "pointer" : "default",
      border: `1px solid ${on ? accent : "var(--rule)"}`,
      background: on ? `color-mix(in oklch, ${accent} 10%, var(--paper))` : "var(--paper)",
      color: on ? accent : "var(--ink-3)",
      padding: "5px 10px",
      fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: "0.10em",
      textTransform: "uppercase", fontWeight: 500,
      borderRadius: 3,
    }}
  >{children}</button>
);

const Card = ({ children, style, pad = 24 }) => (
  <div style={{
    background: "var(--paper)", border: "1px solid var(--rule)",
    padding: pad, ...style,
  }}>{children}</div>
);

// =======================================================================
// Visual, an SVG roman-style pixel that represents one TROPOMI pixel
// with a walking trace overlaid.
// =======================================================================
const PixelWalk = ({ height = 360 }) => {
  const walk = "M 60 280 L 120 250 L 165 230 L 210 200 L 235 175 L 260 158 L 285 142 L 310 130 L 340 122 L 360 130 L 380 145 L 395 165 L 408 188 L 420 215 L 430 245";
  return (
    <svg viewBox="0 0 500 350" width="100%" height={height}
      style={{ display: "block", background: "var(--paper)" }}>
      <rect x="0.5" y="0.5" width="499" height="349" fill="var(--lapis-tint)" stroke="var(--lapis)" strokeWidth="1.2" />
      <g fontFamily="var(--mono)" fontSize="9" fill="var(--lapis)" letterSpacing="0.06em" textAnchor="middle">
        <text x="250" y="14">5 km, Sentinel-5P TROPOMI footprint</text>
        <g transform="translate(14 175) rotate(-90)">
          <text textAnchor="middle">3.5 km</text>
        </g>
      </g>
      <g stroke="var(--lapis)" strokeOpacity="0.18" strokeWidth="0.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={"v"+i} x1={50 * (i+1)} y1="20" x2={50 * (i+1)} y2="330" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={"h"+i} x1="20" y1={50 * (i+1)} x2="480" y2={50 * (i+1)} />
        ))}
      </g>
      <path d={walk} fill="none" stroke="var(--terra)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <circle cx="310" cy="130" r="6" fill="var(--terra)" />
        <circle cx="310" cy="130" r="14" fill="none" stroke="var(--terra)" strokeOpacity="0.4" />
        <g fontFamily="var(--mono)" fontSize="10" fill="var(--terra)" letterSpacing="0.06em">
          <text x="322" y="120">1,693 ppm, M1 metro</text>
          <text x="322" y="134" fill="var(--ink-3)">peak, 5:30 PM, May 2019</text>
        </g>
      </g>
      <g fontFamily="var(--mono)" fontSize="10" fill="var(--ink-3)" letterSpacing="0.04em">
        <text x="58" y="298">EPFL campus, 460</text>
        <text x="170" y="222">cars, 700 to 900</text>
        <text x="222" y="172">M1 boarding, 1280</text>
        <text x="378" y="160">tunnel exit, 1410</text>
        <text x="432" y="260">Ouchy, 410</text>
      </g>
      <text x="250" y="345" fontFamily="var(--mono)" fontSize="9" fill="var(--ink-3)" textAnchor="middle" letterSpacing="0.10em">
        THE ENTIRE WALK FITS INSIDE THIS ONE PIXEL
      </text>
    </svg>
  );
};

const CO2Gauge = ({ height = 220 }) => {
  const min = 350, max = 1800;
  const at = (ppm) => ((ppm - min) / (max - min)) * 100;
  const marks = [
    { ppm: 415,  label: "atmospheric background",            tone: "var(--moss)" },
    { ppm: 800,  label: "sick building syndrome threshold",  tone: "var(--ochre)" },
    { ppm: 945,  label: "Harvard CogFX cognition decline",   tone: "var(--ochre-2)" },
    { ppm: 1693, label: "M1 metro, Lausanne, May 2019",       tone: "var(--terra)" },
  ];
  return (
    <div style={{ position: "relative", minHeight: height, paddingTop: 60 }}>
      <div style={{
        position: "relative", height: 22,
        background: "linear-gradient(90deg, var(--moss-tint) 0%, var(--ochre-tint) 50%, var(--terra-tint) 100%)",
        border: "1px solid var(--rule)",
      }}>
        {marks.map((m, i) => (
          <div key={i} style={{
            position: "absolute", top: 0, bottom: 0,
            left: `${at(m.ppm)}%`, width: 2, background: m.tone,
          }} />
        ))}
        <div style={{
          position: "absolute", top: -56, right: 0,
          textAlign: "right",
        }}>
          <div className="num" style={{ fontSize: 36, lineHeight: 1, color: "var(--terra)" }}>1,693</div>
          <div className="mono" style={{ fontSize: 10, color: "var(--terra)", letterSpacing: "0.12em", marginTop: 2 }}>ppm CO₂</div>
        </div>
      </div>

      <div style={{ position: "relative", marginTop: 6, height: 16 }}>
        {marks.map((m, i) => {
          const pos = at(m.ppm);
          const anchorRight = pos > 92;
          return (
            <div key={i} style={{
              position: "absolute",
              left: anchorRight ? "auto" : `${pos}%`,
              right: anchorRight ? 0 : "auto",
              transform: anchorRight ? "none" : "translateX(-50%)",
              fontFamily: "var(--mono)", fontSize: 10, color: m.tone, whiteSpace: "nowrap",
            }}>{m.ppm}</div>
          );
        })}
      </div>
      <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px 24px" }}>
        {marks.map((m, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "baseline", fontSize: 13, color: "var(--ink-2)" }}>
            <span style={{ width: 8, height: 8, background: m.tone, display: "inline-block" }} />
            <span className="num" style={{ color: m.tone, fontSize: 16, minWidth: 50 }}>{m.ppm}</span>
            <span>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, {
  accentVar, accentTint, Sigil, Kicker, Pill, Rule, SectionHead, Prose,
  P, Lead, Fr, Pull, BigStat, FactList, Chip, Card, PixelWalk, CO2Gauge,
});
