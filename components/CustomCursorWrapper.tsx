'use client';

import * as React from 'react';
import { CursorProvider, Cursor, CursorFollow } from '@/components/ui/cursor';

export function CustomCursorWrapper({ children }: { children: React.ReactNode }) {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    // Only enable custom cursor on fine pointer devices (mouse/trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (!isDesktop) {
    return <>{children}</>;
  }

  return (
    <CursorProvider className="relative min-h-screen">
      <Cursor>
        <svg
          className="size-5 text-[#2563ff] filter drop-shadow-[0_2px_10px_rgba(37,99,255,0.6)]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
        >
          <path
            fill="currentColor"
            d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
          />
        </svg>
      </Cursor>
      <CursorFollow align="bottom-right" sideOffset={12}>
        <div className="bg-[#2563ff] text-white px-2.5 py-1 rounded-full text-[11px] font-medium tracking-tight shadow-lg shadow-blue-500/25 flex items-center gap-1.5 border border-white/20 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          Foundry & Loop
        </div>
      </CursorFollow>
      {children}
    </CursorProvider>
  );
}
