import React from "react";

import Logo from '../../components/Logo/Logo';
import Nav from '../../components/Nav/Nav';

import HeaderContainer from "./Header-style";

const Header = () => {
    return(
        <HeaderContainer>
            <Logo />
            <Nav />
        </HeaderContainer>
    )

}

export default Header;