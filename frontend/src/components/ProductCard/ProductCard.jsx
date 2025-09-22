import React from "react";
import "./ProductCard.css";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function ProductCard({ title, price, oldPrice, discount, image, rating = 4 }) {
  return (
    <div className="product-card">
      <span className="hot-tag">HOT</span>
      <img src={image} alt={title} className="product-img" />
      <h3>{title}</h3>


      <div className="rating">
        {[...Array(5)].map((_, i) =>
          i < rating ? <FaStar key={i} className="star filled" /> : <FaRegStar key={i} className="star" />
        )}
      </div>

   
      <div className="price-box">
        <span className="new-price">${price}</span>
        <span className="old-price">${oldPrice}</span>
        <span className="discount">{discount} Off</span>
      </div>
    </div>
  );
}
