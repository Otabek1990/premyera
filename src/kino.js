import { useEffect, useState } from "react";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import axios from "axios";
import "./banner.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import { Carousel } from "react-bootstrap";
import BannerInFos from "./datas/bannerInfos";
import { random } from "nanoid";

export default function Kino() {
    const allPics=BannerInFos.map(item=>item.image)
    const [moviePic, setmoviePic] = useState(allPics[0])
useEffect(() => {
allPics.map(item=>setmoviePic(item))
}, [moviePic])
    console.log(moviePic)

  return (
    <div className="banner">
        <div>
          <img src={moviePic}/>
        </div>
        </div>

  );
}
