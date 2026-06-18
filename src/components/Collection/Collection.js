import { motion } from 'framer-motion';
import './Collection.css';
import img from "../../assets/card-4.png"
function Collection() {
  return (
    <section className="collection">
      <div className="collection-inner">
        <motion.div
          className="collection-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="collection-tag">Featured Collection</span>
          <h2 className="collection-title">The Professional Series</h2>
          <p className="collection-desc">
            Engineered for the demands of professional drone operations. Our most advanced battery technology, precision-crafted for those who need uncompromising performance in the field.
          </p>
          <motion.button
            className="collection-btn"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore the Collection
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        <motion.div
          className="collection-image"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="collection-image-inner"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={img}
              alt="Professional Series drone battery"
            />
            <div className="collection-image-glow" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Collection;
