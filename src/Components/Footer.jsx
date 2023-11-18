import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer__row row">
        <div className="footer__categories">
          <li>
            <Link to={"/arte"}>Arte</Link>
            <div className="footer__hover--effect"></div>
          </li>
          <li>
            <Link to={"/diseno"}>Diseno</Link>
            <div className="footer__hover--effect"></div>
          </li>
          <li>
            <Link to={"/moda"}>Moda</Link>
            <div className="footer__hover--effect"></div>
          </li>
          <li>
            <Link to={"/teatro"}>Teatro</Link>
            <div className="footer__hover--effect"></div>
          </li>
          <li>
            <Link to={"/musica"}>Musica</Link>
            <div className="footer__hover--effect"></div>
          </li>
        </div>
        <div className="footer__artists"></div>
        <div className="footer__contact"></div>
      </div>
    </footer>
  );
};

export default Footer;
