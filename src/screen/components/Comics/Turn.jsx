import React, { useEffect, useRef } from "react";
import "turn.js";
const ComicViewer = ({ images = [] }) => {
  const flipbookRef = useRef(null);

  useEffect(() => {
    console.log("🚀 ~ Imágenes procesadas:", images);

    if (!images || images.length === 0) {
      console.error("❌ Error: No se han recibido imágenes.");
      return;
    }

    if (window.jQuery) {
      window.$ = window.jQuery;

      if (typeof window.$.fn.turn !== "function") {
        console.error("❌ Turn.js no está correctamente cargado.");
        return;
      }

      window.$(flipbookRef.current).turn({
        width: 922,
        height: 600,
        elevation: 50,
        gradients: true,
        autoCenter: true,
      });
    }

    return () => {
      if (flipbookRef.current) {
        window.$(flipbookRef.current).turn("destroy");
      }
    };
  }, [images]);

  return (
    <div className="flipbook-viewport">
      <div className="container">
        <div className="flipbook" ref={flipbookRef}>
          {images.length > 0 ? (
            images.map((src, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "600px",
                }}
              ></div>
            ))
          ) : (
            <p style={{ textAlign: "center", paddingTop: "250px" }}>
              ⚠️ No hay imágenes disponibles.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComicViewer;
