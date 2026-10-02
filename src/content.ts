import { pickAreas, type Feature, type Hours, type Scene, type SectionKey } from "./lib";

export const BRAND = "RM Plumbing";
export const HOURS: Hours = null;
export const FLAP_IDLE = "";
export const SCENE: Scene = "leak";
export const VISIT_IMG = "/img/p9.jpg";
export const VISIT_ALT = "CERA fittings showroom visited by RM Plumbing Services";
export const FALLBACK_IMG = "/img/p8.jpg";
export const ORDER: SectionKey[] = ["reviews", "feature", "work", "map", "visit"];

export const PHONE = "+917602780146";
export const PHONE_DISPLAY = "76027 80146";
export const WA = "917602780146";
export const SHOP = { lat: 28.4198351, lon: 77.0775595 };
export const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${SHOP.lat},${SHOP.lon}`;

export const waLink = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

export const AREAS = pickAreas(["s57", "s56", "s62", "s65", "s52", "s54", "s43", "s50", "s45", "sl1"]);
export const DEFAULT_AREA = "s65";

/** Verbatim from Google reviews of the listing. */
export const REVIEWS = [
  "very helpful that he comes again even after giving services",
  "Perfect work done by the best plumber in town...!",
  "Rafiq bhai works very well",
  "Rafiq did plumbing work for our bathroom. I am happy with the work.",
  "You are very well organized",
];

export const RATINGS = [
  { stars: 5, count: 178 },
  { stars: 4, count: 0 },
  { stars: 3, count: 1 },
  { stars: 2, count: 0 },
  { stars: 1, count: 7 },
];

export const STATUSES = ["JOB BOOKED", "WORK DONE", "CHECKED AGAIN", "STILL DRY"];

export const FEATURE: Feature = {
  kind: "promise",
  title: { en: "The job isn't over when he leaves.", hi: "उनके जाने से काम ख़त्म नहीं होता।" },
  body: {
    en: "Most plumbers disappear once they are paid. RM's customers write about the opposite: Rafiq comes back.",
    hi: "ज़्यादातर प्लंबर पैसे लेकर ग़ायब हो जाते हैं। RM के ग्राहक उल्टा लिखते हैं: रफ़ीक भाई वापस आते हैं।",
  },
  quote: "very helpful that he comes again even after giving services",
  points: [
    { en: "Bathrooms, concealed lines and fittings, from first pipe to last tap.", hi: "बाथरूम, कंसील्ड लाइन और फ़िटिंग, पहले पाइप से आख़िरी टोंटी तक।" },
    { en: "Pumps, RO plants and rooftop tanks.", hi: "पंप, RO प्लांट और छत की टंकी।" },
    { en: "Open 24 hours from Sushant Lok III, Sector 57.", hi: "सुशांत लोक III, सेक्टर 57 से 24 घंटे।" },
  ],
  img: "/img/p11.jpg",
};

const en = {
  banner: "Concept preview made for RM Plumbing Services by LocalLift. Not live yet.",
  brandSub: "Plumbing, Sector 57",
  live: "Rafiq bhai, open 24 hours",
  shopLabel: "RM Plumbing",
  call: "Call RM Plumbing",
  callShort: "Call Rafiq",
  whatsapp: "WhatsApp",
  waHello: "Hi Rafiq bhai, I need plumbing work done.",
  heroTitle: ["A plumber who", "comes back."],
  heroProof: "4.8 stars from 186 Google reviews. Sushant Lok III, Sector 57. Open 24 hours.",
  drag: "Drag to turn the pipe",
  beats: [
    { title: "Organised from the first call.", body: "Reviewers describe the work as planned and tidy, not rushed.", quote: REVIEWS[4] },
    { title: "The bathroom, done properly.", body: "Concealed pipes, cisterns, mixers and WCs, fitted to stay sealed.", quote: REVIEWS[3] },
    { title: "And then he checks again.", body: "Customers notice when a plumber returns without being chased.", quote: REVIEWS[0] },
  ],
  googleReview: "Google review",
  distTitle: "Is Rafiq near you?",
  distBody: "Pick your area. Straight-line distance from Sushant Lok III, Sector 57.",
  distUnit: "km from Sector 57",
  distAsk: "Message Rafiq",
  distWa: (area: string) => `Hi Rafiq bhai, I'm in ${area}. When can you come?`,
  workTitle: "Inside the walls, on the roof.",
  workBody: "Every photo here is from RM Plumbing's own Google listing.",
  services: [
    { img: "/img/p6.jpg", title: "CPVC manifolds and lines", body: "Hot and cold distribution laid out cleanly." },
    { img: "/img/p2.jpg", title: "Wall chasing and concealed pipes", body: "Pipes taken inside the wall before tiling." },
    { img: "/img/p4.jpg", title: "Wall-hung WCs", body: "Concealed cisterns and wall-hung pans." },
    { img: "/img/p5.jpg", title: "Concealed mixers", body: "Shower and basin mixers set into the wall." },
    { img: "/img/p1.jpg", title: "Motors and pumps", body: "Booster pumps and motors fitted and repaired." },
    { img: "/img/p3.jpg", title: "RO plants", body: "Water purifier lines and plants installed." },
    { img: "/img/p12.jpg", title: "Rooftop pumps and tanks", body: "Overhead tank lines and pressure pumps." },
  ],
  revTitle: "186 reviews. 178 of them five stars.",
  revTags: "What customers mention most on Google",
  tags: [
    { label: "Work", n: 6 },
    { label: "Behaviour", n: 4 },
    { label: "Plumbing work", n: 2 },
  ],
  stars: "stars",
  visitTitle: "Find RM in Sector 57.",
  address: "Block C, Sushant Lok III, Sector 57, Gurugram",
  hours: "Open 24 hours, 7 days",
  pay: "",
  directions: "Directions",
  footer: "Concept by LocalLift for RM Plumbing Services, Gurugram. Photos and reviews from the business's Google listing.",
  langLabel: "Language",
};

const hi: typeof en = {
  banner: "यह LocalLift द्वारा RM प्लंबिंग सर्विसेज़ के लिए बनाया गया डेमो है। अभी लाइव नहीं है।",
  brandSub: "प्लंबिंग, सेक्टर 57",
  live: "रफ़ीक भाई, 24 घंटे खुला",
  shopLabel: "RM प्लंबिंग",
  call: "RM प्लंबिंग को कॉल करें",
  callShort: "रफ़ीक को कॉल",
  whatsapp: "व्हाट्सऐप",
  waHello: "नमस्ते रफ़ीक भाई, मुझे प्लंबिंग का काम करवाना है।",
  heroTitle: ["ऐसा प्लंबर जो", "वापस आता है।"],
  heroProof: "186 गूगल रिव्यू में 4.8 स्टार। सुशांत लोक III, सेक्टर 57। 24 घंटे खुला।",
  drag: "पाइप घुमाने के लिए खींचें",
  beats: [
    { title: "पहली कॉल से व्यवस्थित।", body: "ग्राहक लिखते हैं कि काम योजना से और सलीके से होता है, जल्दबाज़ी में नहीं।", quote: REVIEWS[4] },
    { title: "बाथरूम, सही तरीके से।", body: "कंसील्ड पाइप, सिस्टर्न, मिक्सर और WC, ऐसे फ़िट कि सील रहें।", quote: REVIEWS[3] },
    { title: "और फिर दोबारा जाँच।", body: "ग्राहक नोटिस करते हैं जब प्लंबर बिना पीछे पड़े लौटता है।", quote: REVIEWS[0] },
  ],
  googleReview: "गूगल रिव्यू",
  distTitle: "क्या रफ़ीक भाई पास हैं?",
  distBody: "अपना इलाका चुनें। सुशांत लोक III, सेक्टर 57 से सीधी दूरी।",
  distUnit: "किमी सेक्टर 57 से",
  distAsk: "रफ़ीक भाई को मैसेज करें",
  distWa: (area: string) => `नमस्ते रफ़ीक भाई, मैं ${area} में हूँ। आप कब आ सकते हैं?`,
  workTitle: "दीवार के अंदर, छत के ऊपर।",
  workBody: "यहाँ की हर फ़ोटो RM प्लंबिंग की अपनी गूगल लिस्टिंग से है।",
  services: [
    { img: "/img/p6.jpg", title: "CPVC मैनिफ़ोल्ड और लाइन", body: "गरम और ठंडे पानी की लाइन साफ़ तरीके से।" },
    { img: "/img/p2.jpg", title: "दीवार कटाई और कंसील्ड पाइप", body: "टाइल से पहले पाइप दीवार के अंदर।" },
    { img: "/img/p4.jpg", title: "वॉल-हंग WC", body: "कंसील्ड सिस्टर्न और वॉल-हंग पैन।" },
    { img: "/img/p5.jpg", title: "कंसील्ड मिक्सर", body: "शावर और बेसिन मिक्सर दीवार में।" },
    { img: "/img/p1.jpg", title: "मोटर और पंप", body: "बूस्टर पंप और मोटर फ़िट और मरम्मत।" },
    { img: "/img/p3.jpg", title: "RO प्लांट", body: "वॉटर प्यूरीफ़ायर की लाइन और प्लांट।" },
    { img: "/img/p12.jpg", title: "छत के पंप और टंकी", body: "ओवरहेड टंकी की लाइन और प्रेशर पंप।" },
  ],
  revTitle: "186 रिव्यू। 178 पाँच स्टार।",
  revTags: "गूगल पर ग्राहक सबसे ज़्यादा क्या लिखते हैं",
  tags: [
    { label: "काम", n: 6 },
    { label: "व्यवहार", n: 4 },
    { label: "प्लंबिंग का काम", n: 2 },
  ],
  stars: "स्टार",
  visitTitle: "सेक्टर 57 में पता।",
  address: "ब्लॉक C, सुशांत लोक III, सेक्टर 57, गुरुग्राम",
  hours: "24 घंटे, सातों दिन खुला",
  pay: "",
  directions: "रास्ता देखें",
  footer: "LocalLift द्वारा RM प्लंबिंग सर्विसेज़, गुरुग्राम के लिए कॉन्सेप्ट। फ़ोटो और रिव्यू गूगल लिस्टिंग से।",
  langLabel: "भाषा",
};

export const COPY = { en, hi };
