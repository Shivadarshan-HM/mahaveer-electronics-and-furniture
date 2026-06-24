"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────
   SECTION 4 — Curated Collection (Tabbed Gallery)
   Spec: tabs Sofas | Beds | Dining | Wardrobes | Office
   Large product image left, details right
   Tab click crossfades (0.4s), active tab has gold underline
   ───────────────────────────────────────────────────────── */

const collections = [
  {
    id: "sofas",
    tab: "Sofas",
    headline: "Sofas & Lounges",
    desc: "Modular sectionals and statement pieces crafted to anchor your living space with enduring presence and unmatched luxury.",
    highlights: ["Premium Fabric Upholstery", "Modular Configurations", "Hardwood Frame Construction", "10-Year Warranty"],
    image: "/images/furniture/sofas.jpg",
  },
  {
    id: "beds",
    tab: "Beds",
    headline: "Bedroom Collection",
    desc: "Plush upholstered beds with minimal profiles, premium fabrics, and architectural lines designed for absolute serenity.",
    highlights: ["Upholstered Headboards", "Solid Wood Slats", "Storage Configurations", "Custom Sizing"],
    image: "/images/furniture/beds.jpg",
  },
  {
    id: "dining",
    tab: "Dining",
    headline: "Dining Experience",
    desc: "Sculptural tables in premium marble and dark walnut paired with designer seating for truly memorable meals.",
    highlights: ["Premium Marble & Walnut", "6 to 12 Seater Options", "Designer Dining Chairs", "Extension Tables"],
    image: "/images/furniture/dining.jpg",
  },
  {
    id: "wardrobes",
    tab: "Wardrobes",
    headline: "Wardrobes",
    desc: "Floor-to-ceiling storage with ambient lighting, glass reveals, and precision hardware that functions as modern art.",
    highlights: ["Floor-to-Ceiling Designs", "Soft-Close Hardware", "Ambient Interior Lighting", "Bespoke Configurations"],
    image: "/images/furniture/wardrobes.jpg",
  },
  {
    id: "office",
    tab: "Office",
    headline: "Home Office",
    desc: "Executive desks and ergonomic task chairs that command presence while honoring supreme comfort and focus.",
    highlights: ["Executive Desk Designs", "Ergonomic Seating", "Cable Management", "Storage Integration"],
    image: "/images/furniture/office.jpg",
  },
];

export default function FurnitureStory() {
  const [activeId, setActiveId] = useState(collections[0].id);
  const active = collections.find((c) => c.id === activeId) ?? collections[0];

  return (
    <section id="furniture" className="w-full bg-[#F7F4EB] py-16 md:py-20 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-display text-[10px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase mb-4 block">
              04 / Curated Collection
            </span>
            <h2 className="font-display text-[48px] md:text-[56px] lg:text-[64px] font-light tracking-tight text-[#2E221B] leading-[1.1]">
              Furniture.{" "}
              <span className="font-medium italic text-[#D4AF37]">Crafted to Last.</span>
            </h2>
          </div>
        </div>

        {/* Tabs — Sofas | Beds | Dining | Wardrobes | Office */}
        <div className="flex flex-wrap gap-0 border-b border-[#2E221B]/10 mb-10 md:mb-12">
          {collections.map((col) => {
            const isActive = activeId === col.id;
            return (
              <button
                key={col.id}
                onClick={() => setActiveId(col.id)}
                className="relative pb-4 pr-8 focus:outline-none cursor-pointer group"
              >
                <span
                  className="font-display text-[13px] md:text-[15px] font-medium tracking-wide transition-colors duration-300"
                  style={{ color: isActive ? "#2E221B" : "#2E221B" }}
                >
                  <span style={{ opacity: isActive ? 1 : 0.4 }}>{col.tab}</span>
                </span>
                {/* Gold underline indicator */}
                <span
                  className="absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] transition-all duration-400"
                  style={{ width: isActive ? "calc(100% - 32px)" : "0%" }}
                />
              </button>
            );
          })}
        </div>

        {/* Main layout: large image left (7 col), details right (5 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* LEFT — large product image */}
          <div className="md:col-span-1 lg:col-span-7 relative rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(46,34,27,0.10)]" style={{ aspectRatio: "4/3" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.headline}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 58vw"
                  quality={100}
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — category details */}
          <div className="md:col-span-1 lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`detail-${active.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Category title */}
                <h3 className="font-display font-light text-[32px] md:text-[40px] lg:text-[48px] text-[#2E221B] leading-[1.1] mb-5">
                  {active.headline}
                </h3>

                {/* 2–3 line description */}
                <p className="text-[#8B8178] font-light text-[18px] md:text-[20px] leading-[1.6] mb-8">
                  {active.desc}
                </p>

                {/* Material / feature highlights */}
                <ul className="space-y-3 mb-10">
                  {active.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-4 text-[#2E221B]/70 text-[14px] font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#showroom"
                  className="inline-flex items-center gap-3 group cursor-pointer"
                >
                  <span className="w-10 h-10 rounded-full border border-[#2E221B]/20 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/8 transition-all duration-300">
                    <ArrowRight size={14} className="text-[#2E221B] group-hover:text-[#D4AF37] transition-colors" />
                  </span>
                  <span className="font-display text-[10px] uppercase tracking-[0.2em] font-bold text-[#2E221B] group-hover:text-[#D4AF37] transition-colors">
                    Visit Showroom
                  </span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
