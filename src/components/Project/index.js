import React from 'react';
import Image from '../../images/Project.png';
import { ProjectContainer, ProjectCover3, ProjectWrapper, ProjectH1, ProjectP } from './ProjectElements';

const Project = () => {
    return (
        <ProjectContainer>
            <ProjectCover3 src={Image} />
            <ProjectWrapper>
                <ProjectH1>Memiliki berbagai bidang penyedia jasa</ProjectH1>
                <ProjectP>Venvice bekerjasama dengan mitra terbaik dari seluruh penjuru Nusantara. Dengan pakai Venvice, kamu telah berkontribusi dalam menyejahterakan pekerja dalam negeri.</ProjectP>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Project;