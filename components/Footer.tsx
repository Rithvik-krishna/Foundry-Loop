import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { Container } from "./Container";

export function Footer() {
  return <footer className="site-footer"><Container><div className="footer-top"><BrandLogo dark /><p>Building software<br />that matters.</p><Link className="footer-contact" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link></div><div className="footer-grid"><div><span className="footer-label">Explore</span><Link href="/about">About</Link><Link href="/products">Products</Link><Link href="/news">News</Link></div><div><span className="footer-label">Company</span><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link><a href="mailto:hello@foundryandloop.com">Email</a></div><div><span className="footer-label">Elsewhere</span><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a></div><div className="footer-note"><span className="footer-label">Foundry &amp; Loop</span><p>Purposeful technology for the long term.</p></div></div><div className="footer-bottom"><span>© 2026 Foundry &amp; Loop</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div><span>Built with purpose.</span></div></Container></footer>;
}
