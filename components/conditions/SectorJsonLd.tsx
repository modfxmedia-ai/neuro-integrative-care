import type { Condition } from "@/content/conditions";

interface SectorJsonLdProps {
  condition: Condition;
  url: string;
}

export default function SectorJsonLd({ condition, url }: SectorJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `${condition.name} | NeuroIntegrative Care of Los Gatos`,
    description: condition.heroLine,
    url,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "NeuroIntegrative Care of Los Gatos",
      url: "https://neurointegrativecareoflosgatos.com/",
    },
    about: {
      "@type": "MedicalCondition",
      name: condition.name,
    },
    specialty: {
      "@type": "MedicalSpecialty",
      name: "Neurology",
    },
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
    lastReviewed: new Date().toISOString().split("T")[0],
    reviewedBy: {
      "@type": "Physician",
      name: "Dr. Thomas Santucci",
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      description: condition.whatWeInvestigate,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
