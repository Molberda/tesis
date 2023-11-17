import React from 'react';

const HighlightMap = ({ item }) => {
    return (
        <figure className="highlightMap__img">
            <img src={item.img} alt="" />
        </figure>
    );
}

export default HighlightMap;
