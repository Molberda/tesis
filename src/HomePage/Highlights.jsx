import React from "react";
import "./Highlights.css";
import { HighlightData } from "../Categories/HighlightsData";
import HighlightMap from "./HighlightMap";

const Highlights = () => {
  return (
    <section id="highlights">
        <h1 className="divider__title">Eventos Destacados en Diciembre</h1>
      <div className="highlights__organizer">
        {HighlightData.map((item) => (
          <HighlightMap item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Highlights;
