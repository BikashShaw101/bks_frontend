import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrapper, MotionWrapper } from "../../Wrapper";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text app_flex">
        <span> Keep Growing</span> Keep Learning
        <span> Keep Smiling </span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
      <a
        href="https://www.mediafire.com/file/xy8irjgwoicu18p/ResumeBikash.pdf/file"
        download={"ResumeBikash.pdf"}
      >
        <button className="cv">Download CV</button>
      </a>
      <div className="pchoice">
        <p className="p-text">Personal Choice</p>
        <h6 className="p-text">
          <span> Mission Vedanta and </span> Nature
        </h6>
      </div>
    </>
  );
};

export default AppWrapper(
  MotionWrapper(About, "app__about"),
  "about",
  "app__whitebg",
  "hidden"
);
