import React from "react";

import ButtonContainer from "./Button-style";

const Button = ({text, handleClick, color}) => {
    return(
        <ButtonContainer onClick={() => handleClick()}>
            {text}
        </ButtonContainer>
    )
}

export default Button;