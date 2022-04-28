import styled from "styled-components";
import fondo from "../../assets/fondo.jpg";

const CharacterListContainer = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: flex-start;
    flex-flow: row wrap;
    background: url(${fondo});
    `;


export default CharacterListContainer;
