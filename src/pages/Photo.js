import React, { useState } from "react";
import snowwhite from "./photo/kids/snowwhite.jpg";
import blueflowers from "./photo/kids/blueflowers.jpg";
import cutie from "./photo/kids/cutie.jpg";
import purple from "./photo/kids/purple.jpg";
import hat from "./photo/kids/hat.jpg";
import smile from "./photo/kids/smile.jpg";
import pink from "./photo/kids/pink.jpg";
import brown from "./photo/kids/brown.jpg";
import beige from "./photo/kids/beige.jpg";
import roll from "./photo/kids/roll.jpg";
import balls from "./photo/kids/balls.jpg";
import christmas from "./photo/kids/christmas.jpg";
import silverchristmas from "./photo/kids/silverchristmas.jpg";
import brothers from "./photo/kids/brothers.jpg";
import wood from "./photo/kids/wood.jpg";
import street from "./photo/kids/street.jpg";
import bike from "./photo/kids/bike.jpg";
import feet from "./photo/kids/feet.jpg";
import raffles from "./photo/adults/raffles.jpg";
import model from "./photo/adults/model.jpg";
import chinshine from "./photo/adults/chinshine.jpg";
import chinwind from "./photo/adults/chinwind.jpg";
import chinsmile from "./photo/adults/chinsmile.jpg";
import blackwhite from "./photo/adults/blackwhite.jpg";
import anflow from "./photo/adults/anflow.jpg";
import avatar from "./photo/adults/avatar.jpg";
import vicsun from "./photo/adults/vicsun.jpg";
import viccof from "./photo/adults/viccof.jpg";
import CloseIcon from "@mui/icons-material/Close";

const photokids = [
  {
    id: 1,
    title: "Snow White",
    img: snowwhite,
  },
  {
    id: 2,
    title: "Blue flowers",
    img: blueflowers,
  },
  {
    id: 3,
    title: "Cutie",
    img: cutie,
  },
  {
    id: 4,
    title: "Purple",
    img: purple,
  },
  {
    id: 5,
    title: "Hat",
    img: hat,
  },
  {
    id: 6,
    title: "Smile",
    img: smile,
  },
  {
    id: 7,
    title: "Pink",
    img: pink,
  },
  {
    id: 8,
    title: "Brown",
    img: brown,
  },
  {
    id: 9,
    title: "Beige",
    img: beige,
  },
  {
    id: 10,
    title: "Roll",
    img: roll,
  },
  {
    id: 11,
    title: "Balls",
    img: balls,
  },
  {
    id: 12,
    title: "Christmas",
    img: christmas,
  },
  {
    id: 13,
    title: "Silver Christmas",
    img: silverchristmas,
  },
  {
    id: 14,
    title: "Brothers",
    img: brothers,
  },
  {
    id: 15,
    title: "Wood",
    img: wood,
  },
  {
    id: 16,
    title: "Street",
    img: street,
  },
  {
    id: 17,
    title: "Bike",
    img: bike,
  },
  {
    id: 18,
    title: "Feet",
    img: feet,
  },
  {
    id: 19,
    title: "Raffles",
    img: raffles,
  },
  {
    id: 20,
    title: "Model",
    img: model,
  },
  {
    id: 21,
    title: "Chinese style sunset shine",
    img: chinshine,
  },
  {
    id: 22,
    title: "Chinese style wind",
    img: chinwind,
  },
  {
    id: 23,
    title: "Chinese style photoshoot smiling girl",
    img: chinsmile,
  },
  {
    id: 24,
    title: "Black and white portrait",
    img: blackwhite,
  },
  {
    id: 25,
    title: "Spring flowers portrait",
    img: anflow,
  },
  {
    id: 26,
    title: "Food portrait",
    img: avatar,
  },
  {
    id: 27,
    title: "Sunset smile",
    img: vicsun,
  },
  {
    id: 28,
    title: "Coffe sunset",
    img: viccof,
  },
];

const Photo = () => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <img src={tempImgSrc} alt="" />
        <CloseIcon onClick={() => setModal(false)} />
        {/* <h1>{tempImgSrc}</h1> */}
      </div>
      <h3 className="page-title art-page">Photography</h3>
      <div className="projects">
        {photokids.map((item, index) => {
          return (
            <article key={item.id} className="project-article">
              <img
                src={item.img}
                alt={item.title}
                className="photo"
                onClick={(img) => {
                  setTempImgSrc(item.img);
                  setModal(true);
                  console.log(item.img);
                }}
              />
              {/* {showModal ? (
                <div className="photo-overlay-show">
                  <img className="full-photo" src={item.img} alt={item.title} />
                </div>
              ) : null} */}
              {/* <div
                className="photo-overlay"
                showModal={showModal}
                setShowModal={setShowModal}
              >
                <img className="full-photo" src={item.img} alt={item.title} />
              </div> */}
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Photo;
