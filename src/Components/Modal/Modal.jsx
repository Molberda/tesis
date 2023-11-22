import React from "react";
import Backdrop from "./Backdrop";
import { motion as m } from "framer-motion";
import "./Modal.css";
import { Button } from "@mui/material";

const Modal = ({ handleClose, text }) => {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.1, type: "spring", damping: 25, stiffness: 2000 },
    },
    exit: { y: "100vh", opacity: 0 },
  };
  return (
    <Backdrop onClick={handleClose}>
      <m.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      ><Button onClick={handleClose}>close</Button></m.div>
    </Backdrop>
  );
};

export default Modal;
