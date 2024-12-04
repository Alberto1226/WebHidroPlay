import React from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import bg from "../../assets/img/secciones/fondo_Modulos.webp";
import DynamicImageCarousel from "./Generales/Carousel";


import mod1 from "../../assets/png/mod1.png";
import mod2 from "../../assets/png/mod2.png";
import mod3 from "../../assets/png/mod3.png";
import mod4 from "../../assets/png/mod4.png";
import mod5 from "../../assets/png/mod5.png";
import mod6 from "../../assets/png/mod6.png";
import mod7 from "../../assets/png/mod7.png";
import mod8 from "../../assets/png/mod8.png";




function Modules() {
  const images = [
    { src: mod1, alt: "Imagen 1", url: "https://example.com/iframe1" },
    { src: mod2, alt: "Imagen 2", url: "https://example.com/iframe2" },
    { src: mod3, alt: "Imagen 3", url: "https://example.com/iframe3" },
    { src: mod4, alt: "Imagen 4", url: "https://example.com/iframe4" },
    { src: mod5, alt: "Imagen 5", url: "https://example.com/iframe5" },
    { src: mod6, alt: "Imagen 6", url: "https://example.com/iframe6" },
    { src: mod7, alt: "Imagen 6", url: "https://example.com/iframe6" },
    { src: mod8, alt: "Imagen 6", url: "https://example.com/iframe6" },
  ];

  return (
    <Box
      id="modules"
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        py: 8,
        minHeight: '75vh',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          color="#D10056"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Interacción con Módulos
        </Typography>

        <DynamicImageCarousel items={images} visibleItems={4} />
      </Container>
    </Box>
  );
}

export default Modules;
