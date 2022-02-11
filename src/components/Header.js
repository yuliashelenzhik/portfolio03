import React from "react";
import logo from "./images/logo.png";

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="Logo" />
      <ul className="navbar">
        <a href="/#projects">
          <li>Projects</li>
        </a>
        <a href="/#skills">
          <li>Skills</li>
        </a>
        <a href="/#art">
          <li>Art</li>
        </a>
        <a href="/#contact">
          <li>Contact</li>
        </a>
      </ul>
    </header>
  );
};

export default Header;
