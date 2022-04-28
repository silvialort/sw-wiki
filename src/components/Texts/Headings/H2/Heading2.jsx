import React from "react";

import Heading2Container from "./Heading2-style";

const Heading2 = ({text, color}) => {
    return(
        <Heading2Container color={color}>
            {text}
        </Heading2Container>
    )
}

export default Heading2;