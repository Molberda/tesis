import React from "react";

const ArtMap = ({ item }) => {
  return (
    <div className="artMap__background">
      <figure className="artMap__img">
        <img src={item.mainImg} alt="" />
      </figure>
      <div className="artMap__text">
        <h1>{item.name}</h1>
      </div>
    </div>
  );
};

export default ArtMap;
