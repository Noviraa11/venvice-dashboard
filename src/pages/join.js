import React, { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import First from '../components/First';
import Second from '../components/Second';
import Third from '../components/Third';
import Fourth from '../components/Fourth';
import Fifth from '../components/Fifth';
import Sixth from '../components/Sixth';
import Footer from '../components/Footer';

const JoinPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <ScrollToTop />
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Sixth />
            <Footer />
        </>
    );
};

export default JoinPage;