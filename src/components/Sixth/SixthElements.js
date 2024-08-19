import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const SixthContainer = styled.div`
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #F3F3FC;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #fff;
`;

export const ContentWrapper = styled.div`
    position: absolute;
    width: 1140px;
    height: 549.16px;
    left: -45px;
    top: -450px;
    align-items: center;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const TextWrapper = styled.div`
    position: absolute;
    width: 560px;
    height: 278px;
    left: 730px;
    top: 4570px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const SixthH1 = styled.h1`
    position: static;
    width: 560px;
    height: 62px;
    left: calc(50% - 560px/2);
    top: 0px;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
    text-align: right;
    letter-spacing: 0.05em;
    color: #152536;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 32px 0px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const SixthP = styled.p`
    position: static;
    width: 560px;
    height: 108px;
    left: 0px;
    top: 94px;
    font-family: Arial;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    text-align: right;
    letter-spacing: 0.05em;
    color: #3C4551;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 32px 0px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const SixthBtnLink = styled(LinkR)`
    position: absolute;
    width: 232px;
    height: 44px;
    left: 340px;
    top: 280px;
    font-family: Arial;
    text-decoration: none;
    color: #152536;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    // transition: all 0.2s ease-in-out;

    // &:hover {
    //     transition: all 0.2s ease-in-out;
    //     background: #ffcdce;
    //     color: #fff;
    // }
`;

export const Badge1 = styled.img`
    position: absolute;
    width: 520px;
    height: 540px;
    left: 195px;
    top: 4464.78px;
`;