import React, { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView } from "framer-motion";

const HighlightMap = ({ item }) => {
  const isOdd = item.id % 2 !== 0;

  const ref = useRef();
  const isInView = useInView(ref);
  const mainControls = useAnimation()

  useEffect(() => {
    if(isInView){
        mainControls.start('show')
    }
    else{
        mainControls.start('hidden')
    }
  }, [isInView]);
  return (
    <>
      {isOdd ? (
        <m.figure
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: '75%' },
            show: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="highlightMap__img"
        >
          <img src={item.img} alt="" />
          <div className="highlightMap__hover">
           <h1>{item.name}</h1>
          </div>
        </m.figure>
      ) : (
        <m.figure
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: '-75%' },
            show: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="highlightMap__img"
        >
          <img src={item.img} alt="" />
          <div className="highlightMap__hover">
           <h1>{item.name}</h1>
          </div>
        </m.figure>
      )}
    </>
  );
};

export default HighlightMap;
