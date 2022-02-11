import React from "react";
import ps from "./images/tools/Photoshop.png";
import lr from "./images/tools/Lightroom.png";
import ai from "./images/tools/Illustrator.png";
import xd from "./images/tools/Xd.png";
import pr from "./images/tools/Premiere.png";
import ae from "./images/tools/AfterEffects.png";
import id from "./images/tools/indesign.png";
import office from "./images/tools/MsOffice.png";

const tools = [
  {
    id: 1,
    title: "Adobe Photoshop",
    img: ps,
  },
  {
    id: 2,
    title: "Adobe Lightroom",
    img: lr,
  },
  {
    id: 3,
    title: "Adobe Illustrator",
    img: ai,
  },
  {
    id: 4,
    title: "Adobe Xd",
    img: xd,
  },
  {
    id: 5,
    title: "Adobe Premiere Pro",
    img: pr,
  },
  {
    id: 6,
    title: "Adobe After Effects",
    img: ae,
  },
  {
    id: 7,
    title: "Adobe InDesign",
    img: id,
  },
  {
    id: 8,
    title: "MS Office",
    img: office,
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
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tools;
