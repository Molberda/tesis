import React from 'react';
import './Polaroid.css'
import portrait from '../Assets/polaroid.png'

const Polaroid = () => {
    return (
        <figure>
            <img src={portrait} alt="" />
        </figure>
    );
}

export default Polaroid;
