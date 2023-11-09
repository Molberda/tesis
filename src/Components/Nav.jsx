import React from "react";
import "./Nav.css";
import SearchBar from "./SearchBar";

const Nav = () => {
  return (
    <div className="nav__background">
      <nav>
        <figure className="nav__logo">
            <img src="" alt="" />
        </figure>
        <SearchBar/>
        <div className="nav__shortcuts"></div>
      </nav>
      <div className="nav__tab"></div>
    </div>
  );
};

export default Nav;
