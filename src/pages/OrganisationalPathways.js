import React from "react";
// IMAGES
import {
  generalVis,
  organisationalPathways,
} from "../images/organisationalPathways";
// DOCUMENTS
import { organisationalPathwaysDoc } from "../docs";
import useProgressiveImage from "../hooks/ProgressiveImage";

const OrganisationalPathways = () => {
  return (
    <>
      <main>
        <section className="section-introduction">
          <h2
            className="heading-primary u-text-center"
            style={{ paddingTop: "3rem" }}
          >
            Introducing Our New Report...
          </h2>

          <div
            className="divider-formating"
            style={{ height: "50rem", margin: "auto" }}
          >
            <img src={useProgressiveImage(organisationalPathways)} alt="" />
          </div>

          <h2 className="heading-primary u-text-center">
            Five Organisational Pathways for Enabling Meaningful Refugee
            Participation
          </h2>

          <a
            href={organisationalPathwaysDoc}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", margin: "2rem auto" }}
          >
            <div
              className="btn btn--white"
              style={{
                margin: "0 auto",
                backgroundColor: "#ff9343",
                borderColor: "#ff9343",
              }}
            >
              Download{" "}
            </div>
          </a>

          <div className="divider-formating">
            <p className="paragraph u-text-center">
              Cohere is thrilled to present our latest commissioned report, Five
              Organisational Pathways for Enabling Meaningful Refugee
              Participation: A Step-by-Step Implementation Guide. This
              comprehensive document, authored by independent consultants Diana
              Essex-Lettieri and Julia Zahreddine and funded by the Ikea
              Foundation, has been expertly edited by Asylum Access’s Director
              of Partnerships, Deepa Nambiar.
            </p>
          </div>
        </section>

        <section className="section-commitment">
          <div className="divider-formating">
            <p className="paragraph u-text-center">
              As an organisation committed to uplifting Refugee-Led
              Organisations (RLOs), Cohere is deeply invested in promoting
              Meaningful Refugee Participation (MRP) for both ethical and impact
              reasons. Cohere believes it is morally imperative that people of
              forced displacement have the autonomy to make critical decisions
              about their lives, aligning with the principle of
              self-determination. Additionally, Cohere recognises that when
              people of forced displacement lead the responses that impact their
              lives, the resulting work is stronger, more legitimate, and
              accountable to communities, leading to greater overall impact.
            </p>

            <div style={{ height: "50rem", width: "50rem", margin: "0 auto" }}>
              <img src={useProgressiveImage(generalVis)} alt="" />
            </div>
          </div>
        </section>

        <section className="section-knowledge-gap">
          <div className="divider-formating">
            <p className="paragraph u-text-center">
              In 2022 when Cohere first conceptualised this initiative, it
              realised that its convictions about MRP are shared across its
              network of partners. However, through its own organisational
              challenges and conversations with partners, it has become clear
              that the concrete steps needed to implement MRP practically within
              organisations (as opposed to externally) are often unclear,
              confusing, or appear too difficult to meaningfully pursue.
            </p>
            <p className="paragraph u-text-center">
              With a goal of closing the knowledge gap, Cohere collaborated with
              consultants and experts (many of whom have firsthand experience of
              forced displacement) to develop a five-part virtual Interactive
              Workshop Series (IWS) titled "Building Organisational Pathways
              towards Meaningful Participation and Refugee Leadership.” This
              series, which ran between October 2023 and April 2024, is
              available on{" "}
              <a
                href="https://www.youtube.com/playlist?list=PLDt4iEW6JxoLqcZEcvaaIZJ070g0yq4hf"
                style={{ textDecoration: "none", color: "#72ccca" }}
              >
                Cohere’s YouTube channel
              </a>
              . Through this series, experts explain and detail the mindsets,
              behaviours, and actions necessary to overcome internal barriers to
              MRP.{" "}
            </p>
            <p className="paragraph u-text-center">
              Our new paper is a companion to each of the five IWS sessions. The
              topics focused on are:
            </p>
          </div>
        </section>

        <section className="section-companion-guide">
          <div className="divider-formating">
            <ul
              style={{
                textAlign: "justify",
                paddingLeft: "3rem",
                color: "#72ccca",
              }}
            >
              <li>Equity Learning Journeys (ELJs)</li>
              <li>
                Recruiting, Hiring and Onboarding People of Forced Displacement
              </li>
              <li>Equitable Partnerships with Refugee-led Organisations</li>
              <li>
                High-Quality and Equitable Funding for Refugee-led Organisations
              </li>
              <li>Localised Refugee-led Advocacy.</li>
            </ul>
          </div>
        </section>

        <section className="section-who-should-read">
          <div className="divider-formating">
            <p className="paragraph u-text-center">
              This paper is primarily intended for international organisations,
              referring to institutions headquartered or based in one country
              that aim to support people of forced displacement residing in
              other countries. While international organisations and donors are
              the primary audience, local civil society organisations and RLOs
              may also find relevant insights.
            </p>

            <a
              href={organisationalPathwaysDoc}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                className="btn btn--white"
                style={{
                  margin: "0 auto",
                  backgroundColor: "#ff9343",
                  borderColor: "#ff9343",
                }}
              >
                Download{" "}
              </div>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrganisationalPathways;
