// =======================================================================
// All structured talk content. Loaded first.
// =======================================================================

const TALK = {
  title: "Working in the Boundary Layer",
  subtitle: "Remote sensing between sky-eye abstraction, ground-up knowledge, and care",
  venue: "Canadian Remote Sensing Society",
  duration: "60 min — including ≈5–10 min Q&A",
  speaker: "Sophia",
  spineSentence:
    "The boundary layer is where care happens. Everything else is preparation or aftermath.",
  thesis_old_question: "What can remote sensing see?",
  thesis_new_question: "What kind of relationship does remote sensing build with the ground, and what obligations follow from seeing?",
  central_claim: "Remote sensing becomes most consequential when it enters the boundary layer — the space where sky-eye measurement, ground-up knowledge, embodied experience, institutional decision-making, and community meaning have to negotiate what the image is actually about.",
  closing_final: "Remote sensing points upward in order to look down. But for care, resilience, and community, the real work begins when the image enters the boundary layer — where the sky-eye view must answer to ground-up knowledge, embodied experience, and the obligations of shared life.",
  closing_plato: "Remote sensing without Plato loses the capacity to abstract, compare, anticipate, and model futures.",
  closing_aristotle: "Remote sensing without Aristotle loses responsibility to the ground.",
};

// ---- Career arc, used in Ouverture ----
const CAREER = [
  { node: "EPFL",       place: "Lausanne",        note: "Software engineering; environmental history with Marot; urban climate with Coccolo & Mauree" },
  { node: "Taiwan TRC", place: "Taipei",          note: "Typhoon warnings, evacuation behaviour, civic epistemologies" },
  { node: "SOCODEVI",   place: "West Africa",     note: "Ground rain sensors fused with satellite precipitation for smallholders" },
  { node: "CER",        place: "Canada",          note: "Canada Energy Regulator — regulatory analysis" },
  { node: "Red Cross",  place: "Montreal · now",  note: "Community mapping portfolio · Missing Maps · MapSwipe governance" },
];

// ---- The 26 slides ----
// Each slide carries: number, title, kicker (part), running time, prose blocks.
const SLIDES = [
  { n:1, part:"1A", t:"00:00", title:"Detail — Raphael, École d'Athènes (1509)",
    kicker:"Open with the painting; let it sit a beat.",
    visual:"painting-detail",
    notes:[
      "Plato (left, Timaeus) — finger up: the world of forms, what is not yet here, the ideal.",
      "Aristotle (right, Nicomachean Ethics) — palm horizontal: what is, the ground we share, responsibility for the present.",
      "Marot read through Bloch and Jonas: hope (espérance) and responsibility (responsabilité).",
      "The talk's claim: remote sensing is both gestures at once.",
    ]},
  { n:2, part:"1A", t:"01:00", title:"The instrument that points up to look down",
    visual:"earth-disc",
    notes:[
      "Satellite reaches for the abstract — global, planetary, totalized.",
      "Uses that abstraction to make decisions on the ground people live on.",
      "By geometry: Plato's finger. By purpose at its best: Aristotle's palm.",
      "Refuse to choose between hope and responsibility.",
    ]},
  { n:3, part:"1A", t:"02:00", title:"Career arc · EPFL → Taiwan → SOCODEVI → CER → Red Cross",
    visual:"career-arc",
    notes:[
      "Trained as software engineer at EPFL; environmental history with Marot; urban climate.",
      "TTRC: evacuation behaviour under remote-sensing-driven probability surfaces.",
      "SOCODEVI: ground rain + satellite precipitation for West African smallholders.",
      "Now Red Cross: community mapping portfolio, Missing Maps, MapSwipe governance.",
    ]},
  { n:4, part:"1B", t:"03:00", title:"Canadian Red Cross + Missing Maps",
    visual:"missing-maps",
    notes:[
      "Missing Maps (2014) — British / American Red Cross + MSF + HOT.",
      "Most of the world is well-mapped if you are a tourist; poorly mapped if you are responding to a crisis.",
      "Past 12 months: Sudan, DRC, Madagascar (Chido), Saskatchewan wildfire & water-source, Atlantic coastal adaptation.",
    ]},
  { n:5, part:"1B", t:"04:30", title:"Activation — before / after of an unmapped region",
    visual:"trace-before-after",
    notes:[
      "Community mapping is human interpretation of imagery — with affected people in or leading the loop.",
      "MapSwipe pre-validation: yes/no on tiles; directs skilled mapping where most needed.",
      "Communities are becoming the data — question is whether they are also becoming the analysts.",
    ]},
  { n:6, part:"1C", t:"07:00", title:"International Charter on Space and Major Disasters",
    visual:"charter",
    notes:[
      "CSA is a founding member.",
      "First activation: November 2000 — Hurricane Lothar.",
      "850+ activations since.",
      "CSA · ESA · NASA · JAXA · CNES · ISRO · KARI · others — tasked, processed, delivered to civil protection within hours.",
    ]},
  { n:7, part:"1C", t:"09:00", title:"The reframed modality table",
    visual:"modality-table",
    notes:[
      "Do not read the whole table — show the structure: care question · made visible · stays invisible · grounded by.",
      "Walk three rows: optical, SAR, atmospheric chemistry.",
      "A modality is a way of seeing — what it attends to and what it structurally cannot.",
      "The 'missing' is not a flaw to fix; it is the boundary of the modality's care.",
    ]},
  { n:8, part:"1C", t:"12:30", title:"Remote sensing is heuristic at every layer",
    visual:"three-layers",
    notes:[
      "Physical: reflectance, backscatter, brightness temperature — never deforestation directly.",
      "Interpretive: classifier categories imposed by an ontology designed for a prior purpose.",
      "Ethical: that category becomes a decision — to evacuate, fund, deny insurance, declare a camp.",
      "Braun: 'more accurate, less meaningful.'",
    ]},
  { n:9, part:"1C", t:"14:30", title:"1,693 ppm",
    visual:"co2-gauge",
    notes:[
      "May 2019 · M1 metro · EPFL → Lausanne-Flon · 5:30 PM.",
      "Sick-building threshold: 800. Harvard CogFX cognition decline: ~945.",
      "No satellite saw it. No future satellite will.",
      "Hold the number — return in Topic 2.",
    ]},

  { n:10, part:"T1", t:"15:00", title:"Tuvalu, Kiribati — the smaller-than-pixel problem",
    visual:"atolls",
    notes:[
      "Tuvalu max elevation ≈ 4.5 m.",
      "SRTM vertical RMSE ≈ 6–10 m — instrument uncertainty exceeds the thing measured.",
      "UNCLOS Art. 121 turns imagery into evidence about state existence.",
      "Pretraining archives sample continents more than oceans-with-islands — the AI shift may widen the gap before narrowing it.",
    ]},
  { n:11, part:"T1", t:"18:30", title:"RCM — RADARSAT Constellation Mission",
    visual:"rcm",
    notes:[
      "Three identical C-band sats at 592 km · 12-day individual repeat · 4-day exact constellation revisit · up to 4 daily Arctic acquisitions.",
      "First operational mission with compact polarimetry as primary imaging mode.",
      "Sea-ice concentration vs CIS analyst charts (Shabanov 2024): correlation 0.996.",
      "2023 wildfire perimeter (NRCan TIIC, Jain 2024): 97% user / 98% producer accuracy.",
      "RCM CP burned-area + DL (Dec 2024 preprint): F1 = 0.72 on seven 2023–24 fires.",
      "NRCan EGS flood polygons: ~4 h latency from RCM / S-1 / RADARSAT-2.",
    ]},
  { n:12, part:"T1", t:"22:00", title:"Tuktoyaktuk Island — a Canadian gap",
    visual:"tuk-gap",
    notes:[
      "Tuktoyaktuk Island eroding ~2 m/yr. Pelly Island can lose 40 m of coast per summer.",
      "Community-led monitoring: Deva-Lynn Pokiak's time-lapse cameras (NRCan), SmartICE.",
      "Funding: Climate Change Preparedness in the North + Coastal Environmental Baseline.",
      "Gap: no peer-reviewed RCM-specific Tuktoyaktuk shoreline-change paper, to my knowledge.",
      "This is an opportunity for this room.",
    ]},
  { n:13, part:"T1", t:"23:30", title:"Taiwan typhoon track — the last-mile is epistemological",
    visual:"typhoon",
    notes:[
      "Damage probability and evacuation willingness are not linearly related.",
      "Trust, prior false alarms, household composition, language, place attachment, social capital — all intervene.",
      "The last mile is not a delivery problem. It is an epistemological one.",
      "Jasanoff: different civic epistemologies. Work begins when the map is published.",
    ]},

  { n:14, part:"T2", t:"25:00", title:"The boundary layer — satellite · drone · ground · body · indoor",
    visual:"boundary-layer",
    notes:[
      "Three layers of heuristic — physical · interpretive · ethical.",
      "Each rule holds in some conditions and fails in others.",
      "The discipline matures when it stops pretending otherwise.",
    ]},
  { n:15, part:"T2", t:"27:00", title:"SOCODEVI — rain gauges and satellite precipitation",
    visual:"socodevi",
    notes:[
      "Satellite said one thing. Farmer's gauge said another. Neighbour's gauge said a third.",
      "Continental-scale validation is not wrong at its scale.",
      "'Did it rain enough on our parcel today, to plant?' requires all three plus a person in the village.",
      "The integration is not a Kalman filter. It is a person.",
    ]},
  { n:16, part:"T2", t:"29:00", title:"TROPOMI tile vs Q-TRAK walk — the entire walk fits inside one pixel",
    visual:"lausanne-pixel",
    notes:[
      "May 2019 · EPFL urban-climate course with Coccolo & Mauree · Q-TRAK at 1.4 m body altitude.",
      "M1 metro peak: 1693 ppm. Cars at Flon: 300–400 ppm spikes. Bushes under sun: 368 ppm — below background, photosynthesis outpacing respiration.",
      "Sentinel-5P TROPOMI NO₂ pixel: ~5 km × 3.5 km. The whole walk fits inside one pixel.",
      "Vertical mismatch · indoor invisibility · temporal mismatch. For CO₂ as a health question, satellites measure the wrong thing.",
    ]},
  { n:17, part:"T2", t:"32:00", title:"The defaults indictment — shadow · cloud · speckle · bare · edges",
    visual:"defaults",
    notes:[
      "Shade is the heat refuge — post-dome public-health infrastructure.",
      "Cloud is the rain — for monsoon agriculture, snowpack, parched basins.",
      "Speckle is the surface — SAR roughness, soil, ice texture.",
      "Bare is the meeting place — evacuation, camps, schoolyards, festivals, sacred ground.",
      "The data is fine. The defaults are the problem.",
    ]},
  { n:18, part:"T2", t:"34:00", title:"Taichung Central Park — meteorological urbanism",
    visual:"taichung",
    notes:[
      "Philippe Rahm + Mosbach + Ricky Liu — 67 ha, opened 2020.",
      "Three climatic paths: coolest, least humid, least polluted.",
      "Trees selected and located by climatic function.",
      "The Lausanne CO₂ map is, in his vocabulary, a materials list.",
    ]},

  { n:19, part:"T3", t:"35:00", title:"Counter-mapping — dugouts, traplines, ice roads",
    visual:"counter-map",
    notes:[
      "Dugouts: water in standard LULC; in community resilience, fire-suppression source for hydrant-less communities.",
      "Trapline cabins, ice roads, snow caches, sacred sites — invisible to the classifier's inherited ontology.",
      "Peluso (1995), Nietschmann, Chapin (2005) — change the question, change the ontology.",
      "Alaa on migration: satellite reads fence as line; lived experience reads it as a membrane.",
    ]},
  { n:20, part:"T3", t:"38:00", title:"Surveillance ↔ empowerment — the same Maxar tile",
    visual:"dual-use",
    notes:[
      "Same Sentinel-2 scene reads as refugee camp estimation for UNHCR or displacement targeting by a military.",
      "Same Maxar imagery documented Bucha 2022 and informs Gaza operations.",
      "Decentralized Damage Mapping Group (Van Den Hoek / Scher / Yin): SAR coherence change detection.",
      "UNOSAT October 2025: ≈198,000 damaged/destroyed structures — about 81% of all Gaza structures.",
      "Planet Labs delays highest-resolution Gaza imagery by 30 days, 'to reduce potential for misuse and abuse.'",
      "The resolution of an edge is itself a political variable.",
    ]},
  { n:21, part:"T3", t:"40:30", title:"Indigenous data sovereignty — OCAP · CARE · NISR",
    visual:"governance",
    notes:[
      "OCAP — Ownership, Control, Access, Possession (FNIGC).",
      "CARE — Collective benefit · Authority to control · Responsibility · Ethics (GIDA).",
      "NISR — National Inuit Strategy on Research (ITK) — de facto framework in Inuit Nunangat.",
      "Some things should not be mapped. Some must, but by whom matters.",
      "SmartICE and Indigenous Guardians programs are the institutional and embodied form.",
    ]},
  { n:22, part:"T3", t:"43:00", title:"Change detection as the technical apparatus of solastalgia",
    visual:"solastalgia",
    notes:[
      "Albrecht (2003): distress caused by environmental change to one's home while still in it.",
      "The before/after pair is a memorial structure.",
      "Community mapping as collective grief work — what we are losing, what we want to remember.",
      "The map as ritual.",
    ]},

  { n:23, part:"P3", t:"45:00", title:"Foundation models — Prithvi-EO-2.0 · TerraMind · Clay · SatlasPretrain",
    visual:"foundation-models",
    notes:[
      "Prithvi-EO-2.0 (NASA + IBM, Dec 2024). TerraMind (IBM + ESA + FZJ, Apr 2025) — first any-to-any generative multimodal EO model.",
      "Clay (open weights). SatlasPretrain (Allen).",
      "Democratization — fine-tune with hundreds of labels.",
      "Multimodal fusion becomes default. Near-real-time analysis operational.",
      "But: a foundation model is a heuristic engine whose failure modes are correlated and hard to characterize.",
      "Pretraining bias propagates. Confidence highest where the discipline has most decisively decided what counts.",
    ]},
  { n:24, part:"P3", t:"48:00", title:"SAR missions — NISAR · Sentinel-1C · BIOMASS · RCM · commercial",
    visual:"sar-timeline",
    notes:[
      "NISAR launched 30 July 2025. First operational L+S dual-frequency SAR. 242 km swath. 12-day repeat. ~4 mm/yr deformation.",
      "BIOMASS (ESA, Apr 2025) — first space-based P-band SAR; canopy-penetrating biomass.",
      "Sentinel-1C (Dec 2024) closes the gap from S-1B's 2021 failure.",
      "ICEYE / Capella / Umbra — sub-metre X-band, sub-daily revisit.",
      "RCM is a pillar of this transformation.",
    ]},
  { n:25, part:"P3", t:"50:30", title:"Funding fragility — USAID · FEWS NET · NICFI · MethaneSAT",
    visual:"fragility",
    notes:[
      "USAID dismantled early 2025. FEWS NET dark Feb 2025. NICFI Planet mosaics ended Jan 2025. MethaneSAT lost June 2025.",
      "Sentinel program continues; funding around it tighter.",
      "Canada's relative stability is a global asset and a global responsibility.",
      "RCM operational. CSA a Charter co-founder. GHGSat (Montreal) leads commercial methane monitoring. Guardians + SmartICE ecosystem is strongest in the world.",
    ]},
  { n:26, part:"P3", t:"53:00", title:"Bookend — return to the École d'Athènes",
    visual:"painting-bookend",
    notes:[
      "Plato + Aristotle — both gestures collapsed into one instrument.",
      "Refuse to choose between hope and responsibility.",
      "Names, sovereignties, epistemologies — 1693 ppm in the metro and the satellite does not see it.",
      "The discipline is at its best when it staffs the boundary layer.",
      "Translators, integrators, witnesses, designers, counter-mappers, communities, satellites — none sufficient alone.",
    ]},
];

// ---- Modalities ----
const MODALITIES = [
  {
    id: "optical", name: "Optical",
    instruments: "Landsat · Sentinel-2 · Planet · Maxar",
    band: "VIS–NIR–SWIR · sun-illuminated",
    care: "Where is the surface changing — and who is changing it?",
    visible: ["Deforestation fronts", "Refugee camp footprints", "Crop stress", "Post-disaster damage", "Urban expansion"],
    invisible: ["After dark", "Under cloud", "Under canopy", "The political economy that produced the change"],
    ground: ["OpenStreetMap with local attribution", "Ground photographs", "Household reports", "Missing Maps stack"],
    accent: "ochre",
  },
  {
    id: "sar", name: "Synthetic aperture radar",
    instruments: "Sentinel-1 · RCM · NISAR · ICEYE · Capella · Umbra · COSMO-SkyMed",
    band: "Microwave · active · all-weather, day & night",
    care: "What is moving, sinking, flooding, breaking?",
    visible: ["Flood extent during cyclones", "Urban subsidence (often tracking poverty)", "Oil spills", "Sea ice for community resupply", "Conflict damage during siege"],
    invisible: ["Human meaning of detected motion", "Cause of the deformation", "Lived experience of sinking"],
    ground: ["Testimony", "Oral history", "Household survey before & after", "Local cadastres"],
    accent: "lapis",
  },
  {
    id: "lidar", name: "LiDAR",
    instruments: "Airborne LiDAR · ICESat-2 · GEDI",
    band: "Laser pulses · returns from canopy, ground, water",
    care: "What does the terrain actually look like, beneath what hides it?",
    visible: ["Ground surface beneath forest canopy", "Building heights", "Archaeological earthworks", "Ice elevation"],
    invisible: ["Use of the terrain", "Tenure and access", "Cultural meaning of features revealed"],
    ground: ["Field survey", "Local knowledge of land use", "Archaeological ground truth"],
    accent: "moss",
  },
  {
    id: "thermal", name: "Thermal infrared",
    instruments: "Landsat TIRS · ECOSTRESS · ASTER · MODIS",
    band: "Long-wave IR · brightness temperature",
    care: "Who is being cooked — and where is the refuge?",
    visible: ["Urban heat islands", "Evapotranspiration stress", "Power plant cooling discharge", "Volcanic activity"],
    invisible: ["Indoor temperature", "Individual exposure", "Whether the cool patch is actually accessible"],
    ground: ["Wearable temperature monitors", "Household surveys", "Hospitalization records", "Cooling-centre attendance"],
    accent: "terra",
  },
  {
    id: "passive-mw", name: "Passive microwave",
    instruments: "SMAP · SMOS · AMSR-2",
    band: "Low-frequency microwave emission",
    care: "How wet is the soil — and how dry the growing season ahead?",
    visible: ["Soil moisture at coarse scales", "Snow water equivalent", "Sea ice concentration", "Inundation under canopy"],
    invisible: ["Field-scale variability", "Irrigation practice", "Crop-specific stress"],
    ground: ["Soil-moisture probe networks", "Smallholder rain gauges", "Agricultural extension reports"],
    accent: "lapis",
  },
  {
    id: "atmos", name: "Atmospheric chemistry",
    instruments: "TROPOMI · OCO-3 · GOSAT · MOPITT · TEMPO · MethaneSAT (lost 2025) · CO2M · MicroCarb",
    band: "Column retrievals · molecules in the column",
    care: "Where is the air being poisoned — and who breathes that air?",
    visible: ["NO₂ over highways and refineries", "Methane super-emitters", "CO₂ from megacities", "Wildfire smoke plumes"],
    invisible: ["Indoor air", "Cumulative exposure histories", "Ventilation patterns", "Body-altitude concentration"],
    ground: ["PurpleAir & low-cost networks", "Health records", "Environmental justice mapping", "Q-TRAK walks"],
    accent: "terra",
  },
  {
    id: "altimetry", name: "Altimetry",
    instruments: "ICESat-2 · Sentinel-3 · SWOT · Jason-CS",
    band: "Pulse timing · sea, ice, lake surface height",
    care: "What is rising, sinking, draining — at what rate?",
    visible: ["Ice-sheet elevation change", "Sea-level rise patterns", "Lake & reservoir levels", "River-stage networks"],
    invisible: ["Local relative sea level", "Subsidence below the gauge", "What that rise costs a household"],
    ground: ["GLOSS tide gauges", "Community high-water marks", "Insurance claims"],
    accent: "lapis",
  },
  {
    id: "gravimetry", name: "Gravimetry",
    instruments: "GRACE-FO · forthcoming Mass Change mission",
    band: "Time-varying gravity field",
    care: "Where is water disappearing from the planet's hidden ledger?",
    visible: ["Groundwater depletion (Punjab, Central Valley)", "Ice-mass change", "Drought signatures at basin scale"],
    invisible: ["Anything finer than a basin", "Withdrawal vs recharge attribution", "Whose well goes dry first"],
    ground: ["Piezometer networks", "Well drilling logs", "Farmer testimony"],
    accent: "moss",
  },
  {
    id: "night", name: "Night lights",
    instruments: "VIIRS DNB · SDGSAT-1",
    band: "Low-light VIS · anthropogenic emission",
    care: "Where is the grid on, off, conflicted, displaced?",
    visible: ["Power outages", "Conflict damage to infrastructure", "Gas flaring", "Urbanisation"],
    invisible: ["Whether the dark area is empty or hidden", "Light pollution costs to ecosystems", "Energy poverty distinct from displacement"],
    ground: ["Utility company outage data", "On-ground photographs", "Local accounts"],
    accent: "ochre",
  },
  {
    id: "hyperspectral", name: "Hyperspectral",
    instruments: "PRISMA · EnMAP · EMIT · CHIME (forthcoming)",
    band: "Hundreds of contiguous narrow bands",
    care: "What is this surface actually made of — at a molecular level?",
    visible: ["Mineral composition", "Methane plumes at scene scale (EMIT)", "Crop biochemistry", "Water-quality constituents"],
    invisible: ["Use & ownership of the resource identified", "Downstream extraction politics", "Local naming of the surface"],
    ground: ["Field spectroscopy", "Soil & rock samples", "Community land knowledge"],
    accent: "plum",
  },
];

// ---- Three deep dives, supplementary numbers / callouts ----
const DIVES = {
  applications: {
    id: "applications", roman: "I", title: "Applications",
    sub: "Risk · early warning · disaster risk reduction",
    intro:
      "Start where remote sensing matters most existentially and most consistently fails — the small island. Move to the Canadian Arctic, where the instrument is here, the community is here, the funding is here, and a specific gap remains. End with Taiwan, where the last mile turns out not to be a delivery problem.",
  },
  integration: {
    id: "integration", roman: "II", title: "Integration & epistemology",
    sub: "Back to basics — three layers of heuristic",
    intro:
      "Three layers of heuristic — physical, interpretive, ethical. Two career stories ground it: SOCODEVI rain gauges and a Q-TRAK walk through Lausanne. The walk produced a counter-map of urban air at body altitude. The defaults of the discipline are themselves the problem.",
  },
  ethics: {
    id: "ethics", roman: "III", title: "Ethics & politics",
    sub: "Counter-mapping · dual-use · sovereignty · solastalgia",
    intro:
      "Start with the dugout that is also fire suppression. Walk to the migration fence read as a membrane. Sit with the dual-use of the same Maxar tile. End with change-detection as the technical apparatus of solastalgia, and community mapping as collective grief work.",
  },
};

const ISLANDS_FACTS = [
  { k: "≈4.5 m",       v: "Tuvalu's maximum elevation" },
  { k: "6–10 m",       v: "SRTM vertical RMSE — the instrument's noise floor" },
  { k: "Art. 121",     v: "UNCLOS — imagery becomes legal evidence of statehood" },
  { k: "—",            v: "Islands fail every assumption that lets RS work simultaneously" },
];

const RCM_FACTS = [
  { k: "0.996",        v: "RCM-derived sea-ice vs CIS analyst charts (Shabanov 2024)" },
  { k: "97 / 98 %",    v: "User / producer accuracy, TIIC wildfire perimeter (Jain 2024)" },
  { k: "F1 = 0.72",    v: "RCM compact-polarimetry burned-area with DL (Dec 2024 preprint)" },
  { k: "≈4 h",         v: "NRCan EGS flood-polygon latency from RCM / S-1 / R-2" },
  { k: "12 / 4 days",  v: "Individual repeat / exact constellation revisit" },
  { k: "4 × Arctic",   v: "Daily acquisitions over Arctic latitudes" },
];

const TUK_FACTS = [
  { k: "~2 m / yr",   v: "Tuktoyaktuk Island shoreline retreat" },
  { k: "≤40 m",       v: "Pelly Island coast lost in one summer" },
  { k: "Community-led", v: "Pokiak time-lapse cameras · SmartICE" },
  { k: "No paper.",   v: "No peer-reviewed RCM-specific Tuktoyaktuk shoreline-change study, to my knowledge" },
];

// ---- Defaults flip cards (Topic 2) ----
const DEFAULTS = [
  { default: "Remove shadow",   answer: "Shadow is the heat refuge",       body: "After Lytton, after the Vancouver heat dome, shade is public-health infrastructure. The shaded suq, the ramada, the tarp in the camp, the cool corner on the north side at 2 PM. A community-resilience reading of imagery maps shadows. It does not remove them." },
  { default: "Mask cloud",      answer: "Cloud is the rain",               body: "For monsoon agriculture, for snowpack on a watershed, for the moisture flux into a parched basin, the cloud is the resource, not the obstruction." },
  { default: "Smooth speckle",  answer: "Speckle is the surface",          body: "SAR speckle carries information about roughness, soil, ice texture. We filter it because filtering makes the image easier to look at. The price of that is information." },
  { default: "Classify bare",   answer: "Bare is the meeting place",       body: "The residual class — bare, open — absorbs evacuation gathering points, refugee-camp footprints before they become legible, sports fields, schoolyards, festival sites, sacred ceremonial spaces, weekly markets, the open lot where after the earthquake everyone agrees to meet." },
  { default: "Suppress edges",  answer: "Edges are membranes",             body: "The satellite reads a fence as a binary line. Lived experience reads it as a membrane — with timing, gaps, surveillance shadows, corruption gradients, the rhythm of patrols. Forensic Architecture built a discipline on the gap between line and membrane." },
];

// ---- Counter-mapping examples ----
const COUNTER_MAP = [
  { official: "Water",        community: "Dugout — fire-suppression source",      where: "Hydrant-less northern community" },
  { official: "Shed / null",  community: "Trapline cabin",                         where: "Boreal traditional territories" },
  { official: "Absent",       community: "Ice road",                                where: "Winter logistical corridor" },
  { official: "Absent",       community: "Snow cache · traditional hunting structures", where: "Inuit Nunangat" },
  { official: "Wetland / null", community: "Sacred or burial site — un-mapped by design", where: "Indigenous territories" },
  { official: "Shrubland",    community: "Pastoral grazing · charcoal kilns · agroforestry", where: "Sahel · West Africa" },
  { official: "Bare / open",  community: "Wildfire refugium · evacuation gathering point", where: "Saskatchewan · BC interior" },
];

// ---- Dual use ----
const DUAL_USE = [
  { use_a: "UNHCR refugee camp population estimation", use_b: "Forced displacement targeting",       sensor: "Sentinel-2" },
  { use_a: "Bucha atrocity documentation (2022)",      use_b: "Gaza operational targeting",          sensor: "Maxar VHR" },
  { use_a: "Commercial high-resolution sales",         use_b: "Forensic Architecture counter-forensics", sensor: "Maxar VHR" },
  { use_a: "Decentralized Damage Mapping — Gaza",      use_b: "—",                                    sensor: "Sentinel-1 SAR coherence" },
];

// ---- Governance frameworks ----
const GOV = [
  { name: "OCAP®", full: "Ownership · Control · Access · Possession", body: "First Nations Information Governance Centre. Data and information collected, protected, used, shared under community authority." },
  { name: "CARE",  full: "Collective benefit · Authority · Responsibility · Ethics", body: "Global Indigenous Data Alliance. Reframes data governance for Indigenous data around collective and community priorities — pairs with FAIR." },
  { name: "NISR",  full: "National Inuit Strategy on Research", body: "Inuit Tapiriit Kanatami. De-facto framework for any research in Inuit Nunangat." },
];

// ---- Foundation models ----
const FOUNDATION = [
  { name: "Prithvi-EO-2.0", org: "NASA + IBM",       date: "Dec 2024" },
  { name: "TerraMind",      org: "IBM + ESA + FZJ",  date: "Apr 2025" , note: "First any-to-any generative multimodal EO model" },
  { name: "Clay",           org: "Clay Foundation",  date: "open weights" },
  { name: "SatlasPretrain", org: "Allen Institute",  date: "open" },
];

// ---- SAR missions (left = past, right = future capability) ----
const SAR_MISSIONS = [
  { name: "RCM",         org: "CSA",                  when: "Nov 2019",  band: "C-band · compact pol.",    note: "Operational backbone — sea ice, fire, flood, coastal" },
  { name: "Sentinel-1C", org: "ESA · Copernicus",     when: "Dec 2024",  band: "C-band",                   note: "Closed gap left by S-1B (2021 failure)" },
  { name: "BIOMASS",     org: "ESA",                  when: "Apr 2025",  band: "P-band",                   note: "First space-based P-band — canopy-penetrating biomass" },
  { name: "NISAR",       org: "NASA + ISRO",          when: "30 Jul 2025", band: "L + S-band dual",         note: "242 km swath · 12-day repeat · ~4 mm/yr deformation" },
  { name: "ICEYE",       org: "commercial",           when: "expanding", band: "X-band",                   note: "Sub-metre · sub-daily revisit" },
  { name: "Capella",     org: "commercial",           when: "expanding", band: "X-band",                   note: "Sub-metre · tasking on demand" },
  { name: "Umbra",       org: "commercial",           when: "expanding", band: "X-band",                   note: "Open data tier" },
];

// ---- Funding fragility ----
const FRAGILITY = [
  { name: "USAID",       status: "Dismantled",   when: "early 2025", region: "global" },
  { name: "FEWS NET",    status: "Dark",          when: "Feb 2025",  region: "global food security" },
  { name: "NICFI",       status: "Ended",         when: "Jan 2025",  region: "tropical forests" },
  { name: "MethaneSAT",  status: "Lost in orbit", when: "Jun 2025",  region: "methane super-emitters" },
  { name: "Decadal Survey (NASA)", status: "Under budget pressure", when: "2025+", region: "U.S. Earth observation" },
  { name: "Copernicus",  status: "Continuing — tighter envelope", when: "ongoing", region: "Europe" },
];

const CANADA_STABILITY = [
  { name: "RCM",     note: "Operational · well-validated · Arctic-strong" },
  { name: "CSA",     note: "Charter founding member · active" },
  { name: "GHGSat",  note: "Montreal — leading commercial methane constellation" },
  { name: "Guardians + SmartICE", note: "Strongest community-led monitoring ecosystem in the world" },
  { name: "NISAR validation", note: "Canadian role in build-out" },
];

// =======================================================================
// REFINED FRAME — new structured data for Plato/Aristotle dialectic,
// five perspectives on risk, three-layer heuristic stack, change asked
// four ways, visibility pairs, counter-mapping questions.
// =======================================================================

const PAINTING_FIGURES = {
  plato: {
    name: "Plato",
    work: "Timaeus (held)",
    gesture: "Index finger pointing up",
    fr: "espérance",
    en: "the principle of hope",
    thinker: "Ernst Bloch · anticipatory consciousness",
    body: "Toward the world of forms. Toward what is not yet here. Toward the ideal. The vertical gesture — the dream of total knowledge, of pattern, of abstraction.",
    rs: "In our discipline · the satellite. The foundation model. The planetary archive. The promise that more sensing means better decisions.",
    color: "var(--lapis)",
    side: "left",
  },
  aristotle: {
    name: "Aristotle",
    work: "Nicomachean Ethics (held)",
    gesture: "Palm horizontal — Earth-facing",
    fr: "responsabilité",
    en: "the heuristic of fear",
    thinker: "Hans Jonas · duty to those here and those who come after",
    body: "Toward what is. Toward the ground we share. Toward responsibility for the present. The horizontal gesture — the named place, the specific person, the obligation.",
    rs: "In our discipline · the community-led monitor. OCAP. The validator in the village. The insistence that the pixel becomes a decision about a life.",
    color: "var(--terra)",
    side: "right",
  },
};

const FIVE_PERSPECTIVES = [
  {
    id: "sky",
    name: "Sky-eye",
    sub: "abstraction · distance · pattern · anticipation",
    contributes: "scale, repetition, synoptic comparison, change detection",
    sees: [
      "flood extent", "wildfire scars", "shoreline erosion",
      "land-cover change", "vegetation stress", "building exposure",
      "road interruption", "heat patterns", "damage signatures",
    ],
    color: "var(--lapis)",
    glyph: "↑",
    affinity: "Plato",
  },
  {
    id: "ground",
    name: "Ground sensor",
    sub: "local physical specificity",
    contributes: "what the satellite cannot reach — micro-scale, sub-canopy, indoor, body altitude",
    sees: [
      "rainfall", "river height", "soil moisture", "air quality",
      "CO₂", "temperature · humidity · wind", "water quality",
      "seismic and acoustic signals",
    ],
    color: "var(--moss)",
    glyph: "●",
    affinity: "in-situ",
    note: "SOCODEVI · the satellite said one thing, the farmer's gauge said another, the neighbour's gauge said a third.",
  },
  {
    id: "community",
    name: "Community",
    sub: "situated knowledge",
    contributes: "what no data layer encodes — trust, memory, informal assets, relationships",
    sees: [
      "which road floods first", "which route is officially open but practically unsafe",
      "which households are isolated", "who lacks transport",
      "where people gather", "where informal assets exist",
      "which warnings are trusted", "where past disasters are remembered",
      "which places matter beyond their land-cover class",
    ],
    color: "var(--terra)",
    glyph: "◆",
    affinity: "place",
  },
  {
    id: "embodied",
    name: "Embodied",
    sub: "exposure as lived experience",
    contributes: "the bottom ten metres of the atmosphere — body altitude",
    sees: [
      "heat as exhaustion", "smoke as breathing difficulty",
      "slope as burden", "water level as danger",
      "distance as impossibility", "traffic as stress",
      "evacuation as fear, delay, or refusal",
      "climate change as a change in daily movement",
    ],
    color: "var(--terra-2)",
    glyph: "→",
    affinity: "Aristotle",
    note: "Q-TRAK · for CO₂ as a health question rather than a climate question, satellites are measuring the wrong thing.",
  },
  {
    id: "institutional",
    name: "Institutional",
    sub: "maps become decisions",
    contributes: "the threshold at which a map becomes consequence",
    sees: [
      "where warnings are issued", "where shelters are opened",
      "where recovery funding goes", "what becomes insurable",
      "what counts as damaged", "what is regulated", "what is ignored",
    ],
    color: "var(--plum)",
    glyph: "▲",
    affinity: "authority",
  },
];

const HEURISTIC_LAYERS = [
  {
    id: "physical",
    n: "01",
    name: "Physical",
    verb: "measures",
    color: "var(--lapis)",
    headline: "A sensor does not measure flood, methane, heat, or risk. It measures a signal.",
    items: [
      "reflectance", "backscatter", "brightness temperature",
      "phase", "height", "texture",
      "sound", "chemical concentration", "biological traces",
    ],
    body: "Everything after that is inference. A sensor measures a signal. A model turns the signal into an environmental object. A decision system turns the object into action.",
  },
  {
    id: "interpretive",
    n: "02",
    name: "Interpretive",
    verb: "interprets",
    color: "var(--ochre)",
    headline: "Classes are not given by the world.",
    items: [
      "land-cover class", "building footprint", "informal settlement",
      "flood zone", "exposure surface", "road network", "vegetation index",
    ],
    body: "Each class is produced by an ontology designed for a purpose — usually a purpose that predates the care question you are now asking. Every preprocessing default contains a theory of what matters.",
  },
  {
    id: "ethical",
    n: "03",
    name: "Ethical",
    verb: "decides",
    color: "var(--terra)",
    headline: "The category becomes a decision about a life.",
    items: [
      "evacuation", "funding", "insurance", "enforcement",
      "humanitarian intervention", "camp recognition", "land claims",
      "infrastructure repair", "climate-adaptation investment", "surveillance",
    ],
    body: "The heuristic stack at the bottom and middle is now operating at the top of someone's life.",
  },
];

const FIT_FOR_PURPOSE = {
  old_q: "Is the model accurate?",
  new_q: "Accurate for whom, at what scale, for what decision, and with what consequences?",
  ordinary: [
    "Swiss small town",
    "Newfoundland outport",
    "Quebec rang",
    "prairie hamlet",
    "Indigenous community whose morphology is underrepresented in training data",
  ],
};

const CHANGE_FOUR_WAYS = [
  {
    id: "looks",
    name: "Looks like",
    subject: "Satellite",
    color: "var(--lapis)",
    glyph: "👁",
    question: "What does change look like?",
    examples: ["NDVI delta", "shoreline retreat", "burn-scar polygon", "footprint loss", "albedo shift"],
  },
  {
    id: "sounds",
    name: "Sounds like",
    subject: "Acoustic",
    color: "var(--ochre)",
    glyph: "♪",
    question: "What does change sound like?",
    examples: ["bird-call attrition", "soundscape silence", "traffic-spectrum shift", "wildfire roar", "ice-shelf groan"],
  },
  {
    id: "felt",
    name: "Is felt",
    subject: "Embodied",
    color: "var(--terra)",
    glyph: "✋",
    question: "How is change felt?",
    examples: ["heat as exhaustion", "smoke as breathing", "distance as impossibility", "evacuation as fear", "noise as insomnia"],
  },
  {
    id: "means",
    name: "Means",
    subject: "Community",
    color: "var(--plum)",
    glyph: "◆",
    question: "What does change mean?",
    examples: ["loss of ceremony", "intergenerational rupture", "memory of a road", "the place that holds us", "the language for the loss"],
  },
];

const VISIBILITY_PAIRS = [
  { sensor: "high-resolution optical", protects: "documents destroyed homes", exposes: "exposes refugee families" },
  { sensor: "post-disaster VHR",        protects: "maps damage for relief",      exposes: "exposes informal settlements" },
  { sensor: "wide-area survey",          protects: "reveals illegal extraction",  exposes: "exposes Indigenous sacred sites" },
  { sensor: "Maxar tile",                 protects: "documents war crimes",        exposes: "informs operational targeting" },
  { sensor: "time series",                protects: "tracks shoreline loss",       exposes: "exposes politically vulnerable communities" },
];

const COUNTER_MAPPING_QUESTIONS = [
  "Whose land?", "Whose risk?", "Whose infrastructure?",
  "Whose memory?", "Whose categories?", "Whose map?", "Whose decision?",
];

const SECTION_CLAIMS = {
  applications: "Risk modelling needs remote sensing, but resilience modelling needs relationship. Hazard may be visible from the sky; vulnerability and capacity live in the boundary layer.",
  integration:  "The physical layer asks what the sensor measures. The interpretive layer asks what the signal is allowed to mean. The ethical layer asks what happens to people once that meaning becomes a decision.",
  ethics:       "The ethics of remote sensing begins when visibility becomes consequence.",
};

// Risk = hazard ∩ exposure ∩ vulnerability ∩ capacity (UNDRR)
const RISK_QUARTET = [
  { id: "hazard",        name: "Hazard",         tag: "what threatens",   color: "var(--lapis)",  sky: true,  resilience: false },
  { id: "exposure",      name: "Exposure",       tag: "who or what is in the way", color: "var(--ochre)", sky: true,  resilience: false },
  { id: "vulnerability", name: "Vulnerability",  tag: "who is most harmed", color: "var(--terra)", sky: false, resilience: true },
  { id: "capacity",      name: "Capacity",       tag: "who can act, recover, refuse", color: "var(--moss)",  sky: false, resilience: true },
];


const QA_LANDING = [
  { q: "What about indoor air quality monitoring at scale?",       a: "Pivot to PurpleAir, low-cost sensor networks, BMS integration." },
  { q: "How do you handle dual-use risk in your Red Cross work?",  a: "Pivot to governance, OCAP/CARE, the validation chain." },
  { q: "Is there really a Tuktoyaktuk RCM gap?",                   a: "Yes — and I am open to collaboration." },
  { q: "How does this scale to the rest of the discipline?",       a: "Boundary layer · chain of translators · the Topic 2 methodology." },
  { q: "What about foundation-model failures?",                    a: "Auditability · pretraining bias · the AI-shift caveat from Part 3." },
  { q: "Where do I read more?",                                    a: "Bennett et al. 2022 · Braun 2021 · Lappe, Calovi, Winther 2026 · Rahm 2023." },
];

const READING = [
  { who: "Mia Bennett et al.",          year: 2022, what: "Politics of Pixels" },
  { who: "Andreas Braun",                year: 2021, what: "More Accurate Less Meaningful" },
  { who: "Lappe, Calovi, Winther",       year: 2026, what: "View from Somewhere" },
  { who: "Philippe Rahm",                year: 2023, what: "Climatic Architecture" },
  { who: "Nancy Peluso",                 year: 1995, what: "Whose Woods Are These? — counter-mapping in Kalimantan" },
  { who: "Mac Chapin",                   year: 2005, what: "A Challenge to Conservationists" },
  { who: "Eyal Weizman · Forensic Architecture", year: "ongoing", what: "Counter-forensic analysis" },
  { who: "Glenn Albrecht",               year: 2003, what: "Solastalgia — the concept" },
  { who: "Sheila Jasanoff",              year: 2005, what: "Designs on Nature — civic epistemologies" },
];

const BILINGUAL = [
  { fr: "espérance",          en: "hope · anticipatory consciousness (Bloch)" },
  { fr: "responsabilité",     en: "responsibility · heuristic of fear (Jonas)" },
  { fr: "École d'Athènes",    en: "Raphael's fresco · 1509 · Vatican" },
  { fr: "Histoire naturelle de l'architecture", en: "Rahm's book — climatic urbanism" },
];

const CUTS = [
  { when: "Reduce 1B",          how: "Drop the wildfire/flood stat lines paragraph" },
  { when: "Drop Taiwan typhoon", how: "Saves ~90 s in Topic 1" },
  { when: "Drop SOCODEVI",       how: "Keep only Lausanne in Topic 2 — saves ~90 s" },
  { when: "Shorten fragility",   how: "Reduce Part 3 list to one sentence" },
];

const EXPANDS = [
  { when: "+30 s",        how: "Maxence / AI-safety debates as aside in 1A" },
  { when: "+30 s",        how: "'No One Is an Island' project in 1A" },
  { when: "+second case", how: "Indigenous data sovereignty — additional specific example" },
  { when: "+failure case", how: "Concrete foundation-model bias failure in Part 3" },
];

// Time budget total
const BUDGET = [
  { sect: "1A · Plato / Aristotle / me",          target: "3 min",  words: 580,  notes: "Open with the slide; let the painting sit" },
  { sect: "1B · Red Cross + Missing Maps",        target: "4 min",  words: 530,  notes: "Tighten if Q&A pressure" },
  { sect: "1C · Sector + 1693 seed",               target: "7 min",  words: 1050, notes: "Show modality table; do not read it" },
  { sect: "T1 · Applications",                     target: "10 min", words: 1240, notes: "Slowest section — lots of numbers" },
  { sect: "T2 · Integration",                      target: "10 min", words: 1250, notes: "Lausanne / TROPOMI is load-bearing" },
  { sect: "T3 · Ethics & politics",                target: "10 min", words: 1180, notes: "Tighten first if running long" },
  { sect: "Part 3 · Future + close",               target: "8–10 min", words: 990,  notes: "Leaves 5–7 min for Q&A" },
];

// =======================================================================
// CAREER · disciplines, trainings and their relation to remote sensing.
// Drawn from the speaker's CV.
// =======================================================================

// Discipline taxonomy (used as chips on each work node)
const DISCIPLINES = {
  "health":         { label: "Health sciences",            color: "var(--terra)" },
  "geography":      { label: "Physical geography",         color: "var(--moss)" },
  "urban":          { label: "Urban & environmental systems", color: "var(--ochre)" },
  "geomatics":      { label: "Geomatics engineering",      color: "var(--lapis)" },
  "sociohydrology": { label: "Sociohydrology",             color: "var(--lapis)" },
  "policy":         { label: "Environmental policy",       color: "var(--plum)" },
  "humanitarian":   { label: "Humanitarian GIS",           color: "var(--terra)" },
};

// Relation-to-remote-sensing taxonomy
const RS_RELATIONS = {
  "operational": { label: "Operational RS",           color: "var(--terra)" },
  "modelling":   { label: "Hydrological modelling",   color: "var(--lapis)" },
  "gis":         { label: "GIS / web mapping",        color: "var(--moss)" },
  "etl":         { label: "Spatial-data engineering", color: "var(--lapis)" },
  "policy":      { label: "Policy & assessment",      color: "var(--plum)" },
  "community":   { label: "Community mapping",        color: "var(--terra)" },
  "fusion":      { label: "Sensor fusion · field",    color: "var(--ochre)" },
  "advocacy":    { label: "Advocacy",                 color: "var(--ochre)" },
};

// Formations — the schools, in academic order
const FORMATIONS = [
  {
    inst: "Collège André-Grasset", place: "Montréal", years: "CEGEP",
    cred: "DEC · Health Sciences",
    field: "Sciences de la santé",
    disc: "health",
    note: "The pre-medical baseline — rigorous quantitative and life-sciences grounding before the geography turn.",
  },
  {
    inst: "McGill University · Dent-P", place: "Montréal", years: "started",
    cred: "DMD · Dentistry program",
    field: "An interrupted starting point",
    disc: "health",
    note: "Body-scale exposure as a primary frame — the lens through which 1,693 ppm in the M1 metro later became a research question, not a curiosity.",
  },
  {
    inst: "McGill University", place: "Montréal", years: "BSc",
    cred: "BSc · joint major",
    field: "Physical Geography · Urban Studies · Interdisciplinary Life Sciences",
    disc: "geography",
    note: "The discipline where landscape, ecology and city converge — and the first home of remote sensing as a method.",
  },
  {
    inst: "EPFL · École polytechnique fédérale de Lausanne", place: "Lausanne", years: "exchange",
    cred: "Exchange program",
    field: "Urban and Environmental Systems",
    disc: "urban",
    note: "Urban climate, environmental history, ordinary cities. The intellectual context of the Q-TRAK walk and the Marot / Bloch / Jonas frame.",
  },
  {
    inst: "Université Laval", place: "Québec", years: "BEng",
    cred: "BEng · Geomatics Engineering",
    field: "Geomatics — geodesy, photogrammetry, spatial databases, web mapping",
    disc: "geomatics",
    note: "The engineering of measurement. The discipline that lets a satellite signal become an annotated map.",
  },
];

// Practice — chronological work / research history
const PRACTICES = [
  {
    year: "Jun–Jul 2017", inst: "Taiwan Typhoon & Flood Research Institute", place: "Taipei",
    role: "Environmental data analyst — Typhoon & Flood Resilience",
    disc: ["geography"], rs: ["operational"],
    body: "Joined the Taiwan Tech Track program. Compiled landslide-preparedness and vulnerability-assessment data — the first encounter with RS-driven hazard surfaces meeting evacuation decisions.",
  },
  {
    year: "May–Aug 2021", inst: "Ministère des Ressources naturelles du Québec", place: "Québec",
    role: "Geomatician — 3D flood modelling",
    disc: ["geomatics"], rs: ["modelling", "gis"],
    body: "Three-dimensional flood modelling for provincial water-resource management. Where the engineering side of geomatics met the lived stakes of riverine communities.",
  },
  {
    year: "2021 – Apr 2023", inst: "Environment & Climate Change Canada", place: "AFOLU · Canada Wildlife Service",
    role: "Remote-sensing analyst — Agriculture, Forestry and Other Land Use",
    disc: ["geography", "geomatics"], rs: ["operational"],
    body: "Trained and optimised the Great Lakes – St. Lawrence Lowlands Random Forest model for LCLU classification with segmented, object-oriented data. Conducted 1990–2020 change detection and spatial analysis for major cities. Produced the methodological report and the thematic-map series.",
    note: "The primary RS role.",
  },
  {
    year: "May–Dec 2022", inst: "Department of National Defence", place: "2 CDSB Valcartier",
    role: "Military geomatician",
    disc: ["geomatics"], rs: ["gis"],
    body: "Military terrain analysis — one of the historical origins of LULC classification named explicitly in Topic 3. Seeing it from the inside informs the counter-mapping argument.",
  },
  {
    year: "Jun 2022 – Aug 2024", inst: "Université Laval", place: "Québec",
    role: "Research assistant — Mapping · Sociohydrology · Environmental Planning",
    disc: ["sociohydrology", "geomatics"], rs: ["modelling"],
    body: "Flood modelling (2022) and water management (2024). Sociohydrology as an integrative discipline — water systems analysed as coupled to human systems. The boundary-layer move at the watershed scale.",
  },
  {
    year: "Jan–Apr 2023", inst: "Natural Resources Canada · CCMEO", place: "Canada Centre for Mapping and Earth Observation",
    role: "On-demand geomatician",
    disc: ["geomatics"], rs: ["etl"],
    body: "Automated an ETL pipeline for normalising large-format orthophotos. Integrated transactional annotation management against a PostGIS database. Drafted a Tippecanoe / Mapbox Tiling Service proof-of-concept for batch image processing and tile visualisation.",
  },
  {
    year: "May–Aug 2023", inst: "SOCODEVI", place: "Québec · West Africa programmes",
    role: "Geomatician — agricultural insurance in Africa",
    disc: ["geomatics"], rs: ["fusion", "operational"],
    body: "The integration story behind Slide 15: satellite precipitation products meeting smallholder ground gauges. Validation at continental versus parcel scale. The integration is not a Kalman filter — it is a person.",
  },
  {
    year: "May–Dec 2023", inst: "Canada Energy Regulator", place: "Facilities Adjudication, West",
    role: "Environmental analyst",
    disc: ["policy"], rs: ["policy"],
    body: "Compiled and analysed CER-regulated projects to standardise environmental conditions for new energy-infrastructure builds. Revised internal guidance for environmental assessment with a focus on GHG emissions. Visualised and analysed incidents data.",
  },
  {
    year: "Jan–Apr 2024", inst: "CIRNAC", place: "Crown-Indigenous Relations & Northern Affairs Canada",
    role: "Water-resources policy researcher",
    disc: ["policy", "sociohydrology"], rs: ["policy"],
    body: "Policy research at the intersection of Indigenous rights, environmental governance and water — the institutional location of the OCAP, CARE and NISR concerns surfaced in Topic 3.",
  },
  {
    year: "Aug 2024 — present", inst: "Canadian Red Cross", place: "Montréal",
    role: "National Community Mapping Lead — GIS · Information Management",
    disc: ["humanitarian", "geomatics"], rs: ["community"],
    body: "Community-mapping portfolio. Missing Maps activations for Sudan, DRC, Madagascar (Cyclone Chido), Saskatchewan wildfire & water-source mapping, Atlantic coastal adaptation. Member of the MapSwipe governance body.",
    note: "The current node.",
  },
];

// UN and other service
const SERVICE = [
  { who: "UN MGCY", role: "Global Focus Point — Decent Jobs & Sustainable Economies", years: "Jan 2024 — present" },
  { who: "UN MGCY", role: "Thematic Focal Point — SDG 8 Green Jobs",                  years: "Oct 2018 – Oct 2019" },
];

const LANGUAGES = [
  { l: "English",                          level: "native / bilingual" },
  { l: "Français",                         level: "native / bilingual" },
  { l: "Chinese · Simplified + Traditional", level: "native / bilingual" },
  { l: "Español",                          level: "professional working" },
  { l: "Japanese · 日本語",                 level: "limited working" },
];

const CERTS = [
  "Spatial Data Science · The New Frontier in Analytics",
  "Photoshop CC for Planners",
];

Object.assign(window, {
  TALK, CAREER, SLIDES, MODALITIES, DIVES,
  ISLANDS_FACTS, RCM_FACTS, TUK_FACTS, DEFAULTS, COUNTER_MAP, DUAL_USE, GOV,
  FOUNDATION, SAR_MISSIONS, FRAGILITY, CANADA_STABILITY,
  QA_LANDING, READING, BILINGUAL, CUTS, EXPANDS, BUDGET,
  DISCIPLINES, RS_RELATIONS, FORMATIONS, PRACTICES, SERVICE, LANGUAGES, CERTS,
  PAINTING_FIGURES, FIVE_PERSPECTIVES, HEURISTIC_LAYERS, FIT_FOR_PURPOSE,
  CHANGE_FOUR_WAYS, VISIBILITY_PAIRS, COUNTER_MAPPING_QUESTIONS,
  SECTION_CLAIMS, RISK_QUARTET,
});
