import React from "react";
import NavBtn from "./NavBtn";
import { useNavigate } from "react-router-dom";
import icon from "../Assets/navIcon.PNG";

const NavTab = () => {
  const navTo = useNavigate();
  return (
    <div className="nav__tab">
      <figure className="nav__logo" onClick={() => navTo("/nosotros")}>
        <img src={icon} alt="" />
      </figure>
      <ul className="links__list">
        <NavBtn name="arte" link="/arte" />
        <NavBtn name="moda" link="/moda" />
        <NavBtn name="diseño" link="/" deve={true}/>
        <NavBtn name="teatro" link="/" deve={true}/>
        <NavBtn name="música" link="/" deve={true}/>
        {/* <NavBtn name="diseno" link="/diseno" />
        <NavBtn name="teatro" link="/teatro" />
        <NavBtn name="musica" link="/musica" /> */}
      </ul>
    </div>
  );
};

export default NavTab;
