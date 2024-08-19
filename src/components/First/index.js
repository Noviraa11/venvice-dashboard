import React, { useState } from 'react';
import Image from '../../images/Bkg.png';
import { FirstContainer, FirstBg, ImageBg, FirstContent, FirstH1, FirstP, FirstBtnLink } from './FirstElements';

const First = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <FirstContainer id='home'>
            <FirstBg>
                <ImageBg src={Image} />
            </FirstBg>
            <FirstContent class="content1">
                <FirstH1>Bersama berevolusi, membangun ekonomi negeri.</FirstH1>
                <FirstP>Memulai perubahan tak bisa dilakukan sendiri. Bersama kita lalui tantangan ini. Mari bermitra dengan kami untuk memajukan pergerakan ekonomi Indonesia.</FirstP>
                <FirstBtnLink to="/">DAFTAR SEKARANG</FirstBtnLink>
            </FirstContent>
        </FirstContainer>
    );
};

export default First;
