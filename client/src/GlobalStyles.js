import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

:root {
  --titleFont: "'Poppins", sans-serif;
  --textFont: "Roboto", sans-serif;
  --background: #FCFCFC;
  --text-color: #707070;
  --primary-color: #123A9C;
  --secondary-color: #ED7761;
  --action-color: #F5DF4D;
}
body {
  margin: 0 ;
  font-family: 'Roboto', sans-serif;
  background-color: var(--background);
  
 }
h1, h2, h3, h4{
    font-family: 'Roboto Mono', monospace;  
    text-align: center;
    text-transform: uppercase;
}



`;

export default GlobalStyle;
