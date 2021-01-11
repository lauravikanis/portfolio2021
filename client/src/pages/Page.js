import React from "react";
import Header from "../components/Header/Header";
import Menueitem from "../components/Menueitem/Menueitem";
import styled from "styled-components/macro";
import About from "../components/Content/About";
import Contact from "../components/Content/Contact";
import Projects from "../components/Content/Projects";
import Skills from "../components/Content/Skills";
import Footer from "../components/Footer/Footer";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  width: 90%;
`;

const Page = () => (
  <>
    <MainDiv>
      <h1>Coming soon</h1>
      <Header />
      <Menueitem>
        <h2>About</h2>
      </Menueitem>
      <About />
      <Menueitem>
        <h2>Skills</h2>
      </Menueitem>
      <Skills />
      <Menueitem>
        <h2>Projects</h2>
      </Menueitem>
      <Projects />
      <Menueitem secondary>
        <h2>Contact</h2>
      </Menueitem>
      <Contact />
    </MainDiv>
    <Footer>
      <h5>Made by Laura Vikanis 2021</h5>
    </Footer>
  </>
);

export default Page;
