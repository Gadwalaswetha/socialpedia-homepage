import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    {/* Logo Section */}
    <div className="footer-logo">
      <img
        src="https://stonepedia.in/wp-content/uploads/2024/10/white-logo.png"
        alt="Stonepedia Logo"
        className="footer-logo-image"
      />
    </div>

    {/* Description Section */}
    <p>&copy; 2024 Stonepedia. Timeless beauty in every stone.</p>

    {/* Footer Links Section */}
    <div className="footer-links-container">
      <div className="footer-section">
        <h4>Product</h4>
        <ul className="footer-links">
          <li>
            <a href="#stonepedia-exclusive">StonePedia Exclusive</a>
          </li>
          <li>
            <a href="#best-seller">Best Seller</a>
          </li>
          <li>
            <a href="#premium-stones">Premium Stones</a>
          </li>
          <li>
            <a href="#shop-by-color">Shop By Color</a>
          </li>
          <li>
            <a href="#shop-by-category">Shop By Category</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Company</h4>
        <ul className="footer-links">
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#career">Career</a>
          </li>
          <li>
            <a href="#terms-condition">Terms & Conditions</a>
          </li>
          <li>
            <a href="#privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="#cookies-policy">Cookies Policy</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul className="footer-links">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
