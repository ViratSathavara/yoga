'use client';

import React from 'react';
import { ArrowDownRight, ChevronDown } from 'lucide-react';
import { HeroStage } from './HeroContent';

interface ScrollProgressProps {
  progress: number;
  stage: HeroStage;
}

const STAGES: { id: HeroStage; label: string; threshold: number }[] = [
  { id: 'intro', label: 'Intro', threshold: 0 },
  { id: 'connection', label: 'Flow', threshold: 0.28 },
  { id: 'welcome', label: 'Focus', threshold: 0.55 },
  { id: 'namaste', label: 'Namaste', threshold: 0.78 },
];

export function ScrollProgress({ progress, stage }: ScrollProgressProps) {
  // Fade out "Scroll to explore" cue once user starts scrolling
  const cueOpacity = Math.max(0, 1 - progress / 0.04);

  // Overall indicator exit fade as hero scrolls into the next section
  const containerOpacity = progress > 0.9 ? Math.max(0, 1 - (progress - 0.9) / 0.08) : 1;

  return (
    <div
      className="absolute bottom-6 inset-x-0 z-30 pointer-events-none select-none transition-opacity duration-300"
      style={{ opacity: containerOpacity }}
      aria-hidden="true"
    >
      <div className="wrap flex items-center justify-between">
        {/* Stage Journey Indicators (Left / Center) */}
        <div className="flex items-center gap-3 sm:gap-4 bg-[#1f271d]/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 pointer-events-auto">
          {STAGES.map((s) => {
            const isActive = stage === s.id;
            return (
              <div
                key={s.id}
                className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium tracking-wider uppercase transition-colors duration-200"
                style={{
                  color: isActive ? '#f5f3e9' : 'rgba(235, 238, 228, 0.45)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? '#d4dfc9' : 'rgba(235, 238, 228, 0.25)',
                    transform: isActive ? 'scale(1.25)' : 'scale(1)',
                    boxShadow: isActive ? '0 0 8px rgba(212, 223, 201, 0.6)' : 'none',
                  }}
                />
                <span className="hidden sm:inline">{s.label}</span>
              </div>
            );
          })}

          {/* Micro progress line */}
          <div className="hidden xs:block w-12 sm:w-16 h-[2px] bg-white/15 rounded-full overflow-hidden ml-1">
            <div
              className="h-full bg-[#d4dfc9] transition-all duration-100 ease-out"
              style={{ width: `${Math.min(100, Math.max(0, progress * 100))}%` }}
            />
          </div>
        </div>

        {/* Scroll Cue (Right) */}
        <div
          className="flex items-center gap-2 text-[#f8f6eb]/80 text-[11px] font-medium transition-opacity duration-300 pointer-events-auto"
          style={{ opacity: cueOpacity }}
        >
          <a
            href="#home-trust"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Scroll to explore</span>
            <ChevronDown size={14} className="animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
}
