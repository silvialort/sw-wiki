import styled from "styled-components";

const ButtonContainer = styled.span`
<<<<<<< HEAD
    background-color: #161414;
=======
    background-color: ${(props) => props.color || '#161414'};
>>>>>>> 958d0145736e6ac7f3b386a98248286b8569274f
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    color: #FBFBFB;
    font-size: 20px;
    border-radius: 5px;
    text-align: center;
    padding: 5px 25px;
    cursor: pointer;
    &:hover{
<<<<<<< HEAD
        background-color: #797C8D;
=======
        outline: solid 5px ${(props) => props.outline || '#161414'};
        background-color: transparent;
>>>>>>> 958d0145736e6ac7f3b386a98248286b8569274f
    }
`;

export default ButtonContainer;