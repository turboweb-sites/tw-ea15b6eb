import { Phone, Star, Instagram } from 'lucide-react';
import HeroSection from './home/HeroSection';
import TrustBadges from './home/TrustBadges';
import ServicesSection from './home/ServicesSection';
import GallerySection from './home/GallerySection';
import AboutPreview from './home/AboutPreview';

const reviews = [
  {
    name: 'Michael R.',
    text: 'Best auto shop in Valley Village! They fixed my transmission issue at half the cost of the dealership. Honest, fast, and professional.',
    stars: 5,
  },
  {
    name: 'Sarah L.',
    text: 'Arena Auto Repair saved me hundreds on my brake repair. The team explained everything clearly and had my car ready the same day!',
    stars: 5,
  },
  {
    name: 'James T.',
    text: "I've been coming here for 2 years. They always go above and beyond. Can't recommend them enough.",
    stars: 5,
  },
  {
    name: 'Lisa M.',
    text: 'Great communication, fair pricing, and quality work. My go-to shop for anything auto related.',
    stars: 5,
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBadges />
      <ServicesSection />
      <GallerySection />
      <AboutPreview />

      {/* More Shop Photos — Full Width Strip */}
      <section className="py-16 bg-arena-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="text-center">
            <p className="text-arena-red font-heading text-sm tracking-[0.2em] uppercase mb-2">Inside the Shop</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              WHERE THE <span className="text-arena-yellow">MAGIC</span> HAPPENS
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-2">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/ea15b6eb-5da6-4b39-baca-bd3e13441568/a05f3bfe-2e2b-4c57-ac80-bcd583f1be0d/pexels_gratisography_474_1771661002985_r8ui28.webp"
              alt="Mechanic inspecting engine"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=375&fit=crop"
              alt="Wheel alignment service"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=375&fit=crop"
              alt="Car on hydraulic lift"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=500&h=375&fit=crop"
              alt="Auto repair tools and equipment"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-arena-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-arena-red font-heading text-sm tracking-[0.2em] uppercase mb-2">Testimonials</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              WHAT OUR <span className="text-arena-yellow">CUSTOMERS</span> SAY
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-arena-dark border border-white/5 rounded-xl p-6 hover:border-arena-yellow/20 transition-all duration-300"
              >
                <div className="flex mb-3">
                  {[...Array(review.stars)].map((_, j) => (
                    <Star key={j} size={16} className="text-arena-yellow fill-arena-yellow" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <p className="text-white font-semibold text-sm">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-arena-red relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-arena-yellow rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-arena-black rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            NEED A REPAIR?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Don't wait until it gets worse. Call Arena Auto Repair today for a free estimate and same-day service.
          </p>
          <a
            href="tel:8588000080"
            className="inline-flex items-center gap-3 bg-arena-black hover:bg-arena-yellow hover:text-arena-black text-white px-12 py-5 rounded-xl font-heading font-bold text-2xl tracking-wide transition-all duration-300 animate-pulse-glow"
          >
            <Phone size={26} />
            (858) 800-0080
          </a>
        </div>
      </section>
    </div>
  );
}