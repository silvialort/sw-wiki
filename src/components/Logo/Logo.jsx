import React from "react";

import LogoContainer from "./Logo-style";

import logo from '../../assets/logo.png';

const Logo = () => {
    return(
        <LogoContainer>
            <img src={logo} className='logo-image' alt="Logo Star Wars Wiki"/>
        </LogoContainer>
    )

}

export default Logo;