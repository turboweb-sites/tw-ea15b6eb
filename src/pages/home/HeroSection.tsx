import { Link } from 'wouter';
import { Phone, Star, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/ea15b6eb-5da6-4b39-baca-bd3e13441568/5c846c2e-7f7a-4fa3-b802-1b87c6e935e0/pexels_lynxexotics_4756890_1771661410308_ibo3j7.webp"
          alt="Arena Auto Repair shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-arena-black via-arena-black/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-arena-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-arena-yellow fill-arena-yellow" />
              ))}
            </div>
            <span className="text-gray-400 text-sm">5.0 Rated — Trusted by 500+ Customers</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-arena-yellow">Arena</span>
            <br />
            <span className="text-arena-yellow">Auto Repair</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl mb-4 max-w-xl leading-relaxed">
            Professional auto repair services for all makes and models. Honest work, fair prices, and a commitment to keeping you safe on the road.
          </p>

          <div className="flex items-center gap-2 text-gray-400 mb-8">
            <MapPin size={18} className="text-arena-red" />
            <span>5950 Laurel Canyon Blvd, Ste B Valley Village CA 91607</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8588000080"
              className="inline-flex items-center justify-center gap-3 bg-arena-red hover:bg-arena-yellow hover:text-arena-black text-white px-10 py-5 rounded-xl font-heading font-bold text-xl tracking-wide transition-all duration-300 animate-pulse-glow"
            >
              <Phone size={22} />
              (858) 800-0080
            </a>
            <Link href="/contact">
              <span className="inline-flex items-center justify-center gap-2 border-2 border-arena-yellow text-arena-yellow hover:bg-arena-yellow hover:text-arena-black px-10 py-5 rounded-xl font-heading font-bold text-lg tracking-wide transition-all duration-300 cursor-pointer">
                FREE ESTIMATE
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-arena-yellow rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}