import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Nav from "./components/Header/Nav";
import Banner from "./components/Header/Banner";
import Footer2 from "./components/footer/Footer2";
import SingleProdukt from "./components/Singleprodukt/SingleProdukt";
import SingleBlog from "./components/Singleblog/SingleBlog";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Banner />
        <Nav />
        <Routes>
          {/* Define routes with Route */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<SingleProdukt />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<SingleBlog />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer2 />
      </Router>
    </>
  );
}

export default App;
