"use client";

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import FounderMessage from "@/components/FounderMessage";
import FurnitureStory from "@/components/FurnitureStory";
import CuratedSpaces from "@/components/CuratedSpaces";
import ElectronicsStory from "@/components/ElectronicsStory";
import Legacy from "@/components/Legacy";
import Brands from "@/components/Brands";
import ShowroomGallery from "@/components/ShowroomGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <SmoothScroll>
        <main className="relative w-full overflow-x-hidden" style={{ backgroundColor: "#FAF9F5" }}>
          {/* 1 */ } <Hero />
          {/* 2 — Founder Story directly after Hero */ } <FounderMessage />
          {/* 3 */ } <FurnitureStory />
          {/* 4 */ } <CuratedSpaces />
          {/* 5 */ } <ElectronicsStory />
          {/* 6 */ } <Legacy />
          {/* 7 */ } <Brands />
          {/* 8 */ } <ShowroomGallery />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
