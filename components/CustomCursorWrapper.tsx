'use client';

import * as React from 'react';
import { CursorProvider, Cursor, useCursor } from '@/components/ui/cursor';

function CustomCursorInner() {
  const { isOverBlue } = useCursor();

  return (
    <Cursor>
      <svg
        className="w-7 h-7 transition-all duration-150 filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="28"
        height="28"
      >
        <path
          fill={isOverBlue ? '#ffffff' : '#2563ff'}
          stroke={isOverBlue ? '#1d4ed8' : '#ffffff'}
          strokeWidth="1.0"
          strokeLinejoin="round"
          d="M0 0 L22 9.5 L12 12 L9.5 22 Z"
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
