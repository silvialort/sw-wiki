import styled from "styled-components";
import fondo from "../../assets/fondo.jpg";

const CharacterListContainer = styled.ul`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    flex-flow: row wrap;
    background-color: ${(props) => props.bgcolor || 'transparent'};
    `;


export default CharacterListContainer;
