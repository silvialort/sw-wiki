import React from 'react';
import ContainerDiv from './Container-style';

const Container = ({children}) => {
    return(
        <ContainerDiv>
            {children}
        </ContainerDiv>
    )
}

export default Container;