import logo from "../images/clwhite.webp";
import NavList from "./NavList";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <div className="navigation">
        <nav className="navigation__nav">
          <img className="navigation__logo" src={logo} alt="Cohere Logo" />
          <ul className="navigation__list">
            <NavList />
          </ul>
          <FaBars
            className="navigation__btn"
            onClick={() => {
              console.log("clicked");
            }}
          />
        </nav>
      </div>
    </>
  );
};

export default NavBar;
