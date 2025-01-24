import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import welcome from "../../assets/img/secciones/fondo_banner1.png";
import logo from "../../assets/png/logo_banner.png";
import logos from "../../assets/png/iconos_banner.png";
function Welcome() {
  return (
    <Box
      id="welcome"
      sx={{
        backgroundImage: `url(${welcome})`, // Ruta de la imagen
        backgroundSize: "cover", // Asegura que la imagen cubra todo el fondo
        backgroundPosition: "center", // Centra la imagen
        backgroundRepeat: "no-repeat", // Evita que la imagen se repita
        color: "white",
        py: 5,
        minHeight: "85vh",
      }}
    >
      <Container maxWidth="xl" sx={{ textAlign: "center" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Text and Button Section */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
            >
              BIENVENIDOS
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}
            >
              Bienvenidos a HYDROPLAY Un lugar donde podrás divertirte mientras
              aprendes sobre el cuidado del agua.
            </Typography>

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
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Welcome;
