import "./App.css";
import "./bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import ProductView from "./pages/ProductView";
import Pnf from "./pages/Pnf";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Product Details */}
        <Route path="/product/:id" element={<ProductView />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Wishlist */}
        <Route path="/wish" element={<Wishlist />} />

        {/* Page Not Found */}
        <Route path="*" element={<Pnf />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
