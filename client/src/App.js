import "./App.css";
import React from "react";
import Page from "./pages/Page";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Page />
        <a href="/storybook">To Storybook</a>
      </div>
    </>
  );
}

export default App;
