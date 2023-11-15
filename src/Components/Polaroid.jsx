import React from "react";
import "./Polaroid.css";
import portrait from "../Assets/polaroid.png";

const Polaroid = ({ artist, artistImg }) => {
  return (
    <figure className="polaroid">
      <img  src={portrait} alt="" className="frame"/>
      <img src={artistImg} alt="" className="framed__img" />
      <h2 className="frame__tag">{artist}</h2>
    </figure>
  );
};

export default Polaroid;
