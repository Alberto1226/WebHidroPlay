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
        minHeight: "75vh",
        position: "relative", // Hace que los elementos hijos se restrinjan al contenedor
        overflow: "hidden", // Asegura que nada salga del contenedor
      }}
    >
      <Box sx={{ ml: 2, position: "relative" }}>
        <Typography
          variant="h3"
          color="#9359b4"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "3rem" }, // Smaller font size on mobile
            textAlign: { xs: "center", sm: "left" },
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold", // Center text on mobile, left-align on larger screens
          }}
        >
          Comics AR
        </Typography>

        <Typography
          variant="body1"
          color="#4972cf"
          paragraph
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" }, // Smaller font size on mobile
            textAlign: { xs: "center", sm: "left" }, // Center text on mobile, left-align on larger screens
          }}
        >
          Disfruta de los Comics AR de HIDROPLAY desde tu dispositivo móvil.
        </Typography>

        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            left: { xs: "-5%", md: "70%" },
            top: { xs: "60%" },
            transform: { xs: "translateX(-50%)", sm: "none" }, // Center horizontally on mobile
          }}
        >
          <Box
            component="img"
            src={bouncingSvg1}
            alt="Bouncing SVG 1"
            sx={{
              position: "absolute",
              bottom: { xs: "0%", md: "100%" }, // Adjust bottom positioning for mobile
              left: { xs: "50%", md: "60%" }, // Adjust left positioning for mobile
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
            display: {xs:'none'},
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
              display: {xs:'none'},
              animation: `${bounceAnimation} 2s infinite ease-in-out`,
              transform: { xs: "translateX(-50%)", sm: "none" }, // Center the image horizontally on mobile
            }}
          />
        </Box>
      </Box>

      <Box sx={{ p: 3 }}>
        <Grid container spacing={4}>
          {comics.map((comic, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ComicCard
                image={comic.image}
                title={comic.title}
                comicPages={comic.pages}
              />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            left: { xs: "-5%" },
            top: "90%",
            mt: 4,
          }}
        >
          <Box
            component="img"
            src={bouncingSvg3}
            alt="Bouncing SVG 2"
            sx={{
              position: "absolute",
              bottom: "200%",
              left: "-350%",
              width: { xs: "120px", md: "160px" },
              height: { xs: "120px", md: "160px" },
              animation: `${bounceAnimation} 2s infinite ease-in-out`,
            }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: "90%",
            left: { xs: "70%", md: "80%" },
            mt: 4,
          }}
        >
          <Box
            component="img"
            src={bouncingSvg4}
            alt="Bouncing SVG 2"
            sx={{
              position: "absolute",
              bottom: "200%",
              display: "none",
              left: "-350%",
              width: { xs: "120px", md: "160px" },
              height: { xs: "120px", md: "160px" },
              animation: `${bounceAnimation} 2s infinite ease-in-out`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Comics;
