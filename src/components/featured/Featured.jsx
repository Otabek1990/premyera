import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import "./featured.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import { Carousel } from "react-bootstrap";
import Kino1 from "../../assets/images/kino5.jpg"
import Kino2 from "../../assets/images/kino2.jpg"
import Kino3 from "../../assets/images/kino3.jpg"


export default function Featured({ type, setGenre }) {
  // const [content, setContent] = useState({});

  // useEffect(() => {
  //   const getRandomContent = async () => {
  //     try {
  //       const res = await axios.get(`/movies/random?type=${type}`, {
  //         headers: {
  //           token:
  //             "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
  //         },
  //       });
  //       setContent(res.data[0]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getRandomContent();
  // }, [type]);

  return (
    <div className="banner">
      <Carousel nextLabel="" prevLabel="" fade={true} pause={false}>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Kino1} alt="First slide" />
          {/* <Carousel.Caption>
            <div className="buttons">
              <button className="button">
                <span> Trailerni ko'rish</span>
              </button>
              <button className="button">
                <span>Filmni tomosha qilish</span>
              </button>
            </div>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Kino2} alt="Second slide" />
          {/* <Carousel.Caption  >
            <div className="buttons">
            <button className="button">
              <span> Trailerni ko'rish</span>
            </button>
            <button className="button">
              <span>Filmni tomosha qilish</span>
            </button>
            </div>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={Kino3} alt="Third slide" />
  
        </Carousel.Item>
      </Carousel>
      {/* <Carousel 
           autoplay={true}
           interval={2000}
           swipeable
           >
                <div>
                    <img src={Photo}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Photo} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Photo} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
    </div>
    //   <div className="banner"
    //  style={{backgroundImage:
    // `url("${base_image_URL}${movie?.backdrop_path}")`
    //   backgroundSize:"cover",height:"448px",
    //   backgroundPosition:"center center"}}>

    //       <div className="info">
    //       <h1>{movie?.title || movie?.name || movie?.original_title}</h1>
    //       <div className="banner_buttons">
    // <button>
    // <PlayArrow />

    //    <span>Play trailer</span>
    //     </button>
    // <button>
    // <InfoOutlined/>

    //    <span>Filmni tomosha qilish</span>
    //     </button>
    //       </div>
    //       <p>{truncate(movie.overview,200)}</p>
    //       <div className="fade_bottom"></div>
    //       </div>
    // </div>
  );
}
