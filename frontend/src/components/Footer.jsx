import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, ArrowRight, Gauge } from 'lucide-react';
import { toast } from 'sonner';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success('You\'re subscribed!', {
      description: 'Watch your inbox for exclusive offers and new arrivals.',
    });
    setEmail('');
  };

  return (
    <footer id="footer" className="bg-black border-t border-[var(--border-subtle)] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-primary)]/50 to-transparent"></div>
      <div className="dark-full-container">
        
        {/* Main Footer Content */}
        {/* <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"> */}
            
            {/* Company Info */}
            {/* <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d92626] to-[#7a1620] flex items-center justify-center shadow-[0_4px_16px_rgba(255,59,59,0.35)]">
                    <Gauge size={18} className="text-white" strokeWidth={2.5} />
                  </span>
                  <h3 className="heading-2 text-white">
                    LuxuryCars<span className="bg-gradient-to-r from-[#d92626] to-[#7a1620] bg-clip-text text-transparent">Pro</span>
                  </h3>
                </div>
                <p className="body-medium text-[var(--text-secondary)]">
                  Your premier destination for luxury and performance vehicles.
                  Experience excellence in every drive.
                </p>
              </div> */}

              {/* Social Media */}
              {/* <div>
                <p className="body-medium text-white mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, label: 'Facebook' },
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Instagram, label: 'Instagram' },
                    { icon: Youtube, label: 'YouTube' }
                  ].map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      className="w-10 h-10 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-full flex items-center justify-center text-[var(--text-muted)] hover:bg-[var(--brand-primary)] hover:border-[var(--brand-primary)] hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </div>
            </div> */}

            {/* Quick Links */}
            {/* <div>
              <h4 className="heading-3 text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  'New Cars',
                  'Used Cars',
                  'Financing',
                  'Trade-In',
                  'Service Center',
                  'Parts & Accessories',
                  'Warranty',
                  'About Us'
                ].map((link) => (
                  <li key={link}>
                    <button className="body-medium text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors duration-300">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Car Brands */}
            {/* <div>
              <h4 className="heading-3 text-white mb-6">Our Brands</h4>
              <ul className="space-y-3">
                {[
                  'BMW',
                  'Mercedes-Benz',
                  'Audi',
                  'Porsche',
                  'Nissan',
                  'Toyota',
                  'Mazda',
                  'Subaru'
                ].map((brand) => (
                  <li key={brand}>
                    <button className="body-medium text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors duration-300">
                      {brand}
                    </button>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Contact Info */}
            {/* <div>
              <h4 className="heading-3 text-white mb-6">Contact Us</h4>
              <div className="space-y-4">
                
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[var(--brand-primary)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="body-medium text-white">Visit Our Showroom</p>
                    <p className="body-small text-[var(--text-secondary)]">
                      123 Luxury Auto Blvd<br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-[var(--brand-primary)] flex-shrink-0" />
                  <div>
                    <p className="body-medium text-white">Call Us</p>
                    <p className="body-small text-[var(--text-secondary)]">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-[var(--brand-primary)] flex-shrink-0" />
                  <div>
                    <p className="body-medium text-white">Email Us</p>
                    <p className="body-small text-[var(--text-secondary)]">info@luxurycarspro.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-[var(--brand-primary)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="body-medium text-white">Hours</p>
                    <div className="body-small text-[var(--text-secondary)]">
                      <p>Mon-Fri: 9AM - 8PM</p>
                      <p>Sat: 9AM - 6PM</p>
                      <p>Sun: 11AM - 5PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Newsletter */}
        <div className="py-12 border-t border-[var(--border-subtle)]">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="heading-2 text-white mb-4">
              Stay Updated with <span className="bg-gradient-to-r from-[#d92626] to-[#7a1620] bg-clip-text text-transparent">Latest Offers</span>
            </h3>
            <p className="body-medium text-[var(--text-secondary)] mb-8">
              Subscribe to our newsletter and be the first to know about new arrivals, <br />
              exclusive deals, and automotive news.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3.5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors duration-300"
              />
              <button type="submit" className="px-8 py-3.5 rounded bg-gradient-to-r from-[var(--brand-primary)] to-[#d92626] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-105" style={{ boxShadow: '0 4px 18px rgba(255,59,59,0.3)' }}>
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* VANTOR FOOTER  */}
      <div
        aria-hidden
        className="select-none pb-4 text-center font-display leading-none tracking-tight"
        style={{
          fontSize: "18vw",
          fontFamily: "Montserrat",
          backgroundImage: "linear-gradient(to right, #d92626, #7a1620)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        LUXPRO
      </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[var(--border-subtle)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6">
              <button className="body-small text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="body-small text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors duration-300">
                Terms of Service
              </button>
              <button className="body-small text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors duration-300">
                Sitemap
              </button>
            </div>
            
            <p className="body-small text-[var(--text-muted)]">
              © {currentYear} LuxuryCarsPro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};