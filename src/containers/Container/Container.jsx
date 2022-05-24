import React from 'react';
import ContainerDiv from './Container-style';

const Container = ({children, direction}) => {
    return(
        <ContainerDiv direction={direction}>
            {children}
        </ContainerDiv>
    )
}

export default Container;