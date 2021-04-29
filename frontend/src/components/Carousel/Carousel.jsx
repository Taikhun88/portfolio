import React from 'react'
import classNames from './Carousel.module.css';

function Carousel() {
    return (
        <div className = {classNames.carousel}>
            <h1 className = {classNames.title}>Bienvenue sur mon portfolio</h1>
            <p className = {classNames.catchyPhrase}>Découvrez ici tous mes projets en symfony, js et nodejs</p>
        </div>
    )
}

export default Carousel;
