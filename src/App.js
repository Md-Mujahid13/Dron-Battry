import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Features from './components/Features/Features';
import Collection from './components/Collection/Collection';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Newsletter from './components/Newsletter/Newsletter';
import Instagram from './components/Instagram/Instagram';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Categories />
          <Products />
          <Features />
          <Collection />
          <About />
          <Reviews />
          <Newsletter />
          </main>
          <Instagram />
          <Footer />
          <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
