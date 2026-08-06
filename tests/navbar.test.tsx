/* eslint-disable @next/next/no-img-element, @typescript-eslint/no-unused-vars */

import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const motionState = vi.hoisted(() => ({ reduceMotion: false }));

vi.mock("next/link", () => ({ default: ({ href, children, ...props }: { href: string; children: ReactNode } & HTMLAttributes<HTMLAnchorElement>) => <a href={href} {...props}>{children}</a> }));
vi.mock("next/image", () => ({ default: ({ alt, ...props }: { alt: string } & HTMLAttributes<HTMLImageElement>) => <img alt={alt} {...props} /> }));
vi.mock("framer-motion", () => {
  const MotionDiv = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { transition?: unknown; initial?: unknown; animate?: unknown; exit?: unknown }>(({ transition, initial: _initial, animate: _animate, exit: _exit, ...props }, ref) => <div ref={ref} data-motion-transition={JSON.stringify(transition)} {...props} />);
  MotionDiv.displayName = "MotionDiv";
  return { AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>, motion: { div: MotionDiv }, useReducedMotion: () => motionState.reduceMotion };
});

import { Navbar } from "../components/Navbar";

type MediaQueryListener = (event: MediaQueryListEvent) => void;
let mediaQuery: { matches: boolean; listeners: Set<MediaQueryListener> };

function setDesktopViewport(matches: boolean) {
  mediaQuery.matches = matches;
  for (const listener of mediaQuery.listeners) listener({ matches } as MediaQueryListEvent);
}

beforeEach(() => {
  mediaQuery = { matches: false, listeners: new Set() };
  vi.stubGlobal("matchMedia", () => ({
    get matches() { return mediaQuery.matches; },
    media: "(min-width: 901px)",
    onchange: null,
    addEventListener: (_: string, listener: MediaQueryListener) => mediaQuery.listeners.add(listener),
    removeEventListener: (_: string, listener: MediaQueryListener) => mediaQuery.listeners.delete(listener),
    addListener: () => undefined,
    removeListener: () => undefined,
    dispatchEvent: () => true,
  }));
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    callback(0);
    return 1;
  });
  vi.stubGlobal("cancelAnimationFrame", () => undefined);
  motionState.reduceMotion = false;
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  document.body.style.overflow = "";
});

describe("Navbar mobile menu", () => {
  it("traps focus, closes on Escape, and restores focus to its trigger", async () => {
    render(<Navbar />);
    const trigger = screen.getByRole("button", { name: "Open menu" });
    fireEvent.click(trigger);

    const menu = await screen.findByRole("dialog", { name: "Mobile navigation" });
    const menuLinks = Array.from(menu.querySelectorAll<HTMLAnchorElement>("a"));
    expect(document.body.style.overflow).toBe("hidden");
    menuLinks.at(-1)?.focus();
    fireEvent.keyDown(document, { key: "Tab" });
    expect(document.activeElement).toBe(menuLinks[0]);

    fireEvent.keyDown(document, { key: "Escape" });
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    expect(document.activeElement).toBe(trigger);
    expect(document.body.style.overflow).toBe("");
  });

  it("closes on outside click and at the desktop breakpoint", async () => {
    render(<Navbar />);
    const trigger = screen.getByRole("button", { name: "Open menu" });
    fireEvent.click(trigger);
    await screen.findByRole("dialog");
    fireEvent.pointerDown(document.body);
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    expect(document.activeElement).toBe(trigger);

    fireEvent.click(trigger);
    await screen.findByRole("dialog");
    setDesktopViewport(true);
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    expect(document.activeElement).toBe(screen.getByRole("link", { name: "About" }));
  });

  it("uses instant menu transitions when reduced motion is preferred", async () => {
    motionState.reduceMotion = true;
    render(<Navbar />);
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const menu = await screen.findByRole("dialog");
    expect(menu.getAttribute("data-motion-transition")).toBe(JSON.stringify({ duration: 0 }));
  });
});
