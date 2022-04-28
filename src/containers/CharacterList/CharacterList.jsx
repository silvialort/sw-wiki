import React from 'react';
import CharacterListContainer from './CharacterList-style';

const CharacterList = ({children}) => {
    return(
        <CharacterListContainer>
            {children}
        </CharacterListContainer>
    )
}

export default CharacterList;