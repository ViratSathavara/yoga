"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  Star,
  Users,
  Award,
  BookOpen,
  Heart,
  Lightbulb,
  Leaf,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: "500+", label: "Students Taught", icon: Users },
  { value: "8+", label: "Years Experience", icon: Award },
  { value: "50+", label: "Workshops Held", icon: BookOpen },
  { value: "4.9★", label: "Average Rating", icon: Star },
];

const timeline = [
  {
    year: "2016",
    title: "Began Her Yoga Journey",
    desc: "Priya discovered yoga as a way to manage work stress and was immediately transformed by its physical and mental benefits.",
  },
  {
    year: "2018",
    title: "RYT-500 Certification",
    desc: "Completed 500-hour teacher training with Yoga Alliance, specialising in Hatha and Vinyasa methodology.",
  },
  {
    year: "2020",
    title: "Opened Studio in Ahmedabad",
    desc: "Founded her personal yoga studio in the heart of Ahmedabad, offering small-batch, personalised classes.",
  },
  {
    year: "2024",
    title: "500+ Students Milestone",
    desc: "A proud community of 500+ students across in-person and online programmes, with an average rating of 4.9 stars.",
  },
];

const pillars = [
  {
    icon: Lightbulb,
    title: "Personalised",
    desc: "Every student gets a tailored approach. Modifications, progressions, and goals are aligned to you — not a one-size-fits-all syllabus.",
  },
  {
    icon: Heart,
    title: "Holistic",
    desc: "Beyond postures: breathwork, mindfulness, and lifestyle guidance are woven into every session for whole-person wellbeing.",
  },
  {
    icon: Leaf,
    title: "Practical",
    desc: "Yoga should serve your real life. Classes are structured so benefits — better sleep, less stress, more energy — show up off the mat too.",
  },
];

const certifications = [
  "RYT-500 – Yoga Alliance International",
  "Certified Hatha Yoga Instructor",
  "Certified Vinyasa Flow Instructor",
  "Prenatal Yoga Certified (Safe for All Trimesters)",
  "Meditation & Pranayama Specialist",
  "Women's Wellness Yoga Practitioner",
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div className="bg-[#f7f5ed] min-h-screen text-[#364132]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#566748] py-24 md:py-32 text-center text-[#fbf8ef]">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-white/10 blur-2xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <motion.p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e4e8db]"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            A guide, not a guru
          </motion.p>
          <motion.h1
            className="font-serif text-4xl font-normal text-[#fbf8ef] md:text-6xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Meet Your Yoga Guide
          </motion.h1>
          <motion.p
            className="mx-auto mt-5 max-w-xl text-base md:text-lg text-[#faf8ef]/85 leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            RYT-500 certified, 8+ years of mindful practice, and a genuine passion for
            helping every body discover sustainable ease and balance.
          </motion.p>
        </div>
      </section>

      {/* ── Bio Section ── */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeLeft}
          >
            <div className="relative mx-auto max-w-md rounded-2xl overflow-hidden shadow-xl border border-[#dedbd2] bg-[#fbfaf5]">
              <div className="relative h-[480px] w-full">
                <Image
                  src="/instructor.jpg"
                  alt="SattvaYoga Instructor - Satellite, Ahmedabad"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#566748] px-6 py-2.5 text-xs font-semibold text-[#fbf8ef] shadow-xl flex items-center gap-2">
              <span className="text-[#e4e8db]">✦</span> RYT-500 Certified · 8+ Yrs Exp
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#6d795e]">
              About Your Instructor
            </p>
            <h2 className="font-serif text-3xl font-medium text-[#364132] md:text-4xl">
              Priya Sharma
            </h2>
            <p className="mt-1 text-sm text-[#77796f] font-medium">
              Lead Yoga Instructor · Satellite, Ahmedabad
            </p>

            <blockquote className="my-6 border-l-3 border-[#566748] pl-4 italic text-[#555a4b] text-base md:text-lg leading-relaxed font-serif">
              &ldquo;Yoga is not about touching your toes. It is about what you learn
              on the way down.&rdquo;
            </blockquote>

            <div className="space-y-4 text-[#55574c] text-[13.5px] leading-relaxed">
              <p>
                Namaste! I&apos;m <strong>Priya Sharma</strong>, a Yoga Alliance
                RYT-500 certified instructor based in Satellite, Ahmedabad with over{" "}
                <strong>8 years of teaching experience</strong>. My journey with
                yoga began as a personal pursuit of balance amidst demanding
                routine — and it changed my health so profoundly that I
                made it my life&apos;s vocation.
              </p>
              <p>
                I specialise in <strong>Beginner Yoga</strong>,{" "}
                <strong>Weight Management</strong>,{" "}
                <strong>Stress Relief</strong>, and{" "}
                <strong>Women&apos;s Wellness</strong>. My teaching blends classical
                Hatha with gentle Vinyasa, always adapting postures to the anatomical
                comfort and pace of each student.
              </p>
              <p>
                I believe yoga is for every body — every age, every fitness
                level, every life stage. Whether you&apos;re stepping onto the mat
                for the first time or returning after a break, I meet you
                exactly where you are.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/free-trial"
                className="btn-primary"
              >
                <span>Book a Free Trial Class</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#414c39] py-14 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <s.icon className="mx-auto mb-2 h-7 w-7 text-[#d0d6c3]" />
                <p className="font-serif text-3xl font-medium text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-[#d5d8cc]">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Timeline ── */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#86A873]">
            The Story So Far
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2D2D2D] md:text-4xl">
            My Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#86A873] to-[#6B4F3A] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className={`relative flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                {/* Dot */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#86A873] text-white font-bold text-xs shadow-md md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2">
                  {item.year.slice(2)}
                </div>

                {/* Card */}
                <div
                  className={`ml-4 md:ml-0 md:w-[calc(50%-3rem)] ${
                    i % 2 === 0
                      ? "md:mr-auto md:pr-8 md:text-right"
                      : "md:ml-auto md:pl-8 md:text-left"
                  } rounded-2xl bg-white p-6 shadow-md`}
                >
                  <span className="inline-block mb-1 text-xs font-bold uppercase tracking-widest text-[#86A873]">
                    {item.year}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#2D2D2D]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#666] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teaching Approach ── */}
      <section className="bg-gradient-to-br from-[#F5EDD6] to-[#EDE0C4] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#86A873]">
              How I Teach
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2D2D2D] md:text-4xl">
              My Teaching Approach
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#666]">
              Three core pillars shape every single class I teach.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="rounded-2xl bg-white p-8 shadow-md text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F5EDD6]">
                  <p.icon className="h-7 w-7 text-[#86A873]" />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2D2D2D]">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-[#666] leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Studio Tour & Practice Space ── */}
      <section className="bg-white py-20 md:py-28 border-y border-[#EDE8DF]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Studio Image with floating badge */}
            <motion.div
              className="lg:col-span-7 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-2xl border-4 border-[#F8F5F0]">
                <Image
                  src="/images/studio-interior.jpg"
                  alt="Priya Sharma Yoga Studio Interior in Satellite, Ahmedabad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-2">
                    <MapPin className="h-3.5 w-3.5 text-[#E8D9B5]" /> Satellite, Ahmedabad
                  </div>
                  <p className="text-sm text-white/90">
                    Natural lighting, bamboo mats, and peaceful acoustic ambiance designed for deep focus.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Studio Description */}
            <motion.div
              className="lg:col-span-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#86A873]">
                The Sanctuary
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2D2D2D] md:text-4xl leading-tight">
                A Peaceful Haven in the Heart of the City
              </h2>
              <p className="mt-4 text-base text-[#555] leading-relaxed">
                Step into a serene environment designed specifically for mindful movement. Located near ISKCON Cross Roads in Satellite, Ahmedabad, our studio is insulated from city chaos, offering you space to breathe, restore, and reconnect.
              </p>

              <div className="mt-6 space-y-3.5">
                {[
                  "Natural cross-ventilation and sunlight for healthy prana flow",
                  "Small, intimate batches (max 10–12 students) for personal hands-on corrections",
                  "Sanitized organic cork mats, cotton straps, and meditation bolsters provided",
                  "Filtered herbal water, herbal teas, and changing rooms available",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 shrink-0 text-[#6B9E5E] mt-0.5" />
                    <span className="text-sm text-[#444]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/schedule"
                  className="rounded-full bg-[#6B9E5E] px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-[#5a8a4e] transition"
                >
                  View Studio Batches →
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-[#6B4F3A]/30 px-6 py-3 text-sm font-semibold text-[#6B4F3A] hover:bg-[#F5EDD6] transition"
                >
                  Get Directions
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
        <motion.div
          className="mb-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#86A873]">
            Credentials
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2D2D2D] md:text-4xl">
            Certifications
          </h2>
        </motion.div>

        <div className="rounded-2xl bg-white p-8 shadow-md">
          <ul className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.li
                key={cert}
                className="flex items-center gap-3 text-[#333]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.5}
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-[#86A873]" />
                <span className="text-base">{cert}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-[#86A873] to-[#6B9E5E] py-16">
        <motion.div
          className="mx-auto max-w-2xl px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/85">
            Join 500+ students who have transformed their health and wellbeing
            with Priya's guidance.
          </p>
          <Link
            href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20would%20like%20to%20book%20a%20free%20trial%20class."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-bold text-[#6B9E5E] shadow-lg transition hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Free Trial Class →
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
