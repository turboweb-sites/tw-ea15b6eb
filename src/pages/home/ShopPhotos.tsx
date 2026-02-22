export default function ShopPhotos() {
  return (
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
  );
}