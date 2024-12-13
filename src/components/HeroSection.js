import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(
    "Experience The World Of Natural Stones Like Never Before"
  );

  const texts = [
    "Experience The World Of Natural Stones Like Never Before",
    "Your One-Stop Platform For The World's Finest Natural Stones",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setCurrentText(texts[index]);
    }, 5000); // Change text every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <div className="animated-text">{currentText}</div>
    </div>
  );
};

export default HeroSection;
