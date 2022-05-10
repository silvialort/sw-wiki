import styled from 'styled-components';

const MainContainer = styled.main`
    width: 100%;
    &.with-background{
        background: url(${(props) => props.bg}) center center repeat;
        background-size: cover;
    }
    `;


export default MainContainer;