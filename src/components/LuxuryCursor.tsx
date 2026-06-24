"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CursorState = "default" | "link" | "button" | "card" | "hidden";

export default function LuxuryCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [state, setState] = useState<CursorState>("hidden");
  const [visible, setVisible] = useState(false);
  const raf = useRef<number | null>(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Hide system cursor globally
    document.documentElement.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      // Detect cursor context from data-cursor attribute
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (!el) { setState("default"); return; }

      const cursor = el.closest("[data-cursor]")?.getAttribute("data-cursor");
      if (cursor === "button") setState("button");
      else if (cursor === "link")   setState("link");
      else if (cursor === "card")   setState("card");
      else if (
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        el.closest("a") ||
        el.closest("button")
      ) setState("link");
      else setState("default");
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Smooth trail lerp loop
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      current.current.x = lerp(current.current.x, target.current.x, 0.08);
      current.current.y = lerp(current.current.y, target.current.y, 0.08);
      setTrailPos({ x: current.current.x, y: current.current.y });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [visible]);

  // Only render on desktop
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const isLarge = state === "button" || state === "card";
  const isMedium = state === "link";

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* ── Outer ring / aura — follows with lag ── */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border"
            style={{
              x: trailPos.x - (isLarge ? 28 : isMedium ? 18 : 12),
              y: trailPos.y - (isLarge ? 28 : isMedium ? 18 : 12),
            }}
            animate={{
              width:  isLarge ? 56 : isMedium ? 36 : 24,
              height: isLarge ? 56 : isMedium ? 36 : 24,
              opacity: 1,
              borderColor: isLarge
                ? "rgba(212,175,55,0.5)"
                : isMedium
                ? "rgba(212,175,55,0.4)"
                : "rgba(62,42,32,0.18)",
              backgroundColor: isLarge
                ? "rgba(212,175,55,0.06)"
                : "rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            initial={{ opacity: 0, width: 24, height: 24 }}
            exit={{ opacity: 0, scale: 0.5 }}
          />

          {/* ── Gold glow bloom ── */}
          {(isLarge || isMedium) && (
            <motion.div
              className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
              style={{
                x: trailPos.x - (isLarge ? 40 : 26),
                y: trailPos.y - (isLarge ? 40 : 26),
                background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
              }}
              animate={{
                width:  isLarge ? 80 : 52,
                height: isLarge ? 80 : 52,
                opacity: 1,
              }}
              initial={{ opacity: 0, width: 0, height: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          )}

          {/* ── Inner dot — precise position, instant ── */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
            style={{
              x: pos.x - (isLarge ? 3 : 2),
              y: pos.y - (isLarge ? 3 : 2),
            }}
            animate={{
              width:  isLarge ? 6 : 4,
              height: isLarge ? 6 : 4,
              backgroundColor: isLarge || isMedium ? "#D4AF37" : "#3E2A20",
              opacity: 1,
            }}
            initial={{ opacity: 0, width: 4, height: 4, backgroundColor: "#3E2A20" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
