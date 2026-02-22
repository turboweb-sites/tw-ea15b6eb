import { Link } from 'wouter';
import { Phone, CheckCircle, ArrowLeft, Star, Clock, Shield } from 'lucide-react';

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  image,
  features,
  benefits,
  process,
  faq,
}: ServicePageLayoutProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-arena-black via-arena-black/90 to-arena-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <Link href="/">
            <span className="inline-flex items-center gap-2 text-arena-yellow hover:text-white transition-colors mb-6 cursor-pointer text-sm">
              <ArrowLeft size={16} />
              Back to Home
            </span>
          </Link>
          <p className="text-arena-red font-heading text-sm tracking-[0.2em] uppercase mb-2">{subtitle}</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8588000080"
              className="inline-flex items-center justify-center gap-2 bg-arena-red hover:bg-arena-yellow hover:text-arena-black text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg tracking-wide transition-all duration-300"
            >
              <Phone size={20} />
              SCHEDULE SERVICE
            </a>
            <a
              href="tel:8588000080"
              className="inline-flex items-center justify-center gap-2 border-2 border-arena-yellow text-arena-yellow hover:bg-arena-yellow hover:text-arena-black px-8 py-4 rounded-lg font-heading font-semibold text-lg tracking-wide transition-all duration-300"
            >
              GET FREE ESTIMATE
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-arena-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            What's <span className="text-arena-yellow">Included</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-arena-dark p-6 rounded-xl border border-white/5 hover:border-arena-yellow/30 transition-all duration-300"
              >
                <CheckCircle size={22} className="text-arena-yellow shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-arena-dark">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            Our <span className="text-arena-red">Process</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            We follow a systematic approach to ensure every repair is done right the first time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-arena-gray p-6 rounded-xl border border-white/5 h-full">
                  <div className="w-12 h-12 bg-arena-red rounded-lg flex items-center justify-center mb-4">
                    <span className="font-heading text-xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-arena-yellow mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-arena-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8">
                Why Choose <span className="text-arena-yellow">Arena</span> for {title}?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-arena-yellow/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-arena-yellow" />
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-arena-dark p-6 rounded-xl border border-white/5 text-center">
                <Star size={32} className="text-arena-yellow mx-auto mb-3" />
                <h4 className="font-heading text-2xl font-bold text-white">5.0</h4>
                <p className="text-gray-400 text-sm">Star Rating</p>
              </div>
              <div className="bg-arena-dark p-6 rounded-xl border border-white/5 text-center">
                <Shield size={32} className="text-arena-red mx-auto mb-3" />
                <h4 className="font-heading text-2xl font-bold text-white">100%</h4>
                <p className="text-gray-400 text-sm">Guaranteed</p>
              </div>
              <div className="bg-arena-dark p-6 rounded-xl border border-white/5 text-center">
                <Clock size={32} className="text-arena-yellow mx-auto mb-3" />
                <h4 className="font-heading text-2xl font-bold text-white">Same Day</h4>
                <p className="text-gray-400 text-sm">Service Available</p>
              </div>
              <div className="bg-arena-dark p-6 rounded-xl border border-white/5 text-center">
                <Phone size={32} className="text-arena-red mx-auto mb-3" />
                <h4 className="font-heading text-2xl font-bold text-white">Free</h4>
                <p className="text-gray-400 text-sm">Estimates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-arena-dark">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Frequently Asked <span className="text-arena-yellow">Questions</span>
          </h2>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group bg-arena-gray rounded-xl border border-white/5 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-heading text-lg font-semibold text-white pr-4">{item.question}</h3>
                  <span className="text-arena-yellow text-2xl shrink-0 group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-arena-red">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Schedule Your {title}?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Call us today for a free estimate. We serve the entire San Diego area — a 40-mile radius!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8588000080"
              className="inline-flex items-center justify-center gap-2 bg-arena-black hover:bg-arena-yellow hover:text-arena-black text-white px-10 py-4 rounded-lg font-heading font-bold text-xl tracking-wide transition-all duration-300 animate-pulse-glow"
            >
              <Phone size={22} />
              (858) 800-0080
            </a>
            <a
              href="mailto:arenaautorepair@gmail.com"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-arena-red px-10 py-4 rounded-lg font-heading font-bold text-lg tracking-wide transition-all duration-300"
            >
              EMAIL US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}