import React, { useState } from "react";
import BtnSlider from "./BtnSlider";

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
            className={
              slideIndex === index + 1 ? "slide slide__active" : "slide"
            }
          >
            <div className="testimonial">
              <div className="testimonial__text">
                <h1 className="testimonial__text--title">{el.title}</h1>
                <h3 className="testimonial__text--subtitle">{el.subTitle}</h3>
                <p className="testimonial__text--paragraph">{el.paragraph}</p>
              </div>

              <div
                className="testimonial__img"
                style={{ backgroundImage: `url(${el.image})` }}
              ></div>
            </div>
          </div>
        );
      })}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: storySlider.length }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot dot__active" : "dot"}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Stories;
