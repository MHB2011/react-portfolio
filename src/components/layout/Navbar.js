import React from "react";
import logo from "../../img/logo.png";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav id="main-nav">
      <img src={logo} alt="My Portfolio" id="logo" />
      <ul>
        <li>
          <Link to="/" className={pathname === "/" ? "current" : "notcurrent"}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={pathname === "/about" ? "current" : "notcurrent"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/work"
            className={pathname === "/work" ? "current" : "notcurrent"}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={pathname === "/contact" ? "current" : "notcurrent"}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
