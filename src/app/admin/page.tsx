"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import {
  Users,
  Phone,
  MessageCircle,
  Clock,
  Search,
  CheckCircle,
  Filter,
  Plus,
  TrendingUp,
  Award,
  ArrowUpRight,
} from "lucide-react";

type LeadStatus =
  | "New"
  | "Contacted"
  | "Trial Booked"
  | "Trial Completed"
  | "Converted"
  | "Not Interested";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  goal: string;
  preferredTime: string;
  mode: string;
  date: string;
  status: LeadStatus;
  notes?: string;
}

const INITIAL_DEMO_LEADS: Lead[] = [
  {
    id: "LEAD-9821",
    name: "Roshni Shah",
    phone: "98250 12345",
    email: "roshni.shah@gmail.com",
    goal: "Weight Management",
    preferredTime: "Morning 6:30 AM – 7:30 AM",
    mode: "Offline (Satellite Studio)",
    date: "4 Oct 2026",
    status: "New",
    notes: "Wants to lose 6 kg, mild knee sensitivity.",
  },
  {
    id: "LEAD-9820",
    name: "Dr. Kunal Parikh",
    phone: "98980 54321",
    email: "dr.kunal@hospital.org",
    goal: "Back Pain Relief",
    preferredTime: "Evening 7:30 PM – 8:15 PM",
    mode: "Online (Live Zoom)",
    date: "4 Oct 2026",
    status: "Contacted",
    notes: "Spoke on phone, scheduled trial for Tuesday Zoom.",
  },
  {
    id: "LEAD-9819",
    name: "Meera Trivedi",
    phone: "94260 77889",
    email: "meera.trivedi@outlook.com",
    goal: "Stress Relief",
    preferredTime: "Morning 7:30 AM – 8:15 AM",
    mode: "Online (Live Zoom)",
    date: "3 Oct 2026",
    status: "Trial Booked",
    notes: "Trial booked for tomorrow morning 7:30 AM.",
  },
  {
    id: "LEAD-9818",
    name: "Pooja Patel",
    phone: "97129 33445",
    email: "pooja.p@yahoo.com",
    goal: "Women's Wellness",
    preferredTime: "Evening 6:30 PM – 7:30 PM",
    mode: "Offline (Satellite Studio)",
    date: "2 Oct 2026",
    status: "Trial Completed",
    notes: "Attended trial Thursday, loved the women batch atmosphere.",
  },
  {
    id: "LEAD-9817",
    name: "Sanjay Varma",
    phone: "98240 66778",
    email: "sanjay.varma@itcorp.com",
    goal: "Beginner Yoga",
    preferredTime: "Morning 6:30 AM – 7:30 AM",
    mode: "Offline (Satellite Studio)",
    date: "1 Oct 2026",
    status: "Converted",
    notes: "Paid 3-month quarterly subscription ₹7,999.",
  },
  {
    id: "LEAD-9816",
    name: "Hardik Joshi",
    phone: "99090 11223",
    goal: "Personal Training",
    preferredTime: "Weekend 7:00 AM – 8:30 AM",
    mode: "Offline (Satellite Studio)",
    date: "30 Sep 2026",
    status: "Not Interested",
    notes: "Timing did not match their office shift.",
  },
];

const STATUS_COLORS: Record<LeadStatus, { bg: string; text: string; border: string }> = {
  New: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  Contacted: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  "Trial Booked": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  "Trial Completed": { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
  Converted: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "Not Interested": { bg: "bg-gray-100", text: "text-gray-600", border: "border-gray-200" },
};

export default function AdminLeadPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [activeStatus, setActiveStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const stored = localStorage.getItem("yoga_leads");
      if (stored) {
        setLeads(JSON.parse(stored));
      } else {
        localStorage.setItem("yoga_leads", JSON.stringify(INITIAL_DEMO_LEADS));
        setLeads(INITIAL_DEMO_LEADS);
      }
    } catch {
      setLeads(INITIAL_DEMO_LEADS);
    }
  }, []);

  const updateLeadStatus = (leadId: string, newStatus: LeadStatus) => {
    const updated = leads.map((lead) =>
      lead.id === leadId ? { ...lead, status: newStatus } : lead
    );
    setLeads(updated);
    try {
      localStorage.setItem("yoga_leads", JSON.stringify(updated));
    } catch {
      // fallback
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = activeStatus === "All" || lead.status === activeStatus;
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) ||
      lead.goal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const counts = {
    All: leads.length,
    New: leads.filter((l) => l.status === "New").length,
    Contacted: leads.filter((l) => l.status === "Contacted").length,
    "Trial Booked": leads.filter((l) => l.status === "Trial Booked").length,
    "Trial Completed": leads.filter((l) => l.status === "Trial Completed").length,
    Converted: leads.filter((l) => l.status === "Converted").length,
    "Not Interested": leads.filter((l) => l.status === "Not Interested").length,
  };

  const conversionRate =
    leads.length > 0 ? Math.round((counts.Converted / leads.length) * 100) : 0;

  if (!isClient) {
    return (
      <div className="pt-32 pb-20 text-center text-gray-500">
        Loading Lead Management Dashboard...
      </div>
    );
  }

  return (
    <>
      {/* Top Banner */}
      <section className="bg-[#414c39] text-white pt-32 pb-14 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#566748] px-3 py-1 rounded-full text-xs font-medium text-[#e4e8db] uppercase tracking-wider mb-2">
              SattvaYoga Leads Pipeline
            </div>
            <h1 className="text-3xl md:text-4xl font-serif text-[#f2f1e7]">
              Lead Management CRM &amp; Admin Panel
            </h1>
            <p className="text-sm text-[#d1d1c4] mt-1">
              Real-time pipeline tracking: Website visitors → Free Trial → WhatsApp Contact → Converted Students
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/free-trial"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all border border-white/20"
            >
              <span>Test Free Trial Form</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => {
                localStorage.setItem("yoga_leads", JSON.stringify(INITIAL_DEMO_LEADS));
                setLeads(INITIAL_DEMO_LEADS);
              }}
              className="px-4 py-2.5 rounded-full bg-[#566748] hover:bg-[#435439] text-white text-xs font-medium transition-all shadow-sm cursor-pointer"
            >
              Reset Demo Leads
            </button>
          </div>
        </div>
      </section>

      {/* KPI Stats Cards */}
      <section className="py-8 px-6 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-[#EDE8DF] shadow-sm">
            <p className="text-xs text-gray-500 font-medium">Total Inquiries</p>
            <p className="text-2xl font-bold text-[#6B4F3A] mt-1">{counts.All}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-blue-100 shadow-sm">
            <p className="text-xs text-blue-600 font-semibold">New Leads</p>
            <p className="text-2xl font-bold text-blue-700 mt-1">{counts.New}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-amber-100 shadow-sm">
            <p className="text-xs text-amber-600 font-semibold">Trials Booked</p>
            <p className="text-2xl font-bold text-amber-700 mt-1">{counts["Trial Booked"]}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-indigo-100 shadow-sm">
            <p className="text-xs text-indigo-600 font-semibold">Trials Done</p>
            <p className="text-2xl font-bold text-indigo-700 mt-1">{counts["Trial Completed"]}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm">
            <p className="text-xs text-emerald-600 font-semibold">Converted</p>
            <p className="text-2xl font-bold text-emerald-700 mt-1">{counts.Converted}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-[#86A873]/20 shadow-sm">
            <p className="text-xs text-gray-500 font-medium">Conversion Rate</p>
            <p className="text-2xl font-bold text-[#6B9E5E] mt-1">{conversionRate}%</p>
          </div>
        </div>
      </section>

      {/* Main Filter & Table */}
      <section className="py-6 pb-24 px-6 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Controls Bar */}
          <div className="bg-white p-4 md:p-6 rounded-3xl border border-[#EDE8DF] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Status Tabs */}
            <div className="flex flex-wrap gap-1.5 w-full lg:w-auto">
              {[
                "All",
                "New",
                "Contacted",
                "Trial Booked",
                "Trial Completed",
                "Converted",
                "Not Interested",
              ].map((status) => (
                <button
                  key={status}
                  onClick={() => setActiveStatus(status)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeStatus === status
                      ? "bg-[#6B4F3A] text-white shadow-sm"
                      : "bg-[#F8F5F0] text-gray-600 hover:bg-[#EDE8DF]"
                  }`}
                >
                  {status} ({status === "All" ? counts.All : (counts as any)[status]})
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search name, phone, goal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 text-xs text-gray-700 focus:outline-none focus:border-[#6B9E5E]"
              />
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-white rounded-3xl shadow-lg border border-[#EDE8DF] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-[#F8F5F0] text-gray-600 border-b border-[#EDE8DF] uppercase tracking-wider text-[11px] font-bold">
                    <th className="py-4 px-6">Lead ID & Date</th>
                    <th className="py-4 px-6">Student Details</th>
                    <th className="py-4 px-6">Goal & Batch</th>
                    <th className="py-4 px-6">Mode</th>
                    <th className="py-4 px-6">Pipeline Status</th>
                    <th className="py-4 px-6 text-right">Quick Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredLeads.map((lead) => {
                    const statusStyle = STATUS_COLORS[lead.status] || STATUS_COLORS.New;
                    const waText = encodeURIComponent(
                      `Namaste ${lead.name}! This is Priya Sharma Yoga. We received your booking for ${lead.goal} (${lead.preferredTime}). Would you like to confirm your free trial class?`
                    );

                    return (
                      <tr key={lead.id} className="hover:bg-[#F8F5F0]/60 transition-colors">
                        <td className="py-4 px-6 whitespace-nowrap">
                          <span className="font-mono font-semibold text-[#6B4F3A]">{lead.id}</span>
                          <span className="block text-[11px] text-gray-400 mt-0.5">{lead.date}</span>
                        </td>
                        <td className="py-4 px-6">
                          <p className="font-bold text-gray-800 text-sm">{lead.name}</p>
                          <p className="text-gray-500 font-mono text-xs mt-0.5">{lead.phone}</p>
                          {lead.email && <p className="text-gray-400 text-[11px] truncate max-w-[180px]">{lead.email}</p>}
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-semibold text-[#4A7C59] block">{lead.goal}</span>
                          <span className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3 text-gray-400" />
                            {lead.preferredTime}
                          </span>
                          {lead.notes && (
                            <p className="text-[11px] text-gray-400 italic mt-1 max-w-[200px] truncate">
                              Note: {lead.notes}
                            </p>
                          )}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <span className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full font-medium">
                            {lead.mode.includes("Online") ? "💻 Online Zoom" : "📍 Satellite Studio"}
                          </span>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          {/* Live Status Dropdown */}
                          <select
                            value={lead.status}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value as LeadStatus)}
                            className={`text-xs font-semibold px-3 py-1.5 rounded-full border cursor-pointer outline-none transition-all ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Trial Booked">Trial Booked</option>
                            <option value="Trial Completed">Trial Completed</option>
                            <option value="Converted">Converted</option>
                            <option value="Not Interested">Not Interested</option>
                          </select>
                        </td>
                        <td className="py-4 px-6 text-right whitespace-nowrap">
                          <a
                            href={`https://wa.me/91${lead.phone.replace(/[^0-9]/g, "")}?text=${waText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#1dbd57] text-white font-semibold text-xs transition-all shadow-sm"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            WhatsApp
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredLeads.length === 0 && (
                <div className="py-16 text-center text-gray-400">
                  <p className="text-3xl mb-2">📋</p>
                  <p className="text-base font-semibold">No leads match this filter.</p>
                  <p className="text-xs text-gray-400 mt-1">Try switching to &quot;All&quot; status or clearing your search query.</p>
                </div>
              )}
            </div>
          </div>

          {/* Pitch Note for Client */}
          <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed space-y-2">
            <p className="font-bold text-sm text-amber-950 flex items-center gap-1.5">
              💡 Why this Lead Management System is a Game Changer for the Yoga Teacher:
            </p>
            <p>
              Ordinary web developers deliver a simple static site where customer inquiries get lost in email spam. This system provides a <strong>dedicated Lead Management Dashboard</strong> where every single trial booking from the website immediately surfaces with student goals, preferred batch timings, and a 1-click WhatsApp follow-up button. The teacher can update statuses from &quot;New&quot; to &quot;Trial Booked&quot; to &quot;Converted Student&quot;, turning this website into a complete customer acquisition machine.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
