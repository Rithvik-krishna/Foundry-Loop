import { site } from "../constants/content";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": site.name,
    "alternateName": ["Foundry and Loop", "Foundry & Loop Technology"],
    "url": site.url,
    "logo": `${site.url}/logo-dark.png`,
    "description": "Foundry & Loop is an independent technology company building AI-powered software and SaaS products.",
    "sameAs": [site.socials.linkedin, site.socials.github],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": site.name,
    "alternateName": ["Foundry and Loop", "Foundry & Loop Technology"],
    "url": site.url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  url,
  category,
}: {
  name: string;
  description: string;
  url: string;
  category: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "applicationCategory": category,
    "operatingSystem": "All",
    "description": description,
    "url": url,
    "author": {
      "@type": "Organization",
      "name": site.name,
      "url": site.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  author,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished,
    "author": {
      "@type": "Organization",
      "name": author || site.name,
      "url": site.url,
    },
    "publisher": {
      "@type": "Organization",
      "name": site.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${site.url}/logo-dark.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
