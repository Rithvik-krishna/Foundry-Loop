"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { Button } from "./Button";

const links = [
  ["About", "/about"],
  ["Products", "/products"],
  ["News", "/news"],
  ["Careers", "/careers"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const saved = localStorage.getItem("foundry-theme");
    if (saved === "dark") { document.documentElement.classList.add("dark"); window.requestAnimationFrame(() => setDark(true)); }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("foundry-theme", next ? "dark" : "light");
  };

  return <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
    <div className="nav-inner">
      <BrandLogo dark={dark} />
      <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<Button href="/contact" variant="primary" arrow>Get in touch</Button></nav>
      <div className="nav-actions"><button className="theme-toggle" onClick={toggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button></div>
    </div>
    <AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}><div className="mobile-menu-links">{links.map(([label, href], index) => <motion.div key={href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}><Link href={href} onClick={() => setOpen(false)}>{label}<span>↗</span></Link></motion.div>)}<Button href="/contact" onClick={() => setOpen(false)}>Get in touch</Button></div></motion.div>}</AnimatePresence>;
  </header>;
}
