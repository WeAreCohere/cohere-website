import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { capacity, C_S, unhcr } from "../images/what";
import { placeHolder } from "../images";

import { BsFileEarmarkPdf } from "react-icons/bs";

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

        <div className="row">
          <div className="col-1-of-2">
            <LazyLoadImage
              src={C_S}
              effect="blur"
              placeholderSrc={placeHolder}
              alt="Capacity and Strengthening"
              height="80%"
              width="100%"
            />
          </div>
          <div className="col-1-of-2">
            <div className="capacity">
              <h2>Capacity Strengthening and Sharing Course</h2>
              <p>A manual for community-based organisations</p>
              <a
                href="https://drive.google.com/file/d/1uJPxLdR1yEKDGS1rxRHgwjrvn7ppk2LH/view"
                className="btn btn--black"
                target="_blank"
              >
                <span>
                  <BsFileEarmarkPdf />
                </span>
                <span> Download Now </span>
              </a>
              <div className="capacity__row">
                <LazyLoadImage
                  className="capacity__row--img"
                  src={unhcr}
                  placeholderSrc={capacity}
                  effect="blur"
                  alt="UNHCR Innovation Award 2019 Winner"
                />
                <div className="">
                  <p>UNHCR Innovation Award 2019 Winner</p>
                  <a
                    href="https://www.unhcr.org/innovation/innovation-award-2019/"
                    target="_blank"
                  >
                    <p>Learn More</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Capacity;
