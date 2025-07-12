import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home';
import ProductList from './pages/ProductList.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Returns from './pages/Returns.jsx';
import NotFound from './pages/NotFound.jsx';

import { CartProvider } from './hooks/useCart.jsx';
import { ReturnsProvider } from './hooks/ReturnsContext.jsx';

function App() {
  return (
    <CartProvider>
      <ReturnsProvider>
        <Router>
          <Navbar />
          <main style={{ padding: '1rem' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ReturnsProvider>
    </CartProvider>
  );
}

export default App;
