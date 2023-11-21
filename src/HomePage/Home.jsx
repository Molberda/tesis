import React from "react";
import Landing from "./Landing";
import Highlights from "./Highlights";
import "./Home.css";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2.5, ease: "easeInOut" } }}
      exit={{ opacity: 0, transitionDuration: 5 }}
      id="home"
    >
      <Landing />
      <Highlights />
    </m.section>
  );
};

export default Home;
