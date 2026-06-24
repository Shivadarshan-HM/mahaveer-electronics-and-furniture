"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#18120D] overflow-hidden flex flex-col pt-16">
      
      {/* ── MASSIVE WATERMARK ── */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full flex justify-center">
        <span className="font-display font-bold text-[22vw] tracking-widest text-[#FAF9F5] opacity-[0.02] whitespace-nowrap">
          MAHAVEER
        </span>
      </div>

      {/* ── 1. FINAL CTA SECTION (70-80vh) ── */}
      <div className="relative z-10 w-full min-h-[65vh] flex flex-col items-center justify-center px-6 text-center border-b border-white/[0.05] pb-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] font-bold mb-6"
        >
          06 / The Destination
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[48px] md:text-[56px] lg:text-[64px] font-light text-[#FAF9F5] leading-[1.1] tracking-tight mb-8"
        >
          Ready To Transform <br className="hidden md:block" />
          <span className="font-serif italic font-medium text-[#D4AF37]">Your Space?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#FAF9F5]/60 font-light text-[18px] md:text-[20px] leading-[1.6] max-w-2xl mb-12"
        >
          Visit Karnataka&apos;s destination for furniture, electronics, appliances and complete interior solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#showroom"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#D4AF37] hover:bg-[#e8c94a] text-[#18120D] text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            Visit Showroom <ArrowRight size={14} />
          </a>
          <a
            href="https://wa.me/919945243756"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-transparent border border-[#FAF9F5]/20 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 text-[#FAF9F5] text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] rounded-full transition-all duration-300"
          >
            WhatsApp Us <MessageCircle size={14} />
          </a>
        </motion.div>
      </div>

      {/* ── 2. FOOTER SECTION ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-[20px] md:px-[24px] lg:px-[48px] pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
          
          {/* LEFT: Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-40 h-12">
                <Image src="/images/mahaveer-logo.png" alt="Mahaveer" fill className="object-contain object-left" sizes="(max-width: 768px) 120px, 160px" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-[0.3em] uppercase text-[#FAF9F5] font-light">
                  Mahaveer
                </span>
                <span className="text-[8px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
                  Electronics & Furniture
                </span>
              </div>
            </div>
            <p className="text-[#FAF9F5]/40 text-sm font-light leading-relaxed max-w-sm mb-8">
              Curating the world&apos;s finest brands in electronics, luxury furniture, and comprehensive interior solutions for the modern home.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-[#FAF9F5]/10 flex items-center justify-center text-[#FAF9F5]/60 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-[#FAF9F5]/10 flex items-center justify-center text-[#FAF9F5]/60 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://wa.me/919945243756" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-[#FAF9F5]/10 flex items-center justify-center text-[#FAF9F5]/60 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300">
                <MessageCircle size={16} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

          {/* CENTER: Collection Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col"
          >
            <h4 className="font-display text-[11px] tracking-[0.3em] uppercase font-bold text-[#FAF9F5] mb-8">
              Collections
            </h4>
            <ul className="space-y-4">
              {["Furniture", "Electronics", "Appliances", "Interiors"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-[#FAF9F5]/50 hover:text-[#D4AF37] text-sm font-light transition-colors duration-300 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <h4 className="font-display text-[11px] tracking-[0.3em] uppercase font-bold text-[#FAF9F5] mb-8">
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-0.5" strokeWidth={1.5} />
                <a
                  href="https://www.google.com/maps/place/Mahaveer+electronics+and+furniture/@12.0861035,76.3298018,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba5f3001eaa9add:0xd195b70882f4176!8m2!3d12.0860983!4d76.3323767!16s%2Fg%2F11ywntgnf4?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAF9F5]/50 hover:text-[#D4AF37] text-sm font-light leading-relaxed transition-colors duration-300"
                >
                  HD Kote Road,<br />Mysuru, Karnataka
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-[#D4AF37] shrink-0" strokeWidth={1.5} />
                <span className="text-[#FAF9F5]/50 text-sm font-light">+91 99452 43756</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-[#D4AF37] shrink-0" strokeWidth={1.5} />
                <span className="text-[#FAF9F5]/50 text-sm font-light">mahaveerelectronics2025@gmail.com</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* ── BOTTOM TRUST BAR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#FAF9F5]/10 gap-6"
        >
          <div className="flex items-center gap-6 md:gap-12 text-center md:text-left flex-wrap justify-center">
            <span className="font-display text-[9px] tracking-[0.2em] uppercase font-semibold text-[#FAF9F5]/40">
              13+ Years
            </span>
            <span className="font-display text-[9px] tracking-[0.2em] uppercase font-semibold text-[#FAF9F5]/40">
              500+ Brands
            </span>
            <span className="font-display text-[9px] tracking-[0.2em] uppercase font-semibold text-[#FAF9F5]/40">
              5000+ Happy Homes
            </span>
          </div>
          <span className="font-display text-[9px] tracking-[0.2em] uppercase font-semibold text-[#FAF9F5]/30">
            © {new Date().getFullYear()} Mahaveer. All Rights Reserved.
          </span>
        </motion.div>

      </div>
    </footer>
  );
}
