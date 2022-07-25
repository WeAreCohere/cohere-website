import React from "react";
import { Link } from "react-router-dom";
import {
  BsPeopleFill,
  BsCashStack,
  BsGlobe,
  BsBank2,
  BsLaptop,
} from "react-icons/bs";

// IMAGES
import advocacy from "../images/home/wwd_advocacy.png";
import background from "../images/home/home-header.jpg";
import capacity from "../images/home/wwd_capacity.png";
import coordination from "../images/home/wwd_coordination.png";
import funding from "../images/home/wwd_funding.png";
import ur from "../images/home/UR-Logo.webp";
import xp from "../images/home/XP-Logo.webp";

import chevron from "../images/chevron.png";
import orangeChevron from "../images/chevronorange.png";
import PersonHeart from "./PersonHeart";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <header
        className="header"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="header__box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Transform Power</span>
            <span className="heading-primary--main">Transform Communities</span>
          </h1>
          <p className="header__paragraph" style={{ width: "50%" }}>
            At COHERE we’re on a mission to unleash the potential of refugees to
            determine their own futures on their own terms. Your future should
            be up to you. Imagine a world in which everyone has control over
            their own future. We can picture it.
          </p>
          <Link to="getinvolved" className="btn btn--white">
            Get Involved
          </Link>
        </div>
      </header>

      <main>
        <section className="section-what-we-do">
          <h1 className="heading-primary u-text-center ">what we do</h1>
          <p
            className="paragraph u-text-center"
            style={{ width: "60%", margin: "0 auto" }}
          >
            We partner with refugee-led organisations so they can transform
            their communities by offering critical services, skills training and
            opportunities. We do this through;
          </p>
          <div className="row">
            <div className="col-1-of-4">
              <h2 className="heading-primary u-text-center">Funding</h2>
              <Link to="/funding">
                <figure className="story">
                  <img
                    className="story__img"
                    src={advocacy}
                    alt="Refugees community direct funding"
                  />
                  <figcaption className="story__caption">
                    Create funding opportunities for RLOs and encourage donors
                    to fund directly
                  </figcaption>
                </figure>
              </Link>
            </div>

            <div className="col-1-of-4">
              <h2 className="heading-primary u-text-center">Capacity</h2>
              <Link to="/capacity">
                <figure className="story">
                  <img
                    className="story__img"
                    src={capacity}
                    alt="Localisation training for refugees"
                  />
                  <figcaption className="story__caption">
                    Training to ensure that RLOs can effectively respond to the
                    needs of their communities
                  </figcaption>
                </figure>
              </Link>
            </div>
            <div className="col-1-of-4">
              <h2 className="heading-primary u-text-center">Coordination</h2>
              <Link to="/coordination">
                <figure className="story">
                  <img
                    className="story__img"
                    src={coordination}
                    alt="Refugee leaders meeting"
                  />
                  <figcaption className="story__caption">
                    Showcase the work of RLOs and connect them with other
                    organisations
                  </figcaption>
                </figure>
              </Link>
            </div>
            <div className="col-1-of-4">
              <h2 className="heading-primary u-text-center">Advocacy</h2>
              <Link to="/advocacy">
                <figure className="story">
                  <img
                    className="story__img"
                    src={funding}
                    alt="Refugee voices"
                  />
                  <figcaption className="story__caption">
                    Influence donor practices, and support RLOs to tell their
                    stories
                  </figcaption>
                </figure>
              </Link>
            </div>
          </div>
          <div className="u-text-center">
            <a href="#impact">
              <img className="chevron" src={chevron} alt="White chevron" />
            </a>
          </div>
        </section>

        <section id="impact" className="section-impact">
          <h1 className="heading-primary u-text-center u-cohere-orange">
            Impact
          </h1>

          <div className="impact__grid">
            <div className="impact__grid--item">
              <BsPeopleFill className="impact__grid--icon" />
              <h4 className="u-cohere-orange">33</h4>
              <p>Partner refugee-led organisations</p>
            </div>
            <div className="impact__grid--item">
              <BsCashStack className="impact__grid--icon" />
              <h4 className="u-cohere-orange">$500,000</h4>
              <p>
                In direct funding to refugee-led <br />
                organisations in 2022
              </p>
            </div>
            <div className="impact__grid--item">
              <BsGlobe className="impact__grid--icon" />
              <h4 className="u-cohere-orange">4</h4>
              <p>Countries: Kenya, Uganda, Malawi, South Africa</p>
            </div>
            <div className="impact__grid--item">
              <BsBank2 className="impact__grid--icon" />
              <h4 className="u-cohere-orange">8</h4>
              <p>
                Institutional donors committed to directly fund refugee-led
                organisations
              </p>
            </div>
            <div className="impact__grid--item">
              <PersonHeart />
              <h4 className="u-cohere-orange">24,479</h4>
              <p>People reached in 2021</p>
            </div>
            <div className="impact__grid--item">
              <BsLaptop className="impact__grid--icon" />
              <h4 className="u-cohere-orange">5</h4>
              <p>
                Open-source training courses created to strengthen refugee
                organisations
              </p>
            </div>
          </div>

          <div className="u-text-center">
            <a href="#we-are-cohere">
              <img
                className="chevron"
                src={orangeChevron}
                alt="Orange chevron"
              />
            </a>
          </div>
        </section>

        <section id="we-are-cohere" className="section-we-are-cohere">
          <h1 className="heading-primary u-text-center ">we are cohere</h1>
          <div className="row">
            <img className="section-we-are-cohere--image" src={xp} alt="XP" />
            <div className="">
              <p className="paragraph u-text-center">
                At the beginning of 2022 Xavier Project joined forces with Urban
                Refugees to become COHERE. We realised that by sharing resources
                and expertise we could do more to support the growth of
                refugee-led organisations, all whilst reducing costs. This way
                more money can go directly to our refugee-led partners. We want
                them to be in the driving seat. Together we want to smash the
                cycle of dependency. We hope you’ll join us.
              </p>
            </div>
            <img className="section-we-are-cohere--image" src={ur} alt="XP" />
          </div>

          <div className="u-text-center">
            <a href="#stories">
              <img className="chevron" src={chevron} alt="White chevron" />
            </a>
          </div>
        </section>

        <div id="stories" className="section-stories">
          <Slider></Slider>
        </div>

        <section
          id="smashing-cycle"
          className="section-smashing-cycle"
        ></section>

        <section className="section-reframe"></section>

        <section className="section-news"></section>
      </main>
    </>
  );
};

export default Home;
