import { Newspaper } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { pageMeta } from "../../constants/content";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata(pageMeta.news.title, pageMeta.news.description);

export default function NewsPage() { return <><Navbar /><main><PageHeader eyebrow="News & notes" title="A quiet place for updates." description="Product launches, ideas we’re exploring and the occasional look behind the scenes. Check back soon." /><Section className="empty-state-section"><Container><div className="empty-state"><div className="empty-icon"><Newspaper size={30} strokeWidth={1.3} /></div><p className="eyebrow">Coming soon</p><h2>We&apos;ll have something<br /><span>good to share.</span></h2><p>For now, follow along as we build.</p><Button href="https://www.linkedin.com" variant="secondary">Follow on LinkedIn</Button></div></Container></Section></main><Footer /></> }
import type { Metadata } from "next";
