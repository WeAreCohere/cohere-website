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
      </li>
      <li className="navigation__item">
        <a href="/" className="navigation__link">
          Blogs & News
        </a>
      </li>
      <li className="navigation__item">
        <Link to="/getinvolved" className="navigation__link">
          Get Involved
        </Link>
      </li>
      <li className="navigation__item">
        <a href="/" className="navigation__link">
          Donate
        </a>
      </li>
    </>
  );
};

export default NavList;
