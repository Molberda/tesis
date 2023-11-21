import React from "react";
import "./Art.css";
import ArtMap from "./ArtMap";
import { ArtData } from "../Categories/Art";
import Slideshow from "../Components/Slideshow";
import gals from "../Categories/gal";

const Art = () => {
  return (
    <section id="art" className="top__section">
      <div className="art__container">
        {ArtData.map((item) => (
          <ArtMap item={item} key={item.id} />
        ))}
        <h1 className="divider__title">Galerías</h1>
        <Slideshow imgs={gals} css={'gallery'} />
      </div>
    </section>
  );
};

export default Art;
