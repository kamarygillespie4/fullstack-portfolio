import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
//import { Tooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [certifications, setCertifications] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certifications"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setCertifications(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Certifications</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.mainImage)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {certifications.map((certification) => (
            <motion.div
              className="app__skills-exp-item"
              key={certification.date}
            >
              <div className="app__skills-exp-year">
                <h2 className="bold-tex one">{certification.title}</h2>
                <h3 className="bold-text two">{certification.source}</h3>
                <h4 className="bold-text">{certification.date}</h4>
                <section>
                  <p className="bold-text">{certification.description}</p>
                </section>
              </div>
              {/* <motion.div className="app__skills-exp-works">
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    key={certification.name}
                  >
                    <h4 className="bold-text">{certification.title}</h4>
                    <p className="p-text">{certification.datetime}</p>
                  </motion.div>
                </>
              </motion.div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
