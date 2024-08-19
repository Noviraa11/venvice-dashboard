import React from 'react';
import Divider from '@material-ui/core/Divider';
import Icon1 from '../../images/Logos.png';
import Icon2 from '../../images/logokm.png';
import { CloudsContainer, CloudsContent, CloudsH1, CloudsBottom, CloudsIcon, CloudsIcon1, CloudsIcon2 } from './CloudsElements';

const Clouds = () => {
    return (
        <CloudsContainer>
            <CloudsContent>
                <CloudsH1>Didukung oleh</CloudsH1>
                <CloudsBottom>
                    <Divider />
                    <CloudsIcon>
                        <CloudsIcon1 src={Icon1} />
                        <CloudsIcon2 src={Icon2} />
                    </CloudsIcon>
                    <Divider />
                </CloudsBottom>
            </CloudsContent>
        </CloudsContainer>
    )
}

export default Clouds;