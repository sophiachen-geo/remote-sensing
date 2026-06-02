// =======================================================================
// Critical Field Guide to Remote Sensing — twelve principles + how to use.
// Lives as one of the two tabs under Rhizosphere. Text is verbatim from
// the author's manuscript; figures here are restrained to keep the prose
// load-bearing.
// =======================================================================

const FG_COLORS = {
  sensor: "#1f6feb",   // sky, what the satellite measures
  meaning: "#c2410c",  // clay, what it means for a life
  sensorTint: "#e8f1fe",
  meaningTint: "#fbede2",
  navy: "#0b3a82",
  rule: "#d8e1ec",
};

const FG_PRINCIPLES = [
  {
    n: "01",
    mismatch: "unit",
    from: "the pixel",
    to: "the place",
    title: "The pixel is not the place.",
    paragraphs: [
      "Remote sensing begins by dividing the world into pixels. This is necessary for measurement. It is also a reduction.",
      "A ten-metre Sentinel-2 pixel can contain part of a household compound, a drainage ditch, a footpath, a shade tree, a schoolyard, a market edge, a sacred grove, or an informal meeting place. The pixel can measure reflectance. It cannot know the social unit.",
      "This distinction is significant for resilience, as risk frequently exists at scales smaller than or spanning multiple pixels. For example, a household may rely on a path too narrow to be mapped, a women's agricultural plot may be situated within a male-titled parcel, or a shelter may be visually indistinguishable from a storage structure. Additionally, safe routes may be known only through local knowledge, such as which fence opens, which neighbor possesses a generator, or which road is prone to flooding first.",
      "A satellite may see bare ground beside a school. A classifier may call it open space. Local residents may know it as the evacuation assembly point, Friday market overflow, only shaded waiting area during a heat wave, or where children gather after an earthquake.",
    ],
    coupletA: "The remote-sensing product records surface.",
    coupletB: "The community map records use.",
    closing: [
      "The gap between the two is not only a data gap. It is an ontological gap: the satellite and community describe different kinds of objects.",
      "Counter-mapping is important because it not only supplements official maps with missing features but also transforms the types of entities that maps can represent. Through counter-mapping, customary claims, access relationships, informal infrastructure, and shared spaces become visible in contexts where official systems recognize only property boundaries, land cover, or administrative units.",
    ],
    test: "Before using a pixel, polygon, or building footprint as the unit of analysis, ask: is this the unit through which people actually experience risk?",
  },
  {
    n: "02",
    mismatch: "category",
    from: "land cover",
    to: "land meaning",
    title: "Land cover is not land meaning.",
    paragraphs: [
      "Remote sensing excels at identifying physical land cover types such as water, vegetation, built-up areas, snow, bare soil, crops, forests, asphalt, or wetlands. While these categories are valuable for analysis, they do not capture the full meaning or significance of land use.",
      "A fallow field may look abandoned from space, but locally it may be resting in a planned agricultural cycle. A dry riverbed may look empty, but it may be a seasonal grazing corridor. A shoreline clearing may look degraded, but it may be a canoe landing, fishing access point, or ceremonial site. A vacant lot may look unused, but it may be the place people have already agreed to meet after a flood.",
    ],
    coupletA: "The “bare” class is not empty.",
    coupletB: "It is often the place where the classifier deposits what it does not know how to value.",
    closing: [
      "This issue extends beyond technical limitations to encompass classification challenges. Every classification system embeds assumptions regarding significance and value. Categories such as “productive,” “unused,” “natural,” “urban,” “formal,” “informal,” “damaged,” or “other” do more than describe the world; they structure it, rendering certain claims visible while relegating others to residual status.",
      "In disaster and resilience work, this matters because residual spaces often become critical spaces. A schoolyard becomes a shelter site. A sports field becomes a helicopter landing zone. A parking lot becomes a distribution hub. A vacant lot becomes a community kitchen. A shaded wall becomes heat refuge. A dry-season pond becomes pastoral infrastructure.",
      "Remote sensing frequently interprets a lack of spectral complexity as an absence of social significance.",
    ],
    test: "For every land-cover class, ask what socially important uses may be hidden inside it.",
  },
  {
    n: "03",
    mismatch: "time",
    from: "the revisit interval",
    to: "the community calendar",
    title: "The satellite has a revisit interval. The community has a calendar.",
    paragraphs: [
      "Satellite time is determined by orbital mechanics, whereas community time is defined by lived experience.",
      "A sensor may return every day, every five days, every sixteen days, or irregularly because of clouds, tasking, or data availability. This rhythm is powerful for some questions. It is poorly suited to others.",
      "Many community-relevant events happen too fast or slow for the satellite. A flood evacuation may unfold over hours. A temporary bridge may fail in a morning. A market may exist only one day a week. A road may be passable only during a short snowmelt window. A floodplain may become cultivable only during a narrow recession. A fishing ground may matter only during one seasonal opening. A sacred place may matter through intergenerational memory even if its surface never changes.",
      "A median annual composite may stabilize classification signals but can obscure the variability experienced by communities. For certain livelihoods, what appears as an anomaly in data is, in fact, a critical part of the local calendar.",
      "This is especially important in drylands, floodplains, Arctic regions, coastal communities, and agricultural systems where timing is everything. The relevant question is often not “what is the average condition?” but “when did the threshold arrive, how long did it last, and who was able to act within that window?”",
    ],
    coupletA: "The satellite can show change.",
    coupletB: "Community knowledge can tell us when change becomes consequential.",
    closing: [],
    test: "Before compositing or averaging, ask which seasonal, daily, or threshold events the method might erase.",
  },
  {
    n: "04",
    mismatch: "validation",
    from: "ground truth",
    to: "co-presence",
    title: "Ground truth is not truth.",
    paragraphs: [
      "The term “ground truth” is widely used in remote sensing, yet it is often misleading.",
      "The phrase implies the satellite image is the main object and the ground exists to verify it. It suggests community knowledge is valuable only when it improves classification accuracy. But often, the satellite and field observation do not measure the same thing.",
      "A farmer saying “this land is resting” is not just confirming or rejecting a bare-soil class. She is naming a land-use relation. A resident saying “this road is unsafe at night” is not correcting a road layer. She is describing a social condition the road layer was never built to capture. A community saying “this area should not be mapped publicly” is not withholding data. It is asserting governance over visibility.",
      "Community knowledge should not be reduced to ground truth. It is a parallel knowledge system with its own categories, memories, thresholds, and relevance standards.",
    ],
    coupletA: "The objective is not solely validation, but rather co-presence.",
    coupletB: "Satellite evidence and lived knowledge together, each providing insights the other cannot.",
    closing: [
      "This is where Two-Eyed Seeing is especially useful. It does not ask one knowledge system to absorb the other. It asks what becomes possible when different ways of knowing are held together without erasing differences.",
    ],
    test: "Replace “Does the community validate the image?” with “What does the community know that the image was never designed to ask?”",
  },
  {
    n: "05",
    mismatch: "unit and relation",
    from: "exposure",
    to: "vulnerability",
    title: "Exposure is not vulnerability.",
    paragraphs: [
      "Remote sensing can map where a hazard touches the ground. It cannot map what that hazard affects in people's lives.",
      "A flood map may show two houses inside the same inundation polygon. From the satellite, they have the same exposure. But one household may have a truck, insurance, savings, family nearby, and a first-floor living space. Another may include an elderly person living alone, a basement tenant, undocumented residents afraid to ask for help, a person dependent on refrigerated medication, or no safe evacuation route.",
    ],
    coupletA: "The flood pixel says: water reached both houses.",
    coupletB: "The community map says: the disaster will not be the same.",
    closing: [
      "This distinction matters because many risk models move too quickly from hazard and exposure to vulnerability. They map where something could happen, then infer who is at risk. But vulnerability is not only location. It is shaped by income, health, mobility, age, documentation status, tenure, social networks, language, disability, trust in institutions, access to transportation, and history of previous harm.",
      "Remote sensing can identify exposed structures, roads, slopes, burn scars, surface temperature, water extent, and vegetation loss. It can support excellent hazard and exposure analysis. But vulnerability requires additional forms of knowledge.",
      "Exposure is a spatial concept, whereas vulnerability is fundamentally relational.",
    ],
    test: "For every exposed asset, ask what social condition determines whether exposure becomes harm.",
  },
  {
    n: "06",
    mismatch: "unit and occupancy",
    from: "the building footprint",
    to: "the household",
    title: "The building footprint is not the household.",
    paragraphs: [
      "AI building extraction is appealing because it seems to solve exposure: count roofs, estimate population, plan response. Building footprints are useful but easy to overinterpret.",
      "A building footprint is not a household. It is not tenure, occupancy, condition, safety, density, or social relation.",
      "A detected roof may be a storage shed, not a residence. A missing roof may be a lightweight shelter, not an empty place. A large building may house one family, fifty workers, temporary evacuees, or seasonal labourers. A house may be empty part of the year. A single structure may be divided among owners, renters, subtenants, and informal occupants whose rights do not appear in cadastral data.",
    ],
    coupletA: "The footprint is a geometry.",
    coupletB: "The household is a social arrangement.",
    closing: [
      "This matters for humanitarian mapping, public health campaigns, disaster response, and climate adaptation. If buildings are treated as households, aid may be misallocated. If missing roofs are treated as absence, informal or lightweight settlements may disappear from planning. If structure size is treated as wealth, large shared or multi-family dwellings may be misread. If occupancy is assumed stable, seasonal migration, evacuation, tourism, labour, and displacement are erased.",
      "Building extraction gives exposure geometry. Community mapping gives social occupancy.",
      "Disaster risk emerges from the gap between geometric representation and social reality.",
    ],
    test: "Do not ask only “Where are the buildings?” Ask “What are they, who uses them, when, and under what conditions?”",
  },
  {
    n: "07",
    mismatch: "time and lived aftermath",
    from: "damage",
    to: "recovery",
    title: "Damage is not recovery.",
    paragraphs: [
      "Remote sensing can detect destroyed buildings, flooded roads, landslides, burn scars, debris, and water extent. It is often strongest immediately after an event, when visible change is sharp and urgent. But recovery is not simply the inverse of damage.",
      "After a flood, satellite imagery may show water has receded and roads are visible again. A damage map may mark the area as accessible. But residents may know the road surface is contaminated, the bridge railing is gone, the clinic reopened without staff, the grocery store reopened with doubled prices, the school is used as a shelter, the basement is full of mold, or the official route is unsafe at night.",
      "After a wildfire, the burn scar may be mapped, but the loss of shade, the smoke trauma, the housing precarity, the insurance dispute, the damaged water system, and the fear of returning may not be visible. After an earthquake, collapsed buildings may be detected, but whether people can recover depends on permits, rental markets, debt, remittances, kinship networks, and political recognition.",
    ],
    coupletA: "The satellite sees surface restoration.",
    coupletB: "The community sees whether life has become livable again.",
    closing: [
      "Remote sensing is effective at detecting the occurrence of events but is considerably less capable of capturing their long-term aftermath.",
    ],
    test: "Treat post-event imagery as the beginning of recovery analysis, not its conclusion.",
  },
  {
    n: "08",
    mismatch: "sensory mode",
    from: "the visual image",
    to: "the lived atmosphere",
    title: "The image cannot hear.",
    paragraphs: [
      "Remote sensing is visually dominant. Even radar, LiDAR, thermal imagery, and multispectral products are usually converted into visual surfaces for interpretation. But many spatial losses are auditory, affective, embodied, and relational.",
      "A neighbourhood may lose Spanish, Arabic, Cree, Haitian Creole, or another language from the street. A market may become quieter because vendors have been displaced. A forest trail may become unsafe because of harassment, policing, or fear. A fishing place may become emotionally inaccessible after contamination, enforcement conflict, or death. A building may remain standing while tenants have been evicted. A park may remain green while women stop using it after dark.",
      "Many of these forms of loss do not produce a detectable spectral signature.",
      "This is why oral history, walking interviews, participatory mapping, soundscape work, and narrative cartography matter. They do not decorate the map. They document forms of spatial change that visual instruments cannot register.",
    ],
    coupletA: "Some changes have to be heard, remembered, walked, and narrated.",
    coupletB: "",
    closing: [],
    test: "Ask what forms of loss, exclusion, fear, or belonging would remain invisible if the map could only see.",
  },
  {
    n: "09",
    mismatch: "institutional visibility",
    from: "environmental symptoms",
    to: "governance capacity",
    title: "The satellite sees symptoms, not governance.",
    paragraphs: [
      "Remote sensing can show earlier snowmelt, declining soil moisture, wetland loss, vegetation stress, lake blooms, urban expansion, flood extent, drought anomalies, and surface temperature. It cannot show whether institutions are capable of responding.",
      "It cannot show whether municipalities coordinate, whether a watershed plan has authority, whether farmers trust the data, whether a county has staff to implement a policy, whether a conservation rule is enforced, whether emergency protocols reach isolated residents, whether aid applications are legible to those who need them, or whether a community feels heard.",
      "While satellites can reveal indicators such as water stress, they cannot capture institutional or coordination stress.",
      "This is crucial for climate adaptation and disaster-risk governance. Environmental change becomes disaster through institutions, mandates, exclusions, delays, and failures of care. A drought is not only a rainfall deficit. It is also a water-allocation regime, an irrigation decision, a communication failure, a maintenance backlog, a planning horizon, and a trust relationship. A flood is not only water extent. It is also zoning, warning systems, transport access, insurance, shelter capacity, and social memory.",
    ],
    coupletA: "Remote sensing can detect environmental change.",
    coupletB: "It cannot detect whether institutions are able, willing, or trusted to act on it.",
    closing: [],
    test: "Pair every biophysical indicator with a governance question: who can act, with what mandate, using which instrument, and who is excluded?",
  },
  {
    n: "10",
    mismatch: "visibility and governance",
    from: "open data",
    to: "governed visibility",
    title: "Open data is not automatically just.",
    paragraphs: [
      "Open Earth observation has transformed environmental work. Open Landsat and Sentinel data, digital elevation models, global land-cover products, and building-footprint datasets have made analysis possible for people and organizations who would never have had access to commercial imagery or proprietary datasets. Open data matters.",
      "However, data openness does not equate to justice.",
      "Data can be findable, accessible, interoperable, and reusable while still not being governed by the people it represents. A dataset can be technically open and politically harmful. A map can make a place visible to aid agencies and to police, to planners and to extractive companies, to community advocates and to landlords.",
      "Mapping informal settlements can support service delivery, but it can also enable eviction. Mapping Indigenous harvesting areas can support territorial claims, but it can also invite surveillance or extraction. Mapping sacred sites can expose knowledge that should remain governed by protocol. Mapping migrant routes can support humanitarian care, but it can also support enforcement. Mapping disaster-vulnerable households can attract assistance, but it can also stigmatize a community as permanently risky.",
    ],
    coupletA: "Visibility is not always empowerment.",
    coupletB: "Sometimes visibility is exposure.",
    closing: [
      "This is why Indigenous Data Sovereignty and the CARE principles matter. FAIR data asks whether data is findable, accessible, interoperable, and reusable. CARE asks whether data produces collective benefit, respects authority to control, carries responsibility, and is governed ethically.",
      "Remote sensing is often FAIR before it is CARE.",
    ],
    test: "Before publishing or opening a dataset, ask who gains power from visibility and who becomes more vulnerable because of it.",
  },
  {
    n: "11",
    mismatch: "objectivity and authority",
    from: "technical accuracy",
    to: "epistemic accountability",
    title: "Accuracy is not epistemic accountability.",
    paragraphs: [
      "Remote sensing has strong tools for technical accountability: confusion matrices, RMSE, validation samples, uncertainty intervals, cross-validation, error propagation, and accuracy scores. These tools are necessary. They are not sufficient.",
      "Accuracy tells us whether a model matched its labels. Epistemic accountability asks whether the labels were the right way to know the world in the first place.",
      "A model may accurately classify a place as bare ground while missing that it is a commons. A flood model may accurately map inundation while missing who cannot evacuate. A building detector may accurately draw rooftops while missing households. A land-cover product may accurately distinguish forest from non-forest while missing customary access, ceremonial use, or food gathering. A damage map may accurately detect collapsed structures while missing social recovery.",
      "A map that is technically accurate may nonetheless misrepresent or overlook critical social realities.",
      "Epistemic accountability asks different questions. Who chose the categories? Who benefits from the map? Who can contest the interpretation? Who can decide that a class is wrong? Who governs the data after it is produced? Who is harmed by being made visible? What forms of knowledge were excluded before analysis began?",
    ],
    coupletA: "Accuracy asks whether a model matched its labels.",
    coupletB: "Epistemic accountability asks whether the labels were the right way to know.",
    closing: [
      "This perspective does not diminish the importance of technical accuracy; rather, it situates accuracy within a broader ethical context. Accuracy is essential for robust remote sensing, but it does not encompass the entirety of ethical knowledge production.",
    ],
    test: "After asking “How accurate is the product?” ask “Who has the authority to say whether this is the right representation?”",
  },
  {
    n: "12",
    mismatch: "methodological response",
    from: "the image",
    to: "the grounded question",
    title: "Ground the satellite. Do not satellite the ground.",
    paragraphs: [
      "The standard workflow often begins with the image: satellite data, classification, field validation, final product. A more accountable workflow can begin elsewhere: testimony, memory, community claim, local concern, institutional problem, or lived risk. The satellite then becomes one piece of evidence among others.",
      "The objective is not to require communities to validate satellite data, but to ensure that satellite analysis is responsive to community claims.",
      "Instead of asking, “Does the ground confirm the image?” we ask, “Can the image help investigate what people already know, fear, remember, or contest?”",
      "This reverses the direction of authority. The community is not a correction layer. It is a site of interpretation.",
      "This approach enhances, rather than diminishes, the utility of remote sensing. Satellite imagery is most effective when applied to questions it is well-suited to address, such as identifying changes in water distribution, vegetation stress, wetland coverage, burn scars, surface temperatures, shoreline movement, road disruptions, or expansion of impervious surfaces.",
      "But the interpretation must then return to the ground: What does this change mean? Who is affected? Who can act? Who has authority? Who is exposed by the map? What remains unseen? What should not be made visible? What decision does this evidence support?",
    ],
    coupletA: "Satellites provide quantitative measurements.",
    coupletB: "Communities interpret and assign meaning to these measurements.",
    closing: [],
    test: "Begin with the community question, not the satellite product.",
  },
];

const FG_INTRO = [
  "This field guide advances a more rigorous and accountable practice of remote sensing. It begins from the strengths of Earth observation: its capacity to provide continuity, spatial coverage, repeatability, and evidence across territories that exceed the reach of any single field campaign. Satellite data can trace floods across watersheds, monitor wetland loss over decades, identify surface-temperature patterns, document burn scars, detect vegetation stress, follow snowmelt, and compare environmental change across regions.",
  "The greatest value of remote sensing arises when its technical capacities are integrated with forms of knowledge that satellites alone cannot generate, such as local interpretation, institutional context, lived experience, social vulnerability, memory, consent, and governance.",
  "The purpose of this guide is therefore practical as much as methodological. It helps researchers, analysts, planners, humanitarian actors, and community partners use remote sensing with precision: to keep the analytical power of satellite data while situating its outputs within the social, ecological, and institutional realities that give them meaning.",
  "The guide is most useful at four moments in a project: before analysis, during analysis, after analysis, and before publication.",
];

const FG_MOMENTS = [
  {
    label: "Before analysis",
    title: "Define the object of inquiry",
    paragraphs: [
      "A strong remote-sensing project begins with the decision, risk, or community concern that motivates the work. The available dataset matters, but it should follow the question rather than define it too early.",
      "A project may begin with Sentinel imagery, the Landsat archive, a flood layer, a vegetation index, a building-footprint product, or a digital elevation model. Each of these products can support valuable analysis. The first methodological task is to clarify what, exactly, the project needs to understand.",
      "Is the object of analysis a pixel, a household, a road, a seasonal route, a water source, a market, a shelter, a memory, a mandate, or a claim? Is the project concerned with exposure, vulnerability, access, responsibility, recovery, trust, or institutional coordination? What changes when a lived situation is translated into a raster, polygon, index, or class?",
      "This first step matters because the analytical unit shapes the entire project. A flood layer may identify affected buildings, while the central question may concern households with elderly residents, basement tenants, undocumented occupants, livestock, medication needs, limited mobility, no vehicle, or no safe evacuation route. A land-cover map may identify “bare land,” while the relevant community question may concern a schoolyard, gathering place, evacuation site, grazing corridor, fallow field, or ceremonial ground.",
    ],
    closing: "Before selecting the remote-sensing product, define the human, institutional, and ecological object that requires interpretation.",
  },
  {
    label: "During analysis",
    title: "Track the work of translation",
    paragraphs: [
      "Every remote-sensing workflow translates the world.",
      "Raw imagery becomes bands. Bands become indices. Indices become thresholds. Thresholds become classes. Classes become maps. Maps become evidence. Evidence enters decisions.",
      "Each stage produces analytical value. Each stage also narrows the phenomenon into a form that the workflow can process. Rigorous analysis requires attention to both movements: what becomes clearer, and what becomes less visible.",
      "A water index may reveal flood extent while leaving basement flooding, contaminated wells, damaged culverts, and unsafe roads to be documented through other means. A vegetation index may reveal drought stress while requiring additional evidence to understand crop failure, irrigation cost, labour shortage, market pressure, or pest damage. A building footprint may reveal exposure while requiring local knowledge to understand occupancy, tenure, crowding, seasonal use, or informal subdivision. A land-cover class may reveal surface type while requiring community interpretation to understand access rights, memory, cultural significance, or social function.",
      "The central methodological question is therefore larger than technical correctness. It asks what kind of reality the method produces.",
      "Does the workflow represent households as rooftops? Does it represent commons as empty land? Does it represent recovery as surface clearance? Does it represent vulnerability as exposure? Does it make a complex place legible only through the categories available to the sensor?",
    ],
    closing: "Rigorous analysis requires making these translations explicit and treating each output as methodologically produced evidence, rather than as a comprehensive representation of the location.",
  },
  {
    label: "After analysis",
    title: "Return interpretation to the ground",
    paragraphs: [
      "A map reaches its full value through interpretation.",
      "A classification result, flood extent, burn scar, heat map, building extraction, or change-detection layer is one stage in a wider knowledge process. The map becomes meaningful when the people and institutions affected by it can interpret it, contextualize it, contest it, refine it, restrict it, or redirect its use.",
      "This step is especially important when maps concern informal settlements, Indigenous territories, migrant routes, sacred sites, disaster vulnerability, politically sensitive infrastructure, or communities already exposed to surveillance, displacement, or exclusion.",
      "Individuals represented in geospatial projects should be recognized not only as data points or validation samples, but also as interpreters, knowledge holders, authorities, and decision-makers.",
      "After analysis, the project should return to grounded questions.",
    ],
    questions: [
      "Does this map correspond to local experience?",
      "Where does it require correction or contextualization?",
      "What does it make visible that requires protection?",
      "What forms of risk, memory, access, or meaning remain outside the product?",
      "Who has the authority to interpret disagreement between the map and lived experience?",
      "Who should decide how this information circulates and how it is used?",
    ],
    closing: "A satellite product can identify a pattern. Grounded interpretation clarifies what that pattern means, for whom it matters, and what forms of action it can support.",
  },
  {
    label: "Before publication",
    title: "Assess the politics of visibility",
    paragraphs: [
      "Publication is an ethical and political moment.",
      "Making a place visible can support recognition, resources, planning, emergency response, and care. It can also shift power. A dataset may become useful to agencies, planners, researchers, police, landlords, insurers, extractive companies, or political actors in ways that exceed the project's original intent.",
      "A map of informal settlements may support service delivery and also increase exposure to eviction. A map of Indigenous harvesting areas may support territorial claims and also reveal sensitive knowledge. A map of migrant routes may support humanitarian response and also become useful for enforcement. A map of disaster-vulnerable households may help target assistance and also stigmatize a community as permanently risky. A map of sacred sites may preserve memory for one audience and violate protocol for another.",
      "Before publication, assess the dataset's likely lifespan beyond the project team.",
    ],
    questions: [
      "Who could use this information for care?",
      "Who could use it for control?",
      "What forms of visibility might increase risk?",
      "Should some information be generalized, anonymized, delayed, restricted, aggregated, or withheld?",
      "Who has the authority to decide what can be made visible?",
    ],
    closing: "Ethical remote sensing encompasses data quality, methodological transparency, and consideration of the consequences of data dissemination. The responsibility associated with a map persists beyond its production, particularly when increased visibility influences safety, sovereignty, dignity, or access to land and resources.",
  },
];

const FromToArrow = ({ size = 32 }) => (
  <svg width={size} height={Math.round(size * 0.5)} viewBox="0 0 42 20"
    aria-hidden="true" style={{ flex: "0 0 auto" }}>
    <line x1="2" y1="10" x2="34" y2="10" stroke={FG_COLORS.navy} strokeWidth="2" />
    <polyline points="28,4 40,10 28,16" fill="none" stroke={FG_COLORS.navy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FromToHeadline = ({ from, to, size = "lg" }) => {
  const fontSize = size === "lg" ? 34 : 22;
  return (
    <div style={{
      display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 14,
      fontFamily: "var(--sans)", fontWeight: 700, letterSpacing: "-0.02em",
      lineHeight: 1.05,
    }}>
      <span style={{ color: FG_COLORS.sensor, fontSize }}>{from}</span>
      <FromToArrow size={size === "lg" ? 36 : 28} />
      <span style={{ color: FG_COLORS.meaning, fontSize }}>{to}</span>
    </div>
  );
};

const PracticalTest = ({ text }) => (
  <div style={{
    marginTop: 30, paddingTop: 18,
    borderTop: `2px solid var(--ink)`,
    display: "grid", gridTemplateColumns: "180px 1fr", gap: 24, alignItems: "baseline",
  }}>
    <span className="mono" style={{
      fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)",
    }}>Practical test</span>
    <span className="serif" style={{
      fontSize: 18.5, lineHeight: 1.45, color: "var(--ink)", fontStyle: "italic",
    }}>{text}</span>
  </div>
);

const Couplet = ({ a, b }) => (
  <div style={{
    margin: "26px 0", padding: "22px 26px",
    background: FG_COLORS.sensorTint,
    borderLeft: `4px solid ${FG_COLORS.sensor}`,
  }}>
    <p className="serif" style={{
      margin: 0, fontSize: 19, lineHeight: 1.45, color: "var(--ink)", fontWeight: 500,
    }}>{a}</p>
    {b && (
      <p className="serif" style={{
        margin: "8px 0 0", fontSize: 19, lineHeight: 1.45, color: FG_COLORS.meaning, fontWeight: 500,
      }}>{b}</p>
    )}
  </div>
);

const PrincipleBlock = ({ p }) => (
  <section id={`p${p.n}`} style={{
    padding: "56px 0",
    borderTop: `1px solid ${FG_COLORS.rule}`,
    scrollMarginTop: 80,
  }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginBottom: 12 }}>
      <span className="num" style={{
        fontSize: 42, fontWeight: 300, color: FG_COLORS.navy, letterSpacing: "-0.02em", lineHeight: 1,
      }}>{p.n}</span>
      <span className="mono" style={{
        fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)",
      }}>Diagnostic mismatch · {p.mismatch}</span>
    </div>

    <FromToHeadline from={p.from} to={p.to} />

    <h3 className="serif" style={{
      margin: "20px 0 24px", fontSize: 26, fontWeight: 500, color: "var(--ink)",
      letterSpacing: "-0.01em", lineHeight: 1.2, maxWidth: 760,
    }}>{p.title}</h3>

    <div style={{ maxWidth: 720 }}>
      {p.paragraphs.map((para, i) => (
        <p key={i} className="serif" style={{
          margin: "0 0 16px", fontSize: 17, lineHeight: 1.65, color: "var(--ink-2)",
        }}>{para}</p>
      ))}
    </div>

    {p.coupletA && <Couplet a={p.coupletA} b={p.coupletB} />}

    {p.closing.length > 0 && (
      <div style={{ maxWidth: 720 }}>
        {p.closing.map((para, i) => (
          <p key={i} className="serif" style={{
            margin: "0 0 16px", fontSize: 17, lineHeight: 1.65, color: "var(--ink-2)",
          }}>{para}</p>
        ))}
      </div>
    )}

    <PracticalTest text={p.test} />
  </section>
);

const MomentBlock = ({ m, idx }) => (
  <section style={{ padding: "44px 0", borderTop: `1px solid ${FG_COLORS.rule}` }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 14 }}>
      <span className="num" style={{
        fontSize: 28, color: FG_COLORS.meaning, letterSpacing: "-0.02em", fontWeight: 300,
      }}>{String(idx + 1).padStart(2, "0")}</span>
      <span className="mono" style={{
        fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: FG_COLORS.meaning,
      }}>{m.label}</span>
    </div>
    <h3 className="serif" style={{
      margin: "0 0 22px", fontSize: 30, fontWeight: 500, color: "var(--ink)",
      letterSpacing: "-0.014em", lineHeight: 1.15, maxWidth: 760,
    }}>{m.title}</h3>
    <div style={{ maxWidth: 720 }}>
      {m.paragraphs.map((para, i) => (
        <p key={i} className="serif" style={{
          margin: "0 0 16px", fontSize: 17, lineHeight: 1.65, color: "var(--ink-2)",
        }}>{para}</p>
      ))}
    </div>
    {m.questions && (
      <ul style={{
        margin: "8px 0 18px", padding: 0, listStyle: "none", maxWidth: 720,
      }}>
        {m.questions.map((q, i) => (
          <li key={i} className="serif" style={{
            padding: "10px 0",
            borderBottom: i < m.questions.length - 1 ? `1px solid ${FG_COLORS.rule}` : "none",
            fontSize: 17, lineHeight: 1.5, color: "var(--ink)", fontStyle: "italic",
          }}>{q}</li>
        ))}
      </ul>
    )}
    {m.closing && (
      <p className="serif" style={{
        margin: "20px 0 0", padding: "18px 22px",
        background: FG_COLORS.meaningTint,
        borderLeft: `4px solid ${FG_COLORS.meaning}`,
        fontSize: 18, lineHeight: 1.5, color: "var(--ink)", fontWeight: 500, fontStyle: "italic",
        maxWidth: 760,
      }}>{m.closing}</p>
    )}
  </section>
);

const FieldGuideMatrix = () => (
  <section style={{ padding: "44px 0", borderTop: `1px solid ${FG_COLORS.rule}` }}>
    <div className="mono" style={{
      fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)",
      marginBottom: 18,
    }}>The twelve principles at a glance</div>
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1,
      background: FG_COLORS.rule, border: `1px solid ${FG_COLORS.rule}`,
    }}>
      {FG_PRINCIPLES.map(p => (
        <a key={p.n} href={`#p${p.n}`} style={{
          display: "block", padding: "16px 18px", textDecoration: "none",
          background: "var(--paper)",
        }}>
          <div className="mono" style={{
            fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--ink-3)", marginBottom: 8,
          }}>{p.n} · {p.mismatch}</div>
          <FromToHeadline from={p.from} to={p.to} size="sm" />
        </a>
      ))}
    </div>
  </section>
);

const CriticalFieldGuide = () => (
  <div style={{ "--accent": FG_COLORS.meaning }}>
    <header style={{ padding: "48px 0 8px" }}>
      <div className="mono" style={{
        fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
        color: "var(--ink-3)", marginBottom: 18,
      }}>A critical field guide to remote sensing</div>
      <h2 className="serif" style={{
        margin: 0, fontSize: 52, fontWeight: 700, letterSpacing: "-0.024em",
        lineHeight: 1.05, maxWidth: 920, color: "var(--ink)",
      }}>
        Twelve <span style={{ color: FG_COLORS.sensor }}>principles</span> for using satellite data with <span style={{ color: FG_COLORS.meaning }}>care</span>.
      </h2>
      <p className="serif" style={{
        margin: "28px 0 0", fontSize: 20, lineHeight: 1.5, color: "var(--ink-2)", maxWidth: 760, fontWeight: 300,
      }}>
        Each principle frames a single move, from what the sensor measures to what it means for a life. The grammar runs <em style={{ color: FG_COLORS.sensor, fontStyle: "normal", fontWeight: 500 }}>sensor</em> to <em style={{ color: FG_COLORS.meaning, fontStyle: "normal", fontWeight: 500 }}>meaning</em>, throughout.
      </p>
    </header>

    <FieldGuideMatrix />

    <section style={{ padding: "44px 0", borderTop: `1px solid ${FG_COLORS.rule}` }}>
      <div className="mono" style={{
        fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)",
        marginBottom: 14,
      }}>How to use this field guide</div>
      <h3 className="serif" style={{
        margin: "0 0 20px", fontSize: 30, fontWeight: 500, letterSpacing: "-0.014em",
        lineHeight: 1.15, color: "var(--ink)", maxWidth: 820,
      }}>An accountable workflow, at four moments.</h3>
      <div style={{ maxWidth: 760 }}>
        {FG_INTRO.map((para, i) => (
          <p key={i} className="serif" style={{
            margin: "0 0 16px", fontSize: 17, lineHeight: 1.65, color: "var(--ink-2)",
          }}>{para}</p>
        ))}
      </div>
    </section>

    {FG_MOMENTS.map((m, i) => <MomentBlock key={i} m={m} idx={i} />)}

    <div style={{ padding: "56px 0 24px" }}>
      <div className="mono" style={{
        fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-3)",
        marginBottom: 14,
      }}>The twelve principles</div>
      <h3 className="serif" style={{
        margin: 0, fontSize: 30, fontWeight: 500, letterSpacing: "-0.014em",
        lineHeight: 1.15, color: "var(--ink)", maxWidth: 820,
      }}>From the sensor measurement to the lived consequence.</h3>
    </div>

    {FG_PRINCIPLES.map(p => <PrincipleBlock key={p.n} p={p} />)}

    <section style={{
      marginTop: 56, padding: "56px 0",
      borderTop: `1px solid ${FG_COLORS.rule}`,
      background: "var(--ink)", color: "var(--paper)",
    }}>
      <div style={{ padding: "0 28px" }}>
        <p className="serif" style={{
          margin: 0, fontSize: 30, lineHeight: 1.35, fontWeight: 300, fontStyle: "italic",
          color: "var(--paper)", letterSpacing: "-0.014em", maxWidth: 920,
        }}>
          Satellites provide quantitative measurements; communities interpret and assign meaning to these measurements.
        </p>
        <p className="serif" style={{
          margin: "22px 0 0", fontSize: 18, lineHeight: 1.55, fontWeight: 300,
          color: "color-mix(in oklch, var(--paper) 78%, transparent)", maxWidth: 820,
        }}>
          Ethical remote sensing encompasses data quality, methodological transparency, and consideration of the consequences of data dissemination. The responsibility associated with a map persists beyond its production, particularly when increased visibility influences safety, sovereignty, dignity, or access to land and resources.
        </p>
      </div>
    </section>
  </div>
);

Object.assign(window, { CriticalFieldGuide });
