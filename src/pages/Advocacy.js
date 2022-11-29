import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { advocacy } from "../images/what";
import { placeHolder } from "../images";
import useScrollToTop from "../hooks/scrollToTop";
import { Link } from "react-router-dom";

const Advocacy = () => {
  useScrollToTop();
  return (
    <>
      <section className="section-how-we-do-it">
        <div className="row">
          <div className="col-1-of-2">
            <h1 className="heading-primary" style={{ color: "#282828" }}>
              <span className="heading-primary--main">Advocacy</span>
            </h1>

            <p className="paragraph paragraph--black">
              Advocacy has become a critical part of our work as we try to
              promote refugee leadership and locally-led initiatives to our
              donors, and more broadly in the sector. We believe that increased
              refugee representation and participation in decision-making and
              programme design will strengthen humanitarian and crisis response.
              We are advocating for increased direct funding, improved
              coordination and capacity strengthening.
            </p>
            <p className="paragraph paragraph--black">
              Through our work and partnerships we are proving that refugee-led
              solutions are the best solutions. Our experience has taught us
              that this is the most effective, efficient and sustainable way to
              work. We believe more needs to be done to strengthen refugee-led
              organisations and networks that enable refugee organisations to
              have the power to lead change in their communities.
            </p>
            <p className="paragraph paragraph--black">
              We partner closely with networks like Refugee Leadership Network
              in Kenya, Uganda, Malawi and South Africa. As well as
              participating in networks with other NGOs, like Charter4Change,
              who are on a mission to shift power within the international
              humanitarian sector towards a more locally-led approach.
            </p>
            <p className="paragraph paragraph--black">
              With our partners, our Advocacy team leads research initiatives to
              highlight specific injustices that refugees faces and issue within
              the sector to try and find solutions to overcome these challenges
              in the future. Read one of our reports{" "}
              <Link to="/reframe">here</Link>.
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
              src={advocacy}
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

export default Advocacy;
