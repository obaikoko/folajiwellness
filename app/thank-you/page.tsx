'use client'

import { motion } from "framer-motion";
import { CheckCircle, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ThankYou() {
  const whatsappNumber = "+2349077105627";
  const whatsappMessage = encodeURIComponent(
    "Hello! I just placed an order for Stroke Expeller Tea and would like to confirm my order.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-lime-500 p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle className="w-14 h-14 text-emerald-500" />
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-3xl font-bold text-emerald-900 mb-4">
                Order Placed Successfully!
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Thank you for your order. Our team will reach out to you shortly
                to schedule your delivery.
              </p>

              {/* WhatsApp Contact Card */}
              <div className="bg-emerald-50 rounded-2xl p-6 mb-6">
                <p className="text-emerald-800 font-medium mb-4">
                  Want faster response? Contact us directly on WhatsApp:
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <p className="text-emerald-700 text-sm mt-3">
                  +234 907 710 5627
                </p>
              </div>

              {/* Phone Contact */}
              <div className="flex items-center justify-center gap-3 text-gray-600 mb-8">
                <Phone className="w-5 h-5 text-emerald-600" />
                <span>You can also call us at: </span>
                <a
                  href="tel:+2349077105627"
                  className="font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  +234 907 710 5627
                </a>
              </div>

              {/* Back to Home */}
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-4 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Folaji Wellness. NAFDAC REG. NO:
              A7-2098L
            </p>
          </div>
        </div>

        {/* Logo */}
        <div className="mt-8 flex justify-center">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6975cc7a8041aa10f06af7da/381047c22_download.png"
            alt="Folaji Wellness"
            className="h-16"
          />
        </div>
      </motion.div>
    </div>
  );
}
