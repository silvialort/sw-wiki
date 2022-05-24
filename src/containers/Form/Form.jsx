import React from 'react';

import FormContainer from './Form-style';

const Form = ({children}) => {
    return(
        <FormContainer>
            {children}
        </FormContainer>
    )
}

export default Form;