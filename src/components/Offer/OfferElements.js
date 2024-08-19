import styled from 'styled-components';

export const OfferContainer = styled.div`
    height: 682px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const OfferText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    position: static;
    width: 1100px;
    height: 124px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: -10px 0px 10px -170px;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const OfferH1 = styled.h1`
    position: static;
    width: 560px;
    height: 124px;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
    letter-spacing: 0.05em;
    font-feature-settings: 'salt' on, 'liga' off;
    color: #152536;
    margin-left: 250px;
    margin-top: 50px;
    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const OfferP = styled.p`
    font-family: Arial;
    font-style: normal;
    font-weight: 300;
    width: 550px;
    height: 81px;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #6C757D;
    margin-left: 20px;
    margin-top: 48px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const OfferCover1 = styled.img`
    position: static;
    width: 1140px;
    height: 400px;
    margin-left: 90px;
    margin-top: 40px;
    border-radius: 24px;
    flex: none;
    order: 1;
    flex-grow: 0;
`;