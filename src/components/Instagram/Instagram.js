import { motion } from 'framer-motion';
import './Instagram.css';
import img1 from "../../assets/card-1.png"
import img2 from "../../assets/card-2.png"
import img3 from "../../assets/card-3.png"
import img4 from "../../assets/insta-1.png"
import img5 from "../../assets/insta-2.png"
import img6 from "../../assets/insta-3.png"
const posts = [
  {
    id: 1,
    image: img4,
    alt: 'Drone battery manufacturing',
    likes: '2,847',
  },
  {
    id: 2,
    image: img5,
    alt: 'Battery cell inspection',
    likes: '1,934',
  },
  {
    id: 3,
    image: img6,
    alt: 'Smart charger testing',
    likes: '3,126',
  },
  {
    id: 4,
    image: img3,
    alt: 'Professional power solutions',
    likes: '2,451',
  },
  {
    id: 5,
    image: img2,
    alt: 'UAV battery assembly',
    likes: '1,678',
  },
  {
    id: 6,
    image: img1,
    alt: 'Drone technology lab',
    likes: '4,203',
  },
];

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <path d="M17.5 6.5h.01" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

function Instagram() {
  return (
    <section className="instagram">
      <div className="instagram-inner">
        <motion.div
          className="instagram-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="instagram-subtitle">Social</span>
          <h2 className="instagram-title">Follow Us On Instagram</h2>
          <p className="instagram-desc">
            See the latest drone battery innovations, manufacturing updates, UAV projects, testing processes, and behind-the-scenes content from KAR KITES.
          </p>
          <motion.a
            href="https://www.instagram.com/kitesaerospace"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <InstagramIcon />
            Follow @kitesaerospace
          </motion.a>
        </motion.div>

        <motion.div
          className="instagram-right"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {posts.map((post) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/kitesaerospace"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-post"
              variants={itemVariants}
            >
              <div className="instagram-post-image">
                <motion.img
                  src={post.image}
                  alt={post.alt}
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="instagram-post-overlay">
                  <span className="instagram-post-likes">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                    {post.likes}
                  </span>
                </div>
              </div>
              <div className="instagram-post-corner top-left" />
              <div className="instagram-post-corner top-right" />
              <div className="instagram-post-corner bottom-left" />
              <div className="instagram-post-corner bottom-right" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Instagram;
