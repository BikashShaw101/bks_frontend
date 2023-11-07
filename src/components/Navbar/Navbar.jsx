import React, { useState } from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
// import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <span>BKS</span>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "contact", "work", "skills", "contact"].map(
          (item, index) => (
            <li key={index} className="app__flex p-text">
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            {["home", "about", "contact", "work", "skills", "contact"].map(
              (item, index) => (
                <li key={index} className="app__flex p-text">
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              )
            )}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
