import React from "react";
import FooterContainer from './Footer-style';

const Footer = ({children}) => {
    return (
        <FooterContainer>
            {children}
        </FooterContainer>
    )
}

export default Footer;