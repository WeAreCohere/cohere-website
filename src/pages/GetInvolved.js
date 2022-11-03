import React from "react";
import useProgressiveImage from "../hooks/ProgressiveImage";
import useScrollToTop from "../hooks/scrollToTop";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
  background,
  backgroundBlur,
  donate,
  events,
  eventsBlur,
  fund,
  volunteer,
} from "../images/involved";

import { placeHolder } from "../images";

const GetInvolved = () => {
  useScrollToTop();

  return (
    <>
      <header
        className="header"
        style={{
          backgroundImage: `url(${
            useProgressiveImage(background) || placeHolder
          })`,
        }}
      >
        <div className="header__box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">GET INVOLVED</span>
          </h1>
          <p className="header__paragraph" style={{ width: "50%" }}>
            Help us smash the the cycle of dependency!
          </p>
          <p className="header__paragraph" style={{ width: "50%" }}>
            Your contribution enables refugees to help themselves to a better
            future on their own terms. So whether it’s going to school, learning
            a new skill or creating a difference for the local community, it’s
            about being able to make their own choices towards a better future.
            And we hope you choose to help.
          </p>
        </div>
      </header>

      <main>
        <section className="section-help-out">
          <div className="row">
            <div className="col-1-of-3">
              <div className="section-help-out--grid">
                <a
                  href="https://cohere.enthuse.com/donate#!/"
                  className="btn btn--white"
                >
                  Donate
                </a>
                <p className="paragraph u-text-center">
                  Give the gift of independence today with a small monthly
                  donation.
                </p>
                <LazyLoadImage
                  src={donate}
                  alt="donate"
                  // height="100%"
                  width="100%"
                  effect="blur"
                  placeholderSrc={placeHolder}
                />
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="section-help-out--grid">
                <a
                  href="https://cohere.enthuse.com/fundraising/start#!/"
                  className="btn btn--white"
                >
                  Fundraise
                </a>
                <p className="paragraph u-text-center">
                  Looking for change? You can help us change futures.
                </p>
                <LazyLoadImage
                  src={fund}
                  alt="fund"
                  // height="100%"
                  width="100%"
                  effect="blur"
                  placeholderSrc={placeHolder}
                />
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="section-help-out--grid">
                <a
                  href="mailto:volunteer@wearecohere.org"
                  className="btn btn--white"
                >
                  Volunteer
                </a>
                <p className="paragraph u-text-center">
                  Share you time and skills. Our future looks better with you in
                  it.
                </p>
                <LazyLoadImage
                  src={volunteer}
                  alt="volunteer"
                  // height="100%"
                  width="100%"
                  effect="blur"
                  placeholderSrc={placeHolder}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-events">
          <div className="halfsection">
            <div
              className="halfsection__img"
              style={{
                backgroundImage: `url(${
                  useProgressiveImage(events) || eventsBlur
                })`,
              }}
            ></div>
            <div className="halfsection__text">
              <h1 className="heading-primary">EVENTS</h1>
              <p className="paragraph">
                This year we will be hosting events to support our partners and
                involve our community
              </p>
              <p className="paragraph">
                With your support, we can change charity for the better.
              </p>
              <p className="paragraph">
                Get the latest updates to find out what’s happening by signing
                up to our newsletter.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GetInvolved;
