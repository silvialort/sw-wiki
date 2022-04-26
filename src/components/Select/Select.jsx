import React from "react";

import SelectContainer from "./Select-style";

const Select = ({children, text}) => {
    return(
        <SelectContainer>
            <option value='default' disabled>
                {text}
            </option>
            {children}
        </SelectContainer>
    )
}

export default Select;