import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronRight, Play, Sparkles } from 'lucide-react';
import { featuredCars } from '../data/mock';
import { CountUpStat } from './CountUpStat';

const stats = [
  { value: '500+', label: 'Premium Cars' },
  { value: '25+', label: 'Luxury Brands' },
  { value: '98%', label: 'Satisfaction' },
];

export const HeroSection = ({ onShopCarsClick, onTestDriveClick, onViewDetails, onContactClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = featuredCars.length;
  const activeCar = featuredCars[activeIndex];
  const leftCar = featuredCars[(activeIndex - 1 + total) % total];
  const rightCar = featuredCars[(activeIndex + 1) % total];

  const videoRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);

  return (
    <section id="hero" className="relative bg-black overflow-hidden pb-24">
      {/* Background video — spans down through the stats row, then blends to solid black */}
      <div className="absolute inset-x-0 top-0 h-[820px] sm:h-[850px] md:h-[900px] max-h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale-[30%] brightness-90 contrast-110"
          autoPlay
          muted
          loop
          playsInline
          poster={`${process.env.PUBLIC_URL}/videos/final-video-min-poster.jpg`}
        >
          <source src={`${process.env.PUBLIC_URL}/videos/final-video-min.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black" />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 z-0 bg-dot-grid-red opacity-70" />
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[640px] h-[640px] bg-[var(--brand-primary)]/10 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* dark-full-container ships its own opaque background for sections that sit on flat black;
          it's overridden to transparent here so the hero video shows through behind the content. */}
      <div className="dark-full-container relative z-10" style={{ background: 'transparent' }}>
        {/* Headline block — vertically centered in the viewport */}
        <div className="min-h-screen flex flex-col items-center justify-center max-w-4xl mx-auto text-center space-y-7 py-24">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="spec-tag"
            style={{ display: 'inline-flex' }}
          >
            <span>
              <span className="text-[var(--brand-primary)] font-semibold">Trusted</span> Auto Dealership
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="display-huge uppercase text-white"
          >
            Drive Your{' '}
            <span className="inline-block bg-gradient-to-r from-[#d92626] to-[#7a1620] bg-clip-text text-transparent">Dream</span>{' '}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="body-large text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            Curated premium and performance vehicles, transparent pricing, and white-glove
            financing — for drivers who expect more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
          >
            <button onClick={onShopCarsClick} className="btn-primary group min-w-[200px]">
              Shop Cars
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button onClick={onTestDriveClick} className="btn-secondary group min-w-[200px]">
              <Play size={18} />
              Book Test Drive
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 md:gap-10 max-w-lg mx-auto pt-6 border-t border-[var(--border-subtle)]"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="heading-2 text-[var(--brand-primary)]">
                  <CountUpStat value={stat.value} />
                </h3>
                <p className="body-small text-[var(--text-muted)]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Car composition */}
        <div id="featured-showcase" className="relative mt-16 md:mt-20 h-[300px] sm:h-[380px] md:h-[520px] flex items-center justify-center">
          {/* Ghosted side cars */}
          <motion.img
            src={leftCar.image}
            alt=""
            aria-hidden="true"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden md:block absolute left-0 lg:left-8 w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] object-cover rounded-[2rem] opacity-25 grayscale hero-car-mask"
          />
          <motion.img
            src={rightCar.image}
            alt=""
            aria-hidden="true"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="hidden md:block absolute right-0 lg:right-8 w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] object-cover rounded-[2rem] opacity-25 grayscale hero-car-mask"
          />

          {/* Ground glow */}
          <div className="absolute bottom-2 w-[75%] max-w-md h-20 hero-ground-glow" />

          {/* Active car */}
          <AnimatePresence mode="wait">
            <motion.img
              key={activeCar.id}
              src={activeCar.image}
              alt={activeCar.brand}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{
                opacity: { duration: 0.45 },
                scale: { duration: 0.45 },
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="relative z-10 w-[240px] sm:w-[320px] md:w-[440px] h-[240px] sm:h-[320px] md:h-[380px] object-cover rounded-[2rem] hero-car-mask shadow-2xl"
            />
          </AnimatePresence>

          {/* Spec-tag callouts */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`tags-${activeCar.id}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: -8 }, visible: { opacity: 1, y: 0 } }}
                className="spec-tag absolute top-2 left-2 md:left-10 lg:left-24"
              >
                <span className="spec-tag-dot" />
                Brand: <strong>{activeCar.brand}</strong>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: -8 }, visible: { opacity: 1, y: 0 } }}
                className="spec-tag absolute top-2 right-2 md:right-10 lg:right-24"
              >
                <span className="spec-tag-dot" />
                Category: <strong>{activeCar.category}</strong>
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                className="spec-tag absolute bottom-4 right-2 md:right-8 lg:right-16"
              >
                <span className="spec-tag-dot" />
                Engine: <strong>{activeCar.horsepower} HP</strong>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next controls */}
          <button
            onClick={goPrev}
            aria-label="Previous vehicle"
            className="absolute left-0 md:-left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-[var(--border-medium)] text-white hover:bg-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-all duration-300 hover:scale-110"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next vehicle"
            className="absolute right-0 md:-right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-[var(--border-medium)] text-white hover:bg-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition-all duration-300 hover:scale-110"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Bottom floating spec card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`card-${activeCar.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="relative z-20 -mt-6 md:mt-0 max-w-xl mx-auto bg-[var(--bg-elevated)]/90 backdrop-blur-xl border border-[var(--border-medium)] rounded-3xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl"
          >
            <div className="text-center sm:text-left">
              <p className="body-small text-[var(--text-muted)]">
                Brand: <span className="text-white font-semibold">{activeCar.brand}</span>
              </p>
              <p className="heading-1 text-[var(--brand-primary)]">${activeCar.price.toLocaleString()}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => onViewDetails && onViewDetails(activeCar)}
                className="px-8 py-3.5 rounded bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors duration-300 flex items-center gap-1"
              >
                Details
                <ChevronRight size={16} />
              </button>
              <button
                onClick={onContactClick}
                className="px-8 py-3.5 rounded bg-gradient-to-r from-[var(--brand-primary)] to-[#d92626] hover:shadow-lg text-white text-sm font-semibold transition-all duration-300"
                style={{ boxShadow: '0 6px 20px rgba(255,59,59,0.25)' }}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
