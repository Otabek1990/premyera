import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState,useRef } from "react";
import "./featured.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { Carousel } from "react-bootstrap";
// import Kino1 from "../../assets/images/uzbekkino/rangsiztushlar.jpg";
// import Kino2 from "../../assets/images/kino2.jpg";
// import Kino3 from "../../assets/images/kino3.jpg";
// import Kino4 from "../../assets/images/kino5.jpg";
import BannerInFos from "../../datas/bannerInfos";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

export default function Featured({ type, setGenre }) {
  const [play, setPlay] = useState(false);
  const [playMovie, setPlayMovie] = useState(true);
  const [movieId, setMovieId] = useState(null);
  const videoRef = useRef();
  const movie = movieId
    ? BannerInFos.filter((item) => item.id === movieId)[0]
    : BannerInFos[0];
const truncate=(str,max)=>{
  return str.length> max
  ? <p>{str.slice(0,max)}...</p>
 :<p>{str}</p>;
}
  return (
    <div className="banner">
      {!play ? (
        <Carousel
          autoPlay
          interval={4000}
          // swipeable
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          {BannerInFos.map((item, index) => {
            return (
              <div key={index} style={{ position: "relative" }}>
                <img
                  draggable={false}
                  alt="text"
                  style={{ width: "100%", height: "500px" }}
                  src={item.image}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "10%",
                    bottom: "30%",
                    width: "400px",
                    color: "white",
                    transform: " translateX(-50%)",
                    fontSize: "20px",
                    marginLeft: "200px",
                    textAlign: "left",
                  }}
                >
                  <h1>{item.name}</h1>
                 
                  <p style={{ fontSize: "14px",fontWeight:"bold" }}>{truncate(item.desc,200)}</p>

                  
                  <button
                    className="btn_play"
                    style={{
                      cursor: "pointer",
                      fontSize: "15px",
                      color:"white",
                      marginRight:"30px",
                      padding:"8px 15px",

                    }}
                    onClick={() => {
                      setPlay(true);
                      setMovieId(item.id);
                    }}
                  >
                    Trailerni ko'rish
                  </button>
                  <button 
                      style={{
                        cursor: "pointer",
                        fontSize: "15px",
                        color:"white",
                        padding:"8px 15px",
  
                      }}
                  className="btn_play">add playlist</button>
                </div>
              </div>
            );
          })}
        </Carousel>
      ) : (
        <div style={{
    
        }}>
      
          {!playMovie ? (
            <PlayArrowIcon
            className="icons"
            style={{ fontSize: "65px", color: "white" }}
              onClick={() => {
                setPlayMovie(true);
                videoRef.current.play();
              }}
            />
          ) : (
            <PauseIcon
              className="icons"
              style={{ fontSize: "65px", color: "white" }}

              onClick={() => {
                setPlayMovie(false);
                videoRef.current.pause();
              }}
            />
        
          )}
              <video
                  width="100%"
                  height="500px"
                  progress
            // muted
            autoPlay={playMovie}
            src={movie.trailer}
            ref={videoRef}
          />
        </div>
      )}
    </div>    
  );
}
