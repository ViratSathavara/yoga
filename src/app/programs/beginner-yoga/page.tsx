"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Clock,
  CheckCircle,
  ChevronDown,
  MessageCircle,
  Calendar,
  IndianRupee,
  Star,
} from "lucide-react";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const whatToExpect = [
  {
    num: "01",
    title: "Safe, Judgement-Free Environment",
    desc: "Classes are designed for absolute beginners — no prior experience or flexibility required. Every body is welcomed as it is.",
  },
  {
    num: "02",
    title: "Foundational Posture Training",
    desc: "You'll learn the 25 most important yoga asanas with correct alignment cues, so you build strength the right way from day one.",
  },
  {
    num: "03",
    title: "Breathing & Mindfulness",
    desc: "Each class includes dedicated pranayama and mindfulness practice — the parts of yoga that create lasting change off the mat.",
  },
  {
    num: "04",
    title: "Progressive Curriculum",
    desc: "Classes follow a structured 3-month curriculum so you can feel your growth week-by-week — not just random poses each day.",
  },
];

const whoIsItFor = [
  "Complete beginners with zero yoga experience",
  "People returning to yoga after a long gap",
  "Anyone with a sedentary lifestyle or desk job",
  "Those managing mild back pain or stiffness",
  "Students looking to reduce anxiety and stress",
  "Anyone wanting to build a sustainable healthy habit",
];

const classStructure = [
  {
    time: "5 min",
    phase: "Warm-Up",
    desc: "Joint rotations, gentle neck/shoulder release, breath awareness to settle into the practice.",
    color: "bg-[#d4e8cc]",
    textColor: "text-[#3a6b2a]",
  },
  {
    time: "40 min",
    phase: "Asana Practice",
    desc: "Guided sequencing through standing, seated, and supine postures with alignment cues and modifications.",
    color: "bg-[#c8d4e8]",
    textColor: "text-[#2a4a6b]",
  },
  {
    time: "10 min",
    phase: "Pranayama",
    desc: "Breathwork techniques: Anulom Vilom, Bhramari, and Kapalbhati tailored for beginners.",
    color: "bg-[#e8e0c8]",
    textColor: "text-[#6b5a2a]",
  },
  {
    time: "5 min",
    phase: "Meditation / Savasana",
    desc: "Guided body-scan meditation and deep rest in Savasana to integrate the practice.",
    color: "bg-[#e8c8d4]",
    textColor: "text-[#6b2a4a]",
  },
];

const batches = [
  {
    session: "Morning Batch",
    time: "6:30 AM – 7:30 AM",
    days: "Mon / Wed / Fri",
    icon: "🌅",
  },
  {
    session: "Evening Batch",
    time: "6:00 PM – 7:00 PM",
    days: "Tue / Thu / Sat",
    icon: "🌇",
  },
  {
    session: "Weekend Batch",
    time: "7:00 AM – 8:00 AM",
    days: "Sat / Sun",
    icon: "☀️",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "/ month",
    highlight: false,
    perks: [
      "12 classes per month",
      "Access to one batch",
      "WhatsApp support",
      "Monthly progress check-in",
    ],
    cta: "Get Started",
  },
  {
    name: "Regular",
    price: "₹4,999",
    period: "/ 3 months",
    highlight: true,
    perks: [
      "36 classes (3 months)",
      "Flexible batch switching",
      "Priority WhatsApp support",
      "Monthly 1:1 progress call",
      "Nutrition & lifestyle tips",
      "Best value — save ₹3,998",
    ],
    cta: "Most Popular",
  },
];

const faqs = [
  {
    q: "I have never done yoga before. Is this class really for me?",
    a: "Absolutely. 'Beginner Yoga' is designed from the ground up for people who have never stepped on a mat. There is no assumed flexibility, strength, or prior knowledge. We start from the very basics and progress at a comfortable pace.",
  },
  {
    q: "I'm not flexible at all. Will that be a problem?",
    a: "Not at all — in fact, inflexibility is one of the best reasons to start yoga! Flexibility is a result of consistent practice, not a prerequisite. Every posture has beginner-friendly modifications so you can practise safely regardless of how stiff you currently feel.",
  },
  {
    q: "What should I bring to class?",
    a: "Just yourself and comfortable, stretchable clothing. Yoga mats are available at the studio, but you're welcome to bring your own. Please avoid heavy meals 2 hours before class.",
  },
  {
    q: "How soon will I see results?",
    a: "Most students notice improved sleep and reduced stress within the first 2 weeks. Visible flexibility improvements and strength gains typically appear within 4–6 weeks of consistent attendance (3× per week).",
  },
  {
    q: "Can I switch to a different batch after I join?",
    a: "Yes — Regular plan students can switch batches freely based on availability. Starter plan students can request one batch switch per month. Just message Priya on WhatsApp to arrange it.",
  },
];

// ─── FAQ Item Component ───────────────────────────────────────────────────────
function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="overflow-hidden rounded-xl border border-[#e8e0d4] bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index * 0.5}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 p-5 text-left transition hover:bg-[#faf8f4]"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#2D2D2D] text-sm leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`mt-0.5 h-5 w-5 shrink-0 text-[#86A873] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
          >
            <div className="border-t border-[#f0ebe0] px-5 py-4 text-sm text-[#555] leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BeginnerYogaPage() {
  return (
    <div className="bg-[#F8F5F0] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3D664A] via-[#4A7C59] to-[#2D5038] pt-24 pb-28 md:pt-32 md:pb-36">
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/10 blur-2xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <span>🧘</span> Beginner Programme
          </motion.div>
          <motion.h1
            className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-white md:text-6xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Beginner Yoga Classes
          </motion.h1>
          <motion.p
            className="mx-auto mt-5 max-w-2xl text-lg text-white/90"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            The safest, most structured way to start your yoga journey in
            Ahmedabad. No experience, no flexibility required — just show up.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            <Link
              href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20want%20to%20book%20a%20free%20trial%20for%20Beginner%20Yoga%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#4A7C59] shadow-lg transition hover:shadow-xl hover:-translate-y-0.5"
            >
              Book Free Trial Class
            </Link>
            <Link
              href="#schedule"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Schedule ↓
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-6 text-white/90 text-sm"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
          >
            {[
              { icon: Clock, label: "60 min / class" },
              { icon: Star, label: "4.9★ rated" },
              { icon: CheckCircle, label: "Free first class" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5">
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Featured Visual ── */}
      <section className="max-w-5xl mx-auto px-4 -mt-16 sm:-mt-20 relative z-10 mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative aspect-[21/9] sm:aspect-[16/7] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#F5EDD6]"
        >
          <Image
            src="/images/program-beginner.jpg"
            alt="Beginner Yoga Practice at Priya Sharma Yoga Ahmedabad"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 text-white">
            <span className="text-xs sm:text-sm font-medium bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full">
              📍 Satellite Studio, Ahmedabad &amp; Live Interactive Online Batches
            </span>
            <span className="text-xs font-semibold bg-[#4A7C59] px-3 py-1 rounded-full shadow">
              Small Batches (Max 10)
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── What to Expect ── */}
      <section className="mx-auto max-w-5xl px-4 py-8 md:py-16">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#86A873]">
            The Experience
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2D2D2D] md:text-4xl">
            What to Expect
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {whatToExpect.map((item, i) => (
            <motion.div
              key={item.num}
              className="flex gap-5 rounded-2xl bg-white p-6 shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#86A873]/30 leading-none shrink-0">
                {item.num}
              </span>
              <div>
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
      </section>

      {/* ── Who Is It For ── */}
      <section className="bg-gradient-to-br from-[#F5EDD6] to-[#EDE0C4] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            className="mb-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#86A873]">
              Is This for Me?
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2D2D2D] md:text-4xl">
              Who Is This Programme For?
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {whoIsItFor.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i * 0.5}
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#86A873]" />
                <span className="text-sm text-[#333]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Class Structure ── */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#86A873]">
            Every Session
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2D2D2D] md:text-4xl">
            Class Structure
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[#666]">
            A complete 60-minute journey designed for beginners.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d4e8cc] via-[#c8d4e8] to-[#e8c8d4]" />
          <div className="space-y-6">
            {classStructure.map((phase, i) => (
              <motion.div
                key={phase.phase}
                className="relative flex gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                {/* Dot */}
                <div
                  className={`relative z-10 flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl ${phase.color} shadow-sm`}
                >
                  <span className={`text-xs font-bold ${phase.textColor}`}>
                    {phase.time}
                  </span>
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col justify-center rounded-2xl bg-white p-5 shadow-sm">
                  <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-[#2D2D2D]">
                    {phase.phase}
                  </h3>
                  <p className="mt-1 text-sm text-[#666] leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schedule ── */}
      <section
        id="schedule"
        className="bg-[#2D2D2D] py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#86A873]">
              Batch Timings
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">
              Class Schedule
            </h2>
          </motion.div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/10 text-white/60 uppercase text-xs tracking-widest">
                  <th className="py-4 px-6 text-left">Session</th>
                  <th className="py-4 px-6 text-left">Time</th>
                  <th className="py-4 px-6 text-left">Days</th>
                  <th className="py-4 px-6 text-left hidden md:table-cell">Action</th>
                </tr>
              </thead>
              <tbody>
                {batches.map((b, i) => (
                  <motion.tr
                    key={b.session}
                    className="border-t border-white/10 text-white transition hover:bg-white/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i}
                  >
                    <td className="py-4 px-6 font-semibold">
                      <span className="mr-2">{b.icon}</span>
                      {b.session}
                    </td>
                    <td className="py-4 px-6 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#86A873]" />
                      {b.time}
                    </td>
                    <td className="py-4 px-6 text-white/70">{b.days}</td>
                    <td className="py-4 px-6 hidden md:table-cell">
                      <Link
                        href={`https://wa.me/919876543210?text=Hi%20Priya!%20I%20want%20to%20join%20the%20${encodeURIComponent(b.session)}%20(${encodeURIComponent(b.time)})%20Beginner%20Yoga%20class.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#86A873] px-4 py-1.5 text-xs font-bold text-white transition hover:bg-[#6B9E5E]"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        Book
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-white/50">
            Online batches also available — message to enquire
          </p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#86A873]">
            Investment
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2D2D2D] md:text-4xl">
            Simple Pricing
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[#666]">
            First class is always free. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 shadow-md ${
                plan.highlight
                  ? "bg-[#86A873] text-white ring-4 ring-[#86A873]/30"
                  : "bg-white text-[#2D2D2D]"
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#6B4F3A] px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </div>
              )}
              <p
                className={`text-sm font-semibold uppercase tracking-widest ${
                  plan.highlight ? "text-white/70" : "text-[#86A873]"
                }`}
              >
                {plan.name}
              </p>
              <div className="mt-3 flex items-end gap-1">
                <IndianRupee
                  className={`mb-2 h-6 w-6 ${
                    plan.highlight ? "text-white/70" : "text-[#86A873]"
                  }`}
                />
                <span className="font-[family-name:var(--font-playfair)] text-4xl font-bold">
                  {plan.price.replace("₹", "")}
                </span>
                <span
                  className={`mb-1 text-sm ${
                    plan.highlight ? "text-white/70" : "text-[#888]"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.highlight ? "text-white/80" : "text-[#86A873]"
                      }`}
                    />
                    <span
                      className={
                        plan.highlight ? "text-white/90" : "text-[#444]"
                      }
                    >
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20want%20to%20enroll%20in%20the%20Beginner%20Yoga%20programme."
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold shadow-sm transition hover:shadow-md ${
                  plan.highlight
                    ? "bg-white text-[#6B9E5E] hover:bg-[#f5f5f5]"
                    : "bg-[#86A873] text-white hover:bg-[#6B9E5E]"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                {plan.highlight ? "Get Started — Best Value" : "Get Started"}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F5EDD6] py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4">
          <motion.div
            className="mb-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#86A873]">
              Common Questions
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2D2D2D] md:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-gradient-to-br from-[#86A873] to-[#6B9E5E] py-16">
        <motion.div
          className="mx-auto max-w-2xl px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white md:text-4xl">
            Your First Class Is on Us
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/85">
            No commitment, no pressure. Come experience Priya's teaching for
            free and see if it's the right fit.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20want%20to%20book%20a%20free%20trial%20for%20your%20Beginner%20Yoga%20class."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-bold text-[#6B9E5E] shadow-lg transition hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Book Free Trial on WhatsApp
            </Link>
            <Link
              href="/programs"
              className="text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white"
            >
              View all programmes →
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
