import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Clouds from '../components/Clouds';
import Main from '../components/Main';
import Project from '../components/Project';
import Feature from '../components/Feature';
import Offer from '../components/Offer';
import Info from '../components/Info';
import Install from '../components/Install';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
// Novira H
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Clouds />
            <Main />
            <Project />
            <Feature />
            <Offer />
            <Info />
            <Install />
            <Footer />
        </>
    );
};

export default Home;
