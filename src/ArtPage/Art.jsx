import React from "react";
import "./Art.css";
import ArtMap from "./ArtMap";
import { ArtData } from "../Categories/Art";
import Slideshow from "../Components/Slideshow";
import gals from "../Categories/gal";
import { motion as m } from "framer-motion";

const Art = () => {
  return (
    <m.section
      initial={{ y: "100%" }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      exit={{ y: "100%", transition: { duration: 0.5 } }}
      id="art"
      className="top__section"
    >
      <div className="art__container">
        {ArtData.map((item) => (
          <ArtMap item={item} key={item.id} />
        ))}
        <h1 className="divider__title">Galerías</h1>
        <Slideshow imgs={gals} css={"gallery"} />
      </div>
    </m.section>
  );
};

export default Art;
