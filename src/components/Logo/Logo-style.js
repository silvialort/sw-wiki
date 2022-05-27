import styled from "styled-components";

const LogoContainer = styled.div`
    max-width: 100px;
    width: 100%;
    .logo-image{
        max-width: 100%;
    }
    @media screen and (max-width: 700px) {
        display:none;
    }

`;

export default LogoContainer;