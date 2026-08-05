import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://foundryandloop.com"),
  title: { default: "Foundry & Loop — Built with purpose.", template: "%s — Foundry & Loop" },
  description: "Foundry & Loop is a technology company building software that matters.",
  keywords: ["Foundry & Loop", "technology company", "artificial intelligence", "software products"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "Foundry & Loop — Built with purpose.", description: "Foundry & Loop is a technology company building software that matters.", type: "website", siteName: "Foundry & Loop", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Foundry & Loop — Building software that matters." }] },
  twitter: { card: "summary_large_image", title: "Foundry & Loop — Built with purpose.", description: "Foundry & Loop is a technology company building software that matters.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('foundry-theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}` }} /></head><body>{children}</body></html>;
}
