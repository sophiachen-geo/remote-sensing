// =======================================================================
// All structured talk content. Loaded first.
// =======================================================================

const TALK = {
  title: "Sensing for the Commons",
  subtitle: "Remote sensing between sky-eye abstraction, ground-up knowledge, and care",
  venue: "Canadian Remote Sensing Society",
  duration: "60 min including approximately 5 to 10 min Q&A",
  speaker: "Sophia",
  spineSentence:
    "The messy middle is where care happens. Everything else is preparation or aftermath.",
  thesis_old_question:
    "What can remote sensing see?",
  thesis_new_question:
    "What kind of relationship does remote sensing build with the ground, and what obligations follow from seeing?",
  central_claim:
    "Remote sensing becomes most consequential when it enters the messy middle, the space where sky-eye measurement, ground-up knowledge, embodied experience, institutional decision making, and community meaning must negotiate what the image is actually about.",
  closing_final:
    "Remote sensing points upward in order to look down. For care, resilience, and community, the real work begins when the image enters the messy middle, where the sky-eye view must answer to ground-up knowledge, embodied experience, and the obligations of shared life.",
  closing_plato:
    "Remote sensing without Plato loses the capacity to abstract, compare, anticipate, and model futures.",
  closing_aristotle:
    "Remote sensing without Aristotle loses responsibility to the ground.",
  argument_in_one_paragraph:
    "Remote sensing is the discipline that points an instrument upward in order to look down. It abstracts the Earth into pixels, bands, indices, classes, footprints, probabilities, and models. Its value for risk, resilience, and community depends on whether that abstraction can return to the ground with responsibility. The work happens in the boundary layer, both the lower kilometre of the troposphere where bodies live and breathe, and the conceptual layer between satellite measurement and lived consequence. Staffing that layer requires translators, integrators, witnesses, designers, counter-mappers, communities, and satellites, and none of these is sufficient alone.",
};

// =======================================================================
// Career arc, used in Ouverture.
// =======================================================================

const CAREER = [
  { node: "EPFL",       place: "Lausanne",        note: "Software engineering, environmental history with Marot, urban climate with Coccolo and Mauree" },
  { node: "Taiwan TRC", place: "Taipei",          note: "Typhoon warnings, evacuation behaviour, civic epistemologies" },
  { node: "SOCODEVI",   place: "West Africa",     note: "Ground rain sensors fused with satellite precipitation for smallholders" },
  { node: "CER",        place: "Canada",          note: "Canada Energy Regulator, environmental analysis" },
  { node: "Red Cross",  place: "Montreal, now",   note: "Community mapping portfolio, Missing Maps, MapSwipe governance" },
];

// =======================================================================
// The 26 slides. Notes are expanded with richer detail.
// =======================================================================


// =======================================================================
// The 26 slides. Each slide now carries:
//   notes      delivery bullets for the lecturer
//   synthesis  rich formal prose for the companion site, two to four
//              paragraphs of context, scholarship, and argument that
//              the bullets cannot carry on their own
//   sources    bibliographic anchors, keyed to the READING list
//   connects   cross references to other slides in the deck
// =======================================================================

const SLIDES = [
  { n:1, part:"1A", t:"00:00", title:"Detail, Raphael, École d'Athènes (1509)",
    kicker:"Open with the painting. Let the image hold the room before speaking.",
    visual:"painting-detail",
    notes:[
      "Plato, at the left of the central pair, holds the Timaeus and raises his index finger toward the heavens. The gesture orients itself toward the world of forms, toward what is not yet here, toward the ideal.",
      "Aristotle, at the right, holds the Nicomachean Ethics and extends his palm horizontally. The gesture orients itself toward what is, toward the ground that is shared, toward responsibility for the present.",
      "Sébastien Marot, at EPFL, reads the two gestures through Ernst Bloch and Hans Jonas. Plato's finger upward becomes the principle of hope, anticipatory consciousness, the impulse toward a world that does not yet exist. Aristotle's palm horizontal becomes the principle of responsibility, the heuristic of fear, the duty owed to those who are here and to those who will follow.",
      "The central claim of the lecture follows directly from this reading. Remote sensing is both gestures at once. It is the technique that abstracts in order to ground.",
      "The painting is the lecture's compass. The argument will return to it in Slide 26.",
    ],
    synthesis:
      "The Stanza della Segnatura was completed for Pope Julius II in 1509 and 1510, and the central pair of figures has been the subject of more than five centuries of commentary. The reading that this lecture adopts is specifically continental and twentieth century. Ernst Bloch's Das Prinzip Hoffnung, published in 1959, and Hans Jonas's Das Prinzip Verantwortung, published in 1979, are the texts that turn the iconography into a still operative ethical dialectic. Bloch identifies in Plato's vertical gesture the impulse of anticipatory consciousness, the capacity of human thought to project itself toward a world that is not yet present. Jonas, writing three decades after Bloch and a generation after the technologies he most feared, identifies in Aristotle's horizontal gesture the heuristic of fear, the principle that any technology of sufficient power must answer first to the people and places on which it operates." +
      "\n\n" +
      "Sébastien Marot, with whom I studied at EPFL, places this dialectic at the centre of his architectural pedagogy. Every project, he argues, is both a hope and a responsibility, and neither term can be dispensed with. The lecture inherits that framing without modification. The satellite is the instrument that points upward in order to acquire a totalising view of a system, and then directs the products of that view downward to decisions about specific places and specific people. The geometry of the instrument is Plato. The purpose of its best work is Aristotle. The discipline of remote sensing for care, resilience, and community is the discipline of holding the two gestures together, in one instrument and in one practice, without resolving them into either pure measurement or pure intervention.",
    sources: ["Bloch 1959, Das Prinzip Hoffnung", "Jonas 1979, Das Prinzip Verantwortung", "Marot pedagogy at EPFL"],
    connects: ["Slide 2 develops the upward-downward geometry", "Slide 14 names the boundary layer as the meeting point of the two gestures", "Slide 26 returns to the painting as bookend"],
  },

  { n:2, part:"1A", t:"01:00", title:"The instrument that points up to look down",
    visual:"earth-disc",
    notes:[
      "The satellite reaches for the abstract, the global, the planetary, the totalised view.",
      "It uses that abstraction to make decisions about the ground people actually live on.",
      "By its physical geometry, the satellite is Plato's finger. By its purpose at its best, it is Aristotle's palm.",
      "The discipline of remote sensing for care, resilience, and community is the discipline of holding both gestures together. It refuses to choose between hope and responsibility, between the dream of total knowledge and the obligation to specific people in specific places.",
    ],
    synthesis:
      "The continuous satellite era begins with Landsat 1 in July 1972, and the discipline has not paused since. More than half a century of orbital observation has produced an archive measured in petabytes and a methodological tradition organised around an underlying geometry. The sensor sits above, the world sits below, and the work of the discipline is to translate between the two. Every subsequent platform inherits this geometry, from MODIS to Sentinel, from RADARSAT to NISAR, from Planet to GHGSat. The abstraction is not optional. It is constitutive of the instrument." +
      "\n\n" +
      "What changes across the half century is not the geometry but the chain of human practice it requires. The early Landsat programme treated ground validation as a single supplementary step. The contemporary practice of remote sensing for care, resilience, and community treats every layer between the orbital instrument and the ground as a site of interpretation, governance, and contestation. Slide 7 names the modalities through which the abstraction operates. Slide 8 names the three layers of heuristic the modalities pass through. Slide 14 names the entire space between satellite and ground as the boundary layer. The argument of this opening is therefore not that the satellite is wrong to abstract. The argument is that the abstraction acquires its meaning only when it returns, deliberately and accountably, to the ground.",
    sources: ["Landsat 1, July 1972, the start of the continuous EO archive"],
    connects: ["Slide 7 names the modalities", "Slide 8 names the heuristic layers", "Slide 14 names the boundary layer"],
  },

  { n:3, part:"1A", t:"02:00", title:"Career arc, EPFL to Taiwan to SOCODEVI to CER to Red Cross",
    visual:"career-arc",
    notes:[
      "Trained as a software engineer at EPFL, with environmental history under Sébastien Marot and urban climate under Silvia Coccolo and Dasaraden Mauree.",
      "At the Taiwan Typhoon Research Centre, the question was how people perceive and act on evacuation warnings when the satellite says their house has a sixty per cent chance of being destroyed.",
      "At SOCODEVI, the work combined ground rain sensors with satellite precipitation products for smallholder agriculture in West Africa.",
      "At the Canada Energy Regulator before humanitarian mapping. Now at the Canadian Red Cross, leading the community mapping portfolio, the Missing Maps work, and serving on the governance body of MapSwipe.",
      "Writing climate adaptation reports for southwestern Newfoundland. Working in English and French, reading Traditional Chinese, studying Japanese.",
    ],
    synthesis:
      "The path from EPFL through Taipei, West Africa, the Canada Energy Regulator, and the Canadian Red Cross is not a curriculum vitae. It is an inheritance of disciplines that do not normally appear in the same room. The EPFL years brought software engineering, the environmental history of Sébastien Marot, the urban climate teaching of Silvia Coccolo and Dasaraden Mauree, and the philosophical context of Bloch and Jonas. The Taipei research at the Taiwan Typhoon and Flood Research Institute brought the operational stakes of typhoon evacuation, the moment a probability surface becomes a household decision. SOCODEVI in West Africa brought the multimodal integration story that returns in Slide 15. The Canada Energy Regulator brought the regulatory grammar that decides which environmental impacts count, and on what terms." +
      "\n\n" +
      "The Canadian Red Cross node, the present node, is where these inheritances converge. The community mapping portfolio runs across Missing Maps, MapSwipe governance, and operational activations for Sudan, the Democratic Republic of the Congo, Madagascar after Cyclone Chido, Saskatchewan wildfire and water source mapping, and Atlantic coastal adaptation. The southwestern Newfoundland climate adaptation report is the current writing project. The arc is not random, although it was not planned. It traces the institutional shape of a single question. How does the satellite enter the boundary layer in a way that serves the people whose lives the boundary layer holds?",
    sources: ["EPFL urban climate course, Coccolo and Mauree", "Marot environmental history at EPFL"],
    connects: ["Slide 15 develops the SOCODEVI integration story", "Slide 16 develops the EPFL Lausanne walk"],
  },

  { n:4, part:"1B", t:"03:00", title:"Canadian Red Cross and Missing Maps",
    visual:"missing-maps",
    notes:[
      "Missing Maps began in 2014 as a collaboration between the British Red Cross, the American Red Cross, Médecins Sans Frontières, and the Humanitarian OpenStreetMap Team.",
      "The premise is simple. Most of the world is well mapped if you are a tourist or a logistics company. Most of the world is poorly mapped if you are responding to an outbreak, a flood, or a forced displacement.",
      "Missing Maps closes that gap. Volunteers, sometimes thousands at a time, trace buildings, roads, and waterways from satellite imagery into OpenStreetMap, the open geospatial commons.",
      "Since 2014, Missing Maps contributors have added more than 1.7 billion building edits to OpenStreetMap in over 200 countries.",
      "The most recent Humanitarian OpenStreetMap Team impact period reports 46 disaster responses and coverage of areas home to 933.6 million people.",
      "In the past twelve months alone: activations for Sudan, the Democratic Republic of the Congo, Madagascar after Cyclone Chido, Indigenous community partners in Saskatchewan on wildfire risk and water source mapping in English and French, and Atlantic Canada coastal adaptation.",
    ],
    synthesis:
      "Missing Maps was founded in 2014 by the British Red Cross, the American Red Cross, Médecins Sans Frontières, and the Humanitarian OpenStreetMap Team. The premise is geographic and political at once. Most of the world is well mapped if the map is required for tourism or logistics, and poorly mapped if the map is required for outbreak response, displacement support, or disaster relief. The institutional response was to mobilise volunteers, sometimes thousands at a time, to trace buildings, roads, and waterways from satellite imagery into OpenStreetMap, the open geospatial commons." +
      "\n\n" +
      "The scale of the effort is now planetary. Since 2014, contributors to the Humanitarian OpenStreetMap Team and Missing Maps have added more than 1.7 billion building edits to OpenStreetMap across more than two hundred countries. The latest Humanitarian OpenStreetMap Team impact period reports 46 disaster responses and coverage of areas home to 933.6 million people. The Morocco and Libya 2023 activation alone produced more than 220,000 building edits and 5,000 kilometres of roads. The Red Cross node sits inside this larger infrastructure, contributing the activation coordination, the field validation, and the chain of trust that makes mapping by distant volunteers acceptable to communities whose territories are being traced. The institution is, in the language the lecture will develop later, a working answer to the question of who is allowed to author a map." +
      "\n\n" +
      "The activation list across the past twelve months names the scope. Sudan, the Democratic Republic of the Congo, Madagascar after Cyclone Chido, Indigenous community partners in Saskatchewan on wildfire risk and water source mapping conducted in English and French, and Atlantic Canada coastal adaptation. Each activation is a distinct epistemic situation. Each requires a different relationship to the community whose territory is being made legible. The next slide enters that relationship directly.",
    sources: ["Humanitarian OpenStreetMap Team 2024 impact report", "Missing Maps founding documents 2014"],
    connects: ["Slide 5 enters the activation in detail", "Slide 21 names the governance protocols that make activations legitimate on Indigenous territories"],
  },

  { n:5, part:"1B", t:"04:30", title:"Activation, the before and after of an unmapped region",
    visual:"trace-before-after",
    notes:[
      "Community mapping is human interpretation of imagery, with the people most affected by the map either in the loop or, ideally, leading the work.",
      "MapSwipe takes this further. It is a mobile application that allows anyone with a smartphone to participate in pre-validation of imagery, answering yes there are buildings here or no this tile is empty, which then directs the more skilled mapping work to where it is most needed.",
      "Nielsen and colleagues 2024 review 237 papers on social media and crowdsourcing in disaster risk management from 2008 to 2023. The institutional form is now standard practice across the field.",
      "The Red Cross, Missing Maps, MapSwipe, and the Humanitarian OpenStreetMap Team form the institutional shape of the argument I will make for the rest of this hour. Remote sensing for care, resilience, and community is not satellites alone. It is satellites embedded in a chain of translators, integrators, witnesses, designers, and communities.",
      "The 2023 wildfire season in Canada burned fifteen million hectares, approximately seven times the long-term average. The flood maps in Atlantic Canada are being redrawn faster than the planning instruments can absorb.",
      "The communities you and I work for are themselves becoming the data. The question is whether they are also becoming the analysts, the validators, and the authors.",
    ],
    synthesis:
      "Community mapping is human interpretation of imagery, with the people most affected by the map either in the loop or, in the best designs, leading the work. The MapSwipe application extends this approach by allowing anyone with a smartphone to participate in the pre validation step, answering yes there are buildings here or no this tile is empty. The pre validation directs the more skilled tracing work to where it is most needed, and the architecture creates a graduated participation pathway from the most accessible task to the most expert one. The Nielsen and colleagues 2024 review of 237 papers on social media and crowdsourcing in disaster risk management between 2008 and 2023 documents the consolidation of this institutional form as standard practice across the field." +
      "\n\n" +
      "The argument that the rest of the hour will develop follows directly from this slide. Remote sensing for care, resilience, and community is not satellites alone, and it is not volunteers alone. It is satellites embedded in a chain of translators, integrators, witnesses, designers, and communities. The 2023 Canadian wildfire season burned approximately fifteen million hectares, roughly seven times the long term average. The flood maps in Atlantic Canada are being redrawn faster than the planning instruments can absorb. The communities this room works for are themselves becoming the data. The genuine question is whether they are also becoming the analysts, the validators, and the authors. The four registers of multimodality developed later in the companion site offer a structured way to ask, of any pipeline, whether the answer is yes or no.",
    sources: ["Nielsen et al. 2024, 237 papers on disaster crowdsourcing", "MapSwipe governance documents"],
    connects: ["Slide 21 names Indigenous data sovereignty as the test of the authorship question", "Multimodality section formalises the four registers"],
  },

  { n:6, part:"1C", t:"07:00", title:"International Charter on Space and Major Disasters",
    visual:"charter",
    notes:[
      "The Canadian Space Agency is a founding member of the Charter.",
      "First activation was Hurricane Lothar in France, November 2000.",
      "More than 850 activations since.",
      "Satellites from CSA, ESA, NASA, JAXA, CNES, ISRO, KARI, and others are tasked, the imagery is processed by value adders, and damage maps reach civil protection within hours.",
      "Copernicus Emergency Management Service reports complementary numbers. 877 emergency response activations, 87 preparedness activations, and 147 recovery activations.",
    ],
    synthesis:
      "The International Charter on Space and Major Disasters was established in 1999 to provide unified satellite data to civil protection authorities in the wake of major disasters. The Canadian Space Agency is a founding member, alongside the European Space Agency and the Centre National d'Études Spatiales of France. The first activation was Hurricane Lothar in France in November 2000. More than 850 activations have followed in the quarter century since. The mechanism is procedural and institutional. A national civil protection authority declares an emergency, the Charter is activated, member agencies task their satellites, value adders process the imagery, and damage maps reach civil protection within hours." +
      "\n\n" +
      "Copernicus Emergency Management Service, the European counterpart, has logged 877 emergency response activations, 87 preparedness activations, and 147 recovery activations. The two services together represent the institutional realisation of multimodal Earth observation at planetary scale. The Charter is also, structurally, the proof that the discipline already operates as a chain of translators. The satellite is one node, the value adder is another, the civil protection authority is a third, and the affected community sits at the far end of the chain. The work of the lecture is to ask whether the affected community is also a node, with its own authority and its own products, or whether the community remains the chain's terminal consumer. The Missing Maps infrastructure described in Slide 4 is one institutional answer to that question.",
    sources: ["International Charter on Space and Major Disasters institutional history", "Copernicus EMS activation registry"],
    connects: ["Slide 4 introduces the community-led counterpart to the Charter", "Slide 24 places the Charter in its current hardware context"],
  },

  { n:7, part:"1C", t:"09:00", title:"The reframed modality table",
    visual:"modality-table",
    notes:[
      "Do not read the whole table. Show the structure. Each row has four entries: the care question, what the modality makes visible, what stays invisible, and what grounds the modality.",
      "Walk through three rows in particular: optical, synthetic aperture radar, and atmospheric chemistry.",
      "A modality is a way of seeing. It attends to certain phenomena and structurally cannot attend to others.",
      "The missing is not a flaw to be fixed. It is the boundary of the modality's care.",
      "Read the whole table as honest about what it cannot see. That honesty is what makes it useful to communities.",
      "Samadzadegan, Toosi, and Dadrass Javan 2025 synthesise more than 950 papers on multi sensor and multi platform fusion. The technical maturity of the table is well established. The question the lecture will press is what the maturity is for.",
    ],
    synthesis:
      "The reframed modality table that the companion site renders in full is the lecture's central instrument. It restructures the conventional sensor inventory around four columns that I will name explicitly. The care question asks what the modality is for, in human terms, before it asks what the modality is. The made visible column lists the phenomena the modality reliably brings into the image. The stays invisible column names the structurally invisible, the dimensions the modality cannot reach by physics or geometry. The grounded by column names the in situ, qualitative, or community streams that the modality requires in order to acquire human meaning." +
      "\n\n" +
      "The modality table is honest about its limits. The missing in each row is not a flaw to be patched. It is the boundary of the modality's care. Read across the table, the rows make a single argument. Every modality knows some things and does not know others. The competence of the discipline is the chain that integrates across rows. The 2025 critical review by Samadzadegan, Toosi, and Dadrass Javan synthesises more than 950 papers on multi sensor and multi platform fusion. The review shows that the technical work of fusion is now thoroughly mature and has been since the 1990s, formalised by Ehlers 1991 and consolidated by Pohl and van Genderen 1998. The technical maturity is not the question. The question that the rest of the lecture presses is what the fusion is for, and whose interpretation governs it.",
    sources: ["Samadzadegan, Toosi, Dadrass Javan 2025, multisensor fusion review", "Ehlers 1991, multisensor image fusion", "Pohl and van Genderen 1998, consolidating review"],
    connects: ["Slide 8 enters the heuristic stack that the table conceals", "Multimodality section reframes the table through four registers"],
  },

  { n:8, part:"1C", t:"12:30", title:"Remote sensing is heuristic at every layer",
    visual:"three-layers",
    notes:[
      "Physical layer. A sensor measures reflectance, backscatter, brightness temperature, phase, height, texture. It does not measure deforestation, urban heat, methane, or flood. Each of those is inferred from the signal under certain rules, and each rule is a heuristic that holds in some conditions and fails in others.",
      "Interpretive layer. A classifier or model takes the physical retrieval and assigns categories. The categories are not given by the world. They are imposed by an ontology designed for a purpose, usually a purpose that predates the care question being asked now.",
      "Ethical layer. The assigned category becomes a decision: to evacuate, to fund, to deny insurance, to declare a refugee camp. The heuristic stack at the bottom and middle is now operating at the top of someone's life.",
      "Andreas Braun at Karlsruhe coined the phrase more accurate, less meaningful. A higher classification accuracy can correspond to a lower geographic meaning, because the classes themselves have been aggregated past relevance.",
      "Mia Bennett and colleagues 2022, in Politics of Pixels, Progress in Human Geography 46(3), treat the discipline's confident epistemology as itself political. Lappe, Calovi, and Winther 2026 extend the analysis with explicit attention to the geography of measurement.",
    ],
    synthesis:
      "A remote sensing pipeline is not a single inference. It is a stack of three inferences, each of them heuristic, each of them susceptible to its own failure mode. The physical layer turns photons or radar returns into estimates of reflectance, backscatter, brightness temperature, phase, height, or texture. Each estimate is a physical inference governed by a model of how light or microwave energy interacts with surfaces and atmospheres. The interpretive layer turns those physical estimates into categorical objects. A deforestation polygon, a flood extent, an urban heat island, a methane plume, a damaged building. The ethical layer turns those categorical objects into decisions. To evacuate, to fund, to insure, to enforce, to recognise a refugee camp, to deny a land claim." +
      "\n\n" +
      "Andreas Braun, at Karlsruhe, names this dynamic with the formulation more accurate, less meaningful. A higher classification accuracy can correspond to a lower geographic meaning, because the classes themselves have been aggregated past the point of relevance to the community whose lives the classes are about to affect. Mia Bennett and colleagues, in their 2022 Progress in Human Geography paper Politics of Pixels, treat the discipline's confident epistemology as itself political. Lappe, Calovi, and Winther's 2026 paper The View from Somewhere extends this analysis with explicit attention to the geography of measurement. Together, this body of literature establishes a working position that the lecture adopts without qualification. Most failures in remote sensing for care happen not at the physical layer, which is well validated, but at the interpretive and ethical layers, which are governed by inherited choices about what counts as a class and what counts as a decision worth automating.",
    sources: ["Braun 2021, More Accurate Less Meaningful, Progress in Physical Geography 45(5)", "Bennett et al. 2022, Politics of Pixels, Progress in Human Geography 46(3)", "Lappe, Calovi, Winther 2026, The View from Somewhere"],
    connects: ["Slide 7 introduces the modality table that the stack quietly governs", "Slide 14 returns to the three layers as the diagnostic frame of the boundary layer"],
  },

  { n:9, part:"1C", t:"14:30", title:"1,693 ppm",
    visual:"co2-gauge",
    notes:[
      "May 2019. The M1 metro from EPFL toward Lausanne Flon, at 5:30 PM. The Q-TRAK instrument read 1,693 parts per million of carbon dioxide.",
      "The sick building syndrome threshold is 800 ppm.",
      "The Harvard CogFX study finds that cognitive scores decline measurably above approximately 945 ppm across nine cognitive domains.",
      "No satellite saw the 1,693. No future satellite will.",
      "Every commuter on that train was inhaling it. Every commuter on the equivalent of that train, in every city this room collectively works in, is inhaling something like it.",
      "Hold the number. The lecture returns to it with full framing in Slide 16.",
      "Breathe London, with more than 350 sites and 60 community hosted sensors across the 14 city Breathe Cities initiative, demonstrates what the institutional answer to body altitude monitoring now looks like at scale.",
    ],
    synthesis:
      "The number 1,693 parts per million was recorded in May 2019 on a Q-TRAK air quality monitor at body altitude during the evening commute on the M1 metro from EPFL toward Lausanne Flon. The measurement is not anomalous. It is structural. The sick building syndrome threshold sits at 800 parts per million. The Harvard CogFX studies of Allen and colleagues demonstrate measurable declines in cognitive performance above approximately 945 parts per million across nine cognitive domains. The 1,693 figure is therefore not a curiosity. It is a workplace exposure question, an urban design question, and a public health question, simultaneously and continuously." +
      "\n\n" +
      "No current satellite resolved that value, and no planned satellite will. The Sentinel-5P TROPOMI instrument that maps nitrogen dioxide over the Lake Geneva basin retrieves column densities at a resolution of approximately 5 kilometres by 3.5 kilometres, weighted toward the lower troposphere but unable to resolve the bottom ten metres where bodies breathe. The institutional response in the years since 2019 has been the rise of dense community sensor networks. Breathe London now operates more than 350 monitoring sites with 60 additional community hosted sensors, and the 14 city Breathe Cities initiative scales the approach internationally. The number 1,693 returns in Slide 16 with its complete framing. For the opening of the lecture, it serves as the first concrete demonstration that the boundary layer is not abstract. It is the air in the train that every commuter in this room rode this morning.",
    sources: ["Harvard CogFX, Allen et al., on cognitive impairment above 945 ppm", "Breathe London programme materials", "Q-TRAK instrument documentation"],
    connects: ["Slide 16 develops the full Lausanne walk and TROPOMI comparison", "Slide 14 places the metro at the bottom of the boundary layer diagram"],
  },

  { n:10, part:"T1", t:"15:00", title:"Tuvalu and Kiribati, the smaller than pixel problem",
    visual:"atolls",
    notes:[
      "Tuvalu has a maximum elevation of approximately 4.5 metres.",
      "The Shuttle Radar Topography Mission digital elevation model has a vertical root mean square error of approximately 6 to 10 metres, depending on conditions. Copernicus DEM and TanDEM-X improve this, but not enough.",
      "The instrument's uncertainty exceeds the thing being measured. Sea level rise projections for the lowest atolls cannot be made with confidence because the elevation baseline is itself uncertain.",
      "Tuvalu makes its legal claim for statehood preservation, for climate compensation, for the continuity of its UNCLOS-derived exclusive economic zone, on data whose vertical noise floor is larger than the country's maximum height.",
      "Article 121 of UNCLOS turns satellite imagery into evidence in legal disputes over the very existence of states.",
      "Islands are where every modelling assumption that lets remote sensing work fails simultaneously. They are smaller than the pixel. They are surrounded by ocean dynamics. They are persistently cloud covered. They have no flux towers and no dense ground network.",
      "Pretraining archives sample continents more heavily than oceans with islands. The AI shift may widen the island and continent capability gap before narrowing it.",
    ],
    synthesis:
      "Tuvalu's maximum elevation is approximately 4.5 metres. The Shuttle Radar Topography Mission vertical root mean square error is approximately 6 to 10 metres depending on conditions. The Copernicus Digital Elevation Model and TanDEM-X improve the figure but not enough to close the gap. The instrument's noise floor exceeds the thing being measured. Sea level rise projections for the lowest atolls cannot be made with confidence because the elevation baseline is itself uncertain. Tuvalu makes its legal claim for statehood preservation, for climate compensation, and for the continuity of its exclusive economic zone derived from the United Nations Convention on the Law of the Sea, on data whose vertical uncertainty is larger than the country's maximum altitude." +
      "\n\n" +
      "Article 121 of the United Nations Convention on the Law of the Sea turns satellite imagery into legal evidence about the very existence of states. Islands are where every assumption that lets remote sensing work fails at once. Islands are smaller than the pixel, surrounded by ocean dynamics, persistently cloud covered, and outside the dense ground network that calibrates the satellite. The foundation model era amplifies the problem. The pretraining archives sample continents more heavily than oceans with islands, and the model's confidence is highest where the discipline has most decisively decided what counts. The artificial intelligence shift may therefore widen the island and continent capability gap before narrowing it. Slide 23 returns to this point with the foundation models named.",
    sources: ["UNCLOS Article 121", "SRTM mission technical documentation"],
    connects: ["Slide 23 returns to the foundation model amplification of the island gap"],
  },

  { n:11, part:"T1", t:"18:30", title:"RADARSAT Constellation Mission",
    visual:"rcm",
    notes:[
      "Three identical C-band satellites at 592 kilometres altitude. Twelve-day individual repeat. Four-day exact constellation revisit. Up to four acquisitions per day in the Arctic.",
      "First operational mission with compact polarimetry as a primary imaging mode.",
      "Shabanov and colleagues, Remote Sensing of Environment 2024. The correlation between RCM-derived sea ice concentrations and Canadian Ice Service manual analyst charts, over August 2020 to July 2021, was 0.996.",
      "Jain and colleagues, Nature Communications 2024. Natural Resources Canada's TIIC algorithm on Sentinel-2 and Landsat reached 97 per cent user accuracy and 98 per cent producer accuracy by the end of nine ten day windows during the 2023 fire season.",
      "RCM compact polarimetry burned area mapping with deep learning, in a December 2024 preprint, reaches F1 of 0.72 on seven 2023 to 2024 fires.",
      "Natural Resources Canada Emergency Geomatics Service publishes near real-time flood polygons from RCM, Sentinel-1, and RADARSAT-2 with approximately four hours of latency.",
    ],
    synthesis:
      "The RADARSAT Constellation Mission launched in November 2019 with three identical C band satellites at 592 kilometres altitude. The individual repeat is twelve days. The exact constellation revisit is four days. Acquisitions over Arctic latitudes can reach four per day. The mission is the first operational synthetic aperture radar to use compact polarimetry as a primary imaging mode, a configuration that captures polarimetric information at lower data rates than full quad polarisation while preserving the discriminative power that distinguishes ice types, vegetation states, and flood signatures." +
      "\n\n" +
      "The operational record is now substantial. Shabanov and colleagues report in Remote Sensing of Environment 2024 a correlation of 0.996 between RCM derived sea ice concentrations and Canadian Ice Service manual analyst charts across the August 2020 to July 2021 season. Jain and colleagues report in Nature Communications 2024 that Natural Resources Canada's TIIC algorithm achieved 97 per cent user accuracy and 98 per cent producer accuracy on Sentinel-2 and Landsat for the 2023 fire season. An RCM compact polarimetry burned area study using deep learning, in a December 2024 preprint, reaches F1 of 0.72 on seven fires from 2023 and 2024. Natural Resources Canada's Emergency Geomatics Service publishes near real time flood polygons from RCM, Sentinel-1, and RADARSAT-2 with approximately four hours of latency." +
      "\n\n" +
      "RCM sits inside a remarkable hardware moment, alongside NISAR launched July 2025, BIOMASS launched April 2025, and Sentinel-1C launched December 2024. Within this constellation set, RCM is the operational backbone, the senior C band asset with the strongest validated track record in Canadian remote sensing and one of the strongest in any national portfolio worldwide.",
    sources: ["Shabanov et al. 2024, Remote Sensing of Environment", "Jain et al. 2024, Nature Communications", "NRCan EGS operational documentation"],
    connects: ["Slide 12 names the Tuktoyaktuk gap that this instrument could close", "Slide 24 places RCM in the wider SAR timeline"],
  },

  { n:12, part:"T1", t:"22:00", title:"Tuktoyaktuk Island, a Canadian gap",
    visual:"tuk-gap",
    notes:[
      "Tuktoyaktuk Island, in the Beaufort Sea, in Inuvialuit territory, is eroding at approximately two metres per year.",
      "Pelly Island, nearby, can lose forty metres of coast per summer.",
      "The community is actively confronting whether to relocate. There is a federal coastal protection program in place.",
      "Community-led monitoring includes Deva-Lynn Pokiak's time-lapse cameras, documented through Natural Resources Canada, and the SmartICE program, which expanded from a pilot to 24 community locations across Inuit Nunangat between 2020 and 2021, with significant federal investment under the Climate Change Preparedness in the North Program and the Coastal Environmental Baseline Program.",
      "To my knowledge as of this spring, there is no peer-reviewed RCM-specific Tuktoyaktuk shoreline change paper. The instrument that achieves 0.996 correlation against analyst charts for sea ice concentration has not, in the published literature, produced a community-specific erosion baseline for the Inuvialuit community most acutely affected.",
      "This is a gap that this room can fill. I name it not as criticism but as opportunity. The instrument is here, the community-led partner exists, the funding is in place, the science is doable.",
    ],
    synthesis:
      "Tuktoyaktuk Island lies in the Beaufort Sea within Inuvialuit territory and is eroding at approximately two metres per year. Pelly Island, nearby, can lose forty metres of coast in a single summer. The community is actively confronting the question of relocation under federal coastal protection programs. Community led monitoring is well established and well funded. The time lapse cameras documented by Deva-Lynn Pokiak through Natural Resources Canada provide ground level documentation of seasonal change. The SmartICE program has expanded from a pilot to 24 community locations across Inuit Nunangat between 2020 and 2021, with significant federal investment under the Climate Change Preparedness in the North Program and the Coastal Environmental Baseline Program." +
      "\n\n" +
      "The peer reviewed literature does not yet contain an RCM specific Tuktoyaktuk shoreline change study to my present knowledge. The instrument that achieves 0.996 correlation against analyst charts for sea ice concentration has not, in the published literature, produced a community specific erosion baseline for the Inuvialuit community most acutely affected. This is a gap that the room can fill, and I name it as opportunity rather than as criticism. The instrument is here. The community led partner exists, with its own protocols, its own observation regime, and its own authority. The funding architecture is in place. The collaboration that would close the gap is the kind the lecture argues for throughout. The satellite as a contributor to a knowledge product that the community authors, rather than the community as a validator of a product the satellite already owns. Slide 21 names the governance protocols, OCAP, CARE, and NISR, that determine the terms of that collaboration.",
    sources: ["SmartICE programme documentation, 24 locations 2020 to 2021", "Pokiak time-lapse documentation, NRCan"],
    connects: ["Slide 11 establishes the RCM operational capability that the gap could draw on", "Slide 21 names the governance protocols for the collaboration"],
  },

  { n:13, part:"T1", t:"23:30", title:"Taiwan typhoon track, the last mile is epistemological",
    visual:"typhoon",
    notes:[
      "The relationship between probability of damage and willingness to evacuate is not linear.",
      "Trust in the source, prior false alarms, household composition, place attachment, language access, the social capital of the neighbourhood, and the practicalities of where to go and with whom all intervene.",
      "This is sometimes called the last-mile problem. The framing concedes too much. The last mile is not a delivery problem. It is an epistemological one.",
      "Sheila Jasanoff, Designs on Nature 2005, calls these different civic epistemologies, the different ways societies generate, trust, and act on expert knowledge.",
      "The work of remote sensing for care, resilience, and community is not finished when the map is published. It begins there.",
    ],
    synthesis:
      "At the Taiwan Typhoon and Flood Research Institute I encountered the operational form of a problem that the rest of the lecture treats philosophically. The relationship between probability of damage from a typhoon and willingness to evacuate is not linear. Trust in the source, prior false alarms, household composition, place attachment, language access, the social capital of the neighbourhood, and the practicalities of where to go and with whom all intervene. The literature sometimes calls this the last mile problem, but the framing concedes too much. It implies that everything before the last mile is the responsibility of the discipline and everything within the last mile is the responsibility of someone else." +
      "\n\n" +
      "Sheila Jasanoff, in Designs on Nature 2005, calls these different civic epistemologies, the different ways societies generate, trust, and act on expert knowledge. The civic epistemology of Taiwan in the wake of repeated typhoon seasons is not the civic epistemology of Florida, or of Mozambique, or of the Philippines, even when the probability surface produced for them is technically identical. The implication for remote sensing for care, resilience, and community is direct. The work is not finished when the map is published. The work begins there, because the map is entering a different epistemic order whose rules the discipline did not write and cannot govern unilaterally. The four registers of multimodality, particularly the fourth, formalise this argument later in the companion site.",
    sources: ["Jasanoff 2005, Designs on Nature, civic epistemologies"],
    connects: ["Multimodality section register 4 formalises the epistemological argument"],
  },

  { n:14, part:"T2", t:"25:00", title:"The boundary layer, satellite, drone, ground, body, indoor",
    visual:"boundary-layer",
    notes:[
      "Three layers of heuristic, restated for emphasis.",
      "Physical. The sensor measures reflectance, backscatter, brightness temperature, phase, height. It does not measure flood, methane, or risk.",
      "Interpretive. The classifier or model takes the physical retrieval and assigns categories. The categories are imposed by an ontology that predates the present care question.",
      "Ethical. The category becomes a decision. The heuristic stack at the bottom and middle is now operating at the top of someone's life.",
      "The diagram in the companion site shows the literal altitudes: satellite at 700 kilometres, plane at 12 kilometres, boundary layer top at approximately 1 kilometre, drone at 120 metres, rooftops at 25 metres, body altitude at 1.4 metres, indoor and tunnel at minus 15 metres.",
      "The discipline matures when it stops pretending otherwise.",
    ],
    synthesis:
      "The atmospheric boundary layer is the lower kilometre or so of the troposphere, the thin shell of the atmosphere in which weather forms, pollution mixes, and bodies live, work, and breathe. It is also, in this lecture, the conceptual layer between satellite abstraction and lived consequence. The diagram in the companion site shows the literal and the figurative simultaneously. At the top of the figure sits the satellite at 700 kilometres altitude, abstracting the planet into a synoptic view. At the bottom sits the indoor space at minus fifteen metres in the M1 metro, with carbon dioxide at 1,693 parts per million. Between these extremes lie the drone at 120 metres, the rooftop at 25 metres, body altitude at 1.4 metres, and the surface the satellite calls surface." +
      "\n\n" +
      "The discipline's instruments are calibrated across this range with extreme unevenness. The satellite is exhaustively calibrated for what it sees. The drone is increasingly well calibrated for what it sees, with the caveat that drone work remains expensive and episodic. The body altitude layer where most public health stakes live is calibrated by Q-TRAK walks, by Breathe London style sensor networks, by SONYC acoustic networks, by Indigenous Guardians programs, and by SmartICE. The boundary layer is not a region of the atmosphere only. It is a region of institutional responsibility. The discipline's maturity will be measured by how reliably it staffs this layer with translators, integrators, witnesses, and community authors.",
    sources: ["Atmospheric boundary layer meteorology, standard reference"],
    connects: ["Slide 16 anchors the bottom of the diagram in the Lausanne walk", "Slide 25 names the Canadian institutions that could staff this layer at scale"],
  },

  { n:15, part:"T2", t:"27:00", title:"SOCODEVI, rain gauges and satellite precipitation",
    visual:"socodevi",
    notes:[
      "At SOCODEVI, the work was integrating ground based rain sensors with satellite precipitation products for smallholder agriculture.",
      "The textbook story is data assimilation. A Kalman filter logic, where each instrument has bias and variance, and the fusion improves both.",
      "The lived story is simpler. The satellite said one thing. The farmer's gauge said another. The farmer's neighbour's gauge said a third.",
      "The satellite product had been validated at continental scale and was not wrong, in its scale. But the answer to the question, did it rain enough on our parcel today to plant, required all three. And it required someone in the village to translate between them.",
      "The integration is not a Kalman filter. It is a person.",
      "The four registers of multimodality, developed in the companion site, formalise this observation. Classical multimodality fuses sensor streams. The deeper multimodality fuses ontologies, and ontologies do not fuse. They negotiate.",
    ],
    synthesis:
      "At SOCODEVI in West Africa the work was integrating ground based rain sensors with satellite precipitation products for smallholder agricultural insurance. The textbook story is data assimilation. A Kalman filter logic assigns each instrument a bias and a variance, and the fusion improves both. The lived story is simpler and more revealing. The satellite product said one thing. The farmer's gauge said another. The neighbour's gauge said a third. The satellite product had been validated at continental scale and was not wrong at its scale. The continental answer was simply not the answer the farmer needed, which was whether enough rain had fallen on that parcel today to commit to planting." +
      "\n\n" +
      "The integration that resolved this question was not a Kalman filter. It was a person, an agricultural extension officer in the village, who understood the satellite product's scale, the gauge's local meaning, the neighbour's calibration drift, the crop variety in question, and the planting calendar. The slide names a structural fact that the rest of the lecture builds on. When the ontology of the variable is stable, the Kalman filter is sufficient, and the discipline already has it. When the ontology is contested, when rain means millimetres in a gauge for one stakeholder and enough usable moisture for this crop variety on this parcel in the elder's calendar for another, the integrator is a person and the politics of the integration is the politics of whose ontology governs. The four registers of multimodality on the companion site formalise this argument, and the section will return to it when the lecture turns explicitly to ethics in Slide 19.",
    sources: ["SOCODEVI agricultural insurance project documentation"],
    connects: ["Multimodality section formalises the integration as register 4", "Slide 19 develops the counter-mapping consequence of the ontology argument"],
  },

  { n:16, part:"T2", t:"29:00", title:"TROPOMI tile against Q-TRAK walk, the entire walk fits inside one pixel",
    visual:"lausanne-pixel",
    notes:[
      "May 2019. With two classmates in the EPFL urban climate course taught by Silvia Coccolo and Dasaraden Mauree, I walked Lausanne with a Q-TRAK air quality monitor for four afternoons. The measurements were taken at body altitude, 1.4 metres.",
      "M1 metro peak: 1,693 ppm. Cars passing on Lausanne Flon: spikes of three to four hundred parts per million. Bushes in the Botanical Garden, under sun at optimal temperature: 368 ppm, which is below atmospheric background, because photosynthesis was outpacing respiration.",
      "Closed EPFL campus with no through traffic: lower than central Lausanne. Ouchy waterfront, with Lake Geneva as natural sink and dispersion engine: also lower.",
      "Sentinel-5P TROPOMI NO2 pixel covering the Lake Geneva basin: approximately 5 kilometres by 3.5 kilometres. The entire Lausanne footprint is roughly one pixel. The entire afternoon walk fits inside that single pixel.",
      "Three structural reasons remote sensing cannot do what the walk did. Vertical mismatch: column retrievals are weighted toward the lower troposphere but cannot resolve the bottom ten metres where bodies breathe. Indoor invisibility: remote sensing sees nothing through a roof or a tunnel. Temporal mismatch: the spike from a passing car is seconds long; satellite revisit is days.",
      "For carbon dioxide as a health question rather than a climate question, satellites are measuring the wrong thing.",
      "The institutional response now exists at city scale. Breathe London operates more than 350 sites with 60 community hosted sensors and is part of the 14 city Breathe Cities initiative.",
    ],
    synthesis:
      "In May 2019, in the EPFL urban climate course taught by Silvia Coccolo and Dasaraden Mauree, I walked Lausanne with two classmates and a Q-TRAK air quality monitor at body altitude over four afternoons. The M1 metro peak reading was 1,693 parts per million of carbon dioxide. Cars passing on Lausanne Flon produced spikes of three to four hundred parts per million. The bushes in the Botanical Garden under sun at optimal temperature read 368 parts per million, below atmospheric background, because photosynthesis was outpacing respiration. The closed EPFL campus with no through traffic registered values lower than central Lausanne. The Ouchy waterfront, with Lake Geneva as natural sink and dispersion engine, also read lower than the city core." +
      "\n\n" +
      "The Sentinel-5P TROPOMI nitrogen dioxide pixel covering the Lake Geneva basin is approximately 5 kilometres by 3.5 kilometres. The entire Lausanne footprint sits inside roughly one pixel. The entire afternoon walk fits inside that single pixel. Three structural reasons explain why remote sensing could not produce what the walk produced. The vertical mismatch is the first. Column retrievals are weighted toward the lower troposphere but cannot resolve the bottom ten metres where bodies breathe. The indoor invisibility is the second. Remote sensing sees nothing through a roof or through a tunnel, and the worst exposures of the walk were precisely in the spaces that remote sensing does not exist for. The temporal mismatch is the third. The carbon dioxide spike from a passing car is seconds long, and satellite revisit is days." +
      "\n\n" +
      "For carbon dioxide as a health question rather than a climate question, satellites are measuring the wrong thing. The Breathe London model demonstrates what the institutional response at city scale now looks like, with 350 sites, 60 community hosted sensors, and an architecture that integrates fixed monitoring, mobile monitoring, co located reference sites, and public dashboards. The reframed modality table in Slide 7 and the boundary layer schematic in Slide 14 both find their concrete instance here.",
    sources: ["EPFL urban climate course materials, Coccolo and Mauree", "Breathe London programme documentation", "Sentinel-5P TROPOMI mission specifications"],
    connects: ["Slide 9 introduces the 1,693 number", "Slide 14 places the walk inside the boundary layer schematic", "Slide 18 connects the walk to Rahm's meteorological urbanism"],
  },

  { n:17, part:"T2", t:"32:00", title:"The defaults indictment, shadow, cloud, speckle, bare land, edges",
    visual:"defaults",
    notes:[
      "Every introductory remote sensing course teaches a set of preprocessing defaults. We remove shadows. We mask clouds. We smooth speckle. We classify bare land as residual. We treat seasonality as interference. We suppress edges to clean polygons.",
      "From a community resilience perspective, every one of these defaults is a question asked from the wrong direction.",
      "The shade is the heat refuge. After Lytton, after the Vancouver heat dome, after the Montreal heat-vulnerability work that this room knows, we know that shade is public health infrastructure.",
      "The cloud is the rain. For monsoon agriculture, for snowpack on a watershed, for the moisture flux into a parched basin, the cloud is the resource, not the obstruction.",
      "The speckle is the surface. SAR speckle carries information about roughness, soil, ice texture. Filtering makes the image easier to look at; the price is information.",
      "The bare land is the meeting place. The residual class absorbs evacuation gathering points, refugee camp footprints before they become legible, sports fields, schoolyards, festival sites, sacred ceremonial spaces, weekly markets, the open lot where after the earthquake everyone agrees to meet.",
      "The edges are membranes. The satellite reads a fence as a binary line. Lived experience reads it as a membrane, with timing, with gaps, with surveillance shadows, with the rhythm of patrols.",
      "The data is fine. The defaults are the problem.",
    ],
    synthesis:
      "Every introductory remote sensing course teaches a set of preprocessing defaults. Shadows are removed. Clouds are masked. Speckle is smoothed. Bare land is classified as a residual category. Seasonality is treated as interference. Edges are suppressed in order to clean polygons. From a community resilience perspective, every one of these defaults is a question asked from the wrong direction. The shade is the heat refuge. After Lytton, after the Vancouver heat dome, after the Montreal heat vulnerability work that this room knows, shade is now understood as public health infrastructure. The cloud is the rain. For monsoon agriculture, for snowpack on a watershed, for the moisture flux into a parched basin, the cloud is the resource. The speckle is the surface. Synthetic aperture radar speckle carries information about roughness, soil texture, and ice. Filtering makes the image easier to look at, and the price is information." +
      "\n\n" +
      "The bare land is the meeting place. The residual class absorbs evacuation gathering points, refugee camp footprints before they become legible, sports fields, schoolyards, festival sites, sacred ceremonial spaces, weekly markets, and the open lot where after the earthquake everyone agrees to meet. The edges are membranes. The satellite reads a fence as a binary line, and lived experience reads it as a membrane, with timing, gaps, surveillance shadows, and the rhythm of patrols. Forensic Architecture under Eyal Weizman at Goldsmiths has built an entire discipline of counter forensic analysis around the gap between line and membrane. The data is fine. The defaults are the problem, because every preprocessing default contains a theory of what matters, and the inherited theories were not written with care work in mind.",
    sources: ["Forensic Architecture, Weizman, counter-forensic methodology"],
    connects: ["Slide 19 develops the counter-mapping consequence", "Slide 20 develops the dual use of the same imagery"],
  },

  { n:18, part:"T2", t:"34:00", title:"Taichung Central Park, meteorological urbanism",
    visual:"taichung",
    notes:[
      "Philippe Rahm, with the landscape architect Catherine Mosbach and the firm Ricky Liu and Associates, built a 67 hectare park in Taichung, Taiwan, that opened in 2020.",
      "The park is organised around three climatic paths: the coolest, the least humid, the least polluted.",
      "The trees are selected and located by their climatic function: cooling, drying, depolluting. The park's program is its atmosphere. Rahm calls this meteorological urbanism.",
      "The Lausanne CO2 map I just showed you is, in Rahm's vocabulary, a materials list.",
      "Remote sensing makes the city's atmosphere visible at one scale. Meteorological urbanism builds at the scale the body inhabits. Care work is what staffs the layer between them.",
      "Rahm's 2023 Climatic Architecture, Actar, develops the position in full. The companion site's Avenir tab proposes a Phase 1 Google Earth Engine methodology as the operational input to this kind of practice.",
    ],
    synthesis:
      "Philippe Rahm, with the landscape architect Catherine Mosbach and the firm Ricky Liu and Associates, completed Taichung Central Park in 2020. The park covers 67 hectares and organises itself around three climatic paths: the coolest, the least humid, and the least polluted. The trees are selected and located by climatic function. Cooling species, drying species, and depolluting species are deployed in spatial sequences that produce the three climatic experiences. The park's program is its atmosphere. Rahm calls this meteorological urbanism and develops it across Histoire naturelle de l'architecture and the 2023 Climatic Architecture published by Actar." +
      "\n\n" +
      "The relationship between Rahm's practice and the present lecture is direct. The Lausanne carbon dioxide map produced by the Q-TRAK walk in Slide 16 is, in Rahm's vocabulary, a materials list. Remote sensing makes the city's atmosphere visible at one scale, and meteorological urbanism builds at the scale the body inhabits. The work of care, resilience, and community is what staffs the layer between them. The Phase 1 Google Earth Engine methodology presented in the Avenir tab of the companion site is the operational form of that staffing. It is a reproducible Earth Engine workflow that produces an atmospheric inheritance report for any candidate site, intended as input to a designer working in Rahm's tradition.",
    sources: ["Rahm 2023, Climatic Architecture, Actar Publishers", "Rahm, Mosbach, Liu, Taichung Central Park, opened 2020"],
    connects: ["Slide 16 produces the materials list Rahm requires", "Avenir tab develops the Phase 1 GEE methodology"],
  },

  { n:19, part:"T3", t:"35:00", title:"Counter-mapping, dugouts, traplines, ice roads",
    visual:"counter-map",
    notes:[
      "In communities across northern Canada, in Indigenous communities, rural communities, small towns, there are bodies of water called dugouts. Sometimes ponds. In the standard land use and land cover classification, the Anderson scheme, MODIS Land Cover, CORINE, these are simply water. From a community resilience perspective, they are something quite specific. They are the local fire-suppression water source for a community without fire hydrants. They are the water that the helicopter scoops in a wildfire response. They are infrastructure rendered as wetland.",
      "Trapline cabins, in standard global building products: nothing, or shed. Ice roads in winter: absent from roads layers. Snow caches and traditional hunting structures: not in the ontology. Sacred sites and burial grounds: often deliberately not mapped, which is itself a sovereignty claim.",
      "Pastoral grazing, charcoal kilns, agroforestry: classified as shrubland. Refugia and evacuation gathering points for wildfires: invisible until you ask the community.",
      "The classifier sees what it was trained to see, and the training inherited the discipline's origins: military terrain analysis, resource extraction, cartographic survey, agricultural inventory. None of these origins is care work.",
      "Counter-mapping, a tradition going back to Nancy Peluso's 1995 paper on the forests of Kalimantan, Bernard Nietschmann's work with the Miskito of Nicaragua, and Mac Chapin's 2005 critique of conservation NGO mapping, is the practice of changing the question. In changing it, counter-mapping makes visible what the inherited workflow erases.",
      "Counter-mapping does not add data. It changes the ontology.",
    ],
    synthesis:
      "In communities across northern Canada, in Indigenous communities, rural communities, and small towns, there are bodies of water called dugouts. In the standard land use and land cover classification, in the Anderson scheme, in MODIS Land Cover, in CORINE, the dugout is simply water. From a community resilience perspective, the dugout is something quite specific. It is the local fire suppression source for a community without hydrants. It is the water that the helicopter scoops in a wildfire response. It is infrastructure rendered as wetland. Trapline cabins, in standard global building products, register as nothing or shed. Ice roads in winter are absent from roads layers. Snow caches and traditional hunting structures fall outside the ontology. Sacred sites and burial grounds are often deliberately not mapped, which is itself a sovereignty claim. Pastoral grazing, charcoal kilns, and agroforestry in West African landscapes register as shrubland. Refugia and evacuation gathering points for wildfires register as bare or open until the community is asked." +
      "\n\n" +
      "The classifier sees what it was trained to see, and the training inherited the discipline's origins. Military terrain analysis, resource extraction, cartographic survey, agricultural inventory. None of these origins is care work. Counter mapping, the tradition that runs from Nancy Peluso's 1995 paper on the forests of Kalimantan through Bernard Nietschmann's work with the Miskito of Nicaragua to Mac Chapin's 2005 World Watch critique of conservation NGO mapping, is the practice of changing the question. The technical product looks similar. The ontology is different, and the change of ontology makes visible everything the inherited workflow erases. Counter mapping does not add data. It changes what the data is about. The four registers of multimodality on the companion site formalise this argument as the fourth and most consequential register.",
    sources: ["Peluso 1995, Whose Woods Are These, counter-mapping Kalimantan", "Chapin 2005, A Challenge to Conservationists, World Watch Magazine", "Nietschmann on Miskito mapping"],
    connects: ["Multimodality register 4 formalises the ontology argument", "Slide 21 names the governance protocols that institutionalise it"],
  },

  { n:20, part:"T3", t:"38:00", title:"Surveillance and empowerment, the same Maxar tile",
    visual:"dual-use",
    notes:[
      "The same Sentinel-2 scene can be read for refugee camp population estimation by UNHCR and for forced displacement targeting by a military.",
      "The same Maxar tile documented Russian atrocities in Bucha in 2022 and informs Gaza operations today.",
      "The Decentralized Damage Mapping Group, Van Den Hoek at Oregon State, Scher at CUNY, Yin at Kent State, uses Sentinel-1 SAR coherence change detection to count damaged buildings in Gaza, conservatively, and only when the building is more than 99 per cent covered by damaged pixels.",
      "UNOSAT's October 2025 Comprehensive Damage Assessment, using Pléiades NEO and Maxar very high resolution optical, reports approximately 198,000 damaged or destroyed structures, approximately 81 per cent of all Gaza structures.",
      "Planet Labs has publicly acknowledged delaying their highest resolution Gaza imagery by 30 days, in their words, to reduce the potential for misuse and abuse.",
      "The resolution of an edge is itself a political variable.",
      "Forensic Architecture, under Eyal Weizman at Goldsmiths, has built an entire discipline of counter forensic analysis around the dual use gap, taking the same imagery used by states to surveil and turning it into evidence of state violence.",
    ],
    synthesis:
      "The same Sentinel-2 scene can be read for refugee camp population estimation by UNHCR and for forced displacement targeting by a military. The same Maxar tile documented Russian atrocities in Bucha in April 2022 and informs Gaza operations in 2024 and 2025. The Decentralized Damage Mapping Group, with Van Den Hoek at Oregon State, Scher at the City University of New York, and Yin at Kent State, applies Sentinel-1 synthetic aperture radar coherence change detection to count damaged buildings in Gaza, using a threshold above 99 per cent damaged pixels per building. UNOSAT's October 2025 Comprehensive Damage Assessment, using Pléiades NEO and Maxar very high resolution optical imagery, reports approximately 198,000 damaged or destroyed structures, approximately 81 per cent of all structures in Gaza. Planet Labs has publicly acknowledged delaying its highest resolution Gaza imagery by 30 days, in its own words to reduce the potential for misuse and abuse." +
      "\n\n" +
      "The resolution of an edge is itself a political variable. Forensic Architecture under Eyal Weizman at Goldsmiths has built a discipline of counter forensic analysis precisely around the dual use gap. The methodology takes the imagery used by states to surveil and turns it into evidence of state violence, often by recombining the satellite stream with cell phone footage, eyewitness testimony, audio analysis, ballistic forensics, and architectural reconstruction. The lesson for the room is structural. The valence of an instrument is not determined by the instrument. It is determined by who has access, who is interpreting, who has the authority to challenge an interpretation, and who has the standing to refuse a request. The same image protects and exposes. The governance is the difference.",
    sources: ["UNOSAT Comprehensive Damage Assessment, October 2025", "Decentralized Damage Mapping Group, Van Den Hoek et al.", "Planet Labs Gaza imagery delay statement", "Forensic Architecture, Weizman"],
    connects: ["Slide 17 introduces the edge as membrane that Forensic Architecture works", "Slide 21 names the governance protocols that determine the valence"],
  },

  { n:21, part:"T3", t:"40:30", title:"Indigenous data sovereignty, OCAP, CARE, NISR",
    visual:"governance",
    notes:[
      "OCAP, Ownership, Control, Access, and Possession, formulated by the First Nations Information Governance Centre.",
      "CARE, Collective benefit, Authority to control, Responsibility, Ethics, from the Global Indigenous Data Alliance, articulated in Carroll and colleagues 2020.",
      "NISR, the National Inuit Strategy on Research, from Inuit Tapiriit Kanatami, the de facto framework for any research in Inuit Nunangat.",
      "Local Contexts TK and BC Labels allow Indigenous communities to express conditions for access, attribution, sharing, and reuse that remain visible in digital infrastructures.",
      "These are not soft governance documents. They are the operative protocols for any remote sensing project that touches Indigenous territories, which, in Canada, is most projects.",
      "Some things should not be mapped. Sacred sites, burial grounds, sensitive cultural locations. Non-mapping is a methodology and a sovereign choice.",
      "Some things must be mapped, but by whom matters. SmartICE across 24 community locations in Inuit Nunangat is the institutional form. Indigenous Guardians programs across the country are the embodied form.",
    ],
    synthesis:
      "The acronyms OCAP, CARE, and NISR are not soft governance documents. They are operative protocols for any remote sensing project that touches Indigenous territories, which in Canada means most projects. OCAP, Ownership, Control, Access, and Possession, was formulated by the First Nations Information Governance Centre and addresses the conditions under which data and information about First Nations communities are collected, protected, used, and shared. CARE, Collective benefit, Authority to control, Responsibility, and Ethics, was articulated by the Global Indigenous Data Alliance in Carroll and colleagues 2020. It reframes data governance for Indigenous data around collective and community priorities and explicitly pairs with the more familiar FAIR principles. NISR, the National Inuit Strategy on Research, was set out by Inuit Tapiriit Kanatami and functions as the de facto framework for any research in Inuit Nunangat." +
      "\n\n" +
      "The Local Contexts initiative complements these frameworks with the TK Labels and BC Labels, which allow Indigenous communities to express conditions for access, attribution, sharing, and reuse that remain visible in digital infrastructures. Together these frameworks are the institutional realisation of the fourth register of multimodality, the recognition that different communities constitute different versions of what the data is about and have the authority to govern those constitutions. Some things should not be mapped. Sacred sites, burial grounds, sensitive cultural locations are governed by non mapping as a methodology and as a sovereign choice. Some things must be mapped, but by whom matters. SmartICE across 24 locations in Inuit Nunangat is one institutional answer. Indigenous Guardians programs across the country are the embodied form. North Australian savanna fire management, with 86 registered savanna fire projects as of June 2025, provides a parallel non Canadian instance of the same institutional logic.",
    sources: ["Carroll et al. 2020, CARE Principles, GIDA", "First Nations Information Governance Centre, OCAP", "Inuit Tapiriit Kanatami, NISR", "Local Contexts TK and BC Labels"],
    connects: ["Multimodality register 4 names this layer", "Slide 19 develops the counter-mapping consequence", "Slide 12 names a Canadian site for the collaboration"],
  },

  { n:22, part:"T3", t:"43:00", title:"Change detection as the technical apparatus of solastalgia",
    visual:"solastalgia",
    notes:[
      "Glenn Albrecht coined the term solastalgia in 2003. It names the distress caused by environmental change to one's home while one is still in it. The grief of watching the place you love become a different place.",
      "Change detection in remote sensing, the before and after pair, the time series, is, structurally, the technical apparatus of solastalgia.",
      "Glacier National Park repeat photography. The receding coastlines of southwestern Newfoundland. The vanishing wetlands of the Mississippi delta. The burn scars accumulating across the boreal year over year. The disappeared villages of climate displacement.",
      "The change detection map is not neutral measurement. It is documentation of loss. The before and after pair is a memorial structure.",
      "Community mapping, when it works, is not only a technical practice. It is a form of collective grief work. Mapping what we are losing. Mapping what we want to remember. Mapping what we want to preserve.",
      "The map as ritual. A way to come to terms with what is about to be lost forever, and to negotiate, collectively, what comes next.",
      "The Worldwide Soundscapes initiative inventories 416 acoustic datasets at 12,343 sites across terrestrial, marine, freshwater, and subterranean realms, asking what change sounds like alongside what change looks like.",
    ],
    synthesis:
      "Glenn Albrecht coined the term solastalgia in 2003 to name the distress caused by environmental change to one's home while one is still in it. The word fuses the Latin solacium for comfort and the Greek algia for pain. It is the grief of watching the place one loves become a different place without leaving it. Change detection in remote sensing, the before and after pair, the time series, is structurally the technical apparatus of solastalgia. Glacier National Park repeat photography, the receding coastlines of southwestern Newfoundland, the vanishing wetlands of the Mississippi delta, the burn scars accumulating across the boreal year over year, the disappeared villages of climate displacement all share a single structural property. They are documentations of loss." +
      "\n\n" +
      "The change detection map is not neutral measurement. The before and after pair is a memorial structure. Community mapping, when it works, is therefore not only a technical practice. It is a form of collective grief work. It maps what is being lost, what is to be remembered, what is to be preserved, and what is to be transformed. The map becomes a ritual, a way to come to terms with a loss in progress and to negotiate collectively what comes next. The acoustic register adds a parallel evidentiary track. The Worldwide Soundscapes initiative inventories 416 datasets at 12,343 sites across terrestrial, marine, freshwater, and subterranean realms, asking what change sounds like alongside what change looks like. The intergenerational rupture, the lost ceremony, the disappeared language for a place that no longer exists, these are the dimensions of change that no satellite can resolve and that community mapping, at its best, can hold.",
    sources: ["Albrecht 2003, solastalgia", "Worldwide Soundscapes initiative inventory", "Pijanowski et al. 2011, soundscape ecology"],
    connects: ["Slide 19 names the counter-mapping practice that gives the loss its register", "Slide 21 names the governance that preserves what is to be preserved"],
  },

  { n:23, part:"P3", t:"45:00", title:"Foundation models, Prithvi-EO-2.0, TerraMind, Clay, SatlasPretrain",
    visual:"foundation-models",
    notes:[
      "Prithvi-EO-2.0, from NASA and IBM, December 2024.",
      "TerraMind, from IBM and ESA and Forschungszentrum Jülich, April 2025. The first any to any generative multimodal Earth observation model.",
      "Clay, from the Clay Foundation, open weights. SatlasPretrain, from the Allen Institute.",
      "These are large pretrained models that learn rich spectral and temporal priors from billions of hectares of imagery, and then fine tune to specific tasks with two orders of magnitude less labelled data than traditional pipelines.",
      "What this changes for care and resilience work is real. Democratisation of analytic capability. Small humanitarian teams can fine tune to a specific damage assessment with hundreds of labels instead of training from scratch with tens of thousands. Multimodal fusion becomes default. Near real time analysis is operationally feasible.",
      "What it does not change is the heuristic stack. A foundation model is a heuristic engine whose failure modes are correlated and hard to characterise. A bias in pretraining propagates to every downstream task. The auditability problem deepens.",
      "The pretraining archives sample continents more heavily than oceans with islands. The training data overrepresents temperate North American and European urban form. The model's confidence is highest where the discipline has most decisively decided what counts.",
      "In the language of the four registers of multimodality, the foundation model compresses registers one and two at planetary scale while leaving registers three and four largely unaddressed.",
    ],
    synthesis:
      "The most consequential technical shift in remote sensing since 2023 is the foundation model. Prithvi-EO-2.0 from NASA and IBM launched in December 2024. TerraMind from IBM, ESA, and Forschungszentrum Jülich launched in April 2025 as the first any to any generative multimodal Earth observation model. Clay from the Clay Foundation provides open weights. SatlasPretrain from the Allen Institute is also open. These are large pretrained models that learn rich spectral and temporal priors from billions of hectares of imagery and then fine tune to specific tasks with two orders of magnitude less labelled data than traditional pipelines. The shift democratises analytic capability. Small humanitarian teams can now fine tune to a specific damage assessment with hundreds of labels rather than training from scratch with tens of thousands." +
      "\n\n" +
      "The shift does not change the heuristic stack. A foundation model is a heuristic engine whose failure modes are correlated and difficult to characterise. A bias in pretraining propagates to every downstream task. The auditability problem deepens because the model's confidence is highest where the discipline has most decisively decided what counts, and the pretraining archives sample continents more heavily than oceans with islands, temperate North American and European urban form more heavily than informal settlements, and the morphologies the discipline has long studied more heavily than the morphologies it has historically ignored. In the language of the four registers of multimodality, the foundation model compresses registers one and two at planetary scale while leaving registers three and four largely unaddressed. The result is an instrument that may widen the ontological gap before narrowing it.",
    sources: ["Prithvi-EO-2.0 release notes, NASA and IBM, December 2024", "TerraMind release notes, IBM ESA FZJ, April 2025"],
    connects: ["Slide 10 introduces the island and continent gap this slide amplifies", "Multimodality section names the four registers"],
  },

  { n:24, part:"P3", t:"48:00", title:"SAR missions, NISAR, Sentinel-1C, BIOMASS, RCM, commercial",
    visual:"sar-timeline",
    notes:[
      "NISAR, NASA and ISRO Synthetic Aperture Radar, launched 30 July 2025. The first operational L band and S band dual-frequency SAR. 242 kilometre swath. Twelve-day repeat. Pointing accuracy sufficient to detect land deformation rates as small as four millimetres per year.",
      "BIOMASS, from the European Space Agency, launched April 2025. The first space-based P-band SAR, designed for tropical forest biomass through canopy.",
      "Sentinel-1C closed the gap left by Sentinel-1B's 2021 failure, launched December 2024.",
      "ICEYE, Capella, Umbra. Commercial small-SAR constellations now offering sub-metre X band with sub-daily revisit. The economics of synthetic aperture radar have inverted in under a decade.",
      "RCM, the Canadian constellation, sits inside this transformation as one of its operational pillars. The work I described in Topic 1, on sea ice, wildfire, flood, and coastal monitoring, is the precedent for what NISAR will enable at a different scale.",
    ],
    synthesis:
      "The hardware moment in synthetic aperture radar is genuinely remarkable. NISAR, the NASA and ISRO Synthetic Aperture Radar, launched on 30 July 2025 as the first operational L band and S band dual frequency synthetic aperture radar. The mission delivers a 242 kilometre swath, a twelve day repeat, and pointing accuracy sufficient to detect land deformation rates as small as four millimetres per year. BIOMASS from the European Space Agency, launched April 2025, is the first space based P band synthetic aperture radar, designed for canopy penetrating biomass estimation in tropical forests. Sentinel-1C launched in December 2024 and closed the gap left by the 2021 failure of Sentinel-1B. The commercial small synthetic aperture radar constellations operated by ICEYE, Capella, and Umbra now offer sub metre X band imagery with sub daily revisit. The economics of synthetic aperture radar have inverted in under a decade." +
      "\n\n" +
      "The Canadian RADARSAT Constellation Mission sits inside this transformation as one of its operational pillars. The validation work on sea ice, wildfire, flood, and coastal monitoring described in Slide 11 is the precedent for what NISAR will enable at a different scale. The implication for care work is direct. All weather, day and night, planetary radar coverage is becoming routine. The question is no longer whether the data exists. The question is whether the interpretive and ethical layers of the pipeline can be staffed at the rate the data arrives.",
    sources: ["NISAR mission documentation, launched 30 July 2025", "BIOMASS mission documentation, ESA"],
    connects: ["Slide 11 establishes the RCM operational track record", "Slide 25 names the funding context"],
  },

  { n:25, part:"P3", t:"50:30", title:"Funding fragility, USAID, FEWS NET, NICFI, MethaneSAT",
    visual:"fragility",
    notes:[
      "USAID was dismantled in early 2025.",
      "FEWS NET, the Famine Early Warning Systems Network, went dark in February 2025.",
      "The NICFI program that provided free high-resolution tropical forest mosaics via Planet ended in January 2025.",
      "MethaneSAT, the methane super-emitter monitoring satellite, was lost in orbit in June 2025.",
      "The Decadal Survey priorities at NASA are under budget pressure. The Sentinel program continues at Copernicus, but the funding environment around it is tighter than it was.",
      "Canada's relative stability in remote sensing infrastructure is, in this moment, a global asset and a global responsibility. RCM is operational and well validated. The Canadian Space Agency is a Charter co-founder and active member. GHGSat, based in Montreal, is the leading commercial methane monitoring constellation in the world. Canadian leadership in NISAR validation is being built.",
      "The Indigenous Guardians, SmartICE, and the broader community-led monitoring ecosystem in Canada is, frankly, the strongest in the world.",
    ],
    synthesis:
      "The political backdrop of this hardware moment is fragile. USAID was dismantled in early 2025. FEWS NET, the Famine Early Warning Systems Network, went dark in February 2025. The NICFI programme that provided free high resolution tropical forest mosaics through Planet ended in January 2025. MethaneSAT, the methane super emitter monitoring satellite operated by the Environmental Defense Fund, was lost in orbit in June 2025. The Decadal Survey priorities at NASA are under budget pressure. The Sentinel programme continues at Copernicus, but the funding environment around it is tighter than it was in the previous decade." +
      "\n\n" +
      "Canada's relative stability in remote sensing infrastructure is, in this moment, both a global asset and a global responsibility. The RADARSAT Constellation Mission is operational and well validated. The Canadian Space Agency is a Charter founding member and active participant. GHGSat, based in Montreal, operates the leading commercial methane monitoring constellation in the world. The Canadian role in NISAR validation is being built. The Indigenous Guardians, SmartICE, and broader community led monitoring ecosystem in Canada is, in honest terms, the strongest in the world. The implication for this room is direct. If you are a researcher, a graduate student, a policy person, a humanitarian, an architect, or a journalist sitting in this audience, you are part of one of the few national remote sensing communities that has both the technical capacity and the institutional posture to staff the boundary layer at scale, in the next decade, with care.",
    sources: ["USAID dismantlement, early 2025", "MethaneSAT loss, June 2025", "Canadian Space Agency institutional documentation"],
    connects: ["Slide 11 describes the Canadian operational pillar", "Slide 26 closes on the responsibility this stability implies"],
  },

  { n:26, part:"P3", t:"53:00", title:"Bookend, return to the École d'Athènes",
    visual:"painting-bookend",
    notes:[
      "Plato and Aristotle. Both gestures collapsed into one instrument.",
      "The work of remote sensing for care, resilience, and community is the work of refusing to choose between hope and responsibility.",
      "The hope: that better information leads to better decisions, that AI and new SAR missions and better foundation models will let us see more, that what we can know we can use.",
      "The responsibility: that the people we are looking at have names, have sovereignty, have epistemologies of their own. That the body breathes 1,693 ppm in the metro and the satellite does not see it. That the cyclist beside the bus, the kid in the stroller, the elder in the heat island, the Inuvialuit family on Tuktoyaktuk Island, the Tuvaluan child whose elevation is uncertain by twice the maximum altitude of her country, these are the people whose lives our heuristics are operating on.",
      "The discipline is at its best when it staffs the boundary layer. Translators, integrators, witnesses, designers, counter-mappers, communities, and yes, satellites. All of these, together. None of them sufficient alone.",
    ],
    synthesis:
      "The closing returns to the Stanza della Segnatura. Plato and Aristotle. Both gestures collapsed into one instrument. The work of remote sensing for care, resilience, and community is the work of refusing to choose between hope and responsibility. The hope is real and necessary. Better information leads to better decisions. New synthetic aperture radar missions and foundation models will let the discipline see more than it has ever seen. What can be known can be used, and what can be used can serve. The responsibility is also real and irreducible. The people the discipline observes have names, have sovereignties, and have epistemologies of their own. The body in the M1 metro inhales 1,693 parts per million and the satellite does not see it. The cyclist beside the bus, the child in the stroller, the elder in the heat island, the Inuvialuit family on Tuktoyaktuk Island, the Tuvaluan child whose elevation is uncertain by twice the maximum altitude of her country, these are the lives the discipline's heuristics are operating on." +
      "\n\n" +
      "The discipline is at its best when it staffs the boundary layer. Translators, integrators, witnesses, designers, counter mappers, communities, and satellites, all of these together, none of them sufficient alone. Remote sensing without Plato loses the capacity to abstract, compare, anticipate, and model futures. Remote sensing without Aristotle loses its responsibility to the ground. The two gestures must remain together in one practice. The final sentence of the lecture is the sentence the room is asked to carry forward. The boundary layer is where care happens. Everything else is preparation or aftermath.",
    sources: ["Bloch 1959, Jonas 1979, Marot, the full opening dialectic"],
    connects: ["Slide 1 establishes the painting as the opening", "Annexes spine sentence formalises the closing line as the talk's compass"],
  },
];


// =======================================================================
// Modalities. The reframed modality table.
// =======================================================================

const MODALITIES = [
  {
    id: "optical", name: "Optical",
    instruments: "Landsat, Sentinel-2, Planet, Maxar, SkySat, WorldView",
    band: "Visible to short wave infrared, sun illuminated",
    care: "Where is the surface changing, and who is changing it?",
    visible: ["Deforestation fronts", "Refugee camp footprints", "Crop stress", "Post-disaster damage", "Urban expansion", "Coastline retreat"],
    invisible: ["Anything after dark", "Anything under cloud", "Anything under canopy", "The political economy that produced the surface change"],
    ground: ["OpenStreetMap with local attribution", "Ground photographs", "Household reports", "The Missing Maps stack"],
    accent: "ochre",
  },
  {
    id: "sar", name: "Synthetic aperture radar",
    instruments: "Sentinel-1, RCM, NISAR, ICEYE, Capella, Umbra, COSMO-SkyMed, BIOMASS",
    band: "Microwave, active illumination, all weather, day and night",
    care: "What is moving, sinking, flooding, breaking?",
    visible: ["Flood extent during cyclones", "Urban subsidence often tracking poverty", "Oil spills", "Sea ice for community resupply", "Conflict damage during siege", "Forest biomass through canopy"],
    invisible: ["The human meaning of detected motion", "The cause of deformation", "The lived experience of sinking"],
    ground: ["Testimony", "Oral history", "Household survey before and after", "Local cadastres", "Community-led ice monitoring"],
    accent: "lapis",
  },
  {
    id: "lidar", name: "LiDAR",
    instruments: "Airborne LiDAR, ICESat-2, GEDI, TLS systems",
    band: "Laser pulses, returns from canopy, ground, water column",
    care: "What does the terrain actually look like, beneath what hides it?",
    visible: ["Ground surface beneath forest canopy", "Building heights", "Archaeological earthworks", "Ice elevation", "Canopy structure"],
    invisible: ["Use of the terrain", "Tenure and access", "Cultural meaning of features revealed", "Histories that produced the visible morphology"],
    ground: ["Field survey", "Local knowledge of land use", "Archaeological ground truth", "Indigenous place naming"],
    accent: "moss",
  },
  {
    id: "thermal", name: "Thermal infrared",
    instruments: "Landsat TIRS, ECOSTRESS, ASTER, MODIS",
    band: "Long wave infrared, brightness temperature",
    care: "Who is being cooked, and where is the refuge?",
    visible: ["Urban heat islands", "Evapotranspiration stress", "Power plant cooling discharge", "Volcanic activity"],
    invisible: ["Indoor temperature", "Individual heat exposure", "Whether the cool patch is actually accessible"],
    ground: ["Wearable temperature monitors", "Household surveys", "Hospitalisation records", "Cooling centre attendance"],
    accent: "terra",
  },
  {
    id: "passive-mw", name: "Passive microwave",
    instruments: "SMAP, SMOS, AMSR-2",
    band: "Low frequency microwave emission",
    care: "How wet is the soil, and how dry the growing season ahead?",
    visible: ["Soil moisture at coarse scales", "Snow water equivalent", "Sea ice concentration", "Inundation under canopy"],
    invisible: ["Field-scale variability", "Irrigation practice", "Crop-specific stress"],
    ground: ["Soil moisture probe networks", "Smallholder rain gauges", "Agricultural extension reports"],
    accent: "lapis",
  },
  {
    id: "atmos", name: "Atmospheric chemistry",
    instruments: "TROPOMI, OCO-3, GOSAT, MOPITT, TEMPO, CO2M, MicroCarb",
    band: "Column retrievals, molecules in the column",
    care: "Where is the air being poisoned, and who breathes that air?",
    visible: ["NO2 over highways and refineries", "Methane super-emitters", "CO2 from megacities", "Wildfire smoke plumes"],
    invisible: ["Indoor air quality", "Cumulative exposure histories", "Ventilation patterns", "Body-altitude concentration"],
    ground: ["PurpleAir and low-cost sensor networks", "Health records", "Environmental justice mapping", "Q-TRAK walks"],
    accent: "terra",
  },
  {
    id: "altimetry", name: "Altimetry",
    instruments: "ICESat-2, Sentinel-3, SWOT, Jason-CS",
    band: "Pulse timing, sea, ice, lake, river surface height",
    care: "What is rising, sinking, draining, and at what rate?",
    visible: ["Ice sheet elevation change", "Sea level rise patterns", "Lake and reservoir levels", "River stage networks"],
    invisible: ["Local relative sea level", "Subsidence below the gauge", "What that rise costs a household"],
    ground: ["GLOSS tide gauges", "Community high water marks", "Insurance claims"],
    accent: "lapis",
  },
  {
    id: "gravimetry", name: "Gravimetry",
    instruments: "GRACE-FO, forthcoming Mass Change mission",
    band: "Time-varying gravity field",
    care: "Where is water disappearing from the planet's hidden ledger?",
    visible: ["Groundwater depletion in Punjab and the Central Valley", "Ice mass change", "Drought signatures at basin scale"],
    invisible: ["Anything finer than a basin", "Withdrawal against recharge attribution", "Whose well goes dry first"],
    ground: ["Piezometer networks", "Well drilling logs", "Farmer testimony"],
    accent: "moss",
  },
  {
    id: "night", name: "Night lights",
    instruments: "VIIRS DNB, SDGSAT-1",
    band: "Low light visible, anthropogenic emission",
    care: "Where is the grid on, off, conflicted, displaced?",
    visible: ["Power outages", "Conflict damage to infrastructure", "Gas flaring", "Urbanisation"],
    invisible: ["Whether the dark area is empty or hidden", "Light pollution costs to ecosystems", "Energy poverty distinct from displacement"],
    ground: ["Utility company outage data", "On the ground photographs", "Local accounts"],
    accent: "ochre",
  },
  {
    id: "hyperspectral", name: "Hyperspectral",
    instruments: "PRISMA, EnMAP, EMIT, CHIME (forthcoming)",
    band: "Hundreds of contiguous narrow bands",
    care: "What is this surface actually made of, at a molecular level?",
    visible: ["Mineral composition", "Methane plumes at scene scale via EMIT", "Crop biochemistry", "Water quality constituents"],
    invisible: ["Use and ownership of the resource identified", "Downstream extraction politics", "Local naming of the surface"],
    ground: ["Field spectroscopy", "Soil and rock samples", "Community land knowledge"],
    accent: "plum",
  },
];

// =======================================================================
// The four registers of multimodality. New section.
// This is the central argument bridging Plongée II and Plongée III.
// =======================================================================

const MULTIMODALITY_REGISTERS = [
  {
    n: "01",
    name: "Physics",
    domain: "Multimodality of wavelength and principle",
    maturity: "Mature, since the 1990s",
    color: "var(--lapis)",
    examples: "optical, synthetic aperture radar, LiDAR, thermal infrared, passive microwave, hyperspectral, atmospheric chemistry, gravimetry, acoustic, magnetic",
    formalised: "Ehlers 1991, Pohl and van Genderen 1998",
    operation: "Different wavelengths and physical principles attending to the same underlying object",
    body: "The earliest and most thoroughly worked layer of multimodality. Different sensors physically interact with the world in different ways, and combining their outputs produces a richer estimate of the physical phenomenon than any single sensor could provide alone. The 2025 review by Samadzadegan, Toosi, and Dadrass Javan synthesises more than 950 papers and finds that precision agriculture was the first domain where this layer of fusion gained traction, before spreading into land use and land cover applications more broadly. This is the level at which classical data assimilation, Kalman filtering, and ensemble methods all operate.",
    limit: "The ontology of what is being measured is presumed stable.",
  },
  {
    n: "02",
    name: "Geometry",
    domain: "Multimodality of distance, altitude, and reference frame",
    maturity: "Mature, since the 1970s",
    color: "var(--lapis-2)",
    examples: "satellite, aircraft, drone, terrestrial LiDAR, ground sensor, body-altitude monitor, indoor instrument",
    formalised: "The Landsat era, 1972 onward, established satellite plus ground validation as standard practice",
    operation: "The same physical principle applied at different distances and reference frames",
    body: "The boundary layer stack from Topic 2 is geometric multimodality. The same phenomenon, carbon dioxide concentration, is measured at the satellite scale by TROPOMI, at the aircraft scale by GHGSat campaigns, at the ground station scale by surface networks, at body altitude by a Q-TRAK, and inside a vehicle by a passenger's lungs. Each scale answers a different question, and none answers the others. The work of integration across geometric scales is what staffs the chain that turns a planetary measurement into a local decision.",
    limit: "The ontology of the phenomenon is again presumed stable across scales, even where the meaning shifts dramatically.",
  },
  {
    n: "03",
    name: "Contributorship",
    domain: "Multimodality of who authors the data",
    maturity: "Expanding rapidly, since the mid-2000s",
    color: "var(--moss)",
    examples: "institutional sensor networks, citizen science, community mapping, complaint streams, oral observation, participatory sensing",
    formalised: "Burke and colleagues 2006 articulated participatory sensing for mobile devices. Mazumdar and colleagues 2017 framed citizen science as an Earth observation complement.",
    operation: "Different humans, with different relationships to place and authority, author the data streams",
    body: "Where the boundary layer becomes social. eBird receives more than one hundred million bird sightings annually and combines them with NASA, NOAA, and USGS imagery to produce status and trends products at 27 by 27 kilometre resolution. The Worldwide Soundscapes initiative inventories 416 passive acoustic datasets across 12,343 sites with 351 collaborators. The Humanitarian OpenStreetMap Team reports mapping in areas home to 933.6 million people and 46 disaster responses in its most recent impact period. Copernicus Emergency Management Service has logged 877 emergency response activations. Breathe London runs more than 350 monitoring sites and has distributed sixty additional community sensors. SONYC has deployed more than 55 acoustic sensors across New York. Chandler and colleagues 2017 found that most Essential Biodiversity Variables are now monitored by citizens or communities at least in part.",
    limit: "The institutional question of who owns and validates the data remains open, and the ontological question of what the data is about remains presumed.",
  },
  {
    n: "04",
    name: "Ontology",
    domain: "Multimodality of how the world is constituted in the first place",
    maturity: "Recognised, formally institutionalised since the late 2010s",
    color: "var(--terra)",
    examples: "Indigenous knowledge, traditional ecological knowledge, embodied experience, qualitative observation, narrative, ceremony, refusal",
    formalised: "Berkes 2000 framed traditional ecological knowledge in adaptive management. CARE Principles for Indigenous Data Governance, GIDA 2019. OCAP, FNIGC. Local Contexts TK and BC Labels.",
    operation: "Different communities constitute different versions of what the data is about",
    body: "This is the level at which classical multimodality breaks. A Kalman filter assumes that each instrument is measuring the same underlying variable with different bias and variance. The assumption holds for optical, SAR, and a rain gauge measuring precipitation. The assumption fails the moment one of the streams is a different way of constituting what counts as precipitation in the first place. The farmer's gauge measures millimetres. The satellite product measures millimetres. The elder's observation, that the rain came late this year and the wrong kind, measures a relationship between water, season, soil, crop variety, and the calendar of planting that the gauge cannot represent, because the gauge's ontology has already decided that rain is a scalar quantity. Counter-mapping operates here. So does Indigenous data sovereignty. So does the question of what counts as evidence, ground truth, and validation.",
    limit: "Ontologies do not fuse. They negotiate. The integrator is no longer a mathematical procedure. It is a person, and a politics.",
  },
];

const MULTIMODALITY_HISTORY = [
  { era: "1970s",  stream: "Multi-sensor Earth observation fusion", note: "Continuous satellite EO begins with Landsat 1 in 1972. Satellite plus ground validation becomes the standard practice." },
  { era: "1990s",  stream: "Formal multisensor fusion literature", note: "Ehlers 1991 establishes the field. Pohl and van Genderen 1998 consolidates it with a defining review." },
  { era: "1990s",  stream: "Participatory and qualitative GIS",     note: "Critiques of GIS in the 1990s give rise to participatory GIS and qualitative geospatial methods." },
  { era: "1990s",  stream: "Acoustic monitoring lineages",          note: "Current global passive acoustic monitoring inventories include datasets from 1991 onward." },
  { era: "2000",   stream: "Traditional ecological knowledge in monitoring", note: "Berkes 2000 frames TEK as adaptive management, marking its entry into formal monitoring scholarship." },
  { era: "2006",   stream: "Participatory sensing on mobile devices", note: "Burke and colleagues articulate the concept explicitly." },
  { era: "2011",   stream: "Soundscape ecology synthesised",        note: "Pijanowski and colleagues 2011 synthesise soundscape ecology as a field." },
  { era: "2014",   stream: "Missing Maps founded",                   note: "British Red Cross, American Red Cross, Médecins Sans Frontières, and HOT begin the humanitarian community-mapping infrastructure." },
  { era: "2017",   stream: "Citizen science and EO formally linked", note: "Chandler and colleagues 2017 demonstrate biodiversity coverage. Mazumdar and colleagues 2017 frame citizen science as an Earth observation complement." },
  { era: "2019",   stream: "Indigenous data governance institutionalised", note: "CARE Principles for Indigenous Data Governance, GIDA. Strengthens OCAP, NISR, and Local Contexts TK and BC Labels." },
  { era: "2020s",  stream: "Multi-platform fusion mainstream",       note: "Satellite, drone, ground, and participatory streams are combined as default in research and operations." },
  { era: "2024",   stream: "Foundation models and ontological tension", note: "Prithvi-EO-2.0, TerraMind, Clay, SatlasPretrain compress register one and two while leaving registers three and four largely unaddressed." },
];

const ARGUMENT_BRIDGE = {
  technical:
    "From a technical point of view, what I have just described is multimodality. Combining different sensor streams into a richer picture.",
  political:
    "From an ethical and political point of view, it is something else. It is the recognition that different communities are not just providing different data. They are constituting different versions of what the data is even about.",
  hinge:
    "Counter-mapping does not add data. It changes the ontology.",
  close:
    "That move, from multimodal sensors to multimodal ontologies, is where ethics enters.",
};

const ONTOLOGY_PRINCIPLES = [
  {
    n: "01",
    title: "The Kalman filter is a person",
    body:
      "A Kalman filter is a mathematical procedure for combining measurements under the assumption that uncertainty is Gaussian, biases are stationary, and the underlying variable is fixed. A person is a procedure for combining measurements under the assumption that uncertainty is contextual, biases are political, the underlying variable is contested, and the integration produces an interpretation that is revisable in the face of new authority, not just new data. The person is the Kalman filter when ontologies are stable. The person is something else, a translator, an interpreter, an arbitrator, a witness, when ontologies are not.",
  },
  {
    n: "02",
    title: "Ground truth conceals an imperial hierarchy",
    body:
      "The phrase ground truth is doing enormous concealing work in remote sensing. Linguistically it sounds humble. Structurally it is imperial. It treats pixel-level data as knowledge, in-situ data as measurement, community data as observation, and Indigenous data as anecdote. The hierarchy is inverted from what an honest epistemology would produce. The Inuit family on Tuktoyaktuk Island has been observing that shoreline for generations; the satellite has been observing it since 2019. The Sahelian farmer has been planting that parcel for forty seasons; the satellite product was validated continentally last year.",
  },
  {
    n: "03",
    title: "Multimodality of ontology is the general case",
    body:
      "Classical multimodality has been concealing the general case by assuming all data flows into the same pixel grid. Indigenous data sovereignty is not a special case requiring additional ethical attention. It is the general case made visible. Once it is visible, every modality table, every fusion pipeline, every foundation model needs to be re-read in its light.",
  },
  {
    n: "04",
    title: "Validation must be reciprocal",
    body:
      "Community observations should not be the only modality expected to prove themselves. Sensor pipelines also need validation against lived conditions, language, local hazard categories, and culturally meaningful interpretations of change. SmartICE, eBird expert review, SONYC complaint analysis, and participatory air quality programs all show that hybrid validation works best when both human and instrument streams are open to revision.",
  },
  {
    n: "05",
    title: "Parallel evidentiary tracks, not forced commensuration",
    body:
      "Not every meaningful observation should be converted into a numerical feature. In many settings the right design is a linked system in which satellite, drone, acoustic, field, and qualitative observations are kept analytically distinct but associable through time, place, and provenance. This reduces epistemic loss and makes disagreement visible rather than disappearing it into a fused output.",
  },
];

// =======================================================================
// Operational examples of multimodal remote sensing in practice.
// New section, anchoring the argument in real institutions.
// =======================================================================

const OPERATIONAL_EXAMPLES = [
  {
    name: "SmartICE and SIKU",
    domain: "Arctic sea ice safety in Inuit Nunangat",
    modalities: "Satellite mapping, on-ice sensors, towed mobile sensors, community observations, app platform",
    contributors: "Inuit operators, elders, youth, SmartICE, Arctic Eider Society",
    metric: "Expanded from pilot sites to 24 locations in 2020 to 2021",
    body: "The institutional form of register four. The observing system, training, interpretation, and outputs were designed with communities around specific travel and safety needs, not by asking communities to contribute local data into a prebuilt technical pipeline.",
    accent: "lapis",
  },
  {
    name: "North Australian savanna fire management",
    domain: "Landscape to regional scale fire management in northern Australia",
    modalities: "Satellite fire scar mapping, carbon accounting tools, ranger observations, traditional burning knowledge",
    contributors: "First Nations fire knowledge, Indigenous ranger groups, government method frameworks",
    metric: "86 registered savanna fire projects as of June 2025",
    body: "Methods explicitly recognise First Nations burning knowledge and strategic early dry-season burning. The carbon accounting protocol is the institutional infrastructure that translates between traditional practice and global mitigation finance.",
    accent: "terra",
  },
  {
    name: "eBird Status and Trends",
    domain: "Global biodiversity monitoring",
    modalities: "Citizen observations, expert review, satellite imagery, geospatial covariates, machine learning",
    contributors: "Birders, Cornell Lab of Ornithology, NASA, NOAA, USGS",
    metric: "More than 100 million sightings annually. Trend maps at 27 by 27 kilometre resolution since 2012",
    body: "Demonstrates that community contributors can become primary authors of an Essential Biodiversity Variable, not merely validators of a state-owned product.",
    accent: "moss",
  },
  {
    name: "Worldwide Soundscapes",
    domain: "Global ecoacoustics",
    modalities: "Passive acoustic recorders, metadata inventories, collaborative online platform",
    contributors: "351 plus collaborators, biodiversity researchers worldwide",
    metric: "416 datasets, 12,343 sites, across terrestrial, marine, freshwater, and subterranean realms",
    body: "Demonstrates that acoustic streams are no longer fringe. They are now part of the planetary monitoring infrastructure, asking what change sounds like alongside what change looks like.",
    accent: "ochre",
  },
  {
    name: "Humanitarian OpenStreetMap Team",
    domain: "International disaster response and community mapping",
    modalities: "Satellite imagery, volunteer tracing, local OSM knowledge, curated humanitarian data packages, AI-assisted tooling",
    contributors: "Local OSM communities, global volunteers, humanitarian agencies",
    metric: "46 disaster responses, mapping in areas home to 933.6 million people. Morocco and Libya 2023: 220,000 plus buildings and 5,000 kilometres of roads",
    body: "The infrastructure that makes the chain of translators institutional. The Red Cross and Missing Maps work I lead is one segment of this larger network.",
    accent: "terra",
  },
  {
    name: "Copernicus Emergency Management Service",
    domain: "Continental to global disaster management",
    modalities: "Satellite mapping, geospatial data, provision for crowdsourced and social data integration",
    contributors: "European Commission Copernicus, emergency managers, crowdsourcing researchers",
    metric: "877 response, 87 preparedness, and 147 recovery activations",
    body: "The European counterpart to the Charter. Demonstrates that satellite-based disaster response now routinely integrates participatory and social data streams.",
    accent: "lapis",
  },
  {
    name: "Breathe London",
    domain: "Citywide air quality governance",
    modalities: "Fixed low-cost sensors, mobile monitoring, co-located reference sites, community-hosted sensors, public dashboards",
    contributors: "London government, Imperial College, community groups, schools, hospitals",
    metric: "More than 350 sites, 60 community-hosted sensors, part of the 14-city Breathe Cities initiative",
    body: "The Lausanne Q-TRAK walk done at city scale, with governance. Demonstrates that community air quality monitoring can be institutionalised without being reduced to validation of state monitoring.",
    accent: "terra",
  },
  {
    name: "SONYC",
    domain: "Urban noise monitoring in New York City",
    modalities: "Acoustic sensors, machine listening, 311 complaints, citizen science, analytics and visualisation",
    contributors: "NYU-led sensor network, city agencies, residents making complaints and annotations",
    metric: "More than 55 acoustic sensors deployed",
    body: "Combines subjective complaints with objective acoustic records. The 311 complaint is treated as a co-equal stream, not as noise to be filtered.",
    accent: "ochre",
  },
];

// =======================================================================
// Three deep dives, supplementary numbers and callouts.
// =======================================================================

const DIVES = {
  applications: {
    id: "applications", roman: "I", title: "Applications",
    sub: "Risk, early warning, disaster risk reduction",
    intro:
      "Start where remote sensing matters most existentially and most consistently fails, the small island. Move to the Canadian Arctic, where the instrument is here, the community is here, the funding is here, and a specific gap remains. End with Taiwan, where the last mile turns out not to be a delivery problem.",
  },
  integration: {
    id: "integration", roman: "II", title: "Integration and epistemology",
    sub: "Back to basics, three layers of heuristic",
    intro:
      "Three layers of heuristic. Physical, interpretive, ethical. Two career stories ground it: SOCODEVI rain gauges and a Q-TRAK walk through Lausanne. The walk produced a counter-map of urban air at body altitude. The defaults of the discipline are themselves the problem.",
  },
  ethics: {
    id: "ethics", roman: "III", title: "Ethics and politics",
    sub: "Counter-mapping, dual use, sovereignty, solastalgia",
    intro:
      "Start with the dugout that is also fire suppression. Walk to the migration fence read as a membrane. Sit with the dual use of the same Maxar tile. End with change detection as the technical apparatus of solastalgia, and community mapping as collective grief work.",
  },
};

const ISLANDS_FACTS = [
  { k: "≈4.5 m",      v: "Tuvalu's maximum elevation" },
  { k: "6 to 10 m",   v: "SRTM vertical root mean square error, the instrument's noise floor" },
  { k: "Article 121", v: "UNCLOS provision under which imagery becomes legal evidence of statehood" },
  { k: "All at once", v: "Islands fail every assumption that lets remote sensing work simultaneously" },
];

const RCM_FACTS = [
  { k: "0.996",       v: "RCM-derived sea ice against CIS analyst charts, Shabanov 2024" },
  { k: "97 / 98 %",   v: "User and producer accuracy, TIIC wildfire perimeter, Jain 2024" },
  { k: "F1 = 0.72",   v: "RCM compact polarimetry burned area with deep learning, December 2024 preprint" },
  { k: "≈4 hours",    v: "NRCan Emergency Geomatics Service flood polygon latency" },
  { k: "12 / 4 days", v: "Individual repeat against exact constellation revisit" },
  { k: "4 per day",   v: "Acquisitions over Arctic latitudes" },
];

const TUK_FACTS = [
  { k: "~2 m / year",   v: "Tuktoyaktuk Island shoreline retreat" },
  { k: "Up to 40 m",    v: "Pelly Island coast lost in one summer" },
  { k: "Community led", v: "Pokiak time-lapse cameras, SmartICE deployments" },
  { k: "Zero papers",   v: "No peer-reviewed RCM-specific Tuktoyaktuk shoreline change study, to my knowledge" },
];

// =======================================================================
// Defaults flip cards, Topic 2.
// =======================================================================

const DEFAULTS = [
  { default: "Remove shadow",            answer: "Shadow is heat refuge.",
    body: "After Lytton, after the Vancouver heat dome, shade is not image contamination. It is public-health infrastructure. The shaded suq, the ramada, the tarpaulin in the camp, the cool side of a wall at 2 p.m., the tree canopy above a bus stop: all are part of how people survive heat. A community-resilience reading of imagery does not automatically remove shadow. It asks when shadow is noise, and when shadow is shelter." },
  { default: "Mask cloud",               answer: "Cloud is moisture in motion.",
    body: "Cloud may obstruct optical classification, but cloud is also part of the water system being studied. For monsoon agriculture, snowpack formation, watershed recharge, storm development, and drought recovery, cloud is not merely missing data. It is evidence of atmospheric process. A care-oriented workflow asks whether the cloud should be masked, analysed, paired with radar, or treated as part of the phenomenon." },
  { default: "Smooth speckle",           answer: "Speckle is not only noise; it can be signal-bearing texture.",
    body: "SAR speckle is partly an interference effect, and filtering is often necessary. But the texture being smoothed may also carry information about roughness, ice condition, soil moisture, inundation, vegetation structure, or surface disturbance. The question is not whether speckle should never be filtered. The question is what scale of variation is being removed, and whether that variation matters to travel safety, flooding, subsidence, sea ice, or local interpretation." },
  { default: "Classify bare",            answer: "Bare ground may be social infrastructure.",
    body: "The residual \"bare\" class often absorbs spaces that matter precisely because they are open: evacuation gathering points, schoolyards, sports fields, refugee camp footprints before they become formalized, weekly markets, ceremonial grounds, temporary shelters, and the open lot where people agree to meet after an earthquake. A resilience reading does not treat bare ground as empty by default. It asks what the open surface is used for, by whom, and under what conditions." },
  { default: "Suppress edges",           answer: "Edges are membranes.",
    body: "The image may read a fence, shoreline, road, wall, wetland boundary, or camp perimeter as a line. Lived experience often reads the same feature as a membrane: with openings, timing, patrol rhythms, informal crossings, fear, negotiation, surveillance shadows, and changing degrees of access. Forensic Architecture built an entire visual practice around the difference between line and lived boundary. A community-facing analysis should not erase edges too quickly. It should ask what kind of relation the edge organizes." },
  { default: "Assign one class per pixel", answer: "The mixed pixel may be the whole place.",
    body: "A pixel is not a piece of ground. It is a measurement footprint. When an island, reef flat, shoreline settlement, wetland edge, road, house cluster, or evacuation route is smaller than the pixel, the sensor records a mixture rather than a single object. A small island can become part ocean, part reef, part vegetation, part cloud shadow, part wave foam, and part atmospheric effect inside one cell. The consequence is not only technical uncertainty. The community may be exposed, inhabited, and legally or politically significant while the pixel treats it as spectral mixture. In low-lying islands and atolls, the mixed-pixel problem can become a statehood, adaptation, and survival problem: the thing that matters most is smaller than the unit of measurement. The care reading asks for sub-pixel analysis, higher-resolution imagery, local mapping, field observation, tide and elevation data, and explicit uncertainty instead of pretending that one pixel equals one truth." },
  { default: "Resample everything to one grid", answer: "Alignment is not equivalence.",
    body: "Combining datasets often requires resampling, but a 10-metre optical pixel, a 30-metre Landsat pixel, a 1-kilometre MODIS product, and a coarse soil-moisture product do not become the same kind of evidence because they share a grid. Resampling can make layers stack neatly while hiding differences in sensor physics, spatial support, revisit time, and uncertainty. A responsible workflow keeps the scale of each layer visible and asks which decisions can actually be supported at that resolution." },
  { default: "Use the majority class",   answer: "The minority fraction may carry the risk.",
    body: "Majority rules make maps cleaner, but risk often lives in the minority part of a pixel or polygon: the few houses in the floodplain, the informal settlement at the edge of the city, the remaining wetland strip, the last shaded corridor, the small bridge that controls evacuation, the narrow coastal road, the single clinic, the only well. A resilience workflow asks whether the minority feature is operationally more important than the dominant class." },
  { default: "Remove outliers",          answer: "The outlier may be the event.",
    body: "Outliers may be sensor errors, but they may also be heat spikes, pollution plumes, flood peaks, fire ignitions, landslide scars, algal blooms, infrastructure failures, or moments of acute exposure. In risk work, rare values often matter because disasters are not averages. A care-oriented analysis does not keep every outlier blindly. It investigates whether the outlier is an artefact, an early warning, or the beginning of the story." },
  { default: "Report accuracy",          answer: "Accuracy is not the same as consequence.",
    body: "A classifier can be accurate overall and still fail the people most at risk. A rare class can be poorly mapped while the total accuracy remains high. A flood model can perform well across a region and still miss the street where evacuation fails. A heat map can identify the hottest surfaces and still ignore whether vulnerable residents can reach cooling. Community-resilience work needs accuracy, but also error geography: where the model fails, who is affected by the failure, and what decision depends on that class.",
    oldQ: "Is the model accurate?",
    newQ: "Accurate for whom, at what scale, for what decision, and with what consequences?" },
];

// =======================================================================
// Counter-mapping examples.
// =======================================================================

const COUNTER_MAP = [
  { official: "Water",          community: "Dugout, the fire suppression source",       where: "Hydrant-less northern community" },
  { official: "Shed or null",   community: "Trapline cabin",                              where: "Boreal traditional territories" },
  { official: "Absent",         community: "Ice road",                                    where: "Winter logistical corridor" },
  { official: "Absent",         community: "Snow cache and traditional hunting structure", where: "Inuit Nunangat" },
  { official: "Wetland or null", community: "Sacred or burial site, unmapped by design",   where: "Indigenous territories" },
  { official: "Shrubland",      community: "Pastoral grazing, charcoal kiln, agroforestry", where: "Sahel, West Africa" },
  { official: "Bare or open",   community: "Wildfire refugium, evacuation gathering point", where: "Saskatchewan, British Columbia interior" },
];

// =======================================================================
// Dual use.
// =======================================================================

const DUAL_USE = [
  { use_a: "UNHCR refugee camp population estimation", use_b: "Forced displacement targeting",          sensor: "Sentinel-2" },
  { use_a: "Bucha atrocity documentation, 2022",       use_b: "Gaza operational targeting",             sensor: "Maxar VHR" },
  { use_a: "Commercial high resolution sales",          use_b: "Forensic Architecture counter-forensics", sensor: "Maxar VHR" },
  { use_a: "Decentralized Damage Mapping Group, Gaza", use_b: "Operational silence",                    sensor: "Sentinel-1 SAR coherence" },
];

// =======================================================================
// Governance frameworks.
// =======================================================================

const GOV = [
  { name: "OCAP®", full: "Ownership, Control, Access, Possession",
    body: "First Nations Information Governance Centre. Data and information collected, protected, used, and shared under community authority." },
  { name: "CARE",  full: "Collective benefit, Authority, Responsibility, Ethics",
    body: "Global Indigenous Data Alliance, Carroll and colleagues 2020. Reframes data governance for Indigenous data around collective and community priorities. Pairs with FAIR." },
  { name: "NISR",  full: "National Inuit Strategy on Research",
    body: "Inuit Tapiriit Kanatami. The de facto framework for any research conducted in Inuit Nunangat." },
];

// =======================================================================
// Foundation models, SAR missions, fragility.
// =======================================================================

const FOUNDATION = [
  { name: "Prithvi-EO-2.0", org: "NASA and IBM",            date: "December 2024" },
  { name: "TerraMind",      org: "IBM, ESA, and FZJ",       date: "April 2025", note: "The first any to any generative multimodal Earth observation model" },
  { name: "Clay",           org: "Clay Foundation",         date: "Open weights" },
  { name: "SatlasPretrain", org: "Allen Institute",         date: "Open" },
];

const SAR_MISSIONS = [
  { name: "RCM",         org: "CSA",              when: "November 2019",   band: "C band, compact polarimetry", note: "The operational backbone for sea ice, fire, flood, coastal monitoring" },
  { name: "Sentinel-1C", org: "ESA, Copernicus",  when: "December 2024",   band: "C band",                       note: "Closed the gap left by Sentinel-1B's 2021 failure" },
  { name: "BIOMASS",     org: "ESA",              when: "April 2025",      band: "P band",                       note: "The first space-based P band, canopy-penetrating biomass" },
  { name: "NISAR",       org: "NASA and ISRO",    when: "30 July 2025",    band: "L and S dual band",            note: "242 kilometre swath, 12 day repeat, 4 mm per year deformation sensitivity" },
  { name: "ICEYE",       org: "Commercial",       when: "Expanding",       band: "X band",                       note: "Sub-metre resolution, sub-daily revisit" },
  { name: "Capella",     org: "Commercial",       when: "Expanding",       band: "X band",                       note: "Sub-metre, tasking on demand" },
  { name: "Umbra",       org: "Commercial",       when: "Expanding",       band: "X band",                       note: "Open data tier" },
];

const FRAGILITY = [
  { name: "USAID",                  status: "Dismantled",            when: "Early 2025", region: "Global" },
  { name: "FEWS NET",               status: "Dark",                  when: "February 2025", region: "Global food security" },
  { name: "NICFI",                  status: "Ended",                 when: "January 2025",  region: "Tropical forests" },
  { name: "MethaneSAT",             status: "Lost in orbit",         when: "June 2025",     region: "Methane super-emitters" },
  { name: "Decadal Survey, NASA",   status: "Under budget pressure", when: "2025 onward",   region: "United States Earth observation" },
  { name: "Copernicus",             status: "Continuing, tighter envelope", when: "Ongoing", region: "Europe" },
];

const CANADA_STABILITY = [
  { name: "RCM",                     note: "Operational, well validated, Arctic strong" },
  { name: "CSA",                     note: "Charter founding member, active participant" },
  { name: "GHGSat",                  note: "Montreal based. The leading commercial methane constellation" },
  { name: "Guardians and SmartICE",  note: "The strongest community-led monitoring ecosystem in the world" },
  { name: "NISAR validation",        note: "Canadian role in the build out being established" },
];

// =======================================================================
// Phase 1 GEE methodology, Rahmian atmospheric inheritance.
// New section presenting the deliverable companion to the talk.
// =======================================================================

const GEE_PHASE_1 = {
  title: "Phase 1, Regional atmospheric context",
  subtitle: "A Rahmian atmospheric inheritance report, fully implementable in Google Earth Engine",
  premise:
    "Before a building is sited, before a park is designed, before a community is asked to bear infrastructure, the surrounding atmosphere already disadvantages or favours the location. Phase 1 of a meteorological urbanism workflow asks the satellite to disclose that inheritance.",
  questions: [
    "Where does the regional atmosphere already disadvantage the site?",
    "Is the site in a thermal hot zone?",
    "Is the site in a chronic nitrogen dioxide plume?",
    "Is the site in a still air bowl with poor ventilation potential?",
    "How has the built-up density evolved over fifty years?",
  ],
  variables: [
    { name: "Land surface temperature", source: "Landsat TIRS, ECOSTRESS, MODIS",       grain: "30 m to 1 km", output: "Climatology, summer maxima, urban heat island intensity against rural reference" },
    { name: "NO2, CO, HCHO, CH4",        source: "Sentinel-5P TROPOMI",                   grain: "5 by 3.5 km",   output: "Annual, seasonal, weekday and weekend maps. Site value against regional baseline" },
    { name: "Column CO2",                source: "OCO-3, future CO2M and MicroCarb",       grain: "Variable",       output: "Baseline and plume detection where coverage allows" },
    { name: "NDVI, NDBI, NDWI",          source: "Sentinel-2, Landsat",                   grain: "10 to 30 m",    output: "Vegetation, built-up, and water indices over time" },
    { name: "Fifty-year change",         source: "Landsat archive, 1972 to present",      grain: "30 to 60 m",    output: "Decadal composites, change detection, urban growth" },
    { name: "Wind, atmospheric setting", source: "ERA5 Land hourly reanalysis",            grain: "9 km",           output: "Wind rose, calm-day frequency, ventilation potential, still air bowl diagnosis" },
    { name: "Built-up morphology",       source: "JRC GHSL Built Surface, Google Open Buildings", grain: "10 m and footprint", output: "Built fraction, building footprints, height where available" },
  ],
  output:
    "A structured Rahmian atmospheric inheritance report. For any site, a one-paragraph diagnosis on each axis: thermal hot zone yes or no, pollution plume yes or no, still air bowl quantified, fifty-year built-up trajectory quantified. Delivered as a PDF or HTML report, with maps, charts, and downloadable layers.",
  status:
    "Fully implementable. Every variable lives in the Google Earth Engine data catalogue. Worked example proposed for EPFL Lausanne with a 2015 to 2025 window, validated against the 2019 Q-TRAK ground truth.",
};

const GEE_PHASE_2 = {
  title: "Phase 2, Campus envelope and geometry",
  subtitle: "Building-by-building thermal, photometric, and microclimatic envelope analysis",
  doable_open: [
    "3D building geometry from Open Buildings 2.5D, national open data DSMs such as swissALTI3D, NRCan HRDEM, EuroDEM",
    "Sky view factor computed from any DSM, pure raster mathematics",
    "Solar radiation modelling, r.sun in GRASS or pvlib on the DSM, producing annual radiative load per façade and per outdoor surface",
    "Building shadow geometry, DSM plus solar geometry, hourly",
    "Wind shadow profile, qualitative, from DSM plus ERA5 prevailing winds",
    "Vegetation canopy structure, from GEDI and Sentinel-2 LAI proxies",
  ],
  needs_hardware: [
    "Sub-metre thermal façade imagery from a FLIR-equipped UAV",
    "Sub-centimetre photogrammetric 3D building model from drone flight",
    "Hyperspectral façade and canopy analysis from a drone-mounted hyperspectral sensor",
    "Terrestrial LiDAR for façade-level detail",
  ],
  practical:
    "Phase 2 done with open DSM, Open Buildings, GEDI, and ERA5 covers approximately 80 per cent of what a drone campaign would deliver, at zero hardware cost. The remaining 20 per cent of sub-metre façade thermal and sub-centimetre detail is the drone job, commissioned only after Phase 1 and Phase 2 open-data have identified which buildings deserve the flight.",
};

// =======================================================================
// Q&A landing zones, reading, bilingual register, time budget.
// =======================================================================

const QA_LANDING = [
  { q: "What about indoor air quality monitoring at scale?",
    a: "Pivot to PurpleAir and low-cost sensor networks, building management system integration, and the Breathe London 350 site precedent." },
  { q: "How do you handle dual-use risk in your Red Cross work?",
    a: "Pivot to governance, OCAP and CARE protocols, the validation chain, the Planet Labs thirty-day delay precedent, and the Forensic Architecture counter-forensic frame." },
  { q: "Is there really a Tuktoyaktuk RCM gap?",
    a: "Yes. The published literature does not contain a peer-reviewed RCM-specific Tuktoyaktuk shoreline change paper as of this spring. I am open to collaboration." },
  { q: "How does this scale to the rest of the discipline?",
    a: "Through the messy-middle frame, the chain of translators, and the integration methodology from Topic 2. The four registers of multimodality offer a structured way to audit any pipeline." },
  { q: "What about foundation model failures?",
    a: "Auditability, pretraining bias, the island and continent gap, and the heuristic-engine problem. A bias in pretraining propagates through every downstream task. The AI shift may widen the ontological gap before narrowing it." },
  { q: "Where do I read more?",
    a: "Bennett et al. 2022, Politics of Pixels. Braun 2021, More Accurate Less Meaningful. Lappe, Calovi, Winther 2026, View from Somewhere. Rahm 2023, Climatic Architecture. Carroll et al. 2020, CARE Principles. Berkes 2000 on traditional ecological knowledge. Peluso 1995 on counter-mapping." },
  { q: "How does the Phase 1 GEE methodology relate to the talk?",
    a: "It is the deliverable companion. Where the talk argues that remote sensing needs to enter the messy middle with care, Phase 1 is the worked example: a reproducible Earth Engine pipeline that produces a Rahmian atmospheric inheritance report for any candidate site." },
];

const READING = [
  { who: "Mia Bennett et al.",                year: 2022,    what: "Politics of Pixels, Progress in Human Geography 46(3)" },
  { who: "Andreas Braun",                      year: 2021,    what: "More Accurate, Less Meaningful, Progress in Physical Geography 45(5)" },
  { who: "Lappe, Calovi, Winther",             year: 2026,    what: "The View from Somewhere, Progress in Physical Geography" },
  { who: "Donna Haraway",                      year: 1988,    what: "Situated Knowledges, Feminist Studies 14(3)" },
  { who: "Philippe Rahm",                      year: 2023,    what: "Climatic Architecture, Actar Publishers" },
  { who: "Nancy Peluso",                       year: 1995,    what: "Whose Woods Are These, on counter-mapping in Kalimantan" },
  { who: "Mac Chapin",                         year: 2005,    what: "A Challenge to Conservationists, World Watch Magazine" },
  { who: "Eyal Weizman, Forensic Architecture", year: "ongoing", what: "Counter-forensic analysis as a discipline" },
  { who: "Glenn Albrecht",                     year: 2003,    what: "Solastalgia, the concept" },
  { who: "Sheila Jasanoff",                    year: 2005,    what: "Designs on Nature, civic epistemologies" },
  { who: "Fikret Berkes",                      year: 2000,    what: "Rediscovery of Traditional Ecological Knowledge as Adaptive Management" },
  { who: "Burke et al.",                       year: 2006,    what: "Participatory Sensing on mobile devices" },
  { who: "Mazumdar et al.",                    year: 2017,    what: "Citizen Science and Earth Observations" },
  { who: "Chandler et al.",                    year: 2017,    what: "Contribution of Citizen Science to Biodiversity Monitoring" },
  { who: "Carroll et al.",                     year: 2020,    what: "CARE Principles for Indigenous Data Governance, GIDA" },
  { who: "Pijanowski et al.",                  year: 2011,    what: "Soundscape Ecology, the synthesis paper" },
  { who: "Ehlers",                              year: 1991,    what: "Multisensor Image Fusion, the foundational paper" },
  { who: "Pohl and van Genderen",              year: 1998,    what: "Multisensor Image Fusion in Remote Sensing, the consolidating review" },
  { who: "Samadzadegan, Toosi, Dadrass Javan", year: 2025,    what: "A Critical Review of Multi-Sensor and Multi-Platform Fusion, 950 plus papers" },
];

const BILINGUAL = [
  { fr: "espérance",                                en: "hope, anticipatory consciousness, Bloch" },
  { fr: "responsabilité",                           en: "responsibility, the heuristic of fear, Jonas" },
  { fr: "École d'Athènes",                          en: "Raphael's fresco, 1509, Vatican" },
  { fr: "Histoire naturelle de l'architecture",     en: "Rahm's book and method, climatic urbanism" },
  { fr: "le juste milieu",                           en: "the messy middle, where observation must answer to the ground" },
];

const CUTS = [
  { when: "Reduce 1B",            how: "Drop the wildfire and flood stat lines paragraph" },
  { when: "Drop Taiwan typhoon",   how: "Saves approximately 90 seconds in Topic 1" },
  { when: "Drop SOCODEVI",         how: "Keep only Lausanne in Topic 2, saves approximately 90 seconds" },
  { when: "Shorten fragility",     how: "Reduce Part 3 list to one sentence" },
];

const EXPANDS = [
  { when: "Plus 30 seconds",       how: "Maxence and AI safety debates as aside in 1A" },
  { when: "Plus 30 seconds",       how: "'No One Is an Island' project in 1A" },
  { when: "Plus a second case",    how: "Indigenous data sovereignty, additional specific example" },
  { when: "Plus a failure case",   how: "Concrete foundation model bias failure in Part 3" },
  { when: "Plus 90 seconds",       how: "The four registers of multimodality, a full statement of the ontological argument" },
];

const BUDGET = [
  { sect: "1A, Plato, Aristotle, me",     target: "3 min",    words: 580,  notes: "Open with the painting, let it sit" },
  { sect: "1B, Red Cross and Missing Maps", target: "4 min",  words: 530,  notes: "Tighten if Q&A pressure" },
  { sect: "1C, Sector and 1693 seed",     target: "7 min",    words: 1050, notes: "Show modality table; do not read it" },
  { sect: "T1, Applications",              target: "10 min",   words: 1240, notes: "Slowest section, lots of numbers" },
  { sect: "T2, Integration",                target: "10 min",   words: 1250, notes: "Lausanne and TROPOMI is load bearing" },
  { sect: "T3, Ethics and politics",       target: "10 min",   words: 1180, notes: "Tighten first if running long" },
  { sect: "Part 3, Future and close",      target: "8 to 10 min", words: 990, notes: "Leaves 5 to 7 minutes for Q&A" },
];

// =======================================================================
// Career, disciplines, trainings, and relation to remote sensing.
// =======================================================================

const DISCIPLINES = {
  "health":         { label: "Health sciences",                color: "var(--terra)" },
  "geography":      { label: "Physical geography",             color: "var(--moss)" },
  "urban":          { label: "Urban and environmental systems", color: "var(--ochre)" },
  "geomatics":      { label: "Geomatics engineering",          color: "var(--lapis)" },
  "sociohydrology": { label: "Sociohydrology",                 color: "var(--lapis)" },
  "policy":         { label: "Environmental policy",            color: "var(--plum)" },
  "humanitarian":   { label: "Humanitarian GIS",                color: "var(--terra)" },
};

const RS_RELATIONS = {
  "operational": { label: "Operational RS",            color: "var(--terra)" },
  "modelling":   { label: "Hydrological modelling",    color: "var(--lapis)" },
  "gis":         { label: "GIS and web mapping",       color: "var(--moss)" },
  "etl":         { label: "Spatial data engineering",  color: "var(--lapis)" },
  "policy":      { label: "Policy and assessment",     color: "var(--plum)" },
  "community":   { label: "Community mapping",          color: "var(--terra)" },
  "fusion":      { label: "Sensor fusion, field",      color: "var(--ochre)" },
  "advocacy":    { label: "Advocacy",                   color: "var(--ochre)" },
};

const FORMATIONS = [
  {
    inst: "Collège André-Grasset", place: "Montréal", years: "CEGEP",
    cred: "DEC, Health Sciences",
    field: "Sciences de la santé",
    disc: "health",
    note: "The pre-medical baseline, a rigorous quantitative and life sciences grounding before the geography turn.",
  },
  {
    inst: "McGill University, Dent-P", place: "Montréal", years: "started",
    cred: "DMD, Dentistry program",
    field: "An interrupted starting point",
    disc: "health",
    note: "Body-scale exposure as a primary frame. The lens through which 1,693 ppm in the M1 metro later became a research question, not a curiosity.",
  },
  {
    inst: "McGill University", place: "Montréal", years: "BSc",
    cred: "BSc, joint major",
    field: "Physical Geography, Urban Studies, Interdisciplinary Life Sciences",
    disc: "geography",
    note: "The discipline where landscape, ecology, and city converge, and the first home of remote sensing as a method.",
  },
  {
    inst: "EPFL, École polytechnique fédérale de Lausanne", place: "Lausanne", years: "exchange",
    cred: "Exchange program",
    field: "Urban and Environmental Systems",
    disc: "urban",
    note: "Urban climate, environmental history, ordinary cities. The intellectual context of the Q-TRAK walk and the Marot, Bloch, Jonas frame.",
  },
  {
    inst: "Université Laval", place: "Québec", years: "BEng",
    cred: "BEng, Geomatics Engineering",
    field: "Geomatics including geodesy, photogrammetry, spatial databases, web mapping",
    disc: "geomatics",
    note: "The engineering of measurement. The discipline that lets a satellite signal become an annotated map.",
  },
];

const PRACTICES = [
  {
    year: "Jun to Jul 2017", inst: "Taiwan Typhoon and Flood Research Institute", place: "Taipei",
    role: "Environmental data analyst, Typhoon and Flood Resilience",
    disc: ["geography"], rs: ["operational"],
    body: "Joined the Taiwan Tech Track program. Compiled landslide preparedness and vulnerability assessment data. The first encounter with remote sensing driven hazard surfaces meeting evacuation decisions.",
  },
  {
    year: "May to Aug 2021", inst: "Ministère des Ressources naturelles du Québec", place: "Québec",
    role: "Geomatician, 3D flood modelling",
    disc: ["geomatics"], rs: ["modelling", "gis"],
    body: "Three dimensional flood modelling for provincial water resource management. Where the engineering side of geomatics met the lived stakes of riverine communities.",
  },
  {
    year: "2021 to Apr 2023", inst: "Environment and Climate Change Canada", place: "AFOLU, Canada Wildlife Service",
    role: "Remote sensing analyst, Agriculture, Forestry, and Other Land Use",
    disc: ["geography", "geomatics"], rs: ["operational"],
    body: "Trained and optimised the Great Lakes St. Lawrence Lowlands Random Forest model for land cover and land use classification with segmented, object oriented data. Conducted 1990 to 2020 change detection and spatial analysis for major cities. Produced the methodological report and the thematic map series.",
    note: "The primary remote sensing role.",
  },
  {
    year: "May to Dec 2022", inst: "Department of National Defence", place: "2 CDSB Valcartier",
    role: "Military geomatician",
    disc: ["geomatics"], rs: ["gis"],
    body: "Military terrain analysis. One of the historical origins of land cover classification named explicitly in Topic 3. Seeing it from the inside informs the counter-mapping argument.",
  },
  {
    year: "Jun 2022 to Aug 2024", inst: "Université Laval", place: "Québec",
    role: "Research assistant, Mapping, Sociohydrology, Environmental Planning",
    disc: ["sociohydrology", "geomatics"], rs: ["modelling"],
    body: "Flood modelling in 2022 and water management in 2024. Sociohydrology as an integrative discipline: water systems analysed as coupled to human systems. The boundary layer move at the watershed scale.",
  },
  {
    year: "Jan to Apr 2023", inst: "Natural Resources Canada, CCMEO", place: "Canada Centre for Mapping and Earth Observation",
    role: "On-demand geomatician",
    disc: ["geomatics"], rs: ["etl"],
    body: "Automated an extract, transform, and load pipeline for normalising large format orthophotos. Integrated transactional annotation management against a PostGIS database. Drafted a Tippecanoe and Mapbox Tiling Service proof of concept for batch image processing and tile visualisation.",
  },
  {
    year: "May to Aug 2023", inst: "SOCODEVI", place: "Québec, West Africa programmes",
    role: "Geomatician, agricultural insurance in Africa",
    disc: ["geomatics"], rs: ["fusion", "operational"],
    body: "The integration story behind Slide 15. Satellite precipitation products meeting smallholder ground gauges. Validation at continental against parcel scale. The integration is not a Kalman filter. It is a person.",
  },
  {
    year: "May to Dec 2023", inst: "Canada Energy Regulator", place: "Facilities Adjudication, West",
    role: "Environmental analyst",
    disc: ["policy"], rs: ["policy"],
    body: "Compiled and analysed CER regulated projects to standardise environmental conditions for new energy infrastructure builds. Revised internal guidance for environmental assessment with a focus on greenhouse gas emissions. Visualised and analysed incidents data.",
  },
  {
    year: "Jan to Apr 2024", inst: "CIRNAC", place: "Crown-Indigenous Relations and Northern Affairs Canada",
    role: "Water resources policy researcher",
    disc: ["policy", "sociohydrology"], rs: ["policy"],
    body: "Policy research at the intersection of Indigenous rights, environmental governance, and water. The institutional location of the OCAP, CARE, and NISR concerns surfaced in Topic 3.",
  },
  {
    year: "Aug 2024 to present", inst: "Canadian Red Cross", place: "Montréal",
    role: "National Community Mapping Lead, GIS and Information Management",
    disc: ["humanitarian", "geomatics"], rs: ["community"],
    body: "Community mapping portfolio. Missing Maps activations for Sudan, the Democratic Republic of the Congo, Madagascar after Cyclone Chido, Saskatchewan wildfire and water source mapping, and Atlantic coastal adaptation. Member of the MapSwipe governance body.",
    note: "The current node.",
  },
];

const SERVICE = [
  { who: "UN MGCY", role: "Global Focus Point, Decent Jobs and Sustainable Economies", years: "Jan 2024 to present" },
  { who: "UN MGCY", role: "Thematic Focal Point, SDG 8 Green Jobs",                     years: "Oct 2018 to Oct 2019" },
];

const LANGUAGES = [
  { l: "English",                              level: "native, bilingual" },
  { l: "Français",                             level: "native, bilingual" },
  { l: "Chinese, Simplified and Traditional", level: "native, bilingual" },
  { l: "Español",                              level: "professional working" },
  { l: "Japanese, 日本語",                      level: "limited working" },
];

const CERTS = [
  "Spatial Data Science, The New Frontier in Analytics",
  "Photoshop CC for Planners",
];

// =======================================================================
// Painting figures, perspectives, change four ways, visibility pairs,
// counter-mapping questions, section claims, UNDRR risk quartet.
// =======================================================================

const PAINTING_FIGURES = {
  plato: {
    name: "Plato",
    side: "left",
    color: "var(--lapis)",
    subtitle: "Plato, index finger pointing upward",
    holds: "Timaeus",
    keyIdea: "Cosmic order, mathematical pattern, intelligibility",
    reading: { thinker: "Ernst Bloch", fr: "espérance", desc: "the principle of hope" },
    prose: "Plato's upward gesture gives remote sensing its reach. Read through Bloch, hope is not optimism; it is anticipatory consciousness, the ability to perceive in the present what is not yet fully visible or realized. For remote sensing, this is the power to look beyond the immediate: to detect patterns across scale, time, and system, and to imagine futures that are still open to intervention.",
    remoteSensing: "The satellite view, the planetary archive, predictive modelling, change detection, scenario-building, and the capacity to see Earth as an interconnected system.",
  },
  aristotle: {
    name: "Aristotle",
    side: "right",
    color: "var(--terra)",
    subtitle: "Aristotle, palm extended toward the ground",
    holds: "Nicomachean Ethics",
    keyIdea: "Practical judgment, consequence, ethical action",
    reading: { thinker: "Hans Jonas", fr: "responsabilité", desc: "the principle of responsibility" },
    prose: "Aristotle's horizontal gesture gives remote sensing its obligation. Read through Jonas, responsibility is not caution for its own sake; it is the duty to anticipate the possible harms of technological power and to remain answerable to those affected, including future generations. For remote sensing, this means that every image, model, and map must return to the ground through validation, context, consent, and consequence.",
    remoteSensing: "Fieldwork, ground truthing, local and Indigenous knowledge, participatory mapping, social vulnerability analysis, emergency response, and decisions that affect places, services, futures, and lives.",
  },
};

const FIVE_PERSPECTIVES = [
  {
    id: "sky",
    name: "Sky-eye",
    sub: "abstraction, distance, pattern, anticipation",
    contributes: "Scale, repetition, synoptic comparison, change detection",
    sees: [
      "flood extent", "wildfire scars", "shoreline erosion",
      "land cover change", "vegetation stress", "building exposure",
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
    contributes: "What the satellite cannot reach: micro scale, sub canopy, indoor, body altitude",
    sees: [
      "rainfall", "river height", "soil moisture", "air quality",
      "CO2", "temperature, humidity, wind", "water quality",
      "seismic and acoustic signals",
    ],
    color: "var(--moss)",
    glyph: "●",
    affinity: "in situ",
    note: "SOCODEVI. The satellite said one thing, the farmer's gauge said another, the neighbour's gauge said a third.",
  },
  {
    id: "community",
    name: "Community",
    sub: "situated knowledge",
    contributes: "What no data layer encodes: trust, memory, informal assets, relationships",
    sees: [
      "which road floods first", "which route is officially open but practically unsafe",
      "which households are isolated", "who lacks transport",
      "where people gather", "where informal assets exist",
      "which warnings are trusted", "where past disasters are remembered",
      "which places matter beyond their land cover class",
    ],
    color: "var(--terra)",
    glyph: "◆",
    affinity: "place",
  },
  {
    id: "embodied",
    name: "Embodied",
    sub: "exposure as lived experience",
    contributes: "The bottom ten metres of the atmosphere, body altitude",
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
    note: "Q-TRAK. For carbon dioxide as a health question rather than a climate question, satellites are measuring the wrong thing.",
  },
  {
    id: "institutional",
    name: "Institutional",
    sub: "maps become decisions",
    contributes: "The threshold at which a map becomes consequence",
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
      "land cover class", "building footprint", "informal settlement",
      "flood zone", "exposure surface", "road network", "vegetation index",
    ],
    body: "Each class is produced by an ontology designed for a purpose, usually a purpose that predates the care question you are now asking. Every preprocessing default contains a theory of what matters.",
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
      "infrastructure repair", "climate adaptation investment", "surveillance",
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
    examples: ["NDVI delta", "shoreline retreat", "burn scar polygon", "footprint loss", "albedo shift"],
  },
  {
    id: "sounds",
    name: "Sounds like",
    subject: "Acoustic",
    color: "var(--ochre)",
    glyph: "♪",
    question: "What does change sound like?",
    examples: ["bird call attrition", "soundscape silence", "traffic spectrum shift", "wildfire roar", "ice shelf groan"],
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
  { sensor: "high resolution optical", protects: "documents destroyed homes",       exposes: "exposes refugee families" },
  { sensor: "post disaster VHR",        protects: "maps damage for relief",          exposes: "exposes informal settlements" },
  { sensor: "wide area survey",          protects: "reveals illegal extraction",      exposes: "exposes Indigenous sacred sites" },
  { sensor: "Maxar tile",                 protects: "documents war crimes",            exposes: "informs operational targeting" },
  { sensor: "time series",                protects: "tracks shoreline loss",           exposes: "exposes politically vulnerable communities" },
];

const COUNTER_MAPPING_QUESTIONS = [
  "Whose land?", "Whose risk?", "Whose infrastructure?",
  "Whose memory?", "Whose categories?", "Whose map?", "Whose decision?",
];

const SECTION_CLAIMS = {
  applications:
    "Risk modelling needs remote sensing, but resilience modelling needs relationship. Hazard may be visible from the sky; vulnerability and capacity live in the messy middle.",
  integration:
    "The physical layer asks what the sensor measures. The interpretive layer asks what the signal is allowed to mean. The ethical layer asks what happens to people once that meaning becomes a decision.",
  multimodality:
    "Classical multimodality combines sensor streams. The deeper multimodality combines ontologies, and ontologies do not fuse. They negotiate. The work of remote sensing for care, resilience, and community is the work of staffing that negotiation.",
  ethics:
    "The ethics of remote sensing begins when visibility becomes consequence.",
};

const RISK_QUARTET = [
  { id: "hazard",        name: "Hazard",         tag: "what threatens",                  color: "var(--lapis)",  sky: true,  resilience: false },
  { id: "exposure",      name: "Exposure",       tag: "who or what is in the way",        color: "var(--ochre)",  sky: true,  resilience: false },
  { id: "vulnerability", name: "Vulnerability",  tag: "who is most harmed",                color: "var(--terra)",  sky: false, resilience: true },
  { id: "capacity",      name: "Capacity",       tag: "who can act, recover, refuse",      color: "var(--moss)",   sky: false, resilience: true },
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
  MULTIMODALITY_REGISTERS, MULTIMODALITY_HISTORY, ARGUMENT_BRIDGE, ONTOLOGY_PRINCIPLES,
  OPERATIONAL_EXAMPLES, GEE_PHASE_1, GEE_PHASE_2,
});
