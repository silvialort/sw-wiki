import styled from "styled-components";

const Heading1Container = styled.h1`
    font-size: 40px;
    font-weight: 700;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${(props) => props.color || '#161414'};
<<<<<<< HEAD
=======
    &.main-title{
        text-transform: uppercase;
        text-shadow: 0 1px 5px rgba(0,0,0,0.2);
    }
>>>>>>> 958d0145736e6ac7f3b386a98248286b8569274f
    `;

export default Heading1Container;