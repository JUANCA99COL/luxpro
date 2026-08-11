import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, RefreshCw, Settings, Shield } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  CreditCard,
  RefreshCw,
  Settings,
  Shield
};

export const ServicesSection = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="dark-full-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="display-large text-white mb-6">
            Premium <span className="bg-gradient-to-r from-[#d92626] to-[#7a1620] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="body-large text-[var(--text-secondary)] max-w-3xl mx-auto">
            Beyond selling exceptional cars, we provide comprehensive services
            to enhance your ownership experience and maximize your investment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-8 rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[var(--brand-primary)]/40 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/20"
                onClick={() => onServiceClick && onServiceClick(service)}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[var(--brand-hover)] rounded-xl flex items-center justify-center group-hover:bg-[var(--brand-primary)] transition-all duration-300">
                    <IconComponent
                      size={32}
                      className="text-[var(--brand-primary)] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="heading-2 text-white group-hover:text-[var(--brand-primary)] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="body-medium text-[var(--text-secondary)]">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full flex-shrink-0"></div>
                        <span className="body-small text-[var(--text-secondary)]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <button className="text-[var(--brand-primary)] font-medium hover:text-[var(--brand-active)] transition-colors duration-300 flex items-center gap-2 group-hover:gap-4">
                    Learn More
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)]/5 via-transparent to-[var(--brand-primary)]/5 rounded-2xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
