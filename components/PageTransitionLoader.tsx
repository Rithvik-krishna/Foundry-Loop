'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

export function PageTransitionLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = React.useState(false);
  const prevPathname = React.useRef(pathname);

  // Trigger loader briefly on pathname changes
  React.useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Intercept internal link clicks to trigger loader instantly
  React.useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      // Only trigger for internal links that differ from current page
      if (
        href &&
        href.startsWith('/') &&
        !href.startsWith('#') &&
        href !== pathname &&
        !anchor.getAttribute('target')
      ) {
        setIsLoading(true);
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
            className="fixed inset-0 z-[999999] bg-[#0b0f1c] flex flex-col items-center justify-center pointer-events-none select-none"
          >
            {/* Ambient Brand Blue Glow */}
            <div className="absolute w-[280px] h-[280px] bg-[#2563ff]/20 rounded-full blur-[90px] pointer-events-none" />

            {/* 3 Pulsing Brand Dots */}
            <div className="relative z-10 flex items-center gap-3">
              <motion.span
                animate={{
                  y: [0, -9, 0],
                  scale: [1, 1.25, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.55,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0,
                }}
                className="w-3.5 h-3.5 rounded-full bg-[#2563ff] shadow-[0_0_14px_rgba(37,99,255,0.85)]"
              />
              <motion.span
                animate={{
                  y: [0, -9, 0],
                  scale: [1, 1.25, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.55,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.14,
                }}
                className="w-3.5 h-3.5 rounded-full bg-[#3b82f6] shadow-[0_0_14px_rgba(59,130,246,0.85)]"
              />
              <motion.span
                animate={{
                  y: [0, -9, 0],
                  scale: [1, 1.25, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.55,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.28,
                }}
                className="w-3.5 h-3.5 rounded-full bg-[#8b5cf6] shadow-[0_0_14px_rgba(139,92,246,0.85)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
