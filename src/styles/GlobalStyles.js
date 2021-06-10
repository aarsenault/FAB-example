import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --green: #63E5CD;
    --white: ##FFFFFF;
    --darkGreen: #0F2E40;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    background: var(--white) !important;

  }


`;

export default GlobalStyle;
