import React from "react";
//import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
//import { client } from "../../client";

const About = () => {
  return (
    <>
      <p className="head-text">
        Hi, I'm Kamary Gillespie. I am a <br />
        <span>
          fullstack web developer on a mission to enhance and diversify my
          skillset.
        </span>
        <br />
        If I'm not coding, you can find me <br />
        cuddling with my dog, <br />
        going out on the boat, or <br />
        watching movies with my friends and family.
      </p>

      <div className="app__profiles"></div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
