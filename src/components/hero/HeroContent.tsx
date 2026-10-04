'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Flower2, Sparkles, CheckCircle2 } from 'lucide-react';

export type HeroStage = 'intro' | 'connection' | 'welcome' | 'namaste';

interface HeroContentProps {
  progress: number;
  stage: HeroStage;
}

const STAGE_COPY: Record<
  HeroStage,
  {
    eyebrow: string;
    sub: string;
    cta: string;
    badge: string;
  }
> = {
  intro: {
    eyebrow: 'A Healthier You Starts Here',
    sub: 'Begin with one quiet breath. Build strength, calm your mind and nourish your everyday life with personalized guidance in Satellite, Ahmedabad.',
    cta: 'Book your free trial',
    badge: '500+ students guided with care',
  },
  connection: {
    eyebrow: 'Mindful Movement & Balance',
    sub: 'A stronger body. A calmer mind. Personalised classes tailored to your body type, daily schedule and individual wellness goals.',
    cta: 'Book your free trial',
    badge: 'Flexible morning & evening slots',
  },
  welcome: {
    eyebrow: 'Your Practice Starts Here',
    sub: 'Your practice can start right here. Guided step-by-step with warm, non-judgmental instruction for first-timers and seasoned practitioners alike.',
    cta: 'Start your journey',
    badge: 'Online & in-person studio batches',
  },
  namaste: {
    eyebrow: 'Respectful · Authentic · Personal',
    sub: 'Your journey to better wellness starts here. Connect with mindful movement and experience the natural calm of authentic Yoga.',
    cta: 'Book free trial now',
    badge: 'Free consultation with our senior instructor',
  },
};

export function HeroContent({ progress, stage }: HeroContentProps) {
  const currentCopy = STAGE_COPY[stage] || STAGE_COPY.intro;

  // Gentle exit fade when user nears the bottom of the hero scroll section
  const exitOpacity = progress > 0.9 ? Math.max(0, 1 - (progress - 0.9) / 0.1) : 1;
  const exitTransform = progress > 0.9 ? `translateY(-${(progress - 0.9) * 40}px)` : 'none';

  return (
    <div
      className="relative z-20 w-full h-full flex items-center pointer-events-none select-none"
      style={{
        opacity: exitOpacity,
        transform: exitTransform,
        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
      }}
    >
      <div className="wrap w-full py-16 md:py-24">
        {/*
          Strict layout bounding:
          Desktop max width ~520px on the left side ensures the video subject
          (the woman in center-right performing yoga & namaste) is NEVER covered or obscured.
        */}
        <div className="max-w-[560px] lg:max-w-[520px] pointer-events-auto">
          {/* Eyebrow with animated pill */}
          <div className="inline-flex items-center gap-2.5 mb-5 md:mb-6">
            <span className="w-6 h-[1.5px] bg-[#c3ceb6]" />
            <span
              key={`eyebrow-${stage}`}
              className="text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.2em] text-[#e3e8dc] hero-stage-swap"
            >
              {currentCopy.eyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-[#fbf8ef] text-[42px] sm:text-[56px] md:text-[68px] lg:text-[76px] leading-[1.03] tracking-[-0.035em] mb-4 md:mb-5">
            Feel better.
            <br />
            Move better.
            <br />
            <em className="text-[#cdd8be] italic font-normal">Live better.</em>
          </h1>

          {/* Stage Storyline Subtitle */}
          <div className="min-h-[72px] md:min-h-[80px] mb-6 md:mb-8">
            <p
              key={`sub-${stage}`}
              className="text-[#f1eee2]/90 text-[13.5px] sm:text-[14.5px] md:text-[15.5px] leading-[1.65] font-normal hero-stage-swap"
            >
              {currentCopy.sub}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-7 md:mb-9">
            <Link
              href="/free-trial"
              className="inline-flex items-center justify-center gap-2.5 bg-[#e5eadc] text-[#303c2c] hover:bg-[#f3f5ee] active:scale-[0.98] text-[12.5px] font-semibold tracking-wide py-3.5 px-6 rounded shadow-lg transition-all duration-300"
              style={{
                boxShadow:
                  stage === 'namaste'
                    ? '0 0 24px rgba(229, 234, 220, 0.45)'
                    : '0 4px 14px rgba(0, 0, 0, 0.25)',
              }}
            >
              <span key={`cta-${stage}`} className="hero-stage-swap">
                {currentCopy.cta}
              </span>
              <ArrowRight size={16} className="text-[#4b5b44]" />
            </Link>

            <a
              href="https://wa.me/919876543210?text=Hi%20SattvaYoga!%20I'd%20like%20to%20learn%20more%20about%20your%20yoga%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#f3f1e6] hover:text-white text-[12px] font-semibold border-b border-[#eceee0]/60 hover:border-white pb-1 transition-all duration-200"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Trust & Community Micro-Badge */}
          <div className="pt-4 border-t border-[#faf8ef]/15 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full border border-[#edf0e4]/40 bg-[#283226]/40 backdrop-blur-sm flex items-center justify-center text-[#dce5d2] shrink-0">
              <Flower2 size={16} strokeWidth={1.4} />
            </span>
            <div className="min-w-0">
              <span
                key={`badge-${stage}`}
                className="text-[11.5px] text-[#f7f5ea] font-medium block leading-tight truncate hero-stage-swap"
              >
                {currentCopy.badge}
              </span>
              <span className="text-[10px] text-[#e2e4d5]/75 block mt-0.5">
                Welcoming all ages, flexibility and experience levels
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
