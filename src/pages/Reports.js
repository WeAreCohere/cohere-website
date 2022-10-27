import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import {
  CohereStrategicPlan,
  CSCC,
  AnnualReport2020,
  AnnualReport2019,
  XPAnnualReport2018,
  XPAnnualReport2017,
  XPAnnualReport2016,
} from "../images/reports";

import { placeHolder } from "../images";

const Reports = () => {
  return (
    <>
      <section className="section-reports">
        <h1 className="heading-primary" style={{ color: "#282828" }}>
          <span className="heading-primary--main">Reports</span>
        </h1>

        <div className="matrix">
          <figure className="matrix__item">
            <LazyLoadImage
              src={CohereStrategicPlan}
              alt="Cohere Strategic Plan 2022-2026"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="https://www.wearecohere.org/docs/CohereStrategicPlan22-26.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Cohere Strategic Plan 2022-2026</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={CSCC}
              alt="Capacity Strengthening and Sharing Course 2021"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="https://drive.google.com/file/d/1uJPxLdR1yEKDGS1rxRHgwjrvn7ppk2LH/view"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Capacity Strengthening and Sharing Course 20216</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={AnnualReport2020}
              alt="Annual Report 2020"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="https://xavierproject.org/wp-content/uploads/2021/07/XavierProjectAnnualReport2020-2.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Annual Report 2020</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={AnnualReport2019}
              alt="Xavier Project Annual Report 2019"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="https://xavierproject.org/wp-content/uploads/2020/10/XavierProjectAnnualReport2019.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Xavier Project Annual Report 2019</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={XPAnnualReport2018}
              alt="Xavier Project Annual Report 2018"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="https://xavierproject.org/wp-content/uploads/2020/01/AnnualReport2018_Final.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Xavier Project Annual Report 2018</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={XPAnnualReport2017}
              alt="Xavier Project Annual Report 2017"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="https://xavierproject.org/wp-content/uploads/2020/01/XPAnnualReport2017.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Xavier Project Annual Report 2017</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={XPAnnualReport2016}
              alt="Xavier Project Annual Report 2016"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="/reports"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Xavier Project Annual Report 2016</h3>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Reports;
