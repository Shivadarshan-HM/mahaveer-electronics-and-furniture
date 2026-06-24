"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

/* ─────────────────────────────────────────
   SVG Path Definitions — Architectural Room Sketch
   ViewBox: 0 0 1000 480
   Coordinate system: floor at y=380, ceiling at y=70
   ───────────────────────────────────────── */

// LAYER 1 — Room shell (first to draw)
const ROOM_PATHS = [
  // Floor
  { id: "floor",       d: "M 50,380 L 950,380" },
  // Left wall
  { id: "wall-left",   d: "M 120,380 L 120,70" },
  // Right wall
  { id: "wall-right",  d: "M 880,380 L 880,70" },
  // Ceiling
  { id: "ceiling",     d: "M 120,70 L 880,70" },
];

// LAYER 2 — Wall panels (architectural detail)
const PANEL_PATHS = [
  // Left panel frame
  { id: "lp-outer",   d: "M 130,90 L 130,370 L 230,370 L 230,90 Z" },
  { id: "lp-inner",   d: "M 142,104 L 142,358 L 218,358 L 218,104 Z" },
  // Left panel middle rail
  { id: "lp-rail",    d: "M 130,230 L 230,230" },

  // Right panel frame
  { id: "rp-outer",   d: "M 770,90 L 770,370 L 870,370 L 870,90 Z" },
  { id: "rp-inner",   d: "M 782,104 L 782,358 L 858,358 L 858,104 Z" },
  { id: "rp-rail",    d: "M 770,230 L 870,230" },
];

// LAYER 3 — Furniture
const SOFA_PATHS = [
  // Sofa seat (wide)
  { id: "sofa-seat",       d: "M 300,350 L 700,350 L 700,310 L 300,310 Z" },
  // Sofa back cushion
  { id: "sofa-back",       d: "M 310,310 L 690,310 L 690,255 L 310,255 Z" },
  // Left armrest
  { id: "sofa-arm-l",      d: "M 288,325 L 312,325 L 312,270 L 288,270 Z" },
  // Right armrest
  { id: "sofa-arm-r",      d: "M 688,325 L 712,325 L 712,270 L 688,270 Z" },
  // Sofa legs
  { id: "sofa-leg-l",      d: "M 320,350 L 320,370 M 680,350 L 680,370" },
  // Cushion divider lines
  { id: "sofa-div-1",      d: "M 500,310 L 500,255" },
  // Left accent pillow
  { id: "sofa-pillow-l",   d: "M 355,308 L 415,308 L 415,270 L 355,270 Z" },
  // Right accent pillow
  { id: "sofa-pillow-r",   d: "M 585,308 L 645,308 L 645,270 L 585,270 Z" },
];

// LAYER 4 — Side table (right of sofa)
const TABLE_PATHS = [
  // Table top
  { id: "tbl-top",   d: "M 720,310 L 780,310" },
  // Table legs
  { id: "tbl-leg-l", d: "M 730,310 L 730,370" },
  { id: "tbl-leg-r", d: "M 770,310 L 770,370" },
  // Lower shelf
  { id: "tbl-shelf", d: "M 730,345 L 770,345" },
  // Decorative item on table (vase)
  { id: "tbl-vase",  d: "M 748,310 C 745,295 755,295 752,310" },
];

// LAYER 5 — Floor lamp (left)
const LAMP_PATHS = [
  // Stem
  { id: "lamp-stem", d: "M 245,370 L 245,210" },
  // Base
  { id: "lamp-base", d: "M 233,370 L 257,370" },
  // Shade (arc)
  { id: "lamp-shade", d: "M 222,210 C 220,188 270,188 268,210 L 222,210" },
  // Inner glow of lamp shade
  { id: "lamp-glow", d: "M 229,210 C 228,198 262,198 261,210" },
];

// LAYER 6 — Rug under sofa
const RUG_PATHS = [
  { id: "rug-outer", d: "M 255,370 L 745,370 L 760,380 L 240,380 Z" },
  { id: "rug-inner", d: "M 270,370 L 730,370 L 742,378 L 258,378 Z" },
];

// LAYER 7 — Coffee table
const COFFEE_TABLE = [
  { id: "coffee-top",   d: "M 375,375 L 625,375 L 625,365 L 375,365 Z" },
  { id: "coffee-leg-l", d: "M 390,365 L 390,380" },
  { id: "coffee-leg-r", d: "M 610,365 L 610,380" },
];

// Grouped for staggered animation
const ALL_PATH_GROUPS = [
  { group: "room",    paths: ROOM_PATHS,     delay: 0,    duration: 0.7, color: "#C9A84C" },
  { group: "panels",  paths: PANEL_PATHS,    delay: 0.55, duration: 0.6, color: "#C9A84C" },
  { group: "rug",     paths: RUG_PATHS,      delay: 0.9,  duration: 0.35, color: "#C9A84C" },
  { group: "sofa",    paths: SOFA_PATHS,     delay: 1.05, duration: 0.75, color: "#C9A84C" },
  { group: "table",   paths: TABLE_PATHS,    delay: 1.55, duration: 0.45, color: "#C9A84C" },
  { group: "lamp",    paths: LAMP_PATHS,     delay: 1.7,  duration: 0.45, color: "#C9A84C" },
  { group: "coffee",  paths: COFFEE_TABLE,   delay: 1.85, duration: 0.35, color: "#C9A84C" },
];

/* ────────────────── Component ────────────────── */

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const [glowVisible, setGlowVisible] = useState(false);

  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<Map<string, SVGPathElement>>(new Map());

  /* ── Register path refs ── */
  const registerPath = (id: string, el: SVGPathElement | null) => {
    if (el) pathRefs.current.set(id, el);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const svg = svgRef.current;
    if (!svg) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Exit: fade out entire preloader
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.9,
            ease: "power2.inOut",
            delay: 0.2,
            onComplete: () => {
              setIsVisible(false);
              document.body.style.overflow = "unset";
            },
          });
        },
      });

      // Initialise all paths with stroke-dasharray/dashoffset = totalLength
      pathRefs.current.forEach((path) => {
        try {
          const len = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: len,
            strokeDashoffset: len,
            opacity: 1,
          });
        } catch {
          /* some lines have zero length — safe to ignore */
        }
      });

      // Draw each group with stagger
      ALL_PATH_GROUPS.forEach(({ paths, delay, duration }) => {
        paths.forEach((pathDef, i) => {
          const el = pathRefs.current.get(pathDef.id);
          if (!el) return;
          try {
            tl.to(
              el,
              {
                strokeDashoffset: 0,
                duration: duration,
                ease: "power3.inOut",
              },
              delay + i * 0.06
            );
          } catch {}
        });
      });

      // Glow pulse behind scene at ~1.8s
      tl.call(() => setGlowVisible(true), [], 1.8);

      // Text reveal at ~2.0s
      tl.call(() => setTextVisible(true), [], 2.0);

      // Hold at 2.8s, then exit
      tl.to({}, { duration: 0.8 }, 2.8);
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[500] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#F8F5EE" }}
    >
      {/* ── Ambient glow behind scene ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: glowVisible ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(212,175,55,0.12) 0%, transparent 70%), " +
            "radial-gradient(ellipse 40% 30% at 22% 70%, rgba(212,175,55,0.06) 0%, transparent 60%)",
        }}
      />

      {/* ── Corner labels ── */}
      <div className="absolute top-8 left-8 md:top-10 md:left-12">
        <span className="font-display text-[9px] md:text-[10px] tracking-[0.35em] uppercase font-semibold text-[#3E2A20]/40">
          Est. 2013
        </span>
      </div>
      <div className="absolute top-8 right-8 md:top-10 md:right-12">
        <span className="font-display text-[9px] md:text-[10px] tracking-[0.35em] uppercase font-semibold text-[#3E2A20]/40">
          HD Kote
        </span>
      </div>

      {/* ── SVG Blueprint Scene ── */}
      <div className="relative w-full flex items-center justify-center" style={{ maxWidth: 900, paddingTop: "1rem" }}>
        <svg
          ref={svgRef}
          viewBox="0 0 1000 480"
          className="w-full h-auto"
          style={{ maxHeight: "52vh" }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Render all path groups */}
          {ALL_PATH_GROUPS.map(({ paths, color }) =>
            paths.map((p) => (
              <path
                key={p.id}
                ref={(el) => registerPath(p.id, el)}
                d={p.d}
                stroke={color}
                strokeWidth={p.id.includes("pillow") || p.id.includes("inner") || p.id.includes("div") || p.id.includes("glow") ? 0.8 : 1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0}
                fill="none"
              />
            ))
          )}

          {/* Gold dot — architectural marker at floor intersection */}
          <circle cx="120" cy="380" r="2.5" fill="#D4AF37" opacity={0.6} />
          <circle cx="880" cy="380" r="2.5" fill="#D4AF37" opacity={0.6} />
          <circle cx="120" cy="70"  r="2" fill="#D4AF37" opacity={0.4} />
          <circle cx="880" cy="70"  r="2" fill="#D4AF37" opacity={0.4} />

          {/* Subtle cross-hatch grid in background — very faint */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A84C" strokeWidth="0.3" opacity="0.18" />
            </pattern>
          </defs>
          <rect x="120" y="70" width="760" height="310" fill="url(#grid)" />
        </svg>
      </div>

      {/* ── Brand text — appears after blueprint completes ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-10 md:pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 20 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Thin gold line above text */}
        <motion.div
          className="mb-5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: textVisible ? 1 : 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          style={{ width: 48, height: 1, backgroundColor: "#D4AF37", transformOrigin: "center" }}
        />

        <h1
          className="font-display font-light tracking-[0.4em] text-[#3E2A20] mb-2"
          style={{ fontSize: "clamp(1.6rem, 4vw, 3rem)" }}
        >
          MAHAVEER
        </h1>

        <p className="font-display text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium text-[#D4AF37] mb-1">
          Electronics &amp; Furniture
        </p>

        <p className="font-display text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-light text-[#3E2A20]/40">
          Crafted Since 2013
        </p>
      </motion.div>
    </div>
  );
}
