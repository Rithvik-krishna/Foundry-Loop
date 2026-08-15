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
          className="w-5 h-5 text-[#2563ff] filter drop-shadow-[0_2px_8px_rgba(37,99,255,0.65)]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path
            fill="currentColor"
            d="M0 0 L0 16 L4.2 11.8 L7.8 20.2 L10.6 18.9 L7 10.5 L12.8 9.9 Z"
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
