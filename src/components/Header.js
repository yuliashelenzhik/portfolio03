import React from "react";
import logo from "./images/logo.png";

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="" />
      <ul className="navbar">
        <li>Home</li>
        <li>Projects</li>
        <li>Art</li>
        <li>Contact</li>
      </ul>
    </header>
  );
};

export default Header;
