import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Images
import { Edmund, Joseph, Mildred, Ruth, Sharon } from "../images/team";
import { placeHolder } from "../images";

const Team = () => {
  return (
    <>
      <section className="section-team">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Meet The Team</span>
        </h1>

        <p className="paragraph">
          Cohere has over 40 full-time members of staff of eight different
          nationalities. Through our partnerships with refugee-led organisations
          and networks we work across five countries on the African continent.
          Our talented team is made up of passionate and highly-skilled
          individuals who are committed to transferring power to refugees so
          they can transform their communities. Here are some members of our
          team who make our important work possible.
        </p>
        <p className="paragraph">
          Job opportunities will be posted on our News page or should you wish
          to volunteer with us please email us on {""}
          <a
            href="mailto: volunteer@wearecohere.org"
            style={{ textDecoration: "none", color: "#72ccca" }}
          >
            volunteer@wearecohere.org
          </a>
        </p>

        <div className="matrix">
          <figure className="matrix__item">
            <LazyLoadImage
              src={Edmund}
              alt="Edmund Page"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description matrix__hidden">
              <h2>Edmund Page</h2>
              <p>CEO & Founder</p>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={Mildred}
              alt="Edmund Page"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description matrix__hidden">
              <h2>Mildred Mugenya</h2>
              <p>Finance Director</p>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={Joseph}
              alt="Edmund Page"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description matrix__hidden">
              <h2>Joseph Mugerwa</h2>
              <p>Finance Lead</p>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={Sharon}
              alt="Edmund Page"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description matrix__hidden">
              <h2>Sharon Otieno</h2>
              <p>Head of HR</p>
            </div>
          </figure>
          {/* <figure className="matrix__item">
            <LazyLoadImage
              src={Carol}
              alt="Carol Kabatanya"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description matrix__hidden">
              <h2>Carol Kabatanya</h2>
              <p>Head of Compliance & Programmes</p>
            </div>
          </figure> */}
          <figure className="matrix__item">
            <LazyLoadImage
              src={Ruth}
              alt="Ruth Njiri"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description matrix__hidden">
              <h2>Ruth Njiri</h2>
              <p>Partnerships Director</p>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Team;
