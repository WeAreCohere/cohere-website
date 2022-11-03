import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo, placeHolder } from "../images";
import NavList from "./NavList";
import { FaBars } from "react-icons/fa";
import { OverlayContext } from "../overlay/overlayContext";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
            <LazyLoadImage
              src={logo}
              alt="Cohere Logo"
              effect="blur"
              placeholderSrc={placeHolder}
              className="navigation__logo"
            />
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
