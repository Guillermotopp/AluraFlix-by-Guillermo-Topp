import React, { useState, useEffect } from "react";

import styles from "./VideoComponente.module.css";
import VideoBox from "components/VideoBox/VideoBox";

const VideoComponente = ({ categoria }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
<VideoBox/>
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Guillermotopp/AluraFlix-by-Guillermo-Topp/videos")
      .then(response => response.json())
      .then(data => {
        const filteredVideos = data.filter(video => video.Categoria === categoria);
        setVideos(filteredVideos);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
        setLoading(false);
      });
  }, [categoria]);

  if (loading) {
    return <p>Cargando videos...</p>;
  }

  if (videos.length === 0) {
    return <p>No hay videos en esta categoría.</p>;
  }

  return (
    <div className={styles.videoContainer}>
      {videos.map(video => (
        <VideoBox video={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoComponente;
