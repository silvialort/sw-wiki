import styled from "styled-components";

const CharacterListContainer = styled.ul`
    margin: 30px auto;
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    flex-flow: row wrap;
    background-color: ${(props) => props.bgcolor || 'transparent'};
    `;


export default CharacterListContainer;
