import React from "react";

import SectionContainer from "./Section-style";

const Section = ({children, bg = '', bgcl, color, direction, justify, align}) => {
    return(
        <SectionContainer
            className={`${bg !== '' ? 'with-background' : ''}`}
            bg={bg}
            bgcl={bgcl}
            color={color}
            direction={direction}
            justify={justify}
            align={align}>
            {children}
        </SectionContainer>
    )
}

export default Section;