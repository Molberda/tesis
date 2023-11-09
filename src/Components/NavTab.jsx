import React from 'react';
import NavBtn from './NavBtn';

const NavTab = () => {
    return (
        <div className="nav__tab">
            <NavBtn name='arte' link='/arte'/>
            <NavBtn name='diseno' link='/diseno'/>
            <NavBtn name='moda' link='/moda'/>
            <NavBtn name='teatro' link='/teatro'/>
            <NavBtn name='musica' link='/musica'/>
        </div>
    );
}

export default NavTab;
