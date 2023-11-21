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
      initial={{ x: "100%" }}
      animate={{ x: 0, transition: { duration: 1, delay: .5 } }}
      exit={{ x: "100%", transition: { duration: .5 } }}
      id="art"
      className="top__section"
    >
      <div className="art__container">
        {ArtData.map((item) => (
          <ArtMap item={item} key={item.id} />
        ))}
      </div>
        <h1 className="divider__title">Galerías</h1>
        <Slideshow imgs={gals} css={"gallery"} />
    </m.section>
  );
};

export default Art;
