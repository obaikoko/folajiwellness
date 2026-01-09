export default function ProductSection() {
  return (
    <section id="product" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            Stroke Expeller Tea
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A natural herbal solution designed to support stroke prevention,
            recovery, and overall wellness.
          </p>
        </div>

        {/* Product Card */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Image Area */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-[420px] bg-white rounded-3xl shadow-md flex items-center justify-center">
              {/* Replace src with your actual product image */}
              <img
                src="/images/stroke-expeller.jpg"
                alt="Stroke Expeller Tea"
                className="object-contain h-full"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900">
              Take Control of Your Health Naturally
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Stroke is one of the leading causes of death and disability
              worldwide. Stroke Expeller Tea is carefully formulated with a
              unique blend of herbs to help purify the body, reduce stroke risk,
              and support strength and recovery.
            </p>

            {/* Benefits */}
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Helps reduce risk factors associated with stroke</li>
              <li>• Supports blood circulation and body purification</li>
              <li>• Aids recovery and restoration of strength</li>
              <li>• 100% natural herbal formulation</li>
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://docs.google.com/forms/d/1tUYD56juD9r6ZrTSnVWD3lvBBp2H8G4Oo2UUP_gNkAk/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition"
              >
                Order Stroke Expeller Tea
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
