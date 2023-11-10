import React from 'react';
import './Art.css'
import ArtMap from './ArtMap';
import { ArtData } from '../Categories/Art';


const Art = () => {
    return (
        <section id="art">
            {ArtData.map((item) => <ArtMap item={item} key={item.id}/>)}
        </section>
    );
}

export default Art;
