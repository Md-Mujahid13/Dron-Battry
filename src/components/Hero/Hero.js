import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';
import img from "../../assets/hero-section-3.jpg"
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?auto=format&fit=crop&w=1920&q=80',
    headline: 'Power That Lifts',
    description: 'Premium drone batteries engineered for endurance, performance, and the demands of professional flight.',
  },
  {
    image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=1920&q=80',
    headline: 'Engineered for Altitude',
    description: 'High-density cells with intelligent thermal management for consistent power at every elevation.',
  },
  {
    image: img,
    headline: 'Fly Further. Fly Longer.',
    description: 'Extended flight times powered by advanced lithium technology and precision engineering.',
  },
];

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
  }, []);

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startInterval]);

  useEffect(() => {
    slides.forEach((s) => { const img = new Image(); img.src = s.image; });
  }, []);

  const goTo = useCallback((index) => {
    setSlideIndex(index);
    startInterval();
  }, [startInterval]);

  const next = useCallback(() => {
    goTo((slideIndex + 1) % slides.length);
  }, [slideIndex, goTo]);

  const prev = useCallback(() => {
    goTo((slideIndex - 1 + slides.length) % slides.length);
  }, [slideIndex, goTo]);

  const slide = slides[slideIndex];

  return (
    <section className="hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={slideIndex}
          className="hero-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            className="hero-zoom"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4, ease: 'easeOut' }}
          >
            <img src={slide.image} alt="" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-content-inner">
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex}
              className="hero-text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1>{slide.headline}</h1>
              <p>{slide.description}</p>
              <div className="hero-buttons">
                <motion.button
                  className="btn-glass btn-primary"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Shop Now
                </motion.button>
                <motion.button
                  className="btn-glass btn-secondary"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Collection
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <motion.button
            className="hero-arrow hero-arrow-left"
            onClick={prev}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.12)' }}
            whileTap={{ scale: 0.92 }}
            aria-label="Previous slide"
          >
            <ArrowLeft />
          </motion.button>
          <motion.button
            className="hero-arrow hero-arrow-right"
            onClick={next}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.12)' }}
            whileTap={{ scale: 0.92 }}
            aria-label="Next slide"
          >
            <ArrowRight />
          </motion.button>
        </>
      )}

      {slides.length > 1 && (
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === slideIndex ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Hero;
