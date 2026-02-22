import { Instagram } from 'lucide-react';

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

export default function GallerySection() {
  return (
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
  );
}