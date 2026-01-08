import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";

export default function FooterSection() {
  return (
    <section id="contact" className="py-20 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="mt-6 text-xl opacity-90">
            Reach out to us and stay connected through our social platforms.
          </p>

          <div className="mt-8 space-y-4">
            {/* Phone */}
            <a
              href="tel:+2349707105627"
              className="flex items-center gap-4 hover:opacity-80 transition"
            >
              <Phone className="h-6 w-6" />
              <span>+234 907 710 5627</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@folajiwellness.com"
              className="flex items-center gap-4 hover:opacity-80 transition"
            >
              <Mail className="h-6 w-6" />
              <span>info@folajiwellness.com</span>
            </a>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6">
            Follow Us on Social Media
          </h3>

          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <Facebook />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <Instagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <Twitter />
            </a>
          </div>

          <p className="mt-6 text-sm opacity-80">
            Follow us for wellness tips, updates, and success stories.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center text-sm opacity-70">
        © 2026 Folaji Wellness Services. All rights reserved.
      </div>
    </section>
  );
}
