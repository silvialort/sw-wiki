import React from 'react';

import MainContainer from './Main-style';

const Main = ({children, bg = '', bgcl}) => {
    return(
        <MainContainer bg={bg} bgcl={bgcl} className={`${bg !== '' ? 'with-background' : ''}`}>

            {children}
        </MainContainer>
    )
}

export default Main;