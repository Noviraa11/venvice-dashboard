import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#ffffff' : 'transparent')};
    box-shadow: ${({ scrollNav }) => (scrollNav ? '0px 1px 2px' : 'rgba(0, 0, 0, 0.2)')};
    height: 100px;
    margin-top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.2s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 25px;
    max-width: 1100px;

    @media screen and (max-width: 768px) {
    }
`;

export const NavContainer = styled.div`
    display: flex;
`

export const NavIcon = styled.img`
    justify-self: flex-start;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    height: 56px;
    width: 56px;
    align-items: center;
    // margin-left: 25px;
    margin-top: 12px;
`;

export const NavLogo = styled(LinkR)`
    color: #152536;
    cursor: pointer;
    font-size: 15px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-weight: 900;
    text-decoration: none;

    @media screen and (max-width: 768px) {

    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    // color: ${({ scrollNavMenu }) => (scrollNavMenu ? '#C9C7F1' : '#A5A2E7')};
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -35px;
    margin-left: 115px;

    @media screen and (max-width: 991px) {
        margin-right: 0px;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkR)`
    color: #152536;
    display: flex;
    align-items: center;
    font-weight: 700;
    text-decoration: none;
    padding: 0 0 0 2rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #4e53b2;
        transition: 0.2s ease-in-out;
    }
`;