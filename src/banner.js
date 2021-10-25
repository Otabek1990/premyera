import { useEffect, useState, useRef } from "react";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import "./banner.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import { Carousel } from "react-bootstrap";
import BannerInFos from "./datas/bannerInfos";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

export default function Banner({ type, setGenre }) {
  // const [content, setContent] = useState({});
  const [play, setPlay] = useState(false);
  const [playMovie, setPlayMovie] = useState(true);
  const [movieId, setMovieId] = useState(null);
  const videoRef = useRef();

  const movie = movieId
    ? BannerInFos.filter((item) => item.id === movieId)[0]
    : BannerInFos[0];
  return (
    <div className="banner">
      {!play ? (
        <Carousel
          autoPlay
          interval={5000}
          swipeable
          infiniteLoop
          showThumbs={false}
          showStatus={false}
        >
          {BannerInfos.map((item, index) => {
            return (
              <div key={index} style={{ position: "relative" }}>
                <img
                  draggable={false}
                  alt="text"
                  style={{ width: "100%", height: "400px" }}
                  src={item.image}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "10%",
                    bottom: "40%",
                    width: "400px",
                    color: "white",
                    transform: " translateX(-50%)",
                    fontSize: "20px",
                    marginLeft: "200px",
                    textAlign: "left",
                  }}
                >
                  <p>Nomi:{item.name}.</p>
                  <br />
                  <p style={{ fontSize: "14px" }}>Film haqida:{item.desc}</p>
                  <br />

                  <button
                    className="icons"
                    style={{
                      cursor: "pointer",
                      fontSize: "25px",
                      backgroundColor:"orange",
                      color:"white"
                    }}
                    onClick={() => {
                      setPlay(true);
                      setMovieId(item.id);
                    }}
                  >
                    Play
                  </button>
                </div>
              </div>
            );
          })}
        </Carousel>
      ) : (
        <div className="trailer">
          <video
          width="100%"
            muted
            autoPlay={playMovie}
            src={movie.trailer}
            //  progress
            ref={videoRef}
          />
          {!playMovie ? (
            <PlayArrowIcon
              className="icons"
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "40%",
                left: "50%",
                fontSize: "65px",
                color: "white",
              }}
              onClick={() => {
                setPlayMovie(true);
                videoRef.current.play();
              }}
            />
          ) : (
            <PauseIcon
              className="icons"
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "40%",
                left: "50%",
                fontSize: "65px",
                color: "white",
              }}
              onClick={() => {
                setPlayMovie(false);
                videoRef.current.pause();
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
