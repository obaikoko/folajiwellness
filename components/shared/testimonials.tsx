import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Play } from "lucide-react";

const testimonials = [
  {
    name: "Chief Adebayo Okonkwo",
    location: "Lagos, Nigeria",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    text: "After my stroke, I struggled with mobility and constant fatigue. A friend recommended Stroke Expeller Tea, and within 3 weeks of consistent use, I noticed remarkable improvement.",
    rating: 5,
  },
  {
    name: "Mrs. Folake Adeleke",
    location: "Ibadan, Nigeria",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face",
    text: "My husband suffered a mild stroke last year, and we were desperate for solutions. Stroke Expeller Tea helped improve his speech and mobility.",
    rating: 5,
  },
];

const videoTestimonials = [
  "_2RxoRvBBLA",
  "Q1kCnVGguqc",
  "n10vYu5Zrgk",
  "823HAnapJ48",
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-emerald-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-emerald-800 text-lime-300 rounded-full text-sm font-semibold mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real People, Real Results
          </h2>
          <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
            Watch and read how Stroke Expeller Tea is changing lives across
            Nigeria
          </p>
        </motion.div>

        {/* Text Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-2xl relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-lime-500 rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500"
                />
                <div>
                  <h4 className="font-bold text-emerald-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Video Testimonials 🎥
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoTestimonials.map((videoId, index) => (
              <motion.div
                key={videoId}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-black"
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="Customer Video Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* Play overlay (visual polish) */}
                {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-full">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div> */}
              </motion.div>
            ))}
          </div>

          {/* Channel link */}
          <div className="text-center mt-10">
            <a
              href="https://youtube.com/@folajiwellness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-lime-500 text-emerald-900 font-semibold rounded-full hover:bg-lime-400 transition"
            >
              Visit Folaji Wellness on YouTube →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
