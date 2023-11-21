import React from "react";
import Landing from "./Landing";
import Highlights from "./Highlights";
import "./Home.css";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5, delay: .5 } }}
      exit={{ opacity: 0, transition: {duration: .5} }}
      id="home"
    >
      <Landing />
      <Highlights />
    </m.section>
  );
};

export default Home;
