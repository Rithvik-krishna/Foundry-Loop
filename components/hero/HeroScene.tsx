import * as React from 'react';
import Image from 'next/image';
import { homeContent } from '../../constants/content';

export function HeroScene() {
  return (
    <div className="hero-system-visual">
      {/* Primary 3D computational system visual */}
      <Image
        src={homeContent.hero.image.src}
        alt=""
        fill
        sizes="(max-width: 540px) 100vw, (max-width: 900px) 90vw, 55vw"
        priority
        quality={98}
        className="hero-system-image"
      />

      {/* Subtle, restrained ambient conduit breathing overlay (pure opacity treatment, 10s cycle) */}
      <div className="hero-conduit-overlay" aria-hidden="true" />
    </div>
  );
}
