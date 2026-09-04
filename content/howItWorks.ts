// Full transcription of the client-supplied "10-Week Neurological Support
// Curriculum" ("Brain Brightening") reference doc. Educational structure
// only — never imply self-directed medical treatment. This single 10-week
// curriculum supersedes the prior two-track (Foundational + Advanced,
// formerly 12-week each) structure per client direction.

export interface CurriculumModule {
  num: string;
  title: string;
  focus: string;
  objectives: string[];
  actions: string[];
  trackingLabel?: string;
  tracking?: string;
  calloutLabel?: string;
  callout?: string;
  noteLabel?: string;
  note?: string;
}

export const CURRICULUM_TAGLINE =
  "A Progressive Lifestyle Foundation Program for Brain Health and Neurological Rehabilitation";

export const FOUNDATIONAL_INTRO =
  "This curriculum provides a universal, progressive lifestyle foundation designed to support brain health, neuroplasticity, and neurological rehabilitation (including home neurofeedback such as Myndlift). It applies to everyone: those recovering from injury, managing cognitive or mood challenges, optimizing performance, or building long-term resilience.";

export const FOUNDATIONAL_SUBNOTE =
  "Modules are designed for weekly focus (approximately 1–2 hours of learning plus daily habits). Progress sequentially where possible, but adapt based on individual needs. This is educational support, not medical treatment. Consult qualified practitioners for personalized application, especially with existing conditions, medications, or history of concussion/TBI.";

export const CURRICULUM_MODEL_NOTE =
  "The 10-week sequence distills the highest-leverage foundations used in a 30-year neurometabolic clinic model: reducing toxic and inflammatory burden, stabilizing metabolism and sleep, regulating the nervous system, and pairing those foundations with consistent home neurofeedback and long-term habit architecture.";

export interface ProgramArcPhase {
  weeks: string;
  description: string;
}

export const PROGRAM_ARC: ProgramArcPhase[] = [
  {
    weeks: "Weeks 1–3",
    description:
      "Reduce burden and rebuild raw materials: toxins, inflammation, brain-supportive nutrition.",
  },
  {
    weeks: "Weeks 4–6",
    description:
      "Regulate the system: stress, sleep, and movement as platforms for neuroplasticity.",
  },
  {
    weeks: "Weeks 7–8",
    description:
      "Protect and stabilize: concussion/TBI principles and metabolic (blood sugar) brain health.",
  },
  {
    weeks: "Weeks 9–10",
    description:
      "Integrate and sustain: home neurofeedback habits plus a personal long-term resilience system.",
  },
];

export const FOUNDATIONAL_MODULES: CurriculumModule[] = [
  {
    num: "01",
    title: "Environmental Toxins & Reducing Brain Burden",
    focus:
      "Identify and minimize common toxin exposures that increase oxidative stress and impair neurological function.",
    objectives: [
      "Understand major sources (heavy metals, plastics/phthalates, pesticides, mold/mycotoxins, air/water contaminants).",
      "Learn practical reduction strategies.",
    ],
    actions: [
      "Audit home (cleaning products, cookware, water filters, personal care).",
      "Prioritize organic produce for high-pesticide items.",
      "Improve ventilation and air quality.",
      "Support basic detox pathways via hydration and fiber.",
    ],
    tracking:
      "Note energy, brain fog, or sleep changes; use a simple exposure journal.",
    note: "A cleaner internal environment supports clearer brainwave patterns and better training response.",
  },
  {
    num: "02",
    title: "Autoimmune Triggers & Chronic Inflammation",
    focus:
      "Recognize how immune activation and inflammation affect the brain (neuroinflammation).",
    objectives: [
      "Learn common triggers (certain foods, chronic infections, stress, toxins, gut permeability).",
      "Understand signs of low-grade inflammation.",
    ],
    actions: [
      "Begin simple elimination or observation of high-trigger foods (e.g., gluten, dairy, processed seed oils if relevant).",
      "Prioritize anti-inflammatory foods.",
      "Track symptoms.",
    ],
    tracking:
      "Symptom journal (joint pain, fatigue, brain fog, mood); note reactions to foods or stressors.",
    note: "Lower inflammation creates a more stable platform for neurofeedback learning.",
  },
  {
    num: "03",
    title: "Foundational Brain-Supportive Diet & Nutrition",
    focus:
      "Build a nutrient-dense, anti-inflammatory eating pattern that supplies raw materials for neuroplasticity and neurotransmitter production.",
    objectives: [
      "Emphasize whole foods, omega-3s, antioxidants, fiber, and stable blood sugar.",
      "Minimize ultra-processed foods and excess sugar.",
    ],
    actions: [
      "Adopt a Mediterranean-style or similar pattern (leafy greens, berries, fatty fish, olive oil, nuts, vegetables, quality protein).",
      "Include protein at most meals.",
      "Experiment with time-restricted eating windows if appropriate.",
    ],
    tracking: "Food log + energy/focus ratings; note meal timing effects.",
    note: "Stable nutrition improves session consistency and recovery between trainings.",
  },
  {
    num: "04",
    title: "Stress Regulation & Nervous System Balance",
    focus:
      "Reduce chronic HPA-axis activation and support autonomic balance (sympathetic/parasympathetic).",
    objectives: [
      "Identify personal stressors and early warning signs.",
      "Practice down-regulation tools.",
    ],
    actions: [
      "Daily brief practices (breathwork, progressive muscle relaxation, short mindfulness, nature time).",
      "Set boundaries.",
      "Limit news and social media overload.",
    ],
    tracking:
      "Stress rating scale (1–10); note heart rate variability or simple calm/focus scores if available.",
    note: "Lower baseline arousal improves ability to access and reinforce calm, focused brain states.",
  },
  {
    num: "05",
    title: "Sleep Optimization for Neuroplasticity & Brain Detox",
    focus:
      "Prioritize restorative sleep, the primary window for glymphatic clearance, memory consolidation, and neural repair.",
    objectives: ["Master sleep hygiene and circadian support."],
    actions: [
      "Consistent sleep/wake times.",
      "Cool, dark, quiet environment.",
      "Morning light exposure.",
      "Limit evening screens, caffeine, and alcohol.",
      "Establish a wind-down routine.",
    ],
    tracking: "Sleep duration/quality log; morning clarity rating.",
    note: "Better sleep accelerates consolidation of trained brainwave patterns and often improves sleep as a training outcome.",
  },
  {
    num: "06",
    title: "Movement, Exercise & Physical Activity for Brain Health",
    focus: "Use movement to increase BDNF, cerebral blood flow, and resilience.",
    objectives: ["Combine aerobic, strength, and mind-body activity safely."],
    actions: [
      "Aim for regular moderate aerobic movement most days plus 2 strength sessions weekly.",
      "Add yoga, walking, or balance work.",
      "Progress gradually (especially post-injury).",
    ],
    tracking: "Activity log + energy/mood before and after.",
    note: "Exercise enhances neuroplasticity and can prime the brain for more effective sessions (timing matters, avoid intense workouts immediately before focus training).",
  },
  {
    num: "07",
    title: "Concussion, TBI Awareness & Foundational Recovery Principles",
    focus:
      "Universal principles applicable to history of head injury, sub-concussive exposure, or general brain protection.",
    objectives: [
      "Understand basic mechanisms (energy crisis, inflammation, autonomic disruption).",
      "Learn relative rest versus progressive activation.",
      "Protect against re-injury.",
    ],
    actions: [
      "Review personal history.",
      "Implement paced activity return.",
      "Prioritize prior modules (sleep, nutrition, stress) as core recovery supports.",
      "Avoid high-risk activities until cleared.",
    ],
    tracking:
      "Symptom provocation log with activity; cognitive and physical load tolerance.",
    note: "Neurofeedback is frequently used in post-concussion programs; lifestyle foundations amplify its benefits.",
  },
  {
    num: "08",
    title: "Blood Sugar Stability & Metabolic Brain Health",
    focus:
      "Keep glucose and insulin steady to avoid energy crashes and inflammatory spikes that impair focus and mood.",
    objectives: ["Recognize personal blood sugar patterns and stabilize them."],
    actions: [
      "Include protein + fiber + healthy fat at meals.",
      "Avoid long gaps or high-sugar spikes.",
      "Monitor response to carbohydrates.",
    ],
    tracking: "Energy crashes, cravings, post-meal focus ratings.",
    note: "Stable metabolism improves mental endurance during and between training sessions.",
  },
  {
    num: "09",
    title: "Integrating Neurofeedback, Cognitive Habits & Daily Brain Training",
    focus:
      "Weave consistent brain training (e.g., Myndlift sessions) with supportive daily cognitive practices.",
    objectives: [
      "Build training consistency.",
      "Add complementary habits (mindfulness, learning new skills, dual-task activities).",
    ],
    actions: [
      "Schedule regular short neurofeedback sessions.",
      "Pair with lifestyle foundations already built.",
      "Use app insights (Brain Snapshots) to observe how prior modules affect brain metrics.",
    ],
    tracking:
      "Session adherence, subjective focus/calm scores, objective app trends.",
    note: "This module directly reinforces the platform; lifestyle creates the conditions for stronger, faster training gains.",
  },
  {
    num: "10",
    title: "Building Sustainable Habits, Tracking Progress & Long-Term Resilience",
    focus:
      "Consolidate gains into automatic routines and create a personal maintenance system.",
    objectives: [
      "Review progress across all modules.",
      "Identify highest-impact habits.",
      "Plan for setbacks and lifelong application.",
    ],
    actions: [
      "Create a simple weekly checklist of non-negotiables.",
      "Set a review cadence (monthly).",
      "Build social support or accountability.",
      "Celebrate consistency over perfection.",
    ],
    tracking:
      "Overall brain-health scorecard (sleep, energy, mood, focus, training adherence); quarterly reassessment.",
    note: "Long-term consistency with both lifestyle and neurofeedback produces the most durable rewiring.",
  },
];

export const FOUNDATIONAL_TIPS = [
  "Start each week with a short educational overview plus 1–3 concrete actions.",
  "Use a simple journal or app to track 2–3 metrics per module.",
  "Layer rather than overhaul: many modules build on earlier ones (e.g., diet and sleep support toxin reduction and stress resilience).",
  "Pair with professional guidance (functional neurology, nutrition, coaching) and any prescribed testing (qEEG, labs, neurotransmitter panels).",
  "Progress is cumulative: cleaner inputs + regulated nervous system + consistent training = stronger neurological recovery potential.",
];

export const CURRICULUM_CLOSING =
  "This curriculum provides a complete, practical foundation that supports neurological rehabilitation for a broad audience while remaining compatible with home neurofeedback programs and the Brain Brightening virtual offering. Educational support only, not a substitute for individualized clinical care. Work with qualified practitioners when applying these principles to existing medical conditions.";
