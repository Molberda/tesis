import React from "react";
import "./ArtFocus.css";
import { useParams } from "react-router-dom";
import { ArtData } from "../Categories/Art";
import Polaroid from "../Components/Polaroid";

const ArtFocus = () => {
  const { id } = useParams();
  const project = ArtData.find((i) => i.id === +id);

  return (
    <section id="artFocus" className="top__section">
      <div className="artFocus__container top__container container">
        <div className="artFocus__row row">
          <h1>{project.name}</h1>
          <div className="artFocus__gallery">
            <div className="artFocus__gallery--portraits">
              <Polaroid artist={project.artist1} artistImg={project.artist1Img} />
            </div>
            <figure className="artFocus__gallery--main">
              <img src={project.mainImg} alt="" />
            </figure>
          </div>
          <p>{project.description1}</p>
          <p>{project.description2}</p>
        </div>
      </div>
    </section>
  );
};

export default ArtFocus;
