import React, { useEffect } from "react";
import "./App.css";

import Objectives from "./screen/components/Objetives";
import VirtualTour from "./screen/components/VirtualTour";
import Modules from "./screen/components/Modules";
import Comics from "./screen/components/Comics";
import MobileApp from "./screen/components/MovilApp";
import Footer from "./screen/components/Footer";
import Navbar from "./screen/components/NavBar/NavBar";
import HeaderBanner from "./screen/components/HeaderBanner";
import Welcome from "./screen/components/Welcome";


function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div className="App">
      <div style={{ width: "100%" }}>
        <HeaderBanner />
        <Navbar/>
        <Welcome />
        <Objectives />
        <VirtualTour />
        <Modules />
        <MobileApp />
        <Comics />
        <Footer />
      </div>
    </div>
  );
}

export default App;
