"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/showroom/hero-showroom.png" 
          fill 
          className="object-cover object-center" 
          alt="Mahaveer Electronics & Furniture Premium Showroom" 
          quality={100} 
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Hero Content - anchored to bottom left */}
      <div className="absolute bottom-16 left-12 z-20 max-w-xl">
        <h1 className="font-display text-5xl font-bold text-white leading-tight mb-6">
          Furniture.<br />
          Electronics.<br />
          Interior Excellence.<br />
          <span className="text-[#D4AF37]">All Under One Roof.</span>
        </h1>

        {/* Trust Stats */}
        <div className="flex gap-8 mb-8">
          <div><p className="text-[#D4AF37] text-2xl font-bold">13+</p><p className="text-white/70 text-xs uppercase tracking-widest">Years of Excellence</p></div>
          <div><p className="text-[#D4AF37] text-2xl font-bold">500+</p><p className="text-white/70 text-xs uppercase tracking-widest">Premium Brands</p></div>
          <div><p className="text-[#D4AF37] text-2xl font-bold">5000+</p><p className="text-white/70 text-xs uppercase tracking-widest">Happy Homes</p></div>
        </div>

        {/* CTAs */}
        <div className="flex gap-4">
          <button className="bg-[#D4AF37] text-[#2E221B] px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-widest">Visit Showroom</button>
          <button className="border border-white text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-widest">Collection Coming Soon</button>
        </div>
      </div>
    </section>
  );
}
