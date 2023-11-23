import React from "react";
import { motion as m } from "framer-motion";
import "./ArtModal.css";
import ArtBackdrop from "./ArtBackdrop";
import Slideshow from "../Components/Slideshow";

const ArtModal = ({ handleClose, imgs }) => {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 2000,
      },
    },
    exit: { y: "100vh", opacity: 0 },
  };
  return (
    <ArtBackdrop onClick={handleClose}>
      <m.div
        onClick={(e) => e.stopPropagation()}
        className="artModal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >

        <Slideshow imgs={imgs} css={'add'}/>
      </m.div>
    </ArtBackdrop>
  );
};

export default ArtModal;
