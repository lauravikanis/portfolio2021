import { createGlobalStyle } from "styled-components/macro";
import bg from "./assets/background.svg";
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
  background-image: url(${bg});
  background-repeat: no-repeat;
  
 }
h1, h2, h3, h4{
    font-family: 'Roboto Mono', monospace;  
    /* text-align: center; */
    text-transform: uppercase;
}

h3 {margin-bottom:0.25rem}


`;

export default GlobalStyle;
