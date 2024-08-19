import React from 'react';
import Image from '../../images/Bgd.png';
import Image1 from '../../images/app.png';
import { InstallContainer, ImageBg, ContentWrapper, TextWrapper, InstallH1, InstallP, InstallBtnLink, Badge1 } from './InstallElements';

const Install = () => {
    return (
        <InstallContainer>
            <ImageBg src={Image} />
            <ContentWrapper>
                <TextWrapper>
                    <InstallH1>Rasakan kemudahan mencari jasa dengan  Venvice.</InstallH1>
                    <InstallP>Unduh Venvice dan temukan berbagai macam pilihan jasa menarik yang dapat kamu pesan hanya dengan menggunakan smartphone dan cukup dari rumah aja.</InstallP>
                    <InstallBtnLink to="/">UNDUH SEKARANG</InstallBtnLink>
                </TextWrapper>
                <Badge1 src={Image1} />
            </ContentWrapper>
        </InstallContainer>
    )
}

export default Install;
