import { site } from "../constants/content";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        "name": site.name,
        "alternateName": "Foundry and Loop",
        "url": `${site.url}/`,
        "logo": {
          "@type": "ImageObject",
          "@id": `${site.url}/#logo`,
          "url": `${site.url}/logo-dark.png`,
          "caption": site.name,
        },
        "description": "Foundry & Loop is an independent technology company building AI-powered software and SaaS products designed to solve real-world problems.",
        "sameAs": [site.socials.linkedin, site.socials.github],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        "url": `${site.url}/`,
        "name": site.name,
        "alternateName": "Foundry and Loop",
        "publisher": {
          "@id": `${site.url}/#organization`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  // Provided for backward compatibility if imported separately
  return null;
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
      "@id": `${site.url}/#organization`,
      "name": site.name,
      "url": `${site.url}/`,
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
      "@id": `${site.url}/#organization`,
      "name": author || site.name,
      "url": `${site.url}/`,
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
