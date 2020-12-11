import React from 'react';
import { NavLink } from 'react-router-dom';

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
                    <NavLink to='/aktualnosci'>Aktualności</NavLink>
                </li>
                <li>
                    <NavLink to='/wsparcie'>Wsparcie</NavLink>
                </li>
                <li>
                    <NavLink to='/kontakt'>Kontakt</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
