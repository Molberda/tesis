import React from 'react';
import { motion as m } from 'framer-motion';
import './ArtModal.css'


const ArtBackdrop = ({ children, onClick }) => {
    return (
        <m.div
     className="artBackdrop"
      onClick={onClick}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
      {children}
    </m.div>
    );
}

export default ArtBackdrop;
