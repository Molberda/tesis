import React from "react";
import "./ModaFocus.css";

const ModaFocus = ({ products }) => {
  return (
    <section id="modaFocus" className="top__section">
      <div className="modaFocus__container container top__container">
        <div className="modaFocus__row row">
          {products.map((product) => (
            <div className="modaFocus__organizer">
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
                    <a href={product.link}>Sitio Web</a>
                    <a href={product.ig}>Instagram</a>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModaFocus;
