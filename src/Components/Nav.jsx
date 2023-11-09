import React from "react";
import "./Nav.css";
import SearchBar from "./SearchBar";
import logo from '../Assets/Logo-Naranja.PNG'

const Nav = () => {
  return (
    <div className="nav__background">
      <nav>
        <figure className="nav__logo">
            <img src={logo} alt="" />
        </figure>
        <SearchBar/>
        <div className="nav__shortcuts"></div>
      </nav>
      <div className="nav__tab"></div>
    </div>
  );
};

export default Nav;
