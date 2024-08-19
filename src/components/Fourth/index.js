import React from 'react';
import Image1 from '../../images/fri.png';
import { FourthContainer, ContentWrapper, TextWrapper, FourthH1, FourthP, Badge1 } from './FourthElements';

const Fourth = () => {
    return (
        <FourthContainer id="beranda">
            <ContentWrapper>
                <TextWrapper>
                    <FourthH1>Peluang jam kerja yang fleksibel dengan Venvice.</FourthH1>
                    <FourthP>Mencari pekerjaan layanan jasa penuh waktu atau paruh waktu? Daripada bingung, cobalah Venvice. Dapatkan bayaran untuk memberikan layanan jasa kapan pun Anda mau.</FourthP>
                </TextWrapper>
                <Badge1 src={Image1} />
            </ContentWrapper>
        </FourthContainer>
    )
}

export default Fourth;