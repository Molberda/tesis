import React from "react";
import "./Polaroid.css";
import portrait from "../Assets/polaroid.png";

const Polaroid = ({ artist }) => {
  return (
    <figure className="polaroid">
      <img  src={portrait} alt="" className="frame"/>
      <img src={artist} alt="" className="framed__img" />
    </figure>
  );
};

export default Polaroid;
