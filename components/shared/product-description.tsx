import React from "react";
import { motion } from "framer-motion";
import { Heart, Leaf, Shield, Zap, Activity, Brain } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Heart Health",
    desc: "Supports cardiovascular function and blood circulation",
  },
  {
    icon: Brain,
    title: "Brain Recovery",
    desc: "Aids in neurological healing and mental clarity",
  },
  {
    icon: Activity,
    title: "Blood Pressure",
    desc: "Helps regulate and maintain healthy blood pressure",
  },
  {
    icon: Zap,
    title: "Energy Boost",
    desc: "Restores vitality and combats fatigue naturally",
  },
  {
    icon: Shield,
    title: "Immune Support",
    desc: "Strengthens your body's natural defenses",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "Made with pure, organic herbal ingredients",
  },
];

export default function ProductDescription() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            NATURE'S HEALING POWER
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">
            Why Stroke Expeller Tea?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Stroke Expeller Tea is a carefully crafted herbal blend designed to
            support stroke recovery and overall wellness. Made with premium
            natural ingredients like{" "}
            <strong>
              Moringa, Oleifera, Chenopodium, Murale, Zingiber, Officinale,
              Colocynthis, and Citrulls
            </strong>
            , this powerful formula helps restore strength, improve circulation,
            and promote natural healing.
          </p>
        </motion.div>

        {/* Product showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6975cc7a8041aa10f06af7da/4def1136e_stroke2.jpg"
              alt="Causes of Stroke - Stroke Expeller Tea"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-900">
              Address the Root Causes of Stroke
            </h3>
            <p className="text-gray-600 text-lg">
              Stroke Expeller Tea targets multiple risk factors including:
            </p>
            <ul className="space-y-3">
              {[
                "High Blood Pressure",
                "Blocked Blood Vessels",
                "High Cholesterol",
                "Poor Blood Circulation",
                "Stress & Fatigue",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-lime-500 rounded-full" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
