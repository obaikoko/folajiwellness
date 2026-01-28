import React from "react";
import { motion } from "framer-motion";
import { Leaf, Clock, CheckCircle, Package } from "lucide-react";

export default function ProductInfo() {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            PRODUCT DETAILS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
            Everything You Need to Know
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6975cc7a8041aa10f06af7da/f70f853a5_stroke5.jpg"
              alt="Stroke Expeller Tea Single Pack"
              className="rounded-2xl shadow-xl max-w-md w-full"
            />
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Ingredients */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">
                  Natural Ingredients
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong>
                  Moringa, Oleifera, Chenopodium, Murale, Zingiber, Officinale,
                  Colocynthis, Citrulls
                </strong>{" "}
                - A powerful blend of time-tested herbs carefully selected for
                their healing properties.
              </p>
            </div>

            {/* Usage */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-lime-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">
                  How to Use
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Add <strong>1 teaspoon</strong> into a tea cup of hot water.
                Take <strong>first in the morning</strong> and{" "}
                <strong>at night</strong> for best results. Consistent daily use
                is recommended for optimal benefits.
              </p>
            </div>

            {/* Benefits List */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900">
                  Key Benefits
                </h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Supports stroke recovery and prevention",
                  "Regulates blood pressure naturally",
                  "Improves blood circulation",
                  "Boosts energy and reduces fatigue",
                  "Strengthens the immune system",
                  "Promotes overall cardiovascular health",
                ].map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* NAFDAC Info */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-6 shadow-lg text-white">
              <div className="flex items-center gap-3 mb-3">
                <Package className="w-6 h-6" />
                <h3 className="text-lg font-bold">Product Registration</h3>
              </div>
              <p className="text-emerald-100">
                <strong>NAFDAC REG. NO:</strong> A7-2098L
                <br />
                <strong>Manufactured by:</strong> GUDU GUDU HERBAL WORLDWIDE
                ENT.
                <br />
                <strong>Marketed by:</strong> FOLAJI WELLNESS
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
