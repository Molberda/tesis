import React from "react";
import Landing from "./Landing";
import Highlights from "./Highlights";
import "./Home.css";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.section id="home">
      <Landing />
      <Highlights />
    </m.section>
  );
};

export default Home;
