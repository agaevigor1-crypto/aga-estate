import type { MetadataRoute } from "next";
import { properties } from "./lib/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://agaestate.uz";
  const pages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/catalog`, changeFrequency: "daily", priority: 0.9 },
  ];
  for (const property of properties) {
    pages.push({
      url: `${base}/property/${property.id}`,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }
  return pages;
}
