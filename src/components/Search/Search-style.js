import styled from 'styled-components';

const SearchContainer = styled.input`
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    padding: 10px 26px;
    background-color: #FFFFFF;
    color: #C4C4C4;
    border-radius: 10px;
    margin: 10px auto;
    box-shadow: 0 0 4px rgba(0,0,0,0.25);
    border: none;
    &:focus-visible{
        box-shadow: none;
        border: solid 2px #C4C4C4;
    }
    `;

export default SearchContainer;