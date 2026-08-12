// COMPLIANCE: Do NOT add or display the "90% resolution in serious/lethal conditions"
// stat anywhere on this site. Client-approved hold per CO-01 — legal/liability risk.
// Only individual, measured, method-attributed results are approved for public pages.

export interface PhysicalStats {
  grip?: string;
  legs?: string;
  shoulder?: string;
}

export interface PatientStory {
  slug: string;
  patientName: string;
  headline: string;
  body: string;
  sector?: string;
  measuredStat?: string;
  physicalStats?: PhysicalStats;
  disclaimer: string;
}

export const DEFAULT_PATIENT_STORY_DISCLAIMER =
  "Individual result; outcomes vary.";

type PatientStoryInput = Omit<PatientStory, "disclaimer"> & {
  disclaimer?: string;
};

const patientStoryInputs: PatientStoryInput[] = [
  {
    slug: "ellie",
    patientName: "Ellie",
    sector: "autoimmune-investigation",
    headline: "Eleven doctors. Then, finally, the right answer.",
    body: "Sick since high school, chronic fatigue, neuropathy, vertigo, memory problems, GI and hormonal issues, eleven prior doctors. A neurotransmitter test flagged very high histamine, which unlocked the real diagnosis: mast cell activation syndrome. An autoimmune protocol plus in-clinic neurofeedback resolved enough that she left to study abroad in two months, continuing on a remote QEEG unit.",
  },
  {
    slug: "gail",
    patientName: "Gail",
    headline:
      "Leg strength: 17 lbs → 38 lbs in one month. Grip: up to 35 lbs. Walking without a limp.",
    body: "Low-back pain, leg numbness, and a limp. A combined plan (violet laser, decompression, and neuropathy therapy) rebuilt measurable strength and returned her to exercise.",
    physicalStats: {
      grip: "17 & 28 lbs → 32 & 35 lbs",
      legs: "17 & 25 lbs → 35 & 38 lbs, in one month",
    },
  },
  {
    slug: "seth",
    patientName: "Seth",
    sector: "environmental-toxins",
    headline: "A measured 20% gain in brain function, and his family saw the difference.",
    body: "An identical twin, presented with a scattered mix of numbness, anxiety, and GI issues. A brain scan showed evenly-distributed low function, the signature that sent us to a metals panel, which found toxic arsenic nobody had tested for, plus post-concussive syndrome. Neurofeedback, violet laser, and detox produced changes his brother and the clinical staff could all see, confirmed on a follow-up QEEG.",
    measuredStat:
      "A measured 20% gain in brain function on repeat brain mapping, visible to his whole family.",
  },
  {
    slug: "michael",
    patientName: "Michael",
    sector: "concussion-post-trauma",
    headline: "A coherent, testable explanation, for the first time.",
    body: "Arrived with knee and shoulder pain, sleep problems, memory slips, low testosterone. The history uncovered multiple concussions (football, wrestling, an assault). Brain mapping validated a severe post-concussive syndrome; neurotransmitter testing revealed adrenal burnout so deep almost every marker sat in the lowest quartile.",
  },
  {
    slug: "richard",
    patientName: "Richard",
    headline: "Ex-military; inflammation and toxins resolved, now in maintenance.",
    body: "Full case journey pending, request expanded detail from client before publishing in full.",
  },
  {
    slug: "janice",
    patientName: "Janice",
    headline:
      "A reported 40% improvement, and her whole family trained alongside her.",
    body: "A caretaker holding a family together, carrying spondylolisthesis, hormone imbalance, and years of stress. Stem-cell work, PEMF, Trigenics, and home neurofeedback produced gains she measured at roughly 40%.",
    measuredStat: "A reported 40% improvement (neurofeedback + stem cell + Trigenics)",
    physicalStats: {
      shoulder: "30% range-of-motion restriction, improved with Trigenics",
    },
  },
  {
    slug: "don",
    patientName: "Don",
    sector: "idiopathic-unexplained",
    headline: "Burning mouth syndrome, diminished, and life markedly better.",
    body: "Came in with burning mouth syndrome, a neurovascular pain few clinics can place. Cervical stem-cell work aimed at the vagus and cranial nerves, plus brain mapping, neurofeedback, laser, and Trigenics. Two years on, the symptom is diminished and his focus and ability to handle life's complexity are markedly better.",
  },
  {
    slug: "beakram",
    patientName: "Beakram",
    headline: "Out-of-town regenerative patient; flies in from Washington.",
    body: "Full case journey pending, request expanded detail from client before publishing in full.",
  },
];

export const patientStories: PatientStory[] = patientStoryInputs.map((story) => ({
  ...story,
  disclaimer: story.disclaimer ?? DEFAULT_PATIENT_STORY_DISCLAIMER,
}));
