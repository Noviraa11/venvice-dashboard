import styled from 'styled-components';

export const FeatureContainer = styled.div`
    height: 1150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const FeatureWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    width: 540px;
    height: 460px;
    margin-right: -660px;
    margin-top: 300px;
    background: #FFFFFF;
    border-radius: 24px;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const FeatureH1 = styled.h1`
    position: static;
    width: 412px;
    height: 124px;
    margin-left: 64px;
    margin-top: 65px;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
    letter-spacing: 0.05em;
    color: #152536;
    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const FeatureP = styled.p`
    position: static;
    width: 400px;
    height: 162px;
    margin-left: 64px;
    margin-top: 16px;
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

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const FeatureCover3 = styled.img`
    position: absolute;
    width: 100%;
    height: 500px;
    margin-top: -130px;
    -o-object-fit: cover;
    object-fit: cover;
`;