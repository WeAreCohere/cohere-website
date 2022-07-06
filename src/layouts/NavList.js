import React from "react";

const NavList = () => {
  return (
    <>
      <li className="navigation__item">
        <a href="/" className="navigation__link">
          Home
        </a>
      </li>
      <li className="navigation__item">
        <a href="/" className="navigation__link">
          About us
        </a>
      </li>
      <li className="navigation__item">
        <a href="/" className="navigation__link">
          Blogs & News
        </a>
      </li>
      <li className="navigation__item">
        <a href="/" className="navigation__link">
          Get Involved
        </a>
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
