import React, { useState } from "react";
import avatar from "./images/open.png";
import avatar2 from "./images/blink2.png";
import arrow from "./images/chevron-down.svg";

const Home = () => {
  const [isHovering, setIsHovering] = useState(false);
  function handleMouseEnter(e) {
    setIsHovering(true);
    // console.log(e);
  }
  function handleMouseLeave() {
    setIsHovering(false);
  }
  return (
    <section className="fullpage homepage">
      <div className="side left">
        <h1>
          <span className="first-y">Y</span>ulia{" "}
          <span className="second-y">Y</span>uste
        </h1>
        <h3>Frontend developer</h3>
        <h3>UX Designer</h3>
        <br />
        <br />
        <p>
          "The only way to achieve the impossible is to believe it is possible.”
          – Charles Kingsleigh
        </p>
      </div>
      <div className="side right">
        <img className="avatar" src={avatar} alt="" />
        <img
          className={isHovering ? "avatar2show" : "avatar2"}
          // className="avatar2show"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src={avatar2}
          alt=""
        />
      </div>
      <img className="arrow" src={arrow} alt="" />
    </section>
  );
};

export default Home;
