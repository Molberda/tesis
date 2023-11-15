import { ArrowOutward } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ArtMap = ({ item }) => {
  const navTo = useNavigate();
  return (
    <div className="artMap__container">
      <figure className="artMap__img">
        <img src={item.mainImg} alt="" />
      </figure>
      <div className="artMap__hover" onClick={() => navTo(`${item.id}`)}>
        <h1 className="artMap__title">{item.name}</h1>
        <Button
          className="artMap__btn"
          endIcon={<ArrowOutward />}
          onClick={() => navTo(`${item.id}`)}
        >
          Ver Projecto
        </Button>
      </div>
    </div>
  );
};

export default ArtMap;
