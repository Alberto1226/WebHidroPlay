import React, { useState } from "react";
import { Box, Grid, Modal, IconButton, useMediaQuery, useTheme } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CloseIcon from "@mui/icons-material/Close";

const DynamicImageCarousel = ({ items, visibleItems }) => {
  const [open, setOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detecta si es móvil

  const handleImageClick = (url) => {
    setIframeUrl(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIframeUrl("");
  };

  // Ajusta el número de elementos visibles según el dispositivo
  const effectiveVisibleItems = isMobile ? 1 : visibleItems;

  // Divide las imágenes en grupos
  const groupedItems = items.reduce((acc, item, index) => {
    const groupIndex = Math.floor(index / effectiveVisibleItems);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(item);
    return acc;
  }, []);

  return (
    <>
      {/* Carrusel */}
      <Carousel
        indicators
        animation="slide"
        navButtonsAlwaysVisible
        autoPlay={false}
        swipe={true}
      >
        {groupedItems.map((group, groupIndex) => (
          <Box key={groupIndex}>
            <Grid container spacing={2} justifyContent="center">
              {group.map((img, imgIndex) => (
                <Grid item xs={12} sm={12 / effectiveVisibleItems} key={imgIndex}>
                  <Box
                    component="img"
                    src={img.src}
                    alt={img.alt}
                    onClick={() => handleImageClick(img.url)}
                    sx={{
                      backgroundColor: "transparent",
                      width: "85%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Carousel>

      {/* Modal con iframe */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            bgcolor: "white",
            boxShadow: 24,
            p: 2,
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              alignSelf: "flex-end",
              mb: 2,
              color: "black",
            }}
          >
            <CloseIcon />
          </IconButton>
          <iframe
            src={iframeUrl}
            title="Iframe Viewer"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default DynamicImageCarousel;
