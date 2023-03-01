import React from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">
        Wanna Get in Touch? <br />
        Send Me a Message!
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:gillespiekamary@gmail.com" className="p-text">
            gillespiekamary@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (720) 415-8887" className="p-text">
            +1 (720) 415-8887
          </a>
        </div>
        {/* ------ */}
        <div className="app__footer-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="phone"
          />
          <a
            href="https://github.com/kamarygillespie4"
            className="p-text"
            target="_blank"
            rel="noreferrer"
          >
            /kamarygillespie4
          </a>
        </div>
        {/* ------ */}
        <div className="app__footer-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="phone"
          />
          <a
            href="https://www.linkedin.com/in/kamary-gillespie/"
            className="p-text"
            target="_blank"
            rel="noreferrer"
          >
            /kamary-gillespie
          </a>
        </div>
        {/* -------- */}
      </div>
      <h2 className="head-text">Check out my Resume...</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img
            src="https://www.iconpacks.net/icons/2/free-file-icon-1453-thumb.png"
            alt="email"
          />
          <a
            href="https://docs.google.com/document/d/1VpyFaRL36fi-2LhMupuO6XL9gXrgjsY52se0e1PuQ94/edit?usp=sharing"
            className="p-text"
            target="_blank"
            rel="noreferrer"
          >
            Kamary Gillespie
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
