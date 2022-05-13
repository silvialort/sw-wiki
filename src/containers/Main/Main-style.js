import styled from 'styled-components';

const MainContainer = styled.main`
    width: 100%;
    min-height: 90vh;
    &.with-background{
        background: url(${(props) => props.bg}) center center repeat;
        background-size: cover;
    }
    `;


export default MainContainer;