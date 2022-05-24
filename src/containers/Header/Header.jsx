import React from "react";
import {NavLink as Link} from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import Nav from '../../components/Nav/Nav';

import HeaderContainer from "./Header-style";

const Header = () => {
    return(
        <HeaderContainer>
            <Link to="/"><Logo /></Link>
            <Nav />
        </HeaderContainer>
    )

}

export default Header;