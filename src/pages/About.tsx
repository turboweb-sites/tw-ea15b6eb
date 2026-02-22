import { Link } from 'wouter';
import { Phone, Star, Shield, CheckCircle, Award, Users, Clock, Wrench, Instagram } from 'lucide-react';

const workGallery = [
  {
    src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop',
    alt: 'Engine diagnostics and repair',
  },
  {
    src: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&h=400&fit=crop',
    alt: 'Mechanic working under the hood',
  },
  {
    src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=400&fit=crop',
    alt: 'Brake service and repair',
  },
  {
    src: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&h=400&fit=crop',
    alt: 'Professional auto repair tools',
  },
  {
    src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop',
    alt: 'Vehicle inspection on lift',
  },
  {
    src: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&h=400&fit=crop',
    alt: 'Engine inspection close-up',
  },
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
    alt: 'Wheel and tire service',
  },
  {
    src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
    alt: 'Car on hydraulic lift in shop',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&h=1080&fit=crop"
            alt="Auto repair shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-arena-black via-arena-black/90 to-arena-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <p className="text-arena-red font-heading text-sm tracking-[0.2em] uppercase mb-2">Our Story</p>
          <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-4">
            ABOUT <span className="text-arena-yellow">ARENA</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            More than just a shop — we're your neighbors, committed to keeping San Diego moving safely.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-arena-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                BUILT ON <span className="text-arena-yellow">TRUST</span>,<br />
                DRIVEN BY <span className="text-arena-red">QUALITY</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Arena Auto Repair was founded with a simple vision: provide San Diego with honest, reliable auto repair at fair prices. We saw too many people getting overcharged or sold services they didn't need — and we knew we could do better.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                Our team of ASE-certified technicians brings over 10 years of combined experience to every repair. We stay current with the latest automotive technology while maintaining the personal, hands-on approach that our customers love.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                From routine oil changes to complex engine rebuilds, we treat every vehicle with the same attention to detail. We explain every repair in plain English, provide upfront pricing, and never push unnecessary services. Your trust is our most important asset.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Award size={24} />, label: 'ASE Certified', value: 'Technicians' },
                  { icon: <Users size={24} />, label: '500+', value: 'Happy Customers' },
                  { icon: <Clock size={24} />, label: '10+', value: 'Years Experience' },
                  { icon: <Wrench size={24} />, label: 'All Makes', value: '& Models' },
                ].map((stat, i) => (
                  <div key={i} className="bg-arena-dark p-5 rounded-xl border border-white/5 text-center">
                    <span className="text-arena-yellow mb-2 block">{stat.icon}</span>
                    <p className="font-heading text-xl font-bold text-white">{stat.label}</p>
                    <p className="text-gray-400 text-sm">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=500&fit=crop"
                alt="Mechanic working on engine"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=400&h=300&fit=crop"
                  alt="Auto repair tools"
                  className="w-full h-40 object-cover rounded-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=400&h=300&fit=crop"
                  alt="Car being serviced"
                  className="w-full h-40 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery — From Instagram */}
      <section className="py-20 bg-arena-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-arena-red font-heading text-sm tracking-[0.2em] uppercase mb-2">Our Work in Action</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              PHOTO <span className="text-arena-yellow">GALLERY</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real photos from Arena Auto Repair. Every car gets the same quality care and attention to detail — see for yourself.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {workGallery.map((photo, i) => (
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
                <div className="absolute inset-0 bg-arena-black/0 group-hover:bg-arena-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                    <Instagram size={28} className="text-white" />
                    <span className="text-white text-xs font-medium">View on Instagram</span>
                  </div>
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
              SEE MORE ON INSTAGRAM
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-arena-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              OUR <span className="text-arena-yellow">VALUES</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={36} />,
                title: 'Honesty First',
                text: 'We will never sell you a service you don\'t need. Period. We diagnose, explain, and let you decide. Transparency is non-negotiable.',
              },
              {
                icon: <Star size={36} />,
                title: 'Quality Work',
                text: 'Every repair is done right the first time. We use quality parts, follow manufacturer specifications, and back our work with a warranty.',
              },
              {
                icon: <CheckCircle size={36} />,
                title: 'Fair Pricing',
                text: 'No hidden fees, no surprise charges. We provide detailed, written estimates before any work begins so you know exactly what to expect.',
              },
            ].map((val, i) => (
              <div key={i} className="bg-arena-gray p-8 rounded-2xl border border-white/5 text-center">
                <div className="text-arena-red mb-4 flex justify-center">{val.icon}</div>
                <h3 className="font-heading text-2xl font-semibold text-arena-yellow mb-3">{val.title}</h3>
                <p className="text-gray-400 leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-arena-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6">
                SERVING THE <span className="text-arena-yellow">SAN DIEGO</span> AREA
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                We proudly serve customers throughout San Diego and the surrounding communities within a 40-mile radius. No matter where you are in the area, quality auto repair is just a phone call away.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'San Diego', 'Chula Vista', 'Escondido', 'Carlsbad',
                  'Oceanside', 'El Cajon', 'Vista', 'San Marcos',
                  'Encinitas', 'National City', 'La Mesa', 'Poway',
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={14} className="text-arena-yellow shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-80 bg-arena-dark rounded-2xl overflow-hidden border border-white/10">
              <iframe
                title="Arena Auto Repair Service Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429154.68898575564!2d-117.3795776!3d32.8242404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-arena-red">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            READY TO EXPERIENCE THE ARENA DIFFERENCE?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Call us today for a free consultation and see why 500+ San Diegans trust Arena Auto Repair.
          </p>
          <a
            href="tel:8588000080"
            className="inline-flex items-center gap-3 bg-arena-black hover:bg-arena-yellow hover:text-arena-black text-white px-12 py-5 rounded-xl font-heading font-bold text-2xl tracking-wide transition-all duration-300"
          >
            <Phone size={26} />
            (858) 800-0080
          </a>
        </div>
      </section>
    </div>
  );
}