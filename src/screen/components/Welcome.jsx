import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import welcome from "../../assets/img/secciones/BannerPrincipal.webp";
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
        py: 8,
        minHeight: '75vh',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Bienvenidos a HYDROPLAY
        </Typography>
        <Typography variant="body1" paragraph>
          Un lugar donde podrás divertirte mientras aprendes sobre el cuidado
          del agua.
        </Typography>
        {/* <Typography variant="body1" paragraph>
          Dar a conocer la información sobre la cultura del cuidado del agua
          para evitar su contaminación y desperdicio. Poniéndola en práctica en
          su entorno, fortaleciendo la reflexión con actividades educativas y de
          entretenimiento interactivo/digital.
        </Typography>
        <Typography variant="body1" paragraph>
          Generar conciencia en los niños y público en general a través de
          módulos interactivos y juegos, que los ayudarán a reforzar sus
          conocimientos en la cultura del agua.
        </Typography>
        <Typography variant="body1" paragraph>
          Posicionar a HIDROPLAY como referencia nacional, como museo
          interactivo que comunique y refleje los beneficios del cuidado del
          agua en la comunidad.
        </Typography> */}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 4 }}
        >
          Explorar más
        </Button>
      </Container>
    </Box>
  );
}

export default Welcome;
