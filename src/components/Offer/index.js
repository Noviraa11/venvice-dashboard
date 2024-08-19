import React from 'react';
import Cover1 from '../../images/Cover1.png';
import { OfferContainer, OfferText, OfferH1, OfferP, OfferCover1 } from './OfferElements';

const Offer = () => {
    return (
        <OfferContainer>
            <OfferText>
                <OfferH1>Menjadi sebuah harapan</OfferH1>
                <OfferP>Terkadang memiliki sebuah harapan sebagai tempat bergantung merupakan hal yang manusiawi dan setiap orang berhak akan hal tersebut.</OfferP>
            </OfferText>
            <OfferCover1 src={Cover1} />
        </OfferContainer>
    )
}

export default Offer;
