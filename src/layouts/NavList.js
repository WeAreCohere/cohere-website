import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
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
            <Link className="navigation__itemdrop--link" to="/reports">
              Reports
            </Link>
          </li>
        </ul>
      </li>
      <li className="navigation__item">
        <a href="https://news.wearecohere.org/" className="navigation__link">
          Blogs & News
        </a>
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
