'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ScrollVideo } from './ScrollVideo';
import { Hero3DLayer } from './Hero3DLayer';
import { FloatingElements } from './FloatingElements';
import { HeroContent, HeroStage } from './HeroContent';
import { ScrollProgress } from './ScrollProgress';

export function YogaHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<HeroStage>('intro');
  const [reducedMotion, setReducedMotion] = useState(false);

  // References for high-precision 60fps lerp loop
  const rawProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  // Check for prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);

      const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  // Calculate scroll progress from container rect
  const calculateScrollProgress = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || 800;
    const scrollableDistance = rect.height - windowHeight;

    if (scrollableDistance <= 0) {
      rawProgressRef.current = 0;
      return;
    }

    // -rect.top measures how many pixels have scrolled past the viewport top
    const currentScroll = -rect.top;
    const raw = Math.min(1, Math.max(0, currentScroll / scrollableDistance));
    rawProgressRef.current = raw;
  }, []);

  // Main animation / lerping loop
  useEffect(() => {
    if (reducedMotion) return;

    let isRunning = true;

    const onScroll = () => {
      calculateScrollProgress();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', calculateScrollProgress, { passive: true });
    calculateScrollProgress();

    const loop = () => {
      if (!isRunning) return;

      const raw = rawProgressRef.current;
      const prev = smoothProgressRef.current;
      const diff = raw - prev;

      // Responsive lerp (0.18 provides natural momentum with immediate feedback)
      if (Math.abs(diff) > 0.0001) {
        smoothProgressRef.current = prev + diff * 0.18;
      } else {
        smoothProgressRef.current = raw;
      }

      const current = smoothProgressRef.current;

      // Update state for components
      setProgress((last) => {
        if (Math.abs(last - current) > 0.0015) {
          return current;
        }
        return last;
      });

      // Stage milestone determination
      let nextStage: HeroStage = 'intro';
      if (current >= 0.78) {
        nextStage = 'namaste';
      } else if (current >= 0.55) {
        nextStage = 'welcome';
      } else if (current >= 0.28) {
        nextStage = 'connection';
      }

      setStage((last) => (last !== nextStage ? nextStage : last));

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      isRunning = false;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', calculateScrollProgress);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [reducedMotion, calculateScrollProgress]);

  // If user prefers reduced motion, render standard accessible hero
  if (reducedMotion) {
    return (
      <section
        className="scroll-hero relative min-h-[92vh] flex items-center overflow-hidden"
        aria-label="Welcome to SattvaYoga"
      >
        <ScrollVideo
          ref={videoRef}
          progress={0}
          stage="intro"
          reducedMotion={true}
        />
        <HeroContent progress={0} stage="intro" />
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[290vh] md:h-[320vh]"
      aria-label="Welcome to SattvaYoga - Interactive Experience"
    >
      {/* ── Sticky Viewport (100svh) ── */}
      <div
        className="sticky top-0 w-full h-[100vh] h-[100svh] overflow-hidden bg-[#1c241b]"
        style={{
          transform: progress > 0.94 ? `scale(${1 - (progress - 0.94) * 0.25})` : 'scale(1)',
          transformOrigin: '50% 100%',
          transition: 'transform 0.15s ease-out',
        }}
      >
        {/* 1. Scroll-Scrubbed Video Backdrop */}
        <ScrollVideo
          ref={videoRef}
          progress={progress}
          stage={stage}
          reducedMotion={reducedMotion}
        />

        {/* 2. 3D Perspective Tilt Layer with Floating Parallax */}
        <Hero3DLayer reducedMotion={reducedMotion}>
          <FloatingElements progress={progress} reducedMotion={reducedMotion} />
          <HeroContent progress={progress} stage={stage} />
        </Hero3DLayer>

        {/* 3. Progress Indicators & Exploration Cue */}
        <ScrollProgress progress={progress} stage={stage} />
      </div>
    </section>
  );
}
