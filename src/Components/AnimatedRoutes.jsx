import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../HomePage/Home';

const AnimatedRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/arte' element={<Home/>}/>
        </Routes>
    );
}

export default AnimatedRoutes;
