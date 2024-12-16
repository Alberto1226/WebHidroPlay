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
        minHeight: "75vh",
      }}
    >
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Text and Button Section */}
          <Grid item xs={12} md={8}>
            <Box
              component="img"
              src={logos} // Replace with your image path
              alt="Hydroplay Image"
              sx={{
                maxWidth: "90%",
                height: "auto",
                borderRadius: 2,
                mt: 2,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                marginTop: { xs: "-10rem", md: "-26.3rem" },
                fontSize: { xs: "0.9rem", md: "2.5rem" },
                wordWrap: "break-word", // Ensures text wraps within the container
                overflow: "hidden",
                wordBreak: "break-word", // Break words if they don't fit
                maxWidth: "100%", // Ensures the text is contained within the container width
              }}
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
              sx={{
                fontSize: { xs: "0.55rem", md: "2.5rem" },
                textAlign: "justify",
                wordWrap: "break-word", // Ensures text wraps within the container
                overflow: "hidden", // Prevents text from overflowing the container
                wordBreak: "break-word", // Break words if they don't fit
                marginLeft: { xs: "6vw", md: "6vw" }, // Adjust margin for smaller screens
                marginTop: { xs: "2vw", md: "3.5vw" }, // Adjust margin for smaller screens
              }}
            >
              También puedes disfrutar de HIDROPLAY desde tu dispositivo móvil
              favorito.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              color="#9359b4"
              sx={{
                fontSize: { xs: "0.55rem", md: "2.5rem" },
                textAlign: "justify",
                wordWrap: "break-word", // Ensures text wraps within the container
                overflow: "hidden", // Prevents text from overflowing the container
                wordBreak: "break-word", // Break words if they don't fit
                marginLeft: { xs: "6vw", md: "6vw" }, // Adjust margin for smaller screens
              }}
            >
              MICA Virtual o escanea el código QR con la cámara de tu
              dispositivo.
            </Typography>

            <Typography
              variant="body1"
              paragraph
              color="#9359b4"
              sx={{
                fontSize: { xs: "0.55rem", md: "2.5rem" },
                textAlign: "justify",
                wordWrap: "break-word", // Ensures text wraps within the container
                overflow: "hidden", // Prevents text from overflowing the container
                wordBreak: "break-word", // Break words if they don't fit
                marginLeft: { xs: "6vw", md: "6vw" }, // Adjust margin for smaller screens
              }}
            >
              MICA Virtual o escanea el código QR con la cámara de tu
              dispositivo.
            </Typography>

            <Box
              sx={{
                mt: 15,
                ml: 5,
                textAlign: "center",
                display: { xs: "none", md: "flex" },
                marginLeft: "20%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={qr} // QR for Android
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
                  ml: 2,
                }}
              >
                <Box
                  component="img"
                  src={qr} // QR for iOS
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

          {/* Image Section */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={logo} // Replace with your image path
              alt="Hydroplay Image"
              sx={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: 2,
                marginTop: "3vw",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth="xl"
        sx={{
          marginLeft: "18vw",
          paddingRight: "20vw",
          position: "relative", // Posición relativa para limitar elementos absolutos
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
            height: { xs: "130px", sm: "180px" }, // Adjust height for mobile
            animation: `${bounceAnimation} 2s infinite ease-in-out`,
          }}
        />
      </Container>
    </Box>
  );
}

export default MobileApp;
