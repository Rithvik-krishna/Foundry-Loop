import type { Metadata } from "next";
import { site } from "../constants/content";

export function createMetadata(title: string, description: string): Metadata {
  const fullTitle = title === site.tagline ? `${site.name} — ${site.tagline}` : `${title} — ${site.name}`;
  return {
    title,
    description,
    openGraph: { title: fullTitle, description, type: "website", siteName: site.name, images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/og.png"] },
  };
}
