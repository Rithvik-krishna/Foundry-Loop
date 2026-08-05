import type { MetadataRoute } from "next";
import { site } from "../constants/content";

const routes = ["", "/about", "/products", "/news", "/careers", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}
