import { ChevronRight } from "lucide-react";

const GET_STARTED =
  "https://wa.me/2349077105627?text=Hello%20I%20want%20to%20get%20started%20with%20your%20stroke%20treatment";

const LEARN_MORE =
  "https://wa.me/2349077105627?text=Hello%20I%20would%20like%20to%20learn%20more%20about%20your%20services";


export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-24 pb-20 bg-gradient-to-br from-emerald-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Your Journey to{" "}
            <span className="text-emerald-600">Optimal Wellness</span> Starts
            Here
          </h1>

          <p className="mt-6 text-xl text-gray-600">
            At Folaji Wellness Services, we provide personalized, professional
            health and wellness solutions to help you live your healthiest life.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Get Started */}
            <a
              href={GET_STARTED}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition flex items-center justify-center gap-2"
            >
              Get Started <ChevronRight className="h-5 w-5" />
            </a>

            {/* Learn More */}
            <a
              href={LEARN_MORE}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-emerald-600 text-emerald-600 px-8 py-4 rounded-full hover:bg-emerald-50 transition text-center"
            >
              Learn More
            </a>
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
  );
}
