import React from "react";
import "./Hero.css";
import icon from "../../assets/icon.jpg"; // adjust path if needed

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Adidas Men Running Sneakers</h1>
        <p>Performance and design. Taken right to the edge.</p>
        <button className="hero-btn">SHOP NOW</button>
      </div>
      <img
        src={icon} // use local image
        alt="Sneaker"
        className="hero-img"
      />
    </section>
  );
}
