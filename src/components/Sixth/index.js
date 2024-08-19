import React from 'react';
import Background from '../../images/bck.png';
import Image1 from '../../images/phon.png';
import { SixthContainer, ImageBg, ContentWrapper, TextWrapper, SixthH1, SixthP, SixthBtnLink, Badge1 } from './SixthElements';

const Sixth = () => {
    return (
        <SixthContainer id="beranda">
            <ImageBg src={Background} />
            <ContentWrapper>
                <TextWrapper>
                    <SixthH1>Aplikasi untuk mitra.</SixthH1>
                    <SixthP>Mudah digunakan dan dapat diandalkan, aplikasi ini dibuat untuk mitra menemukan pelanggan dan memantau penghasilan. Semua hal yang anda perlukan sebagai mitra, ada di aplikasi ini.</SixthP>
                    <SixthBtnLink to="/">DAFTAR SEKARANG</SixthBtnLink>
                </TextWrapper>
                <Badge1 src={Image1} />
            </ContentWrapper>
        </SixthContainer>
    )
}

export default Sixth;