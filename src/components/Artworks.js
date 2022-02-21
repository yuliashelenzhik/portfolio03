import React from "react";
import { Link } from "react-router-dom";
import camera from "./images/artworks/camera.svg";
import image from "./images/artworks/image.svg";
import edit from "./images/artworks/edit.svg";
// import Photo from "../pages/Photo";
// import Digital from "../pages/Digital";
// import Traditional from "../pages/Traditional";

const artworks = [
  {
    id: 1,
    title: "Photo & Video",
    img: camera,
    path: "/photo",
    // element: <Photo />,
  },
  {
    id: 2,
    title: "Digital Art",
    img: image,
    path: "/digital",
    // element: <Digital />,
  },
  {
    id: 3,
    title: "Traditional Art",
    img: edit,
    path: "/traditional",
    // element: <Traditional />,
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
              <Link to={item.path}>
                <img src={item.img} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Artworks;
