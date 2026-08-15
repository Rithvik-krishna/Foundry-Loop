'use client';

import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface RingObjectProps {
  isDarkMode?: boolean;
}

export function RingObject({ isDarkMode = true }: RingObjectProps) {
  const groupRef = React.useRef<THREE.Group>(null);
  const isDraggingRef = React.useRef(false);
  const dragTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const mousePos = React.useRef({ x: 0, y: 0 });

  // Check prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Track mouse cursor position for subtle parallax tilt
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const handlePointerMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePos.current = { x, y };
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!prefersReducedMotion) {
      // Idle continuous rotation when not actively dragging
      if (!isDraggingRef.current) {
        groupRef.current.rotation.y += delta * 0.18;
      }

      // Floating sine wave vertical bob
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.4) * 0.05;

      // Parallax cursor tilt lerp
      const targetRotX = mousePos.current.y * 0.08;
      const targetRotZ = -mousePos.current.x * 0.08;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, 0.05);
    }
  });

  // Dark brushed gunmetal steel outer material
  const outerMaterial = React.useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: isDarkMode ? '#0d0f14' : '#1f2430',
      metalness: 0.95,
      roughness: 0.15,
      clearcoat: 0.5,
      clearcoatRoughness: 0.2,
      reflectivity: 0.9,
    });
  }, [isDarkMode]);

  // Brand electric blue glowing seam material
  const glowMaterial = React.useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: '#2563ff',
      emissive: '#2563ff',
      emissiveIntensity: isDarkMode ? 4.2 : 2.5,
      toneMapped: false,
    });
  }, [isDarkMode]);

  return (
    <group
      ref={groupRef}
      onPointerDown={() => {
        isDraggingRef.current = true;
        if (dragTimeoutRef.current) clearTimeout(dragTimeoutRef.current);
      }}
      onPointerUp={() => {
        if (dragTimeoutRef.current) clearTimeout(dragTimeoutRef.current);
        dragTimeoutRef.current = setTimeout(() => {
          isDraggingRef.current = false;
        }, 1500);
      }}
    >
      {/* Ring 1 - Interlocking Loop 1 */}
      <group rotation={[Math.PI / 3, 0, Math.PI / 6]} position={[-0.32, 0, 0]}>
        {/* Outer Gunmetal Ring Body */}
        <mesh material={outerMaterial}>
          <torusGeometry args={[1.32, 0.31, 48, 128]} />
        </mesh>
        {/* Inner Emissive Blue Seam */}
        <mesh material={glowMaterial}>
          <torusGeometry args={[1.32, 0.322, 32, 96]} />
        </mesh>
      </group>

      {/* Ring 2 - Interlocking Loop 2 */}
      <group rotation={[-Math.PI / 3, Math.PI / 4, -Math.PI / 6]} position={[0.32, 0, 0]}>
        {/* Outer Gunmetal Ring Body */}
        <mesh material={outerMaterial}>
          <torusGeometry args={[1.32, 0.31, 48, 128]} />
        </mesh>
        {/* Inner Emissive Blue Seam */}
        <mesh material={glowMaterial}>
          <torusGeometry args={[1.32, 0.322, 32, 96]} />
        </mesh>
      </group>
    </group>
  );
}
