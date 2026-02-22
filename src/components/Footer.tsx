import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-arena-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-arena-yellow rounded-lg flex items-center justify-center">
                <span className="text-arena-black font-heading font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold">ARENA</h3>
                <p className="text-[9px] text-arena-yellow tracking-[0.3em] uppercase">Auto Repair</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Professional auto repair services in Valley Village. We treat every car like it's our own. Quality work, fair prices, and honest service — guaranteed.
            </p>
            <a
              href="https://www.instagram.com/arenaautorepair?igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-arena-yellow transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm">@arenaautorepair</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-arena-yellow mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Oil Change', path: '/services/oil-change' },
                { name: 'Brake Repair', path: '/services/brake-repair' },
                { name: 'Engine Repair', path: '/services/engine-repair' },
                { name: 'Transmission', path: '/services/transmission' },
                { name: 'A/C Repair', path: '/services/ac-repair' },
                { name: 'Diagnostics', path: '/services/diagnostics' },
                { name: 'Tire Service', path: '/services/tire-service' },
                { name: 'Electrical', path: '/services/electrical' },
                { name: 'Suspension', path: '/services/suspension' },
              ].map((s) => (
                <li key={s.path}>
                  <Link href={s.path}>
                    <span className="text-gray-400 hover:text-arena-yellow transition-colors text-sm cursor-pointer">
                      {s.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-arena-yellow mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:8588000080" className="flex items-center gap-3 text-gray-400 hover:text-arena-yellow transition-colors">
                  <Phone size={18} className="text-arena-red shrink-0" />
                  <span className="text-sm">(858) 800-0080</span>
                </a>
              </li>
              <li>
                <a href="mailto:arenaautorepair@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-arena-yellow transition-colors">
                  <Mail size={18} className="text-arena-red shrink-0" />
                  <span className="text-sm">arenaautorepair@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-arena-red shrink-0 mt-0.5" />
                <span className="text-sm">5950 Laurel Canyon Blvd, Ste B<br />Valley Village, CA 91607</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock size={18} className="text-arena-red shrink-0 mt-0.5" />
                <span className="text-sm">Mon–Fri: 8:00 AM – 6:00 PM<br />Sat: 9:00 AM – 3:00 PM<br />Sun: Closed</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-arena-yellow mb-5">Service Area</h4>
            <div className="w-full h-48 bg-arena-gray rounded-xl overflow-hidden border border-white/10">
              <iframe
                title="Arena Auto Repair Service Area"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.0!2d-118.3968!3d34.1672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2963e1b0b0001%3A0x1!2s5950%20Laurel%20Canyon%20Blvd%2C%20Valley%20Village%2C%20CA%2091607!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
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

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Arena Auto Repair. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            5950 Laurel Canyon Blvd, Ste B Valley Village, CA 91607
          </p>
        </div>
      </div>
    </footer>
  );
}