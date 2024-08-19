import styled from 'styled-components';

export const ProjectContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    background: #FFF6F8;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    width: 463px;
    margin-top: -55px;
    height: 280px;
    right: 60px;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ProjectH1 = styled.h1`
    position: static;
    width: 465px;
    height: 186px;
    left: 0px;
    top: 0px;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
    letter-spacing: 0.05em;
    color: #152536;;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 16px 0px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectP = styled.p`
    position: absolute;
    width: 440px;
    height: 108px;
    left: 0px;
    top: 0px;
    font-family: Arial;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #6C757D;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 215px 0px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectCover3 = styled.img`
    position: absolute;
    width: 807px;
    height: 600px;
`;