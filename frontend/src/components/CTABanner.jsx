import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, ArrowRight } from 'lucide-react';

export const CTABanner = ({ onTestDriveClick, onContactClick }) => {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dot-grid-red opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-3xl"></div>

      <div className="dark-full-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >

          {/* Main Content */}
          <div className="space-y-8">
            <h2 className="display-large text-white leading-tight">
              Ready to Experience
              <br />
              <span className="bg-gradient-to-r from-[#d92626] to-[#7a1620] bg-clip-text text-transparent">Luxury Driving?</span>
            </h2>

            <p className="body-large text-[var(--text-secondary)] max-w-2xl mx-auto">
              Take the next step towards owning your dream car. Book a test drive today
              and discover why thousands of customers trust us with their automotive needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={onTestDriveClick}
                className="btn-primary group pulse-glow min-w-[240px]"
              >
                <Calendar size={20} />
                Book Test Drive Now
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onContactClick}
                className="btn-secondary group min-w-[240px]"
              >
                <Phone size={20} />
                Call (555) 123-4567
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-12 border-t border-[var(--border-subtle)]">
              <p className="body-small text-[var(--text-muted)] mb-6">
                Trusted by thousands of satisfied customers
              </p>

              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[var(--brand-primary)] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A+</span>
                  </div>
                  <span className="body-small text-[var(--text-secondary)]">BBB Certified</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[var(--brand-primary)] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">★</span>
                  </div>
                  <span className="body-small text-[var(--text-secondary)]">5-Star Dealer</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[var(--brand-primary)] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <span className="body-small text-[var(--text-secondary)]">Licensed & Insured</span>
                </div>
              </div>
            </div>
          </div>

          {/* Special Offers */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { title: '0.9% APR', desc: 'Financing available on select models' },
              { title: '7-Day Return', desc: 'Money-back guarantee policy' },
              { title: 'Free Delivery', desc: 'Within 50 miles of our location' },
            ].map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-6 rounded-2xl hover:border-[var(--brand-primary)]/40 transition-colors duration-300"
              >
                <h3 className="heading-3 text-[var(--brand-primary)] mb-2">{offer.title}</h3>
                <p className="body-small text-[var(--text-secondary)]">{offer.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
