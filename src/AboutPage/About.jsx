import React from "react";
import "./About.css";
import { motion as m } from "framer-motion";
import icon from "../Assets/navIcon.PNG";

const About = () => {
  return (
    <m.section
      initial={{ x: "-100%" }}
      animate={{ x: 0, transition: { duration: 1, delay: 0.3 } }}
      exit={{ x: "-100%", transition: { duration: 0.25 } }}
      id="about"
      className="top__section"
    >
      <div className="about__container container top__container">
        <div className="about__row row">
          <figure className="about__img">
            <img src={icon} alt="" />
          </figure>
          <div className="about__text">
            <h1>Nosotros:</h1>
            <p>
              Cooltura Hunt es un medio que se centra en informar de manera
              fácil y accesible la oferta cultural y creativa de la ciudad
              ayudando a las personas a descubrir y experimentar lo mejor de
              Bogotá. Una plataforma hecha para todas esas personas que no van a
              eventos culturales con frecuencia porque no se enteran, porque
              dicen no tienen tiempo o porque simplemente no tienen con quién
              ir. En Cooltura Hunt encontramos información sobre moda, arte,
              diseño, teatro y cine para que nos mantengamos informados y
              podamos vivir experiencias que nos hagan salir de la rutina.
            </p>
            <h1>Valores:</h1>
            <ul>
              <li>Diversidad Cultural</li>
              <li>Colaboración</li>
              <li>Innovación</li>
              <li>Comunidad</li>
            </ul>
          </div>
        </div>
      </div>
    </m.section>
  );
};

export default About;
