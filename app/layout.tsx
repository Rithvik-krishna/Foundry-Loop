import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { pageMeta, site } from "../constants/content";
import { createMetadata } from "../lib/seo";

const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "300 700",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...createMetadata(pageMeta.home.title, pageMeta.home.description),
  keywords: [site.name, "technology company", "artificial intelligence", "software products"],
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
};

export const viewport: Viewport = { colorScheme: "light dark", themeColor: [{ media: "(prefers-color-scheme: light)", color: "#fbfcfe" }, { media: "(prefers-color-scheme: dark)", color: "#0b0f1c" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('foundry-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}` }} /></head><body className={inter.variable}>{children}</body></html>;
}
