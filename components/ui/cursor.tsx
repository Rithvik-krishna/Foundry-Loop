'use client';

import * as React from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
  type MotionValue,
  type HTMLMotionProps,
  type SpringOptions,
} from 'motion/react';

import { cn } from '@/lib/utils';

type CursorContextType = {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  isActive: boolean;
  isOverBlue: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
  cursorRef: React.RefObject<HTMLDivElement | null>;
};

const CursorContext = React.createContext<CursorContextType | undefined>(
  undefined,
);

const useCursor = (): CursorContextType => {
  const context = React.useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

type CursorProviderProps = React.ComponentProps<'div'> & {
  children: React.ReactNode;
};

function CursorProvider({ ref, children, ...props }: CursorProviderProps) {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isActive, setIsActive] = React.useState(false);
  const [isOverBlue, setIsOverBlue] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const cursorRef = React.useRef<HTMLDivElement>(null);

  React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

  React.useEffect(() => {
    // Hide native cursor globally across the entire page
    document.documentElement.classList.add('hide-native-cursor');

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      // Account for CSS zoom on document.body (e.g., zoom: 0.9)
      const zoomStr = window.getComputedStyle(document.body).zoom;
      const zoom = zoomStr ? parseFloat(zoomStr) : 1;
      const effectiveZoom = isNaN(zoom) || zoom <= 0 ? 1 : zoom;

      mouseX.set(e.clientX / effectiveZoom);
      mouseY.set(e.clientY / effectiveZoom);
      if (!isActive) setIsActive(true);

      // Dynamically detect if underlying element is blue to invert cursor colors
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const elem = document.elementFromPoint(e.clientX, e.clientY);
        if (elem) {
          let current: HTMLElement | null = elem as HTMLElement;
          let foundBlue = false;
          while (current && current !== document.body && current !== document.documentElement) {
            const bg = window.getComputedStyle(current).backgroundColor;
            if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
              const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
              if (match) {
                const r = parseInt(match[1], 10);
                const g = parseInt(match[2], 10);
                const b = parseInt(match[3], 10);
                // If blue dominates (brand blue #2563ff = rgb(37,99,255))
                if (b > 160 && b > r + 30) {
                  foundBlue = true;
                  break;
                }
              }
            }
            current = current.parentElement;
          }
          setIsOverBlue(foundBlue);
        }
      });
    };

    const handleMouseLeave = () => setIsActive(false);
    const handleMouseEnter = () => setIsActive(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.documentElement.classList.remove('hide-native-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isActive]);

  return (
    <CursorContext.Provider
      value={{ mouseX, mouseY, isActive, isOverBlue, containerRef, cursorRef }}
    >
      <div ref={containerRef} data-slot="cursor-provider" {...props}>
        {children}
      </div>
    </CursorContext.Provider>
  );
}

type CursorProps = HTMLMotionProps<'div'> & {
  children: React.ReactNode;
};

function Cursor({ ref, children, className, style, ...props }: CursorProps) {
  const { mouseX, mouseY, isActive, cursorRef } = useCursor();
  React.useImperativeHandle(ref, () => cursorRef.current as HTMLDivElement);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          ref={cursorRef}
          data-slot="cursor"
          className={cn(
            'pointer-events-none fixed top-0 left-0 z-[99999]',
            className,
          )}
          style={{ x: mouseX, y: mouseY, ...style }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.12, ease: 'easeOut' }}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type Align =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right'
  | 'center';

type CursorFollowProps = HTMLMotionProps<'div'> & {
  sideOffset?: number;
  align?: Align;
  transition?: SpringOptions;
  children: React.ReactNode;
};

function CursorFollow({
  ref,
  sideOffset = 12,
  align = 'bottom-right',
  children,
  className,
  style,
  transition = { stiffness: 900, damping: 30, mass: 0.1 },
  ...props
}: CursorFollowProps) {
  const { mouseX, mouseY, isActive, cursorRef } = useCursor();
  const cursorFollowRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(
    ref,
    () => cursorFollowRef.current as HTMLDivElement,
  );

  const springX = useSpring(mouseX, transition);
  const springY = useSpring(mouseY, transition);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          ref={cursorFollowRef}
          data-slot="cursor-follow"
          className={cn(
            'pointer-events-none fixed top-0 left-0 z-[99998] translate-x-3 translate-y-3',
            className,
          )}
          style={{ x: springX, y: springY, ...style }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.12, ease: 'easeOut' }}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export {
  CursorProvider,
  Cursor,
  CursorFollow,
  useCursor,
  type CursorContextType,
  type CursorProviderProps,
  type CursorProps,
  type CursorFollowProps,
};
