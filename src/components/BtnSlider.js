import React from "react";

import leftArrow from "./left-chevron.png";
import rightArrow from "./right-chevron.png";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next"
          ? "btn-slide btn-slide--next"
          : "btn-slide btn-slide--prev"
      }
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="" />
    </button>
  );
};

export default BtnSlider;
