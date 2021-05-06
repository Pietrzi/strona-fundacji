import React from 'react';
import { NavLink } from 'react-router-dom';

const SideMenu = props => {

    let sideMenuClasses = 'side__menu'
    if (props.show) {
        sideMenuClasses = 'side__menu open'
    }

    return (
        <div className={sideMenuClasses}>
            <ul>
                <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='/'>Home</NavLink>
                </li>
                <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='/ofundacji'>O fundacji</NavLink>
                </li>
                <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='/wolontariat'>Wolontariat</NavLink>
                </li>
                {/* <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='/wsparcie'>Wesprzyj</NavLink>
                </li> */}
                <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='/kontakt'>Kontakt</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu;