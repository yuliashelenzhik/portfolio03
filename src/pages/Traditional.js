import React, { useState } from "react";
import avril from "./traditional/avril.jpg";
import piratebw from "./traditional/piratebw.jpg";
import mcmahon from "./traditional/mcmahon.jpg";
import farrell from "./traditional/farrell.jpg";
import deppcerem from "./traditional/deppcerem.jpg";
import rain from "./traditional/rain.jpg";
import edwardsichands from "./traditional/edwardsichands.jpg";
import depphat from "./traditional/depphat.jpg";
import mcmahonturn from "./traditional/mcmahonturn.jpg";
import deppyounglong from "./traditional/deppyounglong.jpg";
import secretwindow from "./traditional/secretwindow.jpg";
import piratecolor from "./traditional/piratecolor.jpg";
import dadongred from "./traditional/dadongred.jpg";
import dadong from "./traditional/dadong.jpg";
import CloseIcon from "@mui/icons-material/Close";

const tradArt = [
  {
    id: 1,
    title: "Julian McMahon Portrait",
    img: mcmahon,
  },
  {
    id: 2,
    title: "Pirate Jack Sparrow Portrait",
    img: piratebw,
  },
  {
    id: 3,
    title: "Collin Farrell",
    img: farrell,
  },
  {
    id: 4,
    title: "Johnny Depp Portrait",
    img: deppcerem,
  },
  {
    id: 5,
    title: "Rain Portrait",
    img: rain,
  },
  {
    id: 6,
    title: "Edward Scissorhands",
    img: edwardsichands,
  },
  {
    id: 7,
    title: "Avril Lavigne Portrait",
    img: avril,
  },
  {
    id: 8,
    title: "Johhny Depp Portrait",
    img: depphat,
  },
  {
    id: 9,
    title: "Julian McMahon Portrait",
    img: mcmahonturn,
  },
  {
    id: 10,
    title: "Johhny Depp Portrait",
    img: deppyounglong,
  },
  {
    id: 11,
    title: "Johhny Depp Portrait",
    img: secretwindow,
  },
  {
    id: 12,
    title: "Jack Sparrow Portrait",
    img: piratecolor,
  },
  {
    id: 13,
    title: "Wang Dongcheng Portrait",
    img: dadongred,
  },
  {
    id: 14,
    title: "Wang Dongcheng Portrait",
    img: dadong,
  },
];

const Traditional = () => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <img src={tempImgSrc} alt="Open" />
        <CloseIcon onClick={() => setModal(false)} />
      </div>
      <h3 className="page-title art-page">Traditional Art</h3>
      <div className="projects shortpage">
        {tradArt.map((item, index) => {
          return (
            <article key={item.id} className="project-article">
              <img
                src={item.img}
                alt={item.title}
                className="photo"
                onClick={() => {
                  setTempImgSrc(item.img);
                  setModal(true);
                }}
              />
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Traditional;
