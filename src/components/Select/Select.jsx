import React from "react";

import SelectContainer from "./Select-style";

const Select = ({children, text}) => {
    return(
        <SelectContainer>
            <option value={text} disabled />
            {children}
        </SelectContainer>
    )
}

export default Select;