"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";

type Category = "All" | "Studio" | "Classes" | "Outdoor" | "Events";

interface GalleryItem {
  id: number;
  category: Category;
  title: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, category: "Studio", title: "Serene Studio Floor", image: "/images/gallery-1.jpg", description: "Our peaceful, natural wood practice studio in Satellite, Ahmedabad" },
  { id: 2, category: "Classes", title: "Morning Beginner Flow", image: "/images/gallery-2.jpg", description: "Gentle alignment and foundation training in progress" },
  { id: 3, category: "Classes", title: "Women's Wellness Circle", image: "/images/gallery-3.jpg", description: "Supportive, small-group women-only yoga batch" },
  { id: 4, category: "Outdoor", title: "Terrace Sunrise Yoga", image: "/images/gallery-4.jpg", description: "Invigorating open-air morning yoga session" },
  { id: 5, category: "Events", title: "International Yoga Day", image: "/images/gallery-5.jpg", description: "Community gathering and collective surya namaskar celebration" },
  { id: 6, category: "Studio", title: "Meditation & Sound Bowls", image: "/images/gallery-6.jpg", description: "Dedicated pranayama and restorative meditation corner" },
  { id: 7, category: "Classes", title: "Evening Stress Relief", image: "/images/gallery-7.jpg", description: "Calming restorative poses to release accumulated workday fatigue" },
  { id: 8, category: "Outdoor", title: "Garden Yoga Retreat", image: "/images/gallery-8.jpg", description: "Weekend nature retreat connecting breath with earth" },
  { id: 9, category: "Events", title: "Spine Alignment Workshop", image: "/images/gallery-9.jpg", description: "Specialized back stiffness and posture correction intensive" },
  { id: 10, category: "Studio", title: "Props & Equipment Corner", image: "/images/gallery-10.jpg", description: "Certified non-toxic mats, wooden blocks, straps & bolsters" },
  { id: 11, category: "Classes", title: "Corporate Wellness at IT Hub", image: "/images/gallery-11.jpg", description: "Office team destress and desk yoga workshop" },
  { id: 12, category: "Events", title: "Student Milestones Ceremony", image: "/images/gallery-12.jpg", description: "Celebrating our students' health and habit transformations" },
];

const categories: Category[] = ["All", "Studio", "Classes", "Outdoor", "Events"];

const categoryColors: Record<string, string> = {
  Studio: "bg-[#C5D9C2] text-[#4A7C59]",
  Classes: "bg-[#F5EDD6] text-[#6B4F3A]",
  Outdoor: "bg-[#D1E8CE] text-[#3D6B45]",
  Events: "bg-[#F0E8D5] text-[#8B6347]",
};

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#566748] pt-32 pb-20 px-6 text-center text-[#fbf8ef]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <p className="eyebrow !text-[#e4e8db] mb-2 justify-center">A slower hour</p>
          <h1 className="text-4xl md:text-5xl font-serif text-[#fbf8ef] mt-2 mb-4">
            Studio &amp; Community Moments
          </h1>
          <p className="text-base md:text-lg text-[#faf8ef]/80 max-w-2xl mx-auto leading-relaxed">
            From peaceful morning studio sessions to mindful retreats — a visual glimpse into our practice in Satellite, Ahmedabad.
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="py-6 px-6 bg-[#fbfaf5] sticky top-[72px] z-20 border-b border-[#dedbd2] shadow-sm">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#566748] text-white shadow-sm"
                  : "bg-[#fbfaf5] text-[#55574c] border border-[#dedbd2] hover:border-[#566748]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 bg-[#F8F5F0]">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 border border-[#EDE8DF]"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left">
                      <span className={`inline-block w-fit text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-2 ${categoryColors[item.category]}`}>
                        {item.category}
                      </span>
                      <p className="text-white font-bold text-base leading-snug">{item.title}</p>
                      <p className="text-[#C5D9C2] text-xs mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Caption Below for Accessibility */}
                  <div className="p-4 bg-white">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-bold text-[#6B4F3A] truncate flex-1">{item.title}</p>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColors[item.category]}`}>
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 truncate mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <span className="text-5xl">📷</span>
              <p className="mt-4 text-lg">No items in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#6B4F3A] text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            Experience Our Studio Atmosphere in Person
          </h2>
          <p className="text-[#C5D9C2] mb-8 max-w-xl mx-auto leading-relaxed">
            Photos only capture a fraction of the peace. Book a complimentary trial class and feel the serene energy of our studio firsthand.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/free-trial" className="btn-primary">
              Book Free Trial Class
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hi%20Priya!%20I%20would%20like%20to%20visit%20the%20studio%20in%20Satellite."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              💬 Schedule a Studio Visit
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
