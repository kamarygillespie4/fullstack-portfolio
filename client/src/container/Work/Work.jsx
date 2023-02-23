import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client, urlFor } from "../../client";
import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "works"]{
        title,
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
        setFilterWork(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {works.map((work) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={work.title}
          >
            <img src={urlFor(work.mainImage)} alt={work.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {work.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {work.description}
            </p>
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

// <h2 className="head-text">
//   My Creative <span>Portfolio</span> Section
// </h2>
// <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
//   <h1 className="font-bold text-4xl mt-5 mb-10 tracking-widest text-center md:text-6xl lg:text-7xl">
//     Blog
//   </h1>

//   <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
//     {works.map((work) => (
//       <article key={work.slug.current}>
//         <img src={work.mainImage.asset.url} alt={work.title} />
//         <h4 className="text-xl mt-2">{work.title}</h4>

//         {/* <button className="mt-5 mb-10">
//           <Link
//             to={`/blog/${work.slug.current}`}
//             className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
//           >
//             Read Full Article
//           </Link>
//         </button> */}
//       </article>
//     ))}
//   </div>
// </section>
