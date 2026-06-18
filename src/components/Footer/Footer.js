import { motion } from 'framer-motion';
import './Footer.css';

const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="14" width="24" height="4" rx="2" fill="#39FF14" />
    <rect x="8" y="10" width="16" height="12" rx="3" stroke="#fff" strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="16" r="2" fill="#39FF14" />
    <path d="M12 6l2 4M20 6l-2 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 26l1-3M22 26l-1-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const quickLinks = ['Home', 'Products', 'About', 'Contact', 'FAQ', 'Support'];
const categories = ['Drone Batteries', 'Fast Chargers', 'Accessories', 'Professional Series'];

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><path d="M17.5 6.5h.01" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" /><path d="M9.75 15.02l5.75-3.27-5.75-3.27v6.54z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: YouTubeIcon, label: 'YouTube', href: '#' },
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const colVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <motion.div
          className="footer-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="footer-col footer-brand" variants={colVariants}>
            <div className="footer-logo">
              <LogoIcon />
              <span className="footer-logo-text">AER<span className="footer-logo-accent">ION</span></span>
            </div>
            <p className="footer-desc">
              Premium drone battery technology engineered for professional pilots who demand uncompromising performance, reliability, and endurance.
            </p>
            <div className="footer-social">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="footer-social-link"
                  whileHover={{ scale: 1.15, color: '#39FF14', backgroundColor: 'rgba(201,169,110,0.1)' }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="footer-col" variants={colVariants}>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={link === 'Home' ? '/' : `#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-col" variants={colVariants}>
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-list">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}>{cat}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-col" variants={colVariants}>
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-list footer-contact">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                <span>hello@aerion.com</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="footer-bottom">
          <div className="footer-divider" />
          <div className="footer-bottom-inner">
            <p className="footer-copy">&copy; 2026 AERION. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
