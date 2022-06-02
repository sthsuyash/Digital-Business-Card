import React from 'react';

import mainImage from './images/laura.png';
import Title from './components/Title.mjs';
import About from './components/About.mjs';
import Interests from './components/Interests.mjs';
import Footer from './components/Footer.mjs';

import './components/styles.scss';

export default function App() {
    return (
        <main>
            <img className='portrait' src={mainImage} alt="main" />
            <section className='notPic'>
                <Title />
                <About />
                <Interests />
            </section>
            <Footer />
        </main>
    )
}