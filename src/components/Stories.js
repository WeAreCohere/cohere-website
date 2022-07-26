import React, { useState } from "react";
import BtnSlider from "./BtnSlider";

import img from "../images/home/wwd_advocacy.png";
import "./Stories.css";
import storySlider from "./storySlider";

const Stories = (props) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== storySlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === storySlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(storySlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <>
      {storySlider.map((el, index) => {
        return (
          <div
            key={el.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <div className="timeline">
              <div className="timeline__text">
                <div className="timeline__text--title">{el.title}</div>
                <div className="timeline__text--subtitle">{el.subTitle}</div>
                <div className="timeline__text--paragraph">{el.paragraph}</div>
              </div>

              <div className="timeline__img">
                <img src={el.image} alt="" />
              </div>
            </div>
          </div>
        );
      })}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: storySlider.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Stories;
