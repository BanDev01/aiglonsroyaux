import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { sections } from "@/data/sections";
import { newsArticles } from "@/data/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/a-propos",
    "/sections",
    "/admissions",
    "/vie-scolaire",
    "/galerie",
    "/contact",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const sectionRoutes = sections.map((section) => ({
    url: `${siteConfig.url}/sections/${section.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const newsRoutes = newsArticles.map((article) => ({
    url: `${siteConfig.url}/actualites/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...sectionRoutes, ...newsRoutes];
}
