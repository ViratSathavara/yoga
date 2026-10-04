'use client';

import React from 'react';
import { Flower2 } from 'lucide-react';

interface FloatingElementsProps {
  progress: number;
  reducedMotion: boolean;
}

export function FloatingElements({ progress, reducedMotion }: FloatingElementsProps) {
  if (reducedMotion) return null;

  // Gentle parallax shifts tied to scroll progress
  const leaf1Y = -progress * 85;
  const leaf2Y = -progress * 130;
  const lotusRotate = progress * 18;
  const orbitShift = -progress * 30;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-10"
      aria-hidden="true"
    >
      {/* ── Outer Orbital Arc (Concentric Ring) ── */}
      <div
        className="hidden md:block absolute -top-16 -right-16 w-[560px] h-[560px] rounded-full border border-[#e9ebda]/15"
        style={{
          transform: `translate3d(0, ${orbitShift}px, 0)`,
          transition: 'transform 0.15s ease-out',
        }}
      />

      {/* ── Inner Orbital Arc ── */}
      <div
        className="hidden lg:block absolute -top-8 -right-8 w-[420px] h-[420px] rounded-full border border-[#e9ebda]/10"
        style={{
          transform: `translate3d(0, ${orbitShift * 0.7}px, 0)`,
          transition: 'transform 0.15s ease-out',
        }}
      />

      {/* ── Floating Botanical Leaf 01 (Top Right) ── */}
      <div
        className="hidden md:block absolute top-[18%] right-[12%] text-[#c6d4ba]/30 opacity-70"
        style={{
          transform: `translate3d(0, ${leaf1Y}px, 0) rotate(12deg)`,
          transition: 'transform 0.2s cubic-bezier(0.2, 0.7, 0.2, 1)',
        }}
      >
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M10 38C10 38 12 24 24 16C36 8 40 8 40 8C40 8 40 18 32 30C24 42 10 38 10 38Z" />
          <path d="M10 38C18 32 28 22 40 8" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* ── Floating Botanical Leaf 02 (Mid Left) ── */}
      <div
        className="hidden md:block absolute top-[62%] left-[4%] text-[#b8c9ab]/25 opacity-60"
        style={{
          transform: `translate3d(0, ${leaf2Y}px, 0) rotate(-22deg)`,
          transition: 'transform 0.2s cubic-bezier(0.2, 0.7, 0.2, 1)',
        }}
      >
        <svg width="34" height="34" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 36C12 36 14 22 26 14C38 6 42 6 42 6C42 6 42 16 34 28C26 40 12 36 12 36Z" />
          <path d="M12 36C20 30 30 20 42 6" strokeWidth="0.8" />
        </svg>
      </div>

      {/* ── Subtle Geometric Lotus Mandala (Top Center-Left) ── */}
      <div
        className="hidden lg:block absolute top-[14%] left-[34%] text-[#e9ebda]/15"
        style={{
          transform: `translate3d(0, ${orbitShift * 1.2}px, 0) rotate(${lotusRotate}deg)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <Flower2 size={68} strokeWidth={0.7} />
      </div>
    </div>
  );
}
