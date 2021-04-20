import React from 'react';
import classNames from './Nav.module.css';

function Nav() {
    return (
        <nav className = {classNames.navbar}>
            <div>            
                <img src="logo192.png" alt="logo site" className = {classNames.imgLogo}/>           
            </div>
            <div>
                <ul className = {classNames.menus}>
                    <li>Mes projets</li>
                    <li>Se connecter</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;

