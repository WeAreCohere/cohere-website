import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { coordination } from "../images/what";
import { placeHolder } from "../images";
import useScrollToTop from "../hooks/scrollToTop";

const Coordination = () => {
  useScrollToTop();

  return (
    <>
      <section className="section-how-we-do-it">
        <div className="row">
          <div className="col-1-of-2">
            <h1 className="heading-primary" style={{ color: "#282828" }}>
              <span className="heading-primary--main">Coordination</span>
            </h1>

            <p className="paragraph paragraph--black">
              We partner with over 35 refugee-led organisations across Kenya,
              Uganda, Malawi, Nigeria and South Africa. We aim to showcase their
              impressive work and strengthen networks between different
              organisations, and the sector as a whole. Collaboration and
              coordination will improve the collective opportunities available
              to refugee-led organisations across the region, and the world.
            </p>
            <p className="paragraph paragraph--black">
              The sharing of knowledge and resources between refugees
              organisations serves to improve emergency response and
              integration. By creating platforms and moments for these groups to
              gather and interact we have seen how this can open up
              opportunities and guide less established groups.
            </p>
            <p className="paragraph paragraph--black">
              In a world when the refugee crises is growing exponentially
              year-on-year, we know that learning from each each other will
              continue to be critical. Our platform Reframe aims to enhance
              these opportunities. Find out more{" "}
              <a href="http://www.reframe.network">here</a>.
            </p>
          </div>
          <div
            className="col-1-of-2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LazyLoadImage
              src={coordination}
              height="80%"
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
