import { Star } from 'lucide-react';

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

export default function ReviewsSection() {
  return (
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
  );
}