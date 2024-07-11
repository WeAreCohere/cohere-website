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
  AAPImage,
  refugeeParticipationReportImg,
  refugeeParticipationReportExecSumImg,
  ProcurementUganda,
  fiveOrganisationalPathwaysImgTwo,
} from "../images/reports";

import {
  CHStrategicPlan22_26,
  AAP,
  RefugeeParticipationReport,
  RefugeeParticipationReportExecSummary,
  ThreePathways,
} from "../docs";

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
              src={fiveOrganisationalPathwaysImgTwo}
              alt="Five Organisational Pathways For Enabling Meaningful Refugee Participation
"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="/organisational-pathways"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>
                Five Organisational Pathways For Enabling Meaningful Refugee
                Participation
              </h3>
            </div>
          </figure>

          <figure className="matrix__item">
            <LazyLoadImage
              src={ProcurementUganda}
              alt="Three Pathways Internal Equity Learning Journey"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href={ThreePathways}
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Three Pathways Internal Equity Learning Journey</h3>
            </div>
          </figure>

          <figure className="matrix__item">
            <LazyLoadImage
              src={refugeeParticipationReportExecSumImg}
              alt="Refugee Participation Report"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href={RefugeeParticipationReportExecSummary}
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Refugee Participation Report Executive Summary</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={refugeeParticipationReportImg}
              alt="Refugee Participation Report"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href={RefugeeParticipationReport}
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Refugee Participation Report</h3>
            </div>
          </figure>
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
                href={CHStrategicPlan22_26}
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
              <h3>Capacity Strengthening and Sharing Course 2021</h3>
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

          <figure className="matrix__item">
            <LazyLoadImage
              src={AAPImage}
              alt="Accountability To Affected Persons (AAP) Frameworks"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href={AAP}
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Accountability To Affected Persons (AAP) Frameworks</h3>
            </div>
          </figure>
          {/* <figure className="matrix__item">
            <LazyLoadImage
              src={placeHolder}
              alt="Placeholder Test"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Placeholder Test</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={placeHolder}
              alt="Placeholder Test"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Placeholder Test</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={placeHolder}
              alt="Placeholder Test"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Placeholder Test</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={placeHolder}
              alt="Placeholder Test"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Placeholder Test</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={placeHolder}
              alt="Placeholder Test"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Placeholder Test</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={placeHolder}
              alt="Placeholder Test"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Placeholder Test</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={placeHolder}
              alt="Placeholder Test"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Placeholder Test</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={placeHolder}
              alt="Placeholder Test"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Placeholder Test</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={placeHolder}
              alt="Placeholder Test"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Placeholder Test</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={placeHolder}
              alt="Placeholder Test"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Placeholder Test</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={placeHolder}
              alt="Placeholder Test"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Placeholder Test</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={placeHolder}
              alt="Placeholder Test"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Placeholder Test</h3>
            </div>
          </figure>
          <figure className="matrix__item">
            <LazyLoadImage
              src={placeHolder}
              alt="Placeholder Test"
              effect="blur"
              height="100%"
              width="100%"
              className="matrix__img"
              placeholderSrc={placeHolder}
            />

            <div className="matrix__description">
              <a
                className="btn btn--red"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
              <h3>Placeholder Test</h3>
            </div>
          </figure> */}
        </div>
      </section>
    </>
  );
};

export default Reports;
