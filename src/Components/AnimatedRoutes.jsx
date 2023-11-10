import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../HomePage/Home';
import Art from '../ArtPage/Art';

const AnimatedRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/arte' element={<Art/>}/>
        </Routes>
    );
}

export default AnimatedRoutes;
