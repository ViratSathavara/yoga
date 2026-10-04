'use client';

import React, { forwardRef, useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

interface ScrollVideoProps {
  progress: number;
  stage: 'intro' | 'connection' | 'welcome' | 'namaste';
  reducedMotion: boolean;
}

export const ScrollVideo = forwardRef<HTMLVideoElement, ScrollVideoProps>(
  ({ progress, stage, reducedMotion }, ref) => {
    const localVideoRef = useRef<HTMLVideoElement | null>(null);
    const setVideoRef = useCallback(
      (element: HTMLVideoElement | null) => {
        localVideoRef.current = element;
        if (typeof ref === 'function') {
          ref(element);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLVideoElement | null>).current = element;
        }
      },
      [ref]
    );

    const [isLoaded, setIsLoaded] = useState(false);
    const targetTimeRef = useRef(0);
    const isSeekingRef = useRef(false);
    const rafIdRef = useRef<number | null>(null);

    // Perform seek safely with seeking lock & queue catch-up
    const performSeek = useCallback(() => {
      const video = localVideoRef.current;
      if (!video || !video.duration || Number.isNaN(video.duration)) return;

      if (isSeekingRef.current) return;

      const target = targetTimeRef.current;
      if (Math.abs(video.currentTime - target) > 0.015) {
        isSeekingRef.current = true;
        try {
          video.currentTime = target;
        } catch {
          isSeekingRef.current = false;
        }
      }
    }, []);

    // When browser finishes seeking previous frame, immediately check if target moved
    const handleSeeked = useCallback(() => {
      isSeekingRef.current = false;
      performSeek();
    }, [performSeek]);

    // Keep targetTime updated when progress changes
    useEffect(() => {
      if (reducedMotion) return;

      const video = localVideoRef.current;
      if (!video) return;

      const duration = video.duration || 10.006;
      const targetTime = Math.min(
        duration - 0.04,
        Math.max(0.01, progress * duration)
      );
      targetTimeRef.current = targetTime;

      performSeek();
    }, [progress, reducedMotion, performSeek]);

    // Continuous rAF monitor to catch any subtle drift
    useEffect(() => {
      if (reducedMotion) return;

      let active = true;
      const tick = () => {
        if (!active) return;
        performSeek();
        rafIdRef.current = requestAnimationFrame(tick);
      };

      rafIdRef.current = requestAnimationFrame(tick);

      return () => {
        active = false;
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      };
    }, [reducedMotion, performSeek]);

    // Video metadata & initial frame priming
    const handleLoadedMetadata = () => {
      const video = localVideoRef.current;
      if (video) {
        video.pause();
        const duration = video.duration || 10.006;
        const initialTarget = Math.min(
          duration - 0.04,
          Math.max(0.01, progress * duration)
        );
        targetTimeRef.current = initialTarget;
        video.currentTime = initialTarget;
        setIsLoaded(true);
      }
    };

    return (
      <div className="hero-film-frame absolute inset-0 w-full h-full overflow-hidden" aria-hidden="true">
        {/* High-quality poster as immediate backdrop */}
        <Image
          src="/hero-video-poster.jpg"
          alt="Yoga teacher practicing in natural morning light"
          fill
          priority
          sizes="100vw"
          className="hero-film-poster object-cover object-[58%_38%] sm:object-[54%_45%] md:object-[54%_50%] select-none transition-opacity duration-700"
          style={{
            opacity: isLoaded ? 0.35 : 1,
          }}
        />

        {/* Scroll-scrubbed HTML5 video */}
        {!reducedMotion && (
          <video
            ref={setVideoRef}
            src="/hero-video.mp4"
            poster="/hero-video-poster.jpg"
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            tabIndex={-1}
            onLoadedMetadata={handleLoadedMetadata}
            onCanPlay={() => setIsLoaded(true)}
            onSeeked={handleSeeked}
            className="absolute inset-0 w-full h-full object-cover object-[58%_38%] sm:object-[54%_45%] md:object-[54%_50%] select-none"
            style={{
              transform: `scale(${1.025 - progress * 0.025})`,
              transformOrigin: '50% 50%',
              opacity: isLoaded ? 1 : 0.8,
              transition: 'opacity 0.4s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        )}

        {/*
          Cinematic shade gradient:
          - Desktop (md:): heavy gradient on left ~45% to keep text crystal clear,
            soft transparent fade on right so teacher & Namaste gesture remain luminous.
          - Mobile: balanced atmospheric dark overlay with vignette.
        */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(90deg, 
                rgba(18, 25, 19, 0.92) 0%, 
                rgba(22, 29, 21, 0.82) 34%, 
                rgba(25, 32, 23, 0.45) 62%, 
                rgba(25, 32, 23, 0.08) 86%,
                rgba(25, 32, 23, 0.02) 100%
              ),
              linear-gradient(0deg, 
                rgba(18, 24, 17, 0.65) 0%, 
                rgba(20, 26, 19, 0.25) 45%, 
                rgba(20, 26, 19, 0.5) 100%
              )
            `,
          }}
        />

        {/* Bottom subtle ambient gradient for smooth section blending into #f7f5ed */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: progress > 0.88 ? Math.min(1, (progress - 0.88) / 0.12) : 0,
            background: 'linear-gradient(to bottom, transparent 0%, rgba(247, 245, 237, 0.7) 60%, #f7f5ed 100%)',
          }}
        />
      </div>
    );
  }
);

ScrollVideo.displayName = 'ScrollVideo';
