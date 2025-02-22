import React, { useState } from "react";
import { Box, Typography, Grid, keyframes } from "@mui/material";
import welcome from "../../assets/img/secciones/Fondo3.webp";
import ComicCard from "./Generales/ComicReader";
import appmovil from "../../assets/img/secciones/appmovil.webp";
import page1 from "../../assets/img/secciones/appmovil.webp";
import page2 from "../../assets/img/secciones/appmovil.webp";

import bouncingSvg1 from "../../assets/svg/moni.svg";
import bouncingSvg2 from "../../assets/svg/Recurso 25.svg";
import bouncingSvg3 from "../../assets/svg/ajolote.svg";
import bouncingSvg4 from "../../assets/svg/iconoar.svg";
import Comic1 from "./Comics/Example";
import ComicViewer from "./Comics/turn";
import FlipBook from "./Comics/FlipPage";
import AllComics from "./Comics/AllComics";

function Comics() {
  const comics = [
    {
      title: "Comic 1",
      image: appmovil,
      pages: [appmovil, page1, page2],
    },
    {
      title: "Comic 2",
      image: appmovil,
      pages: [page1, page2],
    },
    // Repite más elementos según sea necesario
  ];

  const bounceAnimation = keyframes`
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  `;

  const images = [
    "https://res.cloudinary.com/dldwyf0jg/image/upload/v1734977184/hydroplay/modulos/pxc2acq14khrsoyg8645.png",
    "https://res.cloudinary.com/dldwyf0jg/image/upload/v1734977184/hydroplay/modulos/pxc2acq14khrsoyg8645.png",
    "https://res.cloudinary.com/dldwyf0jg/image/upload/v1734977184/hydroplay/modulos/pxc2acq14khrsoyg8645.png",
    "https://res.cloudinary.com/dldwyf0jg/image/upload/v1734977184/hydroplay/modulos/pxc2acq14khrsoyg8645.png",
  ];

  return (
    <Box
      id="comics"
      sx={{
        backgroundImage: `url(${welcome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        py: 8,
        minHeight: "85vh",
        position: "relative", // Hace que los elementos hijos se restrinjan al contenedor
        overflow: "hidden", // Asegura que nada salga del contenedor
      }}
    >
      <Box sx={{ ml: 2, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            left: { xs: "-5%", md: "70%" },
            top: { xs: "50%", md: "-10%"},
            bottom: { xs: "0%", md: "170%" },
            transform: { xs: "translateX(-50%)", sm: "none" }, // Center horizontally on mobile
          }}
        >
          <Box
            component="img"
            src={bouncingSvg1}
            alt="Bouncing SVG 1"
            sx={{
              position: "absolute",
              
              width: { xs: "120px", md: "160px" },
              height: { xs: "120px", md: "160px" },
              animation: `${bounceAnimation} 2s infinite ease-in-out`,
              transform: { xs: "translateX(-50%)", sm: "none" }, // Center the image horizontally on mobile
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            left: { xs: "70%", sm: "80%" },
            top: { xs: "80%" },
            display: { xs: "none" },
            transform: { xs: "translateX(-50%)", sm: "none" }, // Center horizontally on mobile
          }}
        >
          <Box
            component="img"
            src={bouncingSvg2}
            alt="Bouncing SVG 2"
            sx={{
              position: "absolute",
              bottom: { xs: "10%", md: "200%" }, // Adjust bottom positioning for mobile
              left: { xs: "10%", md: "-350%" }, // Adjust left positioning for mobile
              width: { xs: "120px", md: "160px" },
              height: { xs: "120px", md: "160px" },
              display: { xs: "none" },
              animation: `${bounceAnimation} 2s infinite ease-in-out`,
              transform: { xs: "translateX(-50%)", sm: "none" }, // Center the image horizontally on mobile
            }}
          />
        </Box>
      </Box>

      <AllComics />
    </Box>
  );
}

export default Comics;
