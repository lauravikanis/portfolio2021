import { createGlobalStyle } from "styled-components/macro";
import bg from "./assets/background.svg";
const GlobalStyle = createGlobalStyle`

:root {
  --titleFont: 'Roboto Mono', monospace;
  --textFont: "Roboto", sans-serif;
  --background: #FCFCFC;
  --text-color: #707070;
  --primary-color: #344e9d;
  --secondary-color: #ED7761;
  --action-color: #F5DF4D;
}
body {
  margin: 0 ;
  font-family: 'Roboto', sans-serif;
  background-color: var(--background);
  background-image: url(${bg});
  background-repeat: repeat-y;
  
 }
 
 p{
   font-size:1.2rem; 
   line-height:1.5; 
   }

h1, h2, h3, h4{
    font-family: 'Roboto Mono', monospace;  
    /* text-align: center; */
    text-transform: uppercase;
}

h1{
    font-size:500%
}
h2{
    font-size:250%
}


h3 {margin-bottom:0.25rem}

a {color:black;}
`;

export default GlobalStyle;
