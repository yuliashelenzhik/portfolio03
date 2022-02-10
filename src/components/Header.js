import React from "react";
import logo from "./images/logo.png";

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="" />
      <ul className="navbar">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/#projects">
          <li>Projects</li>
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
