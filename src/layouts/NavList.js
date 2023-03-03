import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  /* eslint-disable */
  return (
    <>
      <li className="navigation__item">
        <Link to="/" className="navigation__link">
          Home
        </Link>
      </li>
      <li className="navigation__item">
        <Link to="/aboutus" className="navigation__link">
          About us
        </Link>
        <ul className="navigation__itemdrop">
          <li>
            <Link className="navigation__itemdrop--link" to="/team">
              Team
            </Link>
          </li>
          <li>
            <Link className="navigation__itemdrop--link" to="/reframe">
              Reframe
            </Link>
          </li>
        </ul>
      </li>
      <li className="navigation__item">
        <a href="javascript:void(0)" className="navigation__link">
          Blogs, News & Reports
        </a>
        <ul className="navigation__itemdrop">
          <li>
            <Link to="/reports" className="navigation__itemdrop--link">
              Reports
            </Link>
          </li>
          <li>
            <a
              href="https://news.wearecohere.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="navigation__itemdrop--link"
            >
              Blogs & News
            </a>
          </li>
        </ul>
      </li>

      <li className="navigation__item">
        <Link to="/careers" className="navigation__link">
          Careers
        </Link>
      </li>
      <li className="navigation__item">
        <Link to="/getinvolved" className="navigation__link">
          Get Involved
        </Link>
      </li>
      <li className="navigation__item">
        <a
          href="https://cohere.enthuse.com/donate#!/"
          className="navigation__link"
        >
          Donate
        </a>
      </li>
    </>
  );
};

export default NavList;
