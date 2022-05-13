import React from "react";

import CharacterCardContainer from "./Card-style";

const CharacterCard = ({name}) => {
    return(
        <CharacterCardContainer>
            <h2>{name}</h2>
            <span onClick={() => handleClick()} >Detalles</span>
        </CharacterCardContainer>
    )

}

export default CharacterCard;