import { createGlobalStyle } from 'styled-components'
/*** font ***/
// 참고 url : https://sunn.us/suit/
export const GlobalStyles = createGlobalStyle`
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
