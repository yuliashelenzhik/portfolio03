import React from "react";
import ps from "./images/tools/Photoshop.png";
import lr from "./images/tools/Lightroom.png";
import ai from "./images/tools/Illustrator.png";
import xd from "./images/tools/Xd.png";
import pr from "./images/tools/Premiere.png";
import ae from "./images/tools/AfterEffects.png";
import id from "./images/tools/indesign.png";
import figma from "./images/tools/Figma-logo.svg";

const tools = [
  {
    id: 1,
    title: "Adobe Photoshop",
    img: ps,
    description: "Creating, editing and retouching images",
  },
  {
    id: 2,
    title: "Adobe Lightroom",
    img: lr,
    description: "Retouching photos",
  },
  {
    id: 3,
    title: "Adobe Illustrator",
    img: ai,
    description: "Creating and editing images and icons",
  },
  {
    id: 4,
    title: "Adobe Xd",
    img: xd,
    description: "Designing and prototyping UI",
  },
  {
    id: 5,
    title: "Adobe Premiere Pro",
    img: pr,
    description: "Video Editing",
  },
  {
    id: 6,
    title: "Adobe After Effects",
    img: ae,
    description: "Video Editing",
  },
  {
    id: 7,
    title: "Adobe InDesign",
    img: id,
    description: "Designing documents",
  },
  {
    id: 8,
    title: "Figma",
    img: figma,
    description: "Vector graphics editor and prototyping tool",
  },
];

const Tools = () => {
  return (
    <section className="shortpage tools-page">
      <h3 className="page-title">Software</h3>
      <div className="tools">
        {tools.map((item) => {
          return (
            <article key={item.id} className="tool-article">
              <img src={item.img} alt={item.title} />
              <div className="item-description">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tools;
