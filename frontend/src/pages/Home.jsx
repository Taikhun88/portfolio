import React from 'react';
import Cards from '../components/Cards/Cards';
import Carousel from '../components/Carousel/Carousel';
import Card from '../components/Cards/Card';
import classNames from './Home.module.css'
import Contact from '../components/Contact/Contact';

function Home() {
    return (
        <main>

            <Carousel/>
            <div className = {classNames.divContainer}>
            <Card/>
            <Card/>
            <Card/>
            </div>
            <Cards />
            <Contact/>
                      

        </main>
    )
}

export default Home
