import React from "react";
import {NavLink as Link} from 'react-router-dom';

import NavContainer from "./Nav-style";

const Nav = () => {
    return(
        <NavContainer>
            <Link to='/personajes' class='link'>Personajes</Link>
            <Link to='/contacto' class='link'>Contacto</Link>
        </NavContainer>
    )
}

export default Nav;