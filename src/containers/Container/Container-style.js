import styled from 'styled-components';

const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    flex-flow: ${(props) => props.direction || 'row'} wrap;
    gap: 20px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    `;


export default ContainerDiv;