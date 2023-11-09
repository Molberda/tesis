import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const NavBtn = ({ name, link }) => {
  return (
    <NavLink to={link}>
      <Button><h1 className="navLink">{name}</h1></Button>
    </NavLink>
  );
};

export default NavBtn;
