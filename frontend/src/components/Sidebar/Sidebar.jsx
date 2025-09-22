import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__section">
        <h3 className="sidebar__title">Hot Deals</h3>
        <ul className="sidebar__list">
          <li>Nike</li>
          <li className="sidebar__item--active">Airmax <span className="sidebar__count">(48)</span></li>
          <li>Adidas</li>
          <li>Vans</li>
          <li>All Stars</li>
        </ul>
      </div>

      <div className="sidebar__section">
        <h3 className="sidebar__title">PRICES</h3>
        <p className="sidebar__price-range">$13.99 – $25.99</p>
        <input type="range" className="sidebar__range" />
      </div>

      <div className="sidebar__section">
        <h3 className="sidebar__title">COLOR</h3>
        <div className="sidebar__colors">
           <span className="sidebar__dot blue"></span>
          <span className="sidebar__dot red"></span>
          <span className="sidebar__dot black"></span>
          <span className="sidebar__dot yellow"></span>
          <span className="sidebar__dot pink"></span>
           <span className="sidebar__dot lite yellow"></span>
        </div>
      </div>

      <div className="sidebar__section">
        <h3 className="sidebar__title">BRAND</h3>
        <ul className="sidebar__list">
          <li>Nike</li>
          <li>Adidas</li>
          <li>Siemens</li>
        </ul>
      </div>
    </aside>
  );
}
