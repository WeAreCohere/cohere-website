import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import NavList from "./NavList";

import { MdClose } from "react-icons/md";
import { OverlayContext } from "../overlay/overlayContext";

const Overlay = () => {
  const context = useContext(OverlayContext);
  const { overlayState, setOverlay } = context;

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOverlay(false);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    // 👇️ clean up event listener
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [setOverlay]);

  return ReactDOM.createPortal(
    <div className="overlay" style={{ width: overlayState ? "70vw" : "0" }}>
      <ul className="overlay__list">
        <MdClose
          className="overlay__close"
          onClick={() => {
            setOverlay(!overlayState);
          }}
        />
        <NavList />
      </ul>
    </div>,
    document.getElementById("overlay")
  );
};

export default Overlay;
