import styled from "styled-components";

const ButtonContainer = styled.span`
    background-color: ${(props) => props.color || '#161414'};
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    color: #FBFBFB;
    font-size: 20px;
    border-radius: 5px;
    text-align: center;
    padding: 5px 25px;
    cursor: pointer;
`;

export default ButtonContainer;