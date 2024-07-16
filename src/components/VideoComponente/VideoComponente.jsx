import React, { useEffect, useState } from 'react';
import styles from './VideoComponente.module.css';

const VideoComponente = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Guillermotopp/AluraFlix-by-Guillermo-Topp/videos')
      .then(response => response.json())
      .then(data => {
        // Filtrar videos por categoría "Naturaleza"
        const naturalezaVideos = data.filter(video => video.Categoria === "Naturaleza");
        setVideos(naturalezaVideos);
        setLoading(false); // Marca la carga como completa una vez que se obtienen los videos
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
        setLoading(false); // También marca la carga como completa en caso de error
      });
  }, []);

  if (loading) {
    return <p>Cargando videos...</p>;
  }

  return (
    <div className={styles.videoContainer}>
      {videos.length === 0 ? (
        <p>No hay videos en la categoría "Naturaleza".</p>
      ) : (
        videos.map(video => (
          <div key={video.id} className={styles.videoBox}>
            <iframe
              title={video.titulo}
              width="100%"
              height="auto"
              src={video.link}
              frameBorder="0"
              allowFullScreen
              className={styles.video}
            ></iframe>
            <div className={styles.title}>{video.titulo}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default VideoComponente;
