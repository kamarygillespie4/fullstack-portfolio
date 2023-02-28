import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { client, urlFor } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "abouts"]{
        title,
        description,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => {
        setAbouts(data);
      })
      .catch(console.error);
  }, []);

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

      <div className="app__profiles">
        {/* {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.mainImage)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))} */}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
