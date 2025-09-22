import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Hero from "./components/Hero/Hero";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Pagination from "./components/Pagination/Pagination";
import Footer from "./components/Footer/Footer";
import "./Layout.css";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        <Sidebar />
        <main className="main-content">
          <Hero />
          <ProductGrid />
          <Pagination />
        </main>
      </div>
      <Footer />
    </div>
  );
}
