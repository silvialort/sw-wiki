import React from 'react';
import InputContainer from './Input-style';

const Input = ({text, funcion, ref}) => {
    return(
        <InputContainer
        placeholder={text}
        onChange={funcion}
        ref={ref} />
    )
}

export default Input;