import React from "react";
import { Container, Typography, Box, Grid, keyframes  } from "@mui/material";
import welcome from "../../assets/img/secciones/fondo1.webp";
import grids from "../../assets/img/secciones/fondo_Modulos.webp";
import pinIcon from "../../assets/svg/hidrobot.svg";
import Nota from "../../assets/png/NotaHidroplay.png";

import image2 from "../../assets/svg/icono_1.svg";
import image3 from "../../assets/svg/icono_2.svg";
import image4 from "../../assets/svg/icono_3.svg";
import ImageCard from "./Generales/Cards";

import bouncingSvg1 from "../../assets/svg/goti.svg"; // Imagen SVG que rebota
import bouncingSvg2 from "../../assets/svg/leon.svg"; // Imagen SVG que rebota


function Objectives() {
  const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;
  return (
    <>
      <Box
        id="objectives"
        sx={{
          backgroundImage: `url(${welcome})`, // Ruta de la imagen
          backgroundSize: "cover", // Asegura que la imagen cubra todo el fondo
          backgroundPosition: "center", // Centra la imagen
          backgroundRepeat: "no-repeat", // Evita que la imagen se repita
          color: "white",
          py: 8,
          minHeight: '20vh',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom>
            Objetivos
          </Typography>
          <Grid container spacing={4}>
            {/* Primera columna: Texto */}
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" paragraph>
                Dar a conocer la información sobre la cultura del cuidado del
                agua para evitar su contaminación y desperdicio.
              </Typography>
              <Typography variant="body1" paragraph>
                Generar conciencia a través de actividades educativas y de
                entretenimiento interactivo.
              </Typography>
            </Grid>

            {/* Segunda columna: Recuadro con imagen */}
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  position: "relative", // Hace que el recuadro sea el contenedor padre para posicionar elementos hijos absolutos
                  backgroundImage: `url(${Nota})`, // Imagen de fondo del recuadro
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "230px", // Altura del recuadro
                  borderRadius: "8px", // Bordes redondeados
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sombra del recuadro
                }}
              >
                {/* Pin superpuesto en el lateral superior derecho */}
                <Box
                  component="img"
                  src={pinIcon} // Imagen del pin
                  alt="Pin"
                  sx={{
                    position: "absolute", // Posicionamiento absoluto dentro del contenedor relativo
                    top: "-80px", // Superpón hacia arriba fuera del recuadro
                    right: "-40px", // Superpón hacia el lado derecho fuera del recuadro
                    width: "150px", // Tamaño del pin
                    height: "150px",
                   
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container
        sx={{
          marginTop: "4vw",
          backgroundImage: `url(${grids})`,
          backgroundSize: "cover", // Asegura que la imagen cubra todo el fondo
          backgroundPosition: "center", // Centra la imagen
          backgroundRepeat: "no-repeat", // Evita que la imagen se repita
          color: "white",
          py: 8,
          minHeight: "23rem",
          position: "relative", // Necesario para posicionar los elementos rebote
          overflow: "hidden", // Oculta contenido fuera del contenedor
        }}
      >
        {/* Imágenes SVG que rebotan */}
        <Box
          component="img"
          src={bouncingSvg1}
          alt="Bouncing SVG 1"
          sx={{
            position: "absolute",
            top: "5%",
            left: "25%",
            width: "150px",
            height: "150px",
            animation: `${bounceAnimation} 2s infinite ease-in-out`,
          }}
        />
        <Box
          component="img"
          src={bouncingSvg2}
          alt="Bouncing SVG 2"
          sx={{
            position: "absolute",
            top: "5%",
            right: "28%",
            width: "150px",
            height: "150px",
            animation: `${bounceAnimation} 3s infinite ease-in-out`,
          }}
        />

        {/* Grid con tarjetas */}
        <Grid container spacing={4} justifyContent="center">
          <ImageCard
            imageSrc={image2}
            altText="Hidrobot"
            description="Dar a conocer la información sobre la
        cultura del cuidado del agua para evitar 
        su contaminación y desperdicio.
        Poniéndola en práctica en su entorno,
        fortaleciendo la re exión con actividades
        educativas y de entretenimiento
        interactivo/digital."
            textColor="brown"
          />
          <ImageCard
            imageSrc={image3}
            altText="Hidrobot"
            description="Generar conciencia en los niños y público 
        en general a través de módulos
        interactivos y juegos, que los ayudarán a 
        reforzar sus conocimientos en la cultura 
        del agua."
            textColor="blue"
          />
          <ImageCard
            imageSrc={image4}
            altText="Hidrobot"
            description="Posicionar a HIDROPLAY como referencia 
        nacional, como museo interactivo que
        comunique y re eje los bene cios del 
        cuidado del agua en la comunidad."
            textColor="green"
          />
        </Grid>
      </Container>
    </>
  );
}

export default Objectives;
