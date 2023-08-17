import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: ${theme.font.family.primary};
    background: ${theme.colors.raisinBlack};
    color: ${theme.colors.white};
  }
`}
`;
