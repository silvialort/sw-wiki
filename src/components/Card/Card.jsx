import React from "react";

import CharacterCardContainer from "./Card-style";
<<<<<<< HEAD
import Button from "../Button/Button";

const CharacterCard = ({name}) => {
    return(
        <CharacterCardContainer>
            <h2>{name}</h2>
            <Button text='Detalles' />
=======

const CharacterCard = ({name, handleClick}) => {
    return(
        <CharacterCardContainer>
            <h2>{name}</h2>
            <span onClick={() => handleClick()} >Detalles</span>
>>>>>>> 958d0145736e6ac7f3b386a98248286b8569274f
        </CharacterCardContainer>
    )

}

export default CharacterCard;