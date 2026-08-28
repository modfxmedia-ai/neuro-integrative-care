// Sourced from the client's existing testimonials page
// (neurocarelg.com/testimonials) — short pull-quotes and public Google
// Reviews, copied verbatim. Do not paraphrase or embellish; these are
// already-published, client-approved statements.

export interface ShortTestimonial {
  quote: string;
}

export interface GoogleReview {
  quote: string;
  reviewerName: string;
  source: string;
  url: string;
}

export const shortTestimonials: ShortTestimonial[] = [
  {
    quote:
      "I feel 30 years younger...It's your quality of life. You feel you, you feel normal but an energetic you. It's worth it! Totally worth it! Do it!",
  },
  {
    quote:
      "My knees feel much better. I used to walk up the stairs, leaning against the rail. I could go jumping up the stairs now on my own. I can kneel. I haven't been able to kneel in a long time.",
  },
  {
    quote:
      "The pain went away, within a week or so. I don't feel it now at night time anymore. The swelling has gone down. I have more movement.",
  },
];

export const googleReviews: GoogleReview[] = [
  {
    quote:
      "Staff members are awesome and very helpful. Took my Dad for an appointment and he said he was impressed with the knowledge and the explanation the doctor provided him regarding his pain and how best to treat it without surgery. He is looking forward to his follow up.",
    reviewerName: "Mike Nguyen",
    source: "Google Review",
    url: "https://www.google.com/maps/contrib/106799728209359998658/reviews",
  },
  {
    quote: "Friendly and awesome staff! My dad avoided shoulder surgery by getting treated here.",
    reviewerName: "Matt Da",
    source: "Google Review",
    url: "https://www.google.com/maps/contrib/106382372815563172707/reviews",
  },
];

// Homepage "scrolling" Google Reviews strip — a wider pull from the same
// public Google Business listing. Negative/complaint reviews and reviews
// mentioning stem cells (compliance — see patientStories.ts) are excluded;
// remaining quotes are copied verbatim, no paraphrasing. No per-reviewer
// profile links were supplied for these, so `url` falls back to the
// clinic's general Google Maps listing (same one used in OrganizationJsonLd).
const GOOGLE_LISTING_URL =
  "https://www.google.com/maps/search/?api=1&query=20+S+Santa+Cruz+Ave,+Suite+101,+Los+Gatos,+CA+95030";

// Direct link to the practice's Google Business reviews panel (client-provided).
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=23f094ecdfb18531&hl=en&authuser=0&sxsrf=APpeQnuILTSYHyzTw2zgdIGI3KquiRr_dw:1787918770652&kgmid=/g/11fkm8_nm4&q=Advanced+Regen+Medical+-+A+Professional+Medical+Corporation&shem=dlvs1,epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=2134ad6d032f3b46&utm_source=dlvs1,epsd1,ltae,rimspwouoe,sh/x/loc/uni/m1/1#lrd=0x808e3594d03ea06b:0xd8887ace19d92d62,1,,,,";

export const homepageGoogleReviews: GoogleReview[] = [
  {
    quote:
      "Excellent experience! The entire staff are incredibly supportive and friendly. Dr Santucci is absolutely fantastic doctor with a genuine desire to help the patient. The treatments suggested were explained well and made sense. My mother was suffering from a constant pain in her knee which was impacting her daily activities. After receiving the treatment not only the pain has significantly decreased, she also could get back to walking and exercising without constant discomfort. I highly recommend this place for anyone who is looking into regenerative medicine treatments.",
    reviewerName: "Anna Hawkins",
    source: "Google Review",
    url: GOOGLE_LISTING_URL,
  },
  {
    quote:
      "I have not seen Dr Santucci in while. I haven't had too! Something popped into my head today as a reminder of how bad I was when I first started working with him and the team, as apposed to how well I am doing now. Retroactive thank you! Dr Santucci is hands down the best medical professional I have every worked with - smart, not afraid to stand his ground, meditative, inquisitive, and possibly super human.",
    reviewerName: "Chris Prendergast",
    source: "Google Review",
    url: GOOGLE_LISTING_URL,
  },
  {
    quote:
      "Staff members are awesome and very helpful. Took my Dad for an appointment and he said he was impressed with the knowledge and the explanation the doctor provided him regarding his pain and how best to treat it without surgery. He is looking forward to his follow up.",
    reviewerName: "Mike Nguyen",
    source: "Google Review",
    url: GOOGLE_LISTING_URL,
  },
  {
    quote:
      "The staff are very friendly, always very helpful and knowledgeable. Dr Santucci is always working to keep up on current and new alternative treatments. I recommend Advance Regen Medical. I give them 5 Stars.",
    reviewerName: "Roger Martin",
    source: "Google Review",
    url: GOOGLE_LISTING_URL,
  },
  {
    quote:
      "Advanced Regen Medical are Absolute Leaders in Their Field. Everyone in the Office is Professional and Friendly. Dr. Santucci's Practice should definitely be on the Top of Your List. Can't Wait for My Next Appointment. Thank You! Advanced Regen Medical",
    reviewerName: "Dwayne Martinez",
    source: "Google Review",
    url: GOOGLE_LISTING_URL,
  },
  {
    quote:
      "Dr. Santucci offers a unique opportunity to find a solution for your medical issues. Especially concerning joints, nerve systems and traumatic brain injurys. Very nice people, also.",
    reviewerName: "R. Gregory Lombard",
    source: "Google Review",
    url: GOOGLE_LISTING_URL,
  },
  {
    quote:
      "My initial visit was interesting and the staff spent time running through tests to understand my condition. They were thorough and I have made an appointment to follow through on these suggestions and will update once the results are obtained",
    reviewerName: "Leslie Alan Cezar",
    source: "Google Review",
    url: GOOGLE_LISTING_URL,
  },
  {
    quote:
      "I'm so glad I've found this clinic. They have a great staff, explained the treatment to me clearly and above all ive had great results. Thanks!",
    reviewerName: "Chau Nguyen",
    source: "Google Review",
    url: GOOGLE_LISTING_URL,
  },
  {
    quote:
      "Definitely recommend Advanced Regen Medical! What an honest and knowledgeable group they are, and such friendly staff! Better price than anyone else.",
    reviewerName: "Toku H",
    source: "Google Review",
    url: GOOGLE_LISTING_URL,
  },
  {
    quote: "Friendly and awesome staff! My dad avoided shoulder surgery by getting treated here.",
    reviewerName: "Matt Day",
    source: "Google Review",
    url: GOOGLE_LISTING_URL,
  },
  {
    quote: "Friendly and knowledgeable people. Looking forward to working with them.",
    reviewerName: "Tom Powell",
    source: "Google Review",
    url: GOOGLE_LISTING_URL,
  },
  {
    quote: "Friendly and knowledgeable staff",
    reviewerName: "Ken Benson",
    source: "Google Review",
    url: GOOGLE_LISTING_URL,
  },
  {
    quote: "Amazing service!",
    reviewerName: "Linda Tran",
    source: "Google Review",
    url: GOOGLE_LISTING_URL,
  },
];

