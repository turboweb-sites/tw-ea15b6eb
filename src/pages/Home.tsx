import { Link } from 'wouter';
import {
  Phone, Star, Shield, Clock, CheckCircle, MapPin, ArrowRight,
  Wrench, Zap, Thermometer, Cog, Car, Search, Disc, Settings,
  Instagram, Droplets, Camera
} from 'lucide-react';

const services = [
  { icon: <Droplets />, name: 'Oil Change', path: '/services/oil-change', desc: 'Full synthetic & conventional oil changes with multi-point inspection.' },
  { icon: <Disc />, name: 'Brake Repair', path: '/services/brake-repair', desc: 'Pads, rotors, calipers, brake fluid flush — stop safely every time.' },
  { icon: <Wrench />, name: 'Engine Repair', path: '/services/engine-repair', desc: 'From minor fixes to major overhauls. All makes and models.' },
  { icon: <Cog />, name: 'Transmission', path: '/services/transmission', desc: 'Manual & automatic transmission repair, rebuild, and fluid service.' },
  { icon: <Thermometer />, name: 'A/C Repair', path: '/services/ac-repair', desc: 'Stay cool in San Diego. Complete A/C diagnostics and repair.' },
  { icon: <Search />, name: 'Diagnostics', path: '/services/diagnostics', desc: 'State-of-the-art computer diagnostics for check engine lights.' },
  { icon: <Car />, name: 'Tire Service', path: '/services/tire-service', desc: 'Tire rotation, balancing, alignment, and replacement services.' },
  { icon: <Zap />, name: 'Electrical', path: '/services/electrical', desc: 'Battery, alternator, starter, wiring — all electrical issues solved.' },
  { icon: <Settings />, name: 'Suspension', path: '/services/suspension', desc: 'Shocks, struts, ball joints, tie rods — smooth rides guaranteed.' },
  { icon: <Shield />, name: 'Pre-Purchase Inspection', path: '/services/pre-purchase-inspection', desc: 'Know what you\'re buying. Comprehensive vehicle inspection report.' },
];

const reviews = [
  {
    name: 'Michael R.',
    text: 'Best auto shop in San Diego! They fixed my transmission issue at half the cost of the dealership. Honest, fast, and professional.',
    stars: 5,
  },
  {
    name: 'Sarah L.',
    text: 'Arena Auto Repair saved me hundreds on my brake repair. The team explained everything clearly and had my car ready the same day!',
    stars: 5,
  },
  {
    name: 'James T.',
    text: 'I\'ve been coming here for 2 years. They always go above and beyond. Can\'t recommend them enough.',
    stars: 5,
  },
  {
    name: 'Lisa M.',
    text: 'Great communication, fair pricing, and quality work. My go-to shop for anything auto related.',
    stars: 5,
  },
];

const shopGallery = [
  {
    src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=600&fit=crop',
    alt: 'Engine bay repair work',
    caption: 'Engine Diagnostics',
  },
  {
    src: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&h=600&fit=crop',
    alt: 'Mechanic working under the hood',
    caption: 'Under the Hood',
  },
  {
    src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=600&fit=crop',
    alt: 'Brake rotor and caliper service',
    caption: 'Brake Service',
  },
  {
    src: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&h=600&fit=crop',
    alt: 'Professional auto repair tools',
    caption: 'Professional Tools',
  },
  {
    src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=600&fit=crop',
    alt: 'Car on lift in shop',
    caption: 'Full Inspections',
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=600&fit=crop',
    alt: 'Finished vehicle ready for pickup',
    caption: 'Ready for You',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
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

        {/* Scrolling indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-arena-yellow rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-arena-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Shield size={28} />, label: 'Licensed & Insured', color: 'text-arena-yellow' },
              { icon: <Star size={28} />, label: '5-Star Reviews', color: 'text-arena-yellow' },
              { icon: <Clock size={28} />, label: 'Same Day Service', color: 'text-arena-red' },
              { icon: <CheckCircle size={28} />, label: 'All Makes & Models', color: 'text-arena-red' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 justify-center py-3">
                <span className={badge.color}>{badge.icon}</span>
                <span className="text-white text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-arena-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-arena-red font-heading text-sm tracking-[0.2em] uppercase mb-2">What We Do</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              OUR <span className="text-arena-yellow">SERVICES</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From routine maintenance to complex repairs, our experienced technicians handle it all. Every service comes with a quality guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.path} href={service.path}>
                <div className="group bg-arena-dark border border-white/5 rounded-xl p-6 hover:border-arena-yellow/40 hover:bg-arena-gray transition-all duration-300 cursor-pointer h-full">
                  <div className="w-14 h-14 bg-arena-red/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-arena-yellow/20 transition-colors text-arena-red group-hover:text-arena-yellow">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2 group-hover:text-arena-yellow transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <span className="inline-flex items-center gap-1 text-arena-yellow text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Gallery — From Our Instagram */}
      <section className="py-20 bg-arena-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-arena-red font-heading text-sm tracking-[0.2em] uppercase mb-2">From Our Shop</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              SEE OUR <span className="text-arena-yellow">WORK</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Check out photos from Arena Auto Repair — real work, real results. Follow us on Instagram for more.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {shopGallery.map((photo, i) => (
              <a
                key={i}
                href="https://www.instagram.com/arenaautorepair?igsh=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arena-black/80 via-arena-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-heading font-semibold text-sm">{photo.caption}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Instagram size={13} className="text-arena-yellow" />
                    <span className="text-arena-yellow text-xs">@arenaautorepair</span>
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-arena-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram size={14} className="text-white" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/arenaautorepair?igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 px-8 py-4 rounded-xl transition-opacity font-heading font-semibold text-white tracking-wide"
            >
              <Instagram size={22} />
              FOLLOW @ARENAAUTOREPAIR
            </a>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-arena-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/ea15b6eb-5da6-4b39-baca-bd3e13441568/ab25648c-bde1-428d-9d7f-93bb5e151739/pexels_gratisography_474_1771660888720_3k74qp.webp"
                alt="Arena Auto Repair team working"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-arena-red p-6 rounded-xl shadow-2xl hidden sm:block">
                <p className="font-heading text-3xl font-bold text-white">10+</p>
                <p className="text-white/80 text-sm">Years Experience</p>
              </div>
            </div>
            <div>
              <p className="text-arena-red font-heading text-sm tracking-[0.2em] uppercase mb-2">About Us</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                HONEST SERVICE.<br />
                <span className="text-arena-yellow">FAIR PRICES.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Arena Auto Repair has been proudly serving the San Diego community for over a decade. Our ASE-certified technicians combine old-school knowledge with the latest diagnostic technology to keep your vehicle running at its best.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We believe in transparent pricing, honest communication, and treating every car like it's our own. Whether it's a quick oil change or a major engine rebuild — we've got you covered.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'ASE-Certified Technicians',
                  'All Makes & Models Welcome',
                  'Transparent Pricing — No Hidden Fees',
                  'Same Day Service Available',
                  'Warranty on Parts & Labor',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={18} className="text-arena-yellow shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <span className="inline-flex items-center gap-2 bg-arena-yellow hover:bg-arena-red text-arena-black hover:text-white px-8 py-4 rounded-lg font-heading font-semibold tracking-wide transition-all duration-300 cursor-pointer">
                  LEARN MORE ABOUT US <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

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