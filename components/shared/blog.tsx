"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function EducationSection() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  const openModal = (text: string) => {
    setContent(text);
    setOpen(true);
  };

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Stroke Education & Wellness Tips
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold">
              Early Warning Signs of Stroke
            </h3>
            <p className="mt-4 text-gray-600">
              Knowing the early signs of stroke can save lives.
            </p>
            <button
              onClick={() =>
                openModal(
                  "Stroke warning signs include sudden weakness on one side of the body, difficulty speaking, facial drooping, loss of balance, and sudden severe headache. Early response is critical for survival and recovery."
                )
              }
              className="mt-4 text-emerald-600 hover:underline font-medium"
            >
              Read More
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold">
              Natural Ways to Reduce Stroke Risk
            </h3>
            <p className="mt-4 text-gray-600">
              Lifestyle and herbal approaches to prevention.
            </p>
            <button
              onClick={() =>
                openModal(
                  "Managing blood pressure, maintaining healthy circulation, reducing toxins, and supporting the heart with natural herbs can significantly reduce stroke risk."
                )
              }
              className="mt-4 text-emerald-600 hover:underline font-medium"
            >
              Read More
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold">
              Supporting Recovery After Stroke
            </h3>
            <p className="mt-4 text-gray-600">
              Recovery requires consistency and care.
            </p>
            <button
              onClick={() =>
                openModal(
                  "Post-stroke recovery focuses on restoring strength, improving circulation, and supporting brain function. Natural treatments may help enhance recovery alongside medical care."
                )
              }
              className="mt-4 text-emerald-600 hover:underline font-medium"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-lg w-full rounded-2xl p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X />
            </button>

            <h3 className="text-2xl font-semibold mb-4">Stroke Education</h3>

            <p className="text-gray-700 leading-relaxed">{content}</p>
            <p className="mt-4 text-xs text-red-500">
              This information is for educational purposes only and does not
              replace professional medical advice.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
