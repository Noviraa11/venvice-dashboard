import styled from 'styled-components';

export const MainContainer = styled.div`
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

export const MainH1 = styled.h1`
    position: static;
    width: 650px;
    height: 48px;
    margin-top: -210px;
    margin-left: 70px;
    margin-bottom: -30px;
    font-family: Arial;
    font-style: normal;
    font-weight: 798;
    font-size: 46px;
    line-height: 33px;
    letter-spacing: 0.05em;
    text-align: center;
    color: #152536;
    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const MainP = styled.p`
    position: static;
    width: 1110px;
    height: 36px;
    margin-top: -170px;
    margin-left: 60px;
    margin-bottom: 10px;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #6C757D;
    flex: none;
    order: 1;
    flex-grow: 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const MainWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 184px;
    margin-top: 100px;
    margin-left: 230px;
    margin-bottom: -100px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const MainIcon1 = styled.img`
    position: static;
    width: 72px;
    height: 72px;
    left: 0px;
    top: 0px;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 16px;
`;

export const MainIcon2 = styled.img`
    position: static;
    width: 72px;
    height: 72px;
    left: 0px;
    top: 0px;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 16px;
`;

export const MainIcon3 = styled.img`
    position: static;
    width: 72px;
    height: 72px;
    left: 0px;
    top: 0px;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 16px;
`;

export const MainIcon4 = styled.img`
    position: static;
    width: 72px;
    height: 72px;
    left: 0px;
    top: 16px;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 16px 0px;
`;

export const TextWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    margin-top: 100px;
    margin-left: 212px;
    margin-bottom: -100px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const Tittle1 = styled.h1`
    position: static;
    width: 255px;
    height: 24px;
    margin-left: 10px;
    top: 0px;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #152536;
    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Description1 = styled.p`
    position: static;
    width: 240px;
    height: 56px;
    margin-left: -53px;
    top: 28px;
    text-align: center;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
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

export const Tittle2 = styled.h1`
    position: static;
    width: 255px;
    height: 24px;
    margin-left: 10px;
    top: 0px;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #152536;
    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Description2 = styled.p`
    position: static;
    width: 245px;
    height: 56px;
    margin-left: -50px;
    top: 28px;
    text-align: center;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
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

export const Tittle3 = styled.h1`
    position: static;
    width: 255px;
    height: 24px;
    margin-left: 15px;
    top: 0px;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #152536;
    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Description3 = styled.p`
    position: static;
    width: 255px;
    height: 56px;
    margin-left: -50px;
    top: 28px;
    text-align: center;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
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

export const Tittle4 = styled.h1`
    position: static;
    width: 255px;
    height: 24px;
    margin-left: -5px;
    top: 0px;
    font-family: Arial;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #152536;
    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Description4 = styled.p`
    position: static;
    width: 281px;
    height: 56px;
    margin-left: -60px;
    top: 28px;
    text-align: center;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
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