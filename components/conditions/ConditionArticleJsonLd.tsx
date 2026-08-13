import type { ConditionArticle } from "@/content/conditionArticles";

interface ConditionArticleJsonLdProps {
  article: ConditionArticle;
  url: string;
}

export default function ConditionArticleJsonLd({
  article,
  url,
}: ConditionArticleJsonLdProps) {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `${article.name} | NeuroIntegrative Care of Los Gatos`,
    description: article.metaDescription,
    url,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "NeuroIntegrative Care of Los Gatos",
      url: "https://neurointegrativecareoflosgatos.com/",
    },
    about: {
      "@type": "MedicalCondition",
      name: article.name,
    },
    specialty: { "@type": "MedicalSpecialty", name: "Neurology" },
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
    lastReviewed: new Date().toISOString().split("T")[0],
    reviewedBy: {
      "@type": "Physician",
      name: "Dr. Thomas Santucci",
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      description: article.whatsGoingOn.paragraphs.join(" "),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
