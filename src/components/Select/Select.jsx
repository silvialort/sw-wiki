import React from "react";

import SelectContainer from "./Select-style";

<<<<<<< HEAD
const Select = ({children, text}) => {
    return(
        <SelectContainer>
            <option value='default' disabled>
                {text}
            </option>
=======
const Select = ({children, reference, handleChange}) => {
    return(
        <SelectContainer onChange={() => handleChange()}
        ref={reference}>
>>>>>>> 958d0145736e6ac7f3b386a98248286b8569274f
            {children}
        </SelectContainer>
    )
}

export default Select;