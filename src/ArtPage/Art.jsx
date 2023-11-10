import React from "react";
import "./Art.css";
import ArtMap from "./ArtMap";
import { ArtData } from "../Categories/Art";

const Art = () => {
  return (
    <section id="art" className="top__section">
      <div className="art__container">
        {ArtData.map((item) => (
          <ArtMap item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Art;
