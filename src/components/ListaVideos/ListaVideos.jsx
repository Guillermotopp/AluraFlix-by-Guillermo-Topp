import React, { useEffect, useState } from 'react';
import VideoBox from './VideoBox';
import styles from './ListaVideos.module.css';

const ListaVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/guillermotopp/AluraFlix-by-Guillermo-Topp/videos')
      .then(response => response.json())
      .then(data => {
        setVideos(data);
      })
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  // Agrupar videos por categoría
  const categorias = ['Frontend', 'Backend', 'Innovación y Gestión'];

  // Filtrar videos por cada categoría
  const videosPorCategoria = categorias.map(categoria => ({
    categoria,
    videos: videos.filter(video => video.Categoria === categoria)
  }));

  return (
    <div>
      {videosPorCategoria.map(({ categoria, videos }) => (
        <div key={categoria}>
          <h2>{categoria}</h2>
          <div className={styles.videoList}>
            {videos.length > 0 ? (
              videos.map(video => (
                <VideoBox key={video.id} video={video} />
              ))
            ) : (
              <p>No hay videos disponibles en esta categoría.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaVideos;