import React from "react";
import "./Nav.css";
import SearchBar from "./SearchBar";
import NavTab from "./NavTab";
import { NavLink, useNavigate } from "react-router-dom";
import { EmojiNatureOutlined, ListAltOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";

const Nav = () => {
  const navTo = useNavigate();
  return (
    <div className="nav__background">
      <nav>
        <figure className="nav__icon" onClick={() => navTo("/")}>
          <EmojiNatureOutlined />
        </figure>
        <SearchBar />
        <div className="nav__shortcuts">
          <NavLink to='/miLista'>
            <Button endIcon={<ListAltOutlined />}><h1 className="navLink">Mi Lista</h1></Button>
          </NavLink>
        </div>
      </nav>
      <NavTab />
    </div>
  );
};

export default Nav;
