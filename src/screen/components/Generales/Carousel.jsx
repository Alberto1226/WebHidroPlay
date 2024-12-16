import React, { useState, useEffect } from "react";
import { Box, Grid, Modal, IconButton, useMediaQuery, useTheme } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CloseIcon from "@mui/icons-material/Close";

const DynamicImageCarousel = ({ items, visibleItems }) => {
  const [open, setOpen] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");
  const [carouselKey, setCarouselKey] = useState(0); // To force a re-render of the carousel

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detects if it's a mobile device

  const handleImageClick = (url) => {
    setIframeUrl(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIframeUrl("");
  };

  // Adjusts the number of visible items based on the screen size
  const effectiveVisibleItems = isMobile ? 1 : visibleItems;

  // Group images to fit within the visible items
  const groupedItems = items.reduce((acc, item, index) => {
    const groupIndex = Math.floor(index / effectiveVisibleItems);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(item);
    return acc;
  }, []);

  useEffect(() => {
    // Force re-layout on initial load by resetting the carousel key
    setCarouselKey((prevKey) => prevKey + 1);
  }, [items]);

  return (
    <>
      {/* Carousel */}
      <Carousel
        key={carouselKey} // Force re-layout when the key changes
        indicators
        animation="slide"
        navButtonsAlwaysVisible
        autoPlay={false}
        swipe={true}
        sx={{
          maxWidth: "100%", // Ensures carousel doesn't exceed screen width
          padding: "0 10px", // Optional padding for better aesthetics
        }}
      >
        {groupedItems.map((group, groupIndex) => (
          <Box key={groupIndex} sx={{ width: "100%" }}>
            <Grid container spacing={2} justifyContent="center">
              {group.map((img, imgIndex) => (
                <Grid
                  item
                  xs={12} // Full width on mobile
                  sm={12 / effectiveVisibleItems} // Dynamically adjusts visible items based on screen size
                  key={imgIndex}
                  sx={{ display: "flex", justifyContent: "center" }} // Centers the images in the grid
                >
                  <Box
                    component="img"
                    src={img.src}
                    alt={img.alt}
                    onClick={() => handleImageClick(img.url)}
                    sx={{
                      backgroundColor: "transparent",
                      width: "100%",
                      maxWidth: "350px", // Limits image size for better layout
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

      {/* Modal with iframe */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%", // Ensures modal is smaller on mobile
            height: "80%",
            maxWidth: "1000px", // Limits max width of the modal on larger screens
            bgcolor: "white",
            boxShadow: 24,
            p: 2,
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden", // Prevents overflow in the modal
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
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "8px", // Optional: Adds radius for the iframe's corners
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default DynamicImageCarousel;
