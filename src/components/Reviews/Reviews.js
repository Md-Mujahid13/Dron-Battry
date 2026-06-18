import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Reviews.css';

const reviews = [
  {
    name: 'James Mitchell',
    role: 'Commercial Drone Pilot',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    rating: 5,
    text: 'The AERION Pro 5000mAh batteries have completely transformed my workflow. I\'m getting an extra 12 minutes of flight time compared to my previous batteries. The build quality is exceptional and the smart BMS gives me real confidence on commercial shoots.',
  },
  {
    name: 'Sarah Chen',
    role: 'Aerial Photography Studio',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80',
    rating: 5,
    text: 'We run a fleet of six drones for real estate and cinematography work. AERION batteries have been a game-changer. Consistent performance, fast charging, and they\'ve held up beautifully after hundreds of cycles.',
  },
  {
    name: 'Marcus Rivera',
    role: 'Agricultural Drone Operator',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
    rating: 4,
    text: 'Reliability is everything in precision agriculture. These batteries handle the heat, dust, and long days in the field without skipping a beat. The 8000mAh Pro gets me through full property surveys on a single charge.',
  },
  {
    name: 'Elena Novak',
    role: 'Drone Racing Champion',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
    rating: 5,
    text: 'When you\'re pushing 120mph through a gate, you need power you can trust to the millisecond. AERION delivers consistent discharge curves that make my tuning rock solid. These are now the only packs I race with.',
  },
];

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#39FF14" stroke="#39FF14" strokeWidth="1">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const cardVariants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function Reviews() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startInterval]);

  const goTo = useCallback((i) => {
    setIndex(i);
    startInterval();
  }, [startInterval]);

  const next = useCallback(() => {
    goTo((index + 1) % reviews.length);
  }, [index, goTo]);

  const prev = useCallback(() => {
    goTo((index - 1 + reviews.length) % reviews.length);
  }, [index, goTo]);

  const review = reviews[index];

  return (
    <section className="reviews">
      <div className="reviews-bg-orb" />
      <div className="reviews-bg-orb orb-2" />

      <div className="reviews-inner">
        <div className="reviews-header">
          <span className="reviews-subtitle">Testimonials</span>
          <h2 className="reviews-title">Trusted by Pilots Worldwide</h2>
        </div>

        <div className="reviews-carousel">
          <motion.button
            className="review-arrow review-arrow-left"
            onClick={prev}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.92 }}
            aria-label="Previous review"
          >
            <ArrowLeft />
          </motion.button>

          <div className="review-card-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="review-card"
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.12)' }}
              >
                <div className="review-card-top">
                  <div className="review-author">
                    <div className="review-photo">
                      <img src={review.photo} alt={review.name} />
                    </div>
                    <div>
                      <span className="review-name">{review.name}</span>
                      <span className="review-role">{review.role}</span>
                    </div>
                  </div>
                  <div className="review-rating">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                </div>
                <p className="review-text">"{review.text}"</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            className="review-arrow review-arrow-right"
            onClick={next}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.92 }}
            aria-label="Next review"
          >
            <ArrowRight />
          </motion.button>
        </div>

        <div className="review-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`review-dot${i === index ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
