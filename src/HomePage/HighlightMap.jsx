import React from "react";
import { motion as m } from "framer-motion";

const HighlightMap = ({ item }) => {
  const isOdd = item.id % 2 !== 0;
  return (
    <>
      {isOdd ? (
        <m.figure
          variants={{
            hidden: { opacity: 0, y: -500 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          className="highlightMap__img"
        >
          <img src={item.img} alt="" />
        </m.figure>
      ) : (
        <m.figure
          variants={{
            hidden: { opacity: 0, y: 500 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          className="highlightMap__img"
        >
          <img src={item.img} alt="" />
        </m.figure>
      )}
    </>
  );
};

export default HighlightMap;
