import React from "react";

const Reframe = () => {
  return (
    <>
      <section className="section-reframe-page">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Reframe</span>
        </h1>

        <p className="paragraph">
          Reframe showcases the work of refugee-led organisations, and through
          connection, collaboration and communications gives them the tools they
          need to transform their communities.
        </p>
        <p className="paragraph">
          Reframe aims to be a solution to multiple challenges refugee-led
          organisations (RLOs) worldwide are facing. Through Reframe we want to
          increase direct funding, raise awareness, build networks and
          strengthen coordination between RLOs, INGOs, donors and institutional
          bodies.
        </p>

        <a
          href="https://reframe.network/create-account.php"
          target="_blank"
          rel="noreferrer"
          className="btn btn--white"
        >
          Register your organisation
        </a>

        <p className="paragraph u-mt-small">Through the platform we want to:</p>

        <ul className="reframe__link">
          <li>
            Raise the profile of refugee-led organisations and promote their
            work.
          </li>
          <li>
            Provide opportunities for donors to map, connect and donate directly
            to refugee-led organisations.
          </li>
          <li>
            To pool funds for refugee-led organisations working on specific
            projects and thematic areas, e.g. education, climate resilience.{" "}
          </li>
          <li>
            To build and strengthen networks between refugee leaders and
            organisations.
          </li>
          <li>
            To share new opportunities and resources between organisations and
            donors.
          </li>
          <li>To improve collaboration in coordination and advocacy.</li>
        </ul>
      </section>

      <section className="section-pooledfunds">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Pooled Funds</span>
        </h1>

        <p className="paragraph">
          Our pooled-funds enable us to direct funding to RLOs who are on the
          frontline of emergencies and responding to the collective needs of
          refugee communities worldwide. By getting money directly to them they
          can decide the best response to support their communities, this is
          especially important during emergencies. Refugee-led response is not
          only more efficient, it is more effective and sustainable. In
          humanitarian response only 1% of funding reaches the frontline. We
          want to change this.
        </p>

        <a
          href="https://reframe.network/discover"
          target="_blank"
          rel="noreferrer"
          className="btn btn--white"
        >
          Find out more
        </a>
      </section>
    </>
  );
};

export default Reframe;
