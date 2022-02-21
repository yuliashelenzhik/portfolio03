import React from "react";
import Artworks from "../components/Artworks";
import Contact from "../components/Contact";
import Credits from "../components/Credits";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Tools from "../components/Tools";

const Main = () => {
  return (
    <>
      <Home />
      <Projects />
      <Skills />
      <Artworks />
      <Tools />
      <Contact />
      <Credits />
    </>
  );
};

export default Main;
