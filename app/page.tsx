"use client";

import HeroSection from "@/components/shared/hero-section";

import TestimonialsSection from "@/components/shared/testimonials";

import ProductDescription from "@/components/shared/product-description";
import ProductInfo from "@/components/shared/product-info";
import TrustBadges from "@/components/shared/trust-badges";
import Footer from "@/components/shared/footer";
import OrderForm from "@/components/shared/orderForm";
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductDescription />
      <TestimonialsSection />
      <ProductInfo />
      <TrustBadges />
      {/* <OrderForm /> */}
      <Footer />
    </div>
  );
}
