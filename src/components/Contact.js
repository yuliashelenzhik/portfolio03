import React from "react";
import github from "./images/social/github.svg";
import codepen from "./images/social/codepen.svg";
import behance from "./images/social/Behance.svg";
import insta from "./images/social/insta.svg";
import linkedin from "./images/social/linkedin.svg";
import email from "./images/social/envelope-alt.svg";
import phone from "./images/social/phone.svg";

const social = [
  {
    id: 1,
    title: "Github",
    img: github,
    link: "https://github.com/yuliashelenzhik",
  },
  {
    id: 2,
    title: "Codepen",
    img: codepen,
    link: "https://codepen.io/yushel",
  },
  {
    id: 3,
    title: "Behance",
    img: behance,
    link: "https://www.behance.net/yuliayuste",
  },
  {
    id: 4,
    title: "Instagram",
    img: insta,
    link: "https://www.instagram.com/yulia_yuste_photography/?utm_medium=copy_link",
  },
  {
    id: 5,
    title: "LinkedIn",
    img: linkedin,
    link: "https://www.linkedin.com/in/yulia-yuste/",
  },
];

const Contact = () => {
  return (
    <section className="shortpage contact-page" id="contact">
      <h3 className="page-title">Contact</h3>
      <div className="contact-line">
        <img className="contact-icons" src={email} alt="" />
        <p>yulia_yuste@hotmail.com</p>
      </div>
      <div className="contact-line">
        <img className="contact-icons" src={phone} alt="" />
        <div className="phones">
          <p>China +86 15600606357</p>
          <p>Spain +34 644768671</p>
        </div>
      </div>
      <div className="social">
        {social.map((item) => {
          return (
            <article key={item.id} className="social-article">
              <a href={item.link} target="_blank" rel="noreferrer noopener">
                <img src={item.img} alt={item.title} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
