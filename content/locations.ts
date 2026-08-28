// COMPLIANCE + SEO: each entry's h1/metaTitle/metaDescription/intro must stay
// meaningfully distinct in sentence structure (not the same template string
// with only the city swapped) — see instructions_and_brief.md's
// "no templated duplication" rule for /locations/[city] pages.

export interface CityLocation {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** Short line used in the trust-signals block, e.g. "Serving Campbell and surrounding areas." */
  servingLine: string;
}

export const cityLocations: CityLocation[] = [
  {
    slug: "los-gatos",
    name: "Los Gatos",
    h1: "Root-Cause Care, Right Here in Los Gatos",
    metaTitle: "Los Gatos Functional Medicine & Neurometabolic Care",
    metaDescription:
      "NeuroIntegrative Care is based in downtown Los Gatos, CA: functional medicine, functional neurology, and regenerative care for local patients who want an actual answer.",
    intro:
      "Our clinic sits on Santa Cruz Ave in downtown Los Gatos, a few steps from the plaza. For Los Gatos residents, that means no highway, no bridge traffic, just a short walk or drive to a practice built around finding what's actually driving a symptom, not managing it indefinitely.",
    servingLine: "Serving Los Gatos and the greater West Valley.",
  },
  {
    slug: "campbell",
    name: "Campbell",
    h1: "Root-Cause Neurometabolic Care for Campbell Patients, Minutes Away",
    metaTitle: "Functional Medicine Near Campbell, CA | NeuroIntegrative Care",
    metaDescription:
      "Campbell patients reach our Los Gatos clinic in about ten minutes via Hamilton Ave or Winchester Blvd: root-cause functional medicine and neurology, no referral needed.",
    intro:
      "From most of Campbell, it's a straight shot down Hamilton Ave or Winchester Blvd to our door in downtown Los Gatos. Call it ten minutes without traffic. Close enough that patients who've bounced between specialists in the Pruneyard area often make us their next stop rather than their last resort.",
    servingLine: "Serving Campbell and surrounding areas.",
  },
  {
    slug: "san-jose",
    name: "San Jose",
    h1: "San Jose Patients Drive a Few Exits for a Different Kind of Workup",
    metaTitle: "Root-Cause Care for San Jose Patients | NeuroIntegrative Care",
    metaDescription:
      "San Jose patients, from Willow Glen to Almaden, reach our Los Gatos clinic in 15–20 minutes for functional medicine, functional neurology, and regenerative care.",
    intro:
      "San Jose is a big city, so the drive varies: Willow Glen and Almaden Valley patients are 15 minutes out via 880/17, while those further north or east budget closer to 25–30. Either way, it's a familiar trip for patients who've already worked through San Jose's larger hospital systems without a clear answer and want a different approach.",
    servingLine: "Serving San Jose, Almaden Valley, Willow Glen, and Cambrian Park.",
  },
  {
    slug: "morgan-hill",
    name: "Morgan Hill",
    h1: "From Morgan Hill to Los Gatos: One Trip North for Root-Cause Answers",
    metaTitle: "Morgan Hill Patients: Functional Neurology & Root-Cause Medicine",
    metaDescription:
      "Morgan Hill patients travel roughly 25 minutes north on Highway 101/85 to our Los Gatos clinic for functional medicine, neurofeedback, and regenerative therapies.",
    intro:
      "Morgan Hill patients typically take 101 north to 85, arriving in about 25 minutes, a single, predictable trip rather than a string of specialist referrals scattered across the South Bay. Many make a morning of it: one visit, a full workup, and a plan before heading back south.",
    servingLine: "Serving Morgan Hill, Gilroy, and South Santa Clara County.",
  },
  {
    slug: "santa-cruz",
    name: "Santa Cruz",
    h1: "Over the Hill from Santa Cruz: Root-Cause Care Worth the Drive",
    metaTitle: "Santa Cruz Patients Travel Highway 17 for This Root-Cause Practice",
    metaDescription:
      "Santa Cruz patients cross Highway 17 (about 40 minutes) to reach our Los Gatos clinic: functional medicine, functional neurology, and regenerative therapies without the Bay Area referral maze.",
    intro:
      "Highway 17 is the one road most Santa Cruz patients already know by heart, and it's the same route that brings many of them to us, about 40 minutes, mountains and all. For patients who've exhausted what's available on the coast, that drive tends to be the shortest distance to an actual explanation.",
    servingLine: "Serving Santa Cruz, Scotts Valley, and the greater Monterey Bay area.",
  },
  {
    slug: "aptos",
    name: "Aptos",
    h1: "Aptos Patients Make the Highway 17 Trip for Answers Standard Care Missed",
    metaTitle: "Aptos, CA Patients | Functional Medicine in Los Gatos",
    metaDescription:
      "Aptos patients travel Highway 17 and Highway 1 (about 45–50 minutes) to our Los Gatos clinic for root-cause functional medicine, functional neurology, and regenerative care.",
    intro:
      "Coming from Aptos means Highway 1 into Highway 17, roughly 45 to 50 minutes depending on the hour, a longer trip than most, and one our Aptos patients tend to make only after the closer options ran out of ideas. It's a full day out, but for a root-cause workup instead of another round of symptom management, most say it's worth the miles.",
    servingLine: "Serving Aptos, Capitola, and Soquel.",
  },
];

export function findCityLocation(slug: string) {
  return cityLocations.find((c) => c.slug === slug);
}
