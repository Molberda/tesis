import React from "react";
import NavBtn from "./NavBtn";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Logo-Naranja.PNG";

const NavTab = () => {
  const navTo = useNavigate();
  return (
    <div className="nav__tab">
      <figure className="nav__logo" onClick={() => navTo("/")}>
        <img src={logo} alt="" />
      </figure>
      <ul className="links__list">
        <NavBtn name="arte" link="/arte" />
        <NavBtn name="diseno" link="/diseno" />
        <NavBtn name="moda" link="/moda" />
        <NavBtn name="teatro" link="/teatro" />
        <NavBtn name="musica" link="/musica" />
      </ul>
    </div>
  );
};

export default NavTab;
