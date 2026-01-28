import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, HeadphonesIcon, Award } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "NAFDAC Approved",
    desc: "Certified safe for consumption",
  },
  {
    icon: Award,
    title: "CAC Registered",
    desc: "Legitimate business registration",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    desc: "We deliver to all 36 states",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    desc: "Always here to help you",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                <feature.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h4 className="font-bold text-emerald-900 text-sm md:text-base">
                {feature.title}
              </h4>
              <p className="text-gray-500 text-xs md:text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Official Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-gray-100"
        >
          <p className="text-gray-500 font-medium">Verified & Approved By:</p>
          <div className="flex items-center gap-8">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6975cc7a8041aa10f06af7da/c812730c6_download.jpeg"
              alt="CAC Registered"
              className="h-16 md:h-20 object-contain"
            />
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6975cc7a8041aa10f06af7da/7a6727222_stroke4.jpg"
              alt="NAFDAC Approved"
              className="h-16 md:h-20 object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
