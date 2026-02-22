import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Instagram, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-arena-dark">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="text-arena-red font-heading text-sm tracking-[0.2em] uppercase mb-2">Get In Touch</p>
            <h1 className="font-heading text-5xl sm:text-6xl font-bold text-white mb-4">
              CONTACT <span className="text-arena-yellow">US</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              Ready to schedule a service or have a question? We're here to help. Call us, email us, or fill out the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-arena-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-arena-dark p-6 rounded-xl border border-white/5">
                <h3 className="font-heading text-xl font-semibold text-arena-yellow mb-6">Contact Information</h3>
                <ul className="space-y-5">
                  <li>
                    <a href="tel:8588000080" className="flex items-center gap-4 text-gray-300 hover:text-arena-yellow transition-colors group">
                      <div className="w-12 h-12 bg-arena-red/20 rounded-xl flex items-center justify-center group-hover:bg-arena-yellow/20 transition-colors">
                        <Phone size={20} className="text-arena-red group-hover:text-arena-yellow" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">(858) 800-0080</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:arenaautorepair@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-arena-yellow transition-colors group">
                      <div className="w-12 h-12 bg-arena-red/20 rounded-xl flex items-center justify-center group-hover:bg-arena-yellow/20 transition-colors">
                        <Mail size={20} className="text-arena-red group-hover:text-arena-yellow" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">arenaautorepair@gmail.com</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 bg-arena-red/20 rounded-xl flex items-center justify-center">
                      <MapPin size={20} className="text-arena-red" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">5950 Laurel Canyon Blvd, Ste B</p>
                      <p className="font-medium">Valley Village, CA 91607</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 bg-arena-red/20 rounded-xl flex items-center justify-center">
                      <Clock size={20} className="text-arena-red" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Hours</p>
                      <p className="font-medium">Mon–Fri: 8 AM – 6 PM</p>
                      <p className="font-medium">Sat: 9 AM – 3 PM</p>
                      <p className="text-sm text-gray-500">Sun: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <a
                href="https://www.instagram.com/arenaautorepair?igsh=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-arena-dark p-6 rounded-xl border border-white/5 hover:border-arena-yellow/30 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-500 rounded-xl flex items-center justify-center">
                  <Instagram size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold group-hover:text-arena-yellow transition-colors">@arenaautorepair</p>
                  <p className="text-gray-500 text-sm">Follow us on Instagram</p>
                </div>
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-arena-dark p-8 rounded-xl border border-white/5">
                <h3 className="font-heading text-2xl font-semibold text-white mb-2">Request a Free Estimate</h3>
                <p className="text-gray-400 text-sm mb-8">Fill out the form and we'll get back to you within 1 business hour.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={64} className="text-arena-yellow mx-auto mb-4" />
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 mb-6">Thank you for reaching out. We'll contact you shortly.</p>
                    <a
                      href="tel:8588000080"
                      className="inline-flex items-center gap-2 bg-arena-red text-white px-8 py-3 rounded-lg font-heading font-semibold"
                    >
                      <Phone size={18} />
                      Or Call Us Now
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-arena-gray border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-arena-yellow transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-arena-gray border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-arena-yellow transition-colors"
                          placeholder="(858) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-arena-gray border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-arena-yellow transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Service Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-arena-gray border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-arena-yellow transition-colors"
                      >
                        <option value="">Select a service...</option>
                        <option value="oil-change">Oil Change</option>
                        <option value="brake-repair">Brake Repair</option>
                        <option value="engine-repair">Engine Repair</option>
                        <option value="transmission">Transmission</option>
                        <option value="ac-repair">A/C Repair</option>
                        <option value="diagnostics">Diagnostics</option>
                        <option value="tire-service">Tire Service</option>
                        <option value="electrical">Electrical</option>
                        <option value="suspension">Suspension</option>
                        <option value="inspection">Pre-Purchase Inspection</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Tell Us About Your Vehicle / Issue *</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-arena-gray border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-arena-yellow transition-colors resize-none"
                        placeholder="Year, make, model, and describe the issue..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-arena-red hover:bg-arena-yellow hover:text-arena-black text-white py-4 rounded-lg font-heading font-bold text-lg tracking-wide transition-all duration-300"
                    >
                      <Send size={18} />
                      SEND MESSAGE
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-arena-dark">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-white text-center mb-8">
            OUR <span className="text-arena-yellow">SERVICE AREA</span>
          </h2>
          <div className="w-full h-96 rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="Arena Auto Repair Location"
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
      </section>
    </div>
  );
}