import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Calendar, Share2, Heart, Zap, Gauge, Fuel, Settings } from 'lucide-react';
import { toast } from 'sonner';
import { addToCart } from '../data/mock';

export const CarDetailsModal = ({ car, isOpen, onClose }) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  if (!car) return null;

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    addToCart(car);

    setTimeout(() => {
      setIsAddingToCart(false);
      window.dispatchEvent(new CustomEvent('cartUpdated'));
      toast.success('Added to cart', {
        description: `${car.brand} ${car.name}`,
      });
    }, 800);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'specs', label: 'Specifications' },
    { id: 'features', label: 'Features' },
    { id: 'financing', label: 'Financing' }
  ];

  const specifications = {
    'Engine': 'Twin-Turbo V6',
    'Horsepower': `${car.horsepower} HP`,
    'Torque': '443 lb-ft',
    'Transmission': '8-Speed Automatic',
    'Drivetrain': 'All-Wheel Drive',
    'Fuel Economy': '22 city / 29 highway',
    'Top Speed': '155 mph',
    '0-60 mph': '3.8 seconds'
  };

  const financingOptions = [
    {
      term: '36 months',
      rate: '3.9%',
      payment: Math.round(car.price / 36 * 1.039)
    },
    {
      term: '48 months',
      rate: '4.5%',
      payment: Math.round(car.price / 48 * 1.045)
    },
    {
      term: '60 months',
      rate: '5.1%',
      payment: Math.round(car.price / 60 * 1.051)
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-2xl w-full max-w-4xl max-h-[80vh] overflow-y-auto"
            >

          {/* Header */}
          <div className="relative">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/50 text-white hover:bg-[var(--brand-primary)] hover:text-white rounded-full transition-all duration-300"
            >
              <X size={24} />
            </button>
            
            {/* Car Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <p className="body-medium text-[var(--brand-primary)] mb-2">{car.brand}</p>
                  <h2 className="display-medium text-white mb-2">{car.name}</h2>
                  <p className="heading-1 text-[var(--brand-primary)]">
                    ${car.price.toLocaleString()}
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <button className="p-3 bg-black/50 text-white hover:bg-[var(--brand-primary)] hover:text-white rounded-full transition-all duration-300">
                    <Heart size={20} />
                  </button>
                  <button className="p-3 bg-black/50 text-white hover:bg-[var(--brand-primary)] hover:text-white rounded-full transition-all duration-300">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Availability Badge */}
            <div className={`absolute top-4 left-4 px-4 py-2 rounded-full font-bold ${
              car.availability === 'In Stock' 
                ? 'bg-green-500 text-black' 
                : car.availability === 'Limited'
                ? 'bg-yellow-500 text-black'
                : 'bg-[var(--brand-primary)] text-white'
            }`}>
              {car.availability}
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-[var(--border-subtle)]">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-medium transition-colors duration-300 border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-[var(--brand-primary)] border-[var(--brand-primary)]'
                      : 'text-[var(--text-muted)] border-transparent hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="heading-2 text-white mb-4">Vehicle Overview</h3>
                  <p className="body-medium text-[var(--text-secondary)] leading-relaxed">
                    Experience the perfect blend of luxury and performance with the {car.brand} {car.name}. 
                    This exceptional vehicle combines cutting-edge technology, premium materials, and 
                    outstanding engineering to deliver an unmatched driving experience.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-[var(--bg-secondary)] p-4 rounded-lg text-center">
                    <Zap size={24} className="text-[var(--brand-primary)] mx-auto mb-2" />
                    <p className="heading-3 text-white">{car.horsepower}</p>
                    <p className="body-small text-[var(--text-muted)]">Horsepower</p>
                  </div>
                  <div className="bg-[var(--bg-secondary)] p-4 rounded-lg text-center">
                    <Gauge size={24} className="text-[var(--brand-primary)] mx-auto mb-2" />
                    <p className="heading-3 text-white">3.8s</p>
                    <p className="body-small text-[var(--text-muted)]">0-60 mph</p>
                  </div>
                  <div className="bg-[var(--bg-secondary)] p-4 rounded-lg text-center">
                    <Fuel size={24} className="text-[var(--brand-primary)] mx-auto mb-2" />
                    <p className="heading-3 text-white">29</p>
                    <p className="body-small text-[var(--text-muted)]">MPG Highway</p>
                  </div>
                  <div className="bg-[var(--bg-secondary)] p-4 rounded-lg text-center">
                    <Settings size={24} className="text-[var(--brand-primary)] mx-auto mb-2" />
                    <p className="heading-3 text-white">AWD</p>
                    <p className="body-small text-[var(--text-muted)]">Drivetrain</p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="heading-3 text-white mb-4">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full flex-shrink-0"></div>
                        <span className="body-medium text-[var(--text-secondary)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === 'specs' && (
              <div className="space-y-6">
                <h3 className="heading-2 text-white mb-6">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-[var(--border-subtle)]">
                      <span className="body-medium text-[var(--text-secondary)]">{key}</span>
                      <span className="body-medium text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div className="space-y-6">
                <h3 className="heading-2 text-white mb-6">Premium Features</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    'Premium Leather Seats',
                    'Heated & Ventilated Seats',
                    'Panoramic Sunroof',
                    'Premium Audio System',
                    'Navigation System',
                    'Adaptive Cruise Control',
                    'Lane Keep Assist',
                    'Blind Spot Monitoring',
                    'Parking Sensors',
                    'Wireless Charging',
                    'Ambient Lighting',
                    'Keyless Entry'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full flex-shrink-0"></div>
                      <span className="body-medium text-[var(--text-secondary)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Financing Tab */}
            {activeTab === 'financing' && (
              <div className="space-y-6">
                <h3 className="heading-2 text-white mb-6">Financing Options</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {financingOptions.map((option, index) => (
                    <div key={index} className="bg-[var(--bg-secondary)] p-6 rounded-lg">
                      <h4 className="heading-3 text-[var(--brand-primary)] mb-2">{option.term}</h4>
                      <p className="body-small text-[var(--text-muted)] mb-4">APR: {option.rate}</p>
                      <p className="heading-2 text-white">${option.payment.toLocaleString()}</p>
                      <p className="body-small text-[var(--text-muted)]">per month</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[var(--brand-hover)] p-6 rounded-lg">
                  <h4 className="heading-3 text-[var(--brand-primary)] mb-2">Special Offers</h4>
                  <ul className="space-y-2">
                    <li className="body-medium text-[var(--text-secondary)]">• 0.9% APR for qualified buyers</li>
                    <li className="body-medium text-[var(--text-secondary)]">• $2,000 cash back on select models</li>
                    <li className="body-medium text-[var(--text-secondary)]">• Trade-in bonus up to $3,000</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="border-t border-[var(--border-subtle)] p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className="btn-primary flex-1"
              >
                {isAddingToCart ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Adding...
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} />
                    Add to Cart
                  </>
                )}
              </button>
              <button className="btn-secondary flex-1">
                <Calendar size={20} />
                Schedule Test Drive
              </button>
            </div>
          </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};