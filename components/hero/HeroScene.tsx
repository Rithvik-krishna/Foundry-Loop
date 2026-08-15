'use client';

import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, PresentationControls, Html } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { RingObject } from './RingObject';
import { MediaImage } from '../MediaImage';
import { homeContent } from '../../constants/content';

export function HeroScene() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [isLowPowerMobile, setIsLowPowerMobile] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    // Fallback to static image only on small mobile viewports
    const isMobileViewport = window.innerWidth < 640;
    setIsLowPowerMobile(isMobileViewport);

    setIsLoaded(true);

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

  // Fallback to static hero PNG on mobile or low-power devices
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
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-2xl select-none">
      {/* Static placeholder while 3D scene streams in */}
      {!isLoaded && (
        <div className="absolute inset-0 z-0 flex items-center justify-center transition-opacity duration-500">
          <MediaImage
            {...homeContent.hero.image}
            sizes="(max-width: 900px) 100vw, 52vw"
            priority
          />
        </div>
      )}

      {/* 3D Canvas */}
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.8], fov: 42 }}
        onCreated={() => setIsLoaded(true)}
        className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing"
        gl={{ antialias: true, alpha: true }}
      >
        <React.Suspense fallback={null}>
          <Environment preset="city" />

          {/* Cool blue-tinted rim light behind object */}
          <pointLight
            position={[4, 5, -4]}
            color="#2563ff"
            intensity={isDarkMode ? 3.5 : 2.0}
          />

          {/* Soft key light from front-upper-left */}
          <directionalLight
            position={[-3, 4, 5]}
            color={isDarkMode ? '#ffffff' : '#f0f4ff'}
            intensity={isDarkMode ? 1.6 : 2.2}
          />

          {/* Ambient lighting */}
          <ambientLight intensity={isDarkMode ? 0.35 : 0.65} />

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
