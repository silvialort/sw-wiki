import styled from "styled-components";

const SectionContainer = styled.section`
    width: 100%;
    min-height: 50vh;
<<<<<<< HEAD
    background-color: ${(props) => props.bg || '#F3F7FF'};
    display: flex;
    flex-flow: ${(props) => props.direction || 'row'} wrap;
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'flex-start'};
    `

=======
    background-color: ${(props) => props.bgcl || 'none'};
    display: flex;
    padding: 20px;
    flex-flow: ${(props) => props.direction || 'row'} wrap;
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'flex-start'};
    background-color: ${(props) => props.bgcl};

    &.with-background{
        background: url(${(props) => props.bg}) center center no-repeat;
        background-size: cover;
    }

    `
>>>>>>> 958d0145736e6ac7f3b386a98248286b8569274f
export default SectionContainer;