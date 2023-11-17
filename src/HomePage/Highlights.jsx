import React from 'react';
import './Highlights.css'
import { HighlightData } from '../Categories/HighlightsData';
import HighlightMap from './HighlightMap';

const Highlights = () => {

    const hiddenElements = document.querySelectorAll('.hidden')

    return (
        <section id="highlights">
            {HighlightData.map((item) => (<HighlightMap item={item} key={item.id}/>))}
        </section>
    );
}

export default Highlights;
