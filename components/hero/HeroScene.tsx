'use client';

import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, PresentationControls } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { RingObject } from './RingObject';
import { MediaImage } from '../MediaImage';
import { homeContent } from '../../constants/content';

export function HeroScene() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [isLowPowerMobile, setIsLowPowerMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    // Fallback to static image only on mobile screen widths < 640px
    const isMobileViewport = window.innerWidth < 640;
    setIsLowPowerMobile(isMobileViewport);

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

    return () => observer.disconnect();
  }, []);

  // Fallback to static hero PNG on mobile screens < 640px
  if (isLowPowerMobile) {
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
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-2xl select-none" style={{ minHeight: '500px', height: '100%' }}>
      {/* 3D Canvas */}
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.8], fov: 42 }}
        className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing"
        gl={{ antialias: true, alpha: true }}
      >
        <React.Suspense fallback={null}>
          {/* Procedural Studio Lighting for realistic chrome metallic reflections */}
          <hemisphereLight skyColor="#3b82f6" groundColor="#0d0f14" intensity={isDarkMode ? 1.4 : 1.8} />

          {/* Key light front-upper-left */}
          <directionalLight
            position={[-4, 5, 5]}
            color={isDarkMode ? '#ffffff' : '#f0f4ff'}
            intensity={isDarkMode ? 2.4 : 2.8}
          />

          {/* Cool blue-tinted rim light behind object */}
          <pointLight
            position={[4, 5, -4]}
            color="#2563ff"
            intensity={isDarkMode ? 4.5 : 3.0}
          />

          {/* Accent fill light bottom-right */}
          <pointLight
            position={[-3, -3, 3]}
            color="#3b82f6"
            intensity={isDarkMode ? 3.0 : 2.0}
          />

          {/* Ambient baseline */}
          <ambientLight intensity={isDarkMode ? 0.4 : 0.7} />

          {/* Grounding Contact Shadows */}
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

          {/* Postprocessing Bloom & Vignette */}
          <EffectComposer>
            <Bloom
              intensity={isDarkMode ? 0.8 : 0.4}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
            <Vignette
              eskil={false}
              offset={0.2}
              darkness={isDarkMode ? 0.6 : 0.25}
            />
          </EffectComposer>
        </React.Suspense>
      </Canvas>
    </div>
  );
}
