import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaCcVisa, FaCcPaypal, FaCcMastercard } from "react-icons/fa";
import logoImage from "../../assets/logo.jpg"; // adjust path if needed

export default function Footer() {
  return (
    <footer className="footer">
    
      <div className="footer-top">
        {/* Logo + Description */}
        <div className="footer-logo">
          <div className="footer-logo-box">
            <img src={logoImage} alt="Logo" className="footer-logo-img" />
            <h3>E-Comm</h3>
          </div>
          <p>
            Since the 1500s, when an unknown printer took a galley of type and 
            scrambled.
          </p>
        </div>

      
        <div className="footer-follow">
          <h4>Follow Us</h4>
          <p>
            Stay connected with us on social media.
          </p>
          <div className="footer-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

      
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>E-Comm, 4578</p>
          <p>Marmora Road,</p>
          <p>Glasgow D04</p>
        </div>
      </div>

   
      <div className="footer-grid">
        <div>
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
             <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4>Service</h4>
          <ul>
            <li>About Us</li>
             <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4>My Account</h4>
          <ul>
             <li>About Us</li>
             <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4>Our Offers</h4>
          <ul>
               <li>About Us</li>
             <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2025 E-Comm. All Rights Reserved.</p>
        <div className="payment-logos">
          <FaCcVisa className="payment-icon" />
          <FaCcPaypal className="payment-icon" />
          <FaCcMastercard className="payment-icon" />
        </div>
      </div>
    </footer>
  );
}
