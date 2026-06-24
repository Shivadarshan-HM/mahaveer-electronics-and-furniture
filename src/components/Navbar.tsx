"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "Collection", href: "#furniture" },
  { label: "Spaces",     href: "#spaces" },
  { label: "Technology", href: "#electronics" },
  { label: "Brands",     href: "#brands" },
  { label: "Showroom",   href: "#showroom" },
];

function NavLink({
  item,
  active,
  onClick,
}: {
  item: (typeof navLinks)[0];
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={item.href}
      onClick={(e) => onClick(e, item.href)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-center min-h-[44px] px-2 focus:outline-none"
    >
      <span
        className="font-display text-[12px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 text-white"
        style={{ opacity: active || hovered ? 1 : 0.7 }}
      >
        {item.label}
      </span>
      <motion.span
        className="absolute bottom-1 left-2 right-2 h-[1.5px] origin-left bg-[#D4AF37]"
        initial={false}
        animate={{ scaleX: active ? 1 : hovered ? 0.65 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 110) {
          setActiveSection(`#${id}`);
          return;
        }
      }
      setActiveSection("#home");
    };
    
    // Initial check
    onScroll();
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).lenis;
    if (lenis) lenis.scrollTo(el, { offset: -90, duration: 1.4 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-12 transition-all duration-500 ${scrolled ? 'backdrop-blur-md' : ''}`} style={{ background: scrolled ? 'rgba(0,0,0,0.6)' : 'transparent' }}>
          
          {/* Logo Left */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, "#home")}
            className="flex items-center gap-3 shrink-0 group min-h-[44px]"
          >
            <div className="relative w-10 h-10 shrink-0 transition-opacity duration-300 group-hover:opacity-85">
              <Image
                src="/images/mahaveer-logo.png"
                alt="Mahaveer Logo"
                fill
                className="object-contain object-left"
                sizes="40px"
                priority
              />
            </div>
            <div className="flex flex-col leading-none shrink-0 justify-center">
              <span className="font-display font-semibold text-[10px] md:text-[13px] tracking-[0.28em] text-white uppercase group-hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap">
                Mahaveer
              </span>
              <span className="text-[5px] md:text-[7px] tracking-[0.28em] font-semibold text-white/60 uppercase mt-[2px] md:mt-[3px] whitespace-nowrap">
                Electronics &amp; Furniture
              </span>
            </div>
          </a>

          {/* Nav Links Center (Desktop 1024px+) */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                active={activeSection === item.href}
                onClick={handleClick}
              />
            ))}
          </nav>

          {/* Action Right (Desktop 1024px+) */}
          <div className="hidden lg:flex shrink-0">
            <a
              href="#showroom"
              onClick={(e) => handleClick(e, "#showroom")}
              className="px-6 py-3 text-[10px] uppercase font-bold tracking-[0.18em] text-[#1A0F0A] bg-[#D4AF37] hover:bg-[#e8c94a] rounded-full transition-all duration-300 shadow-md whitespace-nowrap min-h-[44px] flex items-center justify-center"
            >
              Visit Showroom
            </a>
          </div>

          {/* Hamburger Menu (Tablet & Mobile < 1024px) */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex lg:hidden text-white hover:text-[#D4AF37] transition-colors min-h-[44px] min-w-[44px] items-center justify-end"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
      </nav>

      {/* Full Screen Mobile/Tablet Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[60] h-screen w-screen flex flex-col justify-center items-center backdrop-blur-xl"
            style={{ background: "rgba(0,0,0,0.92)" }}
          >
            {/* Close Button Top Right */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-3 right-4 md:top-5 md:right-6 text-white hover:text-[#D4AF37] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={36} />
            </button>

            <nav className="flex flex-col items-center justify-center gap-8 w-full px-6">
              {navLinks.map((item, i) => {
                const isActive = activeSection === item.href;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                    className="font-display text-[32px] font-light tracking-[0.05em] transition-colors duration-300 min-h-[44px] flex items-center"
                    style={{ color: isActive ? "#D4AF37" : "#FFFFFF" }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.4 }}
                className="mt-8 flex flex-col gap-4 w-full max-w-xs"
              >
                <a
                  href="https://wa.me/919945243756"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 text-[13px] uppercase font-bold tracking-[0.18em] text-white border border-white/20 hover:border-white/50 rounded-full min-h-[44px] flex items-center justify-center w-full text-center transition-colors duration-300"
                >
                  WhatsApp Us
                </a>
                <a
                  href="#showroom"
                  onClick={(e) => handleClick(e, "#showroom")}
                  className="px-10 py-4 text-[13px] uppercase font-bold tracking-[0.18em] text-[#1A0F0A] bg-[#D4AF37] hover:bg-[#e8c94a] rounded-full min-h-[44px] flex items-center justify-center w-full text-center transition-colors duration-300"
                >
                  Visit Showroom
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
