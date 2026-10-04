import { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
  /** Custom icon node. Defaults to a small leaf SVG. */
  icon?: ReactNode;
}

/** Inline leaf SVG used as the default icon */
function LeafIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3.5 h-3.5"
      aria-hidden="true"
    >
      {/* Simplified leaf path */}
      <path d="M2 22c0 0 4-2 8-8s10-6 12-2c-2 4-8 10-14 10C5 22 2 22 2 22Z" />
      <path d="M12 14 8 22" />
    </svg>
  );
}

/**
 * SectionLabel — renders a small pill/badge used as a sub-heading label
 * above section titles throughout the site.
 *
 * Usage:
 *   <SectionLabel>Our Programs</SectionLabel>
 *   <SectionLabel icon={<StarIcon />}>What Clients Say</SectionLabel>
 */
export default function SectionLabel({ children, icon }: SectionLabelProps) {
  return (
    <span className="section-label">
      <span className="inline-flex items-center gap-1.5 text-[#6B9E5E]">
        {icon ?? <LeafIcon />}
      </span>
      {children}
    </span>
  );
}
