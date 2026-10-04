'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export interface ProgramCardProps {
  title: string;
  description: string;
  /** Emoji string like "🧘" or any ReactNode */
  icon: string | ReactNode;
  /** Internal or external href for the 'Learn More' link */
  href: string;
  features: string[];
  /** Optional 0-based index used to stagger entrance animations */
  index?: number;
  /** Optional image URL */
  image?: string;
}

export default function ProgramCard({
  title,
  description,
  icon,
  href,
  features,
  index = 0,
  image,
}: ProgramCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const isExternal = typeof href === 'string' && href.startsWith('http');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut' as const, delay: index * 0.1 }}
      className="
        group relative flex flex-col
        bg-white rounded-3xl
        overflow-hidden
        shadow-[0_4px_24px_rgba(107,79,58,0.08)]
        border border-[#EDE8DF]
        hover:border-[#6B9E5E]
        hover:-translate-y-1.5
        hover:shadow-[0_12px_40px_rgba(107,79,58,0.15)]
        transition-all duration-300
        h-full
      "
    >
      {/* Optional Card Image Banner */}
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-xl shadow-md">
            {icon}
          </div>
        </div>
      )}

      <div className="p-6 md:p-8 flex flex-col flex-1">
        {/* If no image, render icon pill */}
        {!image && (
          <div
            className="
              w-14 h-14 rounded-2xl mb-5 flex items-center justify-center
              bg-[#F5EDD6] text-3xl
              group-hover:bg-[#86A873]/20
              transition-colors duration-300
            "
            aria-hidden="true"
          >
            {icon}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-[#3a2e24] mb-2 leading-snug group-hover:text-[#6B9E5E] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#6e5c4e] text-sm leading-relaxed mb-5">{description}</p>

        {/* Feature list */}
        {features.length > 0 && (
          <ul className="flex flex-col gap-2 mb-6 flex-1">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs md:text-sm text-[#5a4a3a]">
                <span
                  className="
                    mt-0.5 shrink-0 w-4 h-4 rounded-full
                    flex items-center justify-center
                    bg-[#86A873]/20 text-[#4a7a44]
                  "
                >
                  <Check size={10} strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Learn More link */}
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-auto inline-flex items-center gap-1.5
              text-sm font-semibold text-[#6B9E5E]
              group-hover:text-[#4A7C59]
              transition-colors duration-200
            "
          >
            Explore Program
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        ) : (
          <Link
            href={href}
            className="
              mt-auto inline-flex items-center gap-1.5
              text-sm font-semibold text-[#6B9E5E]
              group-hover:text-[#4A7C59]
              transition-colors duration-200
            "
          >
            Explore Program
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
