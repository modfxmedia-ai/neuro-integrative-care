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
  /** Short mono-caps label used above the title on the tool's /tools/[slug] page. */
  kicker: string;
  description: string;
  /** Slugs from conditions.ts — parent sectors this tool most directly serves. */
  sectorSlugs: string[];
  media: ToolMedia;
}

/**
 * Lead media asset per the brief's Media Asset Catalog. Vimeo/YouTube videos
 * are embedded via their standard oEmbed/iframe player, never re-hosted.
 * `placeholder` means no asset was supplied yet — see the TODO in the tools
 * array below for what's pending per tool.
 */
export type ToolMedia =
  | { kind: "vimeo"; vimeoId: string; title: string }
  | { kind: "youtube"; youtubeId: string; title: string }
  | { kind: "placeholder" };

export const tools: Tool[] = [
  {
    slug: "violet-laser",
    name: "Violet Laser Therapy",
    kicker: "Photobiomodulation",
    description:
      "Photobiomodulation — specific wavelengths absorbed by mitochondria to boost ATP and reduce inflammation at the source. Used to accelerate nerve and tissue repair and, applied transcranially, to support brain regions affected by injury or decline. Non-invasive, painless, drug-free.",
    sectorSlugs: [
      "concussion-post-trauma",
      "brain-brightening",
      "autoimmune-investigation",
    ],
    // Lead asset per Media Asset Catalog: "Electron Transport Chain" (Erchonia),
    // directly illustrates the mitochondrial USP of the therapy.
    media: {
      kind: "vimeo",
      vimeoId: "802831140",
      title: "Electron Transport Chain — Erchonia",
    },
  },
  {
    slug: "neurofeedback",
    name: "Neurofeedback",
    kicker: "qEEG-Guided Training",
    description:
      "Real-time, qEEG-guided EEG training that shows the brain its own activity and rewards healthier patterns. Over a course of sessions the brain learns to self-regulate — attention, sleep, emotional regulation, stress resilience — with no medication. Every protocol is individualized to the patient's brain map, then re-mapped to measure change. Home and remote options available (Myndlift).",
    sectorSlugs: [
      "brain-brightening",
      "concussion-post-trauma",
      "autoimmune-investigation",
    ],
    media: {
      kind: "youtube",
      youtubeId: "Jr4iwULgxTs",
      title: "What is Neurofeedback?",
    },
  },
  {
    slug: "regenerative-solutions",
    name: "Regenerative Solutions",
    kicker: "Non-Surgical Repair",
    description:
      "Advanced, non-surgical therapies — including PRP and exosome-supported approaches — that stimulate the body's own repair in joints, connective tissue, and peripheral nerves. Frequently paired with neurofeedback and functional-neurology work so structural repair and nervous-system retraining progress together.",
    sectorSlugs: ["concussion-post-trauma", "longevity-science"],
    // TODO(client): no media asset supplied for this tool yet — placeholder
    // slot only. Swap for real clinic/procedure media before launch.
    media: { kind: "placeholder" },
  },
  {
    slug: "functional-neurology",
    name: "Functional Neurology",
    kicker: "Circuit-Level Rehab",
    description:
      "Computerized assessment — eye-movement tracking, posturography and balance, reaction-time and heart-rate-variability testing — pinpoints which neural circuits underperform, followed by targeted hands-on rehab that retrains those exact pathways.",
    sectorSlugs: ["concussion-post-trauma", "brain-brightening"],
    // TODO(client): no media asset supplied for this tool yet — placeholder
    // slot only. Swap for real clinic/procedure media before launch.
    media: { kind: "placeholder" },
  },
  {
    slug: "longevity-testing",
    name: "Longevity Testing",
    kicker: "Beyond the Standard Physical",
    description:
      "A panel far beyond a standard physical: Real Age (biological-age) testing, IntellxxDNA cognitive genomics, comprehensive DNA, neurotransmitter testing, and specialized labs — an objective, data-driven picture of how you're aging and functioning.",
    sectorSlugs: ["longevity-science", "idiopathic-unexplained"],
    // TODO(client): no media asset supplied for this tool yet — placeholder
    // slot only. Swap for real clinic/procedure media before launch.
    media: { kind: "placeholder" },
  },
  {
    slug: "detoxification",
    name: "Detoxification",
    kicker: "Removing the Trigger",
    description:
      "Targeted support for the body's own detox pathways once a metals, mold, or environmental-toxin trigger is identified — clearing the load that's driving inflammation rather than only treating the downstream symptoms.",
    sectorSlugs: ["autoimmune-investigation", "environmental-toxins"],
    // TODO(client): no media asset supplied for this tool yet — placeholder
    // slot only. Swap for real clinic/procedure media before launch.
    media: { kind: "placeholder" },
  },
];

/** Look up the tools whose sectorSlugs include the given parent sector slug. */
export function toolsForSector(sectorSlug: string): Tool[] {
  return tools.filter((t) => t.sectorSlugs.includes(sectorSlug));
}
