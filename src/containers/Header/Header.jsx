import React from "react";
import {NavLink as Link} from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import Nav from '../../components/Nav/Nav';

import HeaderContainer from "./Header-style";

const Header = () => {
    return(
        <HeaderContainer>
<<<<<<< HEAD
            <Link to="/"><Logo /></Link>
=======
            <Link to='/'>
                <Logo />
            </Link>
>>>>>>> feature/personajes
            <Nav />
        </HeaderContainer>
    )

}

export default Header;