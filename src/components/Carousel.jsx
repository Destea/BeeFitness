import React, { useEffect, useRef } from "react";

const Carousel = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-item");
    const imageCarousel = document.getElementById("image-carousel");

    const nextImage = () => {
      images[currentIndex].style.opacity = 0;

      currentIndex = (currentIndex + 1) % images.length;

      images[currentIndex].style.opacity = 1;
    };

    const interval = setInterval(nextImage, 4000);

    // Stop the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return <div className="maintoheader-image" ref={imageRef}></div>;
};

export default Carousel;
