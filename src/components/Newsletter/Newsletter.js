import { motion } from 'framer-motion';
import './Newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-inner">
        <motion.div
          className="newsletter-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="newsletter-subtitle">Stay Connected</span>
          <h2 className="newsletter-title">Join the AERION Community</h2>
          <p className="newsletter-desc">
            Be the first to know about new product launches, exclusive offers, and advancements in drone battery technology.
          </p>

          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <motion.button
                type="submit"
                className="newsletter-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Subscribe
              </motion.button>
            </div>
            <p className="newsletter-note">No spam. Unsubscribe anytime.</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Newsletter;
