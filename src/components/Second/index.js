import React from 'react';
import Animations from '../../video/animation.mp4';
import { SecondContainer, VideoBg } from './SecondElements';

const Second = () => {
    return (
        <SecondContainer id="beranda">
            <VideoBg autoPlay loop muted>
                <source src={Animations} type="video/mp4" />
            </VideoBg>
        </SecondContainer>
    );
};

export default Second;
