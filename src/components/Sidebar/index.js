import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>Beranda</SidebarLink>
                    <SidebarLink to='blog' onClick={toggle}>Gabung Jadi Mitra</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Bahasa</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
