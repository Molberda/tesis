import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../HomePage/Home';
import Art from '../ArtPage/Art';
import ArtFocus from '../ArtPage/ArtFocus';
import Moda from '../ModaPage/Moda';

const AnimatedRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/arte' element={<Art/>}/>
            <Route path='/arte/:id' element={<ArtFocus/>}/>
            <Route path='/moda' element={<Moda />}/>
        </Routes>
    );
}

export default AnimatedRoutes;
