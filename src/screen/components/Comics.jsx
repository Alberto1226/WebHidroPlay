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
        <Typography variant="h3" color="#9359b4" component="h2" gutterBottom>
          Comics AR
        </Typography>
        <Typography variant="body1" color="#4972cf" paragraph>
          Disfruta de los Comics AR de HIDROPLAY desde tu dispositivo móvil.
        </Typography>

        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            left: '70%',
          }}
        >
          <Box
            component="img"
            src={bouncingSvg1}
            alt="Bouncing SVG 1"
            sx={{
              position: "absolute",
              bottom: "100%",
              left: "60%",
              width: "160px",
              height: "160px",
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
            left: '80%',
            
          }}
        >
          <Box
            component="img"
            src={bouncingSvg2}
            alt="Bouncing SVG 1"
            sx={{
              position: "absolute",
              bottom: "200%",
              left: "-350%",
              width: "160px",
              height: "160px",
              animation: `${bounceAnimation} 2s infinite ease-in-out`,
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
            top:'90%',
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
              width: "160px",
              height: "160px",
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
            top:'90%',
            left: '85%',
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
              left: "-350%",
              width: "160px",
              height: "160px",
              animation: `${bounceAnimation} 2s infinite ease-in-out`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Comics;
