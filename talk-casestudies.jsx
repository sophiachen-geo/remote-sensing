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
        <div className="serif" style={{ fontSize: 17, lineHeight: 1.35, color: "var(--ink)", fontStyle: "italic", marginTop: 6 }}>Qui fait quoi dans les 72 prochaines heures, et avec quel outil ?</div>
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

const SeriousGames = ({ accent = "plum" }) => {
  const ACC = accentVar(accent);

  const INSTRUMENTS = [
    { k: "Sentinel-2", v: "Every patch of Quebec every five days at ten metres — cropping shifts, riparian buffers, lakeside development, the timing of lake blooms." },
    { k: "Landsat", v: "A continuous record since the 1970s at thirty metres — five decades of wetland loss and land-cover change." },
    { k: "MODIS", v: "Daily surface temperature, vegetation health, and snow cover across the whole region." },
    { k: "SMAP", v: "Soil moisture in the top few centimetres — how many weeks the root zone stays below its historical tenth percentile." },
    { k: "Sentinel-1", v: "Radar that sees through cloud and dark — flooded ground, snow-phase change, irrigated versus rainfed fields." },
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
    { k: "Acute shock", v: "A documented historical event the satellite record verifies, handed to players mid-session — the 2021 drought, the spring 2020 recharge deficit, a bloom that shut a filtration plant." },
    { k: "Slow trend", v: "Co-constructed futures along two axes, climate intensity and governance response. At least two must live side by side, so players reckon with possibilities rather than a single forecast." },
    { k: "Cascade", v: "One event triggers a chain across the cards — drought concentrates nutrients, a bloom closes an intake, a town switches to the aquifer that farmers already draw. The chain is the lesson." },
    { k: "Counterfactual", v: "A governance action played against an observed trend — what if every source protection plan were done by 2030? It separates knowledge gaps from agency gaps." },
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

  return (
    <div>
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
          {" "}<Fr>Trajectoire Eau et Territoire</Fr> — originally developed at the Université de
          Rennes — for two contrasting regions: Brome-Missisquoi in the Eastern Townships, and
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
          through, they take on governance roles — watershed director, county planner, municipal
          officer, farmer, citizen — and renegotiate the same system from those positions,
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

      <Sub kicker="The instruments" color={ACC}>What satellites can — and cannot — show</Sub>
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
      <div className="serif" style={{ margin: "20px 0", fontSize: 26, lineHeight: 1.3, fontStyle: "italic", color: "var(--ink)", maxWidth: 760 }}>
        Drier for whom? With what consequences? For which practice? On what timescale?
      </div>
      <Prose max={760}>
        <P>
          The team interviewed a deliberately heterogeneous population — not for opinions about
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
          yield indicators — consecutive weeks of critical vegetation anomaly, the share of farmland
          below the tenth soil-moisture percentile, the peak temperature anomaly. The shift: the
          hottest, driest summer since the record began, with crop and soil stress roughly double the
          prior decade. The artifact is a shock card the facilitator hands players mid-session.
        </P>
      </Prose>
      <ShockCard color={ACC} lines={[
        "L'indice de végétation sur le maïs est à 25 % sous la moyenne 2010–2020.",
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
          Expert intuition, institutional memory, and imagined futures all have their place — the
          game makes deliberate room for each. But satellite-derived evidence adds six things they
          cannot.
        </P>
      </Prose>
      <Tiles items={ADVANTAGES} color={ACC} />

      <Sub kicker="The posture" color={ACC}>How the game treats knowledge</Sub>
      <Prose max={760}>
        <P>
          The game does not treat satellite data as the truth of the system. It treats it as one
          disciplined view among several — the technical knowledge of the PACES groundwater studies,
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
        forced to validate one another; they are placed side by side — Two-Eyed Seeing, after Mi'kmaw
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
  {
    id: "serious-games",
    kind: "essay",
    eyebrow: "Research · Quebec · INRS & Université Laval",
    title: "Serious Games, building water-governance scenarios from satellites",
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
        lede="Extended companions to the argument. Some are live, interactive dashboards; others are field case studies — from the gauge networks behind crop insurance to a serious game for water governance. Each follows a single thread, from a satellite pixel to a decision made on the ground."
        color="var(--lapis)"
      />

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
