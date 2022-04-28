import React from 'react';
import InputContainer from './Input-style';

const Input = ({text}) => {
    return(
        <InputContainer placeholder={text} />
    )
}

export default Input;