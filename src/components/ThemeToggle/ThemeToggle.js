import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="theme-toggle-corner top-left" />
      <span className="theme-toggle-corner top-right" />
      <span className="theme-toggle-corner bottom-left" />
      <span className="theme-toggle-corner bottom-right" />
      <motion.span
        className="theme-toggle-icon"
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </motion.span>
      <span className="theme-toggle-label">{isDark ? 'DARK' : 'LIGHT'}</span>
    </motion.button>
  );
}

export default ThemeToggle;
