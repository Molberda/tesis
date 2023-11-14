import React from 'react';
import './ArtFocus.css'
import { useParams } from 'react-router-dom';
import { ArtData } from '../Categories/Art';

const ArtFocus = () => {

    const { id } = useParams()
    const project = ArtData.find((i) => i.id === +id)

    return (
        <section className='top__section'>
            <h1>{project.name}</h1>
        </section>
    );
}

export default ArtFocus;
