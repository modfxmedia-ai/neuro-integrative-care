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
