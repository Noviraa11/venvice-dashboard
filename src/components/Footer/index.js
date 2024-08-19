import React from 'react';
import Icon from '../../images/logov.png';
import Images from '../../images/footer.png';
import Img from '../../images/playstore.png';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterIcon, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterBadge, FooterLink, SocialMedia, SocialMediaWrap, SocialIcon, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterIcon src={Images} />
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Perusahaan</FooterLinkTitle>
                            <FooterLink to="/signin">Tentang Kami</FooterLink>
                            <FooterLink to="/signin">Blog</FooterLink>
                            <FooterLink to="/signin">Hubungi Kami</FooterLink>
                            <FooterLink to="/signin">Testimoni</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Bantuan</FooterLinkTitle>
                            <FooterLink to="/signin">Pelayanan Pelanggan</FooterLink>
                            <FooterLink to="/signin">Syarat & Ketentuan</FooterLink>
                            <FooterLink to="/signin">Kebijakan Privasi</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Install Aplikasi</FooterLinkTitle>
                            <FooterBadge to='/' src={Img} />
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialIcon to='/' onClick={toggleHome} src={Icon} />
                        <SocialLogo to='/' onClick={toggleHome}>VENVICE</SocialLogo>
                        <WebsiteRights>PT. MEDIA KREASI ABADI © {new Date().getFullYear()} Venvice</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.instagram.com/venviceid/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
