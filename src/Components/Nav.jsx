import React from "react";
import "./Nav.css";
import SearchBar from "./SearchBar";
import NavTab from "./NavTab";
import { useNavigate } from "react-router-dom";
import { EmojiNatureOutlined } from "@mui/icons-material";

const Nav = () => {

  const navTo = useNavigate()
  return (
    <div className="nav__background">
      <nav>
        <figure className="nav__icon" onClick={() => navTo('/')}>
            <EmojiNatureOutlined/>
        </figure>
        <SearchBar/>
        <div className="nav__shortcuts"></div>
      </nav>
      <NavTab/>
    </div>
  );
};

export default Nav;
