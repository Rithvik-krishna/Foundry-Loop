import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { pageMeta, site } from "../constants/content";
import { createMetadata } from "../lib/seo";
import { OrganizationJsonLd, WebSiteJsonLd } from "../components/JsonLd";

const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "300 700",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...createMetadata({
    title: pageMeta.home.title,
    description: pageMeta.home.description,
  }),
  keywords: [
    site.name,
    "Foundry and Loop",
    "software company",
    "technology company",
    "SaaS company",
    "AI software company",
    "AI products",
    "SaaS products",
    "business software",
    "artificial intelligence",
  ],
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfcfe" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f1c" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('foundry-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "y0izsdzqq3");`,
          }}
        />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
