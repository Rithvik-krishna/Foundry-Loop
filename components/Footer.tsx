import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { Container } from "./Container";
import { footerContent, site } from "../constants/content";

const hrefs = {
  About: "/about",
  Company: "/company",
  Products: "/products",
  News: "/news",
  Careers: "/careers",
  Contact: "/contact",
  Privacy: "/privacy",
  Terms: "/terms",
} as const;

const externalHrefs = {
  LinkedIn: site.socials.linkedin,
} as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <BrandLogo dark />
          <p>{footerContent.statement}</p>
          <Link className="footer-contact" href="/contact">
            {footerContent.contact} <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="footer-grid">
          <div>
            <span className="footer-label">Explore</span>
            {footerContent.explore.map((label) => (
              <Link key={label} href={hrefs[label]}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <span className="footer-label">Company</span>
            {footerContent.company.map((label) => (
              <Link key={label} href={hrefs[label]}>
                {label}
              </Link>
            ))}
            <a href={`mailto:${site.email}`}>Email</a>
          </div>
          <div>
            <span className="footer-label">Elsewhere</span>
            {footerContent.elsewhere.map((label) => (
              <a
                key={label}
                href={externalHrefs[label]}
                target="_blank"
                rel="noreferrer"
              >
                {label} <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
          <div className="footer-note">
            <span className="footer-label">{site.name}</span>
            <p>{footerContent.note}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{site.copyright}</span>
          <div>
            {footerContent.legal.map((label) => (
              <Link key={label} href={hrefs[label]}>
                {label}
              </Link>
            ))}
          </div>
          <span>{site.tagline}</span>
        </div>
      </Container>
    </footer>
  );
}
