import React from "react";
import Turn from "./turn";

const options = {
  width: 800,
  height: 600,
  autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: true,
  when: {
    turned: function (e, page) {
      console.log("Página actual: ", window.$(this).turn("view"));
    }
  }
};

const pages = [
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
  "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg"
];

const Comic1 = () => {
  return (
    <div className="flipbook-viewport">
      <div className="container">
        <Turn options={options} className="magazine">
          {pages.map((page, index) => (
            <div key={index} className="page">
              <img src={page} alt={`Página ${index + 1}`} className="comic-page" />
            </div>
          ))}
        </Turn>
      </div>
    </div>
  );
};

export default Comic1;
