import styled from 'styled-components';

const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    flex-flow: ${(props) => props.direction || 'row'} wrap;
    gap: 20px;
    margin: 20px auto;
    `;


export default ContainerDiv;