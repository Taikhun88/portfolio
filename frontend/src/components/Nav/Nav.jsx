import React from 'react';
import classNames from './Nav.module.css';

function Nav() {
    return (
        <nav className = {classNames.navbar}>
            <div>            
                <img src="logo192.png" alt="logo site" className = {classNames.imgLogo}/>           

            </div>
            <ul className = {classNames.menus}>
                <li><img src="github.png" alt="git" className = {classNames.imgLogoGit} /></li>
                <li><img src="linkedin.png" alt="lk" className = {classNames.imgLogoLk}/></li>
                <li><img src="slack.png" alt="slack" className = {classNames.imgLogoSlack}/></li>
                {/* <li>Se connecter</li> */}
            </ul>
        </nav>
    )
}

export default Nav;

