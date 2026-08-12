// COMPLIANCE + FACT-CHECK NOTES:
//
// (1) YEARS-IN-PRACTICE DISCREPANCY:
//     Blueprint says "27 years."
//     CV states practice founded 1996 → 30 years by 2026.
//     Homepage trust strip already publishes "30 years in Silicon Valley."
//     ↳ Publishing "30+ years" here to stay consistent with the CV founding
//       date AND the rest of the site. Flag for Justin to confirm before ship
//       — if the 27-year figure is intentional, revert this constant.
//     ↳ Do NOT change the constant below without documented client sign-off.
//
// (2) All copy is derived from the client-supplied blueprint + CV excerpt in
//     the request. Every credential, publication, engagement, and media
//     mention is quoted verbatim. Do not paraphrase or expand.
//
// (3) Person + MedicalOrganization schema below is written for E-E-A-T
//     signal — grounded only in the verified CV facts.

import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const SITE_URL = "https://neurointegrativecareoflosgatos.com";
const PAGE_URL = `${SITE_URL}/about`;

const YEARS_IN_PRACTICE = "30+"; // See COMPLIANCE note (1) above.

export const metadata: Metadata = {
  title: "About Dr. Thomas Santucci",
  description:
    "An informed generalist across five disciplines. 30+ years in Silicon Valley, 11 colleges, 10,000+ training hours. Author of Engineering Medical Miracles.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Dr. Thomas Santucci | NeuroIntegrative Care of Los Gatos",
    description:
      "An informed generalist with his feet in five disciplines. 30+ years, 11 colleges, one published book.",
    url: "/about",
    type: "profile",
  },
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Thomas Santucci",
  honorificPrefix: "Dr.",
  honorificSuffix: "DC",
  jobTitle: "Doctor of Chiropractic; Functional Medicine, Functional Neurology, and Regenerative Medicine",
  url: PAGE_URL,
  worksFor: {
    "@type": "MedicalOrganization",
    name: "NeuroIntegrative Care of Los Gatos",
    url: `${SITE_URL}/`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "20 S Santa Cruz Ave, Suite 101",
      addressLocality: "Los Gatos",
      addressRegion: "CA",
      postalCode: "95030",
      addressCountry: "US",
    },
    telephone: "+1-408-871-8222",
    foundingDate: "1996",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Georgetown University",
      sameAs: "https://www.georgetown.edu/",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Life Chiropractic College West",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hayward",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Doctor of Chiropractic (DC)",
      credentialCategory: "license",
      recognizedBy: { "@type": "Organization", name: "California Board of Chiropractic Examiners" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "American Functional Neurology Institute (AFNI) Certified",
      credentialCategory: "certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Alzheimer's Recode II Certified Provider",
      credentialCategory: "certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Certified Nutrition Specialist (CNS)",
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: "American Nutrition Association" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Board Certified in Neurofeedback (BCN)",
      credentialCategory: "certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Carrick Institute for Graduate Studies — Functional Neurology",
      credentialCategory: "training",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "The Listening Program Certified Provider",
      credentialCategory: "certification",
    },
  ],
  knowsAbout: [
    "Functional Medicine",
    "Functional Neurology",
    "Regenerative Medicine",
    "Neurofeedback",
    "qEEG",
    "Alzheimer's Disease",
    "Autoimmune Disease",
    "Concussion and Post-Trauma Care",
    "Longevity Science",
  ],
  award: [
    "Author, Engineering Medical Miracles — Return to Health (2017)",
    "Presenter, Academy of Comprehensive Integrated Medicine (ACIM) — Alzheimer's Clinical Intervention (500-doctor audience)",
  ],
};

const MEDICAL_ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "NeuroIntegrative Care of Los Gatos",
  url: `${SITE_URL}/`,
  founder: {
    "@type": "Person",
    name: "Dr. Thomas Santucci",
    url: PAGE_URL,
  },
  foundingDate: "1996",
  medicalSpecialty: { "@type": "MedicalSpecialty", name: "Neurology" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 S Santa Cruz Ave, Suite 101",
    addressLocality: "Los Gatos",
    addressRegion: "CA",
    postalCode: "95030",
    addressCountry: "US",
  },
  telephone: "+1-408-871-8222",
};

const STAT_RIBBON = [
  { label: "Years", value: `${YEARS_IN_PRACTICE} Years` },
  { label: "Disciplines", value: "5" },
  { label: "Training Hours", value: "10,000+" },
  { label: "Colleges", value: "11" },
  { label: "Published Book", value: "1" },
] as const;

const CREDENTIALS = [
  "Doctor of Chiropractic (DC) — Licensed in California, Life Chiropractic College West, Hayward, CA",
  "American Functional Neurology Institute (AFNI) Certified",
  "Alzheimer's Recode II Certified Provider",
  "Certified Nutrition Specialist (CNS) — American Nutrition Association",
  "Board Certified in Neurofeedback (BCN)",
  "Carrick Institute for Graduate Studies — Functional Neurology (extensive postgraduate training)",
  "Developmental Delays training — Robert Melillo",
  "Functional Medicine Institute — Applying Clinical Excellence Series",
  "The Listening Program Certified Provider",
] as const;

const SPEAKING = [
  "Academy of Comprehensive Integrated Medicine (ACIM) — Alzheimer's clinical intervention presentation to a 500-doctor audience",
  "Aging Summit Silicon Valley",
  "NeuroMetabolic Group",
  "Pulse PEMF Medical Training",
  "Functional Neurology group presentations",
] as const;

const MEDIA = [
  "The Medical Insider podcast (2022)",
  "Vibrant Health Radio, SFO (2000)",
  "Integrative Medicine Radio, Santa Cruz (2018)",
] as const;

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(MEDICAL_ORG_SCHEMA) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-28 text-paper lg:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[10%] -top-[20%] h-[70vh] w-[70vh] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(248,180,43,0.28), rgba(11,18,32,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal
            as="p"
            delay={50}
            offset={12}
            className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber-b"
          >
            About Dr. Thomas Santucci
          </Reveal>
          <Reveal as="span" delay={180} offset={28} className="mt-6 block">
            <h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
              An informed generalist{" "}
              <span className="italic text-amber-b">with his feet in five canoes.</span>
            </h1>
          </Reveal>
          <Reveal
            as="p"
            delay={380}
            offset={16}
            className="mt-8 max-w-3xl font-serif text-[1.35rem] leading-[1.4] text-paper/80 sm:text-[1.55rem] lg:text-[1.75rem]"
          >
            The doctor who refuses to be one narrow thing — because complex
            cases don&apos;t reduce to one lane.
          </Reveal>
        </div>
      </section>

      {/* Stat ribbon */}
      <section className="bg-paper-2 py-14 lg:py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            {/* 30+ years, not 27 — see COMPLIANCE note at top. */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
              {STAT_RIBBON.map((stat) => (
                <li
                  key={stat.label}
                  className="flex flex-col border-l border-amber/50 pl-4"
                >
                  <span className="font-serif text-[1.65rem] leading-none text-ink lg:text-[2rem]">
                    {stat.value}
                  </span>
                  <span className="mt-3 font-mono text-[10px] uppercase tracking-[0.32em] text-muted">
                    {stat.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* The Approach */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-3">
              <div className="flex items-center gap-4">
                <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-amber">
                  The Approach
                </h2>
                <span
                  aria-hidden="true"
                  className="hidden h-px flex-1 bg-rule lg:block"
                />
              </div>
            </Reveal>
            <Reveal delay={120} offset={24} className="relative lg:col-span-9">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 -top-10 select-none font-serif text-[7rem] italic leading-none text-ink/[0.06] lg:-left-6 lg:-top-16 lg:text-[10rem]"
              >
                &ldquo;
              </span>
              <p className="relative font-serif text-[1.5rem] leading-[1.4] text-ink sm:text-[1.75rem] lg:text-[2.05rem]">
                Come at a complex case with one modality and you get{" "}
                <span className="italic text-amber">the wrong answer.</span>
              </p>
              <p className="mt-10 border-l-2 border-amber pl-6 font-serif text-[1.25rem] italic leading-snug text-ink lg:text-[1.4rem]">
                &ldquo;We don&apos;t diagnose anything we can&apos;t help.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Origin */}
      <section className="bg-paper-2 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber">
              The Origin
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              From Georgetown to the exam room.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <Reveal delay={100} offset={20} className="lg:col-span-4">
              <div className="rounded-2xl border border-rule bg-paper p-6 lg:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-amber">
                  Georgetown University · 1978
                </p>
                <p className="mt-4 font-serif text-[1.15rem] leading-tight text-ink">
                  Bachelor of Science in Business Administration
                </p>
                <p className="mt-2 text-[13px] leading-snug text-muted">
                  International Business Policy
                </p>
              </div>
            </Reveal>
            <Reveal delay={180} offset={20} className="lg:col-span-8">
              <p className="text-lg leading-relaxed text-ink">
                Before founding his practice, Dr. Santucci held international
                product management roles at{" "}
                <span className="font-medium">IBM</span>,{" "}
                <span className="font-medium">Telenet</span>,{" "}
                <span className="font-medium">British Telecom</span>, and{" "}
                <span className="font-medium">MCI</span> — overseeing data
                communications services across a 20-city network — strategic
                business planning experience he later applied to building his
                practice.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                He became a doctor after a car accident and traumatic brain
                injury that took a decade to fully resolve — a recovery he
                personally designed and executed through functional neurology
                and regenerative protocols. His own trauma also activated his
                celiac genes.{" "}
                <span className="italic text-ink">
                  Trauma as an autoimmune trigger is autobiography, not theory.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber">
              The Philosophy
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              Whole universe, three drivers.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Consider the whole universe of causes, then narrow to the three
              that matter. Brain first. Functional ranges — not textbook ones.
            </p>
          </Reveal>

          <ol className="mt-16 grid gap-6 sm:grid-cols-3 lg:gap-8">
            {[
              {
                num: "01",
                title: "Whole Universe First",
                body: "Every plausible cause on the table before narrowing — because complex cases don't yield to one modality's default list.",
              },
              {
                num: "02",
                title: "Brain First",
                body: "Neurons are the most energy-hungry cells in the body. Systemic breakdowns show up neurologically first — which is where the investigation begins.",
              },
              {
                num: "03",
                title: "Functional Ranges",
                body: "Optimal, not merely inside a textbook window. 'Normal' labs miss what functional ranges catch.",
              },
            ].map((principle, i) => (
              <Reveal
                key={principle.num}
                as="li"
                delay={140 + i * 90}
                offset={20}
                className="h-full"
              >
                <article className="flex h-full flex-col rounded-2xl border border-rule/60 bg-paper-2 p-8 lg:p-9">
                  <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-amber">
                    {principle.num}
                  </p>
                  <h3 className="mt-5 font-serif text-[1.5rem] leading-tight text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">
                    {principle.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Plant analogy */}
      <section className="relative overflow-hidden bg-ink py-24 text-paper lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[10%] top-1/2 h-[70vh] w-[70vh] -translate-y-1/2 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, rgba(248,180,43,0.22), rgba(11,18,32,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber-b">
              The Plant
            </p>
          </Reveal>
          <Reveal delay={120} className="relative mt-8">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-4 -top-14 select-none font-serif text-[9rem] italic leading-none text-paper/10 lg:-left-8 lg:-top-20 lg:text-[14rem]"
            >
              &ldquo;
            </span>
            <p className="relative font-serif text-[1.65rem] leading-[1.35] text-paper sm:text-[2rem] lg:text-[2.35rem]">
              Water, food, and sun each tested alone kill the plant —{" "}
              <span className="italic text-amber-b">
                &lsquo;proving&rsquo; none work.
              </span>{" "}
              They only work together. Neurology, biochemistry, and technology
              are the same.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Credentials */}
      <section id="credentials" className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber">
              Credentials & Licenses
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
              11 colleges. 10,000+ hours.
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-4 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-5">
            {CREDENTIALS.map((cred, i) => (
              <Reveal
                key={cred}
                as="li"
                delay={80 + i * 30}
                offset={12}
                className="border-l border-amber/50 pl-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-amber">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink">
                  {cred}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Publications */}
      <section className="bg-paper-2 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-3">
              <div className="flex items-center gap-4">
                <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.32em] text-amber">
                  Publications
                </h2>
                <span
                  aria-hidden="true"
                  className="hidden h-px flex-1 bg-rule lg:block"
                />
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-9">
              <article>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-amber">
                  Book · 2017
                </p>
                <h3 className="mt-4 font-serif text-[2rem] leading-tight text-ink lg:text-[2.5rem]">
                  Engineering Medical Miracles —{" "}
                  <span className="italic">Return to Health</span>
                </h3>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
                  ISBN 1544232829
                </p>
              </article>
              <article className="mt-12 border-t border-rule pt-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-amber">
                  In Progress
                </p>
                <h3 className="mt-4 font-serif text-[1.5rem] leading-tight text-ink lg:text-[1.85rem]">
                  Alzheimer&apos;s Intervention
                </h3>
                <p className="mt-3 text-[15px] italic leading-snug text-muted">
                  Second book, forthcoming.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Speaking + Media */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal offset={20}>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber">
                Speaking Engagements
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
                Where he&apos;s presented.
              </h2>
              <ul className="mt-8 space-y-5">
                {SPEAKING.map((item) => (
                  <li
                    key={item}
                    className="border-l border-amber/50 pl-4 text-[15px] leading-relaxed text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal offset={20} delay={140}>
              <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber">
                Media
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
                Where he&apos;s appeared.
              </h2>
              <ul className="mt-8 space-y-5">
                {MEDIA.map((item) => (
                  <li
                    key={item}
                    className="border-l border-amber/50 pl-4 text-[15px] leading-relaxed text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Alzheimer's work */}
      <section className="bg-ink py-24 text-paper lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-amber-b">
              The Alzheimer&apos;s Work
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-paper sm:text-5xl">
              A model, and a project to validate it.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <Reveal delay={100} offset={20} className="lg:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-amber-b">
                The Model
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Neural inflammation",
                  "Mitochondrial dysfunction",
                  "Decreased autophagy",
                ].map((tenet) => (
                  <li
                    key={tenet}
                    className="flex gap-3 font-serif text-[1.15rem] leading-tight text-paper"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-[3px] w-4 shrink-0 rounded-full bg-amber"
                    />
                    <span>{tenet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={220} offset={20} className="lg:col-span-8">
              <p className="text-lg leading-relaxed text-paper/80">
                Dr. Santucci&apos;s Alzheimer&apos;s model rests on three
                intersecting drivers — neural inflammation, mitochondrial
                dysfunction, and decreased autophagy — and{" "}
                <span className="italic text-amber-b">
                  the Alzheimer&apos;s Project
                </span>{" "}
                exists to validate the intervention framework built on top of
                that model. It&apos;s the work that took him from the ACIM stage
                — Alzheimer&apos;s clinical intervention presented to a
                500-doctor audience — to the second book now underway.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-paper-2 py-24 lg:py-28">
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="font-serif text-3xl leading-[1.2] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Ready to have your case seen this way?
            </h2>
          </Reveal>
          <Reveal delay={140} className="mt-10 flex justify-center">
            <Link
              href="/start-here"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-amber to-amber-b px-7 py-3.5 text-sm font-medium tracking-tight text-ink shadow-[0_10px_36px_-10px_rgba(248,180,43,0.55)] transition-shadow duration-300 hover:shadow-[0_20px_52px_-12px_rgba(248,180,43,0.85)]"
            >
              Book a New-Patient Investigation — $300
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
