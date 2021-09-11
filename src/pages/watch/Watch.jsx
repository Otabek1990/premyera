import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <div style={{paddingTop:"56.25%",position:"relative"}}>

<iframe
 src="https://player.vdocipher.com/playerAssets/1.x/vdo/embed/index.html#otp=20160313versASE323loduHtOG3YWFDML8jWTDCFvSE1h19H9uK8ee3W7xSLsbLw&playbackInfo=eyJ2aWRlb0lkIjoiNDMyODliZGQxZGEzNGI3OTk1MzczNmI3NzhhYTU3MmEifQ==" 
 style={{border:"0",maxWidth:"100%",position:"absolute",top:"100px",left:"0",height:"90%",width:"100%"}} allowFullScreen="true" allow="encrypted-media">

</iframe>
</div>
      {/* <iframe 
      title="movie"
      src="https://iframe.dacast.com/vod/736e6142-1a3b-4451-5fa9-27602c08c8bf/6b8750a1-fa13-907a-1a56-fd687443527e"
       width="100%" height="100%" frameborder="0" 
       scrolling="no" allow="autoplay" 
       allowfullscreen webkitallowfullscreen 
       mozallowfullscreen oallowfullscreen msallowfullscreen>

      </iframe> */}
  
      {/* <video className="video" autoPlay progress controls src={movie.video} /> */}
    </div>
  );
}
