import styled from 'styled-components';

export const InfoContainer = styled.div`
    height: 1370px;
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

export const InfoWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const InfoIcon1 = styled.img`
    position: static;
    width: 270px;
    height: 270px;
    margin-left: -75px;
    margin-top: 50px;
    border-radius: 16px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const InfoIcon2 = styled.img`
    position: static;
    width: 270px;
    height: 334px;
    margin-left: 215px;
    margin-top: -688px;
    border-radius: 16px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const InfoIcon3 = styled.img`
    position: static;
    width: 230px;
    height: 356px;
    margin-left: -576px;
    top: 0px;
    border-radius: 16px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: -705px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const InfoIcon4 = styled.img`
    position: static;
    width: 310px;
    height: 310px;
    margin-left: -326px;
    margin-top: -7px;
    border-radius: 16px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ContentWrapper = styled.div`
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

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0px;
    position: static;
    width: 486px;
    height: 244px;
    margin-left: 800px;
    margin-top: -90px;
    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const InfoH1 = styled.h1`
    font-family: Arial;
    width: 486px;
    height: 186px;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
    letter-spacing: 0.05em;
    color: #152536;
    margin-left: 1px;
    margin-top: -146px;
    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const InfoP = styled.p`
    position: static;
    width: 486px;
    height: 108px;
    margin-left: 800px;
    margin-top: 20px;
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

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 486px;
    height: 244px;
    margin-left: 800px;
    margin-top: 50px;
    flex: none;
    order: 0;
    flex-grow: 0;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const FirstWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 463px;
    height: 56px;
    left: 0px;
    top: 284px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 60px 0px;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const InfoList1 = styled.img`
    position: static;
    width: 56px;
    height: 56px;
    left: 0px;
    margin-top: -136px;
    background: #6A65D8;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Caption1Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 408.05px;
    height: 56px;
    left: 72px;
    top: 0px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: -75px 73px;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const Tittle1 = styled.h1`
    position: static;
    width: 372px;
    height: 29px;
    left: 0px;
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
    margin: 4px 0px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Description1 = styled.p`
    position: static;
    width: 408.05px;
    height: 54px;
    left: 0px;
    top: 28px;
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
    margin: 4px 0px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const SecondWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 473px;
    height: 56px;
    left: 0px;
    top: 380px;
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 45px 0px;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const InfoList2 = styled.img`
    position: static;
    width: 56px;
    height: 56px;
    left: 0px;
    margin-top: -177px;
    background: #00AED6;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Caption2Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    position: static;
    width: 372px;
    height: 56px;
    left: 72px;
    top: 0px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: -75px 73px;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const Tittle2 = styled.h1`
    position: static;
    width: 372px;
    height: 29px;
    left: 0px;
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
    margin: 4px 0px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Description2 = styled.p`
    position: static;
    width: 372px;
    height: 54px;
    left: 0px;
    top: 28px;
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
    margin: 4px 0px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ThirdWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 473px;
    height: 56px;
    left: 0px;
    top: 476px;
    flex: none;
    order: 3;
    flex-grow: 0;
    margin: 55px 0px;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const InfoList3 = styled.img`
    position: static;
    width: 56px;
    height: 56px;
    left: 0px;
    margin-top: -215px;
    background: #DF1995;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Caption3Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    position: static;
    width: 372px;
    height: 56px;
    left: 72px;
    top: 0px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: -63px 73px;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const Tittle3 = styled.h1`
    position: static;
    width: 372px;
    height: 29px;
    left: 0px;
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
    margin: 4px 0px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Description3 = styled.p`
    position: static;
    width: 372px;
    height: 54px;
    left: 0px;
    top: 28px;
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
    margin: 4px 0px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const FourthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 473px;
    height: 56px;
    left: 0px;
    top: 572px;
    flex: none;
    order: 4;
    flex-grow: 0;
    margin: 50px 0px;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const InfoList4 = styled.img`
    position: static;
    width: 56px;
    height: 56px;
    left: 0px;
    margin-top: -255px;
    background: #00AA13;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Caption4Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    position: static;
    width: 372px;
    height: 56px;
    left: 72px;
    top: 0px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: -75px 73px;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const Tittle4 = styled.h1`
    position: static;
    width: 372px;
    height: 29px;
    left: 0px;
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
    margin: 4px 0px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Description4 = styled.p`
    position: static;
    width: 372px;
    height: 54px;
    left: 0px;
    top: 28px;
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
    margin: 4px 0px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;