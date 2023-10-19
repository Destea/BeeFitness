import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";
import Image1 from "../images/main_header2.png";
import Image2 from "../images/main_header3.png";

const MainHeader = () => {
  // Define an array of image sources
  const images = [Image, Image1, Image2];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the carousel animation
  useEffect(() => {
    const timer = setTimeout(() => {
      // Calculate the next index, wrapping around at the end
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 5000); // Change image every 5 seconds

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <header className="maintoheader">
      <div className="container maintoheader-container">
        <div className="maintoheader-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.
          </p>
          <Link to="/plans" className="bttn lg">Get Started</Link>
        </div>
        <div className="maintoheader-right">
          <div className="maintoheader-circle"></div>
          <div className="maintoheader-image">
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="carousel-item" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
