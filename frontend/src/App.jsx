import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ProductGrid from "./components/ProductGrid/ProductGrid.jsx";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import Pagination from "./components/Pagination/Pagination.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";  
function App() {
  return (
    <>
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <Hero />
          <ProductGrid />
              <ProductCard />
          <Pagination />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
