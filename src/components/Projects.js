import React from "react";
import tekta from "./images/projects/tekta.png";
import water from "./images/projects/water.png";
import color from "./images/projects/color.png";
import english from "./images/projects/english.png";
import chinese from "./images/projects/chinese.png";
import colors from "./images/projects/colors.png";
import christmas from "./images/projects/christmas.png";
import calculator from "./images/projects/calc.png";
import dragdrop from "./images/projects/dragdrop.png";

const projects = [
  {
    id: 1,
    title: "TEKTA Arquitects",
    link: "https://www.tekta.es",
    stack: "JS, React, Gatsby, Bootstrap",
    img: tekta,
  },
  {
    id: 2,
    title: "Christmas Chinese vocabulary",
    link: "https://christmas-learn-chinese.netlify.app/",
    stack: "HTML, CSS, JS",
    img: christmas,
  },
  {
    id: 3,
    title: "Water glasses counter",
    link: "https://codepen.io/yushel/full/QWgpypg",
    stack: "HTML, CSS, JS, Bootstrap",
    img: water,
  },
  {
    id: 4,
    title: "Neomorphic Calculator",
    link: "https://codepen.io/yushel/full/wvPBvGw",
    stack: "HTML, CSS, JS",
    img: calculator,
  },
  {
    id: 5,
    title: "Drag & Drop",
    link: "https://codepen.io/yushel/full/xxPZRYv",
    stack: "HTML, CSS, JS",
    img: dragdrop,
  },
  {
    id: 6,
    title: "Outfit color picker",
    link: "https://codepen.io/yushel/full/PojpgxG",
    stack: "HTML, CSS, JS",
    img: color,
  },
  {
    id: 7,
    title: "English Vocabulary",
    link: "https://codepen.io/yushel/full/oNwoLdj",
    stack: "HTML, CSS, JS, Bootstrap",
    img: english,
  },
  {
    id: 8,
    title: "Learn Chinese Idioms",
    link: "https://codepen.io/yushel/full/QWgMPGe",
    stack: "HTML, CSS, JS, Bootstrap",
    img: chinese,
  },
  {
    id: 9,
    title: "Guess Colors in Chinese",
    link: "https://codepen.io/yushel/full/NWgJZdW",
    stack: "HTML, CSS, JS, Bootstrap",
    img: colors,
  },
];

const Projects = () => {
  return (
    <section className="shortpage projects-page">
      <h3 className="page-title">Projects</h3>
      <div className="projects">
        {projects.map((item) => {
          return (
            <article className="project-article">
              <a href={item.link} target="_blank" rel="noreferrer noopener">
                <img key={item.id} src={item.img} alt={item.title} />
              </a>
              <h4>{item.title}</h4>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
