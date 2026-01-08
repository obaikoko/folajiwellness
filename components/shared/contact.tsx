import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="mt-6 text-xl opacity-90">
            Ready to start your wellness journey? Contact us today.
          </p>

          <div className="mt-8 space-y-4">
            <ContactItem icon={<Phone />} text="+1 (555) 123-4567" />
            <ContactItem icon={<Mail />} text="info@folajiwellness.com" />
            <ContactItem
              icon={<MapPin />}
              text="123 Wellness Street, Health City"
            />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6">Book Your Appointment</h3>

          <form className="space-y-4">
            <input
              className="w-full px-6 py-4 rounded-lg bg-white/20 placeholder-white/70"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full px-6 py-4 rounded-lg bg-white/20 placeholder-white/70"
              placeholder="Your Email"
            />
            <textarea
              rows={4}
              className="w-full px-6 py-4 rounded-lg bg-white/20 placeholder-white/70"
              placeholder="Message"
            />
            <button className="bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-sm opacity-70">
        © 2026 Folaji Wellness Services. All rights reserved.
      </div>
    </section>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <span>{text}</span>
    </div>
  );
}
