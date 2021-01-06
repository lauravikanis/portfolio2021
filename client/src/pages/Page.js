import React from "react";
import Header from "../components/Header/Header";
import Menueitem from "../components/Menueitem/Menueitem";
import styled from "styled-components/macro";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  width: 90%;
`;

const Page = () => (
  <MainDiv>
    <Header />
    <Menueitem>
      <h2>About</h2>
    </Menueitem>
    <Menueitem>
      <h2>Skills</h2>
    </Menueitem>
    <Menueitem secondary>
      <h2>Kontakt</h2>
    </Menueitem>
    <Menueitem>
      <h2>Blog</h2>
    </Menueitem>
  </MainDiv>
);

export default Page;
