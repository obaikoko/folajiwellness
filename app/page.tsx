"use client";

import HeroSection from "@/components/shared/hero-section";
import Navbar from "@/components/shared/navbar";
import AboutSection from "@/components/shared/about";
import TeamSection from "@/components/shared/team";
import TestimonialsSection from "@/components/shared/testimonials";
import BlogSection from "@/components/shared/blog";
import FooterSection from "@/components/shared/footer";
import ProductSection from "@/components/shared/services";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-800">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <ProductSection />
        <TestimonialsSection />
        <BlogSection />
        <FooterSection />
      </div>
    </>
  );
}
