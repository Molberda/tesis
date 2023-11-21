import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const Footer = () => {
  return (
    <m.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 5, ease: "easeInOut" } }}
      exit={{ opacity: 0, transitionDuration: 5 }}
    >
      <div className="footer__row row">
        <div className="footer__categories">
          <h1>Categorias</h1>
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
        <div className="footer__artists">
          <h1>Categorias</h1>
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
        <div className="footer__contact">
          <h1>Categorias</h1>
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
      </div>
    </m.footer>
  );
};

export default Footer;
