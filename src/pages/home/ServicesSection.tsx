import { Link } from 'wouter';
import {
  ArrowRight, Wrench, Zap, Thermometer, Cog, Car, Search, Disc, Settings, Droplets, Shield
} from 'lucide-react';

const services = [
  { icon: <Droplets />, name: 'Oil Change', path: '/services/oil-change', desc: 'Full synthetic & conventional oil changes with multi-point inspection.' },
  { icon: <Disc />, name: 'Brake Repair', path: '/services/brake-repair', desc: 'Pads, rotors, calipers, brake fluid flush — stop safely every time.' },
  { icon: <Wrench />, name: 'Engine Repair', path: '/services/engine-repair', desc: 'From minor fixes to major overhauls. All makes and models.' },
  { icon: <Cog />, name: 'Transmission', path: '/services/transmission', desc: 'Manual & automatic transmission repair, rebuild, and fluid service.' },
  { icon: <Thermometer />, name: 'A/C Repair', path: '/services/ac-repair', desc: 'Stay cool year-round. Complete A/C diagnostics and repair.' },
  { icon: <Search />, name: 'Diagnostics', path: '/services/diagnostics', desc: 'State-of-the-art computer diagnostics for check engine lights.' },
  { icon: <Car />, name: 'Tire Service', path: '/services/tire-service', desc: 'Tire rotation, balancing, alignment, and replacement services.' },
  { icon: <Zap />, name: 'Electrical', path: '/services/electrical', desc: 'Battery, alternator, starter, wiring — all electrical issues solved.' },
  { icon: <Settings />, name: 'Suspension', path: '/services/suspension', desc: 'Shocks, struts, ball joints, tie rods — smooth rides guaranteed.' },
  { icon: <Shield />, name: 'Pre-Purchase Inspection', path: '/services/pre-purchase-inspection', desc: "Know what you're buying. Comprehensive vehicle inspection report." },
];

export default function ServicesSection() {
  return (
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
  );
}