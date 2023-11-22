import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Facebook, Instagram, TurnedInNotOutlined } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const dev = () => alert("esta funcion todavia esta en desarrollo");

  return (
    <footer>
      <div className="footer__row row">
        <div className="footer__categories">
          <h1>Categorias</h1>
          <li>
            <Link to={"/arte"}>Arte</Link>
            <div className="footer__hover--effect"></div>
          </li>
          <li>
            <Link to={"/diseno"}>Diseño</Link>
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
        <div className="footer__sub">
          <Button endIcon={<TurnedInNotOutlined />}>
            <h1>¡Suscribete!</h1>
          </Button>
          <p>
            Suscribiéndote a Coolturahunt recibirás contenido exclusivo,
            noticias, invitaciones a eventos y posibles descuentos en marcas
            aliadas. <br /> ¡Haz parte de esta comunidad!
          </p>
        </div>
        <div className="footer__contact">
          <h1>Síguenos</h1>
          <li>
            <a href={undefined} onClick={dev}>
              Instagram
              <Instagram />
            </a>
            <div className="footer__hover--effect"></div>
          </li>
          <li>
            <a href={undefined} onClick={dev}>
              TikTok
              <FontAwesomeIcon icon="fa-brands fa-tiktok" />
            </a>
            <div className="footer__hover--effect"></div>
          </li>
          <li>
            <a href={undefined} onClick={dev}>
              FaceBook
              <Facebook />
            </a>
            <div className="footer__hover--effect"></div>
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
