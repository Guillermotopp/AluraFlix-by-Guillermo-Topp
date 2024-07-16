import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
import FrontEndContainer from "components/FrontEndContainer/FrontEndContainer";
import BannerPrincipal from "components/BannerPrincipal/BannerPrincipal";
import VideoBox from "components/VideoBox/VideoBox";

function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/DaniRiverol/alura-cinema-api/videos"
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);
  return (
    <>
      <Banner img="home" color="#154580" />
      <Titulo>
        <FrontEndContainer />
        <VideoBox />
        <BannerPrincipal />
        

      </Titulo>

      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}

export default Inicio;
