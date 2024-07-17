import React, { useState } from "react";
import styles from "./AgregarVideoForm.module.css";

const AgregarVideoForm = ({ onAgregarVideo }) => {
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoVideo = { titulo, url, categoria };
    onAgregarVideo(nuevoVideo);
    setTitulo("");
    setUrl("");
    setCategoria("");
  };

  return (
    <div className={styles.formContainer}>
      <img src="ruta/de/tu/imagen.jpg" alt="Imagen" className={styles.imagen} />
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <label>
          Título:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <label>
          Categoría:
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </label>
        <button type="submit">Agregar Video</button>
      </form>
    </div>
  );
};

export default AgregarVideoForm;
