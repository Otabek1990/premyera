import React, { useState, useContext, useRef } from "react";
import "./movieDetails.scss";
import { useParams, useHistory, Link } from "react-router-dom";
//import axios from "../axios";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Poster from "../../assets/images/kino3.jpg";
import Video from "../../assets/trailers/mehrOperatsiyasi.mp4";
import { useSelector } from "react-redux";
// import { Player, BigPlayButton } from "video-react";
//import ReactPlayer from 'react-player'
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

export default function Movie() {
  const [trailerURL, setTrailerURL] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);
  const { title, type } = useParams();
  const uzbMovies = useSelector((state) => state.uzbekMovies.uzbMovies);
  const uzbSerials = useSelector((state) => state.uzbekSerials.uzbSerials);
  const kidsMovies = useSelector((state) => state.kidsMovies.kidsMovies);
  const foreignMovies = useSelector(
    (state) => state.foreignMovies.foreignMovies
  );
  const uzbKonserts = useSelector((state) => state.uzbKonserts.uzbKonserts);
  const videoRef = useRef(null);
  const history = useHistory();

  const Movie =
    type === "uzbKino"
      ? uzbMovies
      : type === "uzbSerial"
      ? uzbSerials
      : type === "bolalar"
      ? kidsMovies
      : type === "chetel"
      ? foreignMovies
      : type === "uzbKonsert"
      ? uzbKonserts
      : [];
  const filteredMovie = Movie?.filter((item) => item.title === title);

  const userr = "";
  return (
    <div className="movie_details">
      <Navbar />
      <div className="trailer">
        {!showTrailer ? (
          <PlayArrowIcon
            className="icons"
            style={{ fontSize: "65px", color: "white" }}
            onClick={() => {
              setShowTrailer(true);
              videoRef.current.play();
            }}
          />
        ) : (
          <PauseIcon
            className="icons"
            style={{ fontSize: "65px", color: "white" }}
            onClick={() => {
              setShowTrailer(false);
              videoRef.current.pause();
            }}
          />
        )}
        <video
        // style={{objectFit:"fill"}}
        width="100%"
        height="500px"
          loop
          src={Video}
          autoPlay={false}
          progress
          ref={videoRef}
        />
      </div>
      {filteredMovie?.map((movie) => (
        <div className="movie_page">
          <img
      
            className="movie_poster_img"
            src={movie.foto}
            alt=""
          />
          <div className="movie_description">
            <p>
            Film Nomi:<span>{movie.title}</span>
            </p>
            <p>
            Film Janri:<span> Tarixiy</span>
            </p>

            <p>
              Film chiqqan sanasi: <span>22.09.2021</span>
            </p>
            <p>
              Film Rejissori:
              <span>Dilmurod Masaidov</span>
            </p>
            <p>
              Bosh rollarda: <span>Ra'no Shodiyeva,Sattorov Sirojiddin,Ilhom Berdiyev</span>
            </p>
            <div className="btns">
              <Link to={userr ? "/payment" : "/login"}>
                <button className="btn">Filmni tomosha qilish</button>
              </Link>
              <br />
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
}
