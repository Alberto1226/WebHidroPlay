import React from "react";
import { Container, Typography, Box, Button, keyframes } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import bg from "../../assets/img/secciones/appmovil.webp";
import bouncingSvg1 from "../../assets/svg/loobo_1.svg";

function MobileApp() {
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
      id="mobile-app"
      sx={{
        backgroundImage: `
          linear-gradient(to right, #9359b4 0%, transparent 20%, transparent 80%, #9359b4 100%),
          url(${bg})
        `,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        py: 8,
        minHeight: "75vh",
        backgroundColor: "#9359b4",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          marginLeft: "12vw",
          paddingRight: "20vw",
          position: "relative", // Posición relativa para limitar elementos absolutos
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginTop: "-1.5vw" }}
          component="h2"
          gutterBottom
          color="#9359b4"
        >
          Aplicación Móvil
        </Typography>
        <Typography
          variant="body1"
          paragraph
          color="#9359b4"
          sx={{ marginTop: "3.5vw" }}
        >
          También puedes disfrutar de HIDROPLAY desde tu dispositivo móvil
          favorito.
        </Typography>
        <Typography variant="body1" paragraph color="#9359b4">
          MICA Virtual o escanea el código QR con la cámara de tu dispositivo.
        </Typography>
        <Typography variant="body1" paragraph color="#9359b4">
          MICA Virtual o escanea el código QR con la cámara de tu dispositivo.
        </Typography>
        <Box sx={{ mt: 15, ml: 5 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AndroidIcon />}
            sx={{ mr: 2 }}
          >
            Descargar para Android
          </Button>
          <Button variant="contained" color="secondary" startIcon={<AppleIcon />}>
            Descargar para iOS
          </Button>
        </Box>

        {/* Imagen animada limitada al Container */}
        <Box
          component="img"
          src={bouncingSvg1}
          alt="Bouncing SVG 1"
          sx={{
            position: "absolute",
            bottom: "-70%", // Posición desde la parte inferior del Container
            left: "30%",
            width: "180px",
            height: "180px",
            animation: `${bounceAnimation} 2s infinite ease-in-out`,
          }}
        />
      </Container>
    </Box>
  );
}

export default MobileApp;
