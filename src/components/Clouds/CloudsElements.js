import styled from 'styled-components';

export const CloudsContainer = styled.div`
    height: 850px;
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

export const CloudsContent = styled.div`
    position: absolute;
    width: 1340px;
    height: 220px;
    left: 0px;
    top: 75px;
    align-items: center;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const CloudsH1 = styled.h1`
    position: absolute;
    width: 986px;
    height: 26px;
    left: 230px;
    top: 1230.74px;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.05em;
    color: #152536;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const CloudsBottom = styled.div`
    position: absolute;
    left: -900px;
    right: 0%;
    top: 1300px;
    background: #FFFFFF;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const Divider = styled.div`
    position: static;
    width: 100px;
    height: 1px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 24px 0px;
`;

export const CloudsIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 0px;
    position: static;
    width: 259.71px;
    height: 80px;
    left: calc(50% - 259.71px/2 - 0px);
    // top: calc(50% - 80px/2);
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: -15px 0px 55px -5px;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const CloudsIcon1 = styled.img`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: static;
    width: 105px;
    height: 60px;
    margin-left: 1500px;
    margin-top: 80px;
    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const CloudsIcon2 = styled.img`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 0px;
    position: static;
    width: 90.06px;
    height: 80px;
    margin-left: 60px;
    margin-top: 150px;
    margin-bottom: 70px;
    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;