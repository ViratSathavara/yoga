'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Hero3DLayerProps {
  children: React.ReactNode;
  reducedMotion: boolean;
  className?: string;
}

export function Hero3DLayer({
  children,
  reducedMotion,
  className = '',
}: Hero3DLayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetTilt = useRef({ x: 0, y: 0 });
  const currentTilt = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch / mobile devices where tilt is inappropriate
    if (typeof window !== 'undefined') {
      const touchQuery = window.matchMedia('(pointer: coarse)');
      setIsTouchDevice(touchQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => setIsTouchDevice(e.matches);
      touchQuery.addEventListener('change', handleChange);
      return () => touchQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    if (reducedMotion || isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize mouse from center: -1 to 1
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;

      // Subtle tilt limits:
      // rotateX (vertical mouse tilt): -1.5deg to +1.5deg
      // rotateY (horizontal mouse tilt): -1.8deg to +1.8deg
      targetTilt.current = {
        x: -normY * 1.5,
        y: normX * 1.8,
      };
    };

    const handleMouseLeave = () => {
      targetTilt.current = { x: 0, y: 0 };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth physics loop
    const animate = () => {
      const el = containerRef.current;
      if (el) {
        // Lerp towards target
        currentTilt.current.x += (targetTilt.current.x - currentTilt.current.x) * 0.08;
        currentTilt.current.y += (targetTilt.current.y - currentTilt.current.y) * 0.08;

        const { x, y } = currentTilt.current;
        el.style.transform = `perspective(1200px) rotateX(${x.toFixed(3)}deg) rotateY(${y.toFixed(3)}deg)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [reducedMotion, isTouchDevice]);

  return (
    <div
      ref={containerRef}
      className={`hero-3d-stage relative w-full h-full transform-style-3d ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        willChange: reducedMotion || isTouchDevice ? 'auto' : 'transform',
      }}
    >
      {children}
    </div>
  );
}
