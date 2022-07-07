import React, { useContext } from "react";
import logo from "../images/clwhite.webp";
import NavList from "./NavList";
import { FaBars } from "react-icons/fa";
import { OverlayContext } from "../overlay/overlayContext";

const NavBar = () => {
  const context = useContext(OverlayContext);
  const { overlayState, setOverlay } = context;

  return (
    <>
      <div className="navigation">
        <nav className="navigation__nav">
          <img className="navigation__logo" src={logo} alt="Cohere Logo" />
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
