import React from "react";
import { Link } from "react-router-dom";

// IMAGES
import advocacy from "../images/home/wwd_advocacy.png";
import background from "../images/home-header.jpg";
import capacity from "../images/home/wwd_capacity.png";
import chevron from "../images/chevron.png";
import coordination from "../images/home/wwd_coordination.png";
import funding from "../images/home/wwd_funding.png";

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

        <section id="impact" className="section-impact"></section>

        <section className="section-we-are-cohere"></section>

        <section className="section-smashing-cycle"></section>

        <section className="section-reframe"></section>

        <section className="section-news"></section>
      </main>
    </>
  );
};

export default Home;
