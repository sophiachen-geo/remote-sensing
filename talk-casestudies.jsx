// =======================================================================
// Deep Dive. A collection of case studies. Each is either an interactive
// dashboard embedded inline (kind "embed"), or a long-form field essay
// rendered natively in the companion's type system (kind "essay").
// =======================================================================

const Sub = ({ kicker, color, children }) => (
  <div style={{ marginTop: 56, marginBottom: 18 }}>
    {kicker && <Kicker color={color}>{kicker}</Kicker>}
    <h3 className="serif" style={{
      margin: 0, fontSize: 28, lineHeight: 1.1, fontWeight: 400,
      letterSpacing: "-0.012em", maxWidth: 760,
    }}>{children}</h3>
  </div>
);

const KeyVList = ({ items, color }) => (
  <ul style={{ margin: "8px 0 0", padding: 0, listStyle: "none", borderTop: "1px solid var(--rule-soft)" }}>
    {items.map((it, i) => (
      <li key={i} style={{
        display: "grid", gridTemplateColumns: "180px 1fr", gap: 20,
        padding: "13px 0", borderBottom: "1px solid var(--rule-soft)", alignItems: "baseline",
      }}>
        <span className="mono" style={{
          fontSize: 11, letterSpacing: "0.10em", textTransform: "uppercase", color,
        }}>{it.k}</span>
        <span style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55 }}>{it.v}</span>
      </li>
    ))}
  </ul>
);

const TranslatorChain = ({ steps, color }) => (
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, margin: "24px 0 8px" }}>
    {steps.map((s, i) => (
      <React.Fragment key={i}>
        <Pill tone="ink" style={{ borderColor: `color-mix(in oklch, ${color} 45%, transparent)` }}>{s}</Pill>
        {i < steps.length - 1 && (
          <span className="mono" style={{ color, fontSize: 13 }}>&#8594;</span>
        )}
      </React.Fragment>
    ))}
  </div>
);

// A short standing-summary block placed at the top of each case study.
const ProjectSummary = ({ color, children }) => (
  <section style={{
    margin: "0 0 36px", padding: "26px 30px 28px",
    background: "var(--paper-2)",
    border: "1px solid var(--rule)",
    borderLeft: `3px solid ${color}`,
    maxWidth: 860,
  }}>
    <div className="mono" style={{
      fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
      color, marginBottom: 12, fontWeight: 500,
    }}>In one paragraph</div>
    <p className="serif" style={{
      margin: 0, fontSize: 17, lineHeight: 1.62, color: "var(--ink)",
      textWrap: "pretty",
    }}>{children}</p>
  </section>
);

const SocodeviCNAAS = ({ accent = "ochre" }) => {
  const ACC = accentVar(accent);
  const MAP_SRC = "case-studies/socodevi-senegal.html";
  const PROBLEMS = [
    { k: "Mixed CRS", v: "Decimal degrees and Universal Transverse Mercator (UTM) coordinates coexisted within a single column." },
    { k: "Transposition", v: "Latitude and longitude values were transposed in numerous rows." },
    { k: "Diacritics", v: "Accents were systematically dropped from place names." },
    { k: "Orthography", v: "Multiple spellings designated one and the same commune." },
    { k: "Assignment", v: "Roughly 1,095 villages carried uncertain station assignments." },
  ];
  const CURRICULUM = [
    "Overlay their own parcel maps onto the CNAAS gauge network.",
    "Verify whether the gauge serving them was geographically representative of their growing season.",
    "Flag drift in advance of payouts rather than after them.",
    "Contest index readings that diverged from local observation.",
    "Contribute their own GPS marks back into the database for the next reconciliation cycle.",
  ];
  const CHAIN = [
    "Geomatics consultant", "ArcGIS validator", "Cooperative officer (QGIS)",
    "Local working group", "Community radio", "Cooperative president", "CNAAS underwriter",
  ];
  const FRAMES = [
    { t: "Climate Information Services", a: "CIS", v: "Formalised in West Africa since about 2011, it treats climate data as an agricultural input comparable to seed or fertiliser, delivered along a value chain from data producers through interpreters to decision-makers." },
    { t: "Participatory GIS", a: "PGIS", v: "Geospatial tools acquire legitimacy only when their reference layers and interpretive authority are shared with the communities being mapped, rather than imposed upon them." },
    { t: "Adaptation finance infrastructure", a: "", v: "Index insurance, parametric cover, and drought-contingent transfers, each categorically dependent on a verified link between an environmental measurement and a list of beneficiaries." },
  ];

  return (
    <div>
      <ProjectSummary color={ACC}>
        The SOCODEVI and CNAAS case shows that remote sensing becomes useful when seasonal satellite evidence is reconciled with punctual ground measurements and institutional records. The public good problem is not simply drought monitoring; it is whether a smallholder farmer receives a fair insurance payout when rainfall becomes irregular. Parametric crop insurance depends on a precise chain: a village must be assigned to the correct rain gauge, the gauge must be correctly located, the rainfall threshold must reflect the growing season, and the resulting trigger must correspond to conditions experienced by farmers on the ground. Satellite rainfall products such as CHIRPS, IMERG, and TAMSAT help verify broader seasonal patterns, detect regional rainfall deficits, and compare gauge readings against independent estimates. Growing-season NDVI adds another layer by showing whether vegetation stress is consistent with reported rainfall conditions. But satellite products average rainfall over pixels of several kilometres, while insurance decisions are made for specific villages, parcels, and planting periods. A satellite can indicate a dry seasonal pattern; a rain gauge records a punctual measurement at one location; farmers observe whether rain actually arrived at the field when germination, flowering, or harvest depended on it. The methodological task is therefore reconciliation: cleaning gauge coordinates, correcting village names and assignments, comparing gauges with satellite-derived rainfall and vegetation trends, and creating a QGIS-literate cooperative network able to verify, interpret, and contest the system. Remote sensing supports decision-making by flagging inconsistencies, contextualizing local measurements, identifying seasonal anomalies, and strengthening transparency; ground gauges and cooperative knowledge keep the system accountable to actual farmers. The value of the case is that remote sensing is not treated as a replacement for field infrastructure. It becomes part of a care-oriented climate-information system where pixels, gauges, databases, and local observation are brought into relation so that adaptation finance reaches the right people for the right reasons.
      </ProjectSummary>

      <Prose max={760}>
        <Lead>
          Senegalese agriculture is overwhelmingly rainfed and dominated by smallholder
          farmers cultivating groundnut, millet, maize, and rice.
        </Lead>
        <P>
          Climate change has rendered the monsoon increasingly erratic, and traditional
          indemnity-based crop insurance, in which an adjuster visits the farm to assess
          each loss individually, is unworkable at smallholder scale, because the cost of
          assessment routinely exceeds the value of the average claim. Parametric, or index,
          insurance addresses this constraint by triggering automatic payouts when rainfall
          recorded at a designated gauge falls below a contracted threshold during the growing
          season, with no individual inspection required.
        </P>
      </Prose>

      <Sub kicker="The insurer" color={ACC}>A subsidised, public-private scheme</Sub>
      <Prose max={760}>
        <P>
          The national agricultural insurer that operates this scheme is the Compagnie
          Nationale d'Assurance Agricole du Sénégal (CNAAS), a public-private partnership
          established in 2008 with 45 percent state ownership and a 50 percent premium subsidy
          from the Senegalese government. Since its inception, CNAAS has enrolled more than
          500,000 farmers nationally.
        </P>
        <P>
          The viability of any parametric scheme rests on two assumptions.
        </P>
      </Prose>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, margin: "20px 0 4px" }}>
        {[
          ["01", "The recorded location of every gauge is correct."],
          ["02", "The village-to-gauge assignment used to determine beneficiaries is reliable."],
        ].map(([n, t]) => (
          <div key={n} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 16, alignItems: "baseline" }}>
            <span className="num" style={{ fontSize: 36, color: ACC, letterSpacing: "-0.02em" }}>{n}</span>
            <span style={{ fontSize: 16, lineHeight: 1.5, color: "var(--ink-2)" }}>{t}</span>
          </div>
        ))}
      </div>

      <Sub kicker="The substrate" color={ACC}>A database that was operationally compromised</Sub>
      <Prose max={760}>
        <P>
          The CNAAS network in 2023 comprised approximately 160 gauges distributed across nine
          regions, Kaffrine, Kolda, Vélingara, Ziguinchor, Sédhiou, Tambacounda, Fatick,
          Kaolack, and Thiès, installed by successive field teams across four annual cohorts
          from 2017 to 2020. The database we inherited was riddled with the residue of that
          piecemeal history:
        </P>
      </Prose>
      <div style={{ maxWidth: 860, margin: "8px 0 24px" }}>
        <KeyVList items={PROBLEMS} color={ACC} />
      </div>
      <Prose max={760}>
        <P>
          The Société de coopération pour le développement international (SOCODEVI) undertook
          this work in 2023 under funding from Global Affairs Canada.
        </P>
      </Prose>

      <Sub kicker="Phase one · reconciliation" color={ACC}>A Python pipeline against a validated reference</Sub>
      <Prose max={760}>
        <P>
          As geomatics consultant on the project, I developed a Python reconciliation pipeline
          combining pandas for data handling, fuzzywuzzy for string matching, and pyproj for
          coordinate projection, with the aim of aligning the CNAAS database against the
          populated-places reference for Senegal published by the United Nations Office for the
          Coordination of Humanitarian Affairs (OCHA), a validated dataset of 2,896 villages
          with complete administrative coding.
        </P>
        <P>
          The pipeline performed fuzzy name matching at an 80 percent Levenshtein threshold,
          confirmed by administrative-zone agreement, and assigned each record a three-state
          correction code denoting a clean match, a discrepancy of known origin, or a
          discrepancy of unknown origin. Each output record was then independently validated
          in ArcGIS against MapCarta and OpenStreetMap basemaps to confirm geographic
          plausibility. The deliverables of this first phase were a clean station-village table
          aligned with the OCHA reference and a reproducible workflow suited to future network
          expansion.
        </P>
      </Prose>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 32, margin: "36px 0 8px" }}>
        <BigStat value="~160" label="Rainfall gauges across nine regions" accent={ACC} size={50} />
        <BigStat value="1,095" label="Villages carrying uncertain station assignments" accent={ACC} size={50} />
        <BigStat value="2,896" label="Validated OCHA reference villages" accent={ACC} size={50} />
        <BigStat value="80%" label="Levenshtein threshold for a fuzzy name match" accent={ACC} size={50} />
      </div>

      <Prose max={760}>
        <P>
          Mapped over the median growing-season NDVI, the reconciled network makes the stakes
          legible: each village is joined to the gauge that governs its payout, and the distance
          between the two is the margin of error built into the index.
        </P>
      </Prose>
      <figure style={{ margin: "24px 0 8px" }}>
        <Card pad={0} style={{ overflow: "hidden", background: "var(--ink)" }}>
          <iframe
            src={MAP_SRC}
            title="CNAAS gauge network and village-to-gauge assignments over growing-season NDVI"
            loading="lazy"
            style={{ display: "block", width: "100%", height: "72vh", minHeight: 540, border: "none" }}
          />
        </Card>
        <figcaption style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginTop: 10 }}>
          <span style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-3)", maxWidth: 740 }}>
            Every village joined to its assigned rain gauge across the nine CNAAS regions, drawn over the
            median growing-season NDVI. Click a village to read its name and its distance to the gauge that
            governs its payout, some sit within a kilometre, others more than a hundred. Imagery: Google
            Earth Engine / Copernicus.
          </span>
          <a href={MAP_SRC} target="_blank" rel="noopener noreferrer" className="mono" style={{
            fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
            color: ACC, textDecoration: "none", whiteSpace: "nowrap",
          }}>Open full screen &#8599;</a>
        </figcaption>
      </figure>

      <Sub kicker="Phase two · capacity" color={ACC}>Training cooperatives to read their own gauges</Sub>
      <Prose max={760}>
        <P>
          The reconciled database then became the substrate for the second phase of our
          intervention, which addressed capacity-building at the cooperative level. Working
          through the Farmer Field School methodology that SOCODEVI employs across its global
          portfolio, we delivered training in QGIS, the free and open-source geographic
          information system, to cooperative officers, extension agents, and the coordinators
          of the Groupements d'Intérêt Économique (GIE), the women-led economic interest groups
          through which CNAAS distributes the majority of its policies in the Casamance regions.
        </P>
        <P>The curriculum equipped participants to:</P>
      </Prose>
      <ul style={{ maxWidth: 760, margin: "4px 0 24px", paddingLeft: 0, listStyle: "none" }}>
        {CURRICULUM.map((c, i) => (
          <li key={i} style={{ display: "grid", gridTemplateColumns: "22px 1fr", gap: 12, padding: "7px 0", alignItems: "baseline" }}>
            <span style={{ width: 7, height: 7, background: ACC, display: "inline-block", transform: "rotate(45deg)", marginTop: 6 }} />
            <span style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--ink-2)" }}>{c}</span>
          </li>
        ))}
      </ul>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 32, margin: "32px 0 8px" }}>
        <BigStat value="7,705" label="Women trained in climate-smart financial products" accent={ACC} size={50} />
        <BigStat value="4,544" label="Men sensitised through community dialogues" accent={ACC} size={50} />
        <BigStat value="83,000+" label="Farmers enrolled via the cooperative channel" accent={ACC} size={50} />
        <BigStat value="844,000" label="Household members whose livelihoods were thereby secured" accent={ACC} size={50} />
      </div>

      <Sub kicker="The ecology" color={ACC}>A wider climate-information infrastructure</Sub>
      <Prose max={760}>
        <P>
          This intervention sits within a broader Senegalese climate-information infrastructure
          constructed jointly by the Agence Nationale de l'Aviation Civile et de la Météorologie
          (ANACIM), the country's national meteorological agency; the CGIAR Research Program on
          Climate Change, Agriculture and Food Security (CCAFS); and the Accelerating Impacts of
          CGIAR Climate Research for Africa (AICCRA) initiative. Together these partners
          distribute downscaled seasonal rainfall forecasts to approximately two million rural
          Senegalese through a federation of 82 community radio stations. Within this ecology, a
          QGIS-literate cooperative becomes a node capable of receiving such forecasts and
          translating them into parcel-level decisions concerning sowing date, crop variety,
          replanting strategy, and insurance enrollment.
        </P>
      </Prose>

      <Sub kicker="The scale problem" color={ACC}>From a pixel to seven hectares west of the road</Sub>
      <Prose max={760}>
        <P>
          Satellite rainfall products perform well at continental scale but poorly at the scale
          at which insurance payouts are actually decided. The three global products most
          relevant here, the Climate Hazards Group InfraRed Precipitation with Station data
          (CHIRPS), the Integrated Multi-satellite Retrievals for the Global Precipitation
          Measurement mission (IMERG), and the Tropical Applications of Meteorology using
          Satellite data (TAMSAT), all measure rainfall in pixels of roughly five to ten
          kilometres on a side. A single pixel of that size covers dozens of villages, and the
          rain that actually fell within it on any given afternoon was almost certainly uneven
          across that area. The satellite cannot determine whether the rain it averaged across
          the pixel actually fell on the parcel of the farmer whose policy is meant to be
          triggered by it.
        </P>
      </Prose>
      <Prose max={760}>
        <Pull color={ACC}>
          The integration of satellite data and ground gauge data is not a statistical problem
          but an institutional one.
        </Pull>
        <P>
          It depends on a chain of translators that begins with the geomatics consultant who
          cleaned the gauge coordinates and ends with the CNAAS underwriter who authorises the
          payout. If any link in this chain breaks, the satellite measurement does not reach the
          farmer in any meaningful form.
        </P>
      </Prose>
      <TranslatorChain steps={CHAIN} color={ACC} />
      <Prose max={760}>
        <P>
          What appears on the satellite map as an average rainfall figure for a pixel must, by
          the time a payout decision is made, become the rain that fell on the seven hectares
          west of the road on Tuesday afternoon, and only a cooperative that possesses both the
          technical literacy and the institutional authority to perform that translation can
          render the satellite measurement actionable.
        </P>
      </Prose>

      <Sub kicker="The frame" color={ACC}>Three overlapping institutional categories</Sub>
      <Prose max={760}>
        <P>
          This case is finally a particular instance of three overlapping institutional
          categories.
        </P>
      </Prose>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, margin: "20px 0 8px" }}>
        {FRAMES.map((f, i) => (
          <Card key={i} pad={20} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
              <span className="serif" style={{ fontSize: 19, lineHeight: 1.15, color: "var(--ink)" }}>{f.t}</span>
              {f.a && <Pill tone={accent}>{f.a}</Pill>}
            </div>
            <span style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)" }}>{f.v}</span>
          </Card>
        ))}
      </div>

      <Prose max={760} style={{ marginTop: 36 }}>
        <Lead style={{ fontStyle: "normal", color: "var(--ink)" }}>
          Without that link, adaptation finance pays the wrong people. Without distributed
          authority to read the link, it reaches the right people but leaves them unable to
          verify or contest the system.
        </Lead>
        <P>
          The work conducted by SOCODEVI and CNAAS with the Senegalese cooperative sector under
          the RÉSILIENCE program is one concrete instance of building both at once.
        </P>
      </Prose>
    </div>
  );
};

// --- Local layout devices for the methodological case studies ---------------

const B = ({ children }) => (
  <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{children}</strong>
);

const NoteBox = ({ label, color = "var(--ink-3)", children }) => (
  <div style={{
    margin: "22px 0", maxWidth: 760, padding: "16px 20px",
    background: "var(--paper-2)", border: "1px solid var(--rule)",
    borderLeft: `3px solid ${color}`,
  }}>
    {label && <div className="mono" style={{
      fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase",
      color, marginBottom: 8,
    }}>{label}</div>}
    <div style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-2)" }}>{children}</div>
  </div>
);

const Contrast = ({ color, leftLabel, rightLabel, rows, caption }) => (
  <div style={{ margin: "22px 0 10px" }}>
    <div style={{ border: "1px solid var(--rule)", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <div className="mono" style={{
        padding: "10px 16px", fontSize: 10.5, letterSpacing: "0.12em",
        textTransform: "uppercase", color, background: "var(--paper-2)",
        borderRight: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
      }}>{leftLabel}</div>
      <div className="mono" style={{
        padding: "10px 16px", fontSize: 10.5, letterSpacing: "0.12em",
        textTransform: "uppercase", color: "var(--ink-3)", background: "var(--paper-2)",
        borderBottom: "1px solid var(--rule)",
      }}>{rightLabel}</div>
      {rows.map(([l, r], i) => (
        <React.Fragment key={i}>
          <div style={{
            padding: "11px 16px", fontSize: 14.5, lineHeight: 1.45, color: "var(--ink)",
            borderRight: "1px solid var(--rule)",
            borderBottom: i < rows.length - 1 ? "1px solid var(--rule-soft)" : "none",
          }}>{l}</div>
          <div style={{
            padding: "11px 16px", fontSize: 14.5, lineHeight: 1.45, color: "var(--ink-2)",
            borderBottom: i < rows.length - 1 ? "1px solid var(--rule-soft)" : "none",
          }}>{r}</div>
        </React.Fragment>
      ))}
    </div>
    {caption && <div style={{ marginTop: 10, fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)" }}>{caption}</div>}
  </div>
);

const Pipeline = ({ steps, color }) => (
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", gap: 8, margin: "22px 0 12px" }}>
    {steps.map((s, i) => (
      <React.Fragment key={i}>
        <div style={{
          flex: "1 1 150px", minWidth: 138, padding: "12px 14px",
          background: "var(--paper)", border: "1px solid var(--rule)",
          borderTop: `3px solid ${color}`,
        }}>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.12em", color, marginBottom: 6 }}>{String(i + 1).padStart(2, "0")}</div>
          <div className="serif" style={{ fontSize: 15.5, lineHeight: 1.15, color: "var(--ink)", marginBottom: 6 }}>{s.t}</div>
          <div style={{ fontSize: 12, lineHeight: 1.45, color: "var(--ink-3)" }}>{s.c}</div>
        </div>
        {i < steps.length - 1 && <span className="mono" style={{ alignSelf: "center", color, fontSize: 15 }}>&#8594;</span>}
      </React.Fragment>
    ))}
  </div>
);

const Tiles = ({ items, color }) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, margin: "20px 0 8px" }}>
    {items.map((it, i) => (
      <Card key={i} pad={18} style={{ display: "flex", flexDirection: "column", gap: 8, borderTop: `3px solid ${color}` }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span className="num" style={{ fontSize: 24, color, letterSpacing: "-0.02em" }}>{String(i + 1).padStart(2, "0")}</span>
          <span className="serif" style={{ fontSize: 17, lineHeight: 1.15, color: "var(--ink)" }}>{it.k}</span>
        </div>
        <span style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-2)" }}>{it.v}</span>
      </Card>
    ))}
  </div>
);

const ShockCard = ({ color, lines }) => (
  <div style={{ maxWidth: 540, margin: "24px 0 12px", background: "var(--paper)", border: `1.5px solid ${color}`, boxShadow: "7px 7px 0 var(--paper-2)" }}>
    <div className="mono" style={{
      display: "flex", justifyContent: "space-between", padding: "10px 18px",
      fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color,
      borderBottom: `1px solid color-mix(in oklch, ${color} 35%, transparent)`,
    }}>
      <span>Carte choc</span><span>Juillet 2030</span>
    </div>
    <div style={{ padding: 18 }}>
      <div className="serif" style={{ fontSize: 22, lineHeight: 1.2, color: "var(--ink)", marginBottom: 14 }}>L'été 2021 vient de se répéter</div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 9 }}>
        {lines.map((t, i) => (
          <li key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 10, fontSize: 14.5, lineHeight: 1.5, color: "var(--ink-2)" }}>
            <span style={{ width: 6, height: 6, background: color, transform: "rotate(45deg)", marginTop: 7 }} />
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid var(--rule-soft)" }}>
        <span className="mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color }}>Question</span>
        <div className="serif" style={{ fontSize: 17, lineHeight: 1.5, color: "var(--ink)", marginTop: 6, fontWeight: 500 }}>Qui fait quoi dans les 72 prochaines heures, et avec quel outil ?</div>
      </div>
    </div>
  </div>
);

const TableScene = ({ accent, at, around, caption }) => {
  const ACC = accentVar(accent);
  return (
    <div style={{ margin: "20px 0 8px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {[["At the table", at, "ink"], ["Around the table", around, accent]].map(([label, items, tone], i) => (
          <Card key={i} pad={18} style={{ borderTop: `3px solid ${ACC}` }}>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: ACC, marginBottom: 12 }}>{label}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {items.map((t, j) => <Pill key={j} tone={tone}>{t}</Pill>)}
            </div>
          </Card>
        ))}
      </div>
      {caption && <div style={{ marginTop: 12, fontSize: 15.5, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 760 }}>{caption}</div>}
    </div>
  );
};

const Plate = ({ src, alt, caption, credit }) => (
  <figure style={{ margin: "28px 0 8px" }}>
    <div style={{ border: "1px solid var(--rule)", background: "var(--paper-2)", overflow: "hidden" }}>
      <img src={src} alt={alt} loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
    </div>
    <figcaption style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginTop: 10 }}>
      <span style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-3)", maxWidth: 740 }}>{caption}</span>
      {credit && <span className="mono" style={{ fontSize: 10.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "var(--ink-3)", whiteSpace: "nowrap" }}>{credit}</span>}
    </figcaption>
  </figure>
);

const DataTable = ({ headers, rows, color }) => (
  <div style={{ overflowX: "auto", margin: "20px 0 8px", border: "1px solid var(--rule)" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="mono" style={{
              textAlign: "left", padding: "11px 14px", background: "var(--paper-2)",
              borderBottom: `2px solid ${color}`, fontSize: 10, letterSpacing: "0.10em",
              textTransform: "uppercase", color: "var(--ink-2)", verticalAlign: "bottom",
            }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, ri) => (
          <tr key={ri}>
            {r.map((c, ci) => (
              <td key={ci} style={{
                padding: "11px 14px", borderBottom: ri < rows.length - 1 ? "1px solid var(--rule-soft)" : "none",
                color: ci === 0 ? "var(--ink)" : "var(--ink-2)", lineHeight: 1.45, verticalAlign: "top",
                fontWeight: ci === 0 ? 500 : 400,
              }}>{c}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const LayerStack = ({ layers, color, ratio = "16 / 10" }) => {
  const ACC = color || "var(--ink)";
  const [ops, setOps] = React.useState(() => layers.map((_, i) => (i === 0 ? 100 : 0)));
  const set = (i, v) => setOps((prev) => prev.map((o, j) => (j === i ? v : o)));
  return (
    <div style={{ margin: "22px 0 8px" }}>
      <div style={{
        position: "relative", aspectRatio: ratio, width: "100%",
        border: "1px solid var(--rule)", background: "var(--paper-2)", overflow: "hidden",
      }}>
        {layers.map((l, i) => (
          <img key={i} src={l.src} alt={l.name} loading="lazy" style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "fill", opacity: ops[i] / 100, pointerEvents: "none",
          }} />
        ))}
      </div>
      <div className="mono" style={{
        fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
        color: "var(--ink-3)", margin: "14px 0 8px",
      }}>Layer opacity, drag to blend the georeferenced layers</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "12px 24px" }}>
        {layers.map((l, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span className="mono" style={{ fontSize: 10.5, letterSpacing: "0.10em", textTransform: "uppercase", color: "var(--ink-2)" }}>{l.name}</span>
              <span className="num" style={{ fontSize: 12, color: ACC }}>{ops[i]}%</span>
            </div>
            <input type="range" min="0" max="100" value={ops[i]}
              onChange={(e) => set(i, Number(e.target.value))}
              style={{ width: "100%", accentColor: ACC, cursor: "pointer" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

const SeriousGames = ({ accent = "plum" }) => {
  const ACC = accentVar(accent);

  const INSTRUMENTS = [
    { k: "Sentinel-2", v: "Every patch of Quebec every five days at ten metres, cropping shifts, riparian buffers, lakeside development, the timing of lake blooms." },
    { k: "Landsat", v: "A continuous record since the 1970s at thirty metres, five decades of wetland loss and land-cover change." },
    { k: "MODIS", v: "Daily surface temperature, vegetation health, and snow cover across the whole region." },
    { k: "SMAP", v: "Soil moisture in the top few centimetres, how many weeks the root zone stays below its historical tenth percentile." },
    { k: "Sentinel-1", v: "Radar that sees through cloud and dark, flooded ground, snow-phase change, irrigated versus rainfed fields." },
    { k: "GRACE", v: "Total water mass at continental scale, read from tiny variations in Earth's gravity field." },
  ];

  const PIPELINE = [
    { t: "Raw product", c: "A raster or time series. Pixels and numbers, not yet anything to act on." },
    { t: "Regional indicator", c: "Aggregated to the sub-watershed scale governance happens at." },
    { t: "Plain-language shift", c: "Earlier snowmelt. Drier summers. Shrunken wetlands." },
    { t: "Interview-derived meaning", c: "What the shift does to each actor's practice." },
    { t: "Game artifact", c: "A card, a panel, a briefing-pack entry." },
  ];

  const ACTORS = [
    { k: "Vegetable grower", v: "Irrigation costs rise; the well begins pumping sand." },
    { k: "Dairy farmer", v: "A falling field-well table against a herd that drinks more in heat." },
    { k: "Municipal operator", v: "A Phase Two conservation protocol and rationing conversations." },
    { k: "Hydraulic engineer", v: "Design return periods, set since the 1980s, need recalibration." },
    { k: "Emergency coordinator", v: "Heightened wildfire risk and a longer summer standby." },
    { k: "Recreational angler", v: "Streams warm past the thermal tolerance of brook trout." },
  ];

  const REGIONS = [
    { t: "Brome-Missisquoi", a: "Eastern Townships", v: "MODIS snow cover since 2000 shows snow leaving a week to ten days earlier, moving recharge forward and thinning late-summer baseflow. Sentinel-2 tracks cyanobacterial blooms on Lake Memphremagog; the Landsat archive and lidar count forty years of drained wetlands and a riparian buffer eroding into residential parcels." },
    { t: "Montérégie Ouest", a: "Agricultural plain", v: "Sentinel-2 phenology since 2015 tracks the shift to water-demanding vegetables and expanding centre-pivot signatures; Sentinel-1 separates irrigated fields from rainfed ones. MODIS maps of 2021's cumulative stress days align with the municipalities that hit supply emergencies, over shallow aquifers and documented wetland loss." },
  ];

  const SCENARIOS = [
    { k: "Acute shock", v: "A documented historical event the satellite record verifies, handed to players mid-session, the 2021 drought, the spring 2020 recharge deficit, a bloom that shut a filtration plant." },
    { k: "Slow trend", v: "Co-constructed futures along two axes, climate intensity and governance response. At least two must live side by side, so players reckon with possibilities rather than a single forecast." },
    { k: "Cascade", v: "One event triggers a chain across the cards, drought concentrates nutrients, a bloom closes an intake, a town switches to the aquifer that farmers already draw. The chain is the lesson." },
    { k: "Counterfactual", v: "A governance action played against an observed trend, what if every source protection plan were done by 2030? It separates knowledge gaps from agency gaps." },
    { k: "Lived experience", v: "A data-derived shift paired with a human voice: the Saint-Rémi well pumping sand beside the SMAP record, an elder's vanished stream beside the inferred baseflow trend." },
  ];

  const ADVANTAGES = [
    { k: "Traceability", v: "Every card unwinds to a specific raster, a defined indicator, and a published method. A first-term municipal officer can audit the same chain as a senior watershed director." },
    { k: "Uniform coverage", v: "The satellite maps the whole landscape wall to wall, where each participant's own knowledge is necessarily partial." },
    { k: "Temporal depth", v: "The Landsat archive reaches back beyond any working career, reframing “what is normal here?” as answerable rather than assumed." },
    { k: "Disinterestedness", v: "The sensor's biases are not aligned with any participant's stake. A drought year is a drought year whether you farm, regulate, or object to regulation." },
    { k: "Friction", v: "Independent evidence resists both complacency and catastrophism; it sits stubbornly between the two motivated readings of the situation." },
    { k: "Standardization", v: "The same pipeline characterises very different regions with the same indicators, so the case studies become readable to one another." },
  ];

  const QUEBEC_LAYERS = [
    { src: "img/quebec-map1.png", name: "Map 1" },
    { src: "img/quebec-map2.png", name: "Map 2" },
    { src: "img/quebec-map3.png", name: "Map 3" },
    { src: "img/quebec-map4.png", name: "Map 4" },
    { src: "img/quebec-map5.png", name: "Map 5" },
    { src: "img/quebec-map6.png", name: "Map 6" },
  ];

  return (
    <div>
      <ProjectSummary color={ACC}>
        The southern Québec serious-game case shows how remote sensing can be brought back to the ground by turning satellite evidence into shared governance scenarios. The public good problem is not a lack of water data; it is the fact that the people responsible for water do not work in the same room. A watershed director, municipal officer, county planner, farmer, engineer, and citizen may depend on the same aquifer, wetland, river, or lake, but each actor works with different tools, mandates, responsibilities, and time horizons. Remote sensing matters because the game succeeds or fails on the quality of its scenarios: invented situations produce abstract discussion, while scenarios grounded in real satellite records force professional judgment. Sentinel-2, Landsat, MODIS, SMAP, Sentinel-1, GRACE, lidar-derived terrain models, 3D flood models, planning layers, hydrography, and hazard zones help document snowmelt timing, soil-moisture deficits, wetland loss, vegetation stress, irrigation expansion, flood exposure, lake blooms, and land-cover change. But these datasets are not yet decisions. The method is a translation chain: a raster or time series becomes a regional indicator; the indicator becomes a plain-language shift; interviews translate that shift into consequences for each actor; the result becomes a card, shock scenario, voice card, briefing-pack entry, projection panel, or trajectory strip. A "drier summer" only becomes meaningful when it becomes a farmer's well pumping sand, a municipal conservation protocol, a recalibrated engineering standard, a warmer trout stream, or a county plan that works on a five-year horizon while the crisis unfolds in seventy-two hours. Remote sensing contributes traceability, uniform coverage, temporal depth, standardization, and independent friction against denial or exaggeration. Interviews, local knowledge, planning instruments, and Two-Eyed Seeing keep the satellite view from becoming sovereign. The point is not to synthesize everything into one final truth, but to place measured change beside lived experience so that participants can see where coordination fails, where responsibility is unclear, and where action must be owned. The pixels do not govern. The pixels make the shared situation visible; the game turns that visibility into operational knowledge, shared mental models, named coordination gaps, action commitments, owners, and time horizons.
      </ProjectSummary>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, margin: "0 0 12px" }}>
        <Plate
          src="img/quebec-3d-flood-model.png"
          alt="3D numerical flood model of the Quebec pilot territory"
          caption="3D numerical flood model of the pilot territory."
          credit="By the author"
        />
        <Plate
          src="img/quebec-3d-lidar-model.png"
          alt="3D numerical model derived from lidar"
          caption="3D numerical model by Jean-Marc Bellard, François Huchet and René Lefebvre."
        />
      </div>
      <div style={{ marginBottom: 24 }}>
        <div className="serif" style={{ fontSize: 34, lineHeight: 1.18, letterSpacing: "-0.014em", color: "var(--ink)", maxWidth: 820 }}>
          In southern Quebec, the people responsible for the water do not work in the same room.
        </div>
        <div style={{ marginTop: 14, fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 720 }}>
          A watershed director, a county planner, a municipal water manager, and a farmer may share
          the same aquifer, but they do not share the same mandate.
        </div>
      </div>

      <Prose max={760}>
        <P>
          <B>The hardest part of water governance is not learning more about the water. It is making
          the people who already know what they know coordinate with one another.</B> A research
          project led by INRS and Université Laval is adapting a participatory tool,
          {" "}<Fr>Trajectoire Eau et Territoire</Fr>, originally developed at the Université de
          Rennes, for two contrasting regions: Brome-Missisquoi in the Eastern Townships, and
          Montérégie Ouest, the intensive agricultural plain southwest of Montreal that the drought
          of 2021 stressed nearly to failure.
        </P>
      </Prose>

      <Sub kicker="The game" color={ACC}>A card-and-board exercise, then a renegotiation</Sub>
      <Prose max={760}>
        <P>
          Around a large printed table, participants assemble a regional water system from cards:
          reservoirs (aquifers, wetlands, lakes), flows (recharge, evapotranspiration, withdrawals),
          and pressures (climate change, urbanization, intensification, contamination). Partway
          through, they take on governance roles, watershed director, county planner, municipal
          officer, farmer, citizen, and renegotiate the same system from those positions,
          discovering where each mandate stops and coordination is needed. They then project
          alternative futures and commit to actions that can feed the <Fr>Plan Directeur de l'Eau</Fr>
          {" "}and the <Fr>Schéma d'Aménagement et de Développement</Fr>.
        </P>
      </Prose>

      <NoteBox label="Why remote sensing matters here" color={ACC}>
        <B>The game succeeds or fails on the quality of its scenarios.</B> If the situations feel
        invented, the conversation drifts into abstraction. If they are grounded in real events and
        real trends, participants bring their actual professional judgment to bear.
      </NoteBox>

      <Sub kicker="The instruments" color={ACC}>What satellites can, and cannot, show</Sub>
      <Prose max={760}>
        <P>
          A handful of instruments together produce an enormous amount of evidence about how water
          moves through the landscape.
        </P>
      </Prose>
      <div style={{ maxWidth: 860, margin: "8px 0 4px" }}>
        <KeyVList items={INSTRUMENTS} color={ACC} />
      </div>
      <Contrast
        color={ACC}
        leftLabel="Satellites can show"
        rightLabel="Satellites cannot show"
        rows={[
          ["Snowmelt timing", "Mandates"],
          ["Soil moisture", "Coordination failures"],
          ["Wetland loss", "Political responsibility"],
          ["Vegetation stress", "Institutional trust"],
          ["Land-cover change", "Whether a plan is acted on"],
        ]}
      />
      <Prose max={760}>
        <Pull color={ACC}>
          Remote sensing illuminates the biophysical half of the water-governance problem. It is
          mute on the institutional half.
        </Pull>
        <P>
          The game makes that gap a visible object: biophysical cards use one visual register,
          schematic and illustrative; governance cards use another, typographic and abstract. Remote
          sensing feeds the first kind. The second remains the work of the people in the room.
        </P>
      </Prose>

      <Sub kicker="The method" color={ACC}>How a satellite image becomes a scenario</Sub>
      <Prose max={760}>
        <P>
          Every scenario travels through a five-step chain. A raw product becomes a regional
          indicator; the indicator names a plain-language shift; interviews translate that shift into
          what it means across actor positions; and the result is inscribed as a concrete artifact.
        </P>
      </Prose>
      <Pipeline steps={PIPELINE} color={ACC} />
      <div className="mono" style={{
        display: "inline-flex", gap: 12, alignItems: "center", flexWrap: "wrap",
        margin: "2px 0 18px", padding: "8px 14px",
        border: `1px solid color-mix(in oklch, ${ACC} 35%, transparent)`,
        fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: ACC,
      }}>
        <span>Rule of the method</span>
        <span style={{ color: "var(--ink-3)" }}>Never skip a step · each step does its own work</span>
      </div>
      <NoteBox label="Methodological caution">
        Satellite products are pixels and numbers. They are not yet narratives, and they are not yet
        anything anyone can act on.
      </NoteBox>
      <Prose max={760}>
        <P>
          <B>The indicator is the bridge between global observation and regional governance.</B> But
          a named shift still has no stakes until it is read through the people who live with it. A
          "drier summer" means little in the abstract.
        </P>
      </Prose>
      <div className="serif" style={{ margin: "20px 0", fontSize: 21, lineHeight: 1.45, color: "var(--ink)", maxWidth: 760, fontWeight: 500 }}>
        Drier for whom? With what consequences? For which practice? On what timescale?
      </div>
      <Prose max={760}>
        <P>
          The team interviewed a deliberately heterogeneous population, not for opinions about
          management, but for the texture of each actor's relationship to specific changes. A single
          shift then fractures across positions.
        </P>
      </Prose>
      <div style={{ maxWidth: 860, margin: "8px 0 4px" }}>
        <KeyVList items={ACTORS} color={ACC} />
      </div>
      <Prose max={760}>
        <Pull color={ACC}>
          The interviews do not corroborate the satellite data. They translate it.
        </Pull>
        <P>
          Measured change becomes meaningful only when it is read through the positions, practices,
          and losses of the people who live with it. The interview material then feeds the voice
          cards, the framing of the shock cards, and the briefing pack each table receives.
        </P>
      </Prose>

      <Sub kicker="A worked example" color={ACC}>The summer of 2021 in Montérégie Ouest</Sub>
      <Prose max={760}>
        <P>
          MODIS vegetation and surface-temperature rasters, SMAP soil moisture, and Landsat detail
          yield indicators, consecutive weeks of critical vegetation anomaly, the share of farmland
          below the tenth soil-moisture percentile, the peak temperature anomaly. The shift: the
          hottest, driest summer since the record began, with crop and soil stress roughly double the
          prior decade. The artifact is a shock card the facilitator hands players mid-session.
        </P>
      </Prose>
      <ShockCard color={ACC} lines={[
        "L'indice de végétation sur le maïs est à 25 % sous la moyenne 2010 to 2020.",
        "Le débit de la rivière Châteauguay est à 12 % de sa moyenne historique.",
        "Trois municipalités ont déclenché leur protocole d'alerte.",
      ]} />
      <Prose max={760}>
        <P>
          Players already in role must respond. The municipal officer reaches for a source protection
          plan if one exists; the watershed director consults the watershed plan; the farmer faces
          well failure; the county planner finds her instruments relevant on a five-year horizon, not
          a five-day one.
        </P>
        <P>
          <B>The scenario does not invent these tensions. The 2021 record produced them. The satellite
          data simply makes them concrete and impossible to dismiss.</B>
        </P>
      </Prose>

      <Sub kicker="The two pilots" color={ACC}>What the satellites see in each region</Sub>
      <Contrast
        color={ACC}
        leftLabel="Brome-Missisquoi · snow-phase shift"
        rightLabel="Montérégie Ouest · intensification"
        rows={[
          ["Earlier spring snow disappearance", "Irrigation expansion"],
          ["Lake cyanobacteria", "Shallow-aquifer pressure"],
          ["Wetland drainage", "2021 cumulative stress days"],
          ["Lakeside development", "Highway 30 urban encroachment"],
        ]}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, margin: "16px 0 8px" }}>
        {REGIONS.map((r, i) => (
          <Card key={i} pad={20} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
              <span className="serif" style={{ fontSize: 19, lineHeight: 1.15, color: "var(--ink)" }}>{r.t}</span>
              <Pill tone={accent}>{r.a}</Pill>
            </div>
            <span style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)" }}>{r.v}</span>
          </Card>
        ))}
      </div>

      <Sub kicker="The layers" color={ACC}>Reading the region one layer at a time</Sub>
      <Prose max={760}>
        <P>
          The same territory carries many georeferenced readings at once, satellite indicators,
          planning instruments, hydrography, hazard zones. Piling them in register and fading each
          over the others is how a table full of different mandates can look at one shared system.
          Drag any slider to bring a layer up or take it down.
        </P>
      </Prose>
      <LayerStack color={ACC} layers={QUEBEC_LAYERS} ratio="1696 / 1298" />

      <Sub kicker="The deck" color={ACC}>Five kinds of scenario the data can build</Sub>
      <Tiles items={SCENARIOS} color={ACC} />

      <Sub kicker="At the table" color={ACC}>How the scenarios enter the game</Sub>
      <TableScene
        accent={accent}
        at={["Cards", "Roles", "Discussion"]}
        around={["Briefing pack", "Shock cards", "Trajectory strip", "Projection panels", "Voice cards"]}
        caption={<>The scenarios sit on, around, and beside the table. <B>They do not replace the cards.</B> Players still build the system themselves; the evidence only ensures that what they build resembles the region they are trying to govern.</>}
      />

      <Sub kicker="The argument" color={ACC}>Why build scenarios from satellite evidence</Sub>
      <Prose max={760}>
        <P>
          Expert intuition, institutional memory, and imagined futures all have their place, the
          game makes deliberate room for each. But satellite-derived evidence adds six things they
          cannot.
        </P>
      </Prose>
      <Tiles items={ADVANTAGES} color={ACC} />

      <Sub kicker="The posture" color={ACC}>How the game treats knowledge</Sub>
      <Prose max={760}>
        <P>
          The game does not treat satellite data as the truth of the system. It treats it as one
          disciplined view among several, the technical knowledge of the PACES groundwater studies,
          the administrative knowledge in the planning instruments, the practical knowledge of
          farmers, the lived knowledge of citizens and elders.
        </P>
        <Pull color={ACC}>
          The satellite view is not sovereign. It is one chair at the table.
        </Pull>
        <P>
          It has authority because of coverage, continuity, and repeatability. It has limits because
          it cannot see institutions, interpret meaning, or decide.
        </P>
      </Prose>
      <Contrast
        color={ACC}
        leftLabel="Extractive mode"
        rightLabel="Participatory scenario mode"
        rows={[
          ["Data gathered from territory", "Data returned to the table"],
          ["Processed by distant specialists", "Interpreted with local actors"],
          ["Recommendation handed down", "Scenario debated collectively"],
          ["Community as data source", "Community as interpreter"],
        ]}
        caption={<B>The translation, not the data, is the central act.</B>}
      />
      <NoteBox label="Parallel display, not synthesis" color={ACC}>
        The market gardener whose well begins pumping sand in July 2021 is not corroborated by the
        SMAP soil-moisture record. <B>She is paired with it.</B> Measured and lived knowledge are not
        forced to validate one another; they are placed side by side, Two-Eyed Seeing, after Mi'kmaw
        Elder Albert Marshall, extended into the artifact itself.
      </NoteBox>
      <Prose max={760}>
        <P>
          A quieter asymmetry runs underneath. Satellites generate biophysical evidence at a coverage
          and consistency no instrument matches for the institutional world.
        </P>
      </Prose>
      <Contrast
        color={ACC}
        leftLabel="Highly measurable"
        rightLabel="Hard to measure"
        rows={[
          ["Soil moisture", "Mandate clarity"],
          ["Snow cover", "Inter-municipal trust"],
          ["Vegetation stress", "Planning influence"],
          ["Wetland loss", "Coordination failure"],
          ["Surface temperature", "Institutional accountability"],
        ]}
        caption={<B>What is hard to measure is not less real.</B>}
      />
      <Card pad={22} style={{ borderTop: `3px solid ${ACC}`, margin: "22px 0 8px", maxWidth: 760 }}>
        <div className="serif" style={{ fontSize: 20, lineHeight: 1.2, color: "var(--ink)", marginBottom: 16 }}>What kind of knowledge does the game produce?</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
          <div>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-3)" }}>Not primarily</div>
            <div style={{ fontSize: 16, lineHeight: 1.4, color: "var(--ink-2)", marginTop: 6 }}>Hypothesis-testing knowledge</div>
          </div>
          <div>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: ACC }}>But</div>
            <div className="serif" style={{ fontSize: 18, lineHeight: 1.2, color: "var(--ink)", marginTop: 6, marginBottom: 10 }}>Operational knowledge</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Shared mental model", "Named coordination gaps", "Action commitments", "Owners", "Time horizons"].map((t, i) => (
                <Pill key={i} tone={accent}>{t}</Pill>
              ))}
            </div>
          </div>
        </div>
      </Card>
      <Prose max={760}>
        <Pull color={ACC}>
          The pixels do not govern. The pixels invite a conversation. The conversation produces a
          judgment.
        </Pull>
        <P style={{ fontSize: 17 }}>
          The satellites have done their work when they have made the conversation possible. The rest
          is up to the people in the room.
        </P>
      </Prose>
    </div>
  );
};

const LausanneEPFL = ({ accent = "lapis" }) => {
  const ACC = accentVar(accent);
  const DASH_SRC = "case-studies/greater-lausanne.html";

  const DISTRIBUTION = [
    ["Lake Geneva, Ouchy waterfront", "Outdoor", "near 420", "Atmospheric background; the lake itself acts as a dispersion sink"],
    ["Botanical Garden vegetation", "Outdoor", "as low as 368", "Below atmospheric background; photosynthesis outpacing respiration"],
    ["EPFL or St-Sulpice, 5 May campaign", "Outdoor, unspecified waypoint", "extreme peak of 5048", "Anomalous spike in the raw record, touching the OSHA eight-hour exposure limit; field notes for this value unrecovered"],
    ["Botanical Garden greenhouse", "Indoor", "491 / 563", "Closed humid envelope, low occupancy"],
    ["Rolex Learning Center, 7 June", "Indoor", "467 / 476", "Bookstore to Career Service, light occupancy"],
    ["Lausanne CFF station", "Indoor", "rising past 800 at end of record", "Concourse and platform"],
    ["M2 metro", "Transit", "peak 1111", "Sealed carriage, tunnel running"],
    ["Train Lausanne to Nyon", "Transit", "775 / 1136", "Sealed carriage; readings still climbing at end of record"],
    ["M1 metro", "Transit", "peak 1693", "Defining anchor of the dataset"],
  ];

  const PARAMETERS = [
    ["Floor area", "37,000 m² total, 22,000 m² footprint", "Large interior volume per occupant on average"],
    ["Plan", "166.5 m by 121.5 m, one continuous room", "No internal walls; no zoning available to mechanical ventilation"],
    ["Patios", "14 ovoid courtyards punching through the slab", "Wind and buoyancy driven exhaust paths"],
    ["Geometry", "Roof and floor undulating in parallel", "Local pockets and valleys in which denser air can settle"],
    ["Peak occupancy", "860 workspaces, 600 seat hall, 261 dining seats, 100 staff; near 1,800 people", "Concentrated point loads in localised clusters"],
    ["Ventilation", "Natural through openable façade and patios; bubble skylight stack exhaust", "Weather dependent; effectively suspended in winter when windows close"],
    ["Mechanical", "Cold ceilings in the restaurant and multimedia library only, fed by the campus lake water loop", "Most of the floor plate has no mechanical fresh air supply"],
    ["Envelope", "20 cm roof insulation, 35 cm ground insulation, double glazed, exterior blinds", "Tight envelope; closure is the default winter comfort response"],
    ["Energy performance", "38.5 kWh/m², Minergie certified", "An energy metric, not an indoor air quality metric"],
  ];

  return (
    <div>
      <ProjectSummary color={ACC}>
        The Lausanne and EPFL case shows that remote sensing becomes most useful when the scale of observation is adapted to the scale of the question. Urban air is not experienced as a single satellite pixel: people move between streets, parks, trains, stations, classrooms, offices, and large public buildings, and much of everyday exposure happens indoors. For that reason, the method moves deliberately from sky to body: Sentinel-5P TROPOMI provides the regional atmospheric background; Landsat land-surface temperature, Sentinel-2 vegetation indices, Local Climate Zones, building-height data, and urban form indicators help explain surface conditions and possible spatial patterns; handheld Q-TRAK CO₂ measurements bring the analysis down to breathing height. Interpolation, extrapolation, and correlation analysis remain valuable because they help identify trends, relationships, and likely exposure patterns beyond isolated measurement points: greener areas tend to cool surfaces, valley-floor pollution can be compared with elevation, and enclosed occupied spaces show higher CO₂ than outdoor environments. The point is not to make the satellite do everything, but to let each instrument answer the question suited to its scale. Remote sensing supports decision-making by locating broader urban patterns, testing relationships, and guiding where closer monitoring or intervention is needed; field sensors and architectural analysis then translate those patterns into human exposure, ventilation, comfort, and care. The case therefore bridges sky and ground by treating urban atmosphere not only as a remote environmental variable, but as a lived condition shaped by movement, enclosure, building design, and the air people actually breathe.
      </ProjectSummary>

      <Prose max={760}>
        <P>
          When we began the greenhouse gas fieldwork in the spring of 2019, we already knew the
          satellites would not give us the answer. The Sentinel-5P TROPOMI footprint over Lausanne is
          a single pixel of roughly five by three and a half kilometres, and inside that pixel sit
          Ouchy and Lake Geneva acting as a natural dispersion sink, the Botanical Garden whose
          vegetation can pull CO₂ below the atmospheric background through photosynthesis, the sealed
          M1 metro carriage at rush hour, and our own institution. The satellite returns one number
          for all of that. The number is real, but it is not what we breathe.
        </P>
        <P>
          To make the gap legible, we built a multimodal pipeline that moves down through scales, from
          the atmospheric column to the indoor pocket at the height of the body, and that asks each
          tier of sensing to do only what it can. Figure 1 lays out the five linked tiers. Their
          working form is anchored in our 2019 measurements, with the EPFL Rolex Learning Center as
          the building in which every tier can be read against the others.
        </P>
      </Prose>

      <Plate
        src="img/lausanne-rolex-aerial.jpg"
        alt="Aerial view of the EPFL Rolex Learning Center under construction, showing the undulating slab and ovoid patios"
        caption="The Rolex Learning Center from the air: one continuous slab punched by fourteen ovoid patios, on the EPFL campus that sits inside a single TROPOMI pixel."
        credit="Wikimedia Commons"
      />

      <Prose max={760}>
        <P>
          Over six days the campaign collected 2,680 measurements at body altitude with a TSI Q-TRAK.
          The indoor and transit readings sit several hundred parts per million above the outdoor
          points, and the gap is statistically significant against atmospheric background. Four
          reference thresholds anchor the reading on the page: roughly 420 ppm for outdoor background,
          600 to 800 ppm for the indoor air quality target set by the Federation of European Heating,
          Ventilation and Air Conditioning Associations (REHVA), 1000 ppm for the classical
          Pettenkofer guideline, and 5000 ppm for the workplace exposure floor set by the Occupational
          Safety and Health Administration (OSHA). The pattern in our data is mechanistic rather than
          geographic. What determines CO₂ concentration is not where one stands in Lausanne, but
          whether the air around one is enclosed, occupied, and poorly ventilated.
        </P>
        <P>The full distribution reads most clearly by environment.</P>
      </Prose>

      <DataTable
        color={ACC}
        headers={["Location", "Setting", "Mean / peak (ppm)", "Note"]}
        rows={DISTRIBUTION}
      />

      <Prose max={760}>
        <P>
          Two values from this distribution warrant separate treatment. The first is the 1693 ppm
          peak we recorded on the M1 metro at 5:30 in the afternoon, between EPFL and Lausanne-Flon,
          in a sealed carriage at maximum density. The reading is more than twice the REHVA indoor air
          quality target. It sits comfortably inside the OSHA legal envelope for occupational
          exposure, and well above the cognitive performance thresholds reported by Allen and
          colleagues in 2016. The second is the 5048 ppm peak that appears in our raw record on 5 May
          2019, at an unspecified waypoint near the EPFL or St-Sulpice area. The value sits precisely
          at the OSHA eight-hour permissible exposure limit, and our field notes for it have not been
          recovered. Whether it reflects a real local source, such as a delivery vehicle exhaust, an
          unventilated laboratory adjacency, or a stationary engine, or whether it is a sensor
          artefact, remains undetermined. We carry it forward as recorded, flag the absence of field
          notes, and treat it as an open question.
        </P>
      </Prose>

      <figure style={{ margin: "28px 0 8px" }}>
        <Card pad={0} style={{ overflow: "hidden", background: "var(--ink)" }}>
          <iframe
            key="greater-lausanne"
            src={DASH_SRC}
            title="Greater Lausanne CO₂ field readings, joined to satellite layers"
            loading="lazy"
            style={{ display: "block", width: "100%", height: "82vh", minHeight: 720, border: "none" }}
          />
        </Card>
        <figcaption style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginTop: 10 }}>
          <span style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-3)", maxWidth: 740 }}>
            The interactive companion: the handheld walk joined to satellite layers from the same
            period. The map, the charts, and the detail panel are linked, click any numbered point or
            any bar to inspect it everywhere.
          </span>
          <a href={DASH_SRC} target="_blank" rel="noopener noreferrer" className="mono" style={{
            fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
            color: ACC, textDecoration: "none", whiteSpace: "nowrap",
          }}>Open full screen &#8599;</a>
        </figcaption>
      </figure>

      <Plate
        src="img/lausanne-fig1-pipeline.png"
        alt="Figure 1: the five-tier sensing pipeline, from satellite to indoor sensor grid"
        caption="Figure 1. The five linked tiers, from the atmospheric column to a body-altitude indoor grid, satellite, climate model, mobile sensor, building section, indoor sensor grid, each annotated with what it sees and what is invisible to it."
        credit="Generated by Claude AI"
      />

      <Sub kicker="Method" color={ACC}>The Pipeline</Sub>
      <Prose max={760}>
        <P>
          Each instrument and each model in the pipeline carries its own spatial and temporal
          footprint, its own retrieval physics, its own institutional history. The pipeline becomes
          useful when each tier is asked to do only what it can do, and when the gaps between tiers
          are made explicit. Figure 1 sets this out as a horizontal sequence; we summarise the tiers
          here.
        </P>
        <P>
          The satellite tier is Sentinel-5P TROPOMI, which produces daily column retrievals of NO₂ and
          other trace gases at roughly five by three and a half kilometres per pixel. For our case it
          returns the regional inheritance of the air over Lausanne and demonstrates, through its own
          structure, that the air mass moves on synoptic scales the building below the pixel does not
          control.
        </P>
        <P>
          The urban climate tier comes from our professors, Dasaraden Mauree and Silvia Coccolo, who
          developed the Canopy Interface Model (CIM) and coupled it to the urban building energy model
          CitySim, using the EPFL campus as the validation site (Mauree, Coccolo, Kaempf, and
          Scartezzini, PLOS One, 2017). The CIM produces high resolution vertical profiles of wind,
          temperature, and humidity at neighbourhood scale, and CitySim consumes those profiles to
          compute building energy balances. The stack runs already on the campus that produced our
          data.
        </P>
        <P>
          The body altitude walk tier is our own contribution. A TSI Q-TRAK at 1.4 m above the ground,
          carried on six days through metros, streets, parks, train carriages, station concourses, and
          the Rolex Learning Center itself, returns the dose at the height at which the body breathes.
          The instrument is small, mobile, and indifferent to the indoor or outdoor distinction that
          the satellite cannot cross. It sees what the satellite cannot see and what the urban climate
          model does not model. Its limit is that it goes wherever a person can carry it, and only
          there.
        </P>
        <P>
          The building tier is architectural reading. A building is an atmospheric configuration
          before it is a visual composition. Reading the Rolex Learning Center through its dimensions,
          its ventilation strategy, its envelope properties, and its occupancy patterns produces a set
          of mechanisms that account for both the variability and the limits of our walk readings
          inside it. Figure 2 draws the building section and locates the four mechanisms it imposes on
          the CO₂ signal.
        </P>
        <P>
          The indoor network tier is the final step we now recommend, in order to close the loop. A
          grid of low cost networked non-dispersive infrared (NDIR) CO₂ sensors at 1.4 m, distributed
          across the slab valleys, the café cluster, and the multipurpose hall, would render visible
          the local plume problem that is invisible to Minergie certification, to CitySim simulation,
          and to TROPOMI retrieval. The indoor analogue of the Breathe London community hosted network
          is what the EPFL campus does not yet have.
        </P>
      </Prose>

      <Sub kicker="Testbed" color={ACC}>The Rolex Learning Center as Testbed</Sub>
      <Prose max={760}>
        <P>
          The Rolex Learning Center is the EPFL building at which every tier of the pipeline can be
          read against the others. The TROPOMI pixel that covers our campus also covers this building.
          The CIM and CitySim stack runs on geometries that include it. Our Q-TRAK passed through it on
          7 June 2019, between the bookstore and the Career Service, and recorded a mean of 467 ppm
          with a peak of 476 ppm at light occupancy.
        </P>
      </Prose>

      <Plate
        src="img/lausanne-rolex-interior.jpg"
        alt="Interior of the Rolex Learning Center, students working at tables across the open continuous slab"
        caption="Inside the single continuous room: no internal walls, point loads of occupants clustered across an undulating floor. Our 7 June reading was taken here at light occupancy."
        credit="Wikimedia Commons"
      />

      <DataTable
        color={ACC}
        headers={["Parameter", "Value", "Indoor air quality relevance"]}
        rows={PARAMETERS}
      />

      <Prose max={760}>
        <P>
          Four mechanisms account for the building's CO₂ behaviour, and Figure 2 locates them on the
          transverse section.
        </P>
        <P>
          The first is average dilution. The continuous interior volume sits in the range of 130,000
          to 170,000 cubic metres across roughly 1,800 peak occupants, which gives 75 to 95 cubic
          metres per person at peak. That figure is an order of magnitude above what a conventional
          library reading room offers. Average dilution across the floor plate is, by design,
          excellent, and our 467 ppm reading on 7 June, taken at light load on an open window
          afternoon, falls comfortably within this regime.
        </P>
        <P>
          The second is local accumulation. SANAA's choice to eliminate internal walls, the very
          gesture that defines the building as a single continuous room, also dissolves the
          architectural means by which mechanical ventilation might respond to local density. The café
          cluster at lunchtime, the 600 seat multipurpose hall during a large event, and the south
          reading rooms during exam week each become a plume of metabolic CO₂ in an otherwise still
          ocean. The building average stays healthy while the local breath does not. This is the
          structural reason why a hypothesis about indoor CO₂ at the Rolex cannot be confirmed or
          refuted by a single light load measurement.
        </P>
        <P>
          The third is slab geometry. Carbon dioxide is roughly 1.5 times denser than air at standard
          room temperature. In a building whose floor and roof undulate in parallel, slow moving local
          air will settle in the slab valleys. The architectural gesture that defines the building
          visually also produces atmospheric pockets that the architecture does not name and the
          operation does not address. These pockets are testable only with a hand held instrument such
          as ours, deployed at the height at which the body actually breathes.
        </P>
        <P>
          The fourth is winter closure. The building's published ventilation strategy relies on
          openable façade panels and on buoyancy driven exhaust through the fourteen patios and the
          bubble skylights. Both pathways collapse in winter, when occupants close windows to maintain
          operative temperature and when the wind over Lake Geneva offers insufficient pressure
          differential to drive cross flow. The same envelope tightness that delivers the building's
          38.5 kWh/m² Minergie performance is what makes ventilation in winter a deliberate operational
          act rather than a passive default. Our highest indoor and transit readings, namely the 1111
          ppm peak on the M2 metro, the 1136 ppm mean on the Lausanne to Nyon train, and the 1693 ppm
          peak on the M1, all sit in sealed envelopes. During the closed window season, the Rolex
          Learning Center belongs structurally to that same family.
        </P>
      </Prose>

      <Plate
        src="img/lausanne-fig2-section.png"
        alt="Figure 2: schematic transverse section of the Rolex Learning Center with the four CO₂ accumulation mechanisms"
        caption="Figure 2. Schematic transverse section, building geometry after SANAA project documentation, with the four accumulation mechanisms, average dilution, local accumulation, slab geometry, winter closure, located against the Q-TRAK plane at 1.4 m."
        credit="Generated by Claude AI"
      />

      <Prose max={760}>
        <P>
          The substantive point of this section is the asymmetry between what the Laboratoire
          d'Énergie Solaire et de Physique du Bâtiment (LESO-PB) stack already models and what we
          measured. EPFL hosts in house a building resolved urban climate model, developed by the same
          scientists who taught our course. What the stack models is energy consumption and outdoor
          human comfort. What it does not model is indoor CO₂ at the body. A Minergie certified
          building can therefore be optimised on the CIM and CitySim energy axis and still run high
          indoor CO₂ at peak occupancy, without any institutional instrument noticing. The energy
          meter, the satellite retrieval, the urban climate simulation, and the certification audit are
          each, in their respective ways, blind to the variable that the Q-TRAK reads. The
          infrastructure for diagnosing the gap exists on the campus that produced our data. It has
          simply not yet been calibrated against the body that breathes in the room.
        </P>
      </Prose>

      <Sub kicker="Atmosphere" color={ACC}>The Building as Atmosphere</Sub>
      <Prose max={760}>
        <P>
          Philippe Rahm's Climatic Architecture argues that architecture should not be understood
          first as image, form, or visual composition, but as the design of atmosphere. In this view,
          temperature, humidity, light, air movement, and air quality are not secondary technical
          matters. They are architectural materials. A building or landscape is therefore designed in
          relation to the body: how it feels heat, breathes air, moves through light, and inhabits
          comfort or discomfort.
        </P>
        <P>
          Taichung Central Park makes this argument concrete. Designed by Philippe Rahm architectes
          with Mosbach Paysagistes and Ricky Liu &amp; Associates, the 67-hectare park was conceived
          around climatic conditions rather than only visual scenery. Its design responds directly to
          Taichung's hot, humid, and polluted environment by producing areas that are cooler, drier,
          and less polluted. Sensors and climatic devices help map and modify these conditions across
          the park. In other words, the visitor does not simply choose a path through space; they
          choose a path through atmosphere.
        </P>
        <P>
          This framework makes the Rolex Learning Center legible in a different way. The building can
          be read as one vast, continuous 22,000 m² interior landscape, but one whose atmosphere has
          not been structured with the same precision as its form. Its visual and spatial logic is
          extraordinary: the undulating slab creates slopes, pockets, openings, and continuous
          movement. Yet its atmospheric logic remains comparatively underdeveloped. The building relies
          largely on daylight and natural ventilation, while more controlled cooling is limited to
          specific zones such as the restaurant and multimedia library, which use cold ceilings
          connected to lake-water cooling systems.
        </P>
        <P>
          The result is an architectural landscape rich in spatial variation but poor in explicitly
          named climatic variation. The curves and depressions of the slab inevitably produce
          different thermal and acoustic pockets, different intensities of light, different degrees of
          stillness, exposure, and enclosure. But these atmospheric differences are treated as
          by-products of form rather than as design elements in their own right.
        </P>
        <P>
          A Rahmian retrofit would therefore not need to redraw the Rolex Learning Center. It would
          need to make its latent atmospheres intelligible, measurable, and inhabitable. Instead of
          changing the building's formal language, the intervention would add the missing climatic
          layer: identifying where the building is warm, cool, bright, still, noisy, dry, humid,
          exposed, or sheltered, and then turning those conditions into an intentional spatial system.
          The retrofit would shift the building from a continuous visual landscape into a legible
          atmospheric landscape.
        </P>
      </Prose>

      <Plate
        src="img/lausanne-rolex-axonometric.png"
        alt="Axonometric drawing of the Rolex Learning Center"
        caption="An axonometric reading of the building as form, the spatial logic that a Rahmian retrofit would leave intact while making its latent atmospheres legible."
        credit="Drawing: Adrien François Nicolas Von Der Weid"
      />
    </div>
  );
};

const BarbadosPlatinumCoast = ({ accent = "moss" }) => {
  const ACC = accentVar(accent);
  const DASH_SRC = "https://sophiachen-geo.github.io/barbados/embed.html";

  const HEDONIC = [
    ["Inside a gated property", "+81.3%", "Enclosure is the largest single multiplier"],
    ["Each additional bed or bathroom", "+25.5%", "Room count rather than just bedrooms"],
    ["On a hill rather than on the coast", "−40.4%", "Hill is the discount, coast is the product"],
    ["South Coast versus baseline", "−51.0%", "South is the cheaper, younger, American market"],
    ["Condo type", "+49%", "Density premium"],
    ["Penthouse type", "+143%", "Vertical premium"],
  ];

  const TYPOLOGIES = [
    ["1", "Chattel", "Plantation labour, post-emancipation", "Movable, modular, demountable, kinetic", "Public-facing, low fence, gallery as social threshold"],
    ["2", "Suburban Bajan villa", "Mid-century McHarg-Georgian hybrid", "Climate-adapted, owner-occupied, often multi-generational", "Front yard productive, side street walkable, semi-permeable"],
    ["3", "Restored colonial estate", "Royal Westmoreland model", "British, golf-anchored, separate quarters for service", "Reproduces plantation spatial hierarchy at leisure scale"],
    ["4", "Mature branded luxury", "Sugar Hill register", "Compressed export version of #3, no golf", "Membership-as-belonging, gates as the architecture"],
    ["5", "Californian verticalized plot", "Westmoreland New register", "Steep slope, plot maximization, imported ceramic, ornamental species replacing rocks", "\"Sustainable\" by energy axis, post-community by social axis"],
    ["6", "Investment dark unit", "AirBnB-era extraction", "Architecturally indistinguishable from #4 or #5", "Empty most of the year, neighborhood without neighbours"],
  ];

  const OVERT = [
    ["Folkestone Marine Reserve", "Four-zone reserve since 1981. Protects fringing and bank reef, the Stavronikita wreck. Public education at the Folkestone Museum", "West Coast, St. James"],
    ["Coastal Zone Management Unit (CZMU)", "National coordination of coastal-zone activities, monitoring of reefs and beaches, restoration projects", "National"],
    ["Bellairs Research Institute (McGill)", "Long-term marine ecology research station since 1954 in Holetown. Source of the foundational reef-decline literature", "West Coast, Holetown"],
    ["Barbados Sea Turtle Project (BSTP)", "Founded late 1980s by Prof. Julia Horrocks at UWI Cave Hill. 24-hour hotline, nightly patrols, satellite tracking, hatchling rescue. One of the longest-running hawksbill programmes in the world", "National, with West Coast as the main nesting belt"],
    ["Heritage open houses", "Barbados National Trust Open House programme, January through March each year", "National, including Speightstown"],
  ];

  const COVERT = [
    ["Coral Reef Restoration Alliance (CORALL)", "Fragment nurseries of brain and elkhorn coral along the West Coast, trained volunteer monitoring, the \"Ridge to Reef\" framework linking land use to reef health", "West Coast, community membership, dive operator donated boat time"],
    ["WIRRED at Walkers Beach", "Dune ecosystem restoration at the largest leatherback nesting site on the East Coast, started 2016", "East Coast, St. Andrew"],
    ["Eco Rebel Barbados", "Hand-painted community bins with regenerated vegetation, veg-ware as an alternative to single-plastic waste, beach cleanups", "National, strong East Coast presence near Bathsheba"],
    ["First Sunday Lenten congregations", "Churches as one of the few spaces equally open to locals and tourists, multi-ethnic, intergenerational. Holetown's St. James was at 90 percent capacity in March 2020. A young Black female pastor connected fasting to environmental care in her sermon", "West Coast, Holetown"],
    ["Front-yard food economies", "The Porters Road egg seller across from Colony Beach Club, Steph's grilled-fish front-yard dining in Speightstown, the kitchen seamstress, the salon owner who walks visitors from the local to the foreign side of town", "West and North Coasts"],
    ["Union Collaborative", "Reactivation of underutilised properties for arts and culture programming, an incubator for grassroots artists during the pandemic", "Bridgetown"],
  ];

  const FOUR_COASTS = [
    ["Beachfront", "+81% if gated", "Disappearing setbacks, BSTP hotline, warning tape on eroded terraces", "Hawksbill nesting site disturbed by villa lighting"],
    ["Hillside", "−40% per unit", "Westmoreland New on steep slope, no concern, no front yard", "Sediment runoff to fringing reef after rain"],
    ["Beach access", "Marketed amenity", "Hotel ropes, \"invisible barriers\" at One Eleven East, Windows to the Sea", "Public lose access to reef ecology and its monitoring"],
    ["Water", "Pool premium", "Black neighborhoods dry while dogs are bathed", "Chlorinated pool discharge bleaches corals"],
    ["Vegetation", "\"Tropical garden\" branding", "Front-yard farming displaced, \"chickens can't run free\"", "Imported species, no functional habitat for native fauna"],
    ["Sewage", "Invisible to listings", "Bathsheba beach raw sewage, no West Coast plant in operation", "Eutrophication, 24% coral species loss 1982 to 1992"],
    ["Reef", "Not priced in", "CORALL volunteers replant brain and elkhorn fragments", "50+ hard coral species, Diadema lost 1983, parrotfish overfished"],
    ["Turtle", "Marketed as \"swim with turtles\"", "BSTP 24-hour hotline, nightly patrols, satellite tracking", "500 to 600 hawksbills nesting per year, declining"],
  ];

  const INVERSION = [
    ["Energy", "kWh/m², solar panels, low-flow fixtures, green certification", "Advertises, certifies, sells the premium"],
    ["Material", "Imported ceramic, ornamental species, irrigated lawn, exotic flora", "Imports floor tile from China, removes rocks and trees, plants ornamentals"],
    ["Social", "Public access to coast, walkability, water equity, vendor commons, intergenerational tenure", "Enforces gates, ropes off beach, raises water tariffs, displaces front yards"],
    ["Ecological", "Endemic morphology retention, reef nutrient load, turtle nesting integrity, native fauna", "Erodes hillside, runs sediment to reef, lights beach, replaces endemic flora"],
  ];

  const subhead = (t) => (
    <div className="mono" style={{ margin: "22px 0 0", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: ACC }}>{t}</div>
  );

  return (
    <div>
      <ProjectSummary color={ACC}>
        The Barbados Platinum Coast case shows how a classic land-cover and land-use change study can become a broader inquiry into tourism, real estate, ecology, and care. The research began with a precise spatial question: how has the tourism real-estate economy transformed land use along the West Coast? Landsat classifications from 1984 to 2025, Sentinel-2 10-metre classification, change-detection layers, NDVI trends, manicured-vegetation indices, classifier consensus, classifier disagreement, and trajectory mapping were used to identify built expansion, sugarcane conversion, resort lawns, golf landscapes, vegetation decline, and unstable development zones. These tools were essential because land-use change is often too slow, dispersed, and normalized to be grasped from field observation alone. Remote sensing made the transformation visible as a long-term spatial process. But the imagery also exposed the limits of conventional classification. A pixel can distinguish built area, cropland, natural vegetation, or manicured grass; it cannot explain who owns the land, whether a house is occupied or empty, whether a beach feels publicly accessible, whether "green" development displaces social and ecological sustainability, or whether runoff from a luxury hillside project reaches the reef. Fieldwork therefore did not merely validate the classification; fieldwork changed what the classification meant. Walking the coast, reading real-estate listings, studying reef decline, observing front yards, churches, beach access, turtle conservation, and coral-restoration work revealed that land-use change was not only a change in surface cover. It was the spatial expression of a wider political economy: plantation land becoming tourism property, productive yards becoming enclosed amenities, local thresholds becoming gates, and coastal beauty becoming a commodity that depends on the very reef, turtle habitat, and community care it helps erode. Remote sensing was useful because it located the pattern; fieldwork was necessary because it named the stakes. Together, satellite and ground evidence showed that land-use change sat at the centre of many connected questions: housing, access, ecology, tourism, water, vegetation, reef health, and the hidden labour of care that keeps the coastline alive.
      </ProjectSummary>

      <div style={{ marginBottom: 24 }}>
        <div className="serif" style={{ fontSize: 34, lineHeight: 1.18, letterSpacing: "-0.014em", color: "var(--ink)", maxWidth: 820 }}>
          The Platinum Coast, three ways
        </div>
        <div style={{ marginTop: 12, fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 720 }}>
          A two-year study of real estate, architecture, care, and the reef beneath it all.
        </div>
        <div className="mono" style={{ marginTop: 10, fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-3)" }}>
          Sophia Chen · 2020
        </div>
      </div>

      <Prose max={760}>
        <P>
          Barbados is a small island doing a large amount of work. Sugar built it. Tourism rebuilt
          it. The Platinum Coast, a fifteen-kilometre ribbon along its western edge, has become one
          of the most expensive stretches of Caribbean shoreline in the world, and one of the most
          studied registers of what happens when a former plantation society becomes a leisure
          destination for the wealthy of somewhere else.
        </P>
        <P>
          This project did not begin with an argument about care. It began with a question about an
          island. Across two years of work, three pieces accumulated separately. A market study of
          the luxury real estate sector. A tropical ecology study of the West Coast reef and the
          species that depend on it. A week of fieldwork along the West and East Coasts in March
          2020, looking at houses, beaches, churches, front yards, and the people who hold them. Each
          piece had its own object. The market study asked what makes a Barbadian villa expensive.
          The reef study asked what makes a fringing reef survive. The fieldwork asked what
          Barbadians do when the formal commons disappears in front of them. Three different
          questions, asked in three different disciplinary registers, on the same fifteen-kilometre
          coast.
        </P>
        <P>
          What was not obvious at the start, and became obvious only in the writing, was that the
          three pieces were converging on the same object. The coast does not run on price alone. It
          runs on a substrate of overt and covert care that the leisure economy is busy depleting and
          that a small constellation of Barbadians, individually and through institutions, are busy
          rebuilding. The project began as an attempt to understand the island's challenges. It ended
          as a study of commons.
        </P>
        <Pull color={ACC}>
          Three readings. One coastline. One emergent thesis.
        </Pull>
      </Prose>

      <figure style={{ margin: "28px 0 8px" }}>
        <Card pad={0} style={{ overflow: "hidden", background: "var(--ink)" }}>
          <iframe
            key="barbados"
            src={DASH_SRC}
            title="Barbados dual map viewer, satellite analysis beside the government planning maps"
            loading="lazy"
            style={{ display: "block", width: "100%", height: "86vh", minHeight: 760, border: "none" }}
          />
        </Card>
        <figcaption style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginTop: 10 }}>
          <span style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-3)", maxWidth: 740 }}>
            The linked dual-map viewer: a satellite-analysis basemap with a 16-layer Earth Engine
            picker and a 1984 to 2025 time scrubber on the left, the 17 government planning maps on the
            right. Pan or zoom either map and the other follows in lockstep.
          </span>
          <a href={DASH_SRC} target="_blank" rel="noopener noreferrer" className="mono" style={{
            fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
            color: ACC, textDecoration: "none", whiteSpace: "nowrap",
          }}>Open full screen &#8599;</a>
        </figcaption>
      </figure>

      <Sub kicker="I · Market" color={ACC}>The market reads the coast as a price function</Sub>
      <Prose max={760}>
        <P>
          A web scraper written in Python and run on 7thHeaven Properties in May 2018 returned 135
          luxury listings across the island, with house type, parish, room count, beach access, pool
          access, and gated status. A multiple linear regression, after log-transforming the
          dependent variable and running a stepwise selection, produced a clean grammar of what makes
          a Barbadian villa expensive.
        </P>
      </Prose>
      <DataTable color={ACC} headers={["Variable", "Effect on sale price", "Interpretation"]} rows={HEDONIC} />
      <Prose max={760}>
        <P>
          The model is intelligible, but its sample is biased. One hundred and thirty five listings
          is a thin slice of an island whose vacancy rate climbed 117.9 percent between 1990 and 2010
          while population grew only 5.8 percent. The supply is not absent. The supply is mismatched,
          and the listings the market chooses to advertise are the most polished face of a much wider
          built landscape. The regression is honest about a fraction of the housing stock. The rest
          of the project is an attempt to learn what the regression cannot, by walking the coast and
          looking under the water.
        </P>
      </Prose>

      <Sub kicker="II · Typology" color={ACC}>Six houses, one continuum</Sub>
      <Prose max={760}>
        <P>
          The 2020 paper treated <em>type</em> as a dummy variable. Fieldwork made clear that the
          categories were not market segments. They were six different theories of how a building
          should sit in a landscape, and each one performs different work on the commons around it.
        </P>
      </Prose>
      <DataTable color={ACC} headers={["#", "Typology", "Origin", "Spatial logic", "What it does to the commons"]} rows={TYPOLOGIES} />
      <Prose max={760}>
        <P>
          The chattel house, which the Museum of Barbados names as the architectural vocabulary of
          the plantation working class, expressed the owner's ingenuity, flexibility, and
          individuality through its modular kit of parts. It is no longer being built. The Bajan
          suburban villa absorbed its modular logic into a Georgian symmetry and produced a uniquely
          island style, climate-adapted, owner-occupied, often housing three generations. It is being
          replaced. Royal Westmoreland reproduces the colonial estate as a leisure product, with
          multigenerational main houses, separate quarters for service, and golf as the spine of
          belonging. Sugar Hill compresses the same program into a lighter amenity stack without the
          golf. Westmoreland New, the project visited in March, removes the rocks because clients find
          them ugly, imports ceramic from China for the floors, replaces native flora with ornamental
          imports, builds on a steep slope without erosion concern from either the agent or the
          manager, and brands itself as a sustainable green project on the strength of its energy
          systems alone. The investment dark unit is architecturally indistinguishable from
          typologies four and five. Its difference is temporal. It is empty most of the year, a
          vehicle for capital with a roof.
        </P>
        <P>
          Reading these six as a continuum makes the hedonic regression do more work than it can on
          its own. The gated coefficient of +81.3 percent is not a market quirk. It is the price the
          leisure economy assigns to the disappearance of the threshold between house and street, and
          the disappearance accelerates as one moves from typology one toward typology six. Each move
          along the continuum withdraws one layer of relational fabric and replaces it with one layer
          of branded amenity.
        </P>
      </Prose>

      <Sub kicker="III · Reef" color={ACC}>The reef beneath the price</Sub>
      <Prose max={760}>
        <P>
          The coastline is not only a property line. It is the edge of a marine ecosystem whose health
          is the silent collateral of every real estate transaction that takes place above the
          high-water mark. Two years of reading and one week of marine observation yielded a portrait
          of the West Coast reef as a system in measurable retreat, financed by the same beauty it
          cannot afford to lose.
        </P>
        <P>
          The fringing reefs of the West Coast extend approximately 300 metres from the shoreline
          along most of the Platinum Coast. The Folkestone Marine Reserve, legislated in 1981 and
          covering 2.1 square kilometres along 2.2 kilometres of coast in St. James, protects four
          well-developed fringing reefs, several patch reefs, and an offshore bank reef. The Reserve
          is divided into four zones: a scientific research zone, two water sports zones, and a
          recreational zone. The Stavronikita, a Greek freighter scuttled in 1976, sits at 36 metres
          on the bank reef and has been colonised over four decades into one of the most studied
          artificial reefs in the Caribbean.
        </P>
        <P>
          The biological inventory inside the Reserve includes more than fifty species of hard coral,
          among them brain coral, star coral, finger coral, and the increasingly rare elkhorn and
          staghorn. The reef fish populations comprise parrotfish, trumpetfish, blue tang, sergeant
          majors, barracuda, and schools of Creole wrasse moving among the spurs. Hawksbill and green
          sea turtles forage on the reef and the adjacent seagrass beds. Barbados hosts the
          second-largest nesting population of hawksbills in the Wider Caribbean, with as many as 500
          to 600 females returning each year to lay along the West and South coasts.
        </P>
        <P>
          The decline is not in dispute. Hunte and Wittenberg, working from McGill's Bellairs Research
          Institute in Holetown in 1992, documented eutrophication along the entire West Coast, with
          increased algal abundance, reduced coral recruitment, and elevated sedimentation rates.
          Oxenford and colleagues in 1993, and Tomascik and Sander in 1985, reached the same
          conclusions through independent surveys. A trend analysis between 1982 and 1992 found a 24
          percent mean loss of coral species and a 34 percent decline in coral abundance across reefs
          along the West Coast. Three pressures concentrate the loss. Sewage from the high-density
          hotel and villa strip, with no centralised West Coast treatment plant in operation by 2020.
          Chlorinated discharge from hotel and villa swimming pools, to which corals are highly
          vulnerable. Sediment runoff from coastal construction including the new luxury projects,
          channelled to the reef through the same drainage infrastructure the Port St. Charles
          gardener described as turning the lagoon into chocolate milk after a storm.
        </P>
        <P>
          A 1983 mass mortality event compounded the gradual decline. Across ten reefs surveyed in
          Barbados that autumn, the keystone herbivorous urchin <em>Diadema antillarum</em> experienced
          a 93.2 percent die-off, with reefs exposed to incoming oceanic water suffering the heaviest
          mortality. The functional extinction of <em>Diadema</em> persists nearly four decades later.
          Parrotfish became the only major grazers left between coral and macroalgae, and where
          parrotfish are fished out the reef shifts irreversibly toward an algal-dominated state. The
          reef beneath the Platinum Coast continues to depend on a fish species that the local trap,
          net, and spear fishery has every economic reason to remove.
        </P>
        <P>
          What walking the coast and reading the ecology together makes visible is that the typology
          continuum maps directly onto the reef pressure gradient. Typologies one and two return
          rainwater to the soil, run small pools or none at all, and rarely sit close enough to the
          high-water mark to load sediment onto the reef during construction. Typologies three through
          six concentrate the three pressures: sewage volume, chlorinated discharge, and construction
          sediment. The architectural choices made above the waterline write themselves, with a lag of
          several years, onto the brain coral and the elkhorn below.
        </P>
      </Prose>

      <Sub kicker="IV · Care" color={ACC}>Overt and covert care, woven together</Sub>
      <Prose max={760}>
        <P>
          Where the formal architecture of public coastal space thins under leisure economy pressure,
          a parallel architecture of care has been carrying the relational and ecological work. Reading
          the project across its three pieces made one thing clear. The institutions doing this work on
          land and the institutions doing it underwater are not separate networks. They are the same
          constellation, woven through churches, dive boats, front yards, beach hotlines, painted bins,
          and university research stations. Some of this care is overt, named by the state and visible
          to the brochure. Most is covert, distributed across small initiatives and individual acts
          that operate quietly under the radar of the leisure economy that is depleting the conditions
          of their existence.
        </P>
      </Prose>
      {subhead("Overt care, the visible scaffold")}
      <DataTable color={ACC} headers={["Initiative", "What it does", "Where it sits"]} rows={OVERT} />
      {subhead("Covert care, the substrate the brochure does not name")}
      <DataTable color={ACC} headers={["Initiative", "What it does", "Where it sits"]} rows={COVERT} />
      <Prose max={760}>
        <P>
          The boundary between overt and covert is porous, and the two registers depend on each other
          in ways that the leisure economy systematically misreads. The Sea Turtle Project is named and
          funded and publishes academic papers, yet its operational reality depends on hotel staff,
          villa guests, and beach users calling a hotline at three in the morning when a hatchling is
          disoriented by villa beachfront lighting. CORALL is a registered alliance with a website and
          a membership programme, yet its reef nurseries depend on individual dive operators donating
          boat time and on volunteers willing to descend repeatedly to the same site over months. The
          Folkestone Reserve is gazetted, but the historical over-fishing inside it, the poor habitat
          quality on its fringing reefs, and the severe limits on its enforcement capacity mean that
          the reef's actual day-to-day defence lies with the same dive shops, hotel marine educators,
          and CORALL volunteers who give the Reserve its working meaning. Conversely, the church
          congregation that fills St. James on the first Sunday of Lent is covert in the sense that no
          state document lists it as a coastal-management asset, yet it is one of the most reliable
          spaces on the entire West Coast where Barbadians and overseas visitors share the same room
          and the same liturgy and the same call to care for a shared physical environment.
        </P>
        <P>
          Three patterns emerge when the two registers are read together. First, the overt institutions
          provide legitimacy and continuity. They protect the long-running data series, the funded
          posts, the legal designations. Second, the covert initiatives provide presence and
          adaptability. They show up when the funded post is unfilled, the regulation is unenforced,
          the brochure is misleading. Third, the two together describe a working theory of resilience
          that the leisure economy does not have a vocabulary for. The Platinum Coast is held together
          not by the gated developments that finance it but by the BSTP hotline volunteer, the CORALL
          diver, the Lenten congregant, the front-yard egg seller, the Eco Rebel painter, the Bellairs
          researcher, and the CZMU officer, operating across registers and across the high-water mark.
        </P>
        <P>
          The egg seller's chickens cannot run free because, in her words, land is scarce here. The
          hawksbill cannot nest in peace because the villa lights are on. The elkhorn cannot recruit
          because the macroalgae has the substrate. Each of these constraints has been produced by the
          same political-economic logic, and each is being held against by the same network of people
          working in different registers of care.
        </P>
      </Prose>

      <Sub kicker="V · Synthesis" color={ACC}>The four coasts read as one</Sub>
      <Prose max={760}>
        <P>Laying the three readings over one another makes the coast legible as a single integrated system.</P>
      </Prose>
      <DataTable color={ACC} headers={["Object", "Market reading", "Care reading, overt and covert", "Tropical ecology reading"]} rows={FOUR_COASTS} />
      <Prose max={760}>
        <P>
          Every row is the same line of shoreline doing four different things at once. Producing rent.
          Hollowing or rebuilding a commons. Damaging or feeding the reef. Hosting or disorienting a
          turtle. The leisure economy treats the first as the only register that matters and the others
          as externalities. The fieldwork suggests the opposite. The most sustainable projects on the
          West Coast by every meaningful measure are the chattel house, the Bajan suburban villa, the
          BSTP volunteer, the front-yard egg seller, the Lenten congregant, and the CORALL diver
          replanting elkhorn off Holetown. None of them appears in the brochure.
        </P>
      </Prose>

      <Sub kicker="VI · Inversion" color={ACC}>The inversion that organises everything</Sub>
      <Prose max={760}>
        <P>
          The strongest single finding of the two years is the inversion. The greener the marketing of
          a new luxury development, the more aggressively it tends to perform on the energy axis of
          sustainability and the more aggressively it tends to displace the social and ecological axes
          of sustainability at the parcel scale.
        </P>
      </Prose>
      <DataTable color={ACC} headers={["Axis", "What it tracks", "What the new luxury does"]} rows={INVERSION} />
      <Prose max={760}>
        <P>
          The Westmoreland New manager and agent were proud of typology five's energy performance and
          showed no concern for its erosion risk on a steep slope, no concern for the imported ceramic
          and ornamental flora, no concern for the absence of communal space, and no awareness of the
          downstream effect on the fringing reef of the runoff their construction was producing. The
          "sustainable green project" branding is not a lie. It is a category narrowing. It captures
          one axis and displaces the others outside the frame. Naming what "sustainability" excludes
          in this market is the project's strongest single sentence.
        </P>
      </Prose>

      <Sub kicker="Coda" color={ACC}>From understanding the island to studying its commons</Sub>
      <Prose max={760}>
        <P>
          The project did not set out to argue for commons. It set out to understand a coastline. Two
          years and three pieces in, the argument arrived on its own. The market study, the reef
          ecology, and the care fieldwork each pointed independently at the same conclusion. The coast
          is not a backdrop to a real estate market. It is a working ecosystem of houses, fish,
          turtles, vendors, congregations, and reefs that has been integrated for centuries and is
          being disintegrated under the pressure of a leisure economy that sees only one of those
          layers. Reading the three together is what produced the commoning care frame. The frame did
          not pre-exist the work. The work produced it.
        </P>
        <P>
          Care, where it persists, is not where the brochure says it is. It is in a 24-hour turtle
          hotline answered by a UWI graduate student at three in the morning. It is in a brain coral
          fragment growing on a CORALL nursery line off the Folkestone reef. It is in the cardboard egg
          carton handed across the gate of a Porters Road backyard. It is in the painted Eco Rebel bin
          on the side of the road in Bathsheba. It is in the Lenten sermon at St. James that connects
          fasting to environmental care, delivered to a congregation of locals and overseas visitors
          who came in roughly equal numbers. None of these is captured by the listings platform. All of
          them are doing the work the listings platform depends on.
        </P>
        <P>
          The argument the project makes, two years in, is that an island this small cannot afford to
          read its coast as one thing. The reef and the room rate are the same conversation. The
          chattel house and the hawksbill are the same conversation. The Lenten congregant and the
          elkhorn fragment are the same conversation. To name them as one is the work. To do that
          naming requires moving across the overt and the covert at once, since the institutions and
          the individuals doing this labour move across those registers daily, and the leisure economy
          disintegrating their work does not recognise the distinction either.
        </P>
        <P style={{ paddingTop: 18, borderTop: "1px solid var(--rule-soft)", fontSize: 14.5, color: "var(--ink-3)" }}>
          Published as <a href="https://www.arch.columbia.edu/books/reader/597-urban-magazine-fall-2020" target="_blank" rel="noopener noreferrer" style={{ color: ACC, textDecoration: "none" }}>Commoning Care in Barbados: Home Away &amp; Beyond</a>, chapter 11, URBAN Magazine, Columbia GSAPP, Fall 2020.
        </P>
      </Prose>
    </div>
  );
};

const CASE_STUDIES = [
  {
    id: "greater-lausanne",
    kind: "essay",
    eyebrow: "Field Survey · Switzerland / Lausanne-EPFL · 2019",
    tabTitle: "GHG hotspots and lower-atmosphere dynamics at the city scale",
    title: "Mapping GHG hotspots and lower-atmosphere dynamics at the city scale",
    blurb:
      "A six-day, 2,680-point handheld walk of CO₂ at body altitude through the metros, streets, parks, and the Rolex Learning Center, set against the single TROPOMI pixel that covers all of it. A five-tier pipeline reads each scale for what only it can see, and the building itself becomes the testbed where every tier meets. The linked map, charts, and detail panel are embedded below.",
    tags: ["CO₂ field readings", "Sentinel-5P TROPOMI", "Q-TRAK walk", "Rolex Learning Center", "Climatic architecture"],
    body: LausanneEPFL,
    accent: "lapis",
  },
  {
    id: "socodevi-cnaas",
    kind: "essay",
    eyebrow: "Consultancy · Senegal · 2023",
    tabTitle: "The rain-gauge network behind index-based crop insurance",
    title: "Assessing the rain-gauge network behind index-based crop insurance for SOCODEVI and CNAAS",
    blurb:
      "Parametric crop insurance only pays the right farmers if the rain gauge is where the database says it is. A reconciliation of Senegal's CNAAS gauge network against the OCHA reference, followed by QGIS capacity-building in the Casamance cooperatives, so the satellite pixel can become the rain that fell on one parcel on one afternoon.",
    tags: ["Parametric insurance", "Coordinate reconciliation", "Python · pandas · pyproj", "QGIS capacity-building", "CHIRPS / IMERG / TAMSAT"],
    body: SocodeviCNAAS,
    accent: "ochre",
  },
  {
    id: "barbados",
    kind: "essay",
    eyebrow: "Interdisciplinary Field Research · Barbados · 2020",
    tabTitle: "Land-use change, tourism real estate, coastal ecology, and care along the Platinum Coast",
    title: "Tracing land-use change along the Platinum Coast through tourism real estate, coastal ecology, and community care",
    blurb:
      "Two years on Barbados's western shore, read three ways at once, a hedonic regression of the luxury villa market, a tropical-ecology study of the West Coast reef, and a week of fieldwork on houses, churches, and front yards. The three converge on a single object: a commons of overt and covert care that the leisure economy depletes and a small constellation of Barbadians rebuilds. The linked satellite-and-planning dual-map viewer is embedded within.",
    tags: ["Hedonic regression", "Reef ecology", "Commoning care", "Linked dual maps", "Barbados · 2020"],
    body: BarbadosPlatinumCoast,
    accent: "moss",
  },
  {
    id: "serious-games",
    kind: "essay",
    eyebrow: "Applied Research · Canada / Montérégie · 2024",
    tabTitle: "Water-governance scenarios and serious-game planning in Montérégie",
    title: "Building water-governance scenarios through a serious game with Université Laval, INRS, and municipalities",
    blurb:
      "Around a printed table, a watershed director, a planner, a municipal officer, and a farmer build their shared water system from cards, take on each other's roles, and play out futures grounded in the satellite record. A five-step chain turns a raster into a scenario; interviews translate each measured shift into what it means at every seat at the table.",
    tags: ["Serious Game", "Water governance", "Sentinel · Landsat · MODIS", "SMAP soil moisture", "Two-Eyed Seeing"],
    body: SeriousGames,
    accent: "plum",
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
    <span className="serif" style={{ fontSize: 19, lineHeight: 1.15, letterSpacing: "-0.01em" }}>
      {study.tabTitle || study.title}
    </span>
  </button>
);

const TabDeepDive = () => {
  const [activeId, setActiveId] = React.useState(CASE_STUDIES[0].id);
  const active = CASE_STUDIES.find(c => c.id === activeId) || CASE_STUDIES[0];
  const acc = accentVar(active.accent);
  const Body = active.body;

  return (
    <div className="wrap" style={{ padding: "64px 56px 96px", "--accent": "var(--st-chrome-accent)" }}>
      <StrataHead section="canopy" />

      {CASE_STUDIES.length > 1 && (
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(CASE_STUDIES.length, 4)}, 1fr)`,
          gap: 14, marginBottom: 40,
        }}>
          {CASE_STUDIES.map(c => (
            <CaseStudyTab key={c.id} study={c} on={c.id === activeId}
              onClick={() => setActiveId(c.id)} />
          ))}
        </div>
      )}

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <Kicker color={acc}>{active.eyebrow}</Kicker>
          {active.kind === "embed" && active.src && (
            <a href={active.src} target="_blank" rel="noopener noreferrer" className="mono" style={{
              fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
              color: acc, textDecoration: "none", whiteSpace: "nowrap",
            }}>Open full screen &#8599;</a>
          )}
        </div>
        <h3 className="serif" style={{
          margin: "6px 0 14px", fontSize: 30, lineHeight: 1.08,
          fontWeight: 400, letterSpacing: "-0.014em", maxWidth: 880,
        }}>{active.title}</h3>
        <Prose max={840}>
          <P>{active.blurb}</P>
        </Prose>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
          {active.tags.map((t, i) => <Pill key={i} tone={active.accent}>{t}</Pill>)}
        </div>
      </div>

      {active.kind === "embed" ? (
        <>
          <Card pad={0} style={{ overflow: "hidden", background: "var(--ink)" }}>
            <iframe
              key={active.id}
              src={active.src}
              title={active.title}
              loading="lazy"
              style={{ display: "block", width: "100%", height: "86vh", minHeight: 760, border: "none" }}
            />
          </Card>
          <div className="mono" style={{
            marginTop: 10, fontSize: 10.5, letterSpacing: "0.08em",
            color: "var(--ink-3)", textTransform: "uppercase",
          }}>Scroll and interact inside the frame, or open it full screen.</div>
        </>
      ) : (
        <>
          <Rule style={{ margin: "4px 0 8px" }} />
          <Body accent={active.accent} />
        </>
      )}
    </div>
  );
};

Object.assign(window, { TabDeepDive, CASE_STUDIES });
