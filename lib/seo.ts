import type { Metadata } from "next";
import { site } from "../constants/content";

export function createMetadata({
  title,
  description,
  path = "",
  type = "website",
  ogImage = "/og.png",
}: {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  ogImage?: string;
}): Metadata {
  const canonicalUrl = `${site.url}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: site.name,
      locale: "en_US",
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
