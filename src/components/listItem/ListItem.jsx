import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Kino1 from "../../assets/images/kino5.jpg"
import Video1 from "../../assets/videos/bunny.mp4"


export default function ListItem({index,item}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredd, setIsHoveredd] = useState(false);
  const [movie, setMovie] = useState({});

  // useEffect(() => {
  //   // const getMovie = async () => {
  //   //   try {
  //   //     const res = await axios.get("/movies/find/" + item, {
  //   //       headers: {
  //   //         token:
  //   //         "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
  //   //       },
  //   //     });
  //   //     setMovie(res.data);
  //   //   } catch (err) {
  //   //     console.log(err);
  //   //   }
  //   // };
  //   // getMovie();
  // }, [item]);

  return (
    // <Link to={{ pathname: "/details", movie: movie }}>
    <Link to="/details">
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        <img src={Kino1} alt="" />
        {/* <img src={movie?.imgSm} alt="" /> */}
     
      </div>
    </Link>
  );
}

// {isHoveredd && (
//   <>
//     <video src={Video1} autoPlay={true} loop />
//     {/* <video src={movie.trailer} autoPlay={true} loop /> */}
//     <div className="itemInfo">
//       <div className="icons">
//         <PlayArrow className="icon" />
//         <Add className="icon" />
//         <ThumbUpAltOutlined className="icon" />
//         <ThumbDownOutlined className="icon" />
//       </div>
//       <div className="itemInfoTop">
//         <span>Movie duration</span>
//         {/* <span>{movie.duration}</span> */}
//         <span className="limit">+{movie.limit}</span>
//         <span>Movie Year</span>
//         {/* <span>{movie.year}</span> */}
//       </div>
//       <div className="desc">Movie desc</div>
//       {/* <div className="desc">{movie.desc}</div> */}
//       <div className="genre">Movie genre</div>
//       {/* <div className="genre">{movie.genre}</div> */}
//     </div>
//   </>
// )}