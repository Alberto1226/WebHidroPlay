import React from "react";
import { Box, Typography, Grid } from "@mui/material";

function ImageCard({ imageSrc, altText, description, textColor = "textSecondary" }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
        <Box
          component="img"
          src={imageSrc}
          alt={altText}
          sx={{
            width: "80%", // Reduce el tamaño de la imagen al 80% del contenedor
            height: "auto", // Mantiene la proporción de la imagen
            maxHeight: "120px", // Máxima altura permitida
            objectFit: "contain", // La imagen se adapta completamente al contenedor
            borderRadius: "8px", // Bordes redondeados
            margin: "0 auto", // Centra la imagen horizontalmente
          }}
        />
        <Typography variant="body2" color={textColor} mt={2}>
          {description}
        </Typography>
      </Box>
    </Grid>
  );
}

export default ImageCard;
