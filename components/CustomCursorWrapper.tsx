'use client';

import * as React from 'react';
import { CursorProvider, Cursor, useCursor } from '@/components/ui/cursor';

function CustomCursorInner() {
  const { isOverBlue } = useCursor();

  return (
    <Cursor>
      <svg
        className="w-5.5 h-5.5 transition-all duration-150 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="22"
        height="22"
      >
        <path
          fill={isOverBlue ? '#ffffff' : '#2563ff'}
          stroke={isOverBlue ? '#1d4ed8' : '#ffffff'}
          strokeWidth="1.6"
          strokeLinejoin="round"
          d="M1 1 L1 17 L5.2 12.8 L8.8 21.2 L11.6 19.9 L8 11.5 L13.8 10.9 Z"
        />
      </svg>
    </Cursor>
  );
}

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
      <CustomCursorInner />
      {children}
    </CursorProvider>
  );
}
