import React from "react";
import "./Nav.css";
import SearchBar from "./SearchBar";
import NavTab from "./NavTab";
import { Link, useNavigate } from "react-router-dom";
import { ListAltOutlined, PersonOutline, StarBorderOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import logo from '../Assets/Logo-Naranja.PNG'

const Nav = () => {
  const navTo = useNavigate();
  const dev = () => alert("esta funcion todavia esta en desarrollo")
  return (
    <div className="nav__background">
      <nav>
        <figure className="nav__icon" onClick={() => navTo("/")}>
          <img src={logo} alt="" />
        </figure>
        <SearchBar />
        <div className="nav__shortcuts">
          <Link to='/'>
            <Button onClick={dev} endIcon={<ListAltOutlined />}><h1 className="navLink">Mi Lista</h1></Button>
          </Link>
          <Link to='/'>
            <Button onClick={dev} endIcon={<StarBorderOutlined />}><h1 className="navLink">Destacados</h1></Button>
          </Link>
          <Link to='/'>
            <Button onClick={dev} endIcon={<PersonOutline />}><h1 className="navLink">Iniciar Sesión</h1></Button>
          </Link>
        </div>
      </nav>
      <NavTab />
    </div>
  );
};

export default Nav;
