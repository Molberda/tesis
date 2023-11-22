import React from "react";
import { motion as m } from "framer-motion";
import "./Backdrop.css";

const Backdrop = ({ children, onClick }) => {
  return (
    <m.div
     className="backdrop"
      onClick={onClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
      {children}
    </m.div>
  );
};

export default Backdrop;
