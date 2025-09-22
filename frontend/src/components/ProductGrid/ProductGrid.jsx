import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import assets from "../../assets/assets";
import "./ProductGrid.css";

export default function ProductGrid() {
  const products = [
    { title: "Nike Air Max 270 React", price: "299,43", oldPrice: "534,33", discount: "24%", image: assets.nikeAirMax270React },
    { title: "Nike Air Max 270 React", price: "299,43", oldPrice: "534,33", discount: "24%", image: assets.zaraSling },
    { title: "Nike Air Max 270 React", price: "299,43", oldPrice: "534,33", discount: "24%", image: assets.lavieLuke },
    { title: "Nike Air Max 270 React", price: "299,43", oldPrice: "534,33", discount: "24%", image: assets.airmaxSneakers },
    { title: "Nike Air Max 270 React", price: "299,43", oldPrice: "534,33", discount: "24%", image: assets.nikeAirMax270 },
    { title: "Nike Air Max 270 React", price: "299,43", oldPrice: "534,33", discount: "24%", image: assets.nikeAirMax  },
  ];

  return (
    <div className="product-grid">
      {products.map((p, idx) => (
        <ProductCard key={idx} {...p} />
      ))}
    </div>
  );
}
