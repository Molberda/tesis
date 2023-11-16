import React from 'react';
import '../HomeCss/Landing.css'
import landing from '../landing.png'

const Landing = () => {
    return (
        <section id="landing">
            <figure className='landing__img'>
                <img src={landing} alt="" />
            </figure>
        </section>
    );
}

export default Landing;
