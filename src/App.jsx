import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './components/Home/Home'; 
import Product from './components/products/Product';
import ShoppingCart from './components/shopingcart/ShoppingCart'; 
import Checkout from './components/checkout/Checkout'; 
import About from './components/about/About'; 
import Contact from './components/contact/Contact'; 
import Blog from './components/blog/Blog'; 
import Auth from './components/auth/Auth'; // <-- 1. MAKE SURE THIS IS IMPORTED

const App = () => {
  return (
    <>
      <Navbar />
      
      <main className="pt-[90px] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/auth" element={<Auth />} /> {/* <-- 2. MAKE SURE THIS IS HERE */}
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;