import React from "react";

import ButtonContainer from "./Button-style";

const Button = ({text, handleClick}) => {
    return(
        <ButtonContainer onClick={() => handleClick()}>
            {text}
        </ButtonContainer>
    )
}

export default Button;