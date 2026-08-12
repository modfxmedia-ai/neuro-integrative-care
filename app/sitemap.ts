import type { MetadataRoute } from "next";
import { conditions } from "@/content/conditions";

const SITE_URL = "https://neurointegrativecareoflosgatos.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/conditions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/how-we-work`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/programs`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/programs/virtual`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/patient-stories`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/start-here`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
  ];

  conditions.forEach((parent) => {
    entries.push({
      url: `${SITE_URL}/conditions/${parent.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
    parent.subConditions?.forEach((sub) => {
      entries.push({
        url: `${SITE_URL}/conditions/${parent.slug}/${sub.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return entries;
}
