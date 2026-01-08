import { ChevronRight } from "lucide-react";

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
  );
}
