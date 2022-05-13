import React from 'react';

import MainContainer from './Main-style';

const Main = ({children, bg = ''}) => {
    return(
        <MainContainer bg={bg} className={`${bg !== '' ? 'with-background' : ''}`}>
            
            {children}
        </MainContainer>
    )
}

export default Main;