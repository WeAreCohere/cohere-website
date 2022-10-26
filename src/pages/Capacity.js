import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { capacity, C_S } from "../images/what";
import { placeHolder } from "../images";

const Capacity = () => {
  return (
    <>
      <section className="section-how-we-do-it">
        <div className="row">
          <div className="col-1-of-2">
            <h1 className="heading-primary" style={{ color: "#282828" }}>
              <span className="heading-primary--main">Capacity</span>
            </h1>

            <p className="paragraph paragraph--black">
              Refugee-led organisations (RLOs) hold the potential to deliver
              innovative and radical solutions to their communities. We have
              developed a capacity strengthening and sharing course with our
              partners with over 18 modules which aims to strengthen their
              organisational capacity through sessions in leadership,
              management, resources, finance and coordination. The course was
              awarded the UNHCR Innovation Award for Partnerships at the World
              Refugee Forum in Geneva, Switzerland in 2019.
            </p>
          </div>
          <div className="col-1-of-2">
            <LazyLoadImage
              src={capacity}
              height="100%"
              width="100%"
              effect="blur"
              placeholderSrc={placeHolder}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Capacity;
