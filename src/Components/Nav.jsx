import React from "react";
import "./Nav.css";
import SearchBar from "./SearchBar";
import logo from '../Assets/Logo-Naranja.PNG'
import NavTab from "./NavTab";
import { useNavigate } from "react-router-dom";

const Nav = () => {

  const navTo = useNavigate()
  return (
    <div className="nav__background">
      <nav>
        <figure className="nav__logo" onClick={() => navTo('/')}>
            <img src={logo} alt="" />
        </figure>
        <SearchBar/>
        <div className="nav__shortcuts"></div>
      </nav>
      <NavTab/>
    </div>
  );
};

export default Nav;
