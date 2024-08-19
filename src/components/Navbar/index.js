import React, { useState, useEffect } from 'react';
import Icon from '../../images/logove.png';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavIcon, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavContainer } from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#000' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavContainer>
                            <NavIcon to='/' onClick={toggleHome} src={Icon} />
                            <NavLogo to='/' onClick={toggleHome}>VENVICE</NavLogo>
                        </NavContainer>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='/'>BERANDA</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/join'>GABUNG JADI MITRA</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/'>BAHASA</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
