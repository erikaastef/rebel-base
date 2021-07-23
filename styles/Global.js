import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        width: 100%;
        height: 100%; 
    }

    body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: 'Trebuchet MS', sans-serif;
        font-size: 16px;
        font-weight: 300;
    }

    strong, 
    .--strong {
        font-weight: 700;
    }

    /* Helpers */

    .wrapper{
        width:100%;
        max-width: 1114px;
        margin:0 auto;
        @media(max-width: 1200px){
            width:90vw;
        }
    }
`