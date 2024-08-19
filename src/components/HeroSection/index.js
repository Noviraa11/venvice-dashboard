import React, { useState } from 'react';
import Image from '../../images/Bg.png';
import Img from '../../images/app.png';
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroLeft, HeroH1, HeroP, HeroImage, HeroBtnLink } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg src={Image} />
            </HeroBg>
            <HeroContent class="content1">
                <HeroLeft>
                    <HeroH1>Temukan jasa yang Anda butuhkan di sini.</HeroH1>
                    <HeroP>Kami menghubungkan berbagai macam jasa yang ada di Indonesia dalam satu aplikasi. Membawa perubahan dalam memenuhi kebutuhan manusia akan jasa.</HeroP>
                    <HeroBtnLink to="/">UNDUH SEKARANG</HeroBtnLink>
                </HeroLeft>
                <HeroImage src={Img} />
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
