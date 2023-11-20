import React from 'react';
import './ModaFocus.css'

const ModaFocus = ({ products }) => {
    return (
        <section id="modaFocus" className='top__section'>
            {products.map((product) => (
                <h1>{product.name}</h1>
            ))}
        </section>
    );
}

export default ModaFocus;
