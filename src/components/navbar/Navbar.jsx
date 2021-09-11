import {
  ArrowDropDown,
  Notifications,
  Search,
  MenuSharp,
} from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import Logo from "../../assets/images/premierLogoo.webp";
import { Avatar } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import Navigation from "./Menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const [screenSize, setScreenSize] = useState(window.innerWidth < 700);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const isScreenSize = window.innerWidth < 700;
        if (isScreenSize !== screenSize) setScreenSize(isScreenSize);
      },
      false
    );
  }, [screenSize]);

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      {!screenSize ? (
        <div className="container">
          <div className="left">
            <Link to="/" className="link">
              <img src={Logo} alt="" />
            </Link>

            <div style={{ display: "flex" }}>
              <Link to="/movies" className="link">
                <span className="navbarmainLinks">Filmlar</span>
              </Link>

              <Link to="/series" className="link">
                <span className="navbarmainLinks">Seriallar</span>
              </Link>
              <Link to="/watch" className="link">
                <span className="navbarmainLinks">Tomosha qilish</span>
              </Link>
             
            </div>
          </div>
          <div className="right">
            <div className="profile">
              <Avatar
                alt="Otabek"
                style={{ cursor: "pointer", width: "30px", height: "30px" }}
              />
              <div className="options">
                <span>Profile</span>
                <span onClick={() => dispatch(logout())}>Logout</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
        className="menu_container">
          <Navigation />
          <Link to="/" className="link" style={{ margin: " 20px 10px" }}>
            <img src={Logo} alt="" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

//-----------------------////////////////
