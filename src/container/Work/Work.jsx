import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";
import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "works"]{
        title,
        projectLink,
        codeLink,
        categories,
        publishedAt,
        body,
        slug,
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
        setWorks(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h2 className="head-text">
        Welcome to my <span>Development Portfolio</span> :)
      </h2>

      <div className="app__profiles">
        {works.map((work) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item "
            key={work.title}
          >
            <img src={urlFor(work.mainImage)} alt={work.title} />
            <h2
              key={work.title}
              className="bold-text"
              style={{ marginTop: 20 }}
            >
              {work.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {work.body}
            </p>
            <a
              key={work.codeLink}
              href={work.codeLink}
              target="_blank"
              rel="noreferrer"
            >
              <button>Check Out the Code!</button>
            </a>
            <a
              key={work.projectLink}
              href={work.projectLink}
              target="_blank"
              rel="noreferrer"
            >
              <button>View the Deployed Project!</button>
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
