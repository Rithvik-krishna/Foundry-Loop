import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";
import { pageMeta } from "../../constants/content";
import { createMetadata } from "../../lib/seo";

export const metadata: Metadata = createMetadata(pageMeta.contact.title, pageMeta.contact.description);

export default function ContactPage() { return <><Navbar /><main><PageHeader eyebrow="Contact" title="Let’s make something useful." description="Have a problem worth solving, a product idea or simply want to say hello? We’d like to hear from you." /><Section className="contact-section"><Container><div className="contact-grid"><div className="contact-details"><p className="eyebrow">Start a conversation</p><h2>Good things<br /><span>start with a note.</span></h2><a href="mailto:hello@foundryandloop.com" className="contact-email">hello@foundryandloop.com <ArrowUpRight size={19} /></a><div className="contact-meta"><span><Mail size={17} /> hello@foundryandloop.com</span><span><MapPin size={17} /> Global / Remote-first</span></div></div><form className="contact-form" action="mailto:hello@foundryandloop.com" method="post" encType="text/plain"><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>How can we help?<textarea required name="message" rows={5} placeholder="A few words about your idea…" /></label><Button arrow>Send message</Button><p className="form-note">This opens your email client with the message ready to send.</p></form></div></Container></Section></main><Footer /></> }
import type { Metadata } from "next";
