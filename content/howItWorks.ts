// Full transcription of the client-supplied "12-Week Neurological Support
// Curriculum" and "Advanced Neurological Support Curriculum" reference docs.
// Educational structure only — never imply self-directed medical treatment;
// fasting, mold recovery, complex multi-system cases, and regenerative
// topics explicitly require professional supervision per the source docs.

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

export const FOUNDATIONAL_INTRO =
  "This curriculum provides a universal, progressive lifestyle foundation designed to support brain health, neuroplasticity, and neurological rehabilitation (including home neurofeedback such as Myndlift). It applies to everyone: those recovering from injury, managing cognitive or mood challenges, optimizing performance, or building long-term resilience.";

export const FOUNDATIONAL_SUBNOTE =
  "Modules are designed for weekly focus (approximately 1–2 hours of learning plus daily habits). Progress sequentially where possible, but adapt based on individual needs. This is educational support, not medical treatment. Consult qualified practitioners for personalized application, especially with existing conditions, medications, or history of concussion/TBI.";

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
    title: "Gut-Brain Axis & Microbiome Support",
    focus:
      "Support the bidirectional gut-brain communication pathway that influences inflammation, mood, and cognition.",
    objectives: ["Improve digestive resilience and microbial diversity."],
    actions: [
      "Increase fiber-rich plants and fermented foods.",
      "Chew thoroughly.",
      "Address constipation or bloating basics.",
      "Consider diversity of plant foods.",
    ],
    tracking: "Digestive comfort + mood/cognition correlations.",
    note: "Reduced gut-driven inflammation supports clearer neurological regulation.",
  },
  {
    num: "09",
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
    num: "10",
    title: "Hydration, Electrolytes & Cellular Support",
    focus:
      "Maintain fluid and mineral balance essential for neuronal signaling and overall brain function.",
    objectives: ["Optimize daily hydration and basic electrolyte awareness."],
    actions: [
      "Consistent water intake (adjusted for activity and climate).",
      "Include mineral-rich foods or appropriate electrolyte support.",
      "Limit dehydrating substances.",
    ],
    tracking: "Urine color, energy, and headache patterns.",
    note: "Proper hydration supports cleaner EEG signals and cognitive clarity.",
  },
  {
    num: "11",
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
    num: "12",
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
  "Pair with professional guidance (functional neurology, nutrition, coaching) and any prescribed testing (qEEG, labs, etc.).",
  "Progress is cumulative: cleaner inputs + regulated nervous system + consistent training = stronger neurological recovery potential.",
];

export const ADVANCED_INTRO =
  "This advanced curriculum builds on foundational lifestyle principles. It is designed for individuals ready to move into deeper self-assessment, targeted recovery strategies, and management of more complex neurological presentations. Suitable for those using home neurofeedback (e.g., Myndlift), functional neurology care, or independent brain optimization.";

export const ADVANCED_SUBNOTE =
  "Educational only. Not medical advice. Complex conditions, fasting, mold recovery, and advanced interventions require professional supervision. Always coordinate with qualified clinicians, especially when symptoms are significant or multiple systems are involved.";

export const ADVANCED_MODULES: CurriculumModule[] = [
  {
    num: "01",
    title: "Comprehensive Self-Assessment & Baseline Mapping",
    focus:
      "Establish a clear, multi-domain baseline so progress can be measured objectively and subjectively.",
    objectives: [
      "Create a personal neurological and functional baseline.",
      "Identify priority domains (memory, attention, sleep, mood, energy, autonomic symptoms, inflammation markers).",
    ],
    actions: [
      "Complete structured symptom inventories (cognitive, emotional, physical, sleep).",
      "Log current lifestyle metrics (sleep duration/quality, exercise, diet patterns, stress load).",
      "Note prior testing results if available (qEEG, blood chemistry, neurotransmitters, mycotoxin panels, genomics).",
      "Establish simple weekly scoring systems for key symptoms (0–10 scales).",
    ],
    calloutLabel: "Self-Assessment Tools",
    callout:
      "Symptom severity scales, cognitive self-tests (word lists, digit span, dual-task examples), lifestyle audit checklist, trigger identification worksheet.",
    noteLabel: "Myndlift / Neurofeedback Note",
    note: "Baseline Brain Snapshots and full assessments provide objective neural data to track against lifestyle and protocol changes.",
  },
  {
    num: "02",
    title: "Memory Restoration Foundations",
    focus:
      "Understand memory systems and implement practical strategies that support encoding, consolidation, and retrieval.",
    objectives: [
      "Differentiate working memory, short-term, long-term, episodic, and prospective memory.",
      "Apply evidence-informed lifestyle and cognitive techniques that support memory recovery.",
    ],
    actions: [
      "Prioritize deep sleep and consistent circadian timing (critical for consolidation).",
      "Use spaced retrieval, dual coding (visual + verbal), and context-dependent learning techniques.",
      "Reduce interference (multitasking, late-night screens, high stress before learning).",
      "Support cholinergic and metabolic substrates through nutrition and stable blood sugar.",
    ],
    tracking:
      "Daily or weekly memory performance log (names, tasks, reading recall); note sleep and stress correlations.",
    note: "Protocols targeting attention and calm often improve the cognitive resources required for effective memory encoding.",
  },
  {
    num: "03",
    title: "Therapeutic Fasting & Metabolic Flexibility",
    focus:
      "Use controlled fasting or time-restricted eating to support autophagy, metabolic switching, and brain energy resilience.",
    objectives: [
      "Understand physiological benefits and contraindications of fasting approaches.",
      "Implement safe, progressive protocols appropriate for neurological recovery.",
    ],
    actions: [
      "Begin with 12–14 hour overnight fasting windows if appropriate.",
      "Progress cautiously toward longer windows or intermittent patterns only under guidance.",
      "Monitor energy, cognition, sleep, and mood during fasting periods.",
      "Ensure nutrient density on eating days; avoid prolonged restriction without professional oversight.",
    ],
    calloutLabel: "Safety Notes",
    callout:
      "Contraindicated or high-risk in underweight states, certain medical conditions, pregnancy, history of disordered eating, or unstable neurological status. Professional supervision required for extended fasts.",
    note: "Some individuals notice clearer focus during metabolic flexibility phases; track Brain Snapshots relative to eating windows.",
  },
  {
    num: "04",
    title: "Mold & Mycotoxin Abatement and Recovery",
    focus:
      "Identify, reduce, and recover from mold and mycotoxin exposure that can drive neuroinflammation and cognitive symptoms.",
    objectives: [
      "Recognize common exposure sources and symptom patterns.",
      "Implement practical environmental and personal recovery steps.",
    ],
    actions: [
      "Assess living and work environments for water damage, musty odors, or visible mold.",
      "Prioritize source control and professional remediation when indicated.",
      "Support detoxification pathways (binders only under guidance, glutathione support, sweating, fiber).",
      "Reduce re-exposure through air filtration, humidity control, and material choices.",
    ],
    tracking:
      "Symptom correlation with environment; consider professional testing (ERMI, urine mycotoxins) when clinically indicated.",
    note: "Reducing ongoing toxic load often improves training responsiveness and reduces residual brain fog.",
  },
  {
    num: "05",
    title: "Managing Complex & Multi-System Conditions",
    focus:
      "Develop frameworks for navigating overlapping neurological, immune, metabolic, and autonomic issues.",
    objectives: [
      "Map interactions between systems (brain–immune–gut–hormones–autonomic).",
      "Prioritize interventions when multiple problems coexist.",
    ],
    actions: [
      "Create a systems map of personal symptoms and known diagnoses.",
      "Identify highest-leverage foundational habits that benefit multiple systems (sleep, blood sugar, stress load, toxin reduction).",
      "Sequence interventions: stabilize basics before layering advanced therapies.",
      "Maintain clear communication with the care team; avoid simultaneous major changes.",
    ],
    calloutLabel: "Key Principle",
    callout:
      "In complex cases, less simultaneous change often produces clearer feedback and safer progress.",
  },
  {
    num: "06",
    title: "Mitochondrial Optimization & Cellular Energy",
    focus:
      "Support the cellular energy systems that power neurological recovery and cognitive endurance.",
    objectives: [
      "Understand the role of mitochondria in brain function and post-injury recovery.",
      "Apply lifestyle and nutritional strategies that support mitochondrial efficiency.",
    ],
    actions: [
      "Prioritize consistent movement and zone 2 aerobic activity.",
      "Support nutrient cofactors (B vitamins, magnesium, CoQ10 pathways, antioxidants) through food first.",
      "Reduce chronic inflammation and toxin load that impair mitochondrial function.",
      "Consider circadian alignment and recovery periods between stressors.",
    ],
    tracking:
      "Energy patterns across the day, exercise recovery, mental endurance, and post-exertional symptoms.",
  },
  {
    num: "07",
    title: "Advanced Sleep Architecture & Chronobiology",
    focus:
      "Optimize not just sleep quantity but architecture (deep sleep, REM) and circadian alignment for neurological repair.",
    objectives: [
      "Understand glymphatic clearance, memory consolidation stages, and light/dark signaling.",
      "Implement advanced sleep hygiene and circadian tools.",
    ],
    actions: [
      "Morning outdoor light exposure within the first hour of waking.",
      "Strict evening light management (blue light reduction, dim lighting).",
      "Consistent sleep and wake times, including weekends.",
      "Evaluate temperature, noise, and bed partner factors; consider tracking devices if useful.",
    ],
    note: "Sleep-focused protocols and improved architecture often enhance overall training gains and daytime regulation.",
  },
  {
    num: "08",
    title: "Autonomic Regulation & Polyvagal-Informed Strategies",
    focus:
      "Improve autonomic flexibility and reduce chronic threat physiology that interferes with healing and cognition.",
    objectives: [
      "Recognize sympathetic, parasympathetic, and mixed states.",
      "Build a personal toolkit for state regulation.",
    ],
    actions: [
      "Practice daily regulation tools (extended exhales, safe social engagement, gentle movement, grounding).",
      "Identify personal triggers that shift state into high arousal or shutdown.",
      "Integrate short regulation practices before neurofeedback or demanding cognitive work.",
    ],
    tracking:
      "State ratings, heart-rate recovery, sense of safety or overwhelm, and ability to engage socially or cognitively.",
  },
  {
    num: "09",
    title: "Cognitive Reserve & Dual-Task Training",
    focus: "Build cognitive resilience through progressive challenge and enrichment.",
    objectives: [
      "Understand cognitive reserve and its protective role.",
      "Design progressive dual-task and enrichment activities.",
    ],
    actions: [
      "Engage in novel learning (language, instrument, complex skill).",
      "Practice dual-task activities (walking + cognitive load, balance + attention).",
      "Increase complexity gradually while monitoring symptom provocation.",
      "Balance challenge with recovery to avoid overload.",
    ],
    note: "Improved regulation from neurofeedback often increases capacity for higher cognitive load and dual-task performance.",
  },
  {
    num: "10",
    title: "Advanced Neurofeedback Optimization & Protocol Awareness",
    focus:
      "Deepen understanding of home neurofeedback use and how to collaborate effectively with coaches or clinicians.",
    objectives: [
      "Understand how different goals map to training emphases (calm, focus, sleep, regulation).",
      "Learn to interpret personal training data and lifestyle interactions.",
    ],
    actions: [
      "Maintain consistent session frequency and quality setup.",
      "Use Brain Snapshots and tagging to correlate lifestyle factors with neural metrics.",
      "Communicate clearly with the Neuro Coach about symptoms, sleep, and stressors.",
      "Avoid protocol shopping or frequent self-adjustment without guidance.",
    ],
    calloutLabel: "Key Principle",
    callout:
      "Consistency and good recovery conditions usually outperform frequent protocol changes.",
  },
  {
    num: "11",
    title: "Regenerative & Supportive Interventions (Educational Overview)",
    focus:
      "Gain high-level literacy about emerging supportive approaches (peptides, targeted nutraceuticals, photobiomodulation, etc.) so informed discussions with clinicians are possible.",
    objectives: [
      "Understand categories of regenerative and supportive tools used in functional neurology and longevity contexts.",
      "Recognize that these are adjunctive and require medical oversight.",
    ],
    actions: [
      "Review evidence levels and safety considerations for common categories.",
      "Identify personal readiness (foundational lifestyle already stable).",
      "Prepare questions for clinical discussions rather than self-experimentation.",
    ],
    calloutLabel: "Important",
    callout:
      "This module is educational only. Prescription or administration of peptides, hormones, or advanced therapies must occur under qualified medical supervision.",
  },
  {
    num: "12",
    title: "Integration, Long-Term Monitoring & Personalized Maintenance",
    focus:
      "Synthesize the advanced curriculum into a sustainable personal system with clear monitoring and adjustment processes.",
    objectives: [
      "Create an integrated weekly and monthly review process.",
      "Define personal non-negotiables and early warning indicators.",
    ],
    actions: [
      "Build a one-page personal protocol summary (foundational + advanced priorities).",
      "Schedule regular self-assessments and, when indicated, professional re-evaluations (qEEG, labs).",
      "Define relapse or setback response plans.",
      "Identify ongoing support resources (coach, clinician, community).",
    ],
    trackingLabel: "Final Tracking Framework",
    tracking:
      "Monthly scorecard covering memory/cognition, energy, sleep quality, autonomic state, training adherence, and environmental/toxin load.",
    note: "Long-term success combines consistent training with the advanced lifestyle and recovery strategies developed across this curriculum.",
  },
];

export const ADVANCED_GUIDANCE = [
  "Complete foundational lifestyle work before or in parallel with advanced modules.",
  "Move at a sustainable pace; complex conditions often require slower sequencing.",
  "Document baselines and changes carefully: self-assessment is the compass.",
  "Partner with qualified clinicians for mold recovery, extended fasting, complex multi-system cases, and any regenerative therapies.",
  "Revisit Module 1 self-assessment tools periodically to quantify progress.",
];
