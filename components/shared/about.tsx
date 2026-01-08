import { Brain, Users, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          About Folaji Wellness
        </h2>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          We are a dedicated team of health professionals committed to holistic
          wellness. Our approach combines modern medicine with natural therapies
          to address the root causes of health concerns and promote long-term
          well-being.
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
  );
}
