import React from "react";

import "./Stories.css";
import leftArrow from "./left-chevron.png";
import rightArrow from "./right-chevron.png";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="" />
    </button>
  );
};

export default BtnSlider;
