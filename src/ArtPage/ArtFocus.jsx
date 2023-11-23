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
import { motion as m } from "framer-motion";
import { artistsData } from "../Categories/Artists";

const ArtFocus = ({ artModalOpen, setArtModalOpen }) => {
  const dev = () => alert("esta funcion todavia esta en desarrollo");

  const { id } = useParams();
  const project = ArtData.find((i) => i.id === +id);

  const artists = artistsData.find((i) => i.id === +id);
  const artF = artists.artists;

  const openArt = () => {
    document.body.classList += " modalOpen";
    setArtModalOpen(true);
    console.log("workign");
  };

  const closeArt = () => {
    document.body.classList.remove("modalOpen");
    setArtModalOpen(false);
  };

  return (
    <m.section
      initial={{ scale: 0 }}
      animate={{ scale: 1, transition: { duration: 1, delay: 0.3 } }}
      exit={{ scale: 0, transition: { duration: 0.25 } }}
      id="artFocus"
      className="top__section"
    >
      <div className="artFocus__container top__container container">
        <div className="artFocus__row row">
          <div className="artFocus__header">
            <h1>{project.name}</h1>
            <div className="artFocus__btns">
              <Button onClick={dev}>Reseñas</Button>
              <Button onClick={dev}>Faq</Button>
              <Button onClick={dev} endIcon={<StarBorderOutlined />}>Puntuar</Button>
              <Button onClick={dev} endIcon={<StarBorderOutlined />}>Puntuacion</Button>
            </div>
          </div>
          {artF.length > 1 ? (
            <div className="artFocus__gallery alter">
              <div className="gallery__divider">
                <figure className="artFocus__gallery--main">
                  <img src={project.mainImg} alt="" />
                </figure>
                <div className="artFocus__gallery--btns">
                  <Button onClick={() => (artModalOpen ? closeArt() : openArt())} endIcon={<ImageOutlined />}>
                    <h1>Imagenes</h1>
                  </Button>
                  <Button onClick={dev}>
                    <h1>Adicional</h1>
                  </Button>
                </div>
              </div>{" "}
              <div className="artFocus__text">
                <h2>{project.subtitle}</h2>
                <p>{project.description1}</p>
                <p>{project.description2}</p>
                <Button onClick={dev} endIcon={<ListAltOutlined />}>
                  Agregar a Mi Lista
                </Button>
              </div>
              <div className="artFocus__gallery--portraits">
                {artF.map((i) => (
                  <Polaroid
                    className="artFocus__alter--polaroid"
                    artist={i.name}
                    artistImg={i.img}
                  />
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="artFocus__gallery">
                <div className="artFocus__gallery--portraits">
                  <Polaroid
                    className="artFocus__gallery--polaroid"
                    artist={artF[0].name}
                    artistImg={artF[0].img}
                  />
                </div>
                <figure className="artFocus__gallery--main">
                  <img src={project.mainImg} alt="" />
                </figure>
                <div className="artFocus__gallery--btns">
                  <Button onClick={() => (artModalOpen ? closeArt() : openArt())} endIcon={<ImageOutlined />}>
                    <h1>Imagenes</h1>
                  </Button>
                  <Button onClick={dev}>
                    <h1>Adicional</h1>
                  </Button>
                </div>
              </div>
              <div className="artFocus__text">
                <h2>{project.subtitle}</h2>
                <p>{project.description1}</p>
                <p>{project.description2}</p>
                <Button onClick={dev} endIcon={<ListAltOutlined />}>
                  Agregar a Mi Lista
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </m.section>
  );
};

export default ArtFocus;
