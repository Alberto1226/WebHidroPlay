import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

const generateComicImages = (comicNumber) => {
  const baseURL = `https://hydroplay.mx/comics/comic${comicNumber}/`;
  return [
    `${baseURL}portada${comicNumber}.png`,
    `${baseURL}pag1.png`,
    `${baseURL}pag2.png`,
    `${baseURL}contraportada.png`
  ];
};

const comics = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Cómic ${i + 1}`,
  images: generateComicImages(i + 1),
}));

const AllComics = () => {
  const [selectedComic, setSelectedComic] = useState(comics[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 400, height: 500 });
  const flipBookRef = useRef(null);

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth;
      const newWidth = screenWidth < 600 ? screenWidth * 0.9 : 400;
      const newHeight = newWidth * 1.25;
      setDimensions({ width: newWidth, height: newHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleComicChange = (e) => {
    setIsLoading(true);
    const newComic = comics[e.target.value - 1];

    setTimeout(() => {
      setSelectedComic(newComic);
      setIsLoading(false);
    }, 1000); // Simula una carga de 1 segundo
  };

  return (
    <div className="allcomics-container">
      <h1 style={{color:"#9359b4"}}>Biblioteca de Cómics</h1>
      
      <div className="comic-selector-container">
        <select className="comic-selector" onChange={handleComicChange} disabled={isLoading}>
          {comics.map((comic) => (
            <option key={comic.id} value={comic.id}>
              {comic.title}
            </option>
          ))}
        </select>
        <span className="custom-arrow">▼</span>
      </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Cargando cómic...</p>
        </div>
      ) : (
        <div className="flipbook-container">
          <HTMLFlipBook
            width={dimensions.width}
            height={dimensions.height}
            showCover={true}
            mobileScrollSupport={true}
            ref={flipBookRef}
          >
            {selectedComic.images.map((image, index) => (
              <div className="page" key={index}>
                <img src={image} alt={`Page ${index + 1}`} className="page-image" />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      )}
    </div>
  );
};

export default AllComics;
