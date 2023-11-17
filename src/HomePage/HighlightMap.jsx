import React from 'react';

const HighlightMap = ({ item }) => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show')
            }
            else {
                entry.target.classList.remove('show')
            }
        })
    })

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el))

    return (
        <figure className="highlightMap__img hidden">
            <img src={item.img} alt="" />
        </figure>
    );
}

export default HighlightMap;
