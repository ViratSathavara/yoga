"use client";

import { useState } from "react";
import { CheckCircle, Send, ArrowRight, MessageCircle } from "lucide-react";

export default function FreeTrialForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "Beginner Yoga",
    preferredTime: "Morning 6:30 AM – 7:30 AM",
    preferredDay: "Weekday (Mon–Fri)",
    mode: "Offline (Satellite Studio)",
    experience: "Complete Beginner",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save lead to localStorage for Admin Demo
    try {
      const existingLeads = JSON.parse(localStorage.getItem("yoga_leads") || "[]");
      const newLead = {
        id: "LEAD-" + Date.now().toString().slice(-4),
        ...formData,
        date: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        status: "New",
      };
      localStorage.setItem("yoga_leads", JSON.stringify([newLead, ...existingLeads]));
    } catch {
      // LocalStorage fallback
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    const waText = encodeURIComponent(
      `Namaste Priya! I just booked a Free Trial on your website.\nName: ${formData.name}\nPhone: ${formData.phone}\nGoal: ${formData.goal}\nTime: ${formData.preferredTime}\nMode: ${formData.mode}`
    );

    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#6B9E5E]/20 text-center animate-fade-in">
        <div className="w-20 h-20 bg-[#6B9E5E]/15 rounded-full flex items-center justify-center mx-auto mb-6 text-[#6B9E5E]">
          <CheckCircle className="w-12 h-12" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-playfair)] text-[#6B4F3A] mb-3">
          Trial Class Reserved!
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-[#6B4F3A]">{formData.name}</strong>! We have received your booking for{" "}
          <strong className="text-[#6B9E5E]">{formData.goal}</strong> ({formData.preferredTime}).
        </p>

        <div className="bg-[#F8F5F0] rounded-2xl p-5 mb-8 text-left text-sm space-y-2 border border-[#EDE8DF]">
          <p className="text-gray-700">
            <strong>📞 Contact:</strong> {formData.phone}
          </p>
          <p className="text-gray-700">
            <strong>🧘 Session Mode:</strong> {formData.mode}
          </p>
          <p className="text-gray-700">
            <strong>⏰ Selected Slot:</strong> {formData.preferredTime}
          </p>
          <p className="text-xs text-gray-500 pt-2 border-t border-gray-200">
            Priya or our team coordinator will call/WhatsApp you within 2 hours to confirm your spot.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/919876543210?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            Fast-Track on WhatsApp
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                email: "",
                goal: "Beginner Yoga",
                preferredTime: "Morning 6:30 AM – 7:30 AM",
                preferredDay: "Weekday (Mon–Fri)",
                mode: "Offline (Satellite Studio)",
                experience: "Complete Beginner",
                message: "",
              });
            }}
            className="btn-secondary justify-center text-sm"
          >
            Book Another Slot
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#86A873]/20 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">
            Your Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Ananya Patel"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6B9E5E] focus:ring-2 focus:ring-[#6B9E5E]/20 outline-none transition-all text-gray-800 text-sm"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">
            Phone / WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6B9E5E] focus:ring-2 focus:ring-[#6B9E5E]/20 outline-none transition-all text-gray-800 text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">
            Email Address <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            placeholder="ananya@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6B9E5E] focus:ring-2 focus:ring-[#6B9E5E]/20 outline-none transition-all text-gray-800 text-sm"
          />
        </div>

        {/* Primary Goal */}
        <div>
          <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">
            Primary Wellness Goal <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6B9E5E] focus:ring-2 focus:ring-[#6B9E5E]/20 outline-none transition-all text-gray-800 text-sm bg-white"
          >
            <option value="Beginner Yoga">Beginner Yoga (Foundations & Alignment)</option>
            <option value="Weight Management">Weight Management & Active Toning</option>
            <option value="Stress Relief">Stress Relief & Better Sleep</option>
            <option value="Back Pain Relief">Back Pain & Spinal Flexibility</option>
            <option value="Women's Wellness">Women's Yoga & Hormonal Balance</option>
            <option value="Personal Training">1-on-1 Personal Yoga Training</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Preferred Time */}
        <div>
          <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">
            Preferred Time Slot <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.preferredTime}
            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6B9E5E] focus:ring-2 focus:ring-[#6B9E5E]/20 outline-none transition-all text-gray-800 text-sm bg-white"
          >
            <option value="Morning 6:30 AM – 7:30 AM">Morning 6:30 AM – 7:30 AM (In-Studio)</option>
            <option value="Morning 7:30 AM – 8:15 AM">Morning 7:30 AM – 8:15 AM (Online Zoom)</option>
            <option value="Evening 6:00 PM – 7:15 PM">Evening 6:00 PM – 7:15 PM (In-Studio)</option>
            <option value="Evening 7:30 PM – 8:15 PM">Evening 7:30 PM – 8:15 PM (Online Zoom)</option>
            <option value="Weekend 7:00 AM – 8:30 AM">Weekend 7:00 AM – 8:30 AM (Sat/Sun)</option>
          </select>
        </div>

        {/* Experience Level */}
        <div>
          <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">
            Your Yoga Experience Level
          </label>
          <select
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6B9E5E] focus:ring-2 focus:ring-[#6B9E5E]/20 outline-none transition-all text-gray-800 text-sm bg-white"
          >
            <option value="Complete Beginner">Complete Beginner (Never practiced)</option>
            <option value="Practiced Rarely">Practiced occasionally before</option>
            <option value="Intermediate">Intermediate practitioner</option>
            <option value="Returning after gap">Returning to yoga after a long gap</option>
          </select>
        </div>
      </div>

      {/* Mode Selection */}
      <div>
        <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">
          Class Mode <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label
            className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
              formData.mode.includes("Offline")
                ? "border-[#6B9E5E] bg-[#F0F7EC] text-[#3A2E1E] font-medium"
                : "border-gray-200 hover:border-gray-300 text-gray-600"
            }`}
          >
            <input
              type="radio"
              name="mode"
              value="Offline (Satellite Studio)"
              checked={formData.mode.includes("Offline")}
              onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
              className="text-[#6B9E5E] focus:ring-[#6B9E5E]"
            />
            <div>
              <p className="text-sm font-semibold">📍 In-Studio (Satellite, Ahmedabad)</p>
              <p className="text-xs text-gray-500">Mats & props provided at studio</p>
            </div>
          </label>

          <label
            className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
              formData.mode.includes("Online")
                ? "border-[#6B9E5E] bg-[#F0F7EC] text-[#3A2E1E] font-medium"
                : "border-gray-200 hover:border-gray-300 text-gray-600"
            }`}
          >
            <input
              type="radio"
              name="mode"
              value="Online (Live Zoom)"
              checked={formData.mode.includes("Online")}
              onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
              className="text-[#6B9E5E] focus:ring-[#6B9E5E]"
            />
            <div>
              <p className="text-sm font-semibold">💻 Online (Live on Zoom)</p>
              <p className="text-xs text-gray-500">Practice from home with live feedback</p>
            </div>
          </label>
        </div>
      </div>

      {/* Message / Health concerns */}
      <div>
        <label className="block text-sm font-semibold text-[#6B4F3A] mb-2">
          Any health issues, back pain or specific questions? <span className="text-gray-400 font-normal">(Optional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="e.g. I have mild lower back stiffness from sitting long hours at work."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#6B9E5E] focus:ring-2 focus:ring-[#6B9E5E]/20 outline-none transition-all text-gray-800 text-sm"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary justify-center py-4 text-base shadow-lg hover:shadow-xl transition-all"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Reserving Your Trial Slot...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Book My 100% Free Trial Class
            <ArrowRight className="w-5 h-5" />
          </span>
        )}
      </button>

      <div className="flex items-center justify-center gap-6 pt-2 text-xs text-gray-500">
        <span className="flex items-center gap-1">🔒 100% Free & No Spam</span>
        <span className="flex items-center gap-1">⏱️ Quick 2-hour callback</span>
        <span className="flex items-center gap-1">🚫 No credit card required</span>
      </div>
    </form>
  );
}
