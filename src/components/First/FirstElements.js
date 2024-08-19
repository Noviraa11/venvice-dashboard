import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const FirstContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1000px;
    position: relative;
    z-index: 1;

    // :before {
    //     content: '';
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    //     z-index: 2;
    // }
`;

export const FirstBg = styled.div`
    position: absolute;
    background: #fff;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #fff;
`;

export const FirstContent = styled.div`
    position: absolute;
    width: 986px;
    height: 345px;
    left: 227px;
    top: 228px;
`;

export const FirstH1 = styled.h1`
    position: static;
    width: 986px;
    height: 156px;
    left: calc(50% - 986px/2);
    top: 0px;
    color: #152536;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.05em;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 32px 0px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const FirstP = styled.p`
    position: static;
    width: 770px;
    height: 81px;
    font-family: Arial;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.05em;
    color: #3C4551;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 32px 100px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const FirstBtnLink = styled(LinkR)`
    position: absolute;
    width: 250px;
    height: 24px;
    left: 375px;
    top: 330px;
    font-family: Arial;
    text-decoration: none;
    color: #152536;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    // transition: all 0.2s ease-in-out;

    // &:hover {
    //     transition: all 0.2s ease-in-out;
    //     background: #ffcdce;
    //     color: #fff;
    // }
`;