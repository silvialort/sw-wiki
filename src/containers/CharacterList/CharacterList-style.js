import styled from "styled-components";
<<<<<<< HEAD
import fondo from "../../assets/fondo.jpg";

const CharacterListContainer = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: flex-start;
    flex-flow: row wrap;
    background: url(${fondo});
=======

const CharacterListContainer = styled.ul`
    margin: 30px auto;
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    flex-flow: row wrap;
    background-color: ${(props) => props.bgcolor || 'transparent'};
>>>>>>> 958d0145736e6ac7f3b386a98248286b8569274f
    `;


export default CharacterListContainer;
