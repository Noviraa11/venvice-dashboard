import styled from 'styled-components';

export const AddContainer = styled.div`
    background: linear-gradient(180deg, #ffffff 65%, #cfd5f1);
    height: 900px;
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