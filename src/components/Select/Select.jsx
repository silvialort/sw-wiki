import React from "react";

import SelectContainer from "./Select-style";

const Select = ({children, handleChange}) => {
    return(
        <SelectContainer onChange={() => handleChange()}>
            {children}
        </SelectContainer>
    )
}

export default Select;