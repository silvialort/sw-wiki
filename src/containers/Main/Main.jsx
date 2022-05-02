import React from 'react';

import MainContainer from './Main-style';

const Main = ({children}) => {
    return(
        <MainContainer>
            {children}
        </MainContainer>
    )
}

export default Main;