import { ArrowUpRight, HeartHandshake, MoveUpRight } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { SectionTitle } from "../../components/SectionTitle";
import { pageMeta } from "../../constants/content";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata(pageMeta.careers.title, pageMeta.careers.description);

export default function CareersPage() { return <><Navbar /><main><PageHeader eyebrow="Careers" title="Do the best work of your life." description="We’re assembling a small, ambitious team to build products with purpose. If that sounds like you, we’d love to hear from you." /><Section className="careers-section"><Container><div className="careers-grid"><SectionTitle eyebrow="Why Foundry & Loop">Work that feels<br /><span>worth doing.</span></SectionTitle><div className="careers-copy"><p>We believe great teams are built on trust, autonomy and a shared standard for quality. You’ll have room to think deeply, move quickly and take real ownership.</p><div className="career-perks"><span><HeartHandshake size={18} /> Small, senior teams</span><span><MoveUpRight size={18} /> Meaningful ownership</span><span><ArrowUpRight size={18} /> Flexible by design</span></div></div></div></Container></Section><Section className="open-roles"><Container><div className="open-roles-card"><div><p className="eyebrow">Open roles</p><h2>Nothing open<br /><span>just yet.</span></h2><p>We’re not hiring for a specific role today, but we’re always open to thoughtful introductions.</p></div><Button href="mailto:hello@foundryandloop.com">Send an introduction</Button></div></Container></Section></main><Footer /></> }
import type { Metadata } from "next";
