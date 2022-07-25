import React from "react";

import storySlider from "./storySlider";

const Stories = () => {
  return (
    <div className="slider">
      {storySlider.map((el, i) => {
        return <div className="slide"></div>;
      })}
    </div>
  );
};

export default Stories;
