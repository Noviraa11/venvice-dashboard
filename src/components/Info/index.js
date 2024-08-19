import React from 'react';
import Icon1 from '../../images/Image2.png';
import Icon2 from '../../images/Image1.png';
import Icon3 from '../../images/Image3.png';
import Icon4 from '../../images/Image4.png';
import List1 from '../../images/1.png';
import List2 from '../../images/2.png';
import List3 from '../../images/3.png';
import List4 from '../../images/4.png';
import { InfoContainer, InfoWrapper, InfoIcon1, InfoIcon2, InfoIcon3, InfoIcon4, ContentWrapper, TextWrapper, InfoH1, InfoP, ListWrapper, FirstWrapper, InfoList1, Caption1Wrapper, Tittle1, Description1, SecondWrapper, InfoList2, Caption2Wrapper, Tittle2, Description2, ThirdWrapper, InfoList3, Caption3Wrapper, Tittle3, Description3, FourthWrapper, InfoList4, Caption4Wrapper, Tittle4, Description4 } from './InfoElements';

const Info = () => {
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoIcon1 src={Icon1} />
                <InfoIcon2 src={Icon2} />
                <InfoIcon3 src={Icon3} />
                <InfoIcon4 src={Icon4} />
            </InfoWrapper>
            <ContentWrapper>
                <TextWrapper>
                    <InfoH1>Kami ada untuk mengatasi masalah harianmu</InfoH1>
                    <InfoP>Terutama masalah dalam pengerjaan suatu hal yang membutuhkan jasa dari tenaga ahli, biasanya seperti cuci baju, potong rambut, teknisi kendaraan, kurir, dsb.</InfoP>
                </TextWrapper>
                <ListWrapper>
                    <FirstWrapper>
                        <InfoList1 src={List1} />
                        <Caption1Wrapper>
                            <Tittle1>Perbaikan</Tittle1>
                            <Description1>Memperbaiki AC, TV, komputer, HP, kendaraan, dsb.</Description1>
                        </Caption1Wrapper>
                    </FirstWrapper>
                    <SecondWrapper>
                        <InfoList2 src={List2} />
                        <Caption2Wrapper>
                            <Tittle2>Kebersihan</Tittle2>
                            <Description2>Membersihkan rumah, pakaian, kendaraan, dsb.</Description2>
                        </Caption2Wrapper>
                    </SecondWrapper>
                    <ThirdWrapper>
                        <InfoList3 src={List3} />
                        <Caption3Wrapper>
                            <Tittle3>Gaya Hidup</Tittle3>
                            <Description3>Termasuk salon, jahit pakaian, pijat, dsb.</Description3>
                        </Caption3Wrapper>
                    </ThirdWrapper>
                    <FourthWrapper>
                        <InfoList4 src={List4} />
                        <Caption4Wrapper>
                            <Tittle4>Pengantaran</Tittle4>
                            <Description4>Mengantarkan paket, muatan, berkas, dsb.</Description4>
                        </Caption4Wrapper>
                    </FourthWrapper>
                </ListWrapper>
            </ContentWrapper>
        </InfoContainer>
    )
}

export default Info;
