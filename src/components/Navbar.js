import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showContact, setShowContact] = useState(false);

  const toggleContactDetails = () => {
    setShowContact(!showContact);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png"
            alt="Logo"
            className="image"
          />
        </div>
        <ul className="nav-links">
          <input
            type="text"
            placeholder="Search for products..."
            className="search-bar"
          />
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <button className="contact-button" onClick={toggleContactDetails}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
      {showContact && (
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>
            <strong>Email:</strong> support@example.com
          </p>
          <p>
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p>
            <strong>Address:</strong> 123 React St, JavaScript City, Web
          </p>
        </div>
      )}
    </>
  );
};

export default Navbar;
