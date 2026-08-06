"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { navigation } from "../constants/content";
import { usePrefersReducedMotion } from "../hooks/use-prefers-reduced-motion";
import { BrandLogo } from "./BrandLogo";
import { Button } from "./Button";

const desktopQuery = "(min-width: 901px)";
const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  const closeMenu = useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled((current) => {
      const next = window.scrollY > 12;
      return current === next ? current : next;
    });
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const themeFrame = window.requestAnimationFrame(() => setDark(document.documentElement.classList.contains("dark")));
    return () => {
      window.cancelAnimationFrame(themeFrame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopQuery);
    const closeAtDesktop = () => {
      if (mediaQuery.matches && open) {
        closeMenu();
        window.requestAnimationFrame(() => desktopNavRef.current?.querySelector<HTMLElement>("a[href]")?.focus());
      }
    };
    closeAtDesktop();
    mediaQuery.addEventListener("change", closeAtDesktop);
    return () => mediaQuery.removeEventListener("change", closeAtDesktop);
  }, [closeMenu, open]);

  useEffect(() => {
    if (!open) return;

    const menu = menuRef.current;
    if (!menu) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFirstItem = () => menu.querySelector<HTMLElement>(focusableSelector)?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = Array.from(menu.querySelectorAll<HTMLElement>(focusableSelector));
      if (!focusable.length) {
        event.preventDefault();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const handleOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!menu.contains(target) && !menuButtonRef.current?.contains(target)) closeMenu(true);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsideClick);
    const focusFrame = window.requestAnimationFrame(focusFirstItem);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [closeMenu, open]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("foundry-theme", next ? "dark" : "light");
  };

  const menuAnimation = reduceMotion
    ? { initial: false, animate: undefined, exit: undefined, transition: { duration: 0 } }
    : { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.25 } };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-inner">
        <BrandLogo dark={dark} />
        <nav ref={desktopNavRef} className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Button href="/contact" variant="primary" arrow>Get in touch</Button>
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button ref={menuButtonRef} className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-controls="mobile-navigation" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div ref={menuRef} id="mobile-navigation" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation" tabIndex={-1} {...menuAnimation}>
            <div className="mobile-menu-links">
              {navigation.map((link, index) => (
                <motion.div key={link.href} initial={reduceMotion ? false : { opacity: 0, x: -12 }} animate={reduceMotion ? undefined : { opacity: 1, x: 0 }} transition={reduceMotion ? { duration: 0 } : { delay: index * 0.04 }}>
                  <Link href={link.href} onClick={() => closeMenu()}>{link.label}<span>↗</span></Link>
                </motion.div>
              ))}
              <Button href="/contact" onClick={() => closeMenu()}>Get in touch</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
