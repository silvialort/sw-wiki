import styled from 'styled-components';

const ModalContentContainer = styled.div`
    padding: 50px;
    display: flex;
    height: 350px;
    flex-direction: column;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar{
        display: none;
    }

    `;



export default ModalContentContainer;