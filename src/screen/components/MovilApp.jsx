import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  keyframes,
  Grid,
} from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import bg from "../../assets/img/secciones/fondobannerapp.png";
import bouncingSvg1 from "../../assets/svg/loobo_1.svg";
import logo from "../../assets/png/iconoappmovil_banner.png";
import logos from "../../assets/png/nota_bannerapp.png";
import qr from "../../assets/png/qr.png";
import leftImage from "../../assets/png/movil.png";

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
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover", // Asegura que la imagen cubra todo el fondo
        backgroundPosition: "center", // Centra la imagen
        backgroundRepeat: "no-repeat", // Evita que la imagen se repita
        color: "white",
        py: 8,
        minHeight: "85vh",
      }}
    >
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Image Section */}
          <Grid
            item
            xs={12}
            md={5}
            display="flex"
            justifyContent={{ xs: "center", md: "right" }}
          >
            <Box
              component="img"
              src={leftImage}
              alt="Left Image"
              sx={{
                maxWidth: { xs: "80%", md: "50%" }, // Más grande en móvil
                height: "auto",
                borderRadius: 2,
              }}
            />
          </Grid>

          {/* Right Section with Logo and QR Codes */}
          <Grid
            item
            xs={12}
            md={7}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              component="img"
              src={logo}
              sx={{
                maxWidth: "40%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: 4,
              }}
            />

            <Typography
              variant="h6"
              color="textPrimary"
              fontWeight="bold"
              mb={2}
            >
              Escanea el codigo de tu tienda
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={qr}
                  alt="QR Code Android"
                  sx={{
                    maxWidth: "100px",
                    marginBottom: "8px",
                    backgroundColor: "black",
                    p: 1,
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AndroidIcon />}
                >
                  Descargar para Android
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={qr}
                  alt="QR Code iOS"
                  sx={{
                    maxWidth: "100px",
                    marginBottom: "8px",
                    backgroundColor: "black",
                    p: 1,
                  }}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<AppleIcon />}
                >
                  Descargar para iOS
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth="xl"
        sx={{
          marginLeft: "18vw",
          paddingRight: "20vw",
          position: "relative", // Position relative to limit absolute elements
        }}
      >
        <Box
          component="img"
          src={bouncingSvg1}
          alt="Bouncing SVG 1"
          sx={{
            position: "absolute",
            bottom: { xs: "-40%", sm: "-70%" }, // Adjust bottom for mobile view
            left: { xs: "50%", sm: "30%" }, // Adjust left position for mobile
            width: { xs: "130px", sm: "180px" }, // Adjust size for mobile
            display: { xs: "none" },
            height: { xs: "130px", sm: "180px" }, // Adjust height for mobile
            animation: `${bounceAnimation} 2s infinite ease-in-out`,
          }}
        />
      </Container>
    </Box>
  );
}

export default MobileApp;
