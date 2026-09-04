// Transcribed from the client-supplied "10-Week Neurological Support
// Curriculum" ("Brain Brightening") reference doc — condensed one-line-per-
// module summary form. Educational structure only, never imply
// self-directed medical treatment. Supersedes the prior two-track
// (Foundational + Advanced, formerly 12-week each) structure per client direction.

export interface CurriculumModule {
  num: string;
  title: string;
  body: string;
}

export const FOUNDATIONAL_CURRICULUM: CurriculumModule[] = [
  {
    num: "01",
    title: "Environmental Toxins",
    body: "Reduce heavy metals, plastics, pesticides, mold, air/water contaminants. Home audit + basic detox support.",
  },
  {
    num: "02",
    title: "Autoimmune Triggers",
    body: "Identify food, stress, infection & toxin drivers of neuroinflammation. Observe reactions; anti-inflammatory focus.",
  },
  {
    num: "03",
    title: "Brain-Supportive Diet",
    body: "Nutrient-dense Mediterranean-style pattern. Omega-3s, antioxidants, fiber, protein; stabilize blood sugar.",
  },
  {
    num: "04",
    title: "Stress Regulation",
    body: "Lower HPA activation & build autonomic balance. Breathwork, mindfulness, boundaries, limit overload.",
  },
  {
    num: "05",
    title: "Sleep Optimization",
    body: "Restorative sleep for glymphatic clearance & memory consolidation. Consistent times, dark/cool room, morning light.",
  },
  {
    num: "06",
    title: "Movement & Exercise",
    body: "Raise BDNF & cerebral blood flow. Aerobic most days + strength 2x/wk; yoga/walks; progress gradually.",
  },
  {
    num: "07",
    title: "Concussion / TBI Basics",
    body: "Energy crisis, inflammation, autonomic disruption. Relative rest → progressive activation; prevent re-injury.",
  },
  {
    num: "08",
    title: "Blood Sugar Stability",
    body: "Avoid crashes & inflammatory spikes. Protein + fiber + fat at meals; limit long gaps & sugar spikes.",
  },
  {
    num: "09",
    title: "Neurofeedback Integration",
    body: "Consistent training + lifestyle synergy. Schedule sessions; use Brain Snapshots; pair with foundations.",
  },
  {
    num: "10",
    title: "Sustainable Habits",
    body: "Consolidate into a lifelong system. Weekly checklist, monthly review, early-warning signs, accountability.",
  },
];

export const CURRICULUM_HOW_TO_USE =
  "Complete modules in sequence, one week of focus at a time, layering rather than overhauling. Track 2–3 metrics per module weekly. Consistency + clean foundations amplify neurofeedback results. Educational only: not medical advice. Consult qualified clinicians for personalized application, especially with medical conditions, concussion/TBI history, or multi-system issues.";
