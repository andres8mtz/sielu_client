import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="logo">Sielu</div>
        <div className="navbar-right">
          <div className="search-icon">
            <i className="fas fa-search"></i>
          </div>
          <div className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">{cartCount}</span>
          </div>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;