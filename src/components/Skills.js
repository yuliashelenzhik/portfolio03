import React from "react";
import html from "./images/skills/html.png";
import css from "./images/skills/css.png";
import js from "./images/skills/js.png";
import git from "./images/skills/git.png";
import bootstrap from "./images/skills/bootstrap.png";
import jquery from "./images/skills/jquery.png";
import react from "./images/skills/react.png";
import gatsby from "./images/skills/gatsby.png";

const skills = [
  {
    id: 1,
    title: "html",
    img: html,
  },
  {
    id: 2,
    title: "css",
    img: css,
  },
  {
    id: 3,
    title: "js",
    img: js,
  },
  {
    id: 4,
    title: "git",
    img: git,
  },
  {
    id: 5,
    title: "bootstrap",
    img: bootstrap,
  },
  {
    id: 6,
    title: "jquery",
    img: jquery,
  },
  {
    id: 7,
    title: "react",
    img: react,
  },
  {
    id: 8,
    title: "gatsby",
    img: gatsby,
  },
];

const Skills = () => {
  return (
    <section className="shortpage skills-page">
      <h3 className="page-title">programming Skills</h3>
      <div className="skills">
        {skills.map((item) => {
          return (
            <article className="skill-article">
              <img key={item.id} src={item.img} alt={item.title} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
