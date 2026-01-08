import { Leaf, Menu, X } from 'lucide-react';
import React, { useState } from 'react'

export const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false);
  return (
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
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
  );
}
