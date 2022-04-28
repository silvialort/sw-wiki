import React from "react";

import Heading1Container from "./Heading1-style";

const Heading1 = ({text, color}) => {
    return(
        <Heading1Container color={color}>
            {text}
        </Heading1Container>
    )
}

export default Heading1;