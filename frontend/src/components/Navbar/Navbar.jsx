import React from "react";
import { FaShoppingCart } from "react-icons/fa"; 
import "./Navbar.css";
import logo from "../../assets/logo.jpg";


export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          E-Comm
        </div>
        <ul className="nav-links">
          <li className="active">HOME</li>
          <li>BAG</li>
          <li>SNEAKERS</li>
          <li>BELT</li>
          <li>CONTACT</li>
        </ul>
        <div className="cart-info">
          <FaShoppingCart className="cart-icon" /> Items $0.00
        </div>
      </nav>
      <div className="main-content">
        
      </div>
    </>
  );
}
