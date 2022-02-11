import React from "react";
import camera from "./images/artworks/camera.svg";
import image from "./images/artworks/image.svg";
import edit from "./images/artworks/edit.svg";

const artworks = [
  {
    id: 1,
    title: "Photo & Video",
    img: camera,
  },
  {
    id: 2,
    title: "Graphic Design",
    img: image,
  },
  {
    id: 3,
    title: "Traditional Art",
    img: edit,
  },
];

const Artworks = () => {
  return (
    <section className="artworks-page shortpage" id="art">
      <h3 className="page-title">art skills</h3>
      <div className="artworks">
        {artworks.map((item) => {
          return (
            <article key={item.id}>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Artworks;
