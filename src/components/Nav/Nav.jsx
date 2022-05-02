import React from "react";
import {NavLink as Link} from 'react-router-dom';

import NavContainer from "./Nav-style";

const Nav = () => {
    return(
        <NavContainer>
            <Link to='/personajes' className='link'>Personajes</Link>
            <Link to='/contacto' className='link'>Contacto</Link>
        </NavContainer>
    )
}

export default Nav;