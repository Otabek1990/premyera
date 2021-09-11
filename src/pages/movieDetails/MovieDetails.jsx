import React, { useState, useContext } from "react";
import "./movieDetails.scss";
import { useParams, useHistory,Link } from "react-router-dom";
//import axios from "../axios";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Poster from "../../assets/images/kino3.jpg";
import Video from "../../assets/videos/bunny.mp4";
import { useSelector } from "react-redux";

export default function Movie() {
  const [trailerURL, setTrailerURL] = useState("");
  const [showMovie, setShowMovie] = useState(false);
const {title,type}=useParams()
const uzbMovies = useSelector((state) => state.uzbekMovies.uzbMovies);
const uzbSerials = useSelector((state) => state.uzbekSerials.uzbSerials);
const kidsMovies = useSelector((state) => state.kidsMovies.kidsMovies);
const foreignMovies = useSelector((state) => state.foreignMovies.foreignMovies);
const uzbKonserts = useSelector((state) => state.uzbKonserts.uzbKonserts);

const Movie=type==="uzbKino" ? uzbMovies:
type==="uzbSerial" ? uzbSerials:
 type==="bolalar" ? kidsMovies:
 type==="chetel" ? foreignMovies:
type==="uzbKonsert" ? uzbKonserts:[];
const history = useHistory();
const filteredMovie=  Movie?.filter(item=>item.title===title)
console.log(Movie)
console.log(filteredMovie)
//   const { state } = useContext(MovieContext);
//   const { movies } = state;
  //const base_image_URL = "https://image.tmdb.org/t/p/original/";

//   const filterMovie = movies?.filter((movie) => movie.id === parseInt(id));
//   //-------------------------------
//   const watchMovie = (movie) => {
//     setShowMovie(!showMovie);
//     movieTrailer(movie?.title || "")
//       .then((url) => {
//         console.log(url);
//         const urlParams = new URLSearchParams(new URL(url).search);
//         setTrailerURL(urlParams.get("v"));
//         console.log(urlParams.get("v"));
//       })
//       .catch((error) => console.log(error.message));
//   };
//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//     },
//   };
const userr=""
  return (
      <div >
          <Navbar className="movie_navbar"/>
    <div className="movie_page">
       {filteredMovie?.map((movie) => ( 
        <div >
    
          <div className="movie_info">
            <img
              className="movie_poster_img"
              src={movie.foto}
              alt=""
            />
            <div className="movie_description">
              <p>
                
                <span>Movie title:{movie.title}</span>
              </p>
              <p>
                Release date: <span>22.22.1990</span>
              </p>
              <p>
                Vote average: <span> vote average 9.9</span>
              </p>
              <p>
                Overview: <span>Film haqida</span>
              </p>
              <div className="btns">
              <button
              className="btn"
            //   onClick={() => watchMovie(movie)}
              onClick={() => setShowMovie(true)}
              >
                   Watch Trailer</button>
     <Link to={userr ? "/payment":"/login"}>
              <button 
              className="btn"
             
              >Watch full movie
              </button>
              </Link>
              <br/>
             
              </div>

            </div>
          </div>
        </div>
     ))} 
      { showMovie &&
      <div className="trailer">
        <h1>Trailer</h1>
      <video  width="1200" height="2s40" src={Video} autoPlay progress controls/>
      {/* {trailerURL && showMovie && <YouTube videoId={trailerURL} opts={opts} />} */}
      </div>
}
    
    </div>
    <Footer/>
    </div>
  );
}
