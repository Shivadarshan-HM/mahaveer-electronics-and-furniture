"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    year: "2013",
    title: "The Beginning",
    desc: "Founded in HD Kote with a singular vision — to bring premium quality and global standards to every home.",
  },
  {
    year: "2016",
    title: "Expanding Categories",
    desc: "Extended into electronics and appliances, becoming a complete home solutions destination.",
  },
  {
    year: "2019",
    title: "Trusted Destination",
    desc: "Crossed 1000+ homes transformed. Recognised as the region's foremost luxury interior partner.",
  },
  {
    year: "2023",
    title: "Complete Home Solutions",
    desc: "Now housing 500+ premium brands across furniture, electronics, appliances, and interiors.",
  },
  {
    year: "Today",
    title: "15+ Years of Excellence",
    desc: "Serving 5000+ homes with an uncompromising commitment to quality, design, and lasting relationships.",
  },
];

export default function Legacy() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="legacy"
      className="w-full bg-[#3E2A20] overflow-hidden"
      style={{ maxHeight: "70vh", minHeight: "520px" }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 h-full flex flex-col justify-center py-14 md:py-16"
        style={{ maxHeight: "70vh" }}>

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12 shrink-0">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="block font-display text-[10px] font-bold tracking-[0.5em] text-[#D4AF37] uppercase mb-4"
            >
              06 / Our Heritage
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-light text-white leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
            >
              A Legacy Built on{" "}
              <span className="font-medium italic text-[#D4AF37]">Trust.</span>
            </motion.h2>
          </div>

          {/* Stats — right-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex gap-8 shrink-0"
          >
            {[
              { val: "13+", label: "Years" },
              { val: "500+", label: "Brands" },
              { val: "5K+", label: "Homes" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <span className="block font-display text-3xl md:text-4xl font-light text-white leading-none mb-1">
                  {s.val}
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-semibold">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Horizontal Timeline ── */}
        <div className="relative overflow-x-auto pb-2 -mx-5 px-5 md:-mx-6 md:px-6">
          <div className="flex gap-0 min-w-max md:min-w-0 md:grid md:grid-cols-5">

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
                className="relative flex flex-col pr-6 md:pr-0 md:pr-4"
              >
                {/* Timeline bar + dot */}
                <div className="flex items-center mb-5">
                  {/* Dot */}
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shrink-0 z-10" />
                  {/* Line — not on last item */}
                  {i < milestones.length - 1 && (
                    <motion.div
                      className="flex-1 h-[1px] bg-[#D4AF37]/25 ml-0"
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                      style={{ transformOrigin: "left", minWidth: "60px" }}
                    />
                  )}
                </div>

                {/* Year */}
                <span className="font-display text-[#D4AF37] font-bold text-sm md:text-base tracking-[0.1em] mb-2 block">
                  {m.year}
                </span>

                {/* Title */}
                <h4 className="font-display text-white font-light text-[15px] md:text-[17px] leading-tight mb-2 pr-4">
                  {m.title}
                </h4>

                {/* Desc — hidden on mobile to keep it compact */}
                <p className="hidden lg:block text-white/45 font-light text-[12px] md:text-[13px] leading-relaxed pr-6">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
