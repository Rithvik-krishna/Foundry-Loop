import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { AnimatedSection } from "./AnimatedSection";

export function Hero() {
  return <section className="hero"><Container><div className="hero-grid"><AnimatedSection className="hero-copy"><p className="eyebrow hero-eyebrow"><span /> Independent technology company</p><h1>Building software <em>that matters.</em></h1><p className="hero-description">Foundry &amp; Loop is a technology company that designs, builds and scales software products across artificial intelligence, SaaS, developer tools and future technologies.</p><div className="hero-actions"><Button href="/products">Explore products</Button><Button href="/about" variant="secondary">About us</Button></div></AnimatedSection><AnimatedSection className="hero-visual" delay={0.12}><div className="hero-image"><Image src="/images/technology.jpg" alt="Blue illuminated circuit board close-up" fill priority sizes="(max-width: 900px) 100vw, 52vw" /></div><div className="hero-floating-card"><span className="status-dot" /> BUILD WITH PURPOSE <strong>01</strong></div><div className="hero-caption"><span>01 — 03</span><span>Where ideas become useful.</span></div></AnimatedSection></div><div className="hero-footer"><span>Foundry &amp; Loop / 2026</span><span className="scroll-cue">Scroll to explore <ArrowDown size={15} /></span><span>AI · SaaS · Systems</span></div></Container></section>;
}
