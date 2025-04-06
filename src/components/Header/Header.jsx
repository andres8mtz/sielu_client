import React from 'react';
import './Header.css';
import desktopImage from '../../assets/desktop-image.jpg';
import mobileImage from '../../assets/mobile-image.jpg';
const Header = () => {
  return (
    <header className="header">
      <a href="#shop" className="header-link">
        <img src={desktopImage} alt="Shop Now" className="header-image desktop-image" />
        <img src={mobileImage} alt="Shop Now" className="header-image mobile-image" />
      </a>
    </header>
  );
};

export default Header;