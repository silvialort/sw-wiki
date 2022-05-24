import React from "react";

import ModalContentContainer from "./ModalContent-style";

const ModalContent = ({children}) => {
    return(
        <ModalContentContainer>
            {children}
        </ModalContentContainer>
    )
}

export default ModalContent;