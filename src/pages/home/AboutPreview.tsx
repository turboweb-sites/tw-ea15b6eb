import { Link } from 'wouter';
import { CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  'ASE-Certified Technicians',
  'All Makes & Models Welcome',
  'Transparent Pricing — No Hidden Fees',
  'Same Day Service Available',
  'Warranty on Parts & Labor',
];

export default function AboutPreview() {
  return (
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
              Arena Auto Repair has been proudly serving the Valley Village community for over a decade. Our ASE-certified technicians combine old-school knowledge with the latest diagnostic technology to keep your vehicle running at its best.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We believe in transparent pricing, honest communication, and treating every car like it's our own. Whether it's a quick oil change or a major engine rebuild — we've got you covered.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((item, i) => (
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
  );
}