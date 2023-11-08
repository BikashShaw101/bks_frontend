import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = (Component, classNames) =>
  function HOC() {
    // it just returning higher order component or HOC
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrapper;
