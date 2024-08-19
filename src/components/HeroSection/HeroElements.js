import styled from 'styled-components';
// import { Button } from '../../globalStyles';
import { Link as LinkR } from 'react-router-dom';

export const HeroContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`;

export const HeroBg = styled.div`
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

export const HeroContent = styled.div`
    position: absolute;
    left: 150px;
    top: 200px;

    @media screen and (max-width: 1728px) {
        left: 118px;
    }

    @media screen and (max-width: 991px) {
        left: 30px;
    }

    @media screen and (max-width: 768px) {
        top: 180px;
    }
`;

export const HeroLeft = styled.div`
    position: static;
`;

// export const ButtonWrapper = styled.div`
// 	width: 100%;
// 	display: flex;
// 	justify-content: center;
// 	flex-flow: wrap;
// 	gap: 0.5rem;
// `;

// export const HeroButton = styled(Button)`
// 	color: black;
// 	&:before {
// 		background: #fff;
// 		height: 500%;
// 	}
// 	&:hover:before {
// 		height: 0%;
// 	}
// 	&:hover {
// 		color: white;
// 	}
// `;

export const HeroBtnLink = styled(LinkR)`
    position: absolute;
    width: 250px;
    left: 3px;
    top: 390px;
    font-family: Arial;
    text-decoration: none;
    color: #152536;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #4e53b2;
    }

    @media screen and (max-width: 991px) {
        font-size: 18px;
        width: 400px;
        top: 330px;
        letter-spacing: 0.01em;
    }

    @media screen and (max-width: 768px) {
        font-size: 18px;
        width: 400px;
        top: 850px;
        letter-spacing: 0.01em;
    }
`;

export const HeroH1 = styled.h1`
    position: absolute;
    width: 560px;
    left: -2px;
    font-family: Arial;
    font-size: 60px;
    line-height: 130%;
    letter-spacing: 0.05em;

    // @media screen and (max-width: 1728px) {
    //     left: 120px;
    // }

    @media screen and (max-width: 991px) {
        font-size: 40px;
        width: 350px;
        letter-spacing: 0.01em;
    }

    @media screen and (max-width: 768px) {
        font-size: 30px;
        width: 400px;
        letter-spacing: 0.01em;
    }
`;

export const HeroP = styled.p`
    position: absolute;
    width: 560px;
    top: 266px;
    font-family: Arial;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.05em;
    color: #3C4551;

    @media screen and (max-width: 991px) {
        font-size: 17px;
        width: 340px;
        top: 190px;
        letter-spacing: 0.01em;
    }

    @media screen and (max-width: 768px) {
        font-size: 15px;
        width: 400px;
        top: 750px;
        letter-spacing: 0.01em;
    }
`;

// export const HeroBtnWrapper = styled.nav`
//     display: flex;
//     align-items: center;

//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `;

// export const HeroBtnLink = styled(LinkR)`
//     border-radius: 10px;
//     position: absolute;
//     background: #6A65D8;
//     width: 224px;
//     height: 50px;
//     white-space: nowrap;
//     padding: 10px 25px;
//     margin-top: 400px;
//     margin-left: -285px;
//     color: #fff;
//     font-size: 20px;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     text-decoration: none;
//     // transition: all 0.2s ease-in-out;

//     // &:hover {
//     //     transition: all 0.2s ease-in-out;
//     //     background: #ffcdce;
//     //     color: #fff;
//     // }
// `;

export const HeroImage = styled.img`   
    position: absolute;
    width: 560px;
    height: 830.74px;
    left: 580px;
    top: 0px;

    @media screen and (max-width: 991px) {
        width: 400px;
        height: 730px;
        left: 350px;
    }

    @media screen and (max-width: 768px) {
        width: 375px;
        height: 620px;
        left: -5px;
        top: 100px;
    }
`;