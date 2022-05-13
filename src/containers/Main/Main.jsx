import React from 'react';

import MainContainer from './Main-style';

const Main = ({children, bg = ''}) => {
    return(
        <MainContainer className={`${bg !== '' ? 'with-background' : ''}`}  >
            {children}
        </MainContainer>
    )
}

export default Main;