import React from "react";
import "./Moda.css";
import acc from "../Assets/Moda/Genericas/Acc.jpeg";
import apa from "../Assets/Moda/Genericas/Apa.jpeg";
import hom from "../Assets/Moda/Genericas/Hom.jpeg";
import joy from "../Assets/Moda/Genericas/Joy.jpeg";
import dep from "../Assets/Moda/Genericas/Dep.jpeg";
import rdp from "../Assets/Moda/Genericas/Rdp.jpeg";
import { useNavigate } from "react-router-dom";
import { MultiData } from "../Categories/Multi";
import Slideshow from "../Components/Slideshow";
import { motion as m } from "framer-motion";

const Moda = () => {
  const navTo = useNavigate();

  return (
    <m.section
      initial={{ x: "100%" }}
      animate={{ x: 0, transition: { duration: 1 } }}
      exit={{ x: "-100%", transition: { duration: 0.5, ease: "easeIn" } }}
      id="moda"
      className="top__section"
    >
      <div className="moda__container container">
        <figure className="moda__img" onClick={() => navTo("/moda/accesorios")}>
          <img src={acc} alt="" />
          <div className="moda__hover">
            <h1>Accesorios</h1>
          </div>
        </figure>
        <figure className="moda__img" onClick={() => navTo("/moda/apparel")}>
          <img src={apa} alt="" />
          <div className="moda__hover">
            <h1>Apparel</h1>
          </div>
        </figure>
        <figure className="moda__img" onClick={() => navTo("/moda/hombres")}>
          <img src={hom} alt="" />
          <div className="moda__hover">
            <h1>Hombres</h1>
          </div>
        </figure>
        <figure className="moda__img" onClick={() => navTo("/moda/joyeria")}>
          <img src={joy} alt="" />
          <div className="moda__hover">
            <h1>Joyeria</h1>
          </div>
        </figure>
        <figure className="moda__img" onClick={() => navTo("/moda/deportivo")}>
          <img src={dep} alt="" />
          <div className="moda__hover">
            <h1>Deportivo</h1>
          </div>
        </figure>
        <figure
          className="moda__img"
          onClick={() => navTo("/moda/ropadeplaya")}
        >
          <img src={rdp} alt="" />
          <div className="moda__hover">
            <h1>Ropa de Playa</h1>
          </div>
        </figure>
      </div>
      <h1 className="divider__title">MULTIMARCAS</h1>
      <Slideshow imgs={MultiData} css={"multi"} />
    </m.section>
  );
};

export default Moda;
