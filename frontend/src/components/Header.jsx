import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Gauge, ArrowRight } from 'lucide-react';
import { getCartCount } from '../data/mock';

export const Header = ({ onCartClick, onNavigateToSection }) => {
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartCount());
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', section: 'hero' },
    { label: 'Collection', section: 'categories' },
    { label: 'Featured', section: 'featured-showcase' },
    { label: 'Services', section: 'services' },
    { label: 'Contact', section: 'contact' }
  ];

  const handleNavClick = (section) => {
    onNavigateToSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`dark-header ${isScrolled ? 'scrolled' : ''}`}>
      <button
        onClick={() => handleNavClick('hero')}
        className="flex items-center gap-2.5"
      >
        <h2 className="text-xl font-semibold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          LuxuryCars<span className="bg-gradient-to-r from-[#d92626] to-[#7a1620] bg-clip-text text-transparent">Pro</span>
        </h2>
      </button>

      {/* Desktop Navigation */}
      <nav className="dark-nav hidden md:flex">
        {navItems.map((item) => (
          <button
            key={item.section}
            onClick={() => handleNavClick(item.section)}
            className="dark-nav-link"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Cart, CTA and Mobile Menu */}
      <div className="flex items-center gap-3 md:gap-5">
        <button
          onClick={onCartClick}
          className="relative p-2 text-white hover:text-[var(--brand-primary)] transition-colors duration-300"
          aria-label="Open cart"
        >
          <ShoppingCart size={22} />
          <AnimatePresence>
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                className="absolute -top-1 -right-1 bg-[var(--brand-primary)] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
              >
                {cartCount}
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <button
          onClick={() => handleNavClick('categories')}
          className="hidden lg:inline-flex items-center gap-2 px-8 py-3.5 rounded bg-gradient-to-r from-[var(--brand-primary)] to-[#d92626] text-white text-sm font-semibold transition-transform duration-300 hover:scale-105"
          style={{ boxShadow: '0 4px 18px rgba(255,59,59,0.3)' }}
        >
          Browse Inventory
          <ArrowRight size={16} />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute top-full left-0 w-full bg-[rgba(3,3,3,0.92)] backdrop-blur-xl border-t border-[var(--border-subtle)] md:hidden z-50"
          >
            <nav className="flex flex-col p-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.section}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item.section)}
                  className="text-left py-3 text-white hover:text-[var(--brand-primary)] transition-colors duration-300 border-b border-[var(--border-subtle)] last:border-b-0"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
