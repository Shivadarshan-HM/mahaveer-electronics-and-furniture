"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────
   SECTION 5 — Curated Spaces (Luxury Accordion)
   Spec: vertical accordion, max 80vh, hover expands, one panel at a time
   Inspiration: Poliform, Minotti
   ───────────────────────────────────────────────────────── */

const spaces = [
  {
    id: "living",
    category: "Living",
    label: "01 / Living & Lounge",
    title: "Modern Living",
    desc: "Soft architectural lines, deep-sink sofas, and curated lighting create living rooms that are as beautiful at midnight as at noon.",
    image: "/images/interiors/living-room.jpg",
    objectPosition: "center center",
  },
  {
    id: "bedroom",
    category: "Bedroom",
    label: "02 / Rest & Sanctuary",
    title: "Luxury Bedroom",
    desc: "Sanctuaries with plush upholstered headboards and integrated ambient lighting that dissolve the boundary between rest and art.",
    image: "/images/interiors/bedroom.jpg",
    objectPosition: "center 30%",
  },
  {
    id: "dining",
    category: "Dining",
    label: "03 / Dining & Gathering",
    title: "Dining Experience",
    desc: "Sculptural dining tables in premium marble paired with statement chairs that transform every meal into a curated event.",
    image: "/images/interiors/dining.jpg",
    objectPosition: "center center",
  },
  {
    id: "office",
    category: "Office",
    label: "04 / Work & Focus",
    title: "Executive Workspace",
    desc: "Sophisticated environments anchored by precision desks and ergonomic seating with profound aesthetic intention.",
    image: "/images/interiors/office.jpg",
    objectPosition: "center center",
  },
];

export default function CuratedSpaces() {
  const [activeId, setActiveId] = useState<string | null>("living");

  return (
    <section
      id="spaces"
      className="w-full bg-[#FAF9F5] py-16 md:py-20 overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-10 md:mb-12 flex flex-col md:flex-row justify-between gap-6 md:items-start">
          <div>
            <span className="font-display text-[10px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase mb-4 block">
              05 / Curated Spaces
            </span>
            <h2 className="font-display text-[48px] md:text-[56px] lg:text-[64px] font-light tracking-tight text-[#2E221B] leading-[1.1]">
              Designed Around The{" "}
              <span className="font-medium italic text-[#D4AF37]">Way You Live.</span>
            </h2>
          </div>
          <div className="md:pt-[34px]">
            <p className="text-[#8B8178] font-light text-[18px] md:text-[20px] leading-[1.6] max-w-xs shrink-0">
              Four complete environments. Each crafted for comfort, technology and modern living.
            </p>
          </div>
        </div>

        {/* Vertical accordion */}
        <div className="flex flex-col border-t border-[#2E221B]/20">
          {spaces.map((space) => {
            const isActive = activeId === space.id;

            return (
              <div
                key={space.id}
                className="relative overflow-hidden border-b border-[#2E221B]/20 cursor-pointer group transition-colors duration-300 hover:bg-[#F7F4ED]"
                onMouseEnter={() => setActiveId(space.id)}
                onClick={() => setActiveId(space.id === activeId ? null : space.id)}
              >
                {/* Collapsed header — fixed 72px height */}
                <div className="flex items-center justify-between h-[72px] px-4 md:px-6">
                  <div className="flex items-center gap-6">
                    {/* Fixed 48x48 thumbnail */}
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={space.image}
                        alt={space.category}
                        fill
                        className="object-cover"
                        style={{ objectPosition: space.objectPosition }}
                        sizes="48px"
                      />
                    </div>

                    <span className="font-display text-[12px] tracking-[0.3em] uppercase font-bold text-[#2E221B]">
                      {space.label}
                    </span>
                  </div>

                  {/* Category name — right aligned */}
                  <span className="font-display font-light text-[24px] tracking-tight text-[#8B8178] group-hover:text-[#2E221B] transition-colors duration-300 hidden md:block">
                    {space.title}
                  </span>
                </div>

                {/* Expanded content — exactly 480px height */}
                <motion.div
                  initial={false}
                  animate={{ height: isActive ? 480 : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="w-full h-full pb-6 px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 h-full w-full rounded-[24px] overflow-hidden bg-[#FAF9F5]">
                      {/* Full editorial image — fills left side */}
                      <div className="lg:col-span-7 relative h-full w-full hidden lg:block">
                        <Image
                          src={space.image}
                          alt={space.title}
                          fill
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                          style={{ objectPosition: space.objectPosition }}
                          sizes="60vw"
                          quality={100}
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Mobile fallback image */}
                      <div className="relative h-48 w-full lg:hidden block">
                        <Image
                          src={space.image}
                          alt={space.title}
                          fill
                          className="object-cover object-center"
                          style={{ objectPosition: space.objectPosition }}
                          sizes="100vw"
                          quality={100}
                          loading="lazy"
                        />
                      </div>

                      {/* Descriptor text — right column */}
                      <div className="lg:col-span-5 flex flex-col justify-center px-8 lg:px-12 bg-[#FAF9F5] h-full">
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 16 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 8 }}
                              transition={{ duration: 0.4, delay: 0.15 }}
                            >
                              <span className="font-display text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-bold mb-4 block">
                                {space.category}
                              </span>
                              <h3 className="font-display font-light text-[32px] md:text-[48px] text-[#2E221B] leading-[1.1] mb-6">
                                {space.title}
                              </h3>
                              <p className="text-[#8B8178] font-light text-[17px] md:text-[18px] leading-[1.6]">
                                {space.desc}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
