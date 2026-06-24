"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function VisitMahaveer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo("#home");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="min-h-[100vh] py-32 md:py-48 px-6 md:px-16 w-full flex flex-col justify-between z-10 relative bg-luxury-beige">
      <div className="max-w-screen-2xl mx-auto w-full my-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-[10px] md:text-xs font-bold tracking-[0.4em] text-walnut-brown/60 uppercase mb-8 block"
        >
          06 / Showroom Experience
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-9xl font-light tracking-tighter text-walnut-brown leading-[0.95] mb-16"
        >
          Experience Luxury <br />
          In Person. <span className="font-medium text-white/80">Visit Mahaveer.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Location Card */}
          <div className="p-8 rounded-3xl glass-card flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-10 h-10 rounded-full bg-walnut-brown/5 flex items-center justify-center text-champagne-gold mb-6">
                <MapPin size={18} />
              </div>
              <h4 className="font-display text-xs uppercase tracking-widest font-bold text-walnut-brown mb-2">Location</h4>
              <p className="text-stone-gray font-light text-xs md:text-sm leading-relaxed">
                Main Road, Near Private Bus Stand,<br />
                Heggadadevanakote (HD Kote),<br />
                Karnataka 571114
              </p>
            </div>
            <a
              href="https://www.google.com/maps/place/Mahaveer+electronics+and+furniture/@12.0861035,76.3298018,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba5f3001eaa9add:0xd195b70882f4176!8m2!3d12.0860983!4d76.3323767!16s%2Fg%2F11ywntgnf4?entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 font-display text-[10px] uppercase font-bold tracking-widest text-champagne-gold flex items-center gap-1.5 hover:text-walnut-brown transition-colors group"
            >
              Get Directions <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Showroom Hours Card */}
          <div className="p-8 rounded-3xl glass-card flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-10 h-10 rounded-full bg-walnut-brown/5 flex items-center justify-center text-champagne-gold mb-6">
                <Clock size={18} />
              </div>
              <h4 className="font-display text-xs uppercase tracking-widest font-bold text-walnut-brown mb-2">Showroom Hours</h4>
              <p className="text-stone-gray font-light text-xs md:text-sm leading-relaxed">
                Open Daily: 9:00 AM – 9:00 PM<br />
                Including Sundays.<br />
                Personal spatial consulting.
              </p>
            </div>
            <div className="mt-6 text-[10px] uppercase tracking-widest font-bold text-stone-gray/40 select-none">
              No appointment needed
            </div>
          </div>

          {/* Connection Details Card */}
          <div className="p-8 rounded-3xl glass-card flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-10 h-10 rounded-full bg-walnut-brown/5 flex items-center justify-center text-champagne-gold mb-6">
                <Phone size={18} />
              </div>
              <h4 className="font-display text-xs uppercase tracking-widest font-bold text-walnut-brown mb-2">Connect Directly</h4>
              <p className="text-stone-gray font-light text-xs md:text-sm leading-relaxed mb-1">
                Consultant: +91 99452 43756
              </p>
              <p className="text-stone-gray font-light text-xs md:text-sm leading-relaxed">
                Showroom: +91 82282 23456
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="tel:+919945243756"
                className="px-4 py-2.5 rounded-full glass-btn text-[10px] uppercase font-bold tracking-widest text-center"
              >
                Call
              </a>
              <a
                href="https://wa.me/919945243756"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full glass-btn-primary text-[10px] uppercase font-bold tracking-widest text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer copyright bar */}
      <div className="border-t border-walnut-brown/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 mt-24 text-sm text-walnut-brown/60 max-w-screen-2xl mx-auto w-full">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span>&copy; {new Date().getFullYear()} Mahaveer Electronics & Furniture. All rights reserved.</span>
          <span className="text-xs text-walnut-brown/40 font-light">Serving HD Kote with legacy and distinction since 2011.</span>
        </div>
        <a
          href="#home"
          onClick={handleScrollToTop}
          className="font-display text-xs uppercase font-bold tracking-[0.2em] text-walnut-brown hover:text-white transition-colors"
        >
          Back to Top
        </a>
      </div>
    </section>
  );
}
