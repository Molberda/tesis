import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBtn = ({ name, link, deve }) => {
  const dev = () => alert("esta funcion todavia esta en desarrollo");
  return (
    <>
      {deve ? (
        <Link to={null}>
          <Button onClick={dev}>
            <h1 className="navLink">{name}</h1>
          </Button>
        </Link>
      ) : (
        <Link to={link}>
          <Button>
            <h1 className="navLink">{name}</h1>
          </Button>
        </Link>
      )}
    </>

    // <NavLink to={link}>
    //   <Button><h1 className="navLink">{name}</h1></Button>
    // </NavLink>
  );
};

export default NavBtn;
