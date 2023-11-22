import React from 'react';
import './Landing.css'
import fondo from '../Assets/fondo.PNG'

const Landing = () => {
    return (
        <section id="landing"
        className='top__section'>
            <figure className='landing__img'>
                <img src={fondo} alt="" />
            </figure>
        </section>
    );
}

export default Landing;
