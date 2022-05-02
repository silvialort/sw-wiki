import React from "react";
import NavLink from 'react-router-dom';

import NavContainer from "./Nav-style";

const Nav = () => {
    return(
        <NavContainer>
            <NavLink to='/personajes' class='link'>Personajes</NavLink>
            <NavLink to='/contacto' class='link'>Contacto</NavLink>
        </NavContainer>
    )
}

export default Nav;