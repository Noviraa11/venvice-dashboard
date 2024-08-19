import styled from 'styled-components';

export const ThirdContainer = styled.div`
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
    height: 590px;
    left: -5px;
    top: 210px;
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
    align-items: flex-end;
    padding: 0px;
    position: absolute;
    width: 560px;
    height: 361px;
    left: 150px;
    top: 1700.77px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ThirdH1 = styled.h1`
    position: static;
    width: 560px;
    height: 248px;
    left: calc(50% - 560px/2);
    top: 0px;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
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

export const ThirdP = styled.p`
    position: static;
    width: 555px;
    height: 81px;
    left: 0px;
    top: 280px;
    font-family: Arial;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
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

export const Badge1 = styled.img`
    position: absolute;
    width: 525px;
    height: 580px;
    left: 730px;
    top: 1640px;
`;