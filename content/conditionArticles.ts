// COMPLIANCE: Same functional-medicine scope as sectorPageContent.ts —
// "investigate," "identify," "support," "retrain," "rebuild." Never phrase as
// diagnosis or cure guarantee. Draft copy — flag for client sign-off before
// publishing, same as the rest of content/.
//
// These are long-form, symptom-first SEO landing pages, separate from (and
// in addition to) the 4 sub-condition pages in conditions.ts. Four of them
// (neuropathy-nerve-pain, chronic-fatigue-and-sleep, balance-and-fall-risk,
// memory-and-cognitive-decline) cover the same ground as an existing,
// shorter sub-condition page — `supersedes` points at that page so its
// metadata can carry a canonical tag here instead of maintaining two
// competing ranking targets for the same topic.

export interface ConditionArticleFaq {
  question: string;
  answer: string;
}

export interface ConditionArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface ConditionArticle {
  slug: string;
  /** Parent sector slug from content/conditions.ts — determines the /conditions/[parentSlug]/[slug] URL. */
  parentSlug: string;
  /** Short label for breadcrumbs and nav, distinct from the full H1. */
  name: string;
  /** Tool slug from content/tools.ts most directly used to treat this condition. */
  toolSlug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroLead: string;
  whatsGoingOn: ConditionArticleSection;
  howWeInvestigate: ConditionArticleSection;
  howWeTreat: ConditionArticleSection;
  faqs: ConditionArticleFaq[];
  ctaHeading: string;
  /** The shorter existing sub-condition page this article supersedes for SEO purposes, if any. */
  supersedes?: { parentSlug: string; subSlug: string };
}

export const conditionArticles: ConditionArticle[] = [
  {
    slug: "neuropathy-nerve-pain",
    parentSlug: "environmental-toxins",
    name: "Neuropathy & Nerve Pain",
    toolSlug: "violet-laser",
    h1: "Tingling or Burning Feet? Why It Isn't Always Diabetes",
    metaTitle: "Neuropathy & Nerve Pain | Non-Diabetic Nerve Workup",
    metaDescription:
      "Numb, tingling, or burning feet with a clean diabetes panel? We investigate the toxin, nutrient, and autoimmune drivers standard care skips.",
    heroKicker: "Nerve Health",
    heroLead:
      "Your feet went numb, or they burn at night, or your shoes suddenly feel like they belong to someone else. Your doctor ran an A1C, it came back clean, and the conversation stopped there. But diabetes is only one cause of peripheral nerve damage, and a normal blood-sugar panel doesn't rule out the dozen other things that can be quietly damaging your nerve endings.",
    whatsGoingOn: {
      heading: "What's Really Going On",
      paragraphs: [
        "Peripheral nerves are long, thin, and metabolically demanding, which makes them the first structure to show damage when something upstream goes wrong. Heavy metals, mold-related toxins, industrial solvents, B12 or methylation deficiencies, and autoimmune activity aimed at nerve tissue can all produce the same tingling, numbness, and burning that gets filed under \"diabetic neuropathy\" even in patients who aren't diabetic.",
        "Because the symptom looks identical regardless of cause, most nerve pain gets treated with the same gabapentin-or-nothing playbook. That approach quiets the signal without ever asking what's damaging the nerve in the first place, which is why the numbness usually keeps creeping further up the leg even while the prescription stays the same.",
      ],
    },
    howWeInvestigate: {
      heading: "How We Investigate",
      paragraphs: [
        "We start where standard care stopped: a full B12 and methylation panel, heavy-metal and mycotoxin testing, and autoimmune markers tied to nerve tissue, alongside a functional assessment of the nerves themselves (sensation, reflexes, and small-fiber function).",
        "The goal is a specific driver, not a diagnosis of exclusion. If the toxin panel lights up, detox pathways need support. If autoimmune markers are active, the nerve damage is downstream of immune activity that needs its own investigation. Either way, you leave with a name for the mechanism, not just a prescription for the symptom.",
      ],
    },
    howWeTreat: {
      heading: "How We Treat It, Drug-Free",
      paragraphs: [
        "Violet laser therapy is the centerpiece of nerve repair here: specific wavelengths absorbed directly by mitochondria to boost ATP production and reduce local inflammation, applied along the affected nerve pathways to accelerate the tissue's own repair process.",
        "Alongside it, we correct whatever the workup surfaced (B12 and methylation support, targeted nutrient repletion, detox pathway support for toxin load, or immune-calming care where autoimmune activity is driving the damage), so the nerve is being repaired and protected at the same time, not just numbed.",
      ],
    },
    faqs: [
      {
        question: "Can neuropathy be reversed if it's not caused by diabetes?",
        answer:
          "Nerve damage from toxin exposure, nutrient deficiency, or autoimmune activity often responds well once the actual driver is identified and addressed, especially early. The nerve tissue itself can regenerate; the workup is what tells us which repair pathway to support.",
      },
      {
        question: "What if my B12 levels are \"normal\"?",
        answer:
          "Standard lab ranges for B12 are wide, and functional deficiency can exist well above the \"low\" cutoff. We look at methylation markers alongside raw B12 to see whether your body can actually use what's in your bloodstream.",
      },
      {
        question: "Is violet laser therapy painful?",
        answer:
          "No. It's non-invasive and generally described as warm or painless, with no needles, incisions, or downtime.",
      },
      {
        question: "How long before nerve symptoms start improving?",
        answer:
          "It depends on the driver and how long the nerve has been affected, but many patients notice a change in sensation within the first several weeks of combined laser and nutrient support.",
      },
    ],
    ctaHeading:
      "Stop guessing at nerve pain. Start with the workup that finds the driver.",
    supersedes: { parentSlug: "autoimmune-investigation", subSlug: "neuropathy" },
  },
  {
    slug: "chronic-fatigue-and-sleep",
    parentSlug: "longevity-science",
    name: "Sleep & Fatigue",
    toolSlug: "neurofeedback",
    h1: "Always Tired, Labs Always Normal? What's Actually Running Your Fatigue",
    metaTitle: "Chronic Fatigue & Sleep Issues | Root-Cause Workup",
    metaDescription:
      "Exhausted no matter how much you sleep, with clean labs every time? We test the circadian, HPA-axis, and mitochondrial systems that actually control energy.",
    heroKicker: "Energy & Sleep",
    heroLead:
      "You sleep eight hours and still wake up depleted. Coffee gets you moving, not clear. Your doctor has run a thyroid panel and a CBC twice, both unremarkable, and the advice was to manage stress better. But fatigue isn't a single system, and \"normal\" bloodwork only rules out the handful of markers a standard panel actually checks.",
    whatsGoingOn: {
      heading: "What's Really Going On",
      paragraphs: [
        "Persistent fatigue usually traces back to one of three systems: a circadian rhythm that's fallen out of sync, an HPA axis (the stress-hormone loop between your brain and adrenal glands) stuck in overdrive or flattened out entirely, or mitochondria that simply aren't producing enough cellular energy to keep up with demand.",
        "A standard CBC, thyroid panel, and metabolic panel don't test any of these directly, which is exactly why patients with real, measurable dysfunction are told everything looks fine. The fatigue isn't imaginary; the test just wasn't built to find it.",
      ],
    },
    howWeInvestigate: {
      heading: "How We Investigate",
      paragraphs: [
        "We map cortisol across the entire day rather than a single morning draw, assess circadian and sleep-architecture patterns, and run mitochondrial-function and neurotransmitter panels to see which of the three systems is actually driving the exhaustion.",
        "A 19-channel QEEG brain map adds another layer, showing how your brain's own activity patterns are handling stress, arousal, and rest, information a symptom questionnaire alone can't provide.",
      ],
    },
    howWeTreat: {
      heading: "How We Treat It, Drug-Free",
      paragraphs: [
        "Neurofeedback trains the brain patterns tied to sleep, stress resilience, and emotional regulation directly, using your own qEEG map as the target rather than a one-size-fits-all protocol.",
        "We pair that training with autonomic-regulation work and nutrient support matched to whatever the cortisol and mitochondrial panels surfaced, so the plan addresses the actual mechanism keeping your tank empty instead of another round of sleep-hygiene tips you've already tried.",
      ],
    },
    faqs: [
      {
        question: "Why do I feel tired even when my thyroid panel is normal?",
        answer:
          "Thyroid hormone is one input into energy production, not the whole system. Circadian misalignment, HPA-axis dysfunction, and mitochondrial inefficiency can all produce identical fatigue with a completely normal thyroid panel.",
      },
      {
        question: "What is HPA-axis dysfunction?",
        answer:
          "It's a disruption in the communication loop between your brain and adrenal glands that regulates cortisol. When that rhythm flattens or spikes at the wrong times, you can feel wired at night and exhausted during the day regardless of how much you sleep.",
      },
      {
        question: "Is neurofeedback the same as meditation or biofeedback apps?",
        answer:
          "No. Neurofeedback uses your own real-time qEEG activity to reward specific brain patterns during a supervised session, individualized to your brain map, rather than a general relaxation exercise.",
      },
      {
        question: "How many sessions does it take to see a change in energy?",
        answer:
          "Most patients begin noticing shifts in sleep quality or daytime energy over a course of several weeks, though the exact timeline depends on which systems the workup identifies as involved.",
      },
    ],
    ctaHeading: "Find out which system is actually driving your fatigue.",
    supersedes: { parentSlug: "longevity-science", subSlug: "sleep-fatigue" },
  },
  {
    slug: "balance-and-fall-risk",
    parentSlug: "concussion-post-trauma",
    name: "Balance & Strength",
    toolSlug: "functional-neurology",
    h1: "Unsteady on Your Feet? The Balance Workup Most Checkups Skip",
    metaTitle: "Balance & Fall-Risk Workup | Vestibular Testing",
    metaDescription:
      "Feeling off-balance, bumping into doorframes, or worried about falling? We run the vestibular and proprioceptive testing standard visits don't include.",
    heroKicker: "Balance & Mobility",
    heroLead:
      "You catch yourself reaching for the wall more than you used to. Stairs in dim light feel different than they did five years ago. Maybe you've had a near-fall you didn't mention to anyone. A general checkup rarely tests balance directly unless you bring it up, and even then the exam is often a quick one-foot stand, not a real look at the systems that keep you upright.",
    whatsGoingOn: {
      heading: "What's Really Going On",
      paragraphs: [
        "Balance depends on three systems working together: your vestibular system (inner ear), your visual system, and proprioception (the sense of where your joints and muscles are in space), all coordinated by the cerebellum and brainstem in real time.",
        "A past concussion, an inner-ear issue, or simply years of an undertrained system can quietly degrade any one of these without an obvious single symptom, until the cumulative effect shows up as the stumbles, dizziness, or fall-risk that finally gets someone's attention.",
      ],
    },
    howWeInvestigate: {
      heading: "How We Investigate",
      paragraphs: [
        "A functional-neurology assessment tests each system individually: eye-movement tracking and vestibular-ocular reflex testing, computerized posturography to measure how you actually sway and stabilize, and reaction-time testing to see how quickly your nervous system corrects when it's thrown off balance.",
        "That combination tells us which specific circuit is underperforming, rather than lumping every balance complaint into a generic \"getting older\" explanation.",
      ],
    },
    howWeTreat: {
      heading: "How We Treat It, Drug-Free",
      paragraphs: [
        "Once we know which system is lagging, rehab is built to retrain it directly: vestibular and oculomotor exercises if the inner ear or eye-tracking is the weak link, proprioceptive and strength work if joint-position sense or lower-body strength has declined.",
        "Progress is measured, not assumed. We retest posturography and reaction time over the course of care to confirm balance is actually improving and fall risk is actually dropping, not just that you feel a little steadier.",
      ],
    },
    faqs: [
      {
        question: "Is a balance problem always related to the inner ear?",
        answer:
          "Not always. Vision, proprioception, and central processing in the brainstem and cerebellum all contribute. Testing each system separately is the only way to know which one is actually responsible.",
      },
      {
        question: "Can an old concussion cause balance issues years later?",
        answer:
          "Yes. Vestibular and ocular reflexes disrupted by a concussion can remain subtly impaired long after the initial symptoms resolve, especially if they were never specifically retrained.",
      },
      {
        question: "What is posturography?",
        answer:
          "It's a computerized test that measures how much you sway and how you correct yourself while standing under different visual and surface conditions, giving an objective baseline instead of a subjective \"how steady do you feel\" answer.",
      },
      {
        question: "Is this workup useful even if I haven't fallen yet?",
        answer:
          "Yes. Identifying a declining system before a fall happens is the point. Fall-risk reduction works best as prevention, not as damage control after an injury.",
      },
    ],
    ctaHeading:
      "Find out which system is actually behind your balance, before a fall does.",
    supersedes: { parentSlug: "concussion-post-trauma", subSlug: "balance-strength" },
  },
  {
    slug: "memory-and-cognitive-decline",
    parentSlug: "brain-brightening",
    name: "Memory & Cognition",
    toolSlug: "neurofeedback",
    h1: "Losing Words or Focus? What's Really Behind Memory Decline",
    metaTitle: "Memory & Cognitive Decline | Root-Cause Brain Workup",
    metaDescription:
      "Forgetting words, losing your train of thought, or worried about early decline? We investigate the vascular, metabolic, and toxin drivers behind it.",
    heroKicker: "Memory & Focus",
    heroLead:
      "You walk into a room and forget why. A name you've known for years sits just out of reach. Maybe a family member has said something, or maybe you've just noticed it yourself: the sharpness you used to count on isn't as reliable anymore. A clean MRI or a passing memory-screening score doesn't mean nothing is happening; it means the tool used wasn't sensitive enough to catch it yet.",
    whatsGoingOn: {
      heading: "What's Really Going On",
      paragraphs: [
        "Cognitive decline rarely has one cause. Reduced cerebral blood flow, chronic low-grade inflammation, blood-sugar swings, toxin exposure, and mitochondrial energy shortfalls can all erode memory and focus years before structural changes show up on a scan.",
        "Standard imaging is built to catch structural problems, like a tumor or a stroke, not the functional decline that happens when the brain's supporting systems are running below capacity. That gap is why so many people are told their scan is normal while their day-to-day experience says otherwise.",
      ],
    },
    howWeInvestigate: {
      heading: "How We Investigate",
      paragraphs: [
        "A 19-channel QEEG brain map shows how your brain is actually functioning in real time (processing speed, regional activity, and communication between regions), which catches functional decline long before it becomes structural.",
        "We pair that with metabolic, inflammatory, and toxin-exposure panels to identify which of the upstream systems is dragging cognition down, rather than treating memory loss as a single, uninvestigated diagnosis.",
      ],
    },
    howWeTreat: {
      heading: "How We Treat It, Drug-Free",
      paragraphs: [
        "Neurofeedback retrains the specific brain regions your qEEG map identifies as underperforming, using your own real-time brain activity as the target for improvement.",
        "We combine that with photobiomodulation for cellular energy support and nutrient or detox protocols matched to whatever metabolic or toxin findings the workup surfaced, addressing cognition from both the neurological and metabolic side at once.",
      ],
    },
    faqs: [
      {
        question: "Is memory decline always early Alzheimer's?",
        answer:
          "No. Vascular, metabolic, inflammatory, and toxin-related factors can all produce the same symptoms and are far more common, and more addressable, than the diagnosis patients often fear first.",
      },
      {
        question: "Can a normal MRI rule out a cognitive problem?",
        answer:
          "An MRI rules out structural issues like tumors or strokes. It doesn't measure functional brain activity, blood flow efficiency, or metabolic status, all of which can be impaired while the MRI still looks clean.",
      },
      {
        question: "What does a QEEG brain map actually show?",
        answer:
          "It shows the electrical activity patterns across your brain in detail, highlighting regions that are underactive, overactive, or poorly connected to others, information a standard scan doesn't provide.",
      },
      {
        question: "Why start now if my symptoms are still mild?",
        answer:
          "Early intervention targets the systems involved while they're still responsive to retraining and repair. Waiting until decline is more advanced generally means a longer road back.",
      },
    ],
    ctaHeading:
      "Investigate the drivers behind memory decline while early intervention still has the most to work with.",
    supersedes: { parentSlug: "brain-brightening", subSlug: "memory-cognition" },
  },
  {
    slug: "autoimmune-disease-symptoms",
    parentSlug: "autoimmune-investigation",
    name: "Autoimmune Disease",
    toolSlug: "neurofeedback",
    h1: "Flares, Fatigue, and No Real Answers? Investigating Autoimmune Disease at the Root",
    metaTitle: "Autoimmune Disease Symptoms | Trigger-Based Workup",
    metaDescription:
      "Living with flares, fatigue, or a confirmed autoimmune diagnosis but no real plan? We map the specific triggers driving your immune system, not just the flare.",
    heroKicker: "Autoimmune Health",
    heroLead:
      "Maybe you already have a diagnosis, or maybe you're still collecting specialists who all agree something is wrong but can't say exactly what. Either way, the pattern is familiar: a flare, a round of symptom management, and a return appointment scheduled for whenever it happens again. What's usually missing is any real attempt to find out what's setting the immune system off in the first place.",
    whatsGoingOn: {
      heading: "What's Really Going On",
      paragraphs: [
        "Autoimmune disease is your immune system attacking your own tissue, but the disease itself is rarely the starting point of the investigation, it's the endpoint of one or more underlying triggers that pushed the immune system into that state.",
        "Food antigens, heavy metals, chronic stress, hormone imbalance, pesticide exposure, unresolved trauma, mold and mycotoxins, and post-viral immune dysregulation are all documented triggers. Managing the flare without identifying which of these is active is why symptoms keep resurfacing on their own schedule.",
      ],
    },
    howWeInvestigate: {
      heading: "How We Investigate",
      paragraphs: [
        "We use a trigger-mapping framework built specifically for this: predictive-antibody panels, gut-barrier and molecular-mimicry testing, food-sensitivity and microbiome analysis, and a review of environmental and hormonal exposure, organized around Dr. Santucci's own Autoimmune Triggers model.",
        "The goal is to name which trigger, or combination of triggers, is actually active in your case, rather than treating every autoimmune presentation with the same generic anti-inflammatory approach.",
      ],
    },
    howWeTreat: {
      heading: "How We Treat It, Drug-Free",
      paragraphs: [
        "Care is built around whatever the trigger panel reveals: targeted nutrition and gut repair where the intestinal barrier has broken down, detox support where metal or mold exposure is active, and hormone or stress-axis work where that's the driver.",
        "Neurofeedback is often part of the plan as well, since chronic immune activation frequently disrupts sleep, mood, and stress regulation; retraining those patterns supports the nervous system while the underlying triggers are being addressed.",
      ],
    },
    faqs: [
      {
        question: "Can autoimmune triggers really be identified with testing?",
        answer:
          "Predictive-antibody, gut-barrier, and food-sensitivity panels can flag several of the most common documented triggers. No single test catches everything, which is why we look at multiple categories together rather than one panel in isolation.",
      },
      {
        question: "Does this replace my rheumatologist or specialist?",
        answer:
          "No. This is an investigative layer aimed at identifying and addressing triggers alongside your existing specialist care, not a replacement for disease-specific monitoring or medication decisions.",
      },
      {
        question: "What if I don't have a formal diagnosis yet, just symptoms?",
        answer:
          "That's a common starting point here. Trigger investigation doesn't require a confirmed diagnosis first, and identifying an active trigger early can shape care before a flare becomes a formal disease pattern.",
      },
      {
        question: "Is mold or mycotoxin exposure really connected to autoimmune flares?",
        answer:
          "Yes, it's one of the documented trigger categories in the model we use, and in this clinic's experience it shows up more often than most patients expect once it's actually tested for.",
      },
    ],
    ctaHeading: "Name the trigger behind your flare, don't just manage the next one.",
  },
  {
    slug: "brain-fog",
    parentSlug: "brain-brightening",
    name: "Brain Fog",
    toolSlug: "functional-neurology",
    h1: "Brain Fog With Normal Labs? Here's What Standard Testing Misses",
    metaTitle: "Brain Fog Workup | When Labs Are Normal",
    metaDescription:
      "Foggy thinking, trouble concentrating, and a stack of normal labs? We test the circuits and systems standard bloodwork doesn't cover.",
    heroKicker: "Cognitive Clarity",
    heroLead:
      "It's not that you can't think, it's that everything takes more effort than it should. Simple decisions feel heavier. You reread the same paragraph twice. You've had labs drawn, maybe more than once, and every result comes back in range, which somehow makes it feel worse: if nothing's wrong on paper, why does it feel this way?",
    whatsGoingOn: {
      heading: "What's Really Going On",
      paragraphs: [
        "Brain fog is a functional symptom, not a lab value, which is exactly why it doesn't show up on a standard metabolic panel or CBC. It reflects how efficiently specific neural circuits are processing information moment to moment, something bloodwork was never designed to measure.",
        "Underperforming attention and processing circuits, low-grade systemic inflammation, blood-sugar instability, and disrupted autonomic regulation are common contributors, often overlapping, which is part of why the fog can feel inconsistent from one day to the next.",
      ],
    },
    howWeInvestigate: {
      heading: "How We Investigate",
      paragraphs: [
        "A functional-neurology assessment tests the circuits involved in attention and processing directly: eye-movement tracking, reaction-time testing, and autonomic-regulation measures that reveal how your nervous system is actually performing under load.",
        "We combine that with a 19-channel QEEG brain map and metabolic/inflammatory panels, so the picture includes both how your brain is functioning right now and what's driving that function upstream.",
      ],
    },
    howWeTreat: {
      heading: "How We Treat It, Drug-Free",
      paragraphs: [
        "Rehab is built around the specific circuits your assessment flags as underperforming, using targeted functional-neurology exercises that retrain attention, processing speed, and autonomic regulation directly.",
        "Where the workup shows a metabolic or inflammatory contributor, we address that in parallel with nutrient support and lifestyle-matched care, so the fog is being cleared from both the circuit level and the systemic level at once.",
      ],
    },
    faqs: [
      {
        question: "Why does brain fog happen even with normal bloodwork?",
        answer:
          "Bloodwork measures chemistry in circulation. Brain fog reflects how efficiently neural circuits are functioning moment to moment, which requires a functional assessment, not a blood draw, to actually see.",
      },
      {
        question: "Is brain fog a sign of a serious neurological disease?",
        answer:
          "Usually not. It's far more commonly tied to inflammation, blood-sugar instability, autonomic dysregulation, or circuit-level inefficiency, all of which are investigatable and addressable without assuming the worst first.",
      },
      {
        question: "How is this different from just getting more sleep or reducing stress?",
        answer:
          "Those steps help but don't address an already underperforming circuit directly. Functional-neurology rehab retrains the specific attention and processing pathways involved, rather than relying on general lifestyle advice alone.",
      },
      {
        question: "Can brain fog really be measured objectively?",
        answer:
          "Yes. Reaction-time testing, eye-movement tracking, and QEEG brain mapping all produce objective, repeatable measures of the circuits involved, which lets us track whether the fog is actually lifting.",
      },
    ],
    ctaHeading: "Test the circuits behind the fog, not just the bloodwork around it.",
  },
  {
    slug: "post-concussion-syndrome",
    parentSlug: "concussion-post-trauma",
    name: "Post-Concussion Syndrome",
    toolSlug: "violet-laser",
    h1: "Still Not Right Since That Concussion? Why Old Head Injuries Linger",
    metaTitle: "Post-Concussion Syndrome | Recovery Beyond \"Rest and Wait\"",
    metaDescription:
      "Months or years past a concussion and still not yourself? We investigate the vestibular, autonomic, and cellular systems \"rest and wait\" never addressed.",
    heroKicker: "Concussion Recovery",
    heroLead:
      "It's been a while since the hit, long enough that most people around you assume you've recovered. But the headaches still show up under fluorescent lights, screens tire you out faster than they used to, and something about your focus or your balance never quite reset. You were told to rest and give it time. Time passed. The symptoms didn't fully leave.",
    whatsGoingOn: {
      heading: "What's Really Going On",
      paragraphs: [
        "A concussion disrupts several systems at once: the vestibular-ocular reflexes that keep your vision stable when you move, autonomic regulation (heart rate and blood-pressure response), and cellular energy production in the affected brain regions.",
        "\"Rest and wait\" addresses none of these directly, it simply avoids provoking symptoms while hoping the underlying disruption resolves on its own. For a meaningful share of people, especially past the initial weeks, it doesn't resolve on its own, which is why lingering post-concussive symptoms are more common than most patients realize.",
      ],
    },
    howWeInvestigate: {
      heading: "How We Investigate",
      paragraphs: [
        "A functional-neurology assessment maps exactly which circuits are still affected: vestibular-ocular reflex testing, eye-movement tracking, autonomic response testing, and cognitive-processing measures, alongside a QEEG brain map to see how the affected regions are functioning now.",
        "This turns \"I'm still not right\" into a specific list of underperforming systems, which is what actually determines the rehab plan.",
      ],
    },
    howWeTreat: {
      heading: "How We Treat It, Drug-Free",
      paragraphs: [
        "Active rehab replaces continued rest: vestibular and oculomotor retraining, autonomic-regulation work, and hands-on functional-neurology therapy tuned to the circuits your assessment identified.",
        "Violet laser therapy supports the cellular side of recovery, applied transcranially to the affected brain regions to boost mitochondrial energy production and reduce lingering inflammation, working alongside the circuit-retraining rather than replacing it.",
      ],
    },
    faqs: [
      {
        question: "Is it too late to treat a concussion from years ago?",
        answer:
          "No. Vestibular, ocular, and autonomic systems can often still be retrained well after the initial injury, since the disruption is functional, not necessarily permanent structural damage.",
      },
      {
        question: "Why did my CT or MRI come back normal if I still have symptoms?",
        answer:
          "Standard imaging is built to catch structural damage like bleeding or fracture. The systems concussion most often disrupts (vestibular reflexes, autonomic regulation, cellular energy) don't show up on that kind of scan.",
      },
      {
        question: "What is violet laser therapy used for in concussion recovery?",
        answer:
          "It's a non-invasive photobiomodulation treatment that supports mitochondrial energy production and reduces inflammation in the treated area, used here to support cellular recovery in brain regions affected by the injury.",
      },
      {
        question: "How common is lingering post-concussion syndrome?",
        answer:
          "More common than most patients expect, especially when the initial approach was limited to rest without any circuit-specific rehab. Many people carry unaddressed post-concussive symptoms for years without connecting them back to the original injury.",
      },
    ],
    ctaHeading: "Recovery doesn't have to be left to time. Find out which circuits are still off.",
  },
  {
    slug: "toxin-mold-illness",
    parentSlug: "environmental-toxins",
    name: "Toxin & Mold Illness",
    toolSlug: "violet-laser",
    h1: "Is Mold Making You Sick? Investigating CIRS and Toxic Exposure",
    metaTitle: "Mold Illness & CIRS | Toxin Exposure Workup",
    metaDescription:
      "Fatigue, brain fog, and nerve symptoms that started after a water-damaged building? We test for mold, metals, and chemical exposure, and how well you clear them.",
    heroKicker: "Toxin Exposure",
    heroLead:
      "It started after you moved into that apartment, or after the roof leak, or you're not sure exactly when, you just know you haven't felt right since. Fatigue that doesn't lift, brain fog, joint aches, maybe nerve tingling, spread across enough different systems that it's hard to describe to a doctor in one sentence, let alone get taken seriously in a fifteen-minute visit.",
    whatsGoingOn: {
      heading: "What's Really Going On",
      paragraphs: [
        "Mold-related illness, often described clinically as Chronic Inflammatory Response Syndrome (CIRS), happens when mycotoxin exposure triggers a persistent inflammatory response that doesn't shut off even after the exposure itself is reduced, especially in people whose genetics make it harder to clear the toxins efficiently.",
        "Heavy metals and everyday chemical exposures can produce an overlapping picture. Because the symptoms show up across neurological, immune, and metabolic systems at once, this is one of the most commonly missed categories in standard care; an all-toxin panel in this clinic has yet to come back clean.",
      ],
    },
    howWeInvestigate: {
      heading: "How We Investigate",
      paragraphs: [
        "We test for the exposure directly with urine mycotoxin and heavy-metal panels, and separately test how efficiently your body clears what it's exposed to, including genetic detox variants like MTHFR that determine whether your natural pathways can keep up.",
        "That combination distinguishes between \"you were exposed\" and \"you can't clear it,\" which is the difference that actually determines the treatment plan.",
      ],
    },
    howWeTreat: {
      heading: "How We Treat It, Drug-Free",
      paragraphs: [
        "Care is built around supporting your own drainage and detox pathways so the toxin burden is actually cleared, not just reduced at the point of exposure, alongside changes that lower ongoing contact with the source.",
        "Violet laser therapy supports cellular energy and reduces local inflammation while your detox pathways are being rebuilt, and we retest the burden panels over time to confirm the load is actually coming down, not assumed to be improving.",
      ],
    },
    faqs: [
      {
        question: "How do I know if my symptoms are from mold or something else?",
        answer:
          "Urine mycotoxin testing and a review of your exposure history (past water damage, workplace, prior residences) are the most direct way to confirm mold as an active driver rather than guessing from symptoms alone.",
      },
      {
        question: "What is CIRS?",
        answer:
          "Chronic Inflammatory Response Syndrome is a persistent, multi-system inflammatory reaction to mold and biotoxin exposure that continues even after the exposure is reduced, particularly in genetically susceptible individuals.",
      },
      {
        question: "Can everyone clear mold toxins the same way?",
        answer:
          "No. Genetic variants like MTHFR affect how efficiently your body processes and clears these toxins, which is why two people with the same exposure can have very different symptom severity.",
      },
      {
        question: "Do I need to move out of my home to get better?",
        answer:
          "Reducing ongoing exposure matters, but recovery also depends on actively supporting your detox pathways. Testing helps clarify how much of your symptom picture is exposure versus your body's clearance capacity.",
      },
    ],
    ctaHeading: "Test the exposure, and how well your body is actually clearing it.",
  },
  {
    slug: "biological-aging",
    parentSlug: "longevity-science",
    name: "Biological Aging",
    toolSlug: "longevity-testing",
    h1: "How Old Is Your Body, Really? Measuring Biological Age",
    metaTitle: "Biological Age Testing | Longevity Workup",
    metaDescription:
      "Your birthdate doesn't tell you how your cells are actually aging. We measure biological age directly and build a plan around the results.",
    heroKicker: "Longevity",
    heroLead:
      "You're not looking for a diagnosis, you're looking for a real answer to a simple question: how well is your body actually holding up, compared to what your age on paper suggests? A standard physical checks a handful of markers built to catch disease, not to measure how fast, or slow, you're actually aging at the cellular level.",
    whatsGoingOn: {
      heading: "What's Really Going On",
      paragraphs: [
        "Biological age and chronological age are not the same thing. Two 50-year-olds can have very different cellular aging trajectories depending on mitochondrial function, inflammatory load, cellular senescence (the buildup of aged, dysfunctional cells), and cognitive health, none of which show up on a standard annual physical.",
        "Most \"anti-aging\" advice skips the measurement step entirely, recommending supplements or routines without ever establishing where you actually stand first. Without a baseline, there's no way to know whether anything is working.",
      ],
    },
    howWeInvestigate: {
      heading: "How We Investigate",
      paragraphs: [
        "We measure biological age directly through epigenetic-clock testing, alongside mitochondrial-function markers and cellular-senescence indicators, giving an objective picture of where your systems actually stand versus your birth certificate.",
        "IntellxxDNA cognitive genomics and comprehensive DNA and neurotransmitter testing round out the picture, since cognitive health is one of the clearest early indicators of how well the rest of the aging process is being managed.",
      ],
    },
    howWeTreat: {
      heading: "How We Treat It, Drug-Free",
      paragraphs: [
        "The plan is personalized to what the panels show: targeted nutrition, movement prescriptions, NAD+ pathway support, and specific lifestyle changes aimed at slowing cellular aging rather than a generic longevity supplement stack.",
        "We re-run the biological-age markers on a schedule to confirm the direction has actually changed, adjusting the plan against measured results instead of a calendar or a guess.",
      ],
    },
    faqs: [
      {
        question: "What is an epigenetic clock?",
        answer:
          "It's a lab test that measures chemical changes to your DNA that accumulate with age, producing an estimate of biological age that can differ significantly from your chronological age.",
      },
      {
        question: "Can biological age actually be reversed?",
        answer:
          "Research shows biological age markers can improve with targeted intervention, though the degree varies by individual. Retesting after a defined period is how we confirm whether your specific plan is moving the number.",
      },
      {
        question: "How is this different from a standard annual physical?",
        answer:
          "A standard physical is built to catch existing disease. This workup measures cellular aging markers directly, cellular senescence, mitochondrial function, epigenetic age, that a physical doesn't include.",
      },
      {
        question: "Do I need to already have a health concern to start this?",
        answer:
          "No. Most patients here are proactive, not reactive, using the baseline testing to build a plan before a problem shows up rather than after.",
      },
    ],
    ctaHeading: "Measure how you're actually aging, then build the plan around the numbers.",
  },
  {
    slug: "undiagnosed-illness",
    parentSlug: "idiopathic-unexplained",
    name: "Undiagnosed Illness",
    toolSlug: "longevity-testing",
    h1: "No One Can Tell You What's Wrong? Here's the Workup for Undiagnosed Illness",
    metaTitle: "Undiagnosed Illness Workup | When Tests Come Back Normal",
    metaDescription:
      "Years of symptoms, specialists, and normal test results with no real answer? We investigate the systems standard testing checks in isolation, together.",
    heroKicker: "Unexplained Symptoms",
    heroLead:
      "You've done the rounds: a primary care visit, a referral, maybe two or three specialists, each running their own tests within their own specialty. Every result comes back within range. And yet the symptoms are real, consistent, and clearly not nothing, even if no single test has managed to name them yet.",
    whatsGoingOn: {
      heading: "What's Really Going On",
      paragraphs: [
        "\"Idiopathic\" is a medical term for \"we don't know the cause,\" not a term for \"there is no cause.\" It usually means the testing that's been done so far looked at the right systems in isolation, but never combined them into a single, connected investigation.",
        "Metabolic, neurological, immune, and hormonal function all influence each other. A mild imbalance in one system can look unremarkable on its own panel while still producing a real, compounding effect on how you feel day to day, an effect that only becomes visible when the systems are reviewed together.",
      ],
    },
    howWeInvestigate: {
      heading: "How We Investigate",
      paragraphs: [
        "We investigate these systems as one connected picture rather than as separate referrals: comprehensive metabolic and inflammatory panels, neurological function testing (including QEEG brain mapping), immune markers, and hormonal assessment, layered against each other rather than reviewed in isolation.",
        "Real Age biological-age testing and comprehensive DNA and neurotransmitter panels often add the piece that finally connects a pattern that looked scattered across separate specialist visits.",
      ],
    },
    howWeTreat: {
      heading: "How We Treat It, Drug-Free",
      paragraphs: [
        "Once a driver, or combination of drivers, is identified, care is built directly around it using the same drug-free toolkit used across the rest of the practice: neurofeedback, violet laser, functional-neurology rehab, or targeted nutrient and detox support, matched to what the workup actually surfaced.",
        "We retest the relevant markers along the way to confirm the change is measurable, not just that symptoms feel a little different, so you leave with evidence the driver was actually found and is actually responding.",
      ],
    },
    faqs: [
      {
        question: "What does \"idiopathic\" actually mean?",
        answer:
          "It means the cause hasn't been identified yet, not that there isn't one. It's most often a sign that the testing so far hasn't connected the right systems together, rather than a final answer.",
      },
      {
        question: "I've already seen multiple specialists. What would be different here?",
        answer:
          "Specialist visits typically test within a single system. We look at metabolic, neurological, immune, and hormonal function together, which is often where the connecting driver becomes visible for the first time.",
      },
      {
        question: "What if my case really doesn't have a physical explanation?",
        answer:
          "In this clinic's experience, that's rarely the outcome once systems are investigated together rather than separately. The goal of the workup is to test that possibility directly rather than assume it.",
      },
      {
        question: "How long does a full workup like this take?",
        answer:
          "It depends on how many systems need testing and how quickly results come back, but most patients have a working picture of likely drivers within the first phase of testing, with care beginning from there.",
      },
    ],
    ctaHeading: "Get the systems investigated together, not one specialist referral at a time.",
  },
];

export function findConditionArticle(parentSlug: string, slug: string) {
  return conditionArticles.find(
    (a) => a.parentSlug === parentSlug && a.slug === slug,
  );
}

/** Returns the article (if any) that supersedes the given sub-condition page, for canonical purposes. */
export function findSupersedingArticle(parentSlug: string, subSlug: string) {
  return conditionArticles.find(
    (a) =>
      a.supersedes?.parentSlug === parentSlug &&
      a.supersedes?.subSlug === subSlug,
  );
}

/** Condition articles that cross-link to a given /tools/[slug] page, for reciprocal linking. */
export function articlesForTool(toolSlug: string) {
  return conditionArticles.filter((a) => a.toolSlug === toolSlug);
}
