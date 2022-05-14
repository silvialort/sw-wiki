import React from "react";

// Style-components
import MainModalContainer from "./MainModal-style";

const MainModal = ({children, handleClick}) => {
    return(
        <MainModalContainer>
            <div className='modal-wrapper'>
                <div className='tob-bar'>
                    <span onClick={() => handleClick()}>X</span>
                </div>
                {children}
            </div>
        </MainModalContainer>
    )
}

export default MainModal;