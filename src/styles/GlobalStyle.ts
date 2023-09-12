import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset},
  
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

`;
