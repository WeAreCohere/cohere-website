import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { funding } from "../images/what";
import { placeHolder } from "../images";
import useScrollToTop from "../hooks/scrollToTop";

const Funding = () => {
  useScrollToTop();
  return (
    <>
      <section className="section-how-we-do-it">
        <div className="row">
          <div className="col-1-of-2">
            <h1 className="heading-primary" style={{ color: "#282828" }}>
              <span className="heading-primary--main">Funding</span>
            </h1>

            <p className="paragraph paragraph--black">
              Refugee-led organisations (RLOs) are capable of delivering
              solutions within their communities and leading change. Funding is
              essential for these groups to grow, strengthen their communities
              and deliver their ideas, but most of the time not enough money
              reaches these organisations. Currently 1% of humanitarian funding
              reaches those responding on the frontline - we want to change
              this.
            </p>

            <p className="paragraph paragraph--black">
              We do this through improving the opportunities for funding to
              reach RLOs, these include;
            </p>

            <p className="paragraph paragraph--black paragraph--medium">
              <b>Reframe</b> - Our platform aims to provide opportunities for
              donors to donate directly to refugee-led organisations across the
              world. Whether it is a large grant from institutional donors, or
              an individual donor who would like to give £10 per month to a
              refugee-led organisation, we have built a platform to enable them
              to find, connect and donate to organisations.
            </p>

            <p className="paragraph paragraph--black paragraph--medium">
              <b> Direct Funding</b> - In 2022, we gave refugee-led
              organisations across East Africa over $500,000 of funding to
              support their community initiatives and grow their organisations.
              When refugee-led organisations have the power to decide how their
              money is used they tend to make the best decisions. Reframe
              improves channels for direct funding.
            </p>

            <p className="paragraph paragraph--black paragraph--medium">
              <b>Pooled-Funds</b> - Our pooled-funds on Reframe enable us to
              direct funding to RLOs who are on the frontline of emergencies and
              responding to the collective needs of refugee communities
              worldwide. By getting money directly to them they can decide the
              best response to support their communities, this is especially
              important during emergencies.
            </p>

            <p className="paragraph paragraph--black paragraph--medium">
              <b>Advocacy</b> - We advocate for increased direct funding from
              donors to RLOs and are improving mechanisms that enable this.
              Through our work we want to prove to donors that if they give
              directly their money is used more effectively and efficiently, and
              also provides solutions that are more sustainable. Using research
              and proof from our work we hope to changes mindsets and practices
              for how money is distributed during humanitarian crises and
              emergency response.
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
              src={funding}
              height="60%"
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
