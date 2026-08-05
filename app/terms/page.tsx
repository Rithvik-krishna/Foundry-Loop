import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { PageHeader } from "../../components/PageHeader";
import { Section } from "../../components/Section";

export default function TermsPage() { return <><Navbar /><main><PageHeader eyebrow="Legal" title="Terms of use." description="The simple rules for spending time with Foundry & Loop online." /><Section className="legal-section"><Container><div className="legal-copy"><p>By using this website, you agree to use it lawfully and respectfully. The content here is provided for general information and may change as our work evolves.</p><h2>Our content</h2><p>Foundry & Loop owns or has permission to use the materials on this website. Please do not reproduce them without permission.</p><h2>Our products</h2><p>Product descriptions are directional and may change before release. Nothing on this site is a promise that a product will be launched or available in a particular form.</p><h2>Get in touch</h2><p>Questions about these terms? Email <a href="mailto:hello@foundryandloop.com">hello@foundryandloop.com</a>.</p></div></Container></Section></main><Footer /></> }
