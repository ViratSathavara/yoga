'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  label: string;
  emoji: string;
  faqs: FAQ[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'general',
    label: 'General',
    emoji: '🌿',
    faqs: [
      {
        question: 'What makes Priya Sharma Yoga different from other studios?',
        answer:
          'Priya brings 12+ years of teaching experience and a deeply personal approach to every class. With small batch sizes (max 8 students), you get individualised attention that large studios simply can\'t offer. Every program is customised to your body type, fitness level, and wellness goals.',
      },
      {
        question: 'Do you offer corporate yoga programs?',
        answer:
          'Absolutely! We run corporate yoga sessions for offices and teams across Ahmedabad. Programs can be conducted at your workplace premises or online via Zoom. Sessions are typically 45–60 minutes and can be scheduled before work hours, during lunch breaks, or after office hours. Contact us for a custom quote.',
      },
      {
        question: 'How do I get started?',
        answer:
          'The easiest way is to book a FREE trial class through our website or WhatsApp us at +91 98765 43210. During the trial, we assess your current fitness level, discuss your goals, and recommend the most suitable program for you — completely free, no strings attached.',
      },
      {
        question: 'What languages are the classes conducted in?',
        answer:
          'Classes are primarily conducted in English, with easy code-switching to Hindi and Gujarati whenever needed. You will always feel comfortable and understood regardless of your language preference.',
      },
    ],
  },
  {
    id: 'beginners',
    label: 'Beginners',
    emoji: '🌱',
    faqs: [
      {
        question: 'Do I need any experience to join?',
        answer:
          'Not at all! Absolute beginners are always welcome. In fact, our most popular Beginner Yoga program is designed specifically for people who have never done yoga before. We start with the very basics — breathing, posture awareness, and simple poses — and gradually build from there at a pace that works for you.',
      },
      {
        question: 'What should I wear to class?',
        answer:
          'Wear comfortable, stretchy clothing that allows free movement — think yoga pants, leggings, or loose track pants paired with a fitted top. Avoid jeans or very loose clothing. You practice barefoot, so no special footwear is needed. Layers are handy for the cooldown/relaxation phase.',
      },
      {
        question: 'What if I can\'t do certain poses?',
        answer:
          'That\'s completely normal and nothing to worry about! Yoga is not about achieving perfect poses — it\'s about what the pose does for you. Priya offers modifications and props (blocks, straps, bolsters) for every pose so that everyone can participate safely and comfortably, regardless of flexibility or fitness level.',
      },
      {
        question: 'How long before I see results?',
        answer:
          'Most students notice improvements in flexibility and sleep quality within 2–3 weeks. Stress reduction and improved posture often kick in within the first month. For weight management goals, a consistent 2–3 months of practice alongside mindful nutrition typically shows visible changes. Every body is different, but consistency is the key.',
      },
    ],
  },
  {
    id: 'online',
    label: 'Online Classes',
    emoji: '💻',
    faqs: [
      {
        question: 'What equipment do I need for online classes?',
        answer:
          'All you need is a stable internet connection, a laptop or smartphone, a yoga mat, and enough space to stretch out fully (roughly 2m × 1m). We recommend using a device with a decent camera so Priya can observe and correct your alignment in real time. Optionally, having a wall nearby can be helpful for some poses.',
      },
      {
        question: 'Are online classes as effective as in-person classes?',
        answer:
          'For most students, absolutely yes. Priya\'s online sessions are live (not pre-recorded), interactive, and limited to small groups so you still receive personal attention. Many students actually prefer online classes for the convenience and privacy they offer.',
      },
      {
        question: 'Can I join online classes from outside Ahmedabad?',
        answer:
          'Yes! We have students joining from across India and even internationally. As long as you have a stable internet connection and the right time zone works for you, you\'re welcome to join any online program.',
      },
      {
        question: 'What platform is used for online classes?',
        answer:
          'We use Zoom for live online sessions. You\'ll receive a unique meeting link before each class. Sessions are NOT recorded by default to protect everyone\'s privacy — but if you miss a class, makeup sessions can usually be arranged.',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing',
    emoji: '💳',
    faqs: [
      {
        question: 'Do you offer a trial class before I commit?',
        answer:
          'Yes — your first class is completely FREE with no obligation to continue. We believe in letting you experience the quality of teaching before making any financial commitment. Book your free trial through the website or WhatsApp us directly.',
      },
      {
        question: 'What are the payment options?',
        answer:
          'We accept UPI, bank transfer, cash, and all major credit/debit cards. Monthly and quarterly packages are available at a discount compared to drop-in rates. Corporate invoicing is also supported for company-sponsored programs.',
      },
      {
        question: 'Is there a refund policy?',
        answer:
          'We offer a pro-rated refund for unused sessions if you need to discontinue, provided you notify us at least 7 days before the next billing cycle. We\'re always flexible and happy to accommodate genuine circumstances — just reach out and we\'ll work something out.',
      },
    ],
  },
  {
    id: 'health',
    label: 'Health & Safety',
    emoji: '🏥',
    faqs: [
      {
        question: 'Is yoga safe during pregnancy?',
        answer:
          'Yoga can be wonderfully beneficial during pregnancy, but it requires a specially adapted practice. We offer Prenatal Yoga sessions designed specifically for expectant mothers, covering safe poses, breathing techniques, and relaxation methods for each trimester. Please consult your gynaecologist before starting, and always inform Priya about your pregnancy stage.',
      },
      {
        question: 'Can yoga help with back pain?',
        answer:
          'Yes, and this is one of the most common reasons people come to us! Therapeutic yoga for back pain focuses on strengthening the core and back muscles, improving posture, and gently releasing tight muscles. Many of our students have significantly reduced or eliminated chronic back pain through consistent practice. Please share your medical history during your trial class so the practice can be personalised.',
      },
      {
        question: 'I have a medical condition. Can I still do yoga?',
        answer:
          'In most cases, yes — but always consult your doctor first and inform Priya before your first class. Common conditions like hypertension, diabetes, thyroid issues, and arthritis can often benefit greatly from adapted yoga. Priya will modify poses and sequences as needed to ensure your safety at all times.',
      },
    ],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function AccordionItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#6B9E5E]/40 shadow-md' : 'border-[#86A873]/20'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left bg-white hover:bg-[#F8F5F0] transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#6B4F3A] text-base leading-snug flex-1">
          {faq.question}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-[#6B9E5E] mt-0.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-5 md:px-6 pb-5 bg-white border-t border-[#86A873]/10">
          <p className="pt-4 text-[#6B4F3A]/75 leading-relaxed text-sm md:text-base">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentCategory = FAQ_CATEGORIES.find((c) => c.id === activeCategory)!;

  function handleCategoryChange(id: string) {
    setActiveCategory(id);
    setOpenIndex(null);
  }

  return (
    <div className="min-h-screen bg-[#f7f5ed] text-[#364132]">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 bg-[#566748] text-center text-[#fbf8ef] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="eyebrow !text-[#e4e8db] mb-2 justify-center">
            A few good questions
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#fbf8ef] leading-tight mb-4"
          >
            Before You Begin
          </h1>
          <p className="text-base md:text-lg text-[#faf8ef]/80 leading-relaxed max-w-xl mx-auto">
            Everything you need to know about joining our classes. Need something specific?{' '}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e4e8db] font-semibold underline underline-offset-2 hover:text-white transition-colors"
            >
              Ask on WhatsApp.
            </a>
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── Category Tabs ── */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#566748] text-white shadow-sm'
                  : 'bg-[#fbfaf5] text-[#55574c] border border-[#dedbd2] hover:border-[#566748]'
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Accordion ── */}
        <div className="space-y-3 mb-20">
          <h2
            className="text-xl font-bold text-[#6B4F3A] mb-6 flex items-center gap-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <span>{currentCategory.emoji}</span>
            {currentCategory.label}
          </h2>

          {currentCategory.faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* ── Still Have Questions CTA ── */}
        <section className="bg-gradient-to-br from-[#6B4F3A] to-[#8c6a52] rounded-3xl p-10 md:p-14 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <span className="text-5xl mb-4 block">💬</span>
            <h2
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Still Have Questions?
            </h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto leading-relaxed">
              Don't let unanswered questions hold you back. Priya personally responds to every message — usually within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20have%20a%20question%20about%20your%20yoga%20classes."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1dbd57] text-white font-semibold transition-all duration-300 shadow-lg"
              >
                <MessageCircle size={18} />
                Ask on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold border border-white/30 transition-all duration-300"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
