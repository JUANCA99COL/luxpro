import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, Mail, Car } from 'lucide-react';
import { toast } from 'sonner';
import { featuredCars } from '../data/mock';

export const TestDriveModal = ({ isOpen, onClose, selectedCar }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    carId: selectedCar?.id || '',
    preferredDate: '',
    preferredTime: '',
    driversLicense: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Test drive scheduled!', {
        description: 'We will contact you shortly to confirm the details.',
      });
      setIsSubmitting(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        carId: '',
        preferredDate: '',
        preferredTime: '',
        driversLicense: '',
        message: ''
      });
      onClose();
    }, 1500);
  };

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
              className="relative bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
            >

          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-3">
              <Car size={24} className="text-[var(--brand-primary)]" />
              <h2 className="heading-2 text-white">Schedule Test Drive</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[var(--text-muted)] hover:text-white transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Car Selection */}
              <div>
                <label className="body-medium text-white block mb-3">
                  Select Vehicle
                </label>
                <select
                  name="carId"
                  value={formData.carId}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl text-white focus:outline-none focus:border-[var(--brand-primary)] transition-colors duration-300"
                >
                  <option value="">Choose a vehicle</option>
                  {featuredCars.map((car) => (
                    <option key={car.id} value={car.id}>
                      {car.brand} {car.name} - ${car.price.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="body-medium text-white block mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="body-medium text-white block mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="body-medium text-white block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="body-medium text-white block mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Driver's License */}
              <div>
                <label className="body-medium text-white block mb-2">
                  Driver's License Number *
                </label>
                <input
                  type="text"
                  name="driversLicense"
                  value={formData.driversLicense}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors duration-300"
                  placeholder="Enter your driver's license number"
                />
              </div>

              {/* Preferred Date & Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="body-medium text-white block mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl text-white focus:outline-none focus:border-[var(--brand-primary)] transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="body-medium text-white block mb-2">
                    Preferred Time *
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl text-white focus:outline-none focus:border-[var(--brand-primary)] transition-colors duration-300"
                  >
                    <option value="">Select time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="body-medium text-white block mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-[var(--bg-elevated)] border border-[var(--border-subtle)] rounded-xl text-white placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-primary)] transition-colors duration-300 resize-none"
                  placeholder="Any specific requirements or questions?"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary flex-1"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Scheduling...
                    </>
                  ) : (
                    <>
                      <Calendar size={20} />
                      Schedule Test Drive
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          {/* Footer Info */}
          <div className="border-t border-[var(--border-subtle)] p-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <Calendar size={20} className="text-[var(--brand-primary)] mx-auto" />
                <p className="body-small text-[var(--text-secondary)]">Flexible Scheduling</p>
              </div>
              <div className="space-y-2">
                <Car size={20} className="text-[var(--brand-primary)] mx-auto" />
                <p className="body-small text-[var(--text-secondary)]">Professional Guide</p>
              </div>
              <div className="space-y-2">
                <Clock size={20} className="text-[var(--brand-primary)] mx-auto" />
                <p className="body-small text-[var(--text-secondary)]">30-60 Minutes</p>
              </div>
            </div>
          </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};