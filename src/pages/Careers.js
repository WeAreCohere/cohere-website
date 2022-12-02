import React, { useCallback, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { placeHolder } from "../images";

const Careers = () => {
  const [jobs, setJobs] = useState(null);
  const [loaded, setLoaded] = useState(true);

  const fetchJobs = useCallback(async () => {
    try {
      const response = await fetch("https://reframe-api.herokuapp.com/news");
      if (!response.ok) {
        throw new Error("Couldn't fetch jobs'");
      }

      const data = await response.json();
      setJobs(data);
    } catch (error) {
      setJobs(null);
      setLoaded(false);
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const filterArr = (arr, category) => {
    const returnedArray = arr.filter((blog) =>
      blog.category.includes(category)
    );
    // .slice(0, 3);

    return returnedArray;
  };

  let renderedJobs = ``;
  let filteredJobs = jobs && filterArr(jobs.results.data, "jobs");
  let colors = ["#ff9343", "#72ccca", "#ff6865"];
  console.log(filteredJobs);

  renderedJobs = filteredJobs ? (
    filteredJobs.map((data, i) => (
      <figure
        className="matrix__item"
        key={i}
        // style={{ backgroundColor: `${colors[i]}` }}
      >
        <LazyLoadImage
          src={data.image}
          alt={data.name}
          height="100%"
          width="100%"
          effect="blur"
          placeholderSrc={placeHolder}
          className="matrix__img"
        />

        <div className="matrix__description">
          <a
            className="btn btn--red"
            href={`https://news.wearecohere.org${data.permalink}`}
            target="_blank"
            rel="noreferrer"
          >
            Visit
          </a>
          <h3 style={{ fontWeight: "bold" }}>{data.name}</h3>
        </div>
      </figure>
    ))
  ) : (
    <div style={{ margin: "0 auto" }}>
      <p className="paragraph">Loading 🚀...</p>
    </div>
  );

  if (!loaded) {
    renderedJobs = (
      <div style={{ margin: "0 auto" }}>
        <p className="paragraph">Something went wrong 📛</p>
      </div>
    );
  }

  return (
    <>
      <section className="section-careers">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Careers</span>
        </h1>
        <div className="matrix">{renderedJobs}</div>
      </section>
    </>
  );
};

export default Careers;
