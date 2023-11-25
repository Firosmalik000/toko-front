import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DetailUser from './pages/DetailUser';
import Footer from './components/Footer';
import Delivery from './pages/Checkout';
import Checkout from './pages/Checkout';
import Invoice from './pages/invoicepage';
import ProductList from './pages/pagecoba';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/" element={<Home />} />
          <Route path="/detailuser" element={<DetailUser />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/coba" element={<ProductList />} />
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
};

export default App;
