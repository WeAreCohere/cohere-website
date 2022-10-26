import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { funding } from "../images/what";
import { placeHolder } from "../images";

const Funding = () => {
  return (
    <>
      <section className="section-how-we-do-it">
        <div className="row">
          <div className="col-1-of-2">
            <h1 className="heading-primary" style={{ color: "#282828" }}>
              <span className="heading-primary--main">Funding</span>
            </h1>

            <p className="paragraph paragraph--black">
              Refugee-led organisations are capable of delivering solutions
              within their communities and leading change. Funding is essential
              for these organisations to grow and deliver their ideas. We
              advocate for increased direct funding from donors to RLOs and are
              improving mechanisms that enable this.
            </p>
          </div>
          <div className="col-1-of-2">
            <LazyLoadImage
              src={funding}
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

export default Funding;
