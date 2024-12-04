import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Box,
  Typography,
  Link,
  Modal,
  Button,
  Container,
  IconButton ,
  Grid,
  Grid2,
} from "@mui/material";
import logo from "../../assets/img/hidroplay_superior.png";
import logos from "../../assets/img/logos_superiro.png";

function Footer() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      component="footer"
      sx={{
        background: "#b84081",
        color: "white",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%", // Ocupa todo el ancho disponible
          backgroundColor: "#f5f5f5",

          color: "#b84081", // Rosa ópalo para el texto
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {/* Primera columna: Imagen */}
            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  width: "150px",
                  height: "auto",
                  objectFit: "contain",
                  mx: "auto",
                }}
              />
            </Grid>

            {/* Segunda columna: Dirección */}
            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                <LocationOnIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                Dirección
              </Typography>
              <Typography variant="body2">
                Calle Ejemplo #123, Colonia Centro
              </Typography>
              <Typography variant="body2">Ciudad, Estado, País</Typography>
              <Typography variant="body2">Teléfono: (123) 456-7890</Typography>
            </Grid>

            {/* Tercera columna: Accesos rápidos */}
            <Grid item xs={12} sm={4} sx={{ textAlign: "justify" }}>
              <Typography variant="h6" gutterBottom>
                Accesos Rápidos
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box>
                    <ScrollLink
                      to="welcome"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      <ArrowRightIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                      Inicio
                    </ScrollLink>
                  </Box>
                  <Box>
                    <ScrollLink
                      to="objectives"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      <ArrowRightIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                      Objetivos
                    </ScrollLink>
                  </Box>
                  <Box>
                    <ScrollLink
                      to="virtual-tour"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      <ArrowRightIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                      Recorrido Virtual
                    </ScrollLink>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <ScrollLink
                      to="modules"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      <ArrowRightIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                      Módulos
                    </ScrollLink>
                  </Box>
                  <Box>
                    <ScrollLink
                      to="comics"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      <ArrowRightIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                      Comics AR
                    </ScrollLink>
                  </Box>
                  <Box>
                    <ScrollLink
                      to="mobile-app"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                      }}
                    >
                      <ArrowRightIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                      App Móvil
                    </ScrollLink>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          width: "100%", // Ocupa todo el ancho disponible
          backgroundColor: "#f5f5f5",

          color: "#b84081", // Rosa ópalo para el texto
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={2} alignItems="center">
            {/* Primera columna: Iconos de redes sociales */}
            <Grid item xs={12} sm={4}>
              <Box display="flex" justifyContent="center" gap={2}>
                <IconButton
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: "#b84081" }}
                >
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: "#b84081" }}
                >
                  <InstagramIcon fontSize="large" />
                </IconButton>
                <IconButton
                  href="https://wa.me/1234567890" // Cambia este número por el de WhatsApp
                  target="_blank"
                  rel="noopener"
                  sx={{ color: "#b84081" }}
                >
                  <WhatsAppIcon fontSize="large" />
                </IconButton>
              </Box>
            </Grid>

            {/* Segunda columna: Imagen */}
            <Grid item xs={12} sm={8}>
              <Box display="flex" justifyContent="center">
                <Box
                  component="img"
                  src={logos} // Cambia a la ruta de tu imagen
                  alt="Logo"
                  sx={{
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          py: 2,
          borderTop: "1px solid #ddd",
          alignItems: "center",
        }}
      >
        {/* Columna izquierda */}
        <Grid item xs={6}>
          <Typography
            variant="body2"
            gutterBottom
            align="left"
            sx={{ marginLeft: "2vw" }}
          >
            © HYDROPLAY
          </Typography>
        </Grid>

        {/* Columna derecha */}
        <Grid item xs={6}>
          <Typography align="right" sx={{ marginRight: "2vw" }}>
            <Link
              component="button"
              underline="hover"
              color="inherit"
              onClick={handleOpen}
            >
              Aviso de privacidad
            </Link>
          </Typography>
        </Grid>
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Aviso de Privacidad
          </Typography>
          <Typography variant="body2">
            Este es el contenido del aviso de privacidad. Aquí puedes colocar
            detalles importantes sobre el manejo de datos y términos legales.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClose}
            sx={{ mt: 2 }}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default Footer;
