import React from "react";
import HTMLFlipBook from "react-pageflip";

const FlipBook = ({ images }) => {
  return (
    <div className="flipbook-container">
      <HTMLFlipBook width={400} height={500} showCover={true}>
        {images.map((image, index) => (
          <div className="page" key={index}>
            <img src={image} alt={`Page ${index + 1}`} className="page-image" />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default FlipBook;
