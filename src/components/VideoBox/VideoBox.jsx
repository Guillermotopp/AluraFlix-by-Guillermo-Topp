import React, { useEffect, useState } from 'react';
import styles from './VideoBox.module.css';

const VideoBox = () => {
  const [firstVideo, setFirstVideo] = useState(null);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/guillermotopp/AluraFlix-by-Guillermo-Topp/videos')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setFirstVideo(data[0]); // Guarda solo el primer video
        }
      })
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  if (!firstVideo) {
    return null; // Si no hay primer video, muestra nada o un mensaje de carga
  }

  return (
    <div className={styles.videoBox}>
      <div className={styles.videoContainer}>
        <iframe
          title={firstVideo.titulo}
          width="560"
          height="315"
          src={firstVideo.link}
          frameBorder="0"
          allowFullScreen
          className={styles.video}
        ></iframe>
        <div className={styles.title}>{firstVideo.titulo}</div>
      </div>
    </div>
  );
};

export default VideoBox;
