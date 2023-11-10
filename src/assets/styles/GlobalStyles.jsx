import { createGlobalStyle } from 'styled-components'
/*** font ***/
// 참고 url : https://sunn.us/suit/
export const GlobalStyles = createGlobalStyle`
body,p,h1,h2,h3,h4,h5,h6,ul,ol,li,dl,dt,dd,div,span,table,th,td,form,fieldset,legend,input,textarea,button,select,svg,i {margin:0;padding:0;box-sizing:border-box; font-family:'SUIT', sans-serif;}
  body {
    font-size: 16px;
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
