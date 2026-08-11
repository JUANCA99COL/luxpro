import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { carCategories } from '../data/mock';

export const CategoriesSection = ({ onCategoryClick }) => {
  return (
    <section id="categories" className="py-20 bg-black">
      <div className="dark-full-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="display-large text-white mb-6">
            Explore Our <span className="bg-gradient-to-r from-[#d92626] to-[#7a1620] bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="body-large text-[var(--text-secondary)] max-w-3xl mx-auto">
            From elegant sedans to powerful sports cars, discover the perfect vehicle
            that matches your lifestyle and passion for driving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {carCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[var(--brand-primary)]/40 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/20"
              onClick={() => onCategoryClick(category)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Count Badge */}
                <div className="absolute top-4 right-4 bg-[var(--brand-primary)] text-white px-3 py-1 rounded-full text-sm font-bold">
                  {category.count} Cars
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="heading-2 text-white mb-2 group-hover:text-[var(--brand-primary)] transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="body-medium text-[var(--text-secondary)] mb-4">
                  {category.description}
                </p>

                <button className="flex items-center gap-2 text-[var(--brand-primary)] font-medium group-hover:gap-4 transition-all duration-300">
                  Shop Now
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)]/10 via-transparent to-[var(--brand-primary)]/10"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
