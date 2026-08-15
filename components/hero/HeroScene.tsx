'use client';

import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, PresentationControls } from '@react-three/drei';
import { RingObject } from './RingObject';
import { MediaImage } from '../MediaImage';
import { homeContent } from '../../constants/content';

export function HeroScene() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    // Fallback to static image on small mobile viewports < 640px
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Track theme state (light vs dark mode)
    const updateTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  if (isMobile) {
    return (
      <div className="w-full h-full relative flex items-center justify-center">
        <MediaImage
          {...homeContent.hero.image}
          sizes="(max-width: 900px) 100vw, 52vw"
          priority
        />
      </div>
    );
  }

  return (
    <div
      className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-2xl select-none"
      style={{ minHeight: '500px', height: '100%', width: '100%' }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.8], fov: 42 }}
        className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing"
        gl={{ antialias: true, alpha: true }}
      >
        {/* Procedural Studio Lighting */}
        <hemisphereLight skyColor="#3b82f6" groundColor="#0d0f14" intensity={isDarkMode ? 1.5 : 2.0} />

        {/* Key Light from upper-left */}
        <directionalLight
          position={[-4, 5, 5]}
          color={isDarkMode ? '#ffffff' : '#f0f4ff'}
          intensity={isDarkMode ? 2.5 : 3.0}
        />

        {/* Brand Electric Blue Rim Light from behind-right */}
        <pointLight
          position={[4, 5, -4]}
          color="#2563ff"
          intensity={isDarkMode ? 5.0 : 3.5}
        />

        {/* Accent Fill Light from bottom-right */}
        <pointLight
          position={[-3, -3, 3]}
          color="#3b82f6"
          intensity={isDarkMode ? 3.5 : 2.5}
        />

        {/* Ambient Baseline */}
        <ambientLight intensity={isDarkMode ? 0.45 : 0.75} />

        {/* Grounding Contact Shadow */}
        <ContactShadows
          position={[0, -2.1, 0]}
          opacity={isDarkMode ? 0.45 : 0.25}
          blur={2}
          scale={10}
          far={4}
          color="#000000"
        />

        {/* Presentation Drag-to-rotate Controls */}
        <PresentationControls
          global
          snap
          rotation={[0, 0.3, 0]}
          polar={[-0.2, 0.2]}
          azimuth={[-0.6, 0.6]}
        >
          <RingObject isDarkMode={isDarkMode} />
        </PresentationControls>
      </Canvas>
    </div>
  );
}
