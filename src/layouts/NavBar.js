import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/clwhite.webp";
import NavList from "./NavList";
import { FaBars } from "react-icons/fa";
import { OverlayContext } from "../overlay/overlayContext";

const NavBar = () => {
  const context = useContext(OverlayContext);
  const { overlayState, setOverlay } = context;

  let navigationColor;
  switch (useLocation().pathname) {
    case "/getinvolved":
      navigationColor = "#ff9343";
      break;

    case "/aboutus":
      navigationColor = "#ff6865";
      break;

    default:
      navigationColor = "#72ccca";
      break;
  }

  return (
    <>
      <div className="navigation">
        <nav
          className="navigation__nav"
          style={{ backgroundColor: navigationColor }}
        >
          <Link to="/">
            <img className="navigation__logo" src={logo} alt="Cohere Logo" />
          </Link>
          <ul className="navigation__list">
            <NavList />
          </ul>
          <FaBars
            className="navigation__btn"
            onClick={() => {
              setOverlay(!overlayState);
            }}
          />
        </nav>
      </div>
    </>
  );
};

export default NavBar;
