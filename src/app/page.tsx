'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { YogaHero } from '@/components/hero/YogaHero';
import {
  Flower2,
  Sparkles,
  Heart,
  Wind,
  Leaf,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Play,
  MessageCircle,
} from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   DATA DEFINITIONS MATCHING SATTVA YOGA
───────────────────────────────────────────────────────────── */

const TRUST_POINTS = [
  {
    icon: Sparkles,
    title: 'Expert guidance',
    subtitle: 'Thoughtful, personal support',
  },
  {
    icon: Heart,
    title: 'Made for you',
    subtitle: 'Every body, every beginning',
  },
  {
    icon: Wind,
    title: 'Online & in person',
    subtitle: 'Practice in the way that fits',
  },
  {
    icon: Leaf,
    title: 'Whole-person care',
    subtitle: 'Mind · Body · Lifestyle',
  },
];

const FEATURED_PROGRAMS = [
  {
    slug: 'beginner-yoga',
    title: 'Beginner Yoga',
    level: 'First-timer friendly',
    short: 'A kind, steady start to your practice.',
    image: '/yoga-practice.jpg',
  },
  {
    slug: 'stress-relief',
    title: 'Stress Relief',
    level: 'All levels',
    short: 'Make space to breathe, reset and soften.',
    image: '/yoga-studio.jpg',
  },
  {
    slug: 'weight-management',
    title: 'Weight Management',
    level: 'All levels',
    short: 'Build strength through sustainable movement.',
    image: '/yoga-practice.jpg',
  },
];

const SCHEDULE_CLASSES = [
  {
    day: 'Monday',
    time: '7:00 AM',
    title: 'Beginner Yoga',
    mode: 'Offline',
    slug: 'beginner-yoga',
  },
  {
    day: 'Monday',
    time: '8:30 AM',
    title: 'Stress Relief',
    mode: 'Online',
    slug: 'stress-relief',
  },
  {
    day: 'Tuesday',
    time: '6:30 PM',
    title: "Women's Yoga",
    mode: 'Offline',
    slug: 'womens-yoga',
  },
  {
    day: 'Tuesday',
    time: '7:30 PM',
    title: 'General Yoga',
    mode: 'Online',
    slug: 'beginner-yoga',
  },
  {
    day: 'Wednesday',
    time: '7:00 AM',
    title: 'Beginner Yoga',
    mode: 'Online',
    slug: 'beginner-yoga',
  },
  {
    day: 'Thursday',
    time: '6:30 PM',
    title: 'Strength & Mobility',
    mode: 'Offline',
    slug: 'weight-management',
  },
  {
    day: 'Friday',
    time: '8:00 AM',
    title: 'Stress Relief',
    mode: 'Offline',
    slug: 'stress-relief',
  },
  {
    day: 'Saturday',
    time: '9:00 AM',
    title: "Women's Yoga",
    mode: 'Online',
    slug: 'womens-yoga',
  },
];

const TESTIMONIALS = [
  {
    name: 'Aarohi S.',
    role: 'Product designer',
    quote:
      'The gentle pace made it much easier to show up consistently. I leave feeling clearer and more present for the entire day.',
    tag: 'Beginner Student',
  },
  {
    name: 'Mihir P.',
    role: 'Teacher',
    quote:
      'I appreciate the thoughtful modifications. The practice feels personal, never intimidating or competitive.',
    tag: 'Stress Relief Practitioner',
  },
  {
    name: 'Nisha R.',
    role: 'Architect',
    quote:
      'A lovely pause in my week. The breathing work and back-care sequences have become an essential part of my daily routine.',
    tag: 'Daily Practitioner',
  },
  {
    name: 'Devika M.',
    role: 'Entrepreneur',
    quote:
      'Warm, attentive guidance and a pace that feels genuinely sustainable. I would recommend anyone to start here.',
    tag: 'Online Member',
  },
];

const ARTICLES = [
  {
    slug: 'yoga-for-beginners',
    category: 'Getting started',
    title: 'Is Yoga Good for Beginners?',
    excerpt:
      'A grounded guide to beginning your yoga practice with curiosity, comfort and confidence.',
    image: '/yoga-practice.jpg',
  },
  {
    slug: 'yoga-for-stress-relief',
    category: 'Wellbeing',
    title: 'Yoga for Stress Relief',
    excerpt:
      'Small, practical ways movement and breath can create a little more room in a busy day.',
    image: '/yoga-studio.jpg',
  },
  {
    slug: 'morning-yoga-routine',
    category: 'Daily practice',
    title: 'A Gentle Morning Yoga Routine',
    excerpt:
      'A few unhurried movements to help you meet the day with more ease and grounded energy.',
    image: '/yoga-practice.jpg',
  },
];

const FAQS = [
  {
    question: 'Do I need previous Yoga experience?',
    answer:
      'Not at all. We welcome first-timers and offer clear guidance, individual adjustments, and comfortable options in every single session.',
  },
  {
    question: 'How long is each class?',
    answer:
      'Most classes run for 45 to 60 minutes. Your instructor will suggest the ideal schedule and format for your specific lifestyle and health goals.',
  },
  {
    question: 'Are online classes available?',
    answer:
      'Yes. Live interactive online sessions are held with personal posture observation and audio guidance so you can practice comfortably from home.',
  },
  {
    question: 'Can beginners join any batch?',
    answer:
      'Beginners are welcome in all general batches, but our dedicated Beginner Yoga classes focus particularly on foundations, alignment, and gentle progression.',
  },
  {
    question: 'What should I bring to class?',
    answer:
      'Wear comfortable, breathable clothing and bring a yoga mat and a water bottle. We also provide studio mats and props if needed.',
  },
];

/* ─────────────────────────────────────────────────────────────
   HOMEPAGE COMPONENT
───────────────────────────────────────────────────────────── */

export default function HomePage() {
  const [scheduleFilter, setScheduleFilter] = useState('All');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showStudioNotice, setShowStudioNotice] = useState(false);

  const filterTabs = [
    'All',
    'Beginner',
    "Women's",
    'Online',
    'Offline',
    'Morning',
    'Evening',
  ];

  const filteredSchedule = SCHEDULE_CLASSES.filter((item) => {
    if (scheduleFilter === 'All') return true;
    if (scheduleFilter === 'Beginner') return item.title.includes('Beginner');
    if (scheduleFilter === "Women's") return item.title.includes("Women's");
    if (scheduleFilter === 'Morning') return item.time.includes('AM');
    if (scheduleFilter === 'Evening') return item.time.includes('PM');
    return item.mode === scheduleFilter;
  });

  const currentTestimonial = TESTIMONIALS[activeTestimonial];

  return (
    <div className="overflow-x-clip">
      {/* ── 1. SCROLL HERO SECTION (3D Scrubbed Experience) ── */}
      <YogaHero />

      {/* ── 2. TRUST BAR ── */}
      <section className="trust-bar" id="home-trust">
        <div className="wrap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_POINTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="trust-item">
                  <span className="trust-icon">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <div>
                    <strong className="text-[13px] font-semibold text-[#38382f] block leading-tight">
                      {item.title}
                    </strong>
                    <small className="text-[11px] text-[#77796f] block mt-1">
                      {item.subtitle}
                    </small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. PROGRAMS SECTION ── */}
      <section className="programs-section section-pad bg-[#f7f5ed]">
        <div className="wrap">
          <div className="section-heading-row">
            <div className="section-heading">
              <p className="eyebrow">A practice for your season</p>
              <h2 className="font-serif">Find a way in.</h2>
              <p className="section-intro">
                Choose a class that meets you where you are — and gives you room
                to grow at your own comfortable pace.
              </p>
            </div>
            <Link
              href="/programs"
              className="text-action hidden md:inline-flex"
            >
              <span>See all programs</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_PROGRAMS.map((prog, idx) => (
              <Link
                key={prog.slug}
                href={`/programs/${prog.slug}`}
                className={`program-card ${idx === 1 ? 'md:mt-8' : idx === 2 ? 'md:mt-3' : ''}`}
              >
                <div className="program-image">
                  <Image
                    src={prog.image}
                    alt={`${prog.title} class at SattvaYoga`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="program-index">0{idx + 1}</span>
                  <span className="program-arrow">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="program-copy">
                  <span className="eyebrow !text-[9px] mb-1">{prog.level}</span>
                  <h3 className="font-serif">{prog.title}</h3>
                  <p>{prog.short}</p>
                  <span className="text-action">
                    <span>Explore program</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/programs" className="text-action">
              <span>Explore all programs</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. SATTVA APPROACH ── */}
      <section className="approach-section grid grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[560px]">
          <Image
            src="/yoga-practice.jpg"
            alt="A student stretching peacefully"
            fill
            className="object-cover"
          />
          <span className="absolute bottom-8 left-8 bg-[#f6f4ec]/95 text-[#555a4b] font-serif text-[13.5px] px-5 py-3 shadow-md border border-[#b9bea9]/30">
            Practice without pressure
          </span>
        </div>

        <div className="flex flex-col justify-center px-8 sm:px-16 py-16 lg:py-24 bg-[#e9ece2]">
          <div className="max-w-[440px]">
            <p className="eyebrow">The Sattva approach</p>
            <h2 className="font-serif text-[38px] sm:text-[46px] leading-[1.08] text-[#38382f] my-4">
              A little more
              <br />
              <em>you, every day.</em>
            </h2>
            <p className="text-[#77786e] text-[13.5px] leading-relaxed mb-6">
              Yoga isn&apos;t a shape to achieve. It&apos;s a way to notice what your
              body needs, build trust in your own pace and carry a little more
              ease into the rest of your day.
            </p>

            <ul className="flex flex-col gap-3 mb-8 text-[12.5px] text-[#4a5042]">
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#566748]" />
                <span>Options and modifications, always</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#566748]" />
                <span>Personal guidance without pressure</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check size={16} className="text-[#566748]" />
                <span>Progress that feels like your own</span>
              </li>
            </ul>

            <Link href="/about" className="text-action">
              <span>A little about us</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. NUMBERS BAND ── */}
      <section className="numbers-band py-16">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow !text-[#c8d0bd]">Rooted in thoughtful practice</p>
              <h2 className="font-serif text-[34px] sm:text-[42px] leading-tight text-[#f5f1e5] my-3">
                Gentle consistency.
                <br />
                <em className="text-[#d0d6c3]">Meaningful change.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="border-l border-[#85917c] pl-5">
                <strong className="font-serif text-[36px] text-white block font-normal">
                  500+
                </strong>
                <span className="text-[11px] text-[#d5d8cc] uppercase tracking-wider block mt-1">
                  students guided
                </span>
              </div>
              <div className="border-l border-[#85917c] pl-5">
                <strong className="font-serif text-[36px] text-white block font-normal">
                  8+
                </strong>
                <span className="text-[11px] text-[#d5d8cc] uppercase tracking-wider block mt-1">
                  years practice
                </span>
              </div>
              <div className="border-l border-[#85917c] pl-5">
                <strong className="font-serif text-[36px] text-white block font-normal">
                  50+
                </strong>
                <span className="text-[11px] text-[#d5d8cc] uppercase tracking-wider block mt-1">
                  workshops
                </span>
              </div>
              <div className="border-l border-[#85917c] pl-5">
                <strong className="font-serif text-[36px] text-white block font-normal">
                  All
                </strong>
                <span className="text-[11px] text-[#d5d8cc] uppercase tracking-wider block mt-1">
                  bodies welcome
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. INSTRUCTOR SECTION ── */}
      <section className="instructor-section section-pad bg-[#f7f5ed]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Instructor Photo with Organic Stamp */}
            <div className="lg:col-span-5 relative max-w-sm mx-auto w-full">
              <div className="relative h-[440px] w-full rounded-2xl overflow-hidden shadow-lg border border-[#dedbd2]">
                <Image
                  src="/instructor.jpg"
                  alt="SattvaYoga Instructor"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <span className="absolute bottom-6 -left-4 sm:-left-6 bg-[#56664b] text-[#f5f3eb] font-serif text-[12px] px-4 py-2.5 flex items-center gap-2 shadow-md rounded-sm">
                <Flower2 size={16} strokeWidth={1.5} />
                <span>A guide, not a guru</span>
              </span>
            </div>

            {/* Instructor Copy */}
            <div className="lg:col-span-7">
              <p className="eyebrow">A good practice begins with listening</p>
              <h2 className="font-serif text-[38px] sm:text-[48px] leading-tight text-[#38382f] my-3">
                Meet your
                <br />
                <em>guide.</em>
              </h2>
              <p className="font-serif text-[19px] sm:text-[21px] text-[#64665b] leading-snug my-5 italic">
                &ldquo;I&apos;m here to help you find a practice that feels
                sustainable — with enough structure to support you and enough
                space to make it your own.&rdquo;
              </p>
              <p className="text-[13px] text-[#77796f] leading-relaxed mb-6 max-w-lg">
                Certified with hundreds of hours of hands-on training across
                Hatha, Vinyasa, Pranayama and Restorative modalities. Classes
                are tailored to individual body mechanics rather than rigid
                ideals.
              </p>

              <div className="flex items-center gap-8 py-5 border-y border-[#dedbd2] mb-6">
                <div>
                  <strong className="text-[20px] font-serif text-[#364132] block">
                    8+
                  </strong>
                  <small className="text-[10.5px] uppercase tracking-wider text-[#77796f]">
                    years experience
                  </small>
                </div>
                <div>
                  <strong className="text-[20px] font-serif text-[#364132] block">
                    All
                  </strong>
                  <small className="text-[10.5px] uppercase tracking-wider text-[#77796f]">
                    levels welcome
                  </small>
                </div>
                <div>
                  <strong className="text-[20px] font-serif text-[#364132] block">
                    1:1
                  </strong>
                  <small className="text-[10.5px] uppercase tracking-wider text-[#77796f]">
                    guidance available
                  </small>
                </div>
              </div>

              <Link href="/about" className="text-action">
                <span>Our teaching philosophy</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. STUDIO TOUR SECTION ── */}
      <section className="studio-section bg-[#f1efe7] pt-12 pb-20">
        <div className="wrap">
          {/* Large Studio Frame */}
          <div className="relative h-[340px] sm:h-[480px] w-full rounded-sm overflow-hidden shadow-sm">
            <Image
              src="/yoga-studio.jpg"
              alt="Sunlit SattvaYoga Studio"
              fill
              className="object-cover"
            />
            <button
              onClick={() => setShowStudioNotice(!showStudioNotice)}
              className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/80 hover:bg-white text-[#566748] flex items-center justify-center shadow-lg transition-transform hover:scale-105"
              aria-label="View studio info"
            >
              <Play size={22} fill="currentColor" className="ml-1" />
            </button>
            <span className="absolute bottom-6 left-6 text-white font-serif text-[15px] drop-shadow-md">
              A glimpse into a slower hour
            </span>
          </div>

          {showStudioNotice && (
            <div className="mt-3 bg-[#e4e8db] text-[#364132] text-[12px] p-3 rounded text-center">
              Studio video preview: Visits available during morning & evening class hours at Satellite, Ahmedabad.
            </div>
          )}

          {/* Studio Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 items-end">
            <div className="lg:col-span-6">
              <p className="eyebrow">A session, at your pace</p>
              <h2 className="font-serif text-[36px] sm:text-[44px] leading-tight text-[#38382f] mt-2">
                Room to breathe.
                <br />
                <em>Space to begin.</em>
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-[#77786e] text-[13px] leading-relaxed mb-4">
                Whether you join from home online or in person at our studio,
                expect clear guidance, kind adjustments and a calm, positive
                atmosphere.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-[#555b4b]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#829071] flex-shrink-0" />
                  <span>Beginner-friendly</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#829071] flex-shrink-0" />
                  <span>Personal guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#829071] flex-shrink-0" />
                  <span>Calm environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. BENEFITS SECTION ── */}
      <section className="benefits-section section-pad bg-[#f7f5ed]">
        <div className="wrap">
          <div className="section-heading-row">
            <div className="section-heading">
              <p className="eyebrow">Beyond the mat</p>
              <h2 className="font-serif">More than a class.</h2>
              <p className="section-intro">
                A thoughtful practice can make room for change in everyday ways.
              </p>
            </div>
            <div className="hidden md:block font-serif text-[22px] text-[#38382f] leading-snug text-right">
              Small habits.
              <br />
              <em className="text-[#6d795e]">Steadier days.</em>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#dedbd0]">
            <div className="benefit-card">
              <span className="font-serif text-[#88937a] text-[14px]">01</span>
              <h3 className="font-serif text-[22px] text-[#49483f] my-3">
                Physical ease
              </h3>
              <p className="text-[12px] text-[#838177] leading-relaxed">
                Build mobility, functional strength and a little more confidence
                in how your body moves every day.
              </p>
            </div>
            <div className="benefit-card">
              <span className="font-serif text-[#88937a] text-[14px]">02</span>
              <h3 className="font-serif text-[22px] text-[#49483f] my-3">
                A clearer mind
              </h3>
              <p className="text-[12px] text-[#838177] leading-relaxed">
                Create small, repeatable moments of focus, gentle breathwork and
                calm amidst modern hustle.
              </p>
            </div>
            <div className="benefit-card">
              <span className="font-serif text-[#88937a] text-[14px]">03</span>
              <h3 className="font-serif text-[22px] text-[#49483f] my-3">
                Personal guidance
              </h3>
              <p className="text-[12px] text-[#838177] leading-relaxed">
                Work directly with a teacher who adapts the practice to your
                specific anatomical needs and goals.
              </p>
            </div>
            <div className="benefit-card">
              <span className="font-serif text-[#88937a] text-[14px]">04</span>
              <h3 className="font-serif text-[22px] text-[#49483f] my-3">
                A kinder community
              </h3>
              <p className="text-[12px] text-[#838177] leading-relaxed">
                Be welcomed into a positive, unhurried space where progress is
                strictly personal, never comparative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. MANTRA SECTION ── */}
      <section className="mantra-section py-20 bg-[#ebece3]">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Concentric Circles Art */}
            <div className="flex items-center justify-center">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-[#b9bea9] flex items-center justify-center relative">
                <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full border border-[#8a947f]/60 flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#dfe3d6] flex items-center justify-center shadow-inner">
                    <Flower2 size={44} strokeWidth={1} className="text-[#566748]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mantra Copy */}
            <div>
              <p className="eyebrow">A note to carry with you</p>
              <h2 className="font-serif text-[38px] sm:text-[50px] leading-tight text-[#38382f] my-3">
                Small steps.
                <br />
                <em>Big changes.</em>
              </h2>
              <p className="text-[#797b70] text-[13.5px] leading-relaxed mb-6 max-w-md">
                Consistency matters far more than perfection. Take the next kind
                step onto the mat, then the next. A lighter, healthier life
                unfolds one breath at a time.
              </p>
              <Link href="/free-trial" className="text-action">
                <span>Start with a free trial</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. SCHEDULE SECTION ── */}
      <section className="schedule-section section-pad bg-[#f7f5ed]">
        <div className="wrap">
          <div className="section-heading-row">
            <div className="section-heading">
              <p className="eyebrow">Make a little room</p>
              <h2 className="font-serif">A rhythm that fits.</h2>
              <p className="section-intro">
                Morning starts or evening resets — explore a sample week of
                classes designed for real schedules.
              </p>
            </div>
            <Link
              href="/schedule"
              className="text-action hidden md:inline-flex"
            >
              <span>Full schedule</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setScheduleFilter(tab)}
                className={`px-4 py-2 rounded-full text-[11px] font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  scheduleFilter === tab
                    ? 'bg-[#566748] text-white'
                    : 'bg-transparent border border-[#dedbd0] text-[#73746a] hover:border-[#566748]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Schedule Timetable List */}
          <div className="border-t border-[#dedbd2]">
            {filteredSchedule.map((item, idx) => (
              <div
                key={idx}
                className="py-4 border-b border-[#dedbd2] grid grid-cols-2 sm:grid-cols-4 items-center gap-4 text-[13px]"
              >
                <span className="font-serif text-[#38382f] font-medium">
                  {item.day}
                </span>
                <span className="text-[#77796f] text-[12px]">{item.time}</span>
                <span className="font-medium text-[#49483f]">
                  {item.title}{' '}
                  <span className="text-[10px] text-[#566748] bg-[#e4e8db] px-2 py-0.5 rounded-full ml-1 font-normal">
                    {item.mode}
                  </span>
                </span>
                <div className="text-right">
                  <Link
                    href={`/free-trial?program=${item.slug}`}
                    className="text-action !text-[11.5px]"
                  >
                    <span>Request trial</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. TESTIMONIALS SECTION ── */}
      <section className="testimonials-section py-20 bg-[#eeeee6]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow">What students say</p>
              <h2 className="font-serif text-[36px] sm:text-[46px] leading-tight text-[#38382f] my-3">
                Practice is
                <br />
                <em>personal.</em>
              </h2>
              <p className="text-[#77796f] text-[13px] leading-relaxed max-w-sm mb-6">
                Hear how thoughtful guidance, steady breathing and kind
                instruction helped our students establish a routine they love.
              </p>
              <div className="flex items-center gap-4 text-[12px]">
                <span className="font-serif text-[#364132] font-semibold">
                  0{activeTestimonial + 1}{' '}
                  <i className="text-[#77796f] font-normal">
                    / 0{TESTIMONIALS.length}
                  </i>
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setActiveTestimonial(
                        (activeTestimonial - 1 + TESTIMONIALS.length) %
                          TESTIMONIALS.length
                      )
                    }
                    className="w-8 h-8 rounded-full border border-[#dedbd2] bg-white flex items-center justify-center hover:bg-[#566748] hover:text-white transition-colors"
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button
                    onClick={() =>
                      setActiveTestimonial(
                        (activeTestimonial + 1) % TESTIMONIALS.length
                      )
                    }
                    className="w-8 h-8 rounded-full border border-[#dedbd2] bg-white flex items-center justify-center hover:bg-[#566748] hover:text-white transition-colors"
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Testimonial Quote Card */}
            <div className="lg:col-span-7 bg-[#f7f5ed] p-8 sm:p-12 border border-[#dedbd2] rounded-sm relative shadow-sm">
              <span className="font-serif text-[60px] leading-none text-[#566748]/30 absolute top-4 left-6">
                “
              </span>
              <blockquote className="font-serif text-[20px] sm:text-[25px] text-[#57584e] leading-snug my-6 relative z-10">
                {currentTestimonial.quote}
              </blockquote>
              <div className="flex items-center justify-between pt-6 border-t border-[#dedbd2]/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#566748] text-[#f7f5ed] flex items-center justify-center font-serif text-[16px]">
                    {currentTestimonial.name[0]}
                  </div>
                  <div>
                    <strong className="text-[13px] text-[#38382f] block">
                      {currentTestimonial.name}
                    </strong>
                    <small className="text-[11px] text-[#77796f] block">
                      {currentTestimonial.role}
                    </small>
                  </div>
                </div>
                <span className="text-[10px] text-[#6d795e] uppercase tracking-wider font-semibold bg-[#e4e8db] px-2.5 py-1 rounded">
                  {currentTestimonial.tag}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12. JOURNAL / ARTICLES PREVIEW ── */}
      <section className="journal-section section-pad bg-[#f7f5ed]">
        <div className="wrap">
          <div className="section-heading-row">
            <div className="section-heading">
              <p className="eyebrow">Notes for your practice</p>
              <h2 className="font-serif">A little inspiration.</h2>
              <p className="section-intro">
                Thoughtful reads for wherever you are on your wellness journey.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-action hidden md:inline-flex"
            >
              <span>Visit the journal</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((article, idx) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className={`program-card ${idx === 1 ? 'md:mt-6' : ''}`}
              >
                <div className="program-image !h-[240px]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <span className="program-index !bg-[#566748]/80">
                    {article.category}
                  </span>
                </div>
                <div className="program-copy">
                  <span className="eyebrow !text-[8.5px] mb-1">
                    4 min read · Practice guide
                  </span>
                  <h3 className="font-serif text-[21px]">{article.title}</h3>
                  <p className="text-[12px]">{article.excerpt}</p>
                  <span className="text-action">
                    <span>Read article</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. FAQ SECTION ── */}
      <section className="faq-section py-20 bg-[#eeeee6]">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="eyebrow">A few good questions</p>
              <h2 className="font-serif text-[36px] sm:text-[46px] leading-tight text-[#38382f] my-3">
                Before you begin.
              </h2>
              <p className="text-[#7b7b71] text-[13px] leading-relaxed mb-6 max-w-sm">
                New practice, new questions. Here is a comfortable place to
                start understanding how classes work.
              </p>
              <Link href="/faq" className="text-action">
                <span>View all questions</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="lg:col-span-7 border-t border-[#d7d7cb]">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border-b border-[#d7d7cb]">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full py-5 flex items-center justify-between text-left text-[14px] font-medium text-[#49483f] hover:text-[#566748] transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={17}
                        className={`text-[#77856a] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-5 text-[12.5px] text-[#77796f] leading-relaxed animate-in fade-in duration-200">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. TRIAL BANNER ── */}
      <section className="trial-banner grid grid-cols-1 md:grid-cols-2 items-center bg-[#dfe5d8]">
        <div className="relative min-h-[300px] md:min-h-[440px] h-full">
          <Image
            src="/yoga-practice.jpg"
            alt="A peaceful moment in yoga practice"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 sm:p-14 lg:p-16">
          <p className="eyebrow">Your first step can be simple</p>
          <h2 className="font-serif text-[38px] sm:text-[48px] leading-tight text-[#3d4137] my-3">
            Come as you are.
            <br />
            <em>Leave a little lighter.</em>
          </h2>
          <p className="text-[#73786d] text-[13.5px] leading-relaxed mb-8 max-w-md">
            Tell us what you&apos;re looking for. We&apos;ll help you find a comfortable
            place to start with a complimentary trial class.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/free-trial" className="btn-primary">
              <span>Book your free trial</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20SattvaYoga!%20I'd%20like%20to%20claim%20my%20free%20trial%20class."
              target="_blank"
              rel="noopener noreferrer"
              className="wa-text-button !text-[#55634b]"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
