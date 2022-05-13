import styled from "styled-components";

const CharacterCardContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    flex-flow: column wrap;
    min-height: 170px;
    width: 100%;
    min-width: 310px;
    max-width: 350px;
    padding: 20px;
    margin-bottom: 15px;
    box-shadow: 0 2px 2px rgba(0,0,0,0.25);
    border-radius: 20px;
    background-color: #F3F7FF;

    h2 {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 35px;
        text-align: center;
        color: #243382;
    }

    span{
        background-color: #161414;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 500;
        color: #FBFBFB;
        font-size: 20px;
        border-radius: 5px;
        text-align: center;
        padding: 5px 25px;
        cursor: pointer;
    }
`;

export default CharacterCardContainer;