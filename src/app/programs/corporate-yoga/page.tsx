"use client";

import { useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import {
  Building2,
  Users,
  Briefcase,
  CheckCircle,
  TrendingUp,
  Brain,
  Smile,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function CorporateYogaPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    teamSize: "10–25 employees",
    format: "On-site at our Ahmedabad office",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#F8F5F0] via-[#EDE8DF] to-[#C5D9C2] pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel icon={<Building2 className="w-4 h-4" />}>Workplace Wellness Programs</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] text-[#6B4F3A] mt-4 mb-6 leading-tight">
            Boost Productivity, Reduce Team Burnout
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Customised corporate yoga, desk ergonomics, and guided mindfulness workshops for corporate teams in Ahmedabad and virtual teams worldwide.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#inquiry-form" className="btn-primary">
              Request Corporate Wellness Proposal
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919876543210?text=Hello%20Priya!%20Our%20company%20is%20interested%20in%20a%20Corporate%20Yoga%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Featured Visual ── */}
      <section className="max-w-5xl mx-auto px-6 -mt-10 sm:-mt-14 relative z-10 mb-8">
        <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#F5EDD6]">
          <Image
            src="/images/program-corporate.jpg"
            alt="Corporate Yoga and Workplace Wellness Sessions in Ahmedabad"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-2 text-white">
            <span className="text-xs sm:text-sm font-medium bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full">
              🏢 On-site at Ahmedabad Tech Parks &amp; Corporate Offices
            </span>
            <span className="text-xs font-semibold bg-[#6B4F3A] px-3 py-1 rounded-full shadow">
              Customised for All Team Sizes
            </span>
          </div>
        </div>
      </section>

      {/* ROI / Benefits */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>The Business Case</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#6B4F3A] mt-2">
              Why Forward-Thinking Companies Invest in Yoga
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">
              Desk-bound employees sit 8+ hours a day. Workplace yoga delivers measurable improvements in team energy, posture, and mental focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8F5F0] border border-[#EDE8DF]">
              <TrendingUp className="w-10 h-10 text-[#6B9E5E] mb-4" />
              <h3 className="text-xl font-bold text-[#6B4F3A] mb-3">Reduced Sick Days & Fatigue</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Relieves cervical neck strain, carpel tunnel symptoms, and lower spine stiffness that cause employee absenteeism and low energy.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8F5F0] border border-[#EDE8DF]">
              <Brain className="w-10 h-10 text-[#6B9E5E] mb-4" />
              <h3 className="text-xl font-bold text-[#6B4F3A] mb-3">Sharper Focus & Clarity</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pranayama breathing increases oxygenation to the brain, cutting through mid-afternoon slumps and enhancing creative problem-solving.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8F5F0] border border-[#EDE8DF]">
              <Smile className="w-10 h-10 text-[#6B9E5E] mb-4" />
              <h3 className="text-xl font-bold text-[#6B4F3A] mb-3">Team Morale & Connection</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Shared wellness sessions foster team bonding outside of high-pressure deadlines, building an empathetic, supportive workplace culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Formats */}
      <section className="py-20 px-6 bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Flexible Formats</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#6B4F3A] mt-2">
              Corporate Program Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#86A873]/20 space-y-4">
              <span className="text-xs uppercase font-bold text-[#6B9E5E] tracking-wider">Format A</span>
              <h3 className="text-2xl font-bold text-[#6B4F3A]">Weekly On-Site Classes</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Priya visits your office premises in Ahmedabad 2 to 3 times a week for a 45–60 minute session before office hours or during early evening.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#6B9E5E]" /> Mats & props advice included</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#6B9E5E]" /> Tailored to team fitness level</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#6B9E5E]" /> Monthly attendance reports</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-md border border-[#86A873]/20 space-y-4">
              <span className="text-xs uppercase font-bold text-[#6B9E5E] tracking-wider">Format B</span>
              <h3 className="text-2xl font-bold text-[#6B4F3A]">Virtual & Hybrid Sessions</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Live interactive Zoom sessions for remote teams across India or hybrid offices. Includes desk-yoga micro-stretches and guided stress reduction.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#6B9E5E]" /> Accessible on laptops & mobiles</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#6B9E5E]" /> Multi-city team participation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#6B9E5E]" /> 30, 45, or 60 minute formats</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 px-6 bg-white" id="inquiry-form">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[#6B4F3A] mt-2">
              Request a Custom Corporate Proposal
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              We customize sessions according to your team size, work schedule, and wellness objectives.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#F0F7EC] border border-[#C5D9C2] rounded-3xl p-10 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-[#6B9E5E] mx-auto" />
              <h3 className="text-2xl font-bold text-[#6B4F3A]">Proposal Request Received!</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you for your interest. Priya will review your team requirements and share a custom corporate proposal within 24 hours.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20just%20submitted%20a%20Corporate%20Yoga%20inquiry%20from%20our%20company."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex"
              >
                💬 Fast-Track on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#F8F5F0] p-8 md:p-10 rounded-3xl border border-[#EDE8DF] space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">Company / Organization Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Tech Solutions"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6B9E5E] outline-none text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">Contact Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Manish Parekh (HR Lead)"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6B9E5E] outline-none text-sm bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">Official Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="hr@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6B9E5E] outline-none text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6B9E5E] outline-none text-sm bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">Team Size</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6B9E5E] outline-none text-sm bg-white"
                  >
                    <option value="Under 10 employees">Under 10 employees</option>
                    <option value="10–25 employees">10–25 employees</option>
                    <option value="25–50 employees">25–50 employees</option>
                    <option value="50–100+ employees">50–100+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">Preferred Format</label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6B9E5E] outline-none text-sm bg-white"
                  >
                    <option value="On-site at our Ahmedabad office">On-site at our Ahmedabad office</option>
                    <option value="Virtual via Zoom">Virtual via Zoom</option>
                    <option value="One-time Workshop / Wellness Day">One-time Workshop / Wellness Day</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">Special Requirements / Notes</label>
                <textarea
                  rows={3}
                  placeholder="Share details about your preferred timing, focus areas (e.g. stress relief, neck/back pain), etc."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6B9E5E] outline-none text-sm bg-white"
                />
              </div>

              <button type="submit" className="w-full btn-primary justify-center py-4 text-base shadow-lg">
                Submit Corporate Wellness Inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
