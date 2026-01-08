import { HeartPulse, Brain, Activity, ShieldCheck } from "lucide-react";

export default function StrokeCareSection() {
  return (
    <section id="stroke-care" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Approach to Stroke Care
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We focus on prevention, treatment, and recovery using natural,
            supportive methods designed to restore health and improve quality of
            life.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <ShieldCheck />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Stroke Prevention
            </h3>
            <p className="mt-3 text-gray-600">
              Helping reduce major risk factors such as high blood pressure,
              poor circulation, and toxin buildup.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Brain />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Brain Support
            </h3>
            <p className="mt-3 text-gray-600">
              Supporting brain function and recovery after stroke through
              targeted herbal care.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Activity />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Recovery & Strength
            </h3>
            <p className="mt-3 text-gray-600">
              Aiding physical strength, balance, and overall wellness during
              recovery.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <HeartPulse />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Holistic Care
            </h3>
            <p className="mt-3 text-gray-600">
              Treating the whole body, not just symptoms, to promote lasting
              health and well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
