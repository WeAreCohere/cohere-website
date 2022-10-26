import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { coordination } from "../images/what";
import { placeHolder } from "../images";

const Coordination = () => {
  return (
    <>
      <section className="section-how-we-do-it">
        <div className="row">
          <div className="col-1-of-2">
            <h1 className="heading-primary" style={{ color: "#282828" }}>
              <span className="heading-primary--main">Coordination</span>
            </h1>

            <p className="paragraph paragraph--black">
              We partner with over 33 refugee-led organisations across Kenya,
              Uganda, Malawi, and South Africa. We aim to showcase their
              impressive work and strengthen networks between different
              organisations, and the sector as a whole. Collaboration and
              coordination will strengthen the collective opportunities of
              refugee-led organisations across the region.
            </p>
          </div>
          <div className="col-1-of-2">
            <LazyLoadImage
              src={coordination}
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

export default Coordination;
