"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Tv2, Refrigerator, WashingMachine, Speaker, ChefHat } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   SECTION 6 — Technology Experience
   CRITICAL: Product images → object-contain, NEVER object-cover
   Products must always be FULLY VISIBLE, never cropped
   ───────────────────────────────────────────────────────── */

const categories = [
  {
    id: "TV",
    index: "01",
    label: "Television",
    icon: Tv2,
    tagline: "Display Excellence",
    title: "Cinematic Visuals",
    desc: "The pinnacle of display technology. Immersive colors, absolute blacks, and ultra-thin profiles that transform your living space into a private cinema.",
    features: ["OLED Self-Lit Pixels", "4K 144Hz Display", "Ultra-Thin Profile", "Smart Home Integration"],
    image: "/images/electronics/ref-tv.jpg",
    alt: "Premium 4K smart TV — fully visible",
  },
  {
    id: "Refrigerator",
    index: "02",
    label: "Refrigerator",
    icon: Refrigerator,
    tagline: "Kitchen Excellence",
    title: "Culinary Preservation",
    desc: "Smart multi-zone cooling with AI-powered freshness management. Premium steel finishes designed to integrate flawlessly into luxury kitchen architecture.",
    features: ["Multi-Zone Cooling", "AI Freshness Manager", "Premium Steel Finish", "Noise-Free Operation"],
    image: "/images/electronics/ref-fridge.jpg",
    alt: "AI-powered smart refrigerator — fully visible",
  },
  {
    id: "Washer",
    index: "03",
    label: "Washing Machine",
    icon: WashingMachine,
    tagline: "Fabric Care Systems",
    title: "Intelligent Fabric Care",
    desc: "Studio-grade laundry care with AI fabric sensing. Protect premium fabrics with highest precision, delivered in near-silence.",
    features: ["AI Fabric Sensing", "Steam Care Cycle", "Silent Drive Motor", "Auto-Dosing System"],
    image: "/images/electronics/ref-washer.jpg",
    alt: "Premium washing machine — fully visible",
  },
  {
    id: "Theatre",
    index: "04",
    label: "Home Theatre",
    icon: Speaker,
    tagline: "Acoustic Excellence",
    title: "Acoustic Excellence",
    desc: "Studio-grade home theatre with Dolby Atmos spatial sound. Every note, every whisper calibrated for emotional resonance.",
    features: ["Dolby Atmos Spatial Audio", "THX Certified Drivers", "Auto Room Calibration", "Wireless Surround"],
    image: "/images/electronics/ref-theatre.jpg",
    alt: "Premium home theatre speaker system — fully visible",
  },
  {
    id: "Kitchen",
    index: "05",
    label: "Kitchen Appliances",
    icon: ChefHat,
    tagline: "Culinary Mastery",
    title: "Designer Kitchen",
    desc: "Precision espresso systems, smart air fryers, induction cooktops, and built-in ovens. Every appliance a statement of culinary craftsmanship.",
    features: ["Precision Espresso Systems", "Smart Air Fryers", "Induction Cooking", "Built-In Oven Integration"],
    image: "/images/electronics/ref-kitchen.jpg",
    alt: "Luxury kitchen appliances — fully visible",
  },
];

export default function ElectronicsStory() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <section
      id="electronics"
      className="relative w-full bg-[#0C0A08] py-16 md:py-20 overflow-hidden"
    >
      {/* Subtle ambient warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D4AF37]/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-10 md:mb-12">
          <span className="font-display text-[10px] tracking-[0.5em] uppercase text-[#D4AF37] font-bold mb-4 block">
            06 / Technology Experience
          </span>
          <h2 className="font-display text-[48px] md:text-[56px] lg:text-[64px] font-light text-white leading-[1.1] tracking-tight">
            Engineered{" "}
            <span className="font-semibold text-[#D4AF37]">Brilliance.</span>
          </h2>
        </div>

        {/* Category navigation — horizontal tabs */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-white/8 pb-4 mb-10 md:mb-14">
          {categories.map((cat) => {
            const isActive = activeId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className="relative flex items-center gap-2 py-2 group focus:outline-none cursor-pointer"
              >
                <span
                  className="font-display text-[9px] tracking-[0.3em] uppercase transition-colors duration-300"
                  style={{ color: isActive ? "#D4AF37" : "rgba(255,255,255,0.3)" }}
                >
                  {cat.index}
                </span>
                <span
                  className="font-display text-[11px] tracking-widest uppercase font-semibold transition-colors duration-300"
                  style={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.38)" }}
                >
                  {cat.label}
                </span>
                {/* Active gold underline */}
                <span
                  className="absolute bottom-0 left-0 h-[1.5px] bg-[#D4AF37] transition-all duration-400"
                  style={{ width: isActive ? "100%" : "0%" }}
                />
              </button>
            );
          })}
        </div>

        {/* Two-column layout: 5 col text / 7 col product stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT — text content (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${active.id}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                {/* Tagline */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-[1px] bg-[#D4AF37]" />
                  <span className="font-display text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold">
                    {active.tagline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-light text-[40px] md:text-[48px] lg:text-[54px] text-white leading-[1.1] mb-5">
                  {active.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 font-light text-[17px] md:text-[19px] leading-[1.6] mb-8 max-w-[380px]">
                  {active.desc}
                </p>

                {/* Feature bullets */}
                <ul className="space-y-3 mb-10">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-center gap-4 text-white/65 text-[13px] font-light tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="flex items-center gap-3 w-fit group cursor-pointer">
                  <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                    <ArrowRight size={14} className="text-white group-hover:text-[#D4AF37] transition-colors" />
                  </span>
                  <span className="font-display text-[10px] uppercase tracking-[0.2em] font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    Collection Coming Soon
                  </span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT — product stage (7 cols) */}
          {/*
            CRITICAL:
            - Dark warm background (#1A1410)
            - Product uses object-contain — FULLY VISIBLE, NEVER CROPPED
            - Radial gold spotlight behind product
            - Product vertically centered
          */}
          <div className="lg:col-span-7">
            <div
              className="relative w-full rounded-[24px] overflow-hidden border border-white/[0.05]"
              style={{
                backgroundColor: "#1A1410",
                aspectRatio: "16/10",
              }}
            >
              {/* Radial gold spotlight */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 65% 55% at 50% 52%, rgba(212,175,55,0.12) 0%, transparent 70%)",
                }}
              />

              {/* Product image — object-contain ensures full visibility */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${active.id}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center p-6 md:p-10"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={active.image}
                      alt={active.alt}
                      fill
                      className="object-contain"   /* CRITICAL: never crop the product */
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      quality={100}
                      priority={activeId === "TV"}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
