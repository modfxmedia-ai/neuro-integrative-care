// COMPLIANCE: Copy stays in functional-medicine scope — "investigate," "identify,"
// "support," "retrain," "rebuild." Never phrase as diagnosis or cure guarantee.
//
// TODO(client): sector cross-links per tool are TENTATIVE and need clinical
// sign-off. Assignments below were made from the blueprint's own tool copy
// (e.g. Violet Laser mentions "nerve and tissue repair" and "brain regions
// affected by injury or decline" → concussion, brain-brightening,
// autoimmune-investigation). Flag for Justin/client review before publish.

export interface Tool {
  slug: string;
  name: string;
  /** Short mono-caps label used above the title on the how-we-work page. */
  kicker: string;
  description: string;
  /** Slugs from conditions.ts — parent sectors this tool most directly serves. */
  sectorSlugs: string[];
}

export const tools: Tool[] = [
  {
    slug: "violet-laser-therapy",
    name: "Violet Laser Therapy",
    kicker: "Photobiomodulation",
    description:
      "Photobiomodulation: specific wavelengths absorbed by mitochondria to boost ATP and reduce inflammation at the source. Used to accelerate nerve and tissue repair and, applied transcranially, to support brain regions affected by injury or decline. Non-invasive, painless, drug-free.",
    sectorSlugs: [
      "concussion-post-trauma",
      "brain-brightening",
      "autoimmune-investigation",
    ],
  },
  {
    slug: "neurofeedback",
    name: "Neurofeedback",
    kicker: "qEEG-Guided Training",
    description:
      "Real-time, qEEG-guided EEG training that shows the brain its own activity and rewards healthier patterns. Over a course of sessions the brain learns to self-regulate (attention, sleep, emotional regulation, stress resilience) with no medication. Every protocol is individualized to the patient's specific brain map.",
    sectorSlugs: [
      "brain-brightening",
      "concussion-post-trauma",
      "autoimmune-investigation",
    ],
  },
  {
    slug: "regenerative-solutions",
    name: "Regenerative Solutions",
    kicker: "Non-Surgical Repair",
    description:
      "Advanced, non-surgical therapies (including umbilical-cord stem cells and PRP) that stimulate the body's own repair in joints, connective tissue, and peripheral nerves. Frequently paired with neurofeedback and functional-neurology work so structural repair and nervous-system retraining progress together.",
    sectorSlugs: ["concussion-post-trauma", "longevity-science"],
  },
  {
    slug: "functional-neurology",
    name: "Functional Neurology",
    kicker: "Circuit-Level Rehab",
    description:
      "Computerized assessment (eye-movement tracking, balance/posturography, reaction-time and heart-rate-variability testing) that pinpoints which neural circuits are underperforming, followed by targeted hands-on rehab that retrains those exact pathways.",
    sectorSlugs: ["concussion-post-trauma", "brain-brightening"],
  },
  {
    slug: "longevity-testing",
    name: "Longevity Testing",
    kicker: "Beyond the Standard Physical",
    description:
      "A panel that goes far beyond a standard physical: Real Age (biological-age) testing, IntellxxDNA cognitive genomics, comprehensive DNA, neurotransmitter testing, and specialized labs, an objective, data-driven picture of how you're actually aging and functioning.",
    sectorSlugs: ["longevity-science", "idiopathic-unexplained"],
  },
];

/** Look up the tools whose sectorSlugs include the given parent sector slug. */
export function toolsForSector(sectorSlug: string): Tool[] {
  return tools.filter((t) => t.sectorSlugs.includes(sectorSlug));
}
