// COMPLIANCE: `description` is the ONLY field safe to display on public pages.
// `internalNote` is for repo-internal reference only — never render it in any
// component. In particular, the in-clinic-care-regenerative program has a
// $3,500–$7,200 range that must NEVER appear as a fixed public price per CO;
// the range lives in `internalNote` and the public `description` complies with
// the required "Programs typically begin at $3,500, tailored after your
// investigation." wording.

export interface EntryProgram {
  slug: string;
  name: string;
  price: string;
  /** Public-safe copy — this is what renders on the site. */
  description: string;
  /** NEVER RENDER PUBLICLY. Internal pricing detail for repo/team reference only. */
  internalNote?: string;
  fullCopy?: string;
  duration?: string;
  whatItIncludes?: string[];
}

export interface OutOfTownServiceItem {
  name: string;
  description: string;
}

export interface OutOfTownServices {
  description: string;
  items: OutOfTownServiceItem[];
}

export interface Programs {
  entryPrograms: EntryProgram[];
  outOfTownServices: OutOfTownServices;
}

export const programs: Programs = {
  entryPrograms: [
    {
      slug: "new-patient-investigation",
      name: "New-Patient Investigation",
      price: "$300",
      description:
        "Consultation, history, and clinical impression. The starting point for everyone.",
      fullCopy:
        "Everything starts with a $300 investigation — a full consultation where Dr. Santucci reviews your complex history, isolates likely causes, and gives you a clinical impression that finally makes sense. Not a sales call. The beginning of an actual answer.",
    },
    {
      slug: "virtual-program",
      name: "The Virtual Program (Mind Transformation Blueprint)",
      price: "From $2,395",
      description:
        "A 6–12 week at-home neurometabolic program: remote QEEG unit, neurotransmitter testing, guided video series, and neurofeedback calls every two weeks. National.",
      duration: "6–12 weeks",
      whatItIncludes: [
        "Remote QEEG brain-training unit",
        "Neurotransmitter testing",
        "Guided video series",
        "Neurofeedback review calls every two weeks",
        "Repeat brain scan at end of first phase to set next stage",
      ],
    },
    {
      slug: "in-clinic-care-regenerative",
      name: "In-Clinic Care & Regenerative",
      price: "From $3,500",
      // Public-safe description per CO — never publish the internal range.
      description:
        "Programs typically begin at $3,500, tailored after your investigation.",
      internalNote:
        "Internal only — DO NOT RENDER. Consult-based, typically $3,500–$7,200 per program (neurofeedback $3,500, stem-cell/regenerative $7,000). Priced after the investigation.",
    },
  ],
  outOfTownServices: {
    description:
      "A dedicated set of remotely-delivered services for patients who travel in, framed around Continuity, Access, and Oversight.",
    items: [
      {
        name: "The Listening Program (TLP)",
        description:
          "Research-backed, music-based auditory training done at home on a listening schedule, supervised remotely.",
      },
      {
        name: "Remote Laboratory Testing",
        description:
          "Advanced functional panels — metabolic, autoimmune, toxin/mold, hormone, micronutrient — via national labs and mobile phlebotomy near you.",
      },
      {
        name: "Myndlift Virtual Neurofeedback",
        description:
          "A take-home EEG system, remotely programmed and reviewed by the clinical team — the same individualized progression as in-office patients.",
      },
    ],
  },
};
