import React from "react";
import "./ArtFocus.css";
import { useParams } from "react-router-dom";
import { ArtData } from "../Categories/Art";
import Polaroid from "../Components/Polaroid";
import { Button } from "@mui/material";
import {
  ImageOutlined,
  ListAltOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";

const ArtFocus = () => {
  const { id } = useParams();
  const project = ArtData.find((i) => i.id === +id);

  return (
    <section id="artFocus" className="top__section">
      <div className="artFocus__container top__container container">
        <div className="artFocus__row row">
          <div className="artFocus__header">
            <h1>{project.name}</h1>
            <div className="artFocus__btns">
              <Button>Reseñas</Button>
              <Button>Faq</Button>
              <Button endIcon={<StarBorderOutlined />}>Puntuar</Button>
              <Button endIcon={<StarBorderOutlined />}>Puntuacion</Button>
            </div>
          </div>
          <div className="artFocus__gallery">
            <div className="artFocus__gallery--portraits">
              <Polaroid
                className="artFocus__gallery--polaroid"
                artist={project.artist1}
                artistImg={project.artist1Img}
              />
            </div>
            <figure className="artFocus__gallery--main">
              <img src={project.mainImg} alt="" />
            </figure>
            <div className="artFocus__gallery--btns">
              <Button endIcon={<ImageOutlined />}>
                <h1>Imagenes</h1>
              </Button>
              <Button>
                <h1>Adicional</h1>
              </Button>
            </div>
          </div>
          <div className="artFocus__text">
            <h2>{project.subtitle}</h2>
            <p>{project.description1}</p>
            <p>{project.description2}</p>
            <Button endIcon={<ListAltOutlined />}>Agregar a Mi Lista</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtFocus;
