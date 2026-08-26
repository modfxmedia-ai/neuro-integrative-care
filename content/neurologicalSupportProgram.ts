// Transcribed from the client-supplied "Neurological Support Curricula —
// One-Page Summary" reference image. Educational structure only — the
// "Regenerative Overview" and "Therapeutic Fasting"/"Mold Abatement" modules
// are explicitly discussion/education-readiness items requiring medical
// oversight per the source doc; keep that framing intact, never imply
// self-directed medical treatment.

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
    title: "Gut-Brain Axis",
    body: "Support microbiome & gut-driven inflammation. Fiber diversity, fermented foods, address bloating.",
  },
  {
    num: "09",
    title: "Blood Sugar Stability",
    body: "Avoid crashes & inflammatory spikes. Protein + fiber + fat at meals; limit long gaps & sugar spikes.",
  },
  {
    num: "10",
    title: "Hydration & Electrolytes",
    body: "Support neuronal signaling. Consistent water + mineral-rich foods; limit dehydrators.",
  },
  {
    num: "11",
    title: "Neurofeedback Integration",
    body: "Consistent training + lifestyle synergy. Schedule sessions; use Brain Snapshots; pair with foundations.",
  },
  {
    num: "12",
    title: "Sustainable Habits",
    body: "Consolidate into a lifelong system. Weekly checklist, monthly review, early-warning signs, accountability.",
  },
];

export const ADVANCED_CURRICULUM: CurriculumModule[] = [
  {
    num: "01",
    title: "Self-Assessment & Baseline",
    body: "Multi-domain baseline (symptoms, lifestyle, prior labs/qEEG). Scoring systems & trigger mapping.",
  },
  {
    num: "02",
    title: "Memory Restoration",
    body: "Working/short-term/long-term/episodic memory strategies. Spaced retrieval, dual coding, sleep priority.",
  },
  {
    num: "03",
    title: "Therapeutic Fasting",
    body: "Time-restricted eating & metabolic flexibility for autophagy. Start 12–14 h; progress only with guidance.",
  },
  {
    num: "04",
    title: "Mold / Mycotoxin Abatement",
    body: "Source control, remediation, binders/detox support under guidance, air filtration, humidity control.",
  },
  {
    num: "05",
    title: "Complex Multi-System Conditions",
    body: "Map brain–immune–gut–hormone–autonomic interactions. Sequence interventions; avoid simultaneous overhaul.",
  },
  {
    num: "06",
    title: "Mitochondrial Optimization",
    body: "Cellular energy for recovery. Zone-2 movement, key cofactors via food, reduce inflammation/toxins.",
  },
  {
    num: "07",
    title: "Advanced Sleep & Chronobiology",
    body: "Architecture (deep/REM) + circadian tools. Morning light, evening blue-light control, consistency.",
  },
  {
    num: "08",
    title: "Autonomic / Polyvagal Regulation",
    body: "State flexibility toolkit. Extended exhales, safe engagement, grounding; pre-training regulation.",
  },
  {
    num: "09",
    title: "Cognitive Reserve & Dual-Task",
    body: "Novel learning + progressive dual-task challenge. Balance load with recovery to avoid overload.",
  },
  {
    num: "10",
    title: "Neurofeedback Optimization",
    body: "Goal-to-protocol mapping, data interpretation, coach collaboration. Consistency over frequent changes.",
  },
  {
    num: "11",
    title: "Regenerative Overview (Educ.)",
    body: "Literacy on peptides, targeted nutraceuticals, photobiomodulation. Discussion readiness only — medical oversight required.",
  },
  {
    num: "12",
    title: "Integration & Long-Term Monitoring",
    body: "Personal protocol summary, monthly scorecard, relapse plans, professional re-evaluation cadence.",
  },
];

export const CURRICULUM_HOW_TO_USE =
  "Complete foundational modules first (or in parallel). Advanced modules require stable basics and professional supervision for fasting, mold recovery, complex cases, and regenerative topics. Track metrics weekly. Consistency + clean foundations amplify neurofeedback results. Educational only — not medical advice. Consult qualified clinicians for personalized application, especially with medical conditions, concussion/TBI history, or multi-system issues.";
