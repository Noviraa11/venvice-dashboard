import styled from 'styled-components';

export const SecondContainer = styled.div`
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    height: 800px;
    z-index: 1;

    @media screen and (max-width:768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const VideoBg = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
`;