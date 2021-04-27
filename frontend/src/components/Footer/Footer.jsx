import React from 'react'
import classNames from './Footer.module.css'

function Footer() {
    return (
        <footer className = { classNames.footerColor }>
            <ul className = { classNames.ul }>
                <li>&copy;  2O21</li>
                <li>Mentions légales</li>
                <li>Politique de confidentialité</li>
                <li>Plan du site</li>
                <li>Contact</li>
            </ul>
        </footer>
    )
}

export default Footer
