import React from "react";

import ButtonContainer from "./Button-style";

<<<<<<< HEAD
const Button = ({text, handleClick}) => {
    return(
        <ButtonContainer onClick={() => handleClick()}>
=======
const Button = ({text, handleClick, color}) => {
    return(
        <ButtonContainer color={color} onClick={() => handleClick()}>
>>>>>>> 958d0145736e6ac7f3b386a98248286b8569274f
            {text}
        </ButtonContainer>
    )
}

export default Button;