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
    title: "HTML",
    img: html,
    description: "HyperText Markup Language",
  },
  {
    id: 2,
    title: "CSS",
    img: css,
    description: "Cascading Style Sheets",
  },
  {
    id: 3,
    title: "Javascript",
    img: js,
    description: "Programming language",
  },
  {
    id: 4,
    title: "GIT",
    img: git,
    description: "Version Control System",
  },
  {
    id: 5,
    title: "Bootstrap",
    img: bootstrap,
    description: "HTML, CSS, and JS library",
  },
  {
    id: 6,
    title: "jQuery",
    img: jquery,
    description: "JavaScript library",
  },
  {
    id: 7,
    title: "React",
    img: react,
    description: "JavaScript library for building user interfaces",
  },
  {
    id: 8,
    title: "Gatsby",
    img: gatsby,
    description: "React-based framework",
  },
];

const Skills = () => {
  // const [isToggled, setIsToggled] = useState(false);
  return (
    <section className="shortpage skills-page" id="skills">
      <h3 className="page-title">programming Skills</h3>
      <div className="skills">
        {skills.map((item) => {
          return (
            <article key={item.id} className="skill-article">
              <img
                className="skill-img"
                src={item.img}
                alt={item.title}
                // onClick={() => setIsToggled(!isToggled)}
              />
              <div className="item-description">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {/* {isToggled && <p class="skill-description">{item.description}</p>} */}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
