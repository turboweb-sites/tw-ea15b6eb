import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, ChevronDown, Instagram } from 'lucide-react';

const services = [
  { name: 'Oil Change', path: '/services/oil-change' },
  { name: 'Brake Repair', path: '/services/brake-repair' },
  { name: 'Engine Repair', path: '/services/engine-repair' },
  { name: 'Transmission', path: '/services/transmission' },
  { name: 'A/C Repair', path: '/services/ac-repair' },
  { name: 'Diagnostics', path: '/services/diagnostics' },
  { name: 'Tire Service', path: '/services/tire-service' },
  { name: 'Electrical', path: '/services/electrical' },
  { name: 'Suspension', path: '/services/suspension' },
  { name: 'Pre-Purchase Inspection', path: '/services/pre-purchase-inspection' },
];

const WHATSAPP_NUMBER = '18588000080';
const PHONE_NUMBER = '8588000080';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      const ua = navigator.userAgent || '';
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
      setIsMobile(mobile || window.innerWidth < 768);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();

  const callNowHref = isMobile
    ? `tel:${PHONE_NUMBER}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <>
      {/* Top bar */}
      <div className="bg-arena-red text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <a href="tel:8588000080" className="hover:text-arena-yellow transition-colors font-medium">
              (858) 800-0080
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">5950 Laurel Canyon Blvd, Ste B Valley Village CA 91607</span>
            <a
              href="https://www.instagram.com/arenaautorepair?igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-arena-yellow transition-colors"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-arena-black border-b border-white/10">
        <div className="absolute inset-0 bg-arena-black/80 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                <img
                  src="https://pub-166557a34b174b9a90d5376150b1d05a.r2.dev/assets/ea15b6eb-5da6-4b39-baca-bd3e13441568/a5ac030b-5ffa-4ea7-ab81-d8c47410042a/621402153_17858935542597188_2905951362297310878_n_1771658970748_pbmwyq.webp"
                  alt="Arena Auto Repair"
                  className="h-20 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/">
                <span className={`font-medium hover:text-arena-yellow transition-colors cursor-pointer ${location === '/' ? 'text-arena-yellow' : 'text-white'}`}>
                  Home
                </span>
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={`flex items-center gap-1 font-medium hover:text-arena-yellow transition-colors ${location.startsWith('/services') ? 'text-arena-yellow' : 'text-white'}`}>
                  Services <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-arena-dark border border-white/10 rounded-xl shadow-2xl py-2 z-50">
                    {services.map((s) => (
                      <Link key={s.path} href={s.path}>
                        <span
                          className={`block px-4 py-2.5 text-sm hover:bg-arena-yellow/10 hover:text-arena-yellow transition-colors cursor-pointer ${location === s.path ? 'text-arena-yellow bg-arena-yellow/5' : 'text-gray-300'}`}
                          onClick={() => setServicesOpen(false)}
                        >
                          {s.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about">
                <span className={`font-medium hover:text-arena-yellow transition-colors cursor-pointer ${location === '/about' ? 'text-arena-yellow' : 'text-white'}`}>
                  About
                </span>
              </Link>

              <Link href="/contact">
                <span className={`font-medium hover:text-arena-yellow transition-colors cursor-pointer ${location === '/contact' ? 'text-arena-yellow' : 'text-white'}`}>
                  Contact
                </span>
              </Link>
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-4">
              <a
                href={callNowHref}
                target={isMobile ? undefined : '_blank'}
                rel={isMobile ? undefined : 'noopener noreferrer'}
                className="hidden md:flex items-center gap-2 bg-arena-red hover:bg-arena-yellow hover:text-arena-black text-white px-5 py-2.5 rounded-lg font-heading font-semibold tracking-wide transition-all duration-300"
              >
                <Phone size={16} />
                CALL NOW
              </a>
              <button
                className="lg:hidden text-white p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-arena-dark border-t border-white/10 relative z-10">
            <div className="px-4 py-4 space-y-1">
              <Link href="/">
                <span
                  className="block py-3 px-4 text-white hover:text-arena-yellow hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </span>
              </Link>

              <div>
                <button
                  className="flex items-center justify-between w-full py-3 px-4 text-white hover:text-arena-yellow hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    {services.map((s) => (
                      <Link key={s.path} href={s.path}>
                        <span
                          className="block py-2 px-4 text-sm text-gray-400 hover:text-arena-yellow transition-colors cursor-pointer"
                          onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                        >
                          {s.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about">
                <span
                  className="block py-3 px-4 text-white hover:text-arena-yellow hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </span>
              </Link>

              <Link href="/contact">
                <span
                  className="block py-3 px-4 text-white hover:text-arena-yellow hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </span>
              </Link>

              <a
                href="tel:8588000080"
                className="flex items-center justify-center gap-2 bg-arena-red text-white py-3 rounded-lg font-heading font-semibold mt-3"
              >
                <Phone size={18} />
                (858) 800-0080
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}