import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Zap, QrCode, Lock, Cpu, RefreshCw, Copy, Sliders, CheckCircle2, Laptop, Smartphone, Monitor } from "lucide-react";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { Section } from "../../../components/Section";
import { SectionTitle } from "../../../components/SectionTitle";
import { chameleon, pageMeta, site } from "../../../constants/content";
import { createMetadata } from "../../../lib/seo";
import { ProductJsonLd } from "../../../components/JsonLd";

export const metadata: Metadata = createMetadata({
  title: pageMeta.chameleon.title,
  description: pageMeta.chameleon.description,
  path: "/products/chameleon",
});

export default function ChameleonPage() {
  return (
    <>
      <ProductJsonLd
        name={chameleon.name}
        description={chameleon.description}
        url={`${site.url}/products/chameleon`}
        category={chameleon.category}
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <Section className="page-header">
          <Container>
            <div className="page-header-grid">
              <div>
                <p className="eyebrow">A Foundry &amp; Loop Product</p>
                <h1 style={{ fontSize: "clamp(42px, 6vw, 76px)", fontWeight: 450, letterSpacing: "-0.06em", lineHeight: 1.02, margin: "16px 0 24px" }}>
                  Remote access, without the complexity.
                </h1>
                <p className="page-header-description" style={{ fontSize: "20px", color: "var(--ink-soft)", lineHeight: 1.5, maxWidth: "680px", marginBottom: "36px" }}>
                  Chameleon gives you secure, low-latency control of your computer from anywhere. Connect in seconds using QR-based pairing, with encrypted peer-to-peer communication and no IP addresses to configure.
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                  <a
                    href={chameleon.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ textDecoration: "none" }}
                  >
                    Try Chameleon <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={chameleon.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ textDecoration: "none" }}
                  >
                    Download Desktop Agent
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Key Positioning Statement */}
        <Section className="intro-section" style={{ borderTop: "1px solid var(--line)" }}>
          <Container>
            <div style={{ maxWidth: "820px" }}>
              <p className="eyebrow" style={{ color: "var(--blue)", marginBottom: "12px" }}>Product Positioning</p>
              <h2 style={{ fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 450, letterSpacing: "-0.05em", lineHeight: 1.1, marginBottom: "24px" }}>
                Your computer. <span>Wherever you are.</span>
              </h2>
              <p style={{ fontSize: "18px", color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: "20px" }}>
                Chameleon makes remote access simple. Install the lightweight desktop agent, pair your device with a secure QR code, and establish a direct connection in seconds.
              </p>
              <p style={{ fontSize: "18px", color: "var(--ink-soft)", lineHeight: 1.6 }}>
                <strong>No port forwarding. No exposed IP addresses. No complicated network configuration.</strong> Just a direct connection between your devices.
              </p>
            </div>
          </Container>
        </Section>

        {/* How Chameleon Works (3 Steps) */}
        <Section className="timeline-section" style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <Container>
            <SectionTitle eyebrow="How Chameleon Works">
              Three steps. <span>Full control.</span>
            </SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "32px", marginTop: "48px" }}>
              <div style={{ border: "1px solid var(--line)", padding: "32px", borderRadius: "16px", background: "var(--background)" }}>
                <span style={{ fontSize: "12px", letterSpacing: "0.1em", color: "var(--blue)", fontWeight: 600 }}>01 — INSTALL</span>
                <h3 style={{ fontSize: "20px", margin: "16px 0 12px" }}>Download Host Agent</h3>
                <p style={{ fontSize: "15px", color: "var(--ink-soft)", lineHeight: 1.5, margin: 0 }}>
                  Install the lightweight host application on the computer you want to access. Currently available for Windows 10/11 x64 (macOS support in development).
                </p>
              </div>
              <div style={{ border: "1px solid var(--line)", padding: "32px", borderRadius: "16px", background: "var(--background)" }}>
                <span style={{ fontSize: "12px", letterSpacing: "0.1em", color: "var(--blue)", fontWeight: 600 }}>02 — PAIR</span>
                <h3 style={{ fontSize: "20px", margin: "16px 0 12px" }}>Scan Secure QR Code</h3>
                <p style={{ fontSize: "15px", color: "var(--ink-soft)", lineHeight: 1.5, margin: 0 }}>
                  Open Chameleon on your client device and scan the temporary QR code generated by the desktop agent. No complicated account setup or manual credential exchange.
                </p>
              </div>
              <div style={{ border: "1px solid var(--line)", padding: "32px", borderRadius: "16px", background: "var(--background)" }}>
                <span style={{ fontSize: "12px", letterSpacing: "0.1em", color: "var(--blue)", fontWeight: 600 }}>03 — CONNECT</span>
                <h3 style={{ fontSize: "20px", margin: "16px 0 12px" }}>Control Remotely</h3>
                <p style={{ fontSize: "15px", color: "var(--ink-soft)", lineHeight: 1.5, margin: 0 }}>
                  Once paired, Chameleon establishes an encrypted peer-to-peer WebRTC connection and gives you responsive, low-latency remote access to your computer.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Core Features Grid */}
        <Section className="product-principles">
          <Container>
            <SectionTitle eyebrow="Core Architecture">
              Engineered for <span>direct, secure connections.</span>
            </SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px", marginTop: "48px" }}>
              {chameleon.features.map((feature, idx) => (
                <div key={feature.title} style={{ border: "1px solid var(--line)", padding: "28px", borderRadius: "16px", background: "var(--surface)" }}>
                  <span style={{ fontSize: "13px", color: "var(--blue)", fontWeight: 600 }}>0{idx + 1}</span>
                  <h3 style={{ fontSize: "19px", margin: "12px 0 10px", fontWeight: 500 }}>{feature.title}</h3>
                  <p style={{ fontSize: "14px", color: "var(--ink-soft)", lineHeight: 1.5, margin: 0 }}>{feature.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Performance Highlights Section */}
        <Section style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <Container>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "center" }}>
              <div>
                <p className="eyebrow" style={{ color: "var(--blue)", marginBottom: "12px" }}>Performance</p>
                <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 450, letterSpacing: "-0.04em", lineHeight: 1.15, marginBottom: "20px" }}>
                  Built for responsiveness.
                </h2>
                <p style={{ fontSize: "16px", color: "var(--ink-soft)", lineHeight: 1.6 }}>
                  Remote access is only useful when it feels immediate. Chameleon is engineered around low-latency interaction, direct peer-to-peer networking, hardware-accelerated encoding, and adaptive streaming.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", textAlign: "center" }}>
                <div style={{ padding: "24px 12px", border: "1px solid var(--line)", borderRadius: "12px", background: "var(--background)" }}>
                  <p style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: "var(--blue)", margin: 0 }}>~12ms</p>
                  <span style={{ fontSize: "12px", color: "var(--ink-soft)" }}>Input Latency*</span>
                </div>
                <div style={{ padding: "24px 12px", border: "1px solid var(--line)", borderRadius: "12px", background: "var(--background)" }}>
                  <p style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: "var(--blue)", margin: 0 }}>60 FPS</p>
                  <span style={{ fontSize: "12px", color: "var(--ink-soft)" }}>Target Streaming</span>
                </div>
                <div style={{ padding: "24px 12px", border: "1px solid var(--line)", borderRadius: "12px", background: "var(--background)" }}>
                  <p style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 500, color: "var(--blue)", margin: 0 }}>0</p>
                  <span style={{ fontSize: "12px", color: "var(--ink-soft)" }}>Cloud Relays*</span>
                </div>
              </div>
            </div>
            <p style={{ fontSize: "12px", color: "var(--ink-faint)", marginTop: "24px" }}>
              *Designed for ~12ms input latency and 60 FPS streaming under suitable network and hardware conditions.
            </p>
          </Container>
        </Section>

        {/* Security Section */}
        <Section className="values-section">
          <Container>
            <SectionTitle eyebrow="Security Architecture">
              Your screen <span>stays yours.</span>
            </SectionTitle>
            <p style={{ fontSize: "17px", color: "var(--ink-soft)", maxWidth: "700px", marginTop: "12px", marginBottom: "40px" }}>
              Chameleon is designed around direct, encrypted communication between your devices. Remote-session data is not routed through a centralized cloud relay infrastructure.
            </p>
            <div className="values-grid">
              <div className="value-card">
                <h3>Encrypted Communication</h3>
                <p>Remote-session data, video, audio, and inputs are protected using WebRTC DTLS/SRTP encryption standards.</p>
              </div>
              <div className="value-card">
                <h3>Direct Peer-to-Peer</h3>
                <p>Designed to establish direct peer-to-peer connections between the host computer and client device.</p>
              </div>
              <div className="value-card">
                <h3>Ephemeral Pairing</h3>
                <p>QR pairing uses temporary session tokens rather than requiring users to manually expose network addresses.</p>
              </div>
              <div className="value-card">
                <h3>Minimal Infrastructure</h3>
                <p>Screen data, keystrokes, and clipboard contents are not routed or stored on centralized signaling servers.</p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Platform Availability Matrix */}
        <Section style={{ background: "var(--surface)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <Container>
            <SectionTitle eyebrow="Platform Availability">
              Connect from <span>almost anywhere.</span>
            </SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", marginTop: "40px" }}>
              <div style={{ border: "1px solid var(--line)", padding: "32px", borderRadius: "16px", background: "var(--background)" }}>
                <span className="eyebrow" style={{ color: "var(--blue)" }}>Host Computer</span>
                <h3 style={{ fontSize: "22px", margin: "12px 0 16px" }}>Desktop Agent</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "12px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px" }}>
                    <CheckCircle2 size={18} style={{ color: "#22c55e" }} /> Windows 10 / 11 — x64 (Available)
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "var(--ink-soft)" }}>
                    <ClockIcon size={18} /> macOS — Intel &amp; Apple Silicon (In Development)
                  </li>
                </ul>
              </div>

              <div style={{ border: "1px solid var(--line)", padding: "32px", borderRadius: "16px", background: "var(--background)" }}>
                <span className="eyebrow" style={{ color: "var(--blue)" }}>Client Devices</span>
                <h3 style={{ fontSize: "22px", margin: "12px 0 16px" }}>Control From</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {["iOS", "Android", "Linux", "ChromeOS", "Modern Browsers"].map((client) => (
                    <span key={client} style={{ padding: "6px 14px", borderRadius: "999px", border: "1px solid var(--line)", background: "var(--surface)", fontSize: "13px" }}>
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Use Cases */}
        <Section>
          <Container>
            <SectionTitle eyebrow="Use Cases">
              Built for the way <span>people work.</span>
            </SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "40px" }}>
              <div style={{ padding: "24px", border: "1px solid var(--line)", borderRadius: "12px" }}>
                <h4 style={{ fontSize: "17px", margin: "0 0 8px" }}>Work Remotely</h4>
                <p style={{ fontSize: "14px", color: "var(--ink-soft)", margin: 0 }}>Access your primary office workstation when working from home or traveling.</p>
              </div>
              <div style={{ padding: "24px", border: "1px solid var(--line)", borderRadius: "12px" }}>
                <h4 style={{ fontSize: "17px", margin: "0 0 8px" }}>Access Your Files</h4>
                <p style={{ fontSize: "14px", color: "var(--ink-soft)", margin: 0 }}>Connect to your computer without having to physically be in front of it.</p>
              </div>
              <div style={{ padding: "24px", border: "1px solid var(--line)", borderRadius: "12px" }}>
                <h4 style={{ fontSize: "17px", margin: "0 0 8px" }}>Remote Support</h4>
                <p style={{ fontSize: "14px", color: "var(--ink-soft)", margin: 0 }}>Provide remote assistance and technical help with authorized access.</p>
              </div>
              <div style={{ padding: "24px", border: "1px solid var(--line)", borderRadius: "12px" }}>
                <h4 style={{ fontSize: "17px", margin: "0 0 8px" }}>Development Machine</h4>
                <p style={{ fontSize: "14px", color: "var(--ink-soft)", margin: 0 }}>Connect to a high-powered workstation or dev server from any laptop.</p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Parent Company Connection */}
        <Section style={{ borderTop: "1px solid var(--line)", background: "var(--surface)" }}>
          <Container>
            <div style={{ maxWidth: "760px" }}>
              <p className="eyebrow" style={{ color: "var(--blue)", marginBottom: "12px" }}>Foundry &amp; Loop Ecosystem</p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 450, letterSpacing: "-0.04em", marginBottom: "20px" }}>
                Built by Foundry &amp; Loop.
              </h2>
              <p style={{ fontSize: "17px", color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: "20px" }}>
                Chameleon is a standalone product from Foundry &amp; Loop, an independent technology company building software products designed to solve real-world problems.
              </p>
              <p style={{ fontSize: "17px", color: "var(--ink-soft)", lineHeight: 1.6 }}>
                We build products from the ground up — combining thoughtful engineering, modern infrastructure, and simple user experiences to make complex technology more accessible.
              </p>
            </div>
          </Container>
        </Section>

        {/* Bottom CTA */}
        <Section className="cta-section">
          <Container>
            <div className="cta-card">
              <div>
                <p className="eyebrow">Try Chameleon Today</p>
                <h2>Your computer. <span>On your terms.</span></h2>
                <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "12px" }}>Secure remote access without the complexity.</p>
              </div>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a
                  href={chameleon.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light"
                  style={{ textDecoration: "none" }}
                >
                  Get Chameleon <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function ClockIcon({ size = 18 }: { size?: number }) {
  return <span style={{ fontSize: `${size}px`, lineHeight: 1 }}>⏳</span>;
}
