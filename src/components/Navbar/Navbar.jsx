import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Adjust the path to your logo image
import searchIcon from '../../assets/search-icon.svg'; // Adjust the path to your search icon image
import userIcon from '../../assets/user.svg'; // Adjust the path to your user icon image
import cartIcon from '../../assets/bag-icon.svg'; // Adjust the path to your cart icon image

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <div className="hamburger-menu" onClick={toggleMenu}>
              <div className={`bar1 ${menuOpen ? 'change' : ''}`}></div>
              <div className={`bar2 ${menuOpen ? 'change' : ''}`}></div>
              <div className={`bar3 ${menuOpen ? 'change' : ''}`}></div>
            </div>
            <div className="search-icon">
              <img src={searchIcon} alt="Search" className="icon" />
              <span className="search-text">Search</span>
            </div>
          </div>
          <div className="navbar-center">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="navbar-right">
            <div className="account-icon">
              <img src={userIcon} alt="Account" className="icon" />
            </div>
            <div className="cart-icon">
              <img src={cartIcon} alt="Cart" className="icon" />
              <span className="cart-count">{cartCount}</span>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="slider-menu">
            <div className="close-icon" onClick={toggleMenu}>
              <div className="bar1 change"></div>
              <div className="bar2 change"></div>
              <div className="bar3 change"></div>
            </div>
            <ul>
              <li><a href="#shop-all">Shop All</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    );
  };
  
  export default Navbar;