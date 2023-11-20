import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../HomePage/Home";
import Art from "../ArtPage/Art";
import ArtFocus from "../ArtPage/ArtFocus";
import Moda from "../ModaPage/Moda";
import ModaFocus from "../ModaPage/ModaFocus";
import { ModaData } from "../Categories/Moda";

const AnimatedRoutes = () => {
  const apa = ModaData.filter((e) => e.type === "APPAREL");
  const hom = ModaData.filter((e) => e.type === "HOMBRE");
  const rdp = ModaData.filter((e) => e.type === "ROPA DE PLAYA");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/arte" element={<Art />} />
      <Route path="/arte/:id" element={<ArtFocus />} />
      <Route path="/moda" element={<Moda />} />
      <Route path="/moda/apparel" element={<ModaFocus products={apa} />} />
      <Route path="/moda/hombre" element={<ModaFocus products={hom} />} />
      <Route path="/moda/ropadeplaya" element={<ModaFocus products={rdp} />} />
    </Routes>
  );
};

export default AnimatedRoutes;
