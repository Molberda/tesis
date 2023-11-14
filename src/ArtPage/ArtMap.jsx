import { Button } from "@mui/material";
import React from "react";

const ArtMap = ({ item }) => {
  return (
    <div className="artMap__container">
      <figure className="artMap__img">
        <img src={item.mainImg} alt="" />
      </figure>
      <div className="artMap__hover">
        <Button>Ver Projecto</Button>
      </div>
    </div>
  );
};

export default ArtMap;
