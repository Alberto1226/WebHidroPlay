import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ComicCard = ({ image, title, comicPages }) => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setCurrentPage(0);
  };

  const goToNextPage = () => {
    if (currentPage < comicPages.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsAnimating(false);
      }, 1000); // Duración de la animación
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsAnimating(false);
      }, 1000); // Duración de la animación
    }
  };

  return (
    <>
      {/* Diseño de la tarjeta */}
      <Box
        onClick={handleOpen}
        sx={{
          cursor: "pointer",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          "&:hover img": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            transition: "transform 0.3s ease-in-out",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Typography variant="h6" component="div" color="textPrimary">
          {title}
        </Typography>
      </Box>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "1000px",
            bgcolor: "white",
            boxShadow: 24,
            p: 3,
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ alignSelf: "flex-end", color: "black" }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "500px", // Tamaño fijo para las páginas
              overflow: "hidden",
              perspective: "2000px", // Para efectos 3D
            }}
          >
            {/* Página actual */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundImage: `url(${comicPages[currentPage]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transformOrigin: "left",
                transform: isAnimating
                  ? "translateX(-100%) rotateY(-30deg)"
                  : "translateX(0) rotateY(0)",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                transition: "transform 1s ease-in-out, clip-path 1s ease-in-out",
              }}
            ></Box>

            {/* Página siguiente */}
            {currentPage < comicPages.length - 1 && (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  backgroundImage: `url(${comicPages[currentPage + 1]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transformOrigin: "right",
                  transform: isAnimating
                    ? "translateX(0) rotateY(0)"
                    : "translateX(100%) rotateY(30deg)",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  transition: "transform 1s ease-in-out, clip-path 1s ease-in-out",
                }}
              ></Box>
            )}
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            mt={2}
          >
            <IconButton
              onClick={goToPreviousPage}
              disabled={currentPage === 0 || isAnimating}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Typography>
              Página {currentPage + 1} de {comicPages.length}
            </Typography>
            <IconButton
              onClick={goToNextPage}
              disabled={currentPage >= comicPages.length - 1 || isAnimating}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ComicCard;
