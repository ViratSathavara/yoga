'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

export interface TestimonialCardProps {
  name: string;
  role: string;
  review: string;
  /** 1–5 */
  rating: number;
  /** Optional avatar URL */
  image?: string;
}

/** Returns the first letter of each word, up to 2 characters */
function getInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

/** Renders filled / empty stars */
function StarRating({ rating }: { rating: number }) {
  const clamped = Math.min(5, Math.max(0, Math.round(rating)));
  return (
    <div className="flex items-center gap-0.5" aria-label={`${clamped} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={
            i < clamped
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200'
          }
        />
      ))}
    </div>
  );
}

export default function TestimonialCard({
  name,
  role,
  review,
  rating,
  image,
}: TestimonialCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut' as const }}
      className="
        group flex flex-col gap-4
        bg-white rounded-2xl
        p-6 md:p-7
        shadow-[0_2px_20px_rgba(107,79,58,0.08)]
        hover:shadow-[0_4px_28px_rgba(107,79,58,0.14)]
        border border-transparent
        hover:border-[#86A873]/30
        transition-shadow transition-colors duration-300
      "
    >
      {/* Star rating */}
      <StarRating rating={rating} />

      {/* Review text */}
      <p className="text-[#5a4a3a] text-[0.95rem] leading-relaxed flex-1">
        &ldquo;{review}&rdquo;
      </p>

      {/* Author row */}
      <div className="flex items-center gap-3 mt-1">
        {/* Avatar */}
        {image ? (
          <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-[#86A873]/30">
            <Image
              src={image}
              alt={name}
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className="
              w-11 h-11 rounded-full shrink-0
              flex items-center justify-center
              bg-[#8FAF8B]/25 text-[#4a7a44]
              text-sm font-bold ring-2 ring-[#86A873]/30
              select-none
            "
            aria-hidden="true"
          >
            {getInitials(name)}
          </div>
        )}

        {/* Name + role */}
        <div>
          <p className="font-semibold text-[#3a2e24] text-sm leading-tight">{name}</p>
          <p className="text-xs text-[#8a7a6a] mt-0.5">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
