import React from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>  
                </li>
                <li>
                    <NavLink to='/ofundacji'>O fundacji</NavLink>
                </li>
                <li>
                    <NavLink to='/wolontariat'>Wolontariat</NavLink>
                </li>
                <li>
                    <NavLink to='/wsparcie'>Wesprzyj</NavLink>
                </li>
                <li>
                    <NavLink to='/kontakt'>Kontakt</NavLink>
                </li>
            </ul>
            <Hamburger />
        </nav>
    )
}

export default Navbar;
