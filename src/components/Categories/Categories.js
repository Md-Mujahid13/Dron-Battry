import { motion } from 'framer-motion';
import './Categories.css';
import cat1 from '../../assets/card-1.png';
import cat2 from '../../assets/card-2.png';
import cat3 from '../../assets/card-3.png';
import cat4 from '../../assets/card-4.png';

const categories = [
  {
    title: 'Drone Batteries',
    description: 'High-density lithium cells engineered for maximum flight time and consistent power delivery.',
    image: cat1,
  },
  {
    title: 'Fast Chargers',
    description: 'Intelligent charging systems with real-time monitoring and rapid charge capabilities.',
    image: cat2,
  },
  {
    title: 'Accessories',
    description: 'Premium cables, adapters, and carrying solutions built for the professional pilot.',
    image: cat3,
  },
  {
    title: 'Professional Series',
    description: 'Enterprise-grade power systems for industrial applications and heavy-lift operations.',
    image: cat4,
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function Categories() {
  return (
    <section className="categories">
      <div className="categories-inner">
        <div className="categories-header">
          <span className="categories-subtitle">Product Range</span>
          <h2 className="categories-title">Featured Categories</h2>
          <p className="categories-desc">
            Engineered for every mission. From recreational flights to professional operations.
          </p>
        </div>

        <motion.div
          className="categories-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.div key={cat.title} className="category-card" variants={cardVariants}>
              <div className="category-card-image">
                <motion.img
                  src={cat.image}
                  alt={cat.title}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="category-card-image-overlay" />
              </div>
              <div className="category-card-body">
                <h3 className="category-card-title">{cat.title}</h3>
                <p className="category-card-desc">{cat.description}</p>
                <motion.button
                  className="category-card-btn"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  Shop Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Categories;
