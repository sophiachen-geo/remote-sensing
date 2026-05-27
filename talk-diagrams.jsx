// =======================================================================
// Diagrams, SVG and HTML interactive visualisations for the talk.
// Loaded after talk-painting.jsx.
// =======================================================================

// -----------------------------------------------------------------------
// 1) BoundaryLayerSchematic, vertical altitude schematic, satellite to indoor
// -----------------------------------------------------------------------
const BoundaryLayerSchematic = ({ height = 620 }) => {
  const stops = [
    { y: 700000, name: "satellite",             note: "700 km, orbit, synoptic",                       color: "var(--lapis)",   glyph: "✦", side: "Plato"     },
    { y: 12000,  name: "plane and GHGSat",       note: "12 km, upper troposphere, column retrievals",  color: "var(--lapis-2)", glyph: "✈", side: "Plato"     },
    { y: 1000,   name: "boundary layer top",     note: "approximately 1 km, the layer where weather mixes", color: "var(--ochre)", glyph: "─", side: "frontier" },
    { y: 120,    name: "UAV or drone",           note: "120 m, sub cloud, field campaign",             color: "var(--moss)",    glyph: "◆", side: "drone"     },
    { y: 25,     name: "canopy and rooftops",    note: "25 m, the surface the satellite calls surface", color: "var(--moss)",   glyph: "▲", side: "ground"    },
    { y: 1.4,    name: "body altitude",          note: "1.4 m, the bottom ten metres where bodies breathe", color: "var(--terra)", glyph: "✜", side: "Aristotle" },
    { y: -15,    name: "indoor, tunnel, subway", note: "minus 15 m, the M1 metro, 1,693 ppm CO₂",      color: "var(--terra-2)", glyph: "◧", side: "Aristotle" },
  ];

  const sLog = (y) => Math.sign(y || 0.01) * Math.log10(Math.abs(y) + 1);
  const maxY = sLog(900000);
  const minY = sLog(-25);
  const range = maxY - minY;
  const topPct = (y) => ((maxY - sLog(y)) / range) * 100;

  const blTop = topPct(1000);
  const blBottom = topPct(0);

  return (
    <div style={{
      position: "relative", height, width: "100%",
      background: "linear-gradient(180deg, var(--lapis-tint) 0%, var(--paper) 38%, var(--paper-2) 100%)",
      border: "1px solid var(--rule)",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", left: 0, right: 0,
        top: `${blTop}%`, height: `${blBottom - blTop}%`,
        background: "color-mix(in oklch, var(--ochre-tint) 70%, transparent)",
        borderTop: "1px dashed var(--ochre)",
        borderBottom: "1.5px solid var(--ink-2)",
      }}>
        <div style={{
          position: "absolute", right: 24, top: 12,
          fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: "0.20em",
          color: "var(--ochre)", textTransform: "uppercase",
          padding: "4px 10px", background: "var(--paper)",
          border: "1px solid var(--ochre)",
        }}>BOUNDARY LAYER, ≈ 1 km</div>
      </div>

      <div style={{
        position: "absolute", left: 0, right: 0,
        top: `${blBottom}%`, bottom: 0,
        backgroundImage: "repeating-linear-gradient(135deg, var(--paper-3) 0 1px, transparent 1px 8px)",
        opacity: 0.7,
      }} />

      {stops.map((s, i) => (
        <div key={i} style={{
          position: "absolute", left: 0, right: 0,
          top: `${topPct(s.y)}%`, transform: "translateY(-50%)",
          display: "grid",
          gridTemplateColumns: "120px 36px 1fr auto 110px",
          alignItems: "center", padding: "0 24px", gap: 14,
        }}>
          <div style={{ textAlign: "right" }}>
            <div className="num" style={{
              fontSize: 18, color: s.color, lineHeight: 1, letterSpacing: "-0.01em",
            }}>
              {s.y >= 1000 ? `${(s.y/1000).toLocaleString()} km`
                : s.y >= 1  ? `${s.y} m`
                : s.y >= 0  ? `${s.y} m`
                : `${s.y} m`}
            </div>
          </div>

          <div style={{
            width: 28, height: 28,
            background: s.color, color: "var(--paper)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--mono)", fontSize: 14, borderRadius: "50%",
            border: "2px solid var(--paper)",
            boxShadow: `0 0 0 1px ${s.color}`,
          }}>{s.glyph}</div>

          <div style={{
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <span className="serif" style={{
              fontSize: 17, color: "var(--ink)", fontWeight: 500, whiteSpace: "nowrap",
            }}>{s.name}</span>
            <div style={{
              flex: 1, height: 0,
              borderTop: `1px ${s.y === 1000 ? "dashed" : "solid"} ${s.color}`,
              opacity: 0.5,
            }} />
          </div>

          <div className="mono" style={{
            fontSize: 10.5, letterSpacing: "0.06em", color: "var(--ink-2)",
            textTransform: "uppercase", textAlign: "right",
          }}>{s.note}</div>

          <div style={{
            textAlign: "left", fontFamily: "var(--mono)",
            fontSize: 10, letterSpacing: "0.16em", color: s.color,
            textTransform: "uppercase",
          }}>{s.side === "Plato" ? "↑ Plato" : s.side === "Aristotle" ? "→ Aristotle" : ""}
          </div>
        </div>
      ))}

      <div style={{
        position: "absolute", left: 6, top: "50%",
        transform: "translateY(-50%) rotate(-90deg)", transformOrigin: "left center",
        fontFamily: "var(--mono)", fontSize: 9.5, letterSpacing: "0.20em",
        color: "var(--ink-3)", textTransform: "uppercase", whiteSpace: "nowrap",
      }}>↑ altitude, log scale</div>
    </div>
  );
};

// -----------------------------------------------------------------------
// 2) FivePerspectivesWheel, radial diagram and detail panel
// -----------------------------------------------------------------------
const FivePerspectivesWheel = () => {
  const [active, setActive] = React.useState("sky");
  const data = FIVE_PERSPECTIVES.find(p => p.id === active) || FIVE_PERSPECTIVES[0];

  const cx = 200, cy = 200, R = 145;
  const vertices = FIVE_PERSPECTIVES.map((p, i) => {
    const angle = (-90 + i * 72) * Math.PI / 180;
    return {
      ...p,
      x: cx + R * Math.cos(angle),
      y: cy + R * Math.sin(angle),
      angle,
    };
  });

  return (
    <div style={{
      display: "grid", gridTemplateColumns: "minmax(380px, 1fr) 1.2fr",
      gap: 36, alignItems: "stretch",
    }}>
      <div style={{
        background: "var(--ink)", padding: 8,
        position: "relative",
      }}>
        <svg viewBox="0 0 400 400" width="100%" height="100%" style={{ display: "block" }}>
          <polygon
            points={vertices.map(v => `${v.x},${v.y}`).join(" ")}
            fill="none" stroke="color-mix(in oklch, var(--paper) 18%, transparent)"
            strokeWidth="1" strokeDasharray="2 4"
          />
          {vertices.map((v) => (
            <line key={v.id}
              x1={cx} y1={cy} x2={v.x} y2={v.y}
              stroke={v.color}
              strokeWidth={active === v.id ? 2.5 : 1}
              strokeOpacity={active === v.id ? 1 : 0.45}
            />
          ))}

          <circle cx={cx} cy={cy} r="56"
            fill="var(--paper)" stroke="var(--ochre-2)" strokeWidth="2" />
          <text x={cx} y={cy - 8} fontFamily="Newsreader, serif"
            fontSize="26" fill="var(--ink)" textAnchor="middle"
            fontWeight="500" letterSpacing="-0.02em">Risk</text>
          <text x={cx} y={cy + 12} fontFamily="JetBrains Mono, monospace"
            fontSize="8.5" fill="var(--ochre)" textAnchor="middle"
            letterSpacing="2">UNDRR</text>
          <text x={cx} y={cy + 28} fontFamily="JetBrains Mono, monospace"
            fontSize="7" fill="var(--ink-3)" textAnchor="middle"
            letterSpacing="1.2">HAZARD, EXPOSURE</text>
          <text x={cx} y={cy + 40} fontFamily="JetBrains Mono, monospace"
            fontSize="7" fill="var(--ink-3)" textAnchor="middle"
            letterSpacing="1.2">VULNERABILITY, CAPACITY</text>

          {vertices.map((v) => {
            const on = active === v.id;
            return (
              <g key={v.id} style={{ cursor: "pointer" }}
                onClick={() => setActive(v.id)}>
                {on && (
                  <circle cx={v.x} cy={v.y} r="34"
                    fill="none" stroke={v.color} strokeWidth="1.5" opacity="0.55" />
                )}
                <circle cx={v.x} cy={v.y} r={on ? "28" : "22"}
                  fill={v.color} />
                <text x={v.x} y={v.y + 5}
                  fontFamily="JetBrains Mono, monospace"
                  fontSize={on ? "18" : "16"}
                  fill="var(--paper)" textAnchor="middle">
                  {v.glyph}
                </text>
              </g>
            );
          })}

          {vertices.map((v) => {
            const labelR = 188;
            const lx = cx + labelR * Math.cos(v.angle);
            const ly = cy + labelR * Math.sin(v.angle);
            const anchor = Math.abs(Math.cos(v.angle)) < 0.3
              ? "middle"
              : Math.cos(v.angle) > 0 ? "start" : "end";
            return (
              <g key={v.id}>
                <text x={lx} y={ly}
                  fontFamily="Newsreader, serif" fontSize="14"
                  fill={active === v.id ? v.color : "var(--paper)"}
                  textAnchor={anchor} dominantBaseline="middle"
                  fontWeight={active === v.id ? "600" : "400"}>
                  {v.name}
                </text>
              </g>
            );
          })}
        </svg>

        <div style={{
          position: "absolute", bottom: 16, left: 16, right: 16,
          color: "color-mix(in oklch, var(--paper) 60%, transparent)",
          fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.16em",
          textTransform: "uppercase", textAlign: "center",
        }}>
          fig. 02, click any perspective
        </div>
      </div>

      <div style={{
        background: "var(--paper)", border: "1px solid var(--rule)",
        borderTop: `5px solid ${data.color}`,
        padding: "28px 30px",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <Pill tone="ink">
            <span style={{ color: data.color }}>{data.glyph}</span> &nbsp; {data.affinity}
          </Pill>
          <span className="mono" style={{
            fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}>perspective, {String(FIVE_PERSPECTIVES.findIndex(p=>p.id===data.id)+1).padStart(2,"0")} of 05</span>
        </div>
        <h4 className="serif" style={{
          margin: "12px 0 4px", fontSize: 38, lineHeight: 1.05,
          fontWeight: 400, letterSpacing: "-0.018em",
        }}>{data.name}</h4>
        <div className="mono" style={{
          fontSize: 11, color: data.color, letterSpacing: "0.10em",
          textTransform: "uppercase",
        }}>{data.sub}</div>

        <div style={{
          marginTop: 18, padding: "14px 16px",
          background: "var(--paper-2)", borderLeft: `3px solid ${data.color}`,
        }}>
          <div className="caps" style={{ color: data.color, marginBottom: 6 }}>Contributes</div>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--ink)" }}>
            {data.contributes}
          </p>
        </div>

        <div style={{ marginTop: 20 }}>
          <div className="caps" style={{ color: "var(--ink-3)", marginBottom: 10 }}>Sees, knows</div>
          <ul style={{
            margin: 0, padding: 0, listStyle: "none",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 18px",
          }}>
            {data.sees.map((it, i) => (
              <li key={i} style={{
                fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.45,
                paddingLeft: 14, position: "relative",
              }}>
                <span style={{
                  position: "absolute", left: 0, top: "0.45em",
                  width: 6, height: 6, background: data.color, opacity: 0.5,
                }} />
                {it}
              </li>
            ))}
          </ul>
        </div>

        {data.note && (
          <p className="serif" style={{
            margin: "18px 0 0", paddingTop: 14,
            borderTop: "1px solid var(--rule-soft)",
            fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)",
            fontStyle: "italic",
          }}>{data.note}</p>
        )}
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------
// 3) HeuristicStackDiagram, three layers as vertical stack with arrows
// -----------------------------------------------------------------------
const HeuristicStackDiagram = () => {
  const [active, setActive] = React.useState("ethical");
  const layers = [...HEURISTIC_LAYERS].reverse();

  return (
    <div>
      <div style={{
        textAlign: "center", padding: "16px 0 8px",
        fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.20em",
        color: "var(--terra)", textTransform: "uppercase",
      }}>
        ↑ a life, a decision, a consequence ↑
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr",
        border: "1px solid var(--rule)",
      }}>
        {layers.map((L, i) => {
          const on = active === L.id;
          return (
            <React.Fragment key={L.id}>
              <button onClick={() => setActive(L.id)} style={{
                appearance: "none", border: "none", background: on ? "var(--paper-2)" : "var(--paper)",
                padding: 0, cursor: "pointer", color: "var(--ink)",
                textAlign: "left", borderLeft: `5px solid ${L.color}`,
                transition: "background 200ms",
              }}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  alignItems: "stretch", padding: "22px 26px",
                  gap: 28,
                }}>
                  <div>
                    <div className="num" style={{
                      fontSize: 48, color: L.color, lineHeight: 0.9,
                      letterSpacing: "-0.02em",
                    }}>{L.n}</div>
                    <div className="mono" style={{
                      marginTop: 6, fontSize: 11, color: L.color, letterSpacing: "0.16em",
                      textTransform: "uppercase",
                    }}>{L.verb}</div>
                  </div>
                  <div>
                    <div className="caps" style={{ color: "var(--ink-3)", marginBottom: 8 }}>Layer, {L.name}</div>
                    <h4 className="serif" style={{
                      margin: 0, fontSize: 22, lineHeight: 1.25, fontWeight: 500,
                      color: "var(--ink)", maxWidth: 720,
                    }}>{L.headline}</h4>

                    {on && (
                      <>
                        <p style={{
                          margin: "12px 0 14px", fontSize: 14.5, lineHeight: 1.6,
                          color: "var(--ink-2)", maxWidth: 720,
                        }}>{L.body}</p>
                        <div style={{
                          display: "flex", flexWrap: "wrap", gap: 6,
                        }}>
                          {L.items.map((it, k) => (
                            <Chip key={k} accent={L.color} on>{it}</Chip>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </button>

              {i < layers.length - 1 && (
                <div style={{
                  borderBottom: "1px solid var(--rule)",
                  borderTop: "1px solid var(--rule)",
                  background: "var(--paper-2)",
                  padding: "8px 26px",
                  display: "flex", justifyContent: "center", alignItems: "center", gap: 12,
                  fontFamily: "var(--mono)", fontSize: 10.5, letterSpacing: "0.20em",
                  color: "var(--ink-3)", textTransform: "uppercase",
                }}>
                  <span style={{ width: 32, height: 1, background: "var(--ink-3)" }} />
                  <span>↑ becomes ↑</span>
                  <span style={{ width: 32, height: 1, background: "var(--ink-3)" }} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div style={{
        textAlign: "center", padding: "8px 0 16px",
        fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.20em",
        color: "var(--lapis)", textTransform: "uppercase",
      }}>
        ↑ signal, reflectance, backscatter, brightness ↑
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------
// 4) ChangeFourWaysGrid, looks, sounds, felt, means
// -----------------------------------------------------------------------
const ChangeFourWaysGrid = () => {
  const [active, setActive] = React.useState(null);
  return (
    <div>
      <div style={{
        textAlign: "center", padding: "12px 0",
        fontFamily: "var(--serif)", fontSize: 26, lineHeight: 1.3,
        fontStyle: "italic", color: "var(--ink)",
      }}>
        What <em style={{ color: "var(--terra)" }}>is</em> change?
        <span style={{
          display: "block", fontFamily: "var(--mono)", fontSize: 11,
          letterSpacing: "0.20em", color: "var(--ink-3)",
          textTransform: "uppercase", marginTop: 6,
        }}>four instruments, four questions, one phenomenon</span>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        border: "1px solid var(--rule)", marginTop: 18,
      }}>
        {CHANGE_FOUR_WAYS.map((c, i) => {
          const on = active === c.id;
          const borderRight = i % 2 === 0 ? "1px solid var(--rule)" : "none";
          const borderBottom = i < 2 ? "1px solid var(--rule)" : "none";
          return (
            <button key={c.id}
              onMouseEnter={() => setActive(c.id)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(on ? null : c.id)}
              style={{
                appearance: "none", border: "none",
                background: on ? `color-mix(in oklch, ${c.color} 8%, var(--paper))` : "var(--paper)",
                borderRight, borderBottom,
                padding: "28px 28px 30px", textAlign: "left", cursor: "pointer",
                color: "var(--ink)", minHeight: 280, position: "relative",
                transition: "background 200ms",
              }}>
              <div style={{
                position: "absolute", top: 22, right: 24,
                fontSize: 28, color: c.color,
                opacity: on ? 1 : 0.45,
              }}>{c.glyph}</div>

              <div className="mono" style={{
                fontSize: 10.5, letterSpacing: "0.16em",
                color: c.color, textTransform: "uppercase",
              }}>via {c.subject}</div>

              <h4 className="serif" style={{
                margin: "10px 0 0", fontSize: 38, lineHeight: 1.0,
                fontWeight: 400, letterSpacing: "-0.02em",
              }}>{c.name}</h4>

              <p style={{
                margin: "14px 0 0", fontSize: 14, lineHeight: 1.55,
                color: "var(--ink-2)", fontStyle: "italic", maxWidth: 380,
              }}>{c.question}</p>

              <div style={{
                marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--rule-soft)",
                display: "grid", gap: 6,
              }}>
                {c.examples.map((ex, k) => (
                  <div key={k} style={{
                    display: "grid", gridTemplateColumns: "14px 1fr", gap: 8,
                    fontSize: 13, color: "var(--ink-2)",
                  }}>
                    <span style={{
                      width: 6, height: 6, background: c.color, marginTop: 7,
                      opacity: on ? 1 : 0.4,
                    }} />
                    {ex}
                  </div>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------
// 5) AtollVsPixelDiagram, scale collision visual
// -----------------------------------------------------------------------
const AtollVsPixelDiagram = ({ height = 360 }) => (
  <svg viewBox="0 0 540 360" width="100%" height={height} style={{ display: "block" }}>
    <rect x="40" y="40" width="380" height="280"
      fill="var(--lapis-tint)" stroke="var(--lapis)" strokeWidth="1.5" />
    <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="var(--lapis)" letterSpacing="1">
      <text x="230" y="28" textAnchor="middle">5 km, Sentinel-5P TROPOMI pixel</text>
      <g transform="translate(28 180) rotate(-90)">
        <text textAnchor="middle">3.5 km</text>
      </g>
    </g>

    <g stroke="var(--lapis)" strokeOpacity="0.2" strokeWidth="0.5">
      {Array.from({length: 7}).map((_,i) => (
        <line key={"v"+i} x1={40+(380/8)*(i+1)} y1="40" x2={40+(380/8)*(i+1)} y2="320" />
      ))}
      {Array.from({length: 5}).map((_,i) => (
        <line key={"h"+i} x1="40" y1={40+(280/6)*(i+1)} x2="420" y2={40+(280/6)*(i+1)} />
      ))}
    </g>

    <g transform="translate(230, 180)">
      <ellipse cx="0" cy="0" rx="14" ry="3.5"
        fill="none" stroke="var(--terra)" strokeWidth="1.4" />
      <ellipse cx="0" cy="0" rx="9" ry="1.8"
        fill="none" stroke="var(--terra)" strokeWidth="1" strokeDasharray="2 1" />
      <circle cx="0" cy="0" r="1" fill="var(--terra)" />
    </g>
    <line x1="248" y1="180" x2="350" y2="125"
      stroke="var(--terra)" strokeWidth="1" strokeDasharray="3 2" />
    <g transform="translate(354, 110)" fontFamily="Newsreader, serif">
      <text fontSize="14" fill="var(--terra)" fontWeight="500">Tuvalu</text>
      <text y="14" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--ink-3)" letterSpacing="1">
        approx. 26 km², 11,000 people
      </text>
    </g>

    <g transform="translate(450, 50)">
      <text fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--ink-3)" letterSpacing="1.5">VERTICAL</text>
      <text y="12" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--ink-3)" letterSpacing="1.5">UNCERTAINTY</text>

      <rect x="0" y="30" width="60" height="220"
        fill="var(--paper-2)" stroke="var(--rule)" />

      <rect x="0" y="30" width="60" height="120"
        fill="color-mix(in oklch, var(--terra-2) 30%, transparent)" />
      <text x="64" y="50" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--terra-2)" letterSpacing="1">
        SRTM RMSE
      </text>
      <text x="64" y="62" fontFamily="Newsreader, serif" fontSize="14" fill="var(--terra-2)" fontWeight="500">
        6 to 10 m
      </text>

      <line x1="-6" y1="200" x2="66" y2="200" stroke="var(--terra)" strokeWidth="2" />
      <text x="64" y="205" fontFamily="Newsreader, serif" fontSize="13" fill="var(--terra)" fontWeight="500">
        4.5 m, Tuvalu max
      </text>

      <line x1="-2" y1="250" x2="62" y2="250" stroke="var(--lapis)" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="64" y="254" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--lapis)" letterSpacing="1">
        sea level
      </text>
    </g>

    <text x="270" y="350" fontFamily="JetBrains Mono, monospace" fontSize="9.5"
      fill="var(--ink-3)" textAnchor="middle" letterSpacing="2">
      THE INSTRUMENT'S NOISE FLOOR EXCEEDS THE THING BEING MEASURED
    </text>
  </svg>
);

// -----------------------------------------------------------------------
// 6) VisibilityBalance, protection and exposure
// -----------------------------------------------------------------------
const VisibilityBalance = () => {
  const [hover, setHover] = React.useState(null);
  return (
    <div style={{ border: "1px solid var(--rule)" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 60px 1fr",
        background: "var(--paper-2)",
        borderBottom: "1px solid var(--rule)",
        padding: "12px 0",
      }}>
        <div style={{ textAlign: "right", paddingRight: 18 }}>
          <span className="caps" style={{ color: "var(--moss)" }}>← protects</span>
        </div>
        <div style={{ textAlign: "center" }}>
          <span className="caps" style={{ color: "var(--ochre)" }}>or</span>
        </div>
        <div style={{ paddingLeft: 18 }}>
          <span className="caps" style={{ color: "var(--terra)" }}>exposes →</span>
        </div>
      </div>
      {VISIBILITY_PAIRS.map((p, i) => {
        const on = hover === i;
        return (
          <div key={i}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            style={{
              display: "grid", gridTemplateColumns: "1fr 90px 1fr",
              borderBottom: i < VISIBILITY_PAIRS.length - 1 ? "1px solid var(--rule-soft)" : "none",
              background: on ? "var(--paper-2)" : "var(--paper)",
              transition: "background 150ms",
            }}>
            <div style={{
              padding: "16px 18px", textAlign: "right",
              fontSize: 14.5, color: "var(--ink)", fontStyle: "italic",
              borderRight: `2px solid ${on ? "var(--moss)" : "var(--rule-soft)"}`,
            }}>{p.protects}</div>
            <div style={{
              display: "flex", justifyContent: "center", alignItems: "center",
            }}>
              <span className="mono" style={{
                fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.10em",
                textTransform: "uppercase", textAlign: "center", lineHeight: 1.3,
              }}>{p.sensor}</span>
            </div>
            <div style={{
              padding: "16px 18px",
              fontSize: 14.5, color: "var(--terra)", fontStyle: "italic",
              borderLeft: `2px solid ${on ? "var(--terra)" : "var(--rule-soft)"}`,
            }}>{p.exposes}</div>
          </div>
        );
      })}
    </div>
  );
};

Object.assign(window, {
  BoundaryLayerSchematic, FivePerspectivesWheel, HeuristicStackDiagram,
  ChangeFourWaysGrid, AtollVsPixelDiagram, VisibilityBalance,
});
