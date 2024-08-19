import React from 'react';
import Cover3 from '../../images/Cover3.png';
import { FeatureContainer, FeatureCover3, FeatureWrapper, FeatureH1, FeatureP } from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <FeatureCover3 src={Cover3} />
            <FeatureWrapper>
                <FeatureH1>Membantu sesama</FeatureH1>
                <FeatureP>Sulitnya menemukan penyedia jasa yang tepat dan berkualitas dengan harga yang kompetitif dan dengan kesibukan yang ada. Oleh karena itu, kami menghadirkan Venvice sebagai solusi yang aktual untuk permasalahan ini.</FeatureP>
            </FeatureWrapper>
        </FeatureContainer>
    )
}

export default Feature;