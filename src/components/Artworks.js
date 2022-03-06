import React from "react";
import { Link } from "react-router-dom";
import camera from "./images/artworks/camera.svg";
import image from "./images/artworks/image.svg";
import edit from "./images/artworks/edit.svg";

const artworks = [
  {
    id: 1,
    title: "Photo & Video",
    img: camera,
    path: "/photo",
  },
  {
    id: 2,
    title: "Digital Art",
    img: image,
    path: "/",
  },
  {
    id: 3,
    title: "Traditional Art",
    img: edit,
    path: "/traditional",
  },
];

const Artworks = () => {
  return (
    <section className="artworks-page shortpage" id="art">
      <h3 className="page-title">art skills</h3>
      <div className="artworks">
        {artworks.map((item) => {
          return (
            <article key={item.id} className="art-article">
              <Link to={item.path}>
                <img src={item.img} alt={item.title} />
                <div className="item-description">
                  <h3>{item.title}</h3>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Artworks;
