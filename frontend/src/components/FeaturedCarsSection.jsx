import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { featuredCars, addToCart } from '../data/mock';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel';

export const FeaturedCarsSection = ({ onViewDetails, onAddToCart }) => {
  const handleAddToCart = (car) => {
    const updatedCart = addToCart(car);
    if (onAddToCart) {
      onAddToCart(updatedCart);
    }
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    toast.success(`${car.name} added to cart`, {
      description: `${car.brand} · $${car.price.toLocaleString()}`,
    });
  };

  return (
    <section id="featured" className="py-20 bg-[var(--bg-primary)]">
      <div className="dark-full-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="display-large text-white mb-6">
            Featured <span className="bg-gradient-to-r from-[#d92626] to-[#7a1620] bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="body-large text-[var(--text-secondary)] max-w-3xl mx-auto">
            Handpicked premium vehicles that define luxury, performance, and innovation.
            Each car represents the pinnacle of automotive excellence.
          </p>
        </motion.div>

        <Carousel opts={{ loop: true, align: 'center' }} className="relative max-w-6xl mx-auto">
          <CarouselContent>
            {featuredCars.map((car) => (
              <CarouselItem key={car.id}>
                <div className="grid lg:grid-cols-2 gap-12 items-center p-2 md:p-8">

                  {/* Car Image */}
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Availability Badge */}
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold ${
                        car.availability === 'In Stock'
                          ? 'bg-green-500 text-black'
                          : car.availability === 'Limited'
                          ? 'bg-yellow-500 text-black'
                          : 'bg-[var(--brand-primary)] text-white'
                      }`}>
                        {car.availability}
                      </div>
                    </div>
                  </div>

                  {/* Car Details */}
                  <div className="space-y-6">
                    <div>
                      <p className="body-medium text-[var(--brand-primary)] mb-2">{car.brand}</p>
                      <h3 className="heading-1 text-white mb-4">{car.name}</h3>
                      <p className="display-medium text-[var(--brand-primary)]">
                        ${car.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Car Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-4 rounded-xl">
                        <p className="body-small text-[var(--text-muted)] mb-1">Horsepower</p>
                        <p className="heading-3 text-white">{car.horsepower} HP</p>
                      </div>
                      <div className="bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-4 rounded-xl">
                        <p className="body-small text-[var(--text-muted)] mb-1">Category</p>
                        <p className="heading-3 text-white">{car.category}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <p className="body-medium text-[var(--text-secondary)] mb-3">Key Features:</p>
                      <div className="flex flex-wrap gap-2">
                        {car.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-[var(--brand-hover)] text-[var(--brand-primary)] rounded-full text-sm font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => onViewDetails && onViewDetails(car)}
                        className="btn-primary group flex-1"
                      >
                        <Eye size={20} />
                        View Details
                      </button>
                      <button
                        onClick={() => handleAddToCart(car)}
                        className="btn-secondary group flex-1"
                      >
                        <ShoppingCart size={20} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 md:-left-12 bg-white/5 border-[var(--border-medium)] text-white hover:bg-[var(--brand-primary)] hover:border-[var(--brand-primary)] hover:text-white" />
          <CarouselNext className="right-2 md:-right-12 bg-white/5 border-[var(--border-medium)] text-white hover:bg-[var(--brand-primary)] hover:border-[var(--brand-primary)] hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
};
