import { motion } from 'framer-motion';
import './About.css';
import img from "../../assets/card-4.png"
function About() {
  return (
    <section className="about">
      <div className="about-inner">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-image-inner">
            <img
              src={img}
              alt="KITES drone battery technology"
            />
          </div>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="about-tag">About KITES</span>
          <h2 className="about-title">Powering the Future of Flight</h2>
          <p className="about-story">
            KITES was born from a simple belief — that the people pushing the limits of flight deserve power
            they can trust. Founded by drone engineers and battery technologists, we set out to build energy
            solutions that match the ambition of modern aviation.
          </p>

          <div className="about-statements">
            <div className="about-statement">
              <span className="statement-label">Our Mission</span>
              <p className="statement-text">
                To engineer the most reliable, highest-density power systems for unmanned aviation —
                enabling longer flights, heavier payloads, and safer operations worldwide.
              </p>
            </div>
            <div className="about-statement">
              <span className="statement-label">Our Vision</span>
              <p className="statement-text">
                A world where battery technology never limits what drones can achieve. We envision
                seamless, intelligent power that evolves with the demands of tomorrow's airspace.
              </p>
            </div>
          </div>

          <motion.button
            className="about-btn"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn Our Story
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
