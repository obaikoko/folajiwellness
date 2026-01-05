"use client";

import { useState } from "react";
import {
  Leaf,
  Heart,
  Brain,
  Users,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-white text-gray-800">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">
                Folaji Wellness
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-emerald-600 transition"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-emerald-600 transition"
              >
                About
              </a>
              <a
                href="#team"
                className="text-gray-700 hover:text-emerald-600 transition"
              >
                Team
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-emerald-600 transition"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-emerald-600 transition"
              >
                Testimonials
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-emerald-600 transition"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-emerald-600 transition"
              >
                Contact
              </a>
            </div>
            <button className="hidden md:block bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition">
              Book Appointment
            </button>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-white px-6 py-4 flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-emerald-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-emerald-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#team"
                className="text-gray-700 hover:text-emerald-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Team
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-emerald-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-emerald-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-emerald-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-emerald-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition">
                Book Appointment
              </button>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="pt-24 pb-20 bg-gradient-to-br from-emerald-50 to-teal-50"
        >
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Journey to{" "}
                <span className="text-emerald-600">Optimal Wellness</span>{" "}
                Starts Here
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                At Folaji Wellness Services, we provide personalized,
                professional health and wellness solutions to help you live your
                healthiest life.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition flex items-center justify-center gap-2">
                  Get Started <ChevronRight className="h-5 w-5" />
                </button>
                <button className="border border-emerald-600 text-emerald-600 px-8 py-4 rounded-full hover:bg-emerald-50 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://thumbs.dreamstime.com/b/relaxing-spa-interior-serene-lighting-lush-greenery-modern-wellness-center-setting-tranquil-room-features-361495577.jpg"
                alt="Serene wellness center"
                className="rounded-3xl object-cover h-96 w-full"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              About Folaji Wellness
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              We are a dedicated team of health professionals committed to
              holistic wellness. Our approach combines modern medicine with
              natural therapies to address the root causes of health concerns
              and promote long-term well-being.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-emerald-50 rounded-2xl">
                <Brain className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold">Holistic Care</h3>
                <p className="mt-4 text-gray-600">
                  Treating mind, body, and spirit as one.
                </p>
              </div>
              <div className="p-8 bg-teal-50 rounded-2xl">
                <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold">Personalized Plans</h3>
                <p className="mt-4 text-gray-600">
                  Tailored solutions for your unique needs.
                </p>
              </div>
              <div className="p-8 bg-emerald-50 rounded-2xl">
                <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold">Expert Team</h3>
                <p className="mt-4 text-gray-600">
                  Qualified professionals you can trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900">
              Meet Our Team
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <img
                  src="https://media.istockphoto.com/id/1373258655/photo/happy-nurse-at-hospital.jpg?s=612x612&w=0&k=20&c=mt8_LDMnWZHxAVm64SjmqBqbsTnrmDI3DlCq-jv3afA="
                  alt="Dr. Jane Doe"
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <h3 className="mt-4 text-2xl font-semibold">Dr. Jane Doe</h3>
                <p className="text-gray-600">Lead Physician</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <img
                  src="https://t3.ftcdn.net/jpg/05/81/92/72/360_F_581927254_eKyEMkCrMrafhPv7glrcMUtj8q7VMm4N.jpg"
                  alt="John Smith"
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <h3 className="mt-4 text-2xl font-semibold">John Smith</h3>
                <p className="text-gray-600">Nutrition Specialist</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <img
                  src="https://cbx-prod.b-cdn.net/COLOURBOX60989938.jpg?width=800&height=800&quality=70"
                  alt="Emily Johnson"
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <h3 className="mt-4 text-2xl font-semibold">Emily Johnson</h3>
                <p className="text-gray-600">Mental Health Therapist</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900">
              Our Services
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <img
                  src="https://docsmedicalgroup.com/docsurgentcare/wp-content/uploads/sites/2/2023/08/young-female-professional-doctor-physician-consulting-patient-talking-adult-man-client-medical-checkup-visit-diseases-treatment-medical-health-care-concept_1.jpg"
                  alt="General Wellness Consultations"
                  className="h-40 w-full object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold">
                  General Wellness Consultations
                </h3>
                <p className="mt-4 text-gray-600">
                  Comprehensive health assessments and personalized wellness
                  plans.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <img
                  src="https://cchmainsitev2dev.blob.core.windows.net/container1/wp-content/uploads/2021/02/iStock-924858812.jpg"
                  alt="Nutritional Guidance"
                  className="h-40 w-full object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold">Nutritional Guidance</h3>
                <p className="mt-4 text-gray-600">
                  Evidence-based nutrition counseling for optimal health.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                <img
                  src="https://camouflageclicks.com/assets/uploads/blog/4192256.jpg"
                  alt="Mental Health Support"
                  className="h-40 w-full object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-semibold">
                  Mental Health Support
                </h3>
                <p className="mt-4 text-gray-600">
                  Therapy and mindfulness practices for emotional balance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900">
              What Our Clients Say
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-600 italic">
                  "Folaji Wellness changed my life with their personalized
                  approach."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src="https://www.shutterstock.com/image-photo/happy-beautiful-head-shot-portrait-260nw-2595657701.jpg"
                    alt="Sarah L."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Sarah L.</h4>
                    <p className="text-sm text-gray-500">Client</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-600 italic">
                  "The team is incredibly knowledgeable and supportive."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src="https://media.gettyimages.com/id/1961053928/photo/testimonial-portrait-of-a-handsome-mature-man.jpg?s=612x612&w=gi&k=20&c=nMHw_J1ISbFUCSMtcjcDLG7FkLBQY8VVrxwpHDDjAcc="
                    alt="Mike R."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Mike R.</h4>
                    <p className="text-sm text-gray-500">Client</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-600 italic">
                  "Highly recommend their mental health services!"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src="https://media.gettyimages.com/id/475566362/photo/happy-senior-woman-holds-prescription-medication-doctor-patients-background.jpg?s=612x612&w=gi&k=20&c=BubMfrpbBNKLyHfZxWVft2cM36l8BSz_d9LcYykpFAA="
                    alt="Patricia K."
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">Patricia K.</h4>
                    <p className="text-sm text-gray-500">Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900">
              Latest Blog Posts
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src="https://ignitefitness.net/wp-content/uploads/2025/11/thumbnail-Postpartum-Fitness-Program-Safe-Online-Training-for-New-Moms-1024x704.jpg"
                  alt="The Benefits of Regular Exercise"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">
                    The Benefits of Regular Exercise
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Discover how incorporating exercise into your routine can
                    improve your overall health.
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-emerald-600 hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src="https://apexbg.com/wp-content/uploads/2023/02/Apex-WW-Thumbnail.Template_02_08_23.png"
                  alt="Nutrition Tips for Busy Professionals"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">
                    Nutrition Tips for Busy Professionals
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Quick and easy ways to maintain a healthy diet amidst a
                    hectic schedule.
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-emerald-600 hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src="https://detailed.com/images/mrs-mindfulness.jpg"
                  alt="Mindfulness Practices for Daily Life"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold">
                    Mindfulness Practices for Daily Life
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Simple techniques to incorporate mindfulness and reduce
                    stress.
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-emerald-600 hover:underline"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <section id="contact" className="py-20 bg-emerald-900 text-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold">Get in Touch</h2>
              <p className="mt-6 text-xl opacity-90">
                Ready to start your wellness journey? Contact us today for a
                consultation.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6" />
                  <span>info@folajiwellness.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6" />
                  <span>123 Wellness Street, Health City, HC 12345</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">
                Book Your Appointment
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-lg bg-white/20 placeholder-white/70"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-lg bg-white/20 placeholder-white/70"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-6 py-4 rounded-lg bg-white/20 placeholder-white/70"
                ></textarea>
                <button
                  type="submit"
                  className="bg-white text-emerald-900 px-8 py-4 rounded-full hover:bg-gray-100 transition font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 text-center text-sm opacity-70">
            © 2026 Folaji Wellness Services. All rights reserved.
          </div>
        </section>
      </div>
    </>
  );
}
