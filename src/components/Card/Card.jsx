import React from "react";

import CharacterCardContainer from "./Card-style";
import Button from "../Button/Button";

const CharacterCard = ({name}) => {
    return(
        <CharacterCardContainer>
            <h2>{name}</h2>
            <Button text='Detalles' />
        </CharacterCardContainer>
    )

}

export default CharacterCard;