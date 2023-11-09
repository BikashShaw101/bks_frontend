import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrapper } from "../../Wrapper";
import "./Header.scss";
import { client, urlFor } from "../../client";

const Header = () => {
  const [image, setImage] = useState([]);
  const [subjectBrand, setSubjectBrand] = useState([]);

  useEffect(() => {
    const query = '*[_type == "subject"]';
    const subjectbrand = '*[_type == "subjectbrand"]';

    client.fetch(query).then((data) => {
      setImage(data);
    });
    client.fetch(subjectbrand).then((data) => {
      setSubjectBrand(data);
    });
  }, []);

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 25 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Bikash</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web developer</p>
            <p className="p-text">Backend developer</p>
            <p className="p-text">UI/UX</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {image.map((img, index) => (
          <img src={urlFor(img.imgUrl)} alt="profile_img" key={index} />
        ))}
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {subjectBrand.map((image, index) => (
          <div className="circle_cmp app__flex " key={index}>
            <img src={urlFor(image.imgUrl)} alt={image.name} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapper(Header, "home");
