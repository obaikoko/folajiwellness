import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToOrder = () => {
    document
      .getElementById("order-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-700 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-300 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6975cc7a8041aa10f06af7da/381047c22_download.png"
            alt="Folaji Wellness Logo"
            className="h-20 md:h-28 object-contain"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center max-w-4xl mx-auto leading-tight mb-6"
        >
          Regain Your Strength, <br />
          <span className="text-lime-300">Restore Your Health</span> with Stroke
          Expeller Tea
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-emerald-100 text-lg md:text-xl text-center max-w-2xl mx-auto mb-10"
        >
          100% Natural Herbal Formula • NAFDAC Approved • Trusted by Thousands
        </motion.p>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-lime-400 rounded-3xl blur-2xl opacity-30 transform rotate-3" />
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6975cc7a8041aa10f06af7da/cb10bbb64_stroke1.jpg"
              alt="Stroke Expeller Tea Product"
              className="relative z-10 w-full max-w-lg md:max-w-xl rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center"
        >
          <Button
            onClick={scrollToOrder}
            size="lg"
            className="bg-lime-500 hover:bg-lime-400 text-emerald-900 font-bold text-lg md:text-xl px-10 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Order Now & Save Up To ₦14,000
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8 text-lime-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
