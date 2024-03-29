import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
  BsPeopleFill,
  BsCashStack,
  BsGlobe,
  BsBank2,
  BsLaptop,
} from "react-icons/bs";

// IMAGES
import {
  advocacy,
  background,
  backgroundBlur,
  capacity,
  coordination,
  cycle,
  cycleBlur,
  funding,
  reframe,
  reframeBlur,
} from "../images/home";

import { chevron, orangeChevron, placeHolder } from "../images";

import PersonHeart from "./PersonHeart";
import useProgressiveImage from "../hooks/ProgressiveImage";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loaded, setLoaded] = useState(true);

  const fetchBlogs = useCallback(async () => {
    try {
      const response = await fetch("https://reframe-api.herokuapp.com/news");
      if (!response.ok) {
        throw new Error("Couldn't fetch blogs'");
      }

      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      setBlogs(null);
      setLoaded(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const filterArr = (arr, category) => {
    const returnedArray = arr
      .filter((blog) => blog.category.includes(category))
      .slice(0, 3);

    return returnedArray;
  };

  let renderedNews = ``;
  // let renderedJobs = ``;
  const news = blogs && filterArr(blogs.results.data, "news");
  // const jobs = blogs && filterArr(blogs.results.data, "jobs");
  let colors = ["#ff9343", "#72ccca", "#ff6865"];

  renderedNews = news ? (
    news.map((data, i) => (
      <div
        className="blog__item"
        key={i}
        style={{ backgroundColor: `${colors[i]}` }}
      >
        <div className="blog__title">{data.name}</div>
        <a href={`https://news.wearecohere.org${data.permalink}`}>
          <LazyLoadImage
            src={data.image}
            alt={data.name}
            height="100%"
            width="100%"
            effect="blur"
            placeholderSrc={placeHolder}
            className="blog__img"
          />
        </a>
      </div>
    ))
  ) : (
    <div style={{ margin: "0 auto" }}>
      <p className="paragraph">Loading 🚀...</p>
    </div>
  );

  // renderedJobs = jobs ? (
  //   jobs.map((data, i) => (
  //     <div
  //       className="blog__item"
  //       key={i}
  //       style={{ backgroundColor: `${colors[i]}` }}
  //     >
  //       <div className="blog__title">{data.name}</div>
  //       <a href={`https://news.wearecohere.org${data.permalink}`}>
  //         <LazyLoadImage
  //           src={data.image}
  //           alt={data.name}
  //           height="100%"
  //           width="100%"
  //           effect="blur"
  //           placeholderSrc={placeHolder}
  //           className="blog__img"
  //         />
  //       </a>
  //     </div>
  //   ))
  // ) : (
  //   <div style={{ margin: "0 auto" }}>
  //     <p className="paragraph" style={{ color: "#282828" }}>
  //       Loading 🚀...
  //     </p>
  //   </div>
  // );

  if (!loaded) {
    renderedNews = (
      <div style={{ margin: "0 auto" }}>
        <p className="paragraph">Something went wrong 📛</p>
      </div>
    );

    // renderedJobs = (
    //   <div style={{ margin: "0 auto" }}>
    //     <p className="paragraph">Something went wrong 📛</p>
    //   </div>
    // );
  }

  return (
    <>
      <header
        className="header"
        style={{
          backgroundImage: `url(${
            useProgressiveImage(background) || backgroundBlur
          })`,
        }}
      >
        <div className="header__box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Transfer Power</span>
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
        <section className="section-video-embed">
          <h1 className="heading-primary u-text-center ">we are cohere</h1>

          <div className="section-video-embed--video">
            <iframe
              style={{ display: "block", margin: " 0 auto" }}
              width="80%"
              height="80%"
              src="https://www.youtube.com/embed/_s0YpuwOLrc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
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
                  <LazyLoadImage
                    src={advocacy}
                    alt="Refugees community direct funding"
                    effect="blur"
                    height="100%"
                    width="100%"
                    className="story__img"
                    placeholderSrc={placeHolder}
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
                  <LazyLoadImage
                    src={capacity}
                    alt="Localisation training for refugees"
                    effect="blur"
                    height="100%"
                    width="100%"
                    className="story__img"
                    placeholderSrc={placeHolder}
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
                  <LazyLoadImage
                    src={coordination}
                    alt="Refugee leaders meeting"
                    effect="blur"
                    height="100%"
                    width="100%"
                    className="story__img"
                    placeholderSrc={placeHolder}
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
                  <LazyLoadImage
                    src={funding}
                    alt="Refugee voices"
                    effect="blur"
                    height="100%"
                    width="100%"
                    className="story__img"
                    placeholderSrc={placeHolder}
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
              <h4 className="u-cohere-orange">43</h4>
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
              <h4 className="u-cohere-orange">5</h4>
              <p>Countries: Kenya, Uganda, Malawi, South Africa, Nigeria</p>
            </div>
            <div className="impact__grid--item">
              <BsBank2 className="impact__grid--icon" />
              <h4 className="u-cohere-orange">20</h4>
              <p>
                Institutional donors committed to directly fund refugee-led
                organisations
              </p>
            </div>
            <div className="impact__grid--item">
              <PersonHeart />
              <h4 className="u-cohere-orange">55,738</h4>
              <p>People reached in 2022</p>
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
          <h1 className="heading-primary u-text-center ">COMING TOGETHER</h1>
          <div className="row">
            {/* <div
              className="section-we-are-cohere--image"
              style={{
                backgroundImage: `url(${xp})`,
              }}
            ></div> */}

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
            {/* <div
              className="section-we-are-cohere--image"
              style={{
                backgroundImage: `url(${ur})`,
              }}
            ></div> */}
          </div>

          <div className="u-text-center">
            <a href="#smashing-cycle">
              <img className="chevron" src={chevron} alt="White chevron" />
            </a>
          </div>
        </section>

        {/* <section id="stories" className="section-stories">
          <Slider>
            <Stories />
          </Slider>
        </section> */}

        <section id="smashing-cycle" className="section-smashing-cycle">
          <div className="halfsection">
            <div
              className="halfsection__img"
              style={{
                backgroundImage: `url(${
                  useProgressiveImage(cycle) || cycleBlur
                })`,
              }}
            ></div>
            <div className="halfsection__text">
              <h2>HELP US SMASH THE CYCLE OF DEPENDENCY</h2>
              <p>
                Your contribution enables refugees to help themselves to a
                better future on their own terms. So whether it’s going to
                school, learning a new skill or creating a difference for the
                local community, it’s about being able to make their own choices
                towards a better future. And we hope you choose to help.
              </p>
              <a
                href="https://cohere.enthuse.com/donate#!/"
                className="btn btn--white"
              >
                Donate
              </a>
              <a href="#reframe">
                <img className="chevron" src={chevron} alt="White chevron" />
              </a>
            </div>
          </div>
        </section>

        <section id="reframe" className="section-reframe">
          <div className="halfsection">
            <div className="halfsection__text">
              <h2>REFRAME</h2>
              <p>
                Reframe was launched in 2021, and is powered by Cohere and
                partners. The platform aims to promote the work of RLOs and help
                them to overcome some of the challenges they are facing. By
                sharing resources, building networks and accessing direct
                funding, it will enable them to access the tools they need to
                transform their communities.
              </p>
              <p>
                We also want donors and supporters to be able to connect with
                and directly fund refugee-led organisations through the
                platform.
              </p>
              <a href="https://reframe.network/" className="btn btn--white">
                Visit Reframe
              </a>
            </div>
            <div
              className="halfsection__img"
              style={{
                backgroundImage: `url(${
                  useProgressiveImage(reframe) || reframeBlur
                })`,
              }}
            ></div>
          </div>
        </section>

        <section className="section-news">
          <h1 className="heading-primary u-text-center">NEWS</h1>
          <a
            className="heading-primary--sub u-text-center"
            href="https://news.wearecohere.org/categories/news/"
          >
            <h3>
              View all <span>&rarr;</span>
            </h3>
          </a>

          <div className="blog">{renderedNews}</div>

          <div className="u-text-center" style={{ paddingBottom: "2rem" }}>
            <a
              href="https://cohere.enthuse.com/donate#!/"
              className="btn btn--white"
            >
              Help us smash the cycle of dependency
            </a>
          </div>
        </section>
        {/* <section className="section-jobs">
          <h1
            className="heading-primary u-text-center"
            style={{ color: "#282828" }}
          >
            Jobs
          </h1>
          <a
            className="heading-primary--sub u-text-center"
            style={{ color: "#282828" }}
            href="https://news.wearecohere.org/categories/jobs/"
          >
            <h3>
              View all <span>&rarr;</span>
            </h3>
          </a>

          <div className="blog">{renderedJobs}</div>
        </section> */}
      </main>
    </>
  );
};

export default Home;
