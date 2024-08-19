import styled from 'styled-components';

export const FourthContainer = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #FFFFFF;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ContentWrapper = styled.div`
    position: absolute;
    width: 1140px;
    height: 578.8px;
    left: -10px;
    top: -5px;
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: absolute;
    width: 550px;
    height: 326px;
    left: 730px;
    top: 2702.44px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const FourthH1 = styled.h1`
    position: static;
    width: 560px;
    height: 186px;
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
    margin: 32px 0px 0px -35px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const FourthP = styled.p`
    position: static;
    width: 540px;
    height: 108px;
    left: 0px;
    top: 218px;
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
    margin: 32px 0px 0px -18px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Badge1 = styled.img`
    position: absolute;
    width: 560px;
    height: 578.8px;
    left: 150px;
    top: 2576.04px;
`;