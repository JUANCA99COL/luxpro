import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Trash2, CreditCard, ShoppingBag, X } from 'lucide-react';
import { toast } from 'sonner';
import { removeFromCart, getCartTotal } from '../data/mock';

export const Cart = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showFinancingCalculator, setShowFinancingCalculator] = useState(false);
  const [financingOptions, setFinancingOptions] = useState({
    downPayment: 20000,
    loanTerm: 60,
    interestRate: 4.5
  });

  useEffect(() => {
    if (isOpen) {
      const items = JSON.parse(localStorage.getItem('dealership_cart')) || [];
      setCartItems(items);
    }
  }, [isOpen]);

  const handleRemoveItem = (carId) => {
    const updatedCart = removeFromCart(carId);
    setCartItems(updatedCart);
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  };

  const calculateFinancing = () => {
    const total = getCartTotal();
    const principal = total - financingOptions.downPayment;
    const monthlyRate = financingOptions.interestRate / 100 / 12;
    const numPayments = financingOptions.loanTerm;
    
    const monthlyPayment = (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return {
      monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
      totalInterest: (monthlyPayment * numPayments) - principal,
      totalCost: total + ((monthlyPayment * numPayments) - principal)
    };
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      toast.success('Checkout successful!', {
        description: 'We will contact you shortly to arrange delivery.',
      });
      localStorage.removeItem('dealership_cart');
      setCartItems([]);
      setIsCheckingOut(false);
      window.dispatchEvent(new CustomEvent('cartUpdated'));
      onClose();
    }, 1500);
  };

  const total = getCartTotal();
  const financing = calculateFinancing();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 h-full w-full max-w-md bg-[var(--bg-primary)] border-l border-[var(--border-subtle)] flex flex-col"
          >

        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <ShoppingBag size={24} className="text-[var(--brand-primary)]" />
            <h2 className="heading-2 text-white">Your Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[var(--text-muted)] hover:text-white transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag size={48} className="text-[var(--text-muted)] mx-auto mb-4" />
              <p className="body-medium text-[var(--text-secondary)]">Your cart is empty</p>
              <p className="body-small text-[var(--text-muted)] mt-2">Add some cars to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-[var(--bg-elevated)] border border-[var(--border-subtle)] p-4 rounded-xl">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="heading-3 text-white mb-1">{item.name}</h3>
                      <p className="body-small text-[var(--text-muted)]">{item.brand}</p>
                      <p className="body-medium text-[var(--brand-primary)] font-bold">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-2 text-red-400 hover:text-red-300 transition-colors duration-300"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Financing Calculator */}
        {cartItems.length > 0 && (
          <div className="border-t border-[var(--border-subtle)] p-6">
            <button
              onClick={() => setShowFinancingCalculator(!showFinancingCalculator)}
              className="w-full text-left mb-4"
            >
              <h3 className="heading-3 text-[var(--brand-primary)] flex items-center justify-between">
                Financing Calculator
                <span className="text-sm">
                  {showFinancingCalculator ? '−' : '+'}
                </span>
              </h3>
            </button>

            {showFinancingCalculator && (
              <div className="space-y-4 mb-6">
                <div>
                  <label className="body-small text-[var(--text-secondary)] block mb-2">
                    Down Payment: ${financingOptions.downPayment.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={total * 0.5}
                    step="1000"
                    value={financingOptions.downPayment}
                    onChange={(e) => setFinancingOptions({
                      ...financingOptions,
                      downPayment: parseInt(e.target.value)
                    })}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="body-small text-[var(--text-secondary)] block mb-2">
                    Loan Term: {financingOptions.loanTerm} months
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="84"
                    step="12"
                    value={financingOptions.loanTerm}
                    onChange={(e) => setFinancingOptions({
                      ...financingOptions,
                      loanTerm: parseInt(e.target.value)
                    })}
                    className="w-full"
                  />
                </div>

                <div className="bg-[var(--bg-elevated)] p-4 rounded-xl">
                  <div className="flex justify-between items-center">
                    <span className="body-small text-[var(--text-secondary)]">Monthly Payment:</span>
                    <span className="heading-3 text-[var(--brand-primary)]">
                      ${financing.monthlyPayment.toFixed(0)}/mo
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Total & Checkout */}
        {cartItems.length > 0 && (
          <div className="border-t border-[var(--border-subtle)] p-6">
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="body-medium text-[var(--text-secondary)]">Subtotal:</span>
                <span className="heading-3 text-white">${total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="body-small text-[var(--text-muted)]">Tax & Fees:</span>
                <span className="body-small text-[var(--text-muted)]">Calculated at delivery</span>
              </div>
              <div className="border-t border-[var(--border-subtle)] pt-4">
                <div className="flex justify-between items-center">
                  <span className="heading-3 text-white">Total:</span>
                  <span className="heading-2 text-[var(--brand-primary)]">${total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="btn-primary w-full"
            >
              {isCheckingOut ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard size={20} />
                  Reserve Now
                </>
              )}
            </button>
            
            <p className="body-small text-[var(--text-muted)] text-center mt-3">
              * Reservation fee: $500 per vehicle
            </p>
          </div>
        )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};