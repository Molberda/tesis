import React, { useEffect, useRef, useState } from "react";
import "./Slideshow.css";
import { motion as m } from "framer-motion";
import { ArrowForward } from "@mui/icons-material";

const Slideshow = ({ imgs, css }) => {
  const [width, setWidth] = useState(0);
  const slideshow = useRef();

  useEffect(() => {
    setWidth(slideshow.current.scrollWidth - slideshow.current.offsetWidth);
  }, []);

  return (
    <div className={`slideshow__organizer slideshow__${css}--organizer`}>
      <ArrowForward />
      <m.div ref={slideshow} className={`slideshow`}>
        <m.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className={`inner-slideshow inner-${css}Slideshow`}
        >
          {imgs.map((img) => (
            <m.figure
              key={img.id}
              className={`slideshow__img ${css}Slideshow__img`}
            >
              <img src={img.img} alt="" />
            </m.figure>
          ))}
        </m.div>
      </m.div>
      <ArrowForward />
    </div>
  );
};

export default Slideshow;
