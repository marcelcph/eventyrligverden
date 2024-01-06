import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './contexts/CartContext';

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Nav from "./components/Header/Nav";
import Banner from "./components/Header/Banner";
import Footer2 from "./components/Footer/Footer2";
import Udsalgsvarer from "./pages/Udsalgsvarer";
import SingleProdukt from "./components/Singleprodukt/SingleProdukt";
import SingleBlog from "./components/Singleblog/SingleBlog";
import Cart from "./pages/Cart";
import Leveringsinfo from "./pages/Leveringsinfo";
import Handelspolitik from "./pages/Handelspolitik";
import Cookiepolitikker from "./pages/Cookiepolitik";
import "./App.css";

function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <Banner />
        <Nav />
        <Routes>
          {/* Define routes with Route */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/udsalg" element={<Udsalgsvarer />} />
          <Route path="/shop/:productId" element={<SingleProdukt />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categorySlug" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<SingleBlog />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/leveringsinfo" element={<Leveringsinfo />} />
          <Route path="/handelspolitik" element={<Handelspolitik />} />
          <Route path="/cookiepolitik" element={<Cookiepolitikker />} />
        </Routes>
        <Footer2 />
      </Router>
      </CartProvider>
    </>
  );
}

export default App;
