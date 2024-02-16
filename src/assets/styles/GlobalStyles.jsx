import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
${reset}

  body {
    display: grid;
    height: 100vh;
    grid-template:
      "messages"  1fr
      "input"     auto
      "keyboard"  env(keyboard-inset-height, 0px);
  }

  body {
    font-size: 16px;
    font-family:'SUIT', sans-serif;
  }
  img {
    vertical-align: top;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    appearance: none;
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
  }
  li {
    list-style:none;
  }
`;
