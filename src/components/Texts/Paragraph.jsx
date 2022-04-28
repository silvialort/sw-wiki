import React from 'react';
import ParagraphContainer from './Paragraph-style';

const Paragraph = ({text, color}) => {
    return(
        <ParagraphContainer color={color}>
            {text}
        </ParagraphContainer>
    )
}

export default Paragraph;