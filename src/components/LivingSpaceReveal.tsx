"use client";

import { motion } from "framer-motion";

export default function LivingSpaceReveal() {
  return (
    <section className="min-h-[110vh] py-32 md:py-48 px-6 md:px-16 w-full flex flex-col justify-center relative bg-soft-beige overflow-hidden">
      {/* Luxury Architectural Background using CSS */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(62,42,32,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(62,42,32,0.03) 1px, transparent 1px)', backgroundSize: '120px 120px' }} />
        {/* Soft volumetric lighting effect */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white/60 to-transparent blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-champagne-gold/10 to-transparent blur-[100px]" />
      </div>

      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center z-10">
        {/* Left Space - Could be filled with an image later, keeping empty for whitespace */}
        <div className="hidden lg:block lg:col-span-5 relative h-[60vh]">
          <div className="absolute inset-0 border border-walnut-brown/10 bg-white/20 backdrop-blur-sm rounded-sm flex items-center justify-center overflow-hidden">
            <div className="text-walnut-brown/20 font-display text-sm tracking-[0.5em] uppercase rotate-90 whitespace-nowrap">
              Architectural Space
            </div>
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-walnut-brown/30" />
            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-walnut-brown/30" />
          </div>
        </div>

        {/* Spatial Storytelling Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-display text-[10px] md:text-xs font-bold tracking-[0.4em] text-champagne-gold uppercase mb-8"
          >
            02 / Spatial Integration
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-walnut-brown leading-[1.05] mb-10"
          >
            The Art of the <br />
            <span className="font-semibold text-gradient-gold">Whole Space.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-stone-gray font-light text-base md:text-lg leading-relaxed max-w-2xl mb-16 tracking-wide"
          >
            True luxury is cohesive. As the environment establishes itself, structural travertine slabs frame the perimeter, warm custom lighting activates, and hand-selected bronze details complete the vision. We don&apos;t just showcase objects; we compose architectural sanctuaries.
          </motion.p>

          {/* Spatial details list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pointer-events-auto border-t border-walnut-brown/10 pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="font-display text-[10px] md:text-sm font-bold tracking-[0.2em] text-walnut-brown uppercase mb-4">
                Space Harmonization
              </h4>
              <p className="text-stone-gray/80 font-light text-sm leading-relaxed pr-8">
                Personalized consultations to align textures, wood stains, and proportions with your architectural layout.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h4 className="font-display text-[10px] md:text-sm font-bold tracking-[0.2em] text-walnut-brown uppercase mb-4">
                Luminous Design
              </h4>
              <p className="text-stone-gray/80 font-light text-sm leading-relaxed pr-8">
                Coordinated placement of ambient light and spotlight accent fixtures to illuminate premium materials.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
