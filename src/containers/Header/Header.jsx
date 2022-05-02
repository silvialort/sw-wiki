import React from "react";
import NavLink from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import Nav from '../../components/Nav/Nav';

import HeaderContainer from "./Header-style";

const Header = () => {
    return(
        <HeaderContainer>
            <NavLink to='/'>
                <Logo />
            </NavLink>
            <Nav />
        </HeaderContainer>
    )

}

export default Header;