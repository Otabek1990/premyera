import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

export default function List({ genre, items }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  


  return (
    <div className="list">
      <span className="listTitle">{genre} </span>
      <div className="wrapper">
        <div className="container" >
          {items.map((item) => (
            <ListItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
