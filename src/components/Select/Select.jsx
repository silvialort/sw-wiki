import React from "react";

import SelectContainer from "./Select-style";

const Select = ({children, reference, handleChange}) => {
    return(
        <SelectContainer onChange={() => handleChange()}
        ref={reference}>
            {children}
        </SelectContainer>
    )
}

export default Select;