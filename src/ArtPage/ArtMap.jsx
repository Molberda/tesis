import { Button } from "@mui/material";
import React from "react";

const ArtMap = ({ item }) => {
  return (
    <div className="artMap__container">
      <figure className="artMap__img">
        <img src={item.mainImg} alt="" />
      </figure>
      <div className="artMap__hover">
        <h1 className="artMap__title">{item.name}</h1>
        <Button>Ver Projecto</Button>
      </div>
    </div>
  );
};

export default ArtMap;
