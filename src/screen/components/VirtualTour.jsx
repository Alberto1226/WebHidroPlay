import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  keyframes,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import welcome from "../../assets/img/secciones/Fondo2.webp";

import carouselImage1 from "../../assets/img/secciones/Fondo2.webp";
import carouselImage2 from "../../assets/img/secciones/Fondo2.webp";
import rightColumnImage from "../../assets/img/secciones/Fondo2.webp";

import bouncingSvg1 from "../../assets/svg/Bengi.svg";

function VirtualTour() {
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
      id="virtual-tour"
      sx={{
        backgroundImage: `url(${welcome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        py: 8,
        minHeight: '85vh',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}> 
          Recorrido Virtual
        </Typography>
        <Grid container spacing={4}>
          {/* Columna derecha */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={rightColumnImage}
              alt="Recorrido Virtual"
              sx={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>

          {/* Columna izquierda */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}> {/* Establece el contexto relativo */}
              <Carousel
                indicators={false}
                animation="slide"
                navButtonsAlwaysVisible
              >
                <Box
                  component="img"
                  src={carouselImage1}
                  alt="Carrusel 1"
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
                <Box
                  component="img"
                  src={carouselImage2}
                  alt="Carrusel 2"
                  sx={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Carousel>
              <Box mt={2} textAlign="center">
                <Typography variant="body1" color="white">
                  Explora el museo interactivo con nuestro recorrido virtual desde la comodidad de tu casa.
                </Typography>
                <Typography variant="body1" color="white" fontWeight="bold">
                  ¡Una experiencia única te espera!
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 2,
                    borderRadius: "20px",
                    textTransform: "none",
                  }}
                >
                  ¡Vamos!
                </Button>
              </Box>

              {/* Imagen animada */}
              <Box
                component="img"
                src={bouncingSvg1}
                alt="Bouncing SVG 1"
                sx={{
                  position: "absolute",
                  top: "100%", // Posición dentro del contenedor
                  left: "-15%",
                  width: "180px",
                  height: "180px",
                  animation: `${bounceAnimation} 2s infinite ease-in-out`,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default VirtualTour;
