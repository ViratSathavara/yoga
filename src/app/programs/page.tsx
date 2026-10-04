"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Clock, ChevronRight, CheckCircle, MessageCircle } from "lucide-react";

// ─── Animation ────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

// ─── Programs Data ────────────────────────────────────────────────────────────
const programs = [
  {
    emoji: "🧘",
    title: "Beginner Yoga",
    slug: "beginner-yoga",
    tagline: "Your first step onto the mat",
    image: "/images/program-beginner.jpg",
    description:
      "A gentle, structured programme designed for absolute beginners. Learn foundational postures, breathing techniques, and mindful movement in a supportive, judgement-free environment.",
    benefits: [
      "Build flexibility & core strength from scratch",
      "Learn safe alignment to prevent injuries",
      "Reduce anxiety and improve sleep quality",
    ],
    duration: "60 min / class",
    color: "from-[#d4e8cc] to-[#b8d9a8]",
    accent: "#6B9E5E",
  },
  {
    emoji: "🔥",
    title: "Weight Management",
    slug: "weight-management",
    tagline: "Burn fat, build metabolism",
    image: "/images/program-weight.jpg",
    description:
      "A dynamic blend of Vinyasa flow and targeted asanas to boost metabolism, tone muscles, and support healthy, sustainable weight management — without extreme diets.",
    benefits: [
      "Increase metabolic rate naturally",
      "Tone and strengthen the entire body",
      "Balance hormones that drive weight gain",
    ],
    duration: "75 min / class",
    color: "from-[#f7e0c8] to-[#f0c8a0]",
    accent: "#C4743A",
  },
  {
    emoji: "🌿",
    title: "Stress Relief",
    slug: "stress-relief",
    tagline: "Unwind, restore, recharge",
    image: "/images/program-stress.jpg",
    description:
      "Therapeutic yoga combining restorative postures, deep pranayama, and guided meditation to melt away stress, lower cortisol, and bring you back to calm.",
    benefits: [
      "Lower cortisol & stress hormones",
      "Activate the parasympathetic nervous system",
      "Improve focus, mood, and emotional balance",
    ],
    duration: "60 min / class",
    color: "from-[#c8e0d4] to-[#a0c8b8]",
    accent: "#3A8C6E",
  },
  {
    emoji: "💻",
    title: "Online Yoga",
    slug: "online-yoga",
    tagline: "Practice anywhere, anytime",
    image: "/images/program-online.jpg",
    description:
      "Live virtual classes and recorded sessions so you can enjoy personalised yoga guidance from the comfort of your home — no commute, no compromise on quality.",
    benefits: [
      "Live sessions with real-time corrections",
      "Flexible batch timings for busy schedules",
      "Access recorded sessions anytime",
    ],
    duration: "45 min / class",
    color: "from-[#c8d4e8] to-[#a0b4d8]",
    accent: "#3A5E8C",
  },
  {
    emoji: "👩",
    title: "Women's Yoga",
    slug: "womens-yoga",
    tagline: "Designed for the feminine body",
    image: "/images/program-womens.jpg",
    description:
      "A holistic programme addressing women's unique health needs — hormonal balance, PCOS, prenatal/postnatal wellness, menstrual health, and emotional wellbeing.",
    benefits: [
      "Support hormonal & reproductive health",
      "Safe prenatal & postnatal sequences",
      "Alleviate PCOS & menstrual discomfort",
    ],
    duration: "60 min / class",
    color: "from-[#e8c8d4] to-[#d8a8b8]",
    accent: "#8C3A5E",
  },
  {
    emoji: "🏢",
    title: "Corporate Yoga",
    slug: "corporate-yoga",
    tagline: "Wellness at the workplace",
    image: "/images/program-corporate.jpg",
    description:
      "On-site or virtual yoga sessions tailored for corporate teams — reduce burnout, boost productivity, and build a healthier, happier workplace culture.",
    benefits: [
      "Reduce employee burnout & absenteeism",
      "Improve team focus and energy",
      "Desk-friendly stretches & breathwork",
    ],
    duration: "45–60 min / session",
    color: "from-[#e8e0c8] to-[#d8c8a0]",
    accent: "#8C6E3A",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function ProgramsPage() {
  return (
    <div className="bg-[#f7f5ed] min-h-screen text-[#364132]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#566748] py-24 md:py-32 text-center text-[#fbf8ef]">
        <div className="pointer-events-none absolute inset-0 opacity-15"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #e4e8db 0%, transparent 50%), radial-gradient(circle at 80% 20%, #414c39 0%, transparent 40%)" }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <motion.p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e4e8db]"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            A practice for your season
          </motion.p>
          <motion.h1
            className="font-serif text-4xl font-normal text-[#fbf8ef] md:text-6xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Find Your Practice
          </motion.h1>
          <motion.p
            className="mx-auto mt-5 max-w-xl text-base md:text-lg text-[#faf8ef]/80 leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            Goal-based programmes shaped around real bodies and busy routines —
            giving you room to move and grow at your own pace.
          </motion.p>
        </div>
      </section>

      {/* ── Programs Grid ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.slug}
              className="group flex flex-col overflow-hidden rounded-xl bg-[#fbfaf5] border border-[#dedbd2] shadow-sm transition hover:shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Card top image */}
              <div className="relative h-52 w-full overflow-hidden bg-[#e4e8db]">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <span className="text-2xl drop-shadow" role="img" aria-label={prog.title}>
                    {prog.emoji}
                  </span>
                  <span className="rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-[#f7f5ed]">
                    {prog.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <p
                  className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-[#6d795e]"
                >
                  {prog.tagline}
                </p>
                <h2 className="font-serif text-2xl font-medium text-[#364132]">
                  {prog.title}
                </h2>
                <p className="mt-3 text-[13px] text-[#77796f] leading-relaxed flex-1">
                  {prog.description}
                </p>

                {/* Benefits */}
                <ul className="mt-4 space-y-2 border-t border-[#dedbd2]/60 pt-4">
                  {prog.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[12.5px] text-[#55574c]">
                      <CheckCircle
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#566748]"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Duration + CTA */}
                <div className="mt-6 flex items-center justify-between border-t border-[#dedbd2] pt-4">
                  <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#77796f]">
                    <Clock className="h-3.5 w-3.5 text-[#566748]" />
                    {prog.duration}
                  </span>
                  <Link
                    href={`/programs/${prog.slug}`}
                    className="inline-flex items-center gap-1 rounded bg-[#566748] px-3.5 py-1.5 text-[11.5px] font-semibold text-white transition hover:bg-[#435439]"
                  >
                    <span>Details</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Problem → Solution Banner ── */}
      <section className="bg-[#414c39] py-16 text-white">
        <motion.div
          className="mx-auto max-w-3xl px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#d4b896]">
            Not Sure Where to Begin?
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white md:text-3xl">
            Not sure which program is right for you?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/80">
            Every student is different. Message Priya on WhatsApp — she'll
            listen to your goals and personally recommend the best programme for
            you. No pressure, no sales pitch.
          </p>
          <Link
            href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20need%20help%20choosing%20the%20right%20yoga%20program%20for%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#1ebe5d] hover:shadow-xl"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp — It's Free
          </Link>
        </motion.div>
      </section>

      {/* ── All-programs CTA ── */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="mb-4 text-[#666]">
            All programmes include a <strong>FREE first trial class</strong> so
            you can experience the teaching style before committing.
          </p>
          <Link
            href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20would%20like%20to%20book%20a%20free%20trial%20class."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#86A873] px-10 py-4 text-base font-bold text-white shadow-md transition hover:bg-[#6B9E5E] hover:shadow-lg"
          >
            Book Your FREE Trial →
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
