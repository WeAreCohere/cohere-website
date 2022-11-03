import React from "react";

// Images
import {
  background,
  backgroundBlur,
  collab,
  collabBlur,
} from "../images/about";
import { chevron } from "../images";

import Timeline from "../components/Timeline";
import useProgressiveImage from "../hooks/ProgressiveImage";

const AboutUs = () => {
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
        <div className="header__box header__box--top">
          <h1 className="heading-primary u-text-center">
            <span className="heading-primary--main">About Us</span>
          </h1>
          <p className="header__paragraph u-text-center">
            At Cohere we’re on a mission to unleash the potential of refugees so
            they can determine their own futures on their own terms.
          </p>
          <div className="u-text-center">
            <a href="#vision">
              <img className="chevron" src={chevron} alt="White chevron" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="vision" className="section-vision">
          <h1 className="heading-primary u-text-center ">vision</h1>
          <p className="paragraph u-text-center">
            At Cohere we want to see a world in which everyone has control over
            their own future. Especially refugees. Our mission is to unleash the
            potential of refugees to determine their own futures on their own
            terms. No one chooses to live a life of dependency. That’s why our
            vision isn’t to transfer aid. It’s to transfer power.
          </p>
          <p className="paragraph u-text-center">
            Cohere is transforming communities by transferring power within the
            response to refugee crises. To make the most effective and
            sustainable change within communities, we work closely together with
            local refugee led organisations (RLOs), who know exactly what's
            needed to address the challenges their communities face. RLOs are
            building stronger communities and forging a path towards
            self-reliance in refugee hosting areas. We would like their lead to
            be followed - for local leaders to make the decisions that affect
            refugee communities.
          </p>
          <div className="u-text-center">
            <a href="#collaboration">
              <img className="chevron" src={chevron} alt="White chevron" />
            </a>
          </div>
        </section>

        <section id="collaboration" className="section-collaboration">
          <div className="halfsection">
            <div className="halfsection__text">
              <h1 className="heading-primary">COLLABORATION</h1>
              <p className="paragraph">
                Since 2008 we have worked closely together with locals and
                refugees. We’ve learned a whole lot during this time. And
                there’s no way we’re keeping all of that to ourselves.
              </p>
              <p className="paragraph">
                We are sharing our knowledge with others through our awarded
                capacity strengthening and sharing course. And, we have
                developed the platform Reframe, which helps connect funding
                bodies and NGOs to the Refugee led organisations.
              </p>
              <p className="paragraph">
                We are nowhere near done. We’re just getting started.
              </p>
            </div>
            <div
              className="halfsection__img"
              style={{
                backgroundImage: `url(${
                  useProgressiveImage(collab) || collabBlur
                })`,
              }}
            ></div>
          </div>
        </section>

        <section id="timeline" className="section-timeline">
          <h1 className="heading-primary u-text-center">Timeline</h1>
          <Timeline />
        </section>
      </main>
    </>
  );
};

export default AboutUs;
