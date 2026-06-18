import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const navItems = ['Home', 'Products', 'About', 'Contact'];

const LogoIcon = () => (
  <svg className="header-logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="14" width="24" height="4" rx="2" fill="#39FF14" />
    <rect x="8" y="10" width="16" height="12" rx="3" stroke="#fff" strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="16" r="2" fill="#39FF14" />
    <path d="M12 6l2 4M20 6l-2 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 26l1-3M22 26l-1-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10.5" cy="10.5" r="7.5" />
    <path d="M21 21l-5.2-5.2" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M20 21a8 8 0 00-16 0" />
  </svg>
);

const CartIcon = ({ count }) => (
  <>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
    {count > 0 && (
      <motion.span
        key={count}
        className="cart-badge"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 15 }}
      >
        {count > 99 ? '99+' : count}
      </motion.span>
    )}
  </>
);

const HamburgerIcon = ({ isOpen }) => (
  <div className="hamburger-icon">
    <motion.span
      animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    />
    <motion.span
      animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    />
    <motion.span
      animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    />
  </div>
);

const navLinkVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  }),
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07, duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  }),
};

const mobileMenuVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', damping: 30, stiffness: 260, mass: 0.8 },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartCount = 3;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={`header${scrolled ? ' scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="header-inner">
          <motion.a
            className="header-logo"
            href="/"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogoIcon />
            <span className="header-logo-text">
              KIT<span className="header-logo-accent">ES</span>
            </span>
          </motion.a>

          <nav className="header-nav">
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                custom={i}
                variants={navLinkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ color: '#0A0A0A' }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="header-actions">
            {[
              { icon: SearchIcon, label: 'Search' },
              { icon: UserIcon, label: 'Account' },
            ].map(({ icon: Icon, label }) => (
              <motion.button
                key={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label={label}
              >
                <Icon />
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Cart"
            >
              <CartIcon count={cartCount} />
            </motion.button>
            <motion.button
              className="hamburger"
              onClick={() => setMobileOpen((prev) => !prev)}
              whileTap={{ scale: 0.92 }}
              aria-label="Toggle menu"
            >
              <HamburgerIcon isOpen={mobileOpen} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  custom={i}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ x: 6, color: '#39FF14' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
