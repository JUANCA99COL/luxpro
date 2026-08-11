import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';
import { CountUpStat } from './CountUpStat';

const trustStats = [
  { value: '1,200+', label: 'Happy Customers' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '15+', label: 'Years Experience' },
  { value: '24/7', label: 'Customer Support' },
];

export const TestimonialsSection = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={20}
        className={`${
          index < rating
            ? 'text-[var(--brand-primary)] fill-current'
            : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-[var(--bg-primary)]">
      <div className="dark-full-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="display-large text-white mb-6">
            What Our <span className="bg-gradient-to-r from-[#d92626] to-[#7a1620] bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="body-large text-[var(--text-secondary)] max-w-3xl mx-auto">
            Don't just take our word for it. Hear from satisfied customers who have
            found their dream cars and experienced our exceptional service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-8 rounded-2xl relative transition-all duration-500 hover:-translate-y-2 hover:border-[var(--brand-primary)]/40 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/20"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-[var(--brand-primary)] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(255,59,59,0.4)]">
                  <Quote size={24} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-8 space-y-6">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <p className="body-medium text-[var(--text-secondary)] leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                {/* Customer Info */}
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <h4 className="heading-3 text-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="body-small text-[var(--text-muted)] mb-2">
                    {testimonial.location}
                  </p>
                  <p className="text-[var(--brand-primary)] font-medium text-sm">
                    Purchased: {testimonial.car}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 via-transparent to-[var(--brand-primary)]/10 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustStats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <h3 className="heading-1 text-[var(--brand-primary)]">
                  <CountUpStat value={stat.value} />
                </h3>
                <p className="body-small text-[var(--text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
