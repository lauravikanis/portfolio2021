import React from "react";
import Page from "./pages/Page";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components/macro";

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppDiv>
        <Page />
      </AppDiv>
    </>
  );
}

export default App;
