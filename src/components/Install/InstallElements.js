import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const InstallContainer = styled.div`
    background: linear-gradient(150deg, #f8e8f7 5%, #bdccee 65%, #f0d1e6, #efc2db);
    height: 840px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    width: 540px;
    height: 316px;
    margin-top: -210px;
    margin-bottom: 530px;
    margin-left: -520px;

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
    left: 582px;
    top: -63px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const InstallH1 = styled.h1`
    position: static;
    width: 560px;
    height: 62px;
    left: calc(50% - 560px/2);
    top: 0px;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 62.4px;
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

export const InstallP = styled.p`
    position: static;
    width: 540px;
    height: 108px;
    margin-left: 15px;
    margin-top: 150px;
    font-family: Arial;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    text-align: right;
    letter-spacing: 0.05em;
    color: #6C757D;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const InstallBtnLink = styled(LinkR)`
    position: absolute;
    width: 232px;
    height: 44px;
    left: 340px;
    top: 360px;
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
    width: 560px;
    height: 830.74px;
    left: 3px;
    top: -30px;
`;