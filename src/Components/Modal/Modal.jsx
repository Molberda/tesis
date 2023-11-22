import React from "react";
import Backdrop from "./Backdrop";
import { motion as m } from "framer-motion";
import "./Modal.css";
import { Button } from "@mui/material";
import table from "./benefits.png";

const Modal = ({ handleClose, text }) => {
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
    <Backdrop onClick={handleClose}>
      <m.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Button>
          <h1>¡Suscribete!</h1>
        </Button>
        <figure className="modal__table">
          <img src={table} alt="" />
        </figure>
        <h2>
          Suscríbete y mantente informado sobre los mejores eventos de Bogotá,
          recibe contenido exclusivo que de otra manera no podrán obtener.
        </h2>
        <p>
          La membresía PRO incluye 8 días de prueba GRATIS para nuevos clientes.{" "}
        </p>
        <Button onClick={handleClose}>Cerrar</Button>
      </m.div>
    </Backdrop>
  );
};

export default Modal;
