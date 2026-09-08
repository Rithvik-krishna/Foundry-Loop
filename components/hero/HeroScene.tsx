import * as React from 'react';
import Image from 'next/image';
import { homeContent } from '../../constants/content';

export function HeroScene() {
  const { image } = homeContent.hero;

  return (
    <div className="hero-system-visual">
      {/* Dark mode hero visual */}
      <Image
        src={image.darkSrc}
        alt=""
        fill
        sizes="(max-width: 540px) 100vw, (max-width: 900px) 90vw, 55vw"
        priority
        unoptimized
        quality={98}
        className="hero-system-image hero-system-image-dark"
      />

      {/* Light mode hero visual */}
      <Image
        src={image.lightSrc}
        alt=""
        fill
        sizes="(max-width: 540px) 100vw, (max-width: 900px) 90vw, 55vw"
        priority
        unoptimized
        quality={98}
        className="hero-system-image hero-system-image-light"
      />

      {/* Subtle, restrained ambient conduit breathing overlay (pure opacity treatment, 10s cycle) */}
      <div className="hero-conduit-overlay" aria-hidden="true" />
    </div>
  );
}
