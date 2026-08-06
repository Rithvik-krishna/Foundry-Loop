import type { MetadataRoute } from "next";
import { site } from "../constants/content";

const routes = ["", "/about", "/how-we-build", "/products", "/news", "/careers", "/contact", "/privacy", "/terms"];
const lastModified = new Date("2026-08-06T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${site.url}${route}`, lastModified, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}
