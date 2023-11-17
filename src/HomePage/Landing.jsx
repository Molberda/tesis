import React from 'react';
import './Landing.css'
import landing from '../Assets/landing.png'

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
