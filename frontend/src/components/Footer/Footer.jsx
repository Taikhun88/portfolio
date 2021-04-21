import React from 'react'
import classNames from './Footer.module.css'

function Footer() {
    return (
        <footer className = { classNames.footerColor }>
            <ul className = { classNames.ul }>
                <li className = { classNames.removeLi }>&copy;  2O21</li>
                <li className = { classNames.removeLi }>Mentions légales</li>
                <li className = { classNames.removeLi }>Politique de confidentialité</li>
                <li className = { classNames.removeLi }>Plan du site</li>
                <li className = { classNames.removeLi }>Contact</li>
            </ul>
        </footer>
    )
}

export default Footer
