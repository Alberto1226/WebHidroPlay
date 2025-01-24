import React from "react";
import { Container, Typography, Box, Grid, keyframes } from "@mui/material";
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
          py: 2,
          minHeight: "8vh",
        }}
      >
        <Container maxWidth="md">
          <Grid item xs={12} sm={12}>
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                padding: { xs: 2, sm: 3, md: 4 },
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#f3f4f6", // Fondo gris claro
                  padding: { xs: 2, sm: 3, md: 4 },
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  position: "relative",
                }}
              >
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "#b84081",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.9rem",
                      md: "1rem",
                      lg: "1.1rem",
                    }, // Tamaño de letra responsive
                    lineHeight: { xs: "1.4", sm: "1.5", md: "1.6" },
                    textAlign: "justify",
                    wordBreak: "break-word",
                  }}
                >
                  HydroPlay es un museo para El Cuidado del Agua, es un espacio
                  interactivo con herramientas virtuales que lo hacen único en
                  México de su tipo. Permitiendo acercar el museo a una
                  experiencia virtual mediante el uso de tecnologías con
                  funcionalidad en espacios o áreas temáticas que permitan
                  fortalecer la cultura del Cuidado del Agua en el estado. Hoy
                  hacer conciencia sobre la sobreexplotación del agua y generar
                  una cultura del cuidado del agua requiere espacios novedosos,
                  divertidos donde la tecnología apoye para poder penetrar y
                  hacer conciencia en la cultura del agua.
                </Typography>

                <Box
                  component="img"
                  src={pinIcon}
                  alt="Pin"
                  sx={{
                    position: "absolute",
                    top: { md: "-70px" },
                    right: { md: "-50px" },
                    width: { md: "140px", lg: "140px" },
                    height: {
                     
                      md: "140px",
                      lg: "140px",
                    },
                    
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Container
        sx={{
          //marginTop: "1vw",
          backgroundImage: `url(${grids})`,
          backgroundSize: "cover", // Asegura que la imagen cubra todo el fondo
          backgroundPosition: "center", // Centra la imagen
          backgroundRepeat: "no-repeat", // Evita que la imagen se repita
          color: "white",
          py: 5,
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
            top: { xs: "5%", sm: "5%" }, // Adjust top for smaller screens
            left: { xs: "-8%", sm: "25%" }, // Adjust left for smaller screens
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
            top: { xs: "40%", sm: "5%" }, // Adjust top for smaller screens
            right: { xs: "8%", sm: "28%" }, // Adjust right for smaller screens
            width: "150px",
            height: "150px",
            animation: `${bounceAnimation} 3s infinite ease-in-out`,
          }}
        />

        {/* Grid con tarjetas */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
        >
          <ImageCard
            imageSrc={image2}
            altText="Hidrobot"
            title={"Objetivos"}
            //     description="Dar a conocer la información sobre la
            // cultura del cuidado del agua para evitar
            // su contaminación y desperdicio.
            // Poniéndola en práctica en su entorno,
            // fortaleciendo la re exión con actividades
            // educativas y de entretenimiento
            // interactivo/digital."
            description="Dar a conocer la información sobre la
            cultura del cuidado del agua para evitar
            su contaminación y desperdicio.
            Poniéndola en práctica en su entorno,
            fortaleciendo la re exión con actividades
            educativas y de entretenimiento
            interactivo/digital. Para educar y sensibilizar al público en general, especialmente a las nuevas generaciones, sobre la importancia del agua como recurso natural y la necesidad de su cuidado y uso sostenible."
            textColor="brown"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
          />
          <ImageCard
            imageSrc={image3}
            altText="Hidrobot"
            title={"Misión"}
            //     description="Generar conciencia en los niños y público
            // en general a través de módulos
            // interactivos y juegos, que los ayudarán a
            // reforzar sus conocimientos en la cultura
            // del agua."
            description="Generar conciencia en los niños y público
            en general a través de módulos
            interactivos y juegos, que los ayudarán a
            reforzar sus conocimientos en la cultura
            del agua. Ser un referente digital en la difusión de conocimientos sobre el ciclo del agua, su importancia para la vida, los desafíos que enfrenta y las soluciones posibles.
Promover la cultura del cuidado del agua a través de contenidos atractivos, interactivos y accesibles, fomentando la participación activa de los usuarios."
            textColor="blue"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
          />
          <ImageCard
            imageSrc={image4}
            altText="Hidrobot"
            title={"Visión"}
            //     description="Posicionar a HIDROPLAY como referencia
            // nacional, como museo interactivo que
            // comunique y refleje los beneficios del
            // cuidado del agua en la comunidad."
            description="Posicionar a HIDROPLAY como referencia
            nacional, como museo interactivo que
            comunique y refleje los beneficios del
            cuidado del agua en la comunidad. Ser un espacio virtual dinámico y en constante evolución, que se adapte a las nuevas tecnologías y tendencias en educación ambiental.
Inspirar y empoderar a las personas para que tomen acciones concretas en favor del cuidado del agua en su vida diaria y en sus comunidades.
Contribuir a la construcción de un futuro más sostenible, donde el agua sea valorada y protegida como un bien común."
            textColor="green"
            sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
          />
        </Grid>
      </Container>
    </>
  );
}

export default Objectives;
