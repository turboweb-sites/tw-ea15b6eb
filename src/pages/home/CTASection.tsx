import { Phone } from 'lucide-react';

export default function CTASection() {
  return (
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
  );
}