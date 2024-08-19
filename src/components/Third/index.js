import React from 'react';
import Image1 from '../../images/pana.png';
import { ThirdContainer, ContentWrapper, TextWrapper, ThirdH1, ThirdP, Badge1 } from './ThirdElements';

const Third = () => {
    return (
        <ThirdContainer id="beranda">
            <ContentWrapper>
                <TextWrapper>
                    <ThirdH1>Cara alternatif untuk mempertemukan penyedia jasa dengan pelanggan.</ThirdH1>
                    <ThirdP>Biasanya orang-orang harus pergi ke suatu toko atau gerai penyedia jasa untuk membeli suatu jasa. Dengan Venvice akan mengubah cara tersebut menjadi lebih praktis.</ThirdP>
                </TextWrapper>
                <Badge1 src={Image1} />
            </ContentWrapper>
        </ThirdContainer>
    )
}

export default Third;
