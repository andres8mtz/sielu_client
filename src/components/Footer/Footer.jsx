import React from 'react';
import './Footer.css';

import instagram from '../../assets/instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com">
                <img src={instagram} alt="Cart" className="icon" />
            <i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://www.pinterest.com"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@sielu.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Sielu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;