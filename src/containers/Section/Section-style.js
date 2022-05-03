import styled from "styled-components";

const SectionContainer = styled.section`
    width: 100%;
    min-height: 50vh;
    background-color: ${(props) => props.bgcl || '#F3F7FF'};
    display: flex;
    padding: 20px;
    flex-flow: ${(props) => props.direction || 'row'} wrap;
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'flex-start'};
    background: ${(props) => props.bg || 'none'};
    `

export default SectionContainer;