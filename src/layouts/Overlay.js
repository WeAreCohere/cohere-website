import React from "react";
import ReactDOM from "react-dom";
import NavList from "./NavList";

const Overlay = () => {
  return ReactDOM.createPortal(
    <div className="overlay">
      <ul className="">
        <NavList />
      </ul>
    </div>,
    document.getElementById("overlay")
  );
};

export default Overlay;
