import React from 'react';
import Image1 from '../../images/sav.png';
import { FifthContainer, ContentWrapper, TextWrapper, FifthH1, FifthP, Badge1 } from './FifthElements';

const Fifth = () => {
    return (
        <FifthContainer id="beranda">
            <ContentWrapper>
                <TextWrapper>
                    <FifthH1>Raih penghasilan sesuka Anda.</FifthH1>
                    <FifthP>Anda dapat menentukan sendiri seberapa besar penghasilan yang ingin Anda hasilkan. Semakin sering Anda menerima pesanan, semakin besar pula Anda mendapatkan keuntungan.</FifthP>
                </TextWrapper>
                <Badge1 src={Image1} />
            </ContentWrapper>
        </FifthContainer>
    )
}

export default Fifth;
