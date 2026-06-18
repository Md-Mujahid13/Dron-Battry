import { motion } from 'framer-motion';
import './Features.css';
import card1 from '../../assets/card-1.png';
import card2 from '../../assets/card-2.png';
import card3 from '../../assets/card-3.png';
import card4 from '../../assets/card-4.png';

const features = [
  {
    title: 'Long Battery Life',
    description: 'High-density lithium cells deliver extended flight times, so you can stay in the air longer and push further on every mission.',
    image: card1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="18" height="12" rx="2.5" />
        <rect x="9" y="3" width="4" height="4" rx="1" />
        <path d="M10 11l-2 4h4l-2 4" />
      </svg>
    ),
  },
  {
    title: 'High Performance',
    description: 'Advanced BMS technology delivers consistent discharge rates and maximum power output when you need it most.',
    image: card2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="14" r="8" />
        <path d="M12 14l5-6" />
        <circle cx="12" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Fast Shipping',
    description: 'Orders placed before 2 PM ship same day from our fulfillment centers, with express tracking on every package.',
    image: card3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="9" width="15" height="11" rx="2" />
        <path d="M17 14h2.5l2.5 2.5V20h-2" />
        <path d="M9 20a2 2 0 100-4 2 2 0 000 4z" />
        <path d="M16 20a2 2 0 100-4 2 2 0 000 4z" />
        <path d="M2 14h15" />
      </svg>
    ),
  },
  {
    title: 'Expert Support',
    description: 'Our team of drone specialists is available 24/7 to help with product selection, setup, and technical questions.',
    image: card4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.5V13a8 8 0 0116 0v1.5" />
        <path d="M4 14.5A2 2 0 006 16h1a2 2 0 002-2v-1a2 2 0 00-2-2H4v3z" />
        <path d="M20 14.5A2 2 0 0118 16h-1a2 2 0 01-2-2v-1a2 2 0 012-2h4v3z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

function Features() {
  return (
    <section className="features">
      <div className="features-inner">
        <div className="features-header">
          <span className="features-subtitle">Why KITES</span>
          <h2 className="features-title">Built Different. Built Better.</h2>
          <p className="features-desc">
            Every component is selected for performance. Every detail is engineered for the professional pilot.
          </p>
        </div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} className="feature-card" variants={cardVariants}>
              <div className="feature-card-image">
                <motion.img
                  src={feature.image}
                  alt=""
                  className="feature-card-img"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="feature-card-image-overlay" />
              </div>
              <div className="feature-card-top">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-glow" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
