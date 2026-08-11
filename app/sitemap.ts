import type { MetadataRoute } from "next";
import { site, articles } from "../constants/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/products/chameleon",
    "/news",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route.startsWith("/products") ? 0.9 : 0.8,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${site.url}/news/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
