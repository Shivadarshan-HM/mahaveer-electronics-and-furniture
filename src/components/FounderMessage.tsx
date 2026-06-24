"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────
   SECTION 2 — Founder Story
   Spec: 5/7 editorial split, portrait left (tall aspect ratio),
   pull quote + story right. NOT a boxed card. NOT generic About Us.
   Founder image: object-cover object-top (preserve face)
   ───────────────────────────────────────────────────────── */

export default function FounderMessage() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="founder"
      ref={ref}
      className="relative w-full bg-[#FAF9F5] py-16 md:py-24 overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-[20px] md:px-[24px] lg:px-[48px]">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-12 md:mb-16"
        >
          <div className="w-8 h-[1px] bg-[#D4AF37]" />
          <span className="font-display text-[10px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase">
            02 / The Person Behind Mahaveer
          </span>
        </motion.div>

        {/* 5/7 editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* LEFT (5 cols) — Founder portrait */}
          <div className="md:col-span-1 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full rounded-3xl overflow-hidden shadow-[0_32px_64px_rgba(46,34,27,0.14)] border border-[#2E221B]/8"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src="/images/owner-photo.png"
                alt="Manish Kumar Surana — Founder, Mahaveer Electronics & Furniture"
                fill
                className="object-cover object-top"   /* object-top preserves face, not bottom */
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                quality={90}
              />
              {/* Subtle interior frame */}
              <div className="absolute inset-[14px] border border-white/15 pointer-events-none rounded-2xl z-10" />
            </motion.div>

            {/* Founder name under image */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 pl-2"
            >
              <h4 className="font-display text-[18px] font-semibold text-[#2E221B] tracking-wide">
                Manish Kumar Surana
              </h4>
              <p className="text-[10px] font-bold tracking-[0.22em] text-[#D4AF37] uppercase mt-1">
                Founder & Managing Director
              </p>
            </motion.div>
          </div>

          {/* RIGHT (7 cols) — Pull quote + story */}
          <div className="md:col-span-1 lg:col-span-7 flex flex-col justify-start pt-0 lg:pt-4">

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-display text-[44px] md:text-[52px] lg:text-[60px] font-light text-[#2E221B] leading-[1.1] tracking-tight mb-10"
            >
              Trust Built Over{" "}
              <span className="font-semibold italic text-[#D4AF37]">13+ Years.</span>
            </motion.h2>

            {/* Pull quote */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="border-l-2 border-[#D4AF37] pl-7 md:pl-9 mb-10"
            >
              <p className="font-display text-[22px] md:text-[28px] font-light text-[#2E221B] leading-[1.2] italic">
                &ldquo;Every home deserves quality, comfort, and trust. Our promise is not just exceptional products, but enduring relationships.&rdquo;
              </p>
            </motion.div>

            {/* Story paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="space-y-5 text-[#8B8178] font-light text-[17px] md:text-[19px] leading-[1.65] mb-12"
            >
              <p>
                Founded in 2013, Mahaveer Electronics & Furniture began with a singular vision: to bring uncompromising quality and global design standards to HD Kote. What started as a dedicated showroom has evolved into the region&apos;s definitive luxury home outfitter.
              </p>
              <p>
                With an unwavering commitment to customer satisfaction and excellence, we have carefully curated a portfolio of over 500 premium brands — transforming 5000+ homes into sanctuaries of comfort and modern luxury.
              </p>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-x-10 gap-y-6 pt-8 border-t border-[#2E221B]/8"
            >
              {[
                { val: "13+",   label: "Years of Excellence" },
                { val: "500+",  label: "Premium Brands" },
                { val: "5000+", label: "Homes Transformed" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-10">
                  <div>
                    <span className="block font-display text-[28px] md:text-[34px] font-light text-[#2E221B]">{s.val}</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#8B8178] font-semibold">{s.label}</span>
                  </div>
                  {i < 2 && <div className="w-[1px] h-10 bg-[#2E221B]/10" />}
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
