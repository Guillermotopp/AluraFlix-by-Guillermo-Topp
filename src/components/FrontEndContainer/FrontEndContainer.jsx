import React, { useEffect, useState } from 'react';
import styles from './FrontEndContainer.module.css';

const FrontEndContainer = () => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    // Fetch the video data from the JSON API
    fetch('https://api.example.com/db.json') // Reemplaza con tu URL de API
      .then(response => response.json())
      .then(data => {
        // Assuming we want the first video for this example
        const video = data.videos[0];
        setVideoData(video);
      })
      .catch(error => console.error('Error fetching video data:', error));
  }, []);

  return (
    <div className={styles.frontBox}>
      {videoData ? (
        <>
          <video className={styles.videoPlayer} controls>
            <source src={videoData.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={styles.title}>{videoData.title}</div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FrontEndContainer;
