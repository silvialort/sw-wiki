import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Montserrat', sans-serif;
    }

    img{
        max-width: 100%;
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }`;

export default GlobalStyle;