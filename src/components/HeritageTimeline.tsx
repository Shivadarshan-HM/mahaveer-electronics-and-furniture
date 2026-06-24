"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────────────────
   SECTION 7 — Mahaveer Heritage (Timeline)
   Spec:
   - Timeline starts at 2013 (CRITICAL)
   - Horizontal on desktop, vertical on mobile
   - Maximum 70vh — compact and premium
   - Nodes stagger in on scroll — luxury, subtle
   ───────────────────────────────────────────────────────── */

const milestones = [
  {
    year: "2013",
    title: "Foundation",
    desc: "Mahaveer opens its doors in HD Kote with a vision to bring quality home solutions to the region.",
  },
  {
    year: "2016",
    title: "Expansion",
    desc: "Showroom doubles in size. Electronics and appliances wing added to meet growing demand.",
  },
  {
    year: "2019",
    title: "Trusted Regional Brand",
    desc: "Recognised as the region's premier destination for home furnishing and electronics.",
  },
  {
    year: "2023",
    title: "Complete Home Solutions",
    desc: "Full interior design consultation services launched. 500+ brand partners onboarded.",
  },
  {
    year: "Today",
    title: "13+ Years of Excellence",
    desc: "Over 5000 homes transformed. Karnataka's finest showroom continues to grow.",
    isToday: true,
  },
];

export default function HeritageTimeline() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="heritage"
      className="w-full bg-[#FAF9F5] py-16 md:py-20 overflow-hidden"
      style={{ maxHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[24px] lg:px-[48px]">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-12"
        >
          <span className="font-display text-[10px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase mb-4 block">
            07 / The Heritage
          </span>
          <h2 className="font-display text-[48px] md:text-[56px] lg:text-[64px] font-light tracking-tight text-[#2E221B] leading-[1.1]">
            A Decade of{" "}
            <span className="font-medium italic text-[#D4AF37]">Building Trust.</span>
          </h2>
        </motion.div>

        {/* ── DESKTOP: Horizontal Timeline ── */}
        <div className="hidden md:block">
          {/* Connecting line */}
          <div className="relative mb-6">
            <div className="absolute top-[18px] left-0 right-0 h-[1px] bg-[#2E221B]/10" />
            <motion.div
              className="absolute top-[18px] left-0 h-[1px] bg-[#D4AF37]"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Nodes */}
            <div className="relative flex justify-between">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                  style={{ width: `${100 / milestones.length}%` }}
                >
                  {/* Node dot */}
                  <div
                    className="relative z-10 w-9 h-9 rounded-full border-2 flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: m.isToday ? "#D4AF37" : "#FAF9F5",
                      borderColor: m.isToday ? "#D4AF37" : "#2E221B",
                    }}
                  >
                    {m.isToday ? (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FAF9F5]" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-[#2E221B]" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Labels below nodes */}
          <div className="flex justify-between">
            {milestones.map((m, i) => (
              <motion.div
                key={`label-${m.year}`}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
                style={{ width: `${100 / milestones.length}%`, paddingRight: i < milestones.length - 1 ? 16 : 0 }}
              >
                {/* Year */}
                <span
                  className="font-display font-semibold text-[16px] tracking-tight mb-1"
                  style={{ color: m.isToday ? "#D4AF37" : "#2E221B" }}
                >
                  {m.year}
                </span>
                {/* Title */}
                <span className="font-display text-[13px] font-medium text-[#2E221B]/80 mb-2 leading-tight">
                  {m.title}
                </span>
                {/* Description */}
                <p className="text-[#8B8178] font-light text-[12px] leading-[1.55]">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── MOBILE: Vertical Timeline ── */}
        <div className="md:hidden flex flex-col gap-0">
          {milestones.map((m, i) => (
            <motion.div
              key={`mobile-${m.year}`}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="flex gap-5 pb-8 last:pb-0 relative"
            >
              {/* Left: vertical line + dot */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: m.isToday ? "#D4AF37" : "#FAF9F5",
                    borderColor: m.isToday ? "#D4AF37" : "#2E221B",
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: m.isToday ? "#FAF9F5" : "#2E221B" }}
                  />
                </div>
                {i < milestones.length - 1 && (
                  <div className="w-[1px] flex-1 mt-2 bg-[#2E221B]/10" />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-2">
                <span
                  className="font-display font-semibold text-[15px] block mb-0.5"
                  style={{ color: m.isToday ? "#D4AF37" : "#2E221B" }}
                >
                  {m.year}
                </span>
                <span className="font-display text-[13px] font-medium text-[#2E221B]/80 block mb-1">
                  {m.title}
                </span>
                <p className="text-[#8B8178] font-light text-[12px] leading-[1.55]">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
