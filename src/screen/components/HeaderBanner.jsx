import React, { useState } from "react";
import logo from "../../assets/img/hidroplay_superior.png";
import logos from "../../assets/img/logos_superiro.png";

function HeaderBanner() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const elements = document.querySelectorAll("section, div, p, h1, h2, h3");
    elements.forEach((el) => {
      if (
        el.textContent.toLowerCase().includes(event.target.value.toLowerCase())
      ) {
        el.style.backgroundColor = "#ffeb3b"; // Resalta coincidencias
      } else {
        el.style.backgroundColor = ""; // Restablece el fondo
      }
    });
  };

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 4fr", // Dividido en dos columnas
        gridTemplateRows: "1fr", // Una sola fila
        backgroundColor: "white", // Fondo blanco sólido
        color: "black", // Texto negro para contraste
        position: "sticky", // Mantiene el elemento fijo al hacer scroll
        top: 0, // Define la distancia desde la parte superior
        zIndex: 1000, // Asegura que esté por encima de otros elementos
        height: "60px", // Altura total del contenedor
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
      }}
    >
      {/* Primera columna: Imagen pequeña (Logo) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={logo} // Sustituye con la URL de tu imagen
          alt="Logo"
          style={{ height: "50px", width: "auto" }} // Tamaño reducido del logo
        />
      </div>

      {/* Segunda columna: Imágenes y campo de búsqueda */}
      <div
        style={{
          //gridTemplateRows: "1fr 1fr", // Divide en dos filas
          alignItems: "right",
          justifyItems: "right",
          height: "100%", // Asegura que ocupe toda la altura disponible
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          //paddingRight: "4vw",
        }}
      >
        {/* Primera fila con imágenes grandes */}
        {/* <div
          style={{
            display: "flex",
            gap: "10px", // Mayor espaciado entre las imágenes
            alignItems: "center",
            justifyContent: "flex-end",
            //paddingRight: "1vw",
          }}
        > */}
          <img
            src={logos} // Sustituye con la URL del ícono 1
            alt="Icono 1"
            style={{ width: "30vw", height: "50px", marginRight: "2vw", }}
          />
        </div>
        {/* Segunda fila: Campo de búsqueda */}
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            marginTop: "5px",
          }}
        >
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleSearch}
            style={{
              width: "90%", // Ajusta el ancho del input
              boxSizing: "border-box",
              borderRadius: "4px",
              
            }}
          />
        </div> */}
      {/* </div> */}
    </section>
  );
}

export default HeaderBanner;
