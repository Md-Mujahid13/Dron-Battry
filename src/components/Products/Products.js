import { useState } from 'react';
import { motion } from 'framer-motion';
import './Products.css';
import prod1 from '../../assets/card-1.png';
import prod2 from '../../assets/card-2.png';
import prod3 from '../../assets/card-3.png';
import prod4 from '../../assets/card-4.png';

const products = [
  {
    id: 1,
    title: 'AERION Pro Battery 5000mAh',
    description: 'High-density lithium cell with smart BMS for extended flight times.',
    price: 249.00,
    rating: 5,
    image: prod1,
  },
  {
    id: 2,
    title: 'AERION Smart Charger Pro',
    description: 'Intelligent 4-channel charger with real-time monitoring.',
    price: 189.00,
    rating: 4,
    image: prod3,
  },
  {
    id: 3,
    title: 'AERION Battery 3500mAh',
    description: 'Compact power solution for lightweight drones and racing quads.',
    price: 179.00,
    rating: 5,
    image: prod2,
  },
  {
    id: 4,
    title: 'AERION Power Bank Kit',
    description: 'Portable charging station with dual output and flight case.',
    price: 129.00,
    rating: 4,
    image: prod4,
  },
  {
    id: 5,
    title: 'AERION Professional 8000mAh',
    description: 'Enterprise-grade battery for heavy-lift and industrial drones.',
    price: 449.00,
    rating: 5,
    image: prod1,
  },
  {
    id: 6,
    title: 'AERION QuickCharge Station',
    description: '60W fast charger with intelligent power distribution.',
    price: 99.00,
    rating: 4,
    image: prod3,
  },
  {
    id: 7,
    title: 'AERION Battery Case',
    description: 'Premium protective case with custom foam inserts.',
    price: 69.00,
    rating: 3,
    image: prod4,
  },
  {
    id: 8,
    title: 'AERION Elite 10000mAh',
    description: 'Ultimate endurance battery with graphene-enhanced cells.',
    price: 599.00,
    rating: 5,
    image: prod2,
  },
];

const Stars = ({ rating }) => (
  <div className="stars">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill={star <= rating ? '#39FF14' : 'none'} stroke="#39FF14" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const WishlistIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={active ? '#39FF14' : 'none'} stroke={active ? '#39FF14' : 'rgba(255,255,255,0.3)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
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

function Products() {
  const [wishlist, setWishlist] = useState(new Set());

  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const formatPrice = (amount) =>
    '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <section className="products">
      <div className="products-inner">
        <div className="products-header">
          <span className="products-subtitle">Best Sellers</span>
          <h2 className="products-title">Best Selling Products</h2>
          <p className="products-desc">
            Our most trusted power solutions, chosen by professional pilots worldwide.
          </p>
        </div>

        <motion.div
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product) => (
            <motion.div key={product.id} className="product-card" variants={cardVariants}>
              <div className="product-card-image">
                <motion.img
                  src={product.image}
                  alt={product.title}
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.button
                  className="wishlist-btn"
                  onClick={() => toggleWishlist(product.id)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={wishlist.has(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <motion.span
                    animate={wishlist.has(product.id) ? { scale: [1, 1.25, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    <WishlistIcon active={wishlist.has(product.id)} />
                  </motion.span>
                </motion.button>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">{product.title}</h3>
                <p className="product-card-desc">{product.description}</p>
                <Stars rating={product.rating} />
                <div className="product-card-footer">
                  <span className="product-card-price">{formatPrice(product.price)}</span>
                  <motion.button
                    className="add-to-cart-btn"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Products;
