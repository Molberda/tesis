import React from "react";

const ArtMap = ({ item }) => {
  return (
    <>
      <figure className="artMap__img">
        <img src={item.mainImg} alt="" />
      </figure>
      <div className="artMap__text">
      </div>
    </>
  );
};

export default ArtMap;
