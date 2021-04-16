import React from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from './Hamburger';

const Navbar = props => {
    return (
        <nav>
            <div className="upper-nav">
                <div className="logo-holder"></div>
                <div className="socials-holder">
                    <a href="https://www.facebook.com/Fundacja-Widzialne-Dzieci-107014821423632" target="_blank" rel="noreferrer"><div className="face"></div></a>
                    <a href="https://instagram.com/widzialnedzieci?igshid=7t72o1u2326z" target="_blank" rel="noreferrer"><div className="inst"></div></a>
                </div>
            </div>
            <dvi className="nav">
                <ul>
                    <li>
                        <NavLink to='/ofundacji'>O fundacji</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Strona Główna</NavLink>  
                    </li>
                    <li>
                        <NavLink to='/wolontariat'>Wolontariat</NavLink>
                    </li>
                    <li>
                        <NavLink to='/kontakt'>Kontakt</NavLink>
                    </li>
                    <li className="support-nav-link">
                        <NavLink to='/wsparcie'>Wesprzyj</NavLink>
                    </li>
                </ul>
                <Hamburger click={props.menuHandler} />
            </dvi>
        </nav>
    )
}

export default Navbar;
