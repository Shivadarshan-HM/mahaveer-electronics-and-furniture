"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Clock, MessageCircle, Navigation } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   SECTION 8 — Showroom Experience
   Spec: dense editorial grid, magazine spread feel
   One large dominant image + 2–3 smaller supporting
   CTAs: Directions / WhatsApp
   NO horizontal scroll, NO pinned scroll
   ───────────────────────────────────────────────────────── */

export default function ShowroomGallery() {
  return (
    <section id="showroom" className="w-full bg-[#FAF9F5] py-16 md:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-[10px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase mb-4 block"
            >
              08 / The Physical Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-display text-[48px] md:text-[56px] lg:text-[64px] font-light tracking-tight text-[#2E221B] leading-[1.1]"
            >
              Visit.{" "}
              <span className="font-medium italic text-[#D4AF37]">Experience. Trust.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#8B8178] font-light text-[18px] md:text-[20px] leading-[1.6] max-w-xs shrink-0"
          >
            Karnataka&apos;s destination for furniture, electronics, appliances and interior solutions.
          </motion.p>
        </div>

        {/* Editorial grid — magazine spread layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 mb-12">

          {/* Primary: large dominant image (7 cols, 2 rows tall) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 lg:row-span-2 relative rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(46,34,27,0.10)]"
            style={{ aspectRatio: "3/4", maxHeight: "600px" }}
          >
            <Image
              src="/images/showroom/interior-wide.png"
              alt="Mahaveer Showroom Interior — HD Kote"
              fill
              className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 58vw"
              quality={100}
              loading="lazy"
            />
            {/* Editorial overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0A0806]/70 via-transparent to-transparent">
              <p className="font-display font-light text-white text-[22px] md:text-[28px] leading-tight">
                &quot;Step into a world where quality meets elegance.&quot;
              </p>
            </div>
          </motion.div>

          {/* Supporting image 1 (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 relative rounded-[24px] overflow-hidden shadow-[0_16px_40px_rgba(46,34,27,0.08)]"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src="/images/showroom/exterior-angled.png"
              alt="Mahaveer Showroom Exterior"
              fill
              className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 42vw"
              quality={100}
              loading="lazy"
            />
          </motion.div>

          {/* Supporting image 2 (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative rounded-[24px] overflow-hidden shadow-[0_16px_40px_rgba(46,34,27,0.08)]"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src="/images/showroom/exterior-night.png"
              alt="Mahaveer Showroom Night View"
              fill
              className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 42vw"
              quality={100}
              loading="lazy"
            />
          </motion.div>

        </div>

        {/* Info + CTAs row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-10 border-t border-[#2E221B]/8"
        >
          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 rounded-full bg-[#F7F4EB] border border-[#2E221B]/8 flex items-center justify-center">
              <MapPin size={16} className="text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-display text-[#2E221B] font-medium text-[14px] mb-1">Location</h4>
              <a
                href="https://www.google.com/maps/place/Mahaveer+electronics+and+furniture/@12.0861035,76.3298018,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba5f3001eaa9add:0xd195b70882f4176!8m2!3d12.0860983!4d76.3323767!16s%2Fg%2F11ywntgnf4?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B8178] hover:text-[#D4AF37] font-light text-[13px] leading-relaxed transition-colors duration-300 cursor-pointer"
              >
                HD Kote Road,<br />Mysuru, Karnataka
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 rounded-full bg-[#F7F4EB] border border-[#2E221B]/8 flex items-center justify-center">
              <Clock size={16} className="text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-display text-[#2E221B] font-medium text-[14px] mb-1">Hours</h4>
              <p className="text-[#8B8178] font-light text-[13px] leading-relaxed">
                Mon–Sat: 10 AM – 8 PM<br />Sunday: By Appointment
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 rounded-full bg-[#F7F4EB] border border-[#2E221B]/8 flex items-center justify-center">
              <Phone size={16} className="text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="font-display text-[#2E221B] font-medium text-[14px] mb-1">Contact</h4>
              <p className="text-[#8B8178] font-light text-[13px] leading-relaxed">
                +91 99452 43756<br />mahaveerelectronics2025@gmail.com
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 justify-center">
            <a
              href="https://www.google.com/maps/place/Mahaveer+electronics+and+furniture/@12.0861035,76.3298018,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba5f3001eaa9add:0xd195b70882f4176!8m2!3d12.0860983!4d76.3323767!16s%2Fg%2F11ywntgnf4?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3 bg-[#2E221B] hover:bg-[#D4AF37] text-white hover:text-[#1A0F0A] text-[10px] uppercase tracking-[0.2em] font-bold rounded-full transition-colors duration-300 cursor-pointer"
            >
              <Navigation size={13} /> Get Directions
            </a>
            <a
              href="https://wa.me/919945243756"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3 border border-[#2E221B]/20 hover:border-[#D4AF37] text-[#2E221B] hover:text-[#D4AF37] text-[10px] uppercase tracking-[0.2em] font-bold rounded-full transition-all duration-300 cursor-pointer"
            >
              <MessageCircle size={13} /> WhatsApp Us
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
