import React from "react";
import "./ModaFocus.css";
import { Instagram, LanguageOutlined } from "@mui/icons-material";
import { motion as m } from "framer-motion";

const ModaFocus = ({ products }) => {
  return (
    <m.section
      initial={{ y: "100%" }}
      animate={{ y: 0, transition: { duration: 1, delay: 0.3 } }}
      exit={{ y: "100%", transition: { duration: 0.25 } }}
      id="modaFocus"
      className="top__section"
    >
      <div className="modaFocus__container container top__container">
        <div className="modaFocus__row row">
          {products.map((product) => (
            <div key={product.id} className="modaFocus__organizer">
              <figure className="modaFocus__img">
                <img src={product.img} alt="" />
              </figure>
              <div className="modaFocus__text">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
              </div>
              <figure className="modaFocus__logo">
                <img src={product.logo} alt="" />
                <div className="modaFocus__links">
                  {product.link ? (
                    <a href={product.link}>
                      Sitio Web <LanguageOutlined />
                    </a>
                  ) : (
                    <></>
                  )}
                  {product.ig ? (
                    <a href={product.ig}>
                      Instagram
                      <Instagram />
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </m.section>
  );
};

export default ModaFocus;
