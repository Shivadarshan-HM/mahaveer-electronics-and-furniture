"use client";

/* ─────────────────────────────────────────────────────────
   SECTION 3 — Premium Brands Marquee
   Spec: infinite horizontal scroll, pauses on hover, NO hover-to-explore
   ───────────────────────────────────────────────────────── */

const rowOne = [
  "Sony", "Samsung", "LG", "Bosch", "IFB", "Whirlpool", "Godrej", "Panasonic",
  "Vivo", "Apple", "OnePlus", "Dell", "HP", "Lenovo", "Haier", "Voltas",
];

const rowTwo = [
  "Philips", "Hitachi", "TCL", "Hisense", "Bajaj", "Havells", "Crompton",
  "Orient", "Butterfly", "Prestige", "Pigeon", "Milton", "Realme", "Nokia", "Asus", "Acer",
];

/* Gold diamond separator */
function Diamond() {
  return (
    <span
      className="inline-block w-[5px] h-[5px] rounded-sm bg-[#D4AF37] rotate-45 mx-9 shrink-0 opacity-50"
      aria-hidden
    />
  );
}

/* Pure CSS marquee — animationPlayState toggled on group hover */
function MarqueeRow({
  brands,
  direction = "left",
  duration = 55,
}: {
  brands: string[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const doubled = [...brands, ...brands];

  return (
    <div
      className="relative w-full overflow-hidden group"
      /* pause / resume via CSS custom property */
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #FAF9F5, transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #FAF9F5, transparent)" }}
      />

      <div
        className="flex items-center w-max"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          animationPlayState: "var(--play-state, running)",
        }}
      >
        {doubled.map((name, i) => (
          <span key={`${name}-${i}`} className="inline-flex items-center">
            {/* No hover interaction — pure display only */}
            <span
              className="font-display font-bold uppercase tracking-[0.12em] text-[#8B8178]/60 select-none cursor-default"
              style={{
                fontSize: "clamp(26px, 2.8vw, 44px)",
                lineHeight: 1,
              }}
            >
              {name}
            </span>
            <Diamond />
          </span>
        ))}
      </div>

      {/* CSS hover pause via custom property, restricted to hover-capable devices */}
      <style jsx>{`
        @media (hover: hover) and (pointer: fine) {
          .group:hover > div[style*="animation"] {
            --play-state: paused;
          }
        }
      `}</style>
    </div>
  );
}

export default function Brands() {
  return (
    <section
      id="brands"
      className="w-full bg-[#FAF9F5] py-16 md:py-24 overflow-hidden"
      style={{ borderTop: "1px solid rgba(139,129,120,0.12)", borderBottom: "1px solid rgba(139,129,120,0.12)" }}
    >
      {/* Section header */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 mb-12">
        <span className="font-display text-[10px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase mb-4 block">
          03 / Brand Partners
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-display font-light text-[48px] md:text-[56px] lg:text-[64px] tracking-tight text-[#2E221B] leading-[1.1]">
            500+ Premium Brands.{" "}
            <span className="font-medium italic text-[#D4AF37]">One Destination.</span>
          </h2>
          <p className="text-[#8B8178] font-light text-[18px] md:text-[20px] leading-[1.6] max-w-xs shrink-0">
            Every brand hand-selected for quality, innovation, and lasting value.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#2E221B]/6 mb-10" />

      {/* Row 1 — scrolls left */}
      <div className="mb-8">
        <MarqueeRow brands={rowOne} direction="left" duration={60} />
      </div>

      {/* Row 2 — scrolls right */}
      <MarqueeRow brands={rowTwo} direction="right" duration={70} />

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#2E221B]/6 mt-10" />

      {/* Keyframes injected globally */}
      <style jsx global>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
