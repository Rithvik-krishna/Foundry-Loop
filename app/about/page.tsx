import { ArrowUpRight, Check } from "lucide-react";
import { AnimatedSection } from "../../components/AnimatedSection";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { MediaImage } from "../../components/MediaImage";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { SectionTitle } from "../../components/SectionTitle";
import { Timeline } from "../../components/Timeline";
import { ValueCard } from "../../components/ValueCard";
import { pageMeta, pagesContent } from "../../constants/content";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata(pageMeta.about.title, pageMeta.about.description);

export default function AboutPage() { const content = pagesContent.about; return <><Navbar /><main><PageHeader {...content.header} /><Section className="about-photo-section"><Container><div className="about-photo-grid"><AnimatedSection className="about-photo-main"><MediaImage {...content.image} sizes="(max-width: 900px) 100vw, 65vw" /></AnimatedSection><AnimatedSection className="about-photo-note" delay={0.1}><span className="eyebrow">Our belief</span><p>{content.belief}</p><span className="note-index">02 / 05</span></AnimatedSection></div></Container></Section><Section className="mission-section"><Container><div className="mission-grid"><SectionTitle eyebrow={content.mission.eyebrow}>{content.mission.title}<br /><span>{content.mission.emphasis}</span></SectionTitle><div className="mission-copy"><p className="lead">{content.mission.lead}</p><p>{content.mission.description}</p><Button href={content.mission.cta.href}>{content.mission.cta.label}</Button></div></div></Container></Section><Section className="about-values"><Container><SectionTitle eyebrow="Our values">The principles behind<br /><span>every product.</span></SectionTitle><div className="about-values-list">{content.values.map((value) => <ValueCard key={value.number} {...value}>{value.text}</ValueCard>)}</div></Container></Section><Section className="culture-section"><Container><div className="culture-grid"><div><p className="eyebrow">Culture</p><h2>Curiosity is a<br /><span>competitive advantage.</span></h2></div><div className="culture-list">{content.culture.map((item) => <span key={item}><Check size={18} /> {item}</span>)}</div></div></Container></Section><Section className="about-timeline"><Container><div className="timeline-intro"><SectionTitle eyebrow="How we build">A simple process.<br /><span>High standards.</span></SectionTitle><p>Small teams, clear thinking and a respect for the details.</p></div><Timeline items={[{ step: "01 / Understand", title: "Find the signal.", text: "We spend time with the problem before we touch the solution." }, { step: "02 / Build", title: "Make the first useful thing.", text: "A focused product, shaped by real people and real feedback." }, { step: "03 / Compound", title: "Keep making it better.", text: "A growing ecosystem of products that earn their place in people’s lives." }]} /></Container></Section><Section className="cta-section"><Container><div className="cta-card"><div><p className="eyebrow">Work with us</p><h2>Let’s make the<br /><span>next useful thing.</span></h2></div><Button href="/contact">Get in touch</Button><ArrowUpRight className="cta-spark" size={110} strokeWidth={0.8} /></div></Container></Section></main><Footer /></> }
import type { Metadata } from "next";
