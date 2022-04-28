import React from "react";

import SectionContainer from "./Section-style";

const Section = ({children, bg, color, direction, justify, align}) => {
    return(
        <SectionContainer bg={bg} color={color} direction={direction} justify={justify} align={align}>
            {children}
        </SectionContainer>
    )
}

export default Section;