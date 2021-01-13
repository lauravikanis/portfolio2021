import React from "react";
import Header from "../components/Header/Header";
import Menueitem from "../components/Menueitem/Menueitem";
import styled from "styled-components/macro";
import About from "../components/Content/About";
import Contact from "../components/Content/Contact";
import Projects from "../components/Content/Projects";
import Skills from "../components/Content/Skills";
import Footer from "../components/Footer/Footer";
// import CV from "../components/Content/CV";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  width: 80%;
  background-color: var(--background);
`;

const Page = () => (
  <>
    <Header />
    <MainDiv>
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
      {/* <Menueitem>
        <h2>CV</h2>
      </Menueitem>
      <CV /> */}
      <Menueitem secondary>
        <h2>Contact</h2>
      </Menueitem>
      <Contact />
    </MainDiv>
    <Footer>
      <h5>- Laura Vikanis 2021 -</h5>
    </Footer>
  </>
);

export default Page;
