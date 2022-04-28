import styled from 'styled-components';

const ParagraphContainer = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.color || '#161414'}; 
    `;

export default ParagraphContainer;