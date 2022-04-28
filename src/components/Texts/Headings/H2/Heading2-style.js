import styled from "styled-components";

const Heading2Container = styled.h2`
    font-size: 35px;
    font-weight: 700;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${(props) => props.color || '#161414'};
    `;

export default Heading2Container;