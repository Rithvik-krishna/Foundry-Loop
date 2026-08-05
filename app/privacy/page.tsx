import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";

export default function PrivacyPage() { return <><Navbar /><main><PageHeader eyebrow="Legal" title="Privacy, plainly stated." description="A short overview of how we think about the information you share with Foundry & Loop." /><Section className="legal-section"><Container><div className="legal-copy"><p>We collect only what we need to respond to you, operate our website and improve our products. We do not sell personal information.</p><h2>Information we receive</h2><p>If you contact us, we receive the details you choose to share. Our hosting provider may collect basic technical information needed to keep the site secure and available.</p><h2>How we use it</h2><p>We use information to communicate with you, respond to requests and understand how our website is used. We retain it only for as long as it serves those purposes.</p><h2>Questions</h2><p>For any privacy question, email <a href="mailto:hello@foundryandloop.com">hello@foundryandloop.com</a>.</p></div></Container></Section></main><Footer /></> }
