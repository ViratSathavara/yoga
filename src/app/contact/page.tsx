'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from 'lucide-react';

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function YoutubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
    </svg>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  phone: string;
  email: string;
  program: string;
  message: string;
}

const PROGRAMS = [
  'Beginner Yoga',
  'Weight Management Yoga',
  'Stress Relief Yoga',
  'Online Yoga',
  "Women's Yoga",
  'Corporate Yoga',
  'Prenatal Yoga',
  'Other / Not Sure Yet',
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function ContactDetail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="w-11 h-11 rounded-xl bg-[#86A873]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#86A873]/25 transition-colors duration-200">
        <Icon size={20} className="text-[#6B9E5E]" />
      </div>
      <div>
        <p className="text-xs text-[#6B4F3A]/50 font-medium uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-[#6B4F3A] font-medium leading-relaxed">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    program: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  const inputClass =
    'w-full px-4 py-3 rounded-md border border-[#dedbd2] bg-white text-[#364132] placeholder-[#77796f]/60 focus:outline-none focus:ring-2 focus:ring-[#566748]/30 focus:border-[#566748] transition-all duration-200 text-sm';

  return (
    <div className="min-h-screen bg-[#f7f5ed] text-[#364132]">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 bg-[#566748] text-center text-[#fbf8ef] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="eyebrow !text-[#e4e8db] mb-2 justify-center">
            Say hello
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#fbf8ef] leading-tight mb-4"
          >
            Get In Touch
          </h1>
          <p className="text-base md:text-lg text-[#faf8ef]/80 leading-relaxed max-w-xl mx-auto">
            Have a question or ready to begin your practice? Reach out — our instructor personally responds to inquiries.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">

          {/* ── Left: Form ── */}
          <div className="lg:col-span-3 bg-[#fbfaf5] rounded-xl shadow-sm border border-[#dedbd2] p-8 md:p-10">
            <h2
              className="text-2xl font-serif text-[#364132] mb-2"
            >
              Send a Message
            </h2>
            <p className="text-[#77796f] text-sm mb-8">
              Fill in your details below and we&apos;ll get back to you shortly.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 rounded-full bg-[#86A873]/15 flex items-center justify-center mb-5">
                  <CheckCircle size={38} className="text-[#6B9E5E]" />
                </div>
                <h3
                  className="text-xl font-bold text-[#6B4F3A] mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Message Sent! 🙏
                </h3>
                <p className="text-[#6B4F3A]/65 leading-relaxed max-w-sm">
                  Thank you for reaching out. Priya will personally reply within a few hours. Can't wait? WhatsApp is even faster!
                </p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1dbd57] transition-colors"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#6B4F3A] mb-2 uppercase tracking-wide">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Priya Patel"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#6B4F3A] mb-2 uppercase tracking-wide">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6B4F3A] mb-2 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6B4F3A] mb-2 uppercase tracking-wide">
                    Program Interested In
                  </label>
                  <select name="program" value={form.program} onChange={handleChange} className={inputClass}>
                    <option value="">Select a program…</option>
                    {PROGRAMS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6B4F3A] mb-2 uppercase tracking-wide">
                    Your Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals, questions, or anything else you'd like us to know…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#6B9E5E] hover:bg-[#86A873] text-white font-semibold transition-all duration-300 shadow-md shadow-[#6B9E5E]/30 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── Right: Contact Details ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Contact Info Card */}
            <div className="bg-white rounded-3xl border border-[#86A873]/15 shadow-sm p-7 space-y-6">
              <h3
                className="text-xl font-bold text-[#6B4F3A]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Contact Details
              </h3>

              <ContactDetail
                icon={MapPin}
                label="Studio Address"
                value="Near Satellite Road, Ahmedabad, Gujarat 380015"
              />
              <ContactDetail
                icon={Phone}
                label="Phone / WhatsApp"
                value="+91 98765 43210"
                href="tel:+919876543210"
              />
              <ContactDetail
                icon={Mail}
                label="Email"
                value="priya@priyasharmayoga.com"
                href="mailto:priya@priyasharmayoga.com"
              />
              <ContactDetail
                icon={Clock}
                label="Studio Hours"
                value={`Mon – Sat: 6:00 am – 8:00 pm\nSun: 7:00 am – 12:00 pm`}
              />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi%20Priya!%20I'd%20like%20to%20know%20more%20about%20your%20yoga%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1dbd57] text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-[#25D366]/30 hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp — Quick Replies!
            </a>

            {/* Social Links */}
            <div className="bg-white rounded-3xl border border-[#86A873]/15 shadow-sm p-7">
              <h3
                className="text-base font-bold text-[#6B4F3A] mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Follow on Social Media
              </h3>
              <div className="flex gap-3">
                {[
                  {
                    icon: InstagramIcon,
                    label: 'Instagram',
                    href: 'https://instagram.com',
                    color: 'hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200',
                  },
                  {
                    icon: FacebookIcon,
                    label: 'Facebook',
                    href: 'https://facebook.com',
                    color: 'hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200',
                  },
                  {
                    icon: YoutubeIcon,
                    label: 'YouTube',
                    href: 'https://youtube.com',
                    color: 'hover:bg-red-50 hover:text-red-600 hover:border-red-200',
                  },
                ].map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex-1 flex flex-col items-center gap-2 py-3 rounded-xl border border-[#86A873]/20 text-[#6B4F3A]/60 transition-all duration-200 ${color}`}
                  >
                    <Icon size={20} />
                    <span className="text-xs font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Studio Map / Location Card ── */}
        <div className="rounded-3xl overflow-hidden border border-[#86A873]/20 shadow-md h-72 md:h-96 relative group bg-[#EDE8DF]">
          <Image
            src="/images/studio-interior.jpg"
            alt="Priya Sharma Yoga Studio Location in Satellite Ahmedabad"
            fill
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover object-center brightness-75 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />

          {/* Pin */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-[#6B9E5E] flex items-center justify-center shadow-xl shadow-[#6B9E5E]/40 animate-bounce">
              <MapPin size={26} className="text-white" />
            </div>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl px-6 py-3.5 text-center shadow-2xl border border-white max-w-md">
              <p className="font-bold text-[#3a2e24] text-base" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Studio Location — Satellite, Ahmedabad
              </p>
              <p className="text-[#6e5c4e] text-xs mt-1">204, Shivalik High Street, Near ISKCON Cross Roads, Satellite Road, Ahmedabad, Gujarat 380015</p>
            </div>
            <a
              href="https://maps.google.com/?q=Satellite+Ahmedabad+Gujarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-[#4A7C59] text-xs font-bold shadow-lg hover:bg-[#F5EDD6] transition"
            >
              <MapPin size={14} /> Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
