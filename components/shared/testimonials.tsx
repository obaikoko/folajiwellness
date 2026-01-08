import { MessageCircle, User } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Real Stories from Our Clients
        </h2>

        {/* Chat Container */}
        <div className="mt-16 space-y-8">
          {/* Message 1 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <User size={20} />
            </div>

            <div className="bg-white rounded-2xl rounded-tl-none px-6 py-4 shadow-md max-w-md">
              <p className="text-gray-700">
                Folaji Wellness completely changed my life with their
                personalized approach.
              </p>
              <span className="block mt-2 text-xs text-gray-400">
                — Sarah L.
              </span>
            </div>
          </div>

          {/* Message 2 (Right aligned) */}
          <div className="flex items-start gap-4 justify-end">
            <div className="bg-green-600 text-white rounded-2xl rounded-tr-none px-6 py-4 shadow-md max-w-md">
              <p>
                The team is incredibly knowledgeable and supportive. I felt
                heard and understood throughout my journey.
              </p>
              <span className="block mt-2 text-xs text-green-100">
                — Mike R.
              </span>
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white">
              <MessageCircle size={20} />
            </div>
          </div>

          {/* Message 3 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
              <User size={20} />
            </div>

            <div className="bg-white rounded-2xl rounded-tl-none px-6 py-4 shadow-md max-w-md">
              <p className="text-gray-700">
                I highly recommend their mental health services. Truly caring
                and professional.
              </p>
              <span className="block mt-2 text-xs text-gray-400">
                — Patricia K.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
