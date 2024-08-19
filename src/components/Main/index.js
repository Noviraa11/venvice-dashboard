import React from 'react';
import Logo1 from '../../images/1.png';
import Logo2 from '../../images/2.png';
import Logo3 from '../../images/3.png';
import Logo4 from '../../images/4.png';
import { MainContainer, MainH1, MainP, MainWrapper, MainIcon1, MainIcon2, MainIcon3, MainIcon4, TextWrapper, Tittle1, Description1, Tittle2, Description2, Tittle3, Description3, Tittle4, Description4 } from './MainElements';

const Main = () => {
    return (
        <MainContainer>
            <MainH1>Kenalin nih, Venvice</MainH1>
            <MainP>Venvice menyediakan berbagai macam pilihan layanan jasa yang dibutuhkan oleh masyarakat.</MainP>
            <MainWrapper>
                <MainIcon1 src={Logo1} />
                <MainIcon2 src={Logo2} />
                <MainIcon3 src={Logo3} />
                <MainIcon4 src={Logo4} />
            </MainWrapper>
            <TextWrapper>
                <Tittle1>Perbaikan</Tittle1>
                <Description1>Jasa perbaikan barang, baik itu barang elektronik ataupun bukan</Description1>
                <Tittle2>Kebersihan</Tittle2>
                <Description2>Jasa untuk membersihkan ruangan maupun barang</Description2>
                <Tittle3>Gaya Hidup</Tittle3>
                <Description3>Jasa yang berhubungan dengan gaya dan mode</Description3>
                <Tittle4>Pengantaran</Tittle4>
                <Description4>Jasa pengantaran barang/paket kamu ke seluruh Indonesia</Description4>
            </TextWrapper>
        </MainContainer>
    )
}

export default Main;