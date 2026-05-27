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
    { t: "Adaptation finance infrastructure", a: "", v: "Index insurance, parametric cover, and drought-contingent transfers — each categorically dependent on a verified link between an environmental measurement and a list of beneficiaries." },
  ];

  return (
    <div>
      <Prose max={760}>
        <Lead>
          Senegalese agriculture is overwhelmingly rainfed and dominated by smallholder
          farmers cultivating groundnut, millet, maize, and rice.
        </Lead>
        <P>
          Climate change has rendered the monsoon increasingly erratic, and traditional
          indemnity-based crop insurance — in which an adjuster visits the farm to assess
          each loss individually — is unworkable at smallholder scale, because the cost of
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
          regions — Kaffrine, Kolda, Vélingara, Ziguinchor, Sédhiou, Tambacounda, Fatick,
          Kaolack, and Thiès — installed by successive field teams across four annual cohorts
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
          Coordination of Humanitarian Affairs (OCHA) — a validated dataset of 2,896 villages
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
            governs its payout — some sit within a kilometre, others more than a hundred. Imagery: Google
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
          portfolio, we delivered training in QGIS — the free and open-source geographic
          information system — to cooperative officers, extension agents, and the coordinators
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
          relevant here — the Climate Hazards Group InfraRed Precipitation with Station data
          (CHIRPS), the Integrated Multi-satellite Retrievals for the Global Precipitation
          Measurement mission (IMERG), and the Tropical Applications of Meteorology using
          Satellite data (TAMSAT) — all measure rainfall in pixels of roughly five to ten
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
          west of the road on Tuesday afternoon — and only a cooperative that possesses both the
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

const CASE_STUDIES = [
  {
    id: "greater-lausanne",
    kind: "embed",
    eyebrow: "Field survey · EPFL · spring 2019",
    title: "Greater Lausanne, the boundary layer at city scale",
    blurb:
      "A handheld walk of CO₂, temperature, and humidity across 27 indoor and outdoor points in and around Lausanne, joined to satellite layers from the same period. The map, the charts, and the detail panel are linked, click any numbered point or any bar to inspect it everywhere. This is the Q-TRAK walk of Topic 2 done at city scale, with governance.",
    tags: ["CO₂ field readings", "Sentinel-2 and 5P", "Landsat 8 LST", "Local Climate Zones", "GHSL"],
    src: "case-studies/greater-lausanne.html",
    accent: "lapis",
  },
  {
    id: "socodevi-cnaas",
    kind: "essay",
    eyebrow: "Field consultancy · Senegal · 2023",
    title: "SOCODEVI & CNAAS, the gauge network behind crop insurance",
    blurb:
      "Parametric crop insurance only pays the right farmers if the rain gauge is where the database says it is. A reconciliation of Senegal's CNAAS gauge network against the OCHA reference, followed by QGIS capacity-building in the Casamance cooperatives, so the satellite pixel can become the rain that fell on one parcel on one afternoon.",
    tags: ["Parametric insurance", "Coordinate reconciliation", "Python · pandas · pyproj", "QGIS capacity-building", "CHIRPS / IMERG / TAMSAT"],
    body: SocodeviCNAAS,
    accent: "ochre",
  },
  {
    id: "barbados",
    kind: "embed",
    eyebrow: "Dual-map viewer · Barbados",
    title: "Barbados, satellite analysis beside the government planning maps",
    blurb:
      "Two linked maps of Barbados — pan or zoom either one and the other follows in lockstep. The left is a satellite-analysis basemap with a 16-layer Earth Engine picker and a 1984-to-2025 time scrubber; the right overlays 17 government planning maps with per-layer opacity, inline legends, and a full-size lightbox.",
    tags: ["Linked dual maps", "Earth Engine · 16 layers", "1984–2025 time scrubber", "Planning maps · 17 layers"],
    src: "https://sophiachen-geo.github.io/barbados/embed.html",
    accent: "moss",
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
  const acc = accentVar(active.accent);
  const Body = active.body;

  return (
    <div className="wrap" style={{ padding: "64px 56px 96px" }}>
      <SectionHead
        index="iv"
        eyebrow="Case studies"
        title="Deep Dive"
        lede="Extended companions to the argument. One is a live, interactive dashboard; another is a field case study from the gauge networks behind crop insurance. Each follows a single thread, from a satellite pixel to a decision made on the ground."
        color="var(--lapis)"
      />

      {CASE_STUDIES.length > 1 && (
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(CASE_STUDIES.length, 3)}, 1fr)`,
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
