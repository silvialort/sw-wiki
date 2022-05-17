import styled from "styled-components";

const ButtonContainer = styled.span`
    background-color: #161414;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    color: #FBFBFB;
    font-size: 20px;
    border-radius: 5px;
    text-align: center;
    padding: 5px 25px;
    cursor: pointer;
    &:hover{
        outline: solid 5px #161414;
        background-color: transparent;
    }
`;

export default ButtonContainer;